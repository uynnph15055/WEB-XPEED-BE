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

<?php if (!empty($product) && is_array($product)) { ?>


    <main class="product-single-wrapper">
        <div class="product-single">
            <div class="product-content">
                <!-- Phần bên trái, để trống -->
                <div class="product-content__left">
                    <img
                            id="mainImage"
                            src="<?= $product["main_image"] ?? '' ?>"
                            alt="Main Product Image"
                            class="main-image"
                    />
                    <div class="thumbnail-gallery">
                        <div class="thumbnail-item__wrapper active-thumbnail ">
                            <img
                                    src="<?= $product["main_image"] ?? '' ?>"
                                    alt="Thumbnail 1"
                                    class="thumbnail-item__img"
                            />
                        </div>
                        <?php
                        // dd($product["gallery_images"]);
                        foreach (array_slice($product["gallery_images"], 0, -1) as $key => $galleryImage) { ?>
                            <div class="thumbnail-item__wrapper">
                                <img
                                        src="<?= $galleryImage ?>"
                                        alt="<?= $galleryImage ?>"
                                        class="thumbnail-item__img"
                                />
                            </div>
                        <?php } ?>

                    </div>
                </div>

                <!-- Phần bên phải là thông tin chi tiết sản phẩm -->
                <div class="product-content__right">
                    <div class="product-detail">
                        <div class="product-detail__top-line">
                            <!--<div class="product-detail__brand-logo">-->
                            <!--    <img class="brand-logo__img"-->
                            <!--         src="https://i.ebayimg.com/images/g/3loAAOSwPYZU2PmE/s-l1200.jpg"-->
                            <!--         alt=""/>-->
                            <!--</div>-->
                            <div class="product-detail__badge" style="transform: translateX(-10px)">
                                <span class="product-detail__badge product-detail__badge--new">MỚI</span>
                            </div>
                        </div>

                        <h1 class="product-detail__title"
                            data-product='<?= json_encode($product) ?>'
                            data-product-type="<?= $product["productType"] ?>">
                            <?= $product["name"] ?? '' ?>
                        </h1>
                        <p class="product-detail__series"><?= $product["categories"][0]["name"] ?? '' ?></p>
                        <p class="product-detail__price"><?= number_format((float)$product["price"]) ?? '' ?> đ</p>


                        <!--*****************************************-->
                        <?php if (!empty($product["attributes"])) { ?>
                            <div class="product-detail__size" data-product-id="<?= $product["id"] ?? 0 ?>">
                                <?php foreach ($product["attributes"] as $key => $attribute) { ?>
                                    <label class="product-detail__size-label"> <?= $key ?? '' ?></label>
                                    <div class="product-detail__size-options" data-attribute-key="<?= $key ?>">
                                        <?php foreach ($attribute["value"] as $item) { ?>

                                            <input type="radio" name="<?= $key ?>"
                                                   id="<?= $key ?>-<?= strtolower($item['slug']) ?>"
                                                   value="<?= strtolower($item['slug']) ?>"
                                                   class="product-detail__size-option"/>
                                            <label for="<?= $key ?>-<?= strtolower($item['slug']) ?>" class="product-detail__size-label-option" >
                                                <?= strtoupper($item['name']) ?>
                                            </label>
                                        <?php } ?>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php } ?>
                        <!--*****************************************-->
                        <div class="product-detail__quantity">
                            <label class="product-detail__quantity-label"><?= _e('Số lượng' , 'xpeed') ?></label>
                            <div class="product-detail__quantity-controls">
                                <button aria-label="<?= home_url() ?>" class="product-detail__quantity-decrease">-
                                </button>
                                <input value="1" min="1" class="product-detail__quantity-input"/>
                                <button aria-label="<?= home_url() ?>" class="product-detail__quantity-increase">+
                                </button>
                            </div>
                            <div class="product-detail__quantity-inventory" style="margin-top: 5px"></div>
                        </div>

                        <div class="product-detail__actions">
                            <button aria-label="<?= home_url() ?>" style="display: none;"
                                    class="button button--primary product-detail__buy-now"
                                    data-userID="<?= get_current_user_id() ?? 0 ?>">
                               <?= _e('Mua ngay' , 'xpeed')?>
                            </button>
                            <button aria-label="<?= home_url() ?>"
                                    class="button button--cart product-detail__add-to-cart"
                                    data-userID="<?= get_current_user_id() ?? 0 ?>">
                                
                                 <?= _e('Thêm vào giỏ hàng' , 'xpeed')?>
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
                                <span class="shopify__product-badge shopify__product-badge--new"><?= _e('MỚI' , 'xpeed')?></span>
                                <img src="<?= $relatedProduct["image_url"] ?? '' ?>"
                                     alt="<?= $relatedProduct["name"] ?? '' ?>" class="shopify__product-image"/>
                            </a>

                            <div class="shopify__product-details">
                                <h3 class="shopify__product-title">
                                    <a href="" class="shopify__product-link"><?= $relatedProduct["name"] ?? '' ?></a>
                                </h3>

                                <p class="shopify__product-cate"><?= $relatedProduct["categories"][0]["name"] ?? '' ?></p>

                                <span class="shopify__product-price"><?= $relatedProduct["price"] > 0 ? number_format((float)$relatedProduct["price"] ?? 0) : 0 ?> đ</span>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        <?php } ?>
    </main>

    <script>
        var productData = <?= json_encode($product, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) ?>;
        const product = <?= json_encode($product["attributes"], JSON_HEX_TAG) ?>;
    </script>

    <?php get_footer(); ?>

<?php } else {
    header('Location: ' . home_url('/') . '?status=error&message=' . $product ?? 'Sản phẩm không hợp lệ !');
} ?>