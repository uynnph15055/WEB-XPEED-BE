<?php

/**
 * Template Name: Payment
 * Author: Phuongdd
 */
session_start();
check_user_login_and_redirect();

use app\Controllers\CheckoutController;

if (!isset($_GET['token']) || empty($_GET['token'])) {
    header('Location: ' . home_url('cart'));
}
$orderId = $_GET['token'];
$checkoutController = new CheckoutController();
$orders = $checkoutController->getOrderHandler($orderId);
$totalCarts = 0;
get_header();

?>
    <section class="payment_container">
        <div class="payment_info-container">
            <div class="payment_info">
                <style>
                    .input-error {
                        border: 1px solid #ff0019; /* Màu viền đỏ */
                    }
                </style>

                <div class="payment_breadcrumb"></div>

                <form class="payment_form" data-orderId="<?= $orderId ?>">

                    <div class="payment_address">
                        <h3 class="payment_address--title"> <?= _e('Địa chỉ giao hàng' , 'xpeed') ?></h3>

                        <input type="text" class="payment_form--input" name="name" placeholder="Tên"/>

                        <input
                                type="text"
                                class="payment_form--input" name="zipCode"
                                placeholder="Mã zip"
                        />

                        <div class="payment_form--group">

                            <select id="provinceSelect" class="payment_form--input" name="province">
                                <option value=""><?= _e('Chọn Tỉnh/Thành phố ' , 'xpeed') ?></option>
                                <!-- Danh sách các tỉnh/thành phố -->
                            </select>

                            <select id="districtSelect" class="payment_form--input" name="district">
                                <option value=""><?= _e('Chọn Quận/Huyện ' , 'xpeed') ?></option>
                                <!-- Danh sách các quận/huyện sẽ được cập nhật dựa trên tỉnh/thành phố đã chọn -->
                            </select>

                        </div>

                        <input
                                type="text"
                                class="payment_form--input" name="address"
                                placeholder="<?= _e('Địa chỉ' , 'xpeed') ?>"
                        />

                        <input
                                type="text"
                                class="payment_form--input" name="apartment"
                                placeholder="<?= _e('Căn hộ, tòa nhà, v.v.' , 'xpeed') ?>"
                        />
                        <input
                                type="tel"
                                placeholder="<?= _e('Điện thoại' , 'xpeed') ?>" name="phone"
                                class="payment_form--input"
                        />


                        <div class="payment_address--checkbox">
                            <label for="addressCheckbox">
                                <input
                                        type="checkbox"
                                        id="addressCheckbox"
                                        class="payment_address--checkbox-input"
                                />
                            </label>

                            <label
                                    for="addressCheckbox"
                                    class="payment_address--checkbox-label"
                            ><?= _e('Lưu thông tin vận chuyển của bạn cho đơn hàng tiếp
                                theo.' , 'xpeed') ?></label
                            >
                        </div>
                    </div>

                    <div class="payment_actions">
                        <a href="<?php echo home_url('cart'); ?>" class="payment_actions--back">
                            <ion-icon name="chevron-back-outline"></ion-icon>

                            <span><?= _e('Quay lại giỏ hàng' , 'xpeed') ?></span>
                        </a>

                        <div class="btn payment_actions--continue">
                            <?= _e('Tiếp tục giao hàng' , 'xpeed') ?>
                        </div>
                    </div>
                </form>

                <div class="payment_footer">
                    <div class="payment_footer--terms">
                        <a href="#" class="payment_footer--terms-item"
                        > <?= _e('Chính sách hoàn tiền' , 'xpeed') ?></a
                        >
                        <a href="#" class="payment_footer--terms-item"
                        > <?= _e('Chính sách vận chuyển' , 'xpeed') ?></a
                        >
                        <a href="#" class="payment_footer--terms-item"
                        > <?= _e('Chính sách bảo mật' , 'xpeed') ?></a
                        >
                        <a href="#" class="payment_footer--terms-item"
                        ><?= _e('Điều khoản dịch vụ' , 'xpeed') ?></a
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="payment_cart">
            <div class="payment_cart-header"><?= _e('Đơn hàng' , 'xpeed') ?></div>
            <div class="payment_products">
                <?php foreach ($orders as $key => $order) { ?>
                    <div class="payment_products--item">
                        <div class="payment_products--item-image-group">
                            <img
                                    src="<?= $order["image"] ?? '' ?>"
                                    alt="product"
                                    class="payment__products--item-img"
                            />

                            <div class="payment__products--item-quantity">
                                <span><?= $order["quantity"] ?? '' ?></span>
                            </div>
                        </div>

                        <div class="payment_products--item-content-group">
                            <div class="payment_products--item-content">
                                <p class="payment_products--item-name"><?= $order["product_name"] ?? '' ?></p>
                                <p class="payment_products--item-size"> <?= $order["variation_title"] ?? '' ?></p>
                            </div>
                        </div>

                        <div class="payment_products--item-price-group">
                            <p class="payment_products--item-price"><?= number_format((float)$order["price"]) ?? '' ?> đ</p>
                        </div>
                    </div>
                    <?php $totalCarts += $order["total"] ?>
                <?php } ?>
            </div>

            <!--            <form class="payment_cart--coupon">-->
            <!--                <div class="payment_cart--coupon-input">-->
            <!--                    <input-->
            <!--                        type="text"-->
            <!--                        class="payment_form--input"-->
            <!--                        placeholder="Thẻ quà tặng"-->
            <!--                    />-->
            <!--                </div>-->
            <!---->
            <!--                <button aria-label="<?= home_url() ?>"class="payment_cart--coupon-submit" type="submit">-->
            <!--                    <span>Áp dụng</span>-->
            <!--                </button>-->
            <!--            </form>-->

            <div class="payment_cart--summary">
                <div class="payment_cart--summary-item">
                    <span class="payment_cart--summary-item-label"><?= _e('Thành tiền' , 'xpeed') ?></span>
                    <span class="payment_cart--summary-item-value"><?= number_format((float)$totalCarts) ?? '' ?> đ</span>
                </div>
                <div class="payment_cart--summary-item">
                    <span class="payment_cart--summary-item-label"><?= _e('Vận chuyển' , 'xpeed') ?></span>
                    <span class="payment_cart--summary-item-value">50,000 đ</span>
                </div>
                <div class="payment_cart--summary-item payment_cart--summary-total">
                    <div class="payment_cart--summary-total-details">
                        <span class="payment_cart--summary-total-label">Tổng tiền</span>
                        <!--                        <span class="payment_cart--summary-total-tax"-->
                        <!--                        >Đã bao gồm thuế -->
                        <? //= number_format((float)$totalCarts) ?? '' ?><!-- đ</span-->
                        <!--                        >-->
                    </div>
                    <span class="payment_cart--summary-total-value"><?= number_format((float)$totalCarts + 50000) ?? '' ?> đ</span>
                </div>
            </div>
        </div>
    </section>
<?php
get_footer();
?>