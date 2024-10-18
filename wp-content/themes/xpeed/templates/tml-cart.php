<?php

/**
 * Template Name: Cart
 * Author: Phuongdd
 */
if (!is_user_logged_in()) {
    wp_redirect(home_url('/login'));
    exit;
}
use app\Controllers\CartController;
$cartController = new CartController();
$carts = $cartController->getCartHandler();
$totalCarts = 0;
get_header();

?>
    <div class="cart">
        <div class="cart__container">
            <h2 class="cart__title">Giỏ hàng</h2>
            <div class="car-content">
                <table class="cart__table">
                    <thead class="cart__header">
                    <tr class="cart__header-row">
                        <th class="cart__header-cell cart__header-cell--product">
                            Sản phẩm
                        </th>
                        <th class="cart__header-cell cart__header-cell--quantity">
                            Số lượng
                        </th>
                        <th class="cart__header-cell cart__header-cell--total">Tổng cộng</th>
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
                                    <span class="cart__item-size" data-variation-size="<?= $cart["variation"] ?? '' ?>"><?= $cart["variation_title"] ?? '' ?></span>
                                    <span class="cart__item-stock-quantity" style="display: none"><?= $cart["stock_quantity"] ?? '' ?></span>
                                    <span class="cart__item-details-price"><?= number_format($cart["price"]) ?? '' ?> đ</span>
                                </div>
                            </td>
                            <td class="cart__item-quantity">
                                <div class="cart__item-quantity-controls">
                                    <button class="cart__item-quantity-decrease">-</button>
                                    <input
                                            value="<?= $cart["quantity"] ?? '' ?>"
                                            min="1"
                                            class="cart__item-quantity-input"
                                    />
                                    <button class="cart__item-quantity-increase">+</button>
                                </div>
                                <div class="cart__item-action-delete">Xoá</div>
                            </td>
                            <td class="cart__item-price"><?= number_format($cart["total"]) ?? '' ?> đ</td>
                        </tr>
                        <?php $totalCarts += $cart["total"] ?>
                    <?php } ?>
                    </tbody>
                    <tfoot class="cart__footer"></tfoot>

                </table>

                <div class="cart__actions">
                    <div class="cart__actions-note">
                        <h5 class="cart__actions-note-title">
                            Ghi chú đặt hàng bổ sung
                        </h5>
                        <textarea
                                class="cart__actions-message"
                                placeholder="Tin nhắn thêm cho đơn hàng"
                        ></textarea>
                    </div>

                    <div class="cart__actions-action">
                        <span class="cart__actions-total"><?= number_format($totalCarts) ?? '' ?> đ</span>
                        <div class="cart__actions-buttons">
                            <button class="button button--primary-cart">
                                Cập nhật giỏ hàng
                            </button>
                            <button class="button button--primary">Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php
get_footer();
?>