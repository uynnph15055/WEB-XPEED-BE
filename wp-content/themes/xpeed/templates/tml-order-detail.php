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

    // Hiển thị thông báo sau khi hủy đơn hàng
    if (isset($result['success'])) {
        echo "<p style='color: green;'>{$result['success']}</p>";
    } elseif (isset($result['error'])) {
        echo "<p style='color: red;'>{$result['error']}</p>";
    }
}
?>
    <div class="content__page">

        <?php include plugin_dir_path(__FILE__) . 'menuTab.php'; ?>
        <div class="account">
            <?php include plugin_dir_path(__FILE__) . 'sideBar.php'; ?>

            <div class="account__content invoice-single">
                <div class="content__title"><?= _e('Hoá đơn chi tiết', 'xpeed') ?></div>
                <div class="invoice-wrapper">
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
                                                    <td
                                                            class="invoice__info-cell invoice__info-cell--border-right"
                                                    >
                                                        <div>
                                                            <p class="invoice__info-label">
                                                                <?= _e('Ngày đặt hàng:', 'xpeed') ?>
                                                                <span class="invoice__info-value"
                                                                ><?= $orderDetails['order_date'] ?>
                                      </span>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td
                                                            class="invoice__info-cell invoice__info-cell--padding-left"
                                                    >
                                                        <div>
                                                            <p class="invoice__info-label">
                                                                <?= _e('Mã đơn hàng: #', 'xpeed') ?>
                                                                <span class="invoice__info-value"
                                                                ><?= $orderDetails['order_id'] ?></span
                                                                >
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
                                        <p class="invoice__details-title"><?= _e('ĐỊA CHỈ NHẬN HÀNG', 'xpeed') ?></p>
                                        <div
                                                class="invoice__details invoice__section invoice__details-cell--left  invoice__details-address"
                                        >
                                            <p class="invoice__details-item">
                                                <?= _e(' Địa chỉ thanh toán', 'xpeed') ?>
                                            </p>
                                            <p class="invoice__details-info">
                                                <?= nl2br($orderDetails['shipping_address']) ?>
                                            </p>
                                        </div>
                                    </td>
                                    <td class="invoice__details-cell ">
                                        <p class="invoice__details-title">
                                            <?= _e('HÌNH THỨC THANH TOÁN', 'xpeed') ?>
                                        </p>
                                        <div
                                                class="invoice__details invoice__section invoice__details-cell--right invoice__details-paymethod"
                                        >
                                            <p class="invoice__details-item">
                                                <?= $orderDetails['payment_method'] ?>
                                            </p>
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
                                    <td class="invoice__items-header"><?= _e('Sản phẩm', 'xpeed') ?></td>
                                    <td class="invoice__items-header invoice__items-header--center">
                                        <?= _e('Loại', 'xpeed') ?>
                                    </td>
                                    <td class="invoice__items-header invoice__items-header--center">
                                        <?= _e('Giá', 'xpeed') ?>
                                    </td>
                                    <td class="invoice__items-header invoice__items-header--center">
                                        <?= _e('Số lượng', 'xpeed') ?>
                                    </td>
                                    <td class="invoice__items-header invoice__items-header--center">
                                        <?= _e('Tạm tính', 'xpeed') ?>
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
                                                        <?= _e('Tổng tạm thời:', 'xpeed') ?>
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
                                                         <?= _e('Phí vận chuyển:', 'xpeed') ?>
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
                        <div class="invoice__container-quick-info">
                            <span class="invoice__container-quick-info--success"></span>
                            <button aria-label="<?= home_url() ?>"class=" button button--primary">  <?= _e('Hủy đơn hàng', 'xpeed') ?></button>
                        </div>
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
    </div>
<?php
get_footer();
?>