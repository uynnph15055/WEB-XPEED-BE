<?php

namespace app\Controllers;

use app\Controllers\Controller as BaseController;

class PaymentController extends BaseController
{
    public $currentLanguage = '';

    public function __construct()
    {
        check_user_login_and_redirect();
        if (session_status() === PHP_SESSION_NONE) {
            session_start(); // Chỉ khởi động session nếu chưa khởi động
        }

        $this->currentLanguage = strtok(get_locale() ?? 'en', '_');
    }

    // Đường dẫn MoMo API
    private $endpoint = "https://test-payment.momo.vn/v2/gateway/api/create";

    // Thông tin tài khoản MoMo
    private $partnerCode = "MOMOBKUN20180529";
    private $accessKey = "klm05TvNBzhg7h7j";
    private $secretKey = "at67qH6mk8w5Y1nAyMoYKMWACiEi2bsa";
    const STATUS_SUCCESSFUL = 0;

    /**
     * Xử lý thanh toán qua MoMo
     *
     * @return array Thông tin phản hồi từ MoMo
     */
    public function processPayment($request)
    {
        $orderInfo = $request->get_param('orderInfo') ?? 'MoMo Payment';
        $shippingInfo = $request->get_param('shippingInfo') ?? '';
        $orderId = $request->get_param('orderId') ?? 0;

        if (!$orderId) {
            return $this->fail('Invalid order ID.');
        }

        // Get the order object
        $order = wc_get_order($orderId);
        if (!$order) {
            return $this->fail('Order not found.');
        }

        // Check order status and creator
        $currentUserId = get_current_user_id();
        if ($order->get_status() !== 'pending' || $order->get_customer_id() !== $currentUserId) {
            return $this->fail('You are not authorized to process this order, or the order is not in pending payment status.');
        }

        // Calculate the subtotal of items
        $amount = 0;

        foreach ($order->get_items() as $item) {
            $amount += (float)$item->get_subtotal();

        }
        if (empty($amount) || empty($shippingInfo) || empty($orderId)) {
            return $this->fail('Thông tin không hợp lệ .');
        }
        $amount += 50000;
        if (10000 > (float)$amount) {
            return $this->fail('Số tiền thanh toán tối thiểu 10,000 đ .');
        } else if ((float)$amount > 50000000) {
            return $this->fail('Số tiền thanh toán tối đa 50,000,000 đ .');
        }

        if (!empty($shippingInfo)) {
            // Giải mã JSON nếu cần
            $shippingInfoArray = $shippingInfo;

            // Lưu vào session
            $_SESSION['shippingInfo'] = $shippingInfoArray;
        }

        // Tạo mã đơn hàng và yêu cầu duy nhất

        $requestId = time(); // Mã yêu cầu duy nhất
        $redirectUrl = home_url('wp-json/custom-api/v1/path-to-handle-ipn'); // URL chuyển hướng sau khi thanh toán
        //  $ipnUrl = home_url('checkout-result'); // URL chuyển hướng sau khi thanh toán
        $ipnUrl = home_url('wp-json/custom-api/v1/path-to-handle-ipn'); // URL nhận thông báo từ MoMo
        $extraData = ""; // Dữ liệu bổ sung nếu có
        $requestType = "payWithATM"; // payWithATM /  captureWallet
        // Tạo chữ ký (signature) cho yêu cầu
        $orderId = $orderId . '_' . time();
        $rawHash = "accessKey=" . $this->accessKey .
            "&amount=" . $amount .
            "&extraData=" . $extraData .
            "&ipnUrl=" . $ipnUrl .
            "&orderId=" . $orderId .
            "&orderInfo=" . $orderInfo .
            "&partnerCode=" . $this->partnerCode .
            "&redirectUrl=" . $redirectUrl .
            "&requestId=" . $requestId .
            "&requestType=" . $requestType;

        $signature = hash_hmac("sha256", $rawHash, $this->secretKey);

        // Tạo dữ liệu yêu cầu gửi tới MoMo
        $data = array(
            'partnerCode' => $this->partnerCode,
            'partnerName' => "Test",
            "storeId" => "MomoTestStore",
            'requestId' => $requestId,
            'amount' => $amount,
            'orderId' => $orderId,
            'orderInfo' => $orderInfo,
            'redirectUrl' => $redirectUrl,
            'ipnUrl' => $ipnUrl,
            'lang' => $this->currentLanguage,
            'extraData' => $extraData,
            'requestType' => $requestType,
            'signature' => $signature
        );

        // Gửi yêu cầu POST tới API MoMo
        $result = json_decode($this->sendRequest($this->endpoint, json_encode($data)));


        if ($result->resultCode == self::STATUS_SUCCESSFUL) {
            return $this->success(data: $result);
        }

        return $this->fail($result->message);
    }

    /**
     * Hàm gửi yêu cầu POST
     *
     * @param string $url URL của API
     * @param array|string $data Dữ liệu gửi kèm
     * @return array|bool Kết quả phản hồi từ API
     */
    private function sendRequest($url, $data)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

        $response = curl_exec($ch);
        $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($statusCode == 200) {
            return $response;
        } else {
            return false;
        }
    }


    /**
     * Kiểm tra trạng thái giao dịch trên MoMo
     *
     * @param string $orderId Mã đơn hàng
     * @param string $requestId Mã yêu cầu duy nhất
     * @return array|bool Thông tin trạng thái giao dịch hoặc thất bại
     */
    public function getTransactionStatus($orderId, $requestId)
    {
        // Đường dẫn kiểm tra trạng thái giao dịch
        $statusEndpoint = "https://test-payment.momo.vn/v2/gateway/api/query";

        // Tạo chữ ký (signature) cho yêu cầu
        $rawHash = "accessKey=" . $this->accessKey .
            "&orderId=" . $orderId .
            "&partnerCode=" . $this->partnerCode .
            "&requestId=" . $requestId;

        $signature = hash_hmac("sha256", $rawHash, $this->secretKey);

        // Dữ liệu gửi đến API
        $data = [
            "partnerCode" => $this->partnerCode,
            "orderId" => $orderId,
            "requestId" => $requestId,
            "signature" => $signature,
            'lang' => $this->currentLanguage,
        ];

        // Gửi yêu cầu POST tới API MoMo
        $response = json_decode($this->sendRequest($statusEndpoint, json_encode($data)), true);

        // Kiểm tra kết quả trả về
        if ($response && isset($response['resultCode'])) {
            if ($response['resultCode'] == self::STATUS_SUCCESSFUL) {
                return [
                    'status' => 'success',
                    'data' => $response ?? []
                ];
            } else {
                return [
                    'status' => 'error',
                    'data' => $response ?? []
                ];
            }
        }

        return [
            'status' => 'error',
            'message' => 'Failed to get transaction status.'
        ];
    }


    public function createOrder()
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

        // Cập nhật thông tin đơn hàng
        $order->set_payment_method('momo'); // Thay thế bằng phương thức thanh toán thực tế của bạn
        $order->set_payment_method_title('MoMo Payment');
        $order->update_status('completed'); // Thiết lập trạng thái đơn hàng

        // Xóa cookie 'order' sau khi đã xử lý
        setcookie('order', '', time() - 3600, "/"); // Hết hạn cookie 'order'

        return $order;
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

        return $totalOrderPrice + 50000;
    }

}
