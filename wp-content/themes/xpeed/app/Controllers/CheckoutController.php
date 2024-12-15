<?php

namespace app\Controllers;

use app\Controllers\Controller as BaseController;
use Illuminate\Database\Capsule\Manager as DB;
use Illuminate\Support\Str;
use app\Controllers\CartController;

class CheckoutController extends BaseController
{
    public function __construct()
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start(); // Chỉ khởi động session nếu chưa khởi động
        }
    }

    public function addOrder($request)
    {
        $cart_items = $request->get_params();

         $cart = new CartController();
        $cart = $cart->progressUpdateCartItem([$cart_items[0]]);

        if(!empty($cart)){
           $orderId = $this->moveCartToOrder($request, 'id');
            return $this->success(data: ['paymentUrl' =>  home_url('/payment') . '?token='.$orderId]);
        }

        return null; // Trả về null nếu không tìm thấy biến thể
    }
    public function createOrder($request)
    {
        // Lấy thông tin giao hàng từ session
        $userId = $request->get_param('userId') ?: get_current_user_id();
        if (!$current_user = get_user_by('id', $userId)) {
            return $this->fail('Người dùng chưa đăng nhập');
        }

        // Lấy dữ liệu từ cookie 'order'
        $orderData = isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : [];
        if (empty($orderData)) {
            return $this->fail('Giỏ hàng trống, không thể tạo đơn hàng');
        }

        // Tạo một đơn hàng mới
        $order = wc_create_order();

        // Duyệt qua dữ liệu đơn hàng và kiểm tra tồn kho
        foreach ($orderData as $item) {
            $product = wc_get_product($item['product_id']);
            if (!$product) {
                return $this->fail("Sản phẩm không tồn tại: ID {$item['product_id']}");
            }

            $quantity = $item['quantity'] ?? 0;

            // Kiểm tra số lượng tồn kho
            $stock_quantity = $product->get_stock_quantity();
            if ($stock_quantity === null) {
                // Sản phẩm không quản lý kho
                continue;
            }

            if ($quantity > $stock_quantity) {
                return $this->fail("Sản phẩm '{$product->get_name()}' chỉ còn {$stock_quantity} chiếc trong kho.");
            }
        }

        // Nếu kiểm tra tồn kho thành công, thêm sản phẩm vào đơn hàng và trừ kho
        foreach ($orderData as $item) {
            $product = wc_get_product($item['product_id']);
            if (!$product) continue; // Bỏ qua nếu sản phẩm không tồn tại

            $quantity = $item['quantity'] ?? 0;

            // Kiểm tra sản phẩm có biến thể không
            if ($product->is_type('variable')) {
                $variation_id = $this->get_variation_id($item['product_id'], $item['attributes']);
                if ($variation_id) {
                    $order->add_product(wc_get_product($variation_id), $quantity);
                    // Giảm số lượng sản phẩm trong kho

                    wc_update_product_stock($variation_id, $stock_quantity- $quantity);
                }
            } else {
                $order->add_product($product, $quantity);

                // Giảm số lượng sản phẩm trong kho
                wc_update_product_stock($product->get_id(), $stock_quantity- $quantity);
            }
        }

        // Cập nhật thông tin địa chỉ giao hàng và thanh toán
        $order->set_billing_first_name('');
        $order->set_billing_last_name($current_user->display_name ?? null);
        $order->set_billing_address_1('');
        $order->set_billing_city('');
        $order->set_billing_postcode('');
        $order->set_billing_phone('');
        $order->set_billing_state('');
        $order->update_meta_data('apartment', ''); // Lưu thông tin căn hộ

        // Cập nhật thông tin địa chỉ giao hàng
        $order->set_shipping_first_name('');
        $order->set_shipping_last_name($current_user->display_name ?? null);
        $order->set_shipping_address_1('');
        $order->set_shipping_city('');
        $order->set_shipping_postcode('');
        $order->set_shipping_phone('');
        $order->set_shipping_state('');

        // Đặt trạng thái đơn hàng thành "pending"
        $order->update_status('pending', 'Order created and waiting for payment.');

        // Lưu đơn hàng
        $order->save();

        // Lên lịch tự động hủy đơn hàng nếu không thanh toán sau 1 phút (hoàn lại kho)
        wp_schedule_single_event(time() + 60, 'cancel_pending_order', ['order_id' => $order->get_id()]);

        return [
            'success' => true,
            'message' => 'Order created successfully.',
            'order_id' => $order->get_id(),
        ];
    }



    public function moveCartToOrder($request, $type = 'json')
    {
        // Lấy dữ liệu từ session và cookie giỏ hàng
        $cart_data = (isset($_SESSION['cart']) ? $_SESSION['cart'] : [])
            + (isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : []);

        // Kiểm tra nếu giỏ hàng trống
        if (empty($cart_data)) {
            return $this->fail('Không có sản phẩm');
        }

        // Lấy userId từ tham số trong request, nếu không có thì dùng get_current_user_id()
        $userId = $request->get_param('userId') ?: get_current_user_id();
        if (!$userId) {
            return $this->fail('Người dùng chưa đăng nhập');
        }

        foreach ($cart_data as $item) {
            $product_id = $item['product_id'];
            $product = wc_get_product($product_id);

            if (empty($product)) {
                return $this->fail('Không tìm thấy sản phẩm');
            }

            // Kiểm tra số lượng tồn kho
            $stock_quantity = $product->get_stock_quantity();

            if ($item['quantity'] > $stock_quantity) {
                return $this->fail('Số lượng yêu cầu vượt quá số lượng còn lại trong kho.');
            }
        }

        // Tạo ID đơn hàng ngẫu nhiên
        $orderId = $userId.'_'.time();
        $orders[$orderId] = $cart_data;

        // Sao chép dữ liệu giỏ hàng vào session
        $_SESSION['order'] = $orders;
        // Xóa dữ liệu giỏ hàng trong session và cookie
        unset($_SESSION['cart']);
        setcookie('cart', '', time() - 3600, "/"); // Xóa cookie giỏ hàng nếu vẫn còn
        if($type == 'json'){
            return $this->success(data: ['orderId' => $orderId]);
        }
        return $orderId;
    }

    public function getOrderTotal($orderId)
    {
        $orderData = isset($_SESSION['order']) ? $_SESSION['order'] : [];

        // Kiểm tra dữ liệu đơn hàng
        if (empty($orderData) || empty($orderData[$orderId])) {
            return 0;
        }

        $totalOrderPrice = 0;

        // Duyệt qua tất cả các sản phẩm trong đơn hàng
        foreach ($orderData[$orderId] as $key => $item) {
            // Lấy product_id và số lượng
            $product_id = $item['product_id'];
            $quantity = $item['quantity'];

            // Lấy thông tin sản phẩm từ WooCommerce
            $product = wc_get_product($product_id);

            if ($product) {
                // Lấy giá của sản phẩm
                $price = $product->get_price();
                // Tính tổng tiền của sản phẩm (giá x số lượng)
                $totalOrderPrice += $price * $quantity;
            }
        }

        return $totalOrderPrice;
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
        // Lấy thông tin giao hàng và đơn hàng từ session
        $shippingInfo = $_SESSION['shippingInfo'] ?? [];
        $orderData = $_SESSION['order'] ?? [];

        if (empty($shippingInfo) || empty($orderData)) return false;

        // Kiểm tra định dạng orderId và lấy thông tin đơn hàng
        $orderIdParts = explode('_', $orderId);
        if (count($orderIdParts) !== 3 || !isset($orderData[$orderIdParts[0] . '_' . $orderIdParts[1]])) {
            return false;
        }

        // Lấy thông tin người dùng
        $userId = $orderIdParts[0];
        $customer = new \WP_User($userId);
        if (!$customer->ID) return false;

        // Tạo đơn hàng mới và gán thông tin khách hàng
        $order = wc_create_order();
        $order->set_customer_id($userId);

        // Duyệt qua dữ liệu đơn hàng và thêm sản phẩm vào đơn hàng
        foreach ($orderData[$orderIdParts[0] . '_' . $orderIdParts[1]] as $item) {
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
        $order->update_meta_data('orderId', $orderId);

        // Thêm phí vận chuyển vào đơn hàng (phí cố định 50,000 VND)
        $shipping_fee = 50000; // Phí vận chuyển
        $item = new \WC_Order_Item_Fee();
        $item->set_name('Phí vận chuyển');
        $item->set_amount($shipping_fee);
        $item->set_total($shipping_fee);
        $order->add_item($item);

        // Tính toán tổng tiền của đơn hàng
        $order->calculate_totals();

        // Cập nhật thông tin đơn hàng
        $order->set_payment_method('momo'); // Thay thế bằng phương thức thanh toán thực tế của bạn
        $order->set_payment_method_title('MoMo Payment');
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

        // Kiểm tra kết quả thanh toán

        if ($result && isset($result['orderId']) && isset($result['resultCode']) && $result['resultCode'] == '0') {

            $result = $this->handlePaymentSuccess($result['orderId']);
            // Chuyển hướng tới URL redirectUrl
            $paymentsuccess =  $result != false ? "true" : "false";
            header('Location: ' . home_url('/') . '?paymentsuccess='.$paymentsuccess);
            exit;
        } else {
            header('Location: ' . home_url('cart'));
        }
    }
}
