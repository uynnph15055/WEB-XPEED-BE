<?php

namespace app\Controllers;

use app\Controllers\Controller as BaseController;
use Illuminate\Database\Capsule\Manager as DB;
use Illuminate\Support\Str;
use app\Controllers\CartController;
use app\Controllers\PaymentController;

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

        if (!empty($cart)) {
            $orderId = $this->moveCartToOrder($request, 'id');
            return $this->success(data: ['paymentUrl' => home_url('/payment') . '?token=' . $orderId]);
        }

        return null; // Trả về null nếu không tìm thấy biến thể
    }

    public function createOrder($request)
    {
        try {
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

                        wc_update_product_stock($variation_id, $stock_quantity - $quantity);
                    }
                } else {
                    $order->add_product($product, $quantity);

                    // Giảm số lượng sản phẩm trong kho
                    wc_update_product_stock($product->get_id(), $stock_quantity - $quantity);
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

            // Lên lịch tự động hủy đơn hàng nếu không thanh toán sau 1 h (hoàn lại kho)
            wp_schedule_single_event(time() + 3600, 'cancel_pending_order', ['order_id' => $order->get_id()]);
            unset($_SESSION['cart']);
            setcookie('cart', '', time() - 3600, "/"); // Xóa cookie giỏ hàng nếu vẫn còn
            return [
                'success' => true,
                'message' => 'Order created successfully.',
                'orderId' => $order->get_id(),
            ];
        } catch (Exception $e) {
            // Ghi log lỗi
            error_log('Error creating order: ' . $e->getMessage());

            // Trả về lỗi
            return [
                'success' => false,
                'message' => 'An error occurred while creating the order: ' . $e->getMessage(),
            ];
        }
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
        $orderId = $userId . '_' . time();
        $orders[$orderId] = $cart_data;

        // Sao chép dữ liệu giỏ hàng vào session
        $_SESSION['order'] = $orders;
        // Xóa dữ liệu giỏ hàng trong session và cookie
        unset($_SESSION['cart']);
        setcookie('cart', '', time() - 3600, "/"); // Xóa cookie giỏ hàng nếu vẫn còn
        if ($type == 'json') {
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

    function getOrderHandler($orderId, $userId = null)
    {
        try {
            // Lấy thông tin đơn hàng từ ID
            $order = wc_get_order($orderId);

            if (!$order) {
                return [
                    'success' => false,
                    'message' => "Không tìm thấy đơn hàng với ID: {$orderId}",
                ];
            }

            // Kiểm tra trạng thái đơn hàng
            if ($order->get_status() !== 'pending') {
                return [
                    'success' => false,
                    'message' => "Đơn hàng không ở trạng thái chưa thanh toán.",
                ];
            }

            // Lấy ID người tạo đơn hàng
            $orderUserId = $order->get_user_id();

            // Kiểm tra người tạo đơn hàng
            if ($userId && $userId !== $orderUserId) {
                return [
                    'success' => false,
                    'message' => "Đơn hàng không thuộc về người dùng hiện tại.",
                ];
            }

            // Lấy thông tin cơ bản của đơn hàng
            $orderData = [
                'order_id' => $order->get_id(),
                'order_status' => $order->get_status(),
                'order_date' => $order->get_date_created() ? $order->get_date_created()->date('Y-m-d H:i:s') : null,
                'total' => $order->get_total(),
                'payment_method' => $order->get_payment_method_title(),
            ];

            // Lấy thông tin sản phẩm trong đơn hàng
            $orderItems = [];
            $subTotal = 0; // Tổng tiền sản phẩm

            foreach ($order->get_items() as $itemId => $item) {
                $product = $item->get_product();

                if ($product) {
                    $itemTotal = $item->get_total(); // Tổng tiền cho mục hàng này
                    $subTotal += $itemTotal;

                    $orderItems[] = [
                        'product_id' => $product->get_id(),
                        'name' => $product->get_name(), // Tên sản phẩm chính (bao gồm tên biến thể nếu có)
                        'slug' => $product->get_slug(),
                        'image' => wp_get_attachment_url($product->get_image_id()),
                        'price' => wc_get_price_to_display($product),
                        'quantity' => $item->get_quantity(),
                        'total' => $itemTotal,
                        'stock_quantity' => $product->get_stock_quantity()
                    ];
                }
            }

            // Thêm thông tin phí giao hàng (nếu có)
            $shippingTotal = $order->get_shipping_total();
            $grandTotal = $subTotal + $shippingTotal;

            $orderData['items'] = $orderItems;
            $orderData['sub_total'] = $subTotal;
            $orderData['shipping'] = [
                'total' => $shippingTotal,
                'method_title' => $order->get_shipping_method(),
            ];
            $orderData['grand_total'] = $grandTotal; // Tổng tiền thanh toán (bao gồm phí vận chuyển)

            return [
                'success' => true,
                'order' => $orderData,
            ];
        } catch (Exception $e) {
            // Ghi log lỗi (nếu cần)
            error_log('Error fetching order details: ' . $e->getMessage());

            return [
                'success' => false,
                'message' => 'Có lỗi xảy ra khi lấy thông tin đơn hàng: ' . $e->getMessage(),
            ];
        }
    }


    public function handlePaymentSuccess($orderId, $transaction)
    {
        // Lấy thông tin đơn hàng từ ID
        $orderId = strtok($orderId, '_');
        $order = wc_get_order($orderId);
        if (!$order) {
            return false; // Không tìm thấy đơn hàng
        }

        // Lấy thông tin giao hàng từ session (hoặc từ nguồn khác nếu cần)
        $shippingInfo = $_SESSION['shippingInfo'] ?? null;
        if (!$shippingInfo) {
            return false; // Không có thông tin giao hàng
        }
        if ($order->get_status() !== 'pending' || $order->get_customer_id() !== $orderId) {
            return false; // Không có thông tin giao hàng
        }
        // Cập nhật thông tin địa chỉ giao hàng và thanh toán
        $this->updateOrderAddresses($order, $shippingInfo);

        // Tính toán tổng tiền đơn hàng và phí vận chuyển
        $totalAmount = $order->get_subtotal();
        $shippingFee = 50000; // Phí vận chuyển cố định

        // Kiểm tra số tiền giao dịch
        $transactionAmount = (float)$transaction["data"]["amount"];
        if ($transactionAmount < ($totalAmount + $shippingFee)) {
            return false; // Số tiền giao dịch không đủ
        }

        // Thêm phí vận chuyển vào đơn hàng
        $this->addShippingFee($order, $shippingFee);

        // Cập nhật tổng tiền đơn hàng (tổng tiền sản phẩm + phí vận chuyển)
        $order->set_total($totalAmount + $shippingFee);

        // Cập nhật trạng thái và phương thức thanh toán
        $order->set_payment_method('momo'); // Thay thế bằng phương thức thanh toán thực tế của bạn
        $order->set_payment_method_title('MoMo Payment');
        $order->update_status('processing');

        // Lưu đơn hàng
        $order->save();

        return $order;
    }

    /**
     * Hàm thêm phí vận chuyển vào đơn hàng
     */
    private function addShippingFee($order, $shippingFee)
    {
        // Kiểm tra nếu phí vận chuyển đã được thêm vào đơn hàng
        $existingFees = $order->get_fees();
        foreach ($existingFees as $fee) {
            if ($fee->get_name() === 'Phí vận chuyển') {
                return; // Nếu đã có phí vận chuyển, không cần thêm lại
            }
        }

        // Thêm phí vận chuyển nếu chưa có
        $itemFee = new \WC_Order_Item_Fee();
        $itemFee->set_name('Phí vận chuyển');
        $itemFee->set_amount($shippingFee);
        $itemFee->set_total($shippingFee);
        $order->add_item($itemFee);
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
        $paymentController = new PaymentController();
        // Lưu log vào file log trong thư mục wp-content
        $logFile = WP_CONTENT_DIR . '/momo_ipn_log.txt'; // Đường dẫn đến file log


        // Kiểm tra kết quả thanh toán

        if ($result && isset($result['orderId']) && isset($result['resultCode']) && $result['resultCode'] != '0') {
            $transaction = $paymentController->getTransactionStatus($result["orderId"], $result["requestId"]);

            if ($transaction["status"] == 'error') {

                $result = $this->handlePaymentSuccess($result['orderId'], $transaction);
                $paymentsuccess = $result != false ? "true" : "false";
            } else {
                $paymentsuccess = false;
            }

            // Chuyển hướng tới URL redirectUrl

            header('Location: ' . home_url('/') . '?paymentsuccess=' . $paymentsuccess);
            exit;
        } else {
            header('Location: ' . home_url('cart'));
        }
    }
}
