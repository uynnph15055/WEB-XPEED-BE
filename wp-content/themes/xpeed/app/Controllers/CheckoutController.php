<?php

namespace app\Controllers;

use app\Controllers\Controller as BaseController;
use Illuminate\Database\Capsule\Manager as DB;

class CheckoutController extends BaseController
{
    public function __construct()
    {
        session_start(); // Bắt đầu session
    }

    public function moveCartToOrder()
    {
        // Lấy dữ liệu từ session và cookie giỏ hàng
        $cart_data = array_merge(
            isset($_SESSION['cart']) ? $_SESSION['cart'] : [],
            isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : []
        );

        // Kiểm tra nếu giỏ hàng trống
        if (empty($cart_data)) {
            return false; // Trả về false nếu không có dữ liệu
        }

        // Sao chép dữ liệu giỏ hàng vào cookie order
        setcookie('order', json_encode($cart_data), time() + 3600, "/"); // Lưu 1 giờ

        // Xóa dữ liệu giỏ hàng trong session và cookie
        unset($_SESSION['cart']);
        setcookie('cart', '', time() - 3600, "/"); // Hết hạn cookie giỏ hàng

        return true; // Trả về true nếu thành công
    }

    public function getOrderHandler()
    {

        // Lấy dữ liệu từ cookie 'order'
        $orderData = isset($_COOKIE['order']) ? json_decode(stripslashes($_COOKIE['order']), true) : [];
        if (empty($orderData)) {
            return [];
        }

        $detailed_order = [];

        foreach ($orderData as $order_item) {
            $product_id = $order_item['product_id'];
            $attributes = $order_item['attributes'];
            $quantity = $order_item['quantity'];

            // Lấy sản phẩm chính và kiểm tra tính hợp lệ
            $product = DB::table('posts')
                ->where('ID', $product_id)
                ->where('post_type', 'product')
                ->where('post_status', 'publish')
                ->first();

            if (!$product) {
                continue;
            }

            // Lấy biến thể sản phẩm nếu có
            $matched_variation = DB::table('posts')
                ->where('post_parent', $product_id)
                ->where('post_type', 'product_variation')
                ->where('post_status', 'publish')
                ->get()
                ->first(function ($variation) use ($attributes) {
                    foreach ($attributes as $key => $value) {
                        $meta_value = DB::table('postmeta')
                            ->where('post_id', $variation->ID)
                            ->where('meta_key', 'attribute_' . $key)
                            ->value('meta_value');
                        if ($meta_value !== $value) return false;
                    }
                    return true;
                });

            // Lấy thông tin giá và số lượng kho của biến thể hoặc sản phẩm chính
            $variation_image = get_the_post_thumbnail_url($matched_variation->ID ?? $product_id);
            $price = $stock_quantity = null;
            $variation_title = $matched_variation->post_excerpt ?? 'Không tìm thấy biến thể phù hợp';

            if ($matched_variation) {
                $post_meta = DB::table('postmeta')->where('post_id', $matched_variation->ID)->get();
                $price = $post_meta->where('meta_key', '_price')->first()->meta_value ?? 0;
                $stock_quantity = $post_meta->where('meta_key', '_stock')->first()->meta_value ?? 0;
            }

            // Thêm thông tin vào mảng chi tiết đơn hàng
            $detailed_order[] = [
                'product_id' => $product_id,
                'product_name' => $product->post_title,
                'quantity' => $quantity,
                'variation_key' => array_keys($attributes)[0] ?? '',
                'variation_title' => $variation_title,
                'variation' => strtolower(explode(': ', $variation_title)[1] ?? $variation_title),
                'price' => (float)$price,
                'stock_quantity' => (int)$stock_quantity,
                'image' => $variation_image,
                'total' => $price * $quantity,
            ];
        }

        return $detailed_order;
    }

    public function handlePaymentSuccess($paymentData)
    {
        // Lấy thông tin giao hàng từ session
        $shippingInfo = $_SESSION['shippingInfo'] ?? [];
        if (empty($shippingInfo)) {
            return []; // Không có thông tin giao hàng
        }

        // Lấy dữ liệu từ cookie 'order'
        $orderData = isset($_COOKIE['order']) ? json_decode(stripslashes($_COOKIE['order']), true) : [];
        if (empty($orderData)) {
            return []; // Không có đơn hàng
        }

        // Tạo một đơn hàng mới
        $order = wc_create_order();

        // Duyệt qua dữ liệu đơn hàng và thêm sản phẩm vào đơn hàng
        foreach ($orderData as $item) {
            $product = wc_get_product($item['product_id']);
            if (!$product) continue; // Bỏ qua nếu sản phẩm không tồn tại

            // Kiểm tra sản phẩm có biến thể không
            if ($product->is_type('variable')) {
                $variation_id = $this->get_variation_id($item['product_id'], $item['attributes']);
                if ($variation_id) {
                    $order->add_product(wc_get_product($variation_id), $item['quantity']);
                }
            } else {
                $order->add_product($product, $item['quantity']);
            }
        }

        // Cập nhật thông tin địa chỉ giao hàng và thanh toán
        $this->updateOrderAddresses($order, $shippingInfo);

        // Lưu orderId vào đơn hàng
        $order->set_meta_data('orderId', $paymentData['orderId']); // Lưu orderId vào meta data của đơn hàng

        // Cập nhật thông tin đơn hàng
        $order->set_payment_method('momo'); // Thay thế bằng phương thức thanh toán thực tế của bạn
        $order->set_payment_method_title('MoMo Payment');
        $order->update_status('completed'); // Thiết lập trạng thái đơn hàng

        // Xóa cookie 'order' sau khi đã xử lý
        setcookie('order', '', time() - 3600, "/"); // Hết hạn cookie 'order'

        return $order;
    }

    private function updateOrderAddresses($order, $shippingInfo)
    {
        // Cập nhật thông tin địa chỉ thanh toán
        $order->set_billing_first_name($shippingInfo['name']);
        $order->set_billing_last_name('');
        $order->set_billing_address_1($shippingInfo['address']);
        $order->set_billing_city($shippingInfo['district']);
        $order->set_billing_postcode($shippingInfo['zipCode']);
        $order->set_billing_phone($shippingInfo['phone']);
        $order->set_billing_state($shippingInfo['province']);
        $order->update_meta_data('apartment', $shippingInfo['apartment']); // Lưu thông tin căn hộ

        // Cập nhật thông tin địa chỉ giao hàng
        $order->set_shipping_first_name($shippingInfo['name']);
        $order->set_shipping_last_name('');
        $order->set_shipping_address_1($shippingInfo['address']);
        $order->set_shipping_city($shippingInfo['district']);
        $order->set_shipping_postcode($shippingInfo['zipCode']);
        $order->set_shipping_phone($shippingInfo['phone']);
        $order->set_shipping_state($shippingInfo['province']);
    }

    private function get_variation_id($product_id, $attributes)
    {
        // Tìm biến thể sản phẩm dựa trên thuộc tính
        $args = [
            'post_parent' => $product_id,
            'post_type'   => 'product_variation',
            'post_status' => 'publish',
            'numberposts' => -1,
        ];

        $variations = get_posts($args);
        foreach ($variations as $variation) {
            $match = true;

            foreach ($attributes as $key => $value) {
                $meta_value = get_post_meta($variation->ID, 'attribute_' . $key, true);
                if ($meta_value !== $value) {
                    $match = false;
                    break;
                }
            }

            if ($match) {
                return $variation->ID; // Trả về ID biến thể nếu tìm thấy
            }
        }

        return null; // Trả về null nếu không tìm thấy biến thể
    }

}
