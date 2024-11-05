<?php

/**
 * Template Name: Checkout-result
 * Author: Phuongdd
 */

use app\Controllers\CheckoutController;

$checkoutController = new CheckoutController();
get_header();
// Lấy tham số từ URL
$paymentData = [
    'partnerCode' => isset($_GET['partnerCode']) ? sanitize_text_field($_GET['partnerCode']) : '',
    'orderId' => isset($_GET['orderId']) ? sanitize_text_field($_GET['orderId']) : '',
    'requestId' => isset($_GET['requestId']) ? sanitize_text_field($_GET['requestId']) : '',
    'amount' => isset($_GET['amount']) ? sanitize_text_field($_GET['amount']) : '',
    'orderInfo' => isset($_GET['orderInfo']) ? sanitize_text_field($_GET['orderInfo']) : '',
    'orderType' => isset($_GET['orderType']) ? sanitize_text_field($_GET['orderType']) : '',
    'transId' => isset($_GET['transId']) ? sanitize_text_field($_GET['transId']) : '',
    'resultCode' => isset($_GET['resultCode']) ? sanitize_text_field($_GET['resultCode']) : '',
    'message' => isset($_GET['message']) ? sanitize_text_field($_GET['message']) : '',
    'payType' => isset($_GET['payType']) ? sanitize_text_field($_GET['payType']) : '',
    'responseTime' => isset($_GET['responseTime']) ? sanitize_text_field($_GET['responseTime']) : '',
    'extraData' => isset($_GET['extraData']) ? sanitize_text_field($_GET['extraData']) : '',
    'signature' => isset($_GET['signature']) ? sanitize_text_field($_GET['signature']) : '',
];

// Kiểm tra nếu thanh toán thành công
if ($paymentData['resultCode'] == '0') {
    // Gọi hàm xử lý đơn hàng
    $order = $checkoutController->handlePaymentSuccess($paymentData['orderId']);
    if ($order == false) {

    }


    if ( $order !== false) {
        // Hiển thị thông báo thành công
        echo '<h1>Thanh toán thành công!</h1>';
        echo '<p>Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đang được xử lý.</p>';
        echo '<p>Thông tin đơn hàng:</p>';
        echo '<ul>';
        echo '<li>Order ID: ' . esc_html($paymentData['orderId']) . '</li>';
        echo '<li>Amount: ' . esc_html($paymentData['amount']) . ' VND</li>';
        echo '<li>Order Info: ' . esc_html($paymentData['orderInfo']) . '</li>';
        echo '<li>Transaction ID: ' . esc_html($paymentData['transId']) . '</li>';
        echo '<li>Message: ' . esc_html($paymentData['message']) . '</li>';
        echo '</ul>';
    } else {
        // Hiển thị thông báo lỗi
        echo '<h1>Lỗi khi xử lý đơn hàng</h1>';
    }
} else {
    // Nếu không thanh toán thành công, hiển thị thông báo lỗi
    echo '<h1>Lỗi thanh toán</h1>';
    echo '<p>' . esc_html($paymentData['message']) . '</p>';
}
?>

<?php
get_footer();
?>