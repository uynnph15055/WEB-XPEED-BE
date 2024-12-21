<?php

/**
 * Template Name: Product List
 * Author: Uynn
 */

get_header();

use app\Controllers\ProductController;

$product = new ProductController();
$mainCategorySlug = $product->getCategorySlugUrl();
$options = $product->getOptionFilter();
$productLists = $product->getProductByCategory();

$params = [];
if (!empty($_GET)) {
    // Duyệt qua tất cả các tham số
    foreach ($_GET as $key => $value) {
        if($key == 'maxPrice' || $key == 'minPrice' ){

            $params[$key] = $value;
        }else{
            $params[$key] = explode(",", $value) ?? [];
        }

    }

}

?>
    <script>
        var attributes = <?= json_encode($options['attributes'], JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) ?>;
        var mainCategory = '<?php echo $mainCategorySlug ?? '' ?>';
    </script>
    <div class="header-overlay collection__header" style="max-height: 200px">
        <img class="header-overlay__img collection__header-img"
             src="https://xpeed-helmets.com/wp-content/uploads/2024/12/NEX-30.png" alt=""/>
        <h1 id="collection-title" class="header-overlay__heading collection__heading">
            <?= _e('Sản phẩm', 'xpeed') ?>
        </h1>
    </div>

    <div class="collection__container">
        <div class="collection__sidebar">
            <div class="custom-select">
                <div class="custom-select__button">
                    <button aria-label="<?= home_url() ?>" class="custom-select__title"><?= _e('Danh mục', 'xpeed') ?></button>
                    <ion-icon class="custom-select__icon" name="caret-down-outline"></ion-icon>
                </div>


                <div id="filter-category" class="custom-select__options custom-select__options--visible">
                    <select id="categories-select" name="categories"  >
                        <?php foreach ($options['categories'] as $category) { ?>
                                <option value="<?php echo $category->link; ?>"
                                    <?php echo (!empty($mainCategorySlug) && $mainCategorySlug == $category->slug) ? 'selected' : ''; ?>>
                                    <?php echo $category->name; ?>
                                </option>
                        <?php } ?>
                    </select>
                </div>
            </div>

            <div class="custom-select attributes">
                <?php foreach ($options['attributes'] as $attributes) { ?>
                    <!-- Button để hiển thị nhóm -->
                    <div class="custom-select__button">
                        <button aria-label="<?= home_url() ?>" class="custom-select__title">
                            <?php echo $attributes['name']; ?>
                        </button>
                        <ion-icon class="custom-select__icon" name="caret-down-outline"></ion-icon>
                    </div>

                    <!-- Danh sách các lựa chọn -->
                    <div class="custom-select__options custom-select__options--visible">
                        <?php foreach ($attributes['terms'] as $attribute) { ?>
                            <label for="<?php echo $attribute['slug']; ?>" class="custom-select__option">
                                <input type="checkbox"
                                    <?php echo (!empty($params[$attributes['slug']]) && in_array($attribute['slug'], $params[$attributes['slug']])) ? 'checked' : ''; ?>
                                       class="attribute-checkbox"
                                       name="<?php echo $attributes['slug']; ?>"
                                       id="<?php echo $attribute['slug']; ?>"
                                       value="<?php echo $attribute['slug']; ?>"/>
                                <span class="custom-select__option-label"><?php echo $attribute['name']; ?></span>
                            </label>
                        <?php } ?>
                    </div>
                <?php } ?>
            </div>


            <div class="custom-select">
                <div class="custom-select__button">
                    <button aria-label="<?= home_url() ?>" class="custom-select__title">PRICE</button>
                    <ion-icon class="custom-select__icon" name="caret-down-outline"></ion-icon>
                </div>

                <div class="custom-range">
                    <div class="price-range" data-price-range="" style="display: block;">
                        <div class="price-range-input-wrapper">
                            <div class="price-range-input">
                                <span class="price-range-currency">đ</span>

                                <input data-min-range-input="" data-range-input="" class="input"
                                       name="filter.v.price.gte" id="filter-PRICE" type="number"
                                       placeholder="MIN" min="0" max="339000" value="<?php echo isset($params["minPrice"]) ? (float)$params["minPrice"] : 0; ?>"/>
                                <label class="price-range-label visually-hidden"
                                       for="filter-PRICE">From</label>
                            </div>
                            <span class="price-range-separator">–</span>
                            <div class="price-range-input">
                                <span class="price-range-currency">đ</span>
                                <input data-max-range-input="" data-range-input="" class="input"
                                       name="filter.v.price.lte" id="filter-PRICE" type="number"
                                       placeholder="MAX" min="0" max="339000" value="<?php echo isset($params["maxPrice"]) ? (float)$params["maxPrice"] : 0; ?>"/>
                                <label class="price-range-label visually-hidden" for="filter-PRICE">To</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="collection__content">

            <div class="collection__content-product" id="collection__content-product-wapper">
                <?php if (count($productLists["products"]) > 0) { ?>
                    <?php foreach ($productLists["products"] as $product) { ?>
                        <div class="shopify__product">
                            <a href="<?= $product['url'] ?? '' ?>"
                               class="shopify__product-image-wrapper">
                                <span class="shopify__product-badge shopify__product-badge--new"><?= $product['first_tag'] ?? '' ?></span>
                                <img src="<?= $product['image'] ?? '' ?>"
                                     alt="<?= $product['title'] ?? '' ?>" class="shopify__product-image">
                            </a>

                            <div class="shopify__product-details">
                                <h3 class="shopify__product-title">
                                    <a href="<?= $product['url'] ?? '' ?>"
                                       class="shopify__product-link"><?= $product['title'] ?? '' ?></a>
                                </h3>

                                <p class="shopify__product-cate"><?= $product['first_category'] ?? '' ?></p>

                                <span class="shopify__product-price"><?= number_format((float)$product["price"]) ?? '' ?> đ</span>
                            </div>
                        </div>
                    <?php } ?>
                <?php } else { ?>
                    Không tìm được sản phẩm
                <?php } ?>
            </div>
        </div>
    </div>

<?php get_footer();
