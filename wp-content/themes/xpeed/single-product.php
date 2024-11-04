<?php

/**
 * Template Name: Home
 * Author: Uynn
 */

use app\Controllers\ProductController;
use app\Controllers\CartController;

get_header();
$productController = new ProductController();
$product = $productController->getProductInfo();
?>
<main class="product-single-wrapper">
    <div class="product-single">
        <div class="product-content">
            <!-- Phần bên trái, để trống -->
            <div class="product-content__left">
                <img src="https://cdn.shopify.com/s/files/1/0669/5803/3208/files/RPHA_12_FQ20_DIABLO_banner.jpg?v=1725274055"
                     alt=""/>
            </div>

            <!-- Phần bên phải là thông tin chi tiết sản phẩm -->
            <div class="product-content__right">
                <div class="product-detail">
                    <div class="product-detail__top-line">
                        <div class="product-detail__brand-logo">
                            <img class="brand-logo__img"
                                 src="https://i.ebayimg.com/images/g/3loAAOSwPYZU2PmE/s-l1200.jpg"
                                 alt=""/>
                        </div>
                        <div class="product-detail__badge">
                            <span class="product-detail__badge product-detail__badge--new">MỚI</span>
                        </div>
                    </div>
                    <h1 class="product-detail__title"><?= $product["name"] ?? '' ?></h1>
                    <p class="product-detail__series"><?= $product["categories"][0]["name"] ?? '' ?></p>
                    <p class="product-detail__price"><?= number_format($product["price"]) ?? '' ?> đ</p>
                    <div class="product-detail__size" data-product-id="<?= $product["id"] ?? 0 ?>">
                        <?php foreach ($product["attributes"] as $key => $attribute) { ?>

                            <label class="product-detail__size-label"> <?= $attribute['name'] ?? '' ?></label>

                            <div class="product-detail__size-options" data-attribute-key="<?= $key ?>">
                                <?php foreach ($attribute["value"] as $item) { ?>
                                    <input type="radio" name="<?= $key ?>"
                                           data-attribute='<?= json_encode($item) ?>'
                                           id="<?= $key ?>-<?= strtolower($item["attributes"]["attribute_" . $key]) ?>"
                                           value="<?= strtolower($item["attributes"]["attribute_" . $key]) ?>"
                                           class="product-detail__size-option"/>
                                    <label for="<?= $key ?>-<?= strtolower($item["attributes"]["attribute_" . $key]) ?>"
                                           class="product-detail__size-label-option"><?= strtoupper($item["attributes"]["attribute_" . $key]) ?></label>
                                <?php } ?>
                            </div>

                        <?php } ?>
                    </div>

                    <div class="product-detail__quantity">
                        <label class="product-detail__quantity-label">Số lượng</label>
                        <div class="product-detail__quantity-controls">
                            <button class="product-detail__quantity-decrease">-</button>
                            <input value="1" min="1" class="product-detail__quantity-input"/>
                            <button class="product-detail__quantity-increase">+</button>
                        </div>
                    </div>

                    <div class="product-detail__actions">
                        <button class="button button--primary product-detail__buy-now">
                            Mua ngay
                        </button>
                        <button class="button button--cart product-detail__add-to-cart">
                            Thêm vào giỏ hàng
                        </button>
                    </div>

                    <div class="product-detail__info">
                        <?= $product["short_description"] ?? '' ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-description">
            <!-- Nội dung mô tả sản phẩm -->
            <?= $product["full_description"] ?? '' ?>
            <!-- Kết thúc nội dung mô tả sản phẩm -->
        </div>
    </div>
    <?php if (isset($product["upsell_products"]) && count($product["upsell_products"]) > 0) { ?>
        <div class="product-related">
            <h2 class="product-related__title">Sản phẩm liên quan</h2>
            <div class="product-related__list">
                <?php foreach ($product["upsell_products"] as $relatedProduct) { ?>

                    <div class="shopify__product">
                        <a href="" class="shopify__product-image-wrapper">
                            <span class="shopify__product-badge shopify__product-badge--new">MỚI</span>
                            <img src="<?= $relatedProduct["image_url"] ?? '' ?>"
                                 alt="<?= $relatedProduct["name"] ?? '' ?>" class="shopify__product-image"/>
                        </a>

                        <div class="shopify__product-details">
                            <h3 class="shopify__product-title">
                                <a href="" class="shopify__product-link"><?= $relatedProduct["name"] ?? '' ?></a>
                            </h3>

                            <p class="shopify__product-cate"><?= $relatedProduct["categories"][0]["name"] ?? '' ?></p>

                            <span class="shopify__product-price"><?= $relatedProduct["price"] > 0 ? number_format($relatedProduct["price"] ?? 0) : 0 ?> đ</span>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    <?php } ?>
</main>
<script>
    const product = <?= json_encode($product["attributes"], JSON_HEX_TAG) ?>;
</script>
<?php
get_footer();
?>
