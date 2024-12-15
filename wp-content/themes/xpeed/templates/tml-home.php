<?php

/**
 * Template Name: Home
 * Author: Uynn
 */

get_header();

use app\Controllers\HomeController;
use app\Controllers\BlogController;
use app\Controllers\ProductController;

$blog = new BlogController();
$product = new ProductController();

require_once dirname(__DIR__) . '/app/Controllers/ProductController.php';

$homeController = new HomeController;


$categories = $product->categories;
// dd($categories);
$blogs = $blog->blogs;

// -----------
$cateLinkFirst = isset($product->categories[0]) ? $product->getCategoryLink($product->categories[0]->term_id) : null;
$cateLinkSecond = isset($product->categories[1]) ? $product->getCategoryLink($product->categories[1]->term_id) : null;
$cateLinkThird = isset($product->categories[2]) ? $product->getCategoryLink($product->categories[2]->term_id) : null;

// -----------

$cateNameFirst = isset($product->categories[0]) ? $product->categories[0]->name : null;
$cateNameSecond = isset($product->categories[1]) ? $product->categories[1]->name : null;
$cateNameThird = isset($product->categories[2]) ? $product->categories[2]->name : null;

// ----------
$productFirst = isset($product->categories[0]) ? $product->getProductLimitItemPageHome($product->categories[0]->term_id)
      : null;
    //   dd($productFirst);
$productSecond = isset($product->categories[1]) ?
      $product->getProductLimitItemPageHome($product->categories[1]->term_id) : null;
$productThird = isset($product->categories[2]) ? $product->getProductLimitItemPageHome($product->categories[2]->term_id)
      : null;

// -----------
$sliders = $homeController->getSlider(8);

function convertToProductUrl($link, $name) {
    if (strpos($link, 'post_type=product') !== false) {
        // Loại bỏ phần tên gốc của sản phẩm (trong trường hợp có dấu hai chấm) và chuyển thành URL chuẩn
            $name = transliterator_transliterate('Any-Latin; Latin-ASCII', $name);
        $name = strtolower($name); // Chuyển thành chữ thường
        
        // Loại bỏ các ký tự đặc biệt
        $name = preg_replace('/[^a-z0-9\s]/', '', $name);
        
        // Thay thế khoảng trắng thành dấu gạch ngang
        $name = preg_replace('/\s+/', '-', $name);
        
        // Xóa các dấu gạch ngang thừa
        $name = preg_replace('/-+/', '-', $name);
        $productUrl = home_url('/product/'.$name);
        return $productUrl;
    }
    return $link; // nếu không có 'post_type=product'
}

