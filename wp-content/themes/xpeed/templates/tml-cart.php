<?php

/**
 * Template Name: Cart
 * Author: Phuongdd
 */

use app\Controllers\CartController;
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
check_user_login_and_redirect();
$cartController = new CartController();
$carts = $cartController->getCartHandler();
$totalCarts = 0;

get_header();

?>
    <div class="cart" style="min-height: 90vh">
        <div class="cart__container">
            <h2 class="cart__title"><?= _e('Giỏ hàng' , 'xpeed') ?></h2>
            <div class="car-content">
                <table class="cart__table">
                    <thead class="cart__header">
                    <tr class="cart__header-row">
                        <th class="cart__header-cell cart__header-cell--product">
                            <?= _e('Sản phẩm' , 'xpeed') ?>
                        </th>
                        <th class="cart__header-cell cart__header-cell--quantity">
                            <?= _e('Số lượng' , 'xpeed') ?>
                        </th>
                        <th class="cart__header-cell cart__header-cell--total">  <?= _e('Tổng cộng' , 'xpeed') ?></th>
                    </tr>
                    </thead>
                    <tbody class="cart__body">
                    <?php foreach ($carts as $key => $cart) { ?>
                        <tr class="cart__item" data-product-id="<?= $cart["product_id"] ?? 0 ?>">
                            <td class="cart__item-info">
                                <div class="cart__item-wrap-image">
                                    <img
                                            src="<?= $cart["image"] ?? '' ?>"
                                            alt="<?= $cart["product_name"] ?? '' ?>"
                                            class="cart__item-image"
                                    />
                                </div>
                                <div class="cart__item-details">
                                    <span class="cart__item-name"><?= $cart["product_name"] ?? '' ?></span>

                                    <span class="cart__item-size"
                                          data-variation-size="<?= $cart["attribute"] ?? '' ?>"
                                          data-variation-key="<?= $cart["attribute_key"] ?? '' ?>"
                                    >
                                        <?= $cart["variation_title"] ?? '' ?>
                                    </span>
                                    <span class="cart__item-stock-quantity"
                                          style="display: none"><?= $cart["stock_quantity"] ?? '' ?></span>
                                    <span class="cart__item-details-price"><?= number_format((float)$cart["price"]) ?? '' ?> đ</span>
                                    <?php
                                    if ((int)$cart["stock_quantity"] < 1) { ?>
                                        <h3 style="color: red;"><i><?= _e('Sản phẩm đã hết hàng' , 'xpeed') ?></i></h3>
                                        <?php
                                    } elseif ((int)$cart["stock_quantity"] < (int)$cart["quantity"]) { ?>
                                        <h3 style="color: red;"><i><?= _e('Số lượng sản phẩm không đủ, tối đa' , 'xpeed') ?> <?= $cart["stock_quantity"] ?? '' ?> <?= _e('sản phẩm' , 'xpeed') ?></i></h3>
                                        <?php
                                    }
                                    ?>

                                </div>
                            </td>
                            <td class="cart__item-quantity">
                                <div class="cart__item-quantity-controls">
                                    <button aria-label="<?= home_url() ?>"class="cart__item-quantity-decrease">-</button>
                                    <input
                                            value="<?= $cart["quantity"] ?? '' ?>"
                                            min="1"
                                            class="cart__item-quantity-input"
                                    />
                                    <button aria-label="<?= home_url() ?>"class="cart__item-quantity-increase">+</button>
                                </div>
                                <div class="cart__item-action-delete"><?= _e('Xoá' , 'xpeed') ?></div>
                            </td>
                            <td class="cart__item-price"><?= number_format((float)$cart["total"]) ?? '' ?> đ</td>
                        </tr>
                        <?php $totalCarts += $cart["total"] ?>
                    <?php } ?>
                    </tbody>
                    <tfoot class="cart__footer"></tfoot>

                </table>

                <div class="cart__actions">
                    <div class="cart__actions-note">
                    </div>

                    <div class="cart__actions-action">
                        <span class="cart__actions-total"><?= number_format((float)$totalCarts) ?? '' ?> đ</span>
                        <div class="cart__actions-buttons">
                            <button aria-label="<?= home_url() ?>"class="button button--primary-cart">
                                <?= _e('Cập nhật giỏ hàng' , 'xpeed') ?>
                            </button>
                            <button aria-label="<?= home_url() ?>"class="button button--primary" id="paymentBtn" data-userID="<?= get_current_user_id() ?? 0 ?>"><?= _e('Thanh toán' , 'xpeed') ?></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php
get_footer();
?>
