<?php

/**
 * Template Name: Order_history
 * Author: Phuongdd
 */

use app\Controllers\OrderController;

check_user_login_and_redirect();
$orderController = new OrderController();
$orders = $orderController->getAllOrdersForCurrentUser();
$current_lang = pll_current_language();
get_header();
?>
    <div class="content__page">

        <?php include plugin_dir_path(__FILE__) . 'menuTab.php'; ?>
        <div class="account">

            <?php include plugin_dir_path(__FILE__) . 'sideBar.php'; ?>
            <div class="account__content">
                <div class="content__title">Lịch sử đơn hàng</div>
                <div class="general__title-wrapper">
                    <h2 class="general__title">Lịch sử đơn hàng gần đây</h2>
                    <div class="">
                        <a href="<?= home_url('/') ?>">
                            <ion-icon class="menu__item-icon" name="chevron-back-outline"></ion-icon>
                            Trang của tôi
                        </a>
                    </div>
                </div>
                <div class="invoice-wrapper invoice">
                    <div class="invoice__container">
                        <div class="invoice__items">
                            <div class="invoice__detail-table-wrapper">
                                <div class="invoice__detail-table">

                                    <div class="invoice__detail-row invoice__detail-row--header">
                                        <div class="invoice__detail-cell">Mã đơn</div>
                                        <div class="invoice__detail-cell">Ngày mua</div>
                                        <div class="invoice__detail-cell">Số tiền hóa đơn</div>
                                        <div class="invoice__detail-cell">Trạng thái</div>
                                        <div class="invoice__detail-cell"></div>
                                    </div>
                                    <?php foreach ($orders as $order) { ?>
                                        <div class="invoice__detail-row">
                                            <div class="invoice__detail-cell"><?= $order['order_id'] ?></div>
                                            <div class="invoice__detail-cell"><?= $order['date_created'] ?></div>
                                            <div class="invoice__detail-cell"><?= number_format((float)$order['total']) ?? '' ?>
                                                đ
                                            </div>
                                            <div class="invoice__detail-cell">
                                    <span class="invoice__status <?= $orderController->getOrderStatusClass($order['status']) ?>">
                                        <?= $order['status'] ?>
                                    </span>
                                            </div>
                                            <div class="invoice__detail-cell"
                                                 onclick="window.location.href='<?= home_url($current_lang == 'vi' ? '/chi-tiet-don-hang' : '/en/order-detail') . '?orderId=' . $order['order_id'] ?>'">
                                                <button aria-label="<?= home_url() ?>"class="invoice__detail-button">
                                                    <ion-icon
                                                            name="wallet-outline"
                                                            class="invoice__detail-button-icon"
                                                    ></ion-icon>
                                                    Pay
                                                </button>
                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>


                            </div>
                        </div>
                    </div>

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