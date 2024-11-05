<?php

namespace app\Controllers;

use app\Controllers\Controller as BaseController;
use Illuminate\Database\Capsule\Manager as DB;
use Illuminate\Support\Str;

class CheckoutController extends BaseController
{
    public function __construct()
    {
        session_start(); // Bắt đầu session
    }

    public function moveCartToOrder()
    {
        // Lấy dữ liệu từ session và cookie giỏ hàng
        $cart_data = (isset($_SESSION['cart']) ? $_SESSION['cart'] : [])
            + (isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : []);


        // Kiểm tra nếu giỏ hàng trống
        if (empty($cart_data)) {
            return $this->fail('Không có sản phẩm');
        }

        foreach ($cart_data as $item) {
            $product_id = $item['product_id'];
            $product = wc_get_product($product_id);

            if (!$product) {
                return $this->fail('Không tìm thấy sản phẩm');
            }

            // Kiểm tra số lượng tồn kho
            $stock_quantity = $product->get_stock_quantity();

            if ($item['quantity'] > $stock_quantity) {
                return $this->fail('Số lượng yêu cầu vượt quá số lượng còn lại trong kho.');
            }
        }

        // Tạo ID đơn hàng ngẫu nhiên
        $orderId = bin2hex(random_bytes(32));
        $orders[$orderId] = $cart_data;

        // Sao chép dữ liệu giỏ hàng vào session
        $_SESSION['order'] = $orders;
        // Xóa dữ liệu giỏ hàng trong session và cookie
        unset($_SESSION['cart']);
        setcookie('cart', '', time() - 3600, "/"); // Xóa cookie giỏ hàng nếu vẫn còn

        return $this->success(data: ['orderId' => $orderId]);
    }

    public function getOrderHandler($orderId)
    {
        $detailed_order = [];
        // Lấy dữ liệu từ cookie 'order'
        $orderData = isset($_SESSION['order']) ? $_SESSION['order'] : [];

        if (empty($orderData) || empty($orderData[$orderId])) {
            header('Location: ' . home_url('cart'));
        }

        foreach ($orderData[$orderId] as $key => $item) {
            // Lấy product_id và variation_key
            $product_id = $item['product_id'];
            $quantity = $item['quantity'];

            // Lấy thông tin sản phẩm
            $product = wc_get_product($product_id);

            if ($product) {
                // Lấy thông tin biến thể nếu có
                $variation_key = $key;
                $attributes = $data[$variation_key]["attributes"] ?? [];
                $variation_title = '';
                $attributeKey = $attributeValue = '';

                // Nếu có thuộc tính biến thể, lấy thông tin từ product
                if (!empty($attributes)) {
                    foreach ($attributes as $attr_key => $attr_value) {
                        $variation_title .= ucfirst($attr_key) . ': ' . $attr_value . ', ';
                        $attributeValue = $attr_value;
                        $attributeKey = $attr_key;

                    }
                    $variation_title = rtrim($variation_title, ', '); // Bỏ dấu phẩy cuối
                }

                // Lấy thông tin giá
                $price = $product->get_price();
                $stock_quantity = $product->get_stock_quantity();
                $image = wp_get_attachment_url($product->get_image_id());
                $total = $price * $quantity;

                // Thêm thông tin sản phẩm vào mảng giỏ hàng
                $detailed_order[] = [
                    'product_id' => $product_id,
                    'product_name' => $product->get_name(),
                    'quantity' => $quantity,
                    'attribute_key' => $attributeKey,
                    'variation_title' => $variation_title,
                    'attribute' => $attributeValue,
                    'price' => $price,
                    'stock_quantity' => $stock_quantity,
                    'image' => $image,
                    'total' => $total,
                ];

            }
        }
        return $detailed_order;
    }

    public function handlePaymentSuccess($orderId)
    {
        // Lấy thông tin giao hàng từ session
        $shippingInfo = $_SESSION['shippingInfo'] ?? [];
        if (empty($shippingInfo)) {
            return false; // Không có thông tin giao hàng
        }

        // Lấy dữ liệu từ session 'order'
        $orderData = $_SESSION['order'] ?? [];
        if (empty($orderData) || !isset($orderData[$orderId])) {
            return false; // Không có đơn hàng hoặc orderId không tồn tại
        }

        // Tạo một đơn hàng mới
        $order = wc_create_order();

        // Duyệt qua dữ liệu đơn hàng và thêm sản phẩm vào đơn hàng
        foreach ($orderData[$orderId] as $item) {
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
        $order->update_meta_data('orderId', $orderId); // Lưu orderId vào meta data của đơn hàng

        // Cập nhật thông tin đơn hàng
        $order->set_payment_method('momo'); // Thay thế bằng phương thức thanh toán thực tế của bạn
        $order->set_payment_method_title('MoMo Payment');

        // Tính toán lại tổng giá trị cho đơn hàng
        $order->calculate_totals();

        // Cập nhật trạng thái đơn hàng thành 'completed'
        $order->update_status('processing');

        // Xóa đơn hàng khỏi session
        unset($orderData[$orderId]);
        $_SESSION['order'] = $orderData; // Cập nhật lại session

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
            'post_type' => 'product_variation',
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

    /**
     * Xử lý thông báo IPN từ MoMo
     */
    public function handleIPN()
    {
        $result = $_GET;
        // Lưu log vào file log trong thư mục wp-content
        $logFile = WP_CONTENT_DIR . '/momo_ipn_log.txt'; // Đường dẫn đến file log

        // Ghi log với tên hàm và dữ liệu
//        $logMessage = date('Y-m-d H:i:s') . " - " . __FUNCTION__ . " - " . json_encode($result) . PHP_EOL;
//        file_put_contents($logFile, $logMessage, FILE_APPEND);

        // Kiểm tra kết quả thanh toán

        if ($result && isset($result['orderId']) && isset($result['resultCode']) && $result['resultCode'] == '0') {
            $this->handlePaymentSuccess($result['orderId']);
            // Chuyển hướng tới URL redirectUrl
            header('Location: ' . home_url('checkout-result'));
            exit;
        } else {
            header('Location: ' . home_url('cart'));
        }
    }
}
