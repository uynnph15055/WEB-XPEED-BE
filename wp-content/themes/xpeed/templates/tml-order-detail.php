<?php

/**
 * Template Name: Order_detail
 * Author: Phuongdd
 */

use app\Controllers\OrderController;

check_user_login_and_redirect();
$orderId = isset($_GET['orderId']) ? intval($_GET['orderId']) : 0;

$orderController = new OrderController();
$orderDetails  = $orderController->getOrderDetail($orderId);

get_header();

include plugin_dir_path(__FILE__) . 'sideBar.php';
?>
    <div class="account__content">
        <div class="content__title">Invoice Detail</div>
        <div class="invoice-wrapper invoice">
            <div class="invoice__container">
                <?php
                if (!empty($orderDetails) && !is_string($orderDetails)) {
                    echo "<h2>Thông tin đơn hàng: #" . $orderDetails['order_number'] . "</h2>";
                    echo "<p><strong>Mã đơn hàng:</strong> " . $orderDetails['order_id'] . "</p>";
                    echo "<p><strong>Ngày đặt hàng:</strong> " . $orderDetails['order_date'] . "</p>";
                    echo "<p><strong>Trạng thái đơn hàng:</strong> " . $orderDetails['status'] . "</p>";
                    echo "<p><strong>Tổng tiền:</strong> " . $orderDetails['total'] . "</p>";
                    echo "<p><strong>Phí vận chuyển:</strong> " . $orderDetails['shipping_total'] . "</p>";
                    echo "<p><strong>Phương thức thanh toán:</strong> " . $orderDetails['payment_method'] . "</p>";

                    echo "<h3>Địa chỉ thanh toán:</h3>";
                    echo "<p>" . nl2br($orderDetails['billing_address']) . "</p>";

                    echo "<h3>Địa chỉ giao hàng:</h3>";
                    echo "<p>" . nl2br($orderDetails['shipping_address']) . "</p>";

                    echo "<h3>Chi tiết sản phẩm:</h3>";
                    echo "<ul>";

                    // Duyệt qua từng sản phẩm trong đơn hàng
                    foreach ($orderDetails['items'] as $item) {
                        echo "<li>";
                        echo "<p><strong>Tên sản phẩm:</strong> " . $item['product_name'] . "</p>";
                        echo "<p><strong>Số lượng:</strong> " . $item['quantity'] . "</p>";
                        echo "<p><strong>Giá mỗi sản phẩm:</strong> " . $item['price'] . "</p>";
                        echo "<p><strong>Tổng:</strong> " . $item['total'] . "</p>";

                        // Hiển thị ảnh sản phẩm nếu có
                        if (!empty($item['thumbnail'])) {
                            echo "<img src='" . $item['thumbnail'] . "' alt='" . $item['product_name'] . "' width='100' height='100'>";
                        }

                        // Hiển thị link đến trang sản phẩm nếu có
                        if (!empty($item['link'])) {
                            echo "<p><a href='" . $item['link'] . "' target='_blank'>Xem sản phẩm</a></p>";
                        }

                        // Hiển thị thông tin biến thể sản phẩm nếu có
                        if (!empty($item['variation_data'])) {
                            echo "<p><strong>Thông tin biến thể:</strong></p>";
                            echo "<ul>";
                            foreach ($item['variation_data'] as $variation) {
                                echo "<li>" . $variation['name'] . ": " . $variation['value'] . "</li>";
                            }
                            echo "</ul>";
                        }

                        echo "</li>";
                    }

                    echo "</ul>";
                } else {
                    echo "<p>Không tìm thấy thông tin đơn hàng.</p>";
                }
                ?>

                <footer class="invoice__footer">
                    Supplier Company
                    <span class="invoice__footer-separator">|</span>
                    info@company.com
                    <span class="invoice__footer-separator">|</span>
                    +1-202-555-0106
                </footer>
            </div>
        </div>
    </div>
    </div>

<?php
get_footer();
?>