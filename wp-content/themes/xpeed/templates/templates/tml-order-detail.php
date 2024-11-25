<?php

/**
 * Template Name: Order_detail
 * Author: Phuongdd
 */

use app\Controllers\OrderController;

check_user_login_and_redirect();
get_header();
$orderId = isset($_GET['orderId']) ? intval($_GET['orderId']) : 0;

$orderController = new OrderController();
$orderDetails = $orderController->getOrderDetail($orderId);
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['cancel_order'])) {
    $result = $orderController->cancelOrder($orderId);
dd($result);
    // Hiển thị thông báo sau khi hủy đơn hàng
    if (isset($result['success'])) {
        echo "<p style='color: green;'>{$result['success']}</p>";
    } elseif (isset($result['error'])) {
        echo "<p style='color: red;'>{$result['error']}</p>";
    }
}

include plugin_dir_path(__FILE__) . 'sideBar.php';
?>
    <!--    <div class="account__content">-->
    <!--        <div class="content__title">Invoice Detail</div>-->
    <!--        <div class="invoice-wrapper invoice">-->
    <!--            <div class="invoice__container">-->
    <!--                --><?php
//                if (!empty($orderDetails) && !is_string($orderDetails)) {
//                    echo "<h2>Thông tin đơn hàng: #" . $orderDetails['order_number'] . "</h2>";
//                    echo "<p><strong>Mã đơn hàng:</strong> " . $orderDetails['order_id'] . "</p>";
//                    echo "<p><strong>Ngày đặt hàng:</strong> " . $orderDetails['order_date'] . "</p>";
//                    echo "<p><strong>Trạng thái đơn hàng:</strong> " . $orderDetails['status'] . "</p>";
//                    echo "<p><strong>Tổng tiền:</strong> " . $orderDetails['total'] . "</p>";
//                    echo "<p><strong>Phí vận chuyển:</strong> " . $orderDetails['shipping_total'] . "</p>";
//                    echo "<p><strong>Phương thức thanh toán:</strong> " . $orderDetails['payment_method'] . "</p>";
//
//                    echo "<h3>Địa chỉ thanh toán:</h3>";
//                    echo "<p>" . nl2br($orderDetails['billing_address']) . "</p>";
//
//                    echo "<h3>Địa chỉ giao hàng:</h3>";
//                    echo "<p>" . nl2br($orderDetails['shipping_address']) . "</p>";
//
//                    echo "<h3>Chi tiết sản phẩm:</h3>";
//                    echo "<ul>";
//
//                    foreach ($orderDetails['items'] as $item) {
//                        echo "<li>";
//                        echo "<p><strong>Tên sản phẩm:</strong> " . $item['product_name'] . "</p>";
//                        echo "<p><strong>Số lượng:</strong> " . $item['quantity'] . "</p>";
//                        echo "<p><strong>Giá mỗi sản phẩm:</strong> " . $item['price'] . "</p>";
//                        echo "<p><strong>Tổng:</strong> " . $item['total'] . "</p>";
//
//                        if (!empty($item['thumbnail'])) {
//                            echo "<img src='" . $item['thumbnail'] . "' alt='" . $item['product_name'] . "' width='100' height='100'>";
//                        }
//
//                        if (!empty($item['link'])) {
//                            echo "<p><a href='" . $item['link'] . "' target='_blank'>Xem sản phẩm</a></p>";
//                        }
//
//                        if (!empty($item['variation_data'])) {
//                            echo "<p><strong>Thông tin biến thể:</strong></p>";
//                            echo "<ul>";
//                            foreach ($item['variation_data'] as $variation) {
//                                echo "<li>" . $variation['name'] . ": " . $variation['value'] . "</li>";
//                            }
//                            echo "</ul>";
//                        }
//                        echo "</li>";
//                    }
//
//                    echo "</ul>";
//
//                    // Hiển thị nút hủy đơn hàng nếu có thể hủy
//                    if (in_array($orderDetails['status'], ['Pending payment', 'On hold', 'Processing'])) {
//                        echo "<form method='POST' action=''>";
//                        echo "<input type='hidden' name='order_id' value='" . $orderDetails['order_id'] . "'>";
//                        echo "<button type='submit' name='cancel_order' class='button cancel-order-button'>Hủy đơn hàng</button>";
//                        echo "</form>";
//                    }
//                } else {
//                    echo "<p>Không tìm thấy thông tin đơn hàng.</p>";
//                }
//                ?>
    <!--                <footer class="invoice__footer">-->
    <!--                    Supplier Company-->
    <!--                    <span class="invoice__footer-separator">|</span>-->
    <!--                    info@company.com-->
    <!--                    <span class="invoice__footer-separator">|</span>-->
    <!--                    +1-202-555-0106-->
    <!--                </footer>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    </div>-->


    <div class="account__content">
        <div class="content__title">Hoá đơn chi tiết</div>
        <div class="invoice-wrapper invoice">
            <div class="invoice__container">

                <div class="invoice__header">
                    <table class="invoice__table">
                        <tbody>
                        <tr>
                            <td class="invoice__info-cell">
                                <div class="invoice__info">
                                    <table class="invoice__table">
                                        <tbody>
                                        <tr>
                                            <td class="invoice__info-cell invoice__info-cell--padding-left">
                                                <div>
                                                    <p class="invoice__info-label">
                                                        Mã đơn hàng # <span
                                                                class="invoice__info-value"><?= $orderDetails['order_id'] ?></span>
                                                    </p>

                                                </div>
                                            </td>
                                            <td class="invoice__info-cell invoice__info-cell--border-right">
                                                <div>
                                                    <p class="invoice__info-label"> Ngày đặt hàng :
                                                        <span class="invoice__info-value"><?= $orderDetails['order_date'] ?> </span>
                                                    </p>

                                                </div>
                                            </td>
                                            <td class="invoice__info-cell invoice__info-cell--padding-left">
                                                <div>
                                                    <p class="invoice__info-label"> Trạng thái đơn hàng:
                                                        <span class="invoice__info-value"><?= $orderDetails['status'] ?> </span>
                                                    </p>

                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <table class="invoice__table">
                        <tbody>
                        <tr>
                            <td class="invoice__details-cell">
                                <p class="invoice__details-title">ĐỊA CHỈ NHẬN HÀNG</p>
                                <div class="invoice__details invoice__section invoice__details-cell--left  invoice__details-address"
                                     style="height: 12em;">
                                    <p class="invoice__details-info"><?= $orderDetails['shipping_address'] ?></p>
                                </div>
                            </td>
                            <td class="invoice__details-cell ">
                                <p class="invoice__details-title">HÌNH THỨC THANH TOÁN</p>
                                <div class="invoice__details invoice__section invoice__details-cell--right invoice__details-paymethod">
                                    <p class="invoice__details-info"><?= $orderDetails['payment_method'] ?></p>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="invoice__items">
                    <table class="invoice__items-table">
                        <thead>
                        <tr>
                            <td class="invoice__items-header">Sản phẩm</td>
                            <td class="invoice__items-header invoice__items-header--center">
                                Loại
                            </td>
                            <td class="invoice__items-header invoice__items-header--center">
                                Giá
                            </td>
                            <td class="invoice__items-header invoice__items-header--center">
                                Số lượng
                            </td>
                            <td class="invoice__items-header invoice__items-header--center">
                                Tạm tính
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($orderDetails['items'] as $item) { ?>
                            <tr class="invoice__items-row-wrapper"
                                onclick="window.location.href='<?= $item['link'] ?>'">
                                <td class="invoice__items-row invoice__items-row--img">
                                    <div class="invoice__item-row-image-wrapper">
                                        <img
                                                src="<?= $item['thumbnail'] ?>"
                                                alt="<?= $item['product_name'] ?>"
                                                class="invoice__item-row-image"
                                        />
                                    </div>
                                    <?= $item['product_name'] ?>
                                </td>
                                <td class="invoice__items-row invoice__items-row--center">
                                    <?php
                                    if (!empty($item['variation_data'])) {
                                        foreach ($item['variation_data'] as $variation) {
                                            echo "<p>" . $variation['name'] . ": " . $variation['value'] . "</p>";
                                        }
                                    }
                                    ?>
                                </td>
                                <td class="invoice__items-row invoice__items-row--center">
                                    <?= $item['price'] ?>
                                </td>

                                <td class="invoice__items-row invoice__items-row--center">
                                    <?= $item['quantity'] ?>
                                </td>
                                <td
                                        class="invoice__items-row invoice__items-row--center invoice__items-row--padding-right"
                                >
                                    <?= $item['total'] ?>
                                </td>
                            </tr>
                        <?php } ?>
                        <tr>
                            <td colspan="8">
                                <table class="invoice__totals">
                                    <tbody>
                                    <tr>
                                        <td class="invoice__totals-cell">
                                            <div class="invoice__totals-label">
                                                Tổng tạm thời:
                                            </div>
                                        </td>
                                        <td
                                                class="invoice__totals-cell invoice__totals-value"
                                        >
                                            <?= $orderDetails['items_subtotal'] ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="invoice__totals-cell">
                                            <div class="invoice__totals-label">
                                                Phí vận chuyển:
                                            </div>
                                        </td>
                                        <td
                                                class="invoice__totals-cell invoice__totals-value"
                                        >
                                            <?= $orderDetails['fee_total'] ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="invoice__totals-total">
                                            <div class="invoice__totals-label">Total:</div>
                                        </td>
                                        <td class="invoice__totals-total invoice__totals-value">   <?= $orderDetails['total'] ?></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <?php if (in_array($orderDetails['status'], ['Pending payment', 'On hold', 'Processing'])) { ?>
                    <div class="invoice__container-quick-info">
                        <span class="invoice__container-quick-info--success"></span>
                        <form method='POST' action=''>
                            <input type='hidden' name='order_id' value='<?= $orderDetails['order_id'] ?>'>
                            <button class=" button button--primary">Hủy đơn hàng</button>
                        </form>
                    </div>
                <?php } ?>
                <!--                    <div class="invoice__payment">-->
                <!--                        <p class="invoice__payment-label">Phương thức thanh toán</p>-->
                <!--                        <p class="invoice__payment-info">Momo</p>-->
                <!--                        <p class="invoice__payment-info">Bank/Sort Code: 1234567</p>-->
                <!--                        <p class="invoice__payment-info">Account Number: 123456678</p>-->
                <!--                    </div>-->

                <!--                    <div class="invoice__notes">-->
                <!--                        <p class="invoice__notes-label">Ghi chú</p>-->
                <!--                        <p class="invoice__notes-text">-->
                <!--                            Lorem ipsum is placeholder text commonly used in the graphic,-->
                <!--                            print, and publishing industries for previewing layouts and-->
                <!--                            visual mockups.-->
                <!--                        </p>-->
                <!--                    </div>-->

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
    </div>


<?php
get_footer();
?>