?>
<main class="home-wrapper">
      <!-- banner -->
      <main class="home-wrapper">
            <!-- banner -->
            <div class="banner">
                  <?php foreach ($sliders as $index => $slider) :  ?>
                  <a href="<?= $slider['link'] ?>" class="banner_item <?= $index == 0 ? 'is-active' : '' ?> ">
                        <img src="<?= $slider['image'] ?>" alt="<?= $slider['title'] ?>" class="banner_image" />
                  </a>
                  <?php endforeach; ?>

                  <ul class="banner_dots">
                        <?php for ($i = 0; $i < count($sliders); $i++) : ?>
                        <li class="banner_dots-item <?= $i == 0 ? 'is-active' : '' ?>"></li>
                        <?php endfor; ?>
                  </ul>
            </div>
            <!-- end banner -->

            <div class="home-wrapper__content" style="padding: 0px 40px;">
                  <!-- mosaic -->
                  <!-- <div id="mosaic" class="mosaic-section">
                        <div class="mosaic__grid-container">
                              <div class="mosaic__grid-item mosaic__grid-item--large">
                                    <img src="https://rt6moto.co.kr/cdn/shop/files/main-c10.jpg?v=1677676335&width=1500"
                                          alt="New Products" class="mosaic__image mosaic__image--large" />
                                    <div class="mosaic__overlay">
                                          <h4 class="mosaic__title">NEW PRODUCTS</h4>
                                          <p class="mosaic__subtitle">HJC의 최신 제품을 만나보세요.</p>
                                          <a href="#" class="mosaic__link"><button class="button button--primary">
                                                      VIEW MORE
                                                </button></a>
                                    </div>
                              </div>
                              <div class="mosaic__grid-item mosaic__grid-item--small">
                                    <img src="https://rt6moto.co.kr/cdn/shop/files/MAIN-COLLABO.jpg?v=1683087359&width=1000"
                                          alt="Limited Edition" class="mosaic__image mosaic__image--small" />
                                    <div class="mosaic__overlay">
                                          <h4 class="mosaic__title">LIMITED EDITION</h4>
                                          <p class="mosaic__subtitle">
                                                지금이 곧 기회! 그 기회를 잡으세요.
                                          </p>

                                          <a href="#" class="mosaic__link"><button class="button button--primary">
                                                      VIEW MORE
                                                </button></a>
                                    </div>
                              </div>
                              <div class="mosaic__grid-item mosaic__grid-item--small">
                                    <img src="https://rt6moto.co.kr/cdn/shop/files/MAIN-SMART.jpg?v=1683087480&width=1000"
                                          alt="Smart HJC" class="mosaic__image mosaic__image--small" />
                                    <div class="mosaic__overlay">
                                          <h4 class="mosaic__title">SMART HJC</h4>
                                          <p class="mosaic__subtitle">
                                                2세대 SMART HJC 블루투스 시스템을 소개합니다.
                                          </p>
                                          <a href="" class="mosaic__link"><button class="button button--primary">
                                                      VIEW MORE
                                                </button></a>
                                    </div>
                              </div>
                        </div>
                  </div> -->
                  <!-- end mosaic -->

                  <!-- shopify -->
                  <?php if (isset($productFirst) && count($productFirst) > 0): ?>
                  <div id="shopify" class="shopify-section">
                        <div class="shopify__image-container">
                              <img src="<?= wp_get_attachment_url(get_term_meta($categories[0]->term_id, 'thumbnail_id', true)) ?>"
                                    alt="" class="shopify__image" />
                              <div class="shopify__image-overlay">
                                    <h2 class="shopify__title"><?= isset($cateNameFirst) ? $cateNameFirst : '' ?>
                                    </h2>
                              </div>
                        </div>
                        <div class="shopify__product-list">
                              <?php
                                    foreach ($productFirst as $product):
                                          $tags = wp_get_post_terms($product->get_id(), 'product_tag'); ?>
                              <a href="<?=  convertToProductUrl(esc_url(get_permalink($product->get_id())), $product->get_name() ?  esc_html($product->get_name()) : '') ?>" class="shopify__product-item">
                                    <div class="shopify__product-image-wrapper">
                                          <?php if (isset($tags[0]->name)) {  ?>
                                          <span
                                                class="shopify__product-badge shopify__product-badge--new shopify__product-badge--new"><?= esc_html($tags[0]->name) ?  esc_html($tags[0]->name) : '' ?></span>
                                          <?php } ?>
                                          <img src="<?= esc_url(wp_get_attachment_url($product->get_image_id())) ? esc_url(wp_get_attachment_url($product->get_image_id())) : '' ?>"
                                                alt="<?= esc_attr($product->get_name()) ?  esc_attr($product->get_name()) : '' ?>"
                                                class="shopify__product-image" />
                                    </div>
                                    <div class="shopify__product-details">
                                          <h3 class="shopify__product-title">
                                                <?= $product->get_name() ?  esc_html($product->get_name()) : ''  ?>
                                          </h3>
                                          <p class="shopify__product-cate"><?= esc_html($categories[0]->name) ?>
                                          </p>
                                          <span class="shopify__product-price"><?= number_format($product->get_price(), 0, ',', '.') ? number_format($product->get_price(), 0, ',', '.') : '' ?>
                                          </span>đ
                                    </div>
                              </a>
                              <?php
                                    endforeach;
                                    ?>
                        </div>
                        <div class="shopify__cta">
                              <a href="<?= isset($cateLinkFirst) ? $cateLinkFirst : '' ?>"
                                    class="button button--primary shopify__cta-button">
                                    VIEW MORE
                              </a>
                        </div>
                  </div>
                  <?php endif; ?>

                  <?php if (isset($productSecond) && count($productSecond) > 0):
                  ?>
                  <div id="shopify-2" class="shopify-section">
                        <div class="shopify__image-container">
                              <img src=<?= wp_get_attachment_url(get_term_meta($categories[1]->term_id, 'thumbnail_id', true)) ?>
                                    alt="" class="shopify__image" />
                              <div class="shopify__image-overlay">
                                    <h2 class="shopify__title">
                                          <?= isset($cateNameSecond) ? $cateNameSecond : '' ?></h2>
                              </div>
                        </div>
                        <div class="shopify__product-list">
                              <?php
                                    foreach ($productSecond as $product):
                                          $tags = wp_get_post_terms($product->get_id(), 'product_tag'); ?>
                              <a href="<?=  convertToProductUrl(esc_url(get_permalink($product->get_id())), $product->get_name() ?  esc_html($product->get_name()) : '')?>" class="shopify__product-item">
                                    <div class="shopify__product-image-wrapper">
                                          <?php if (isset($tags[0]->name)) {  ?>
                                          <span
                                                class="shopify__product-badge shopify__product-badge--new shopify__product-badge--new"><?= esc_html($tags[0]->name) ?  esc_html($tags[0]->name) : '' ?></span>
                                          <?php } ?>
                                          <img src="<?= esc_url(wp_get_attachment_url($product->get_image_id())) ? esc_url(wp_get_attachment_url($product->get_image_id())) : '' ?>"
                                                alt="<?= esc_attr($product->get_name()) ?  esc_attr($product->get_name()) : '' ?>"
                                                class="shopify__product-image" />
                                    </div>
                                    <div class="shopify__product-details">
                                          <h3 class="shopify__product-title">
                                                <?= $product->get_name() ?  esc_html($product->get_name()) : ''  ?>
                                          </h3>
                                          <p class="shopify__product-cate"><?= esc_html($categories[1]->name) ?>
                                          </p>
                                          <span class="shopify__product-price"><?= number_format($product->get_price(), 0, ',', '.') ? number_format($product->get_price(), 0, ',', '.') : '' ?>
                                          </span>đ
                                    </div>
                              </a>
                              <?php
                                    endforeach;
                                    ?>
                        </div>
                        <div class="shopify__cta">
                              <a href="<?= isset($cateLinkSecond) ? $cateLinkSecond : '' ?>"
                                    class="button button--primary shopify__cta-button">
                                    VIEW MORE
                              </a>
                        </div>
                  </div>
                  <?php endif; ?>

                  <?php if (isset($productThird) && count($productThird) > 0): ?>
                  <div id="shopify-3" class="shopify-section">
                        <div class="shopify__image-container">
                              <img src=<?= wp_get_attachment_url(get_term_meta($categories[2]->term_id, 'thumbnail_id', true)) ?>
                                    alt="" class="shopify__image" />
                              <div class="shopify__image-overlay">
                                    <h2 class="shopify__title"><?= isset($cateNameThird) ? $cateNameThird : '' ?>
                                    </h2>
                              </div>
                        </div>
                        <div class="shopify__product-list">
                              <?php foreach ($productThird as $product):
                                          $categories = wp_get_post_terms($product->get_id(), 'product_cat');
                                          $tags = wp_get_post_terms($product->get_id(), 'product_tag'); ?>
                               <a href="<?=  convertToProductUrl(esc_url(get_permalink($product->get_id())), $product->get_name() ?  esc_html($product->get_name()) : '')?>" class="shopify__product-item">
                                    <div class="shopify__product-image-wrapper">
                                          <span
                                                class="shopify__product-badge shopify__product-badge--new shopify__product-badge--new"><?= esc_html($tags[0]->name) ?></span>
                                          <img src="<?= esc_url(wp_get_attachment_url($product->get_image_id())) ?>"
                                                alt="<?= esc_attr($product->get_name()) ?>"
                                                class="shopify__product-image" />
                                    </div>
                                    <div class="shopify__product-details">
                                           <h3 class="shopify__product-title">
                                                <?= $product->get_name() ?  esc_html($product->get_name()) : ''  ?>
                                          </h3>
                                          <p class="shopify__product-cate"><?= esc_html($categories[0]->name) ?>
                                          </p>
                                          <span class="shopify__product-price"><?= number_format((float)$product->get_price(), 0, ',', '.') ?>
                                          </span>đ
                                    </div>
                              </a>
                              <?php
                                    endforeach;
                                    ?>
                        </div>
                        <div class="shopify__cta">
                              <a href=<?= isset($cateLinkThird) ? $cateLinkThird : '' ?>
                                    class="button button--primary shopify__cta-button">
                                    VIEW MORE
                              </a>
                        </div>
                  </div>
                  <?php endif; ?>
                  <!-- end shopify -->

                  <!-- blogs -->
                  <div id="blogs" class="blogs-section">
                        <div class="blogs__list">
                              <?php
                              if (empty($blogs)) {
                                    foreach ($blogs as $blog) : ?>
                              <a href="<?= $blog["link"] ?>" class="blogs__item">
                                    <div class="blogs__image-wrapper">
                                          <img class="blogs__image" src="<?= $blog["thumbnail"] ?>" alt="" />
                                    </div>
                                    <div class="blogs__details">
                                          <h3 class="blogs__title"><?= $blog["title"] ?></h3>
                                          <div class="blogs__description">
                                                <p class="blogs__text"><?= $blog["excerpt"] ?></p>
                                                <p class="blogs__link">
                                                      <?= date('d/m/Y', strtotime($blog["date"]))  ?>
                                                </p>
                                          </div>
                                    </div>
                              </a>
                              <?php endforeach;
                              }   ?>
                        </div>
                  </div>
                  <!-- end blogs -->
            </div>
      </main>
      <!-- end banner -->


</main>



<?php
get_footer();
?>