<?php

namespace app\Controllers;

use app\Controllers\Controller as BaseController;

class PaymentController extends BaseController
{
    public function __construct()
    {
        session_start(); // Bắt đầu session
    }

    // Đường dẫn MoMo API
    private $endpoint = "https://test-payment.momo.vn/v2/gateway/api/create";

    // Thông tin tài khoản MoMo
    private $partnerCode = "MOMOBKUN20180529";
    private $accessKey = "klm05TvNBzhg7h7j";
    private $secretKey = "at67qH6mk8w5Y1nAyMoYKMWACiEi2bsa";

    /**
     * Xử lý thanh toán qua MoMo
     *
     * @return array Thông tin phản hồi từ MoMo
     */
    public function processPayment($request)
    {
        $amount = (float)$request->get_param('amount');
        $orderInfo = $request->get_param('orderInfo') ?? 'MoMo Payment';
        $shippingInfo = $request->get_param('shippingInfo') ?? '';
        if (!empty($shippingInfo)) {
            // Giải mã JSON nếu cần
            $shippingInfoArray = $shippingInfo;

            // Lưu vào session
            $_SESSION['shippingInfo'] = $shippingInfoArray;
        }

        // Tạo mã đơn hàng và yêu cầu duy nhất
        $orderId = time(); // Mã đơn hàng duy nhất
        $requestId = time(); // Mã yêu cầu duy nhất
        $redirectUrl = home_url('checkout-result'); // URL chuyển hướng sau khi thanh toán
        //$ipnUrl = home_url('checkout-result'); // URL chuyển hướng sau khi thanh toán
        $ipnUrl = "http://localhost/WEB-XPEED-BE/wp-json/custom-api/v1/path-to-handle-ipn"; // URL nhận thông báo từ MoMo
        $extraData = ""; // Dữ liệu bổ sung nếu có
        $requestType = "payWithATM"; // payWithATM /  captureWallet
        // Tạo chữ ký (signature) cho yêu cầu
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
            'lang' => 'vi',
            'extraData' => $extraData,
            'requestType' => $requestType,
            'signature' => $signature
        );

        // Gửi yêu cầu POST tới API MoMo
        $result = json_decode($this->sendRequest($this->endpoint, json_encode($data)));

        return $result;
        // Chuyển hướng tới URL thanh toán nếu có kết quả thành công
        if ($result && isset($result['payUrl'])) {
            header('Location: ' . $result['payUrl']);
            exit; // Thoát khỏi script sau khi chuyển hướng
        }

        return $result; // Trả về kết quả nếu không chuyển hướng
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
}
