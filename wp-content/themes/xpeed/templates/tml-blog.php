<?php

/**
 * Template Name: Blog
 * Author: Uynn
 */
get_header();
require_once dirname(__DIR__) . '/app/Controllers/BlogController.php';
?>

<div class="blogs__header">
      <img class="blogs__header-img"
            src="https://rt6moto.co.kr/cdn/shop/files/F70-redbull-side_5b4d31b8-44a0-4c44-9a95-b46a869f9705.jpg?v=1677677339&width=1728"
            alt="">
      <h1 id="blogs-title" class="blogs__heading">Bài viết</h1>
</div>

<div class="blogs__container">
      <div class="blogs__content">
            <div class="blogs__list">
                  <?php
                  if (empty($blogs)) {
                        echo "Không có bài viết";
                        return;
                  } else {
                        foreach ($blogs as $blog) : ?>
                  <a href="<?= $blog["link"] ?>" class="blogs__item">
                        <div class="blogs__image-wrapper">
                              <img class="blogs__image" src="<?= $blog["thumbnail"] ?>" alt="" />
                        </div>
                        <div class="blogs__details">
                              <h3 class="blogs__title"><?= $blog["title"] ?></h3>
                              <div class="blogs__description">
                                    <p class="blogs__text"><?= $blog["excerpt"] ?></p>
                                    <p class="blogs__link"><?= date('d/m/Y', strtotime($blog["date"]))  ?></p>
                              </div>
                        </div>
                  </a>
                  <?php endforeach;
                  }   ?>
            </div>
            <div class="blogs__content-pagination">
                  <div class="pagination-action">
                        <?php if ($previous_page_link): ?>
                        <a href="<?php echo esc_url($previous_page_link); ?>" class="pagination-action-icon"
                              aria-label="Previous Page">
                              <div class="pagination-action-icon-child">
                                    <ion-icon name="arrow-back-outline"></ion-icon>
                              </div>
                        </a>
                        <?php endif; ?>

                        <?php if ($next_page_link): ?>
                        <a href="<?php echo esc_url($next_page_link); ?>" class="pagination-action-icon"
                              aria-label="Next Page">
                              <div class="pagination-action-icon-child">
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                              </div>
                        </a>
                        <?php endif; ?>
                  </div>

                  <?php if (!empty($pagination_links)): ?>
                  <div class="pagination-number-list" style="gap: 20px">
                        <?php foreach ($pagination_links as $index => $pagination_link) :
                                    echo $pagination_link; ?>
                        <?php endforeach; ?>
                  </div>
                  <?php endif; ?>
            </div>
      </div>
      <div class="blogs__sidebar">
            <form class="blogs__sidebar-form" action="">
                  <input class="blogs__sidebar-input" type="text" placeholder="Tìm kiếm..." />
                  <button class="blogs__sidebar-btn">
                        <ion-icon name="search-outline"></ion-icon>
                  </button>
            </form>
            <div class="blogs__popular">
                  <h2 class="blogs__sidebar-title">Bài viết nổi bật</h2>
                  <div class="blogs__popular-list">
                        <div class="blogs__popular-item">
                              <div class="blogs__popular-item-img-wrap">
                                    <a class="blogs__popular-item-link" href="">
                                          <img class="blogs__popular-item__img"
                                                src="https://rt6moto.co.kr/cdn/shop/articles/1_ec5cf67a-f507-4efe-a898-99e1bbd6b06b.jpg?v=1692755011&width=550"
                                                alt="" />
                                    </a>
                              </div>
                              <div class="">
                                    <h3 class="blogs__popular-item__title">
                                          <a class="blogs__popular-item-link" href="">쇼룸 안내</a>
                                    </h3>
                                    <p class="blogs__popular-item__desc">
                                          편의를 위해 최선을 다하는 HJC 쇼룸
                                    </p>
                              </div>
                        </div>
                        <div class="blogs__popular-item">
                              <div class="blogs__popular-item-img-wrap">
                                    <a class="blogs__popular-item-link" href="">
                                          <img class="blogs__popular-item__img"
                                                src="https://rt6moto.co.kr/cdn/shop/articles/1_ec5cf67a-f507-4efe-a898-99e1bbd6b06b.jpg?v=1692755011&width=550"
                                                alt="" />
                                    </a>
                              </div>
                              <div class="">
                                    <h3 class="blogs__popular-item__title">
                                          <a class="blogs__popular-item-link" href="">쇼룸 안내</a>
                                    </h3>
                                    <p class="blogs__popular-item__desc">
                                          편의를 위해 최선을 다하는 HJC 쇼룸 편의를 위해 최선을 다하는
                                          HJC 쇼룸
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>

            <div class="blogs__popular-products">
                  <h2 class="blogs__sidebar-title">Sản phẩm nổi bật</h2>
                  <div class="blogs__popular-products-list">
                        <div class="blogs__popular-products-item">
                              <div class="blogs__popular-products-item-img-wrap">
                                    <a class="blogs__popular-products-item-link" href="">
                                          <img class="blogs__popular-products-item__img"
                                                src="https://bikegear.in/image/cache/catalog/products/HJC%20Helmets/hjc-f31-solid-semi-flat-black-helmet/1-hjc-f31-solid-semi-flat-black-helmet-800x800.png"
                                                alt="" />

                                          <span
                                                class="blogs__popular-products--badge blogs__popular-products--badge-new">NEW</span>
                                    </a>
                              </div>
                              <div class="">
                                    <h3 class="blogs__popular-products-item__title">
                                          <a class="blogs__popular-products-item-link" href="">i71 CELOS / MC5</a>
                                    </h3>
                                    <p class="blogs__popular-products-item__desc-price">
                                          ₩ 299,000
                                    </p>
                                    <p class="blogs__popular-products-item__desc">FULL FACE</p>
                              </div>
                        </div>

                        <div class="blogs__popular-products-item">
                              <div class="blogs__popular-products-item-img-wrap">
                                    <a class="blogs__popular-products-item-link" href="">
                                          <img class="blogs__popular-products-item__img"
                                                src="https://bikegear.in/image/cache/catalog/products/HJC%20Helmets/hjc-f31-solid-semi-flat-black-helmet/1-hjc-f31-solid-semi-flat-black-helmet-800x800.png"
                                                alt="" />

                                          <span
                                                class="blogs__popular-products--badge blogs__popular-products--badge-new">NEW</span>
                                    </a>
                              </div>
                              <div class="">
                                    <h3 class="blogs__popular-products-item__title">
                                          <a class="blogs__popular-products-item-link" href="">i71 CELOS / MC5</a>
                                    </h3>
                                    <p class="blogs__popular-products-item__desc-price">
                                          ₩ 299,000
                                    </p>
                                    <p class="blogs__popular-products-item__desc">FULL FACE</p>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</div>
<?php
get_footer();
?>