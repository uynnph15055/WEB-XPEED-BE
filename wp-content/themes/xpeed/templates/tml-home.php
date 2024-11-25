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
$productSecond = isset($product->categories[1]) ?
      $product->getProductLimitItemPageHome($product->categories[1]->term_id) : null;
$productThird = isset($product->categories[2]) ? $product->getProductLimitItemPageHome($product->categories[2]->term_id)
      : null;

// -----------
$sliders = $homeController->getSlider(8);
?>
<main class="home-wrapper">
      <!-- banner -->
      <main class="home-wrapper">
            <!-- banner -->
            <div class="banner">
                  <?php foreach ($sliders as $index => $slider) :  ?>
                  <div class="banner_item <?= $index == 0 ? 'is-active' : '' ?> ">
                        <img src="<?= $slider['image'] ?>" alt="<?= $slider['title'] ?>" class="banner_image" />
                        <div class="over_lay">
                              <div class="banner-content containerX">
                                    <div class="banner-content__inside">
                                          <h2 class="banner-content__heading">
                                                <?= $slider['title'] ?>
                                          </h2>
                                          <p class="banner-content__subheading"><?= $slider['content'] ?></p>
                                          <a href="<?= $slider['link'] ?>"
                                                class="button banner-content__button button--secondary">
                                                <?= pll_current_language() == 'vi' ? 'Mua ngay' : 'Buy now' ?>
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <?php endforeach; ?>

                  <ul class="banner_dots">
                        <?php for ($i = 0; $i < count($sliders); $i++) : ?>
                        <li class="banner_dots-item <?= $i == 0 ? 'is-active' : '' ?>"></li>
                        <?php endfor; ?>
                  </ul>
            </div>
            <!-- end banner -->

            <div class="home-wrapper__content">
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
                              <a href="<?= esc_url(get_permalink($product->get_id())) ?>" class="shopify__product-item">
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
                              <a href="<?= esc_url(get_permalink($product->get_id())) ?>" class="shopify__product-item">
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
                              <div class="shopify__product-item">
                                    <div class="shopify__product-image-wrapper">
                                          <span
                                                class="shopify__product-badge shopify__product-badge--new shopify__product-badge--new"><?= esc_html($tags[0]->name) ?></span>
                                          <img src="<?= esc_url(wp_get_attachment_url($product->get_image_id())) ?>"
                                                alt="<?= esc_attr($product->get_name()) ?>"
                                                class="shopify__product-image" />
                                    </div>
                                    <div class="shopify__product-details">
                                          <h3 class="shopify__product-title">
                                                <a href="" class="shopify__product-link">
                                                      <?= $product->get_name() ?>
                                                </a>
                                          </h3>
                                          <p class="shopify__product-cate"><?= esc_html($categories[0]->name) ?>
                                          </p>
                                          <span class="shopify__product-price"><?= number_format($product->get_price(), 0, ',', '.') ?>
                                          </span>đ
                                    </div>
                              </div>
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

            <!-- ig -->
            <div id="ig" class="ig-library-section">
                  <div class="ig-library__container">
                        <div class="ig-library__header">
                              <div class="ig-library__title">FOLLOW US</div>
                              <div class="ig-library__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                          viewBox="0 0 512 512">
                                          <path style="fill: #000000"
                                                d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z">
                                          </path>
                                          <path style="fill: #000000"
                                                d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z">
                                          </path>
                                          <circle style="fill: #000000" cx="390.476" cy="121.524" r="30.23"></circle>
                                    </svg>
                              </div>
                              <ul class="ig-library__social-list">
                                    <li class="ig-library__social-item">
                                          <a href="#" class="ig-library__social-link">@route6moto</a>
                                    </li>
                                    <li class="ig-library__social-item">
                                          <a href="#" class="ig-library__social-link">@hjchelmets_kr
                                          </a>
                                    </li>
                                    <li class="ig-library__social-item">
                                          <a href="#" class="ig-library__social-link">#hjchelmets</a>
                                    </li>
                              </ul>
                        </div>
                        <div class="ig-library__gallery">
                              <?php foreach ($homeController->getSocial(8) as $social) {  ?>

                              <div class="ig-library__photo-item"
                                    onclick="window.location.href='<?php echo $social['title'] ?? '' ?>'">
                                    <div class="ig-library__photo">
                                          <img src="<?php echo $social['image'] ?>" alt="<?php echo $social['title'] ?>"
                                                class="ig-library__photo-image" />
                                    </div>
                                    <!-- Overlay -->
                                    <div class="ig-library__overlay">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                      d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                          </svg>
                                    </div>
                              </div>
                              <?php } ?>
                        </div>
                  </div>
            </div>
            <!-- end ig -->
      </main>
      <!-- end banner -->


</main>



<?php
get_footer();
?>