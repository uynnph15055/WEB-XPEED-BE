<?php

/**
 * Template Name: Product List
 * Author: Uynn
 */
get_header();
?>
<div class="blogs-detail__header">
      <img class="blogs-detail__header-img"
            src="https://rt6moto.co.kr/cdn/shop/files/menu-top_4c3d4001-dd09-4cb6-bb8f-8b8f19dd9503_640x.jpg?v=1683088746"
            alt="" />
      <div class="blogs-detail__content">
            <h6 id="blogs-detail-title-page" class="blogs-detail__desc">
                  Bài viết
            </h6>
            <h1 id="blogs-detail-title" class="blogs-detail__heading">
                  Tiêu đề chi tiết bài viết
            </h1>
      </div>
</div>
<!-- end blogs header -->

<div class="blog__details">
      <div class="blog__details__contents">
            <div class="blog__details__author">
                  <h2 class="blog__details__author-name">
                        <ion-icon name="person-outline" class="blog__details__author-icon"></ion-icon>
                        <span class="blog__details__author-content">Author</span>
                  </h2>

                  <div class="blog__details__author-group">
                        <p class="blog__details__author-date">
                              <ion-icon name="calendar-outline" class="blog__details__author-icon"></ion-icon>
                              <span class="blog__details__author-date">28/09/2024
                                    <span class="blog__details__author-time">16:00</span></span>
                        </p>
                  </div>
            </div>

            <div class="blog__details__content">
                  <p>Blog details</p>

                  <div class="blog__details__content-img">
                        <img src="https://rt6moto.co.kr/cdn/shop/files/MAIN-full_face.jpg?v=1683869270&width=1080"
                              alt="blog-details-img" />
                  </div>

                  <h3 class="blog__details-heading">Heading 1</h3>

                  <p class="blog__details-paragraph">
                        In minim excepteur eiusmod laboris laborum voluptate commodo ea
                        pariatur occaecat.
                  </p>

                  <p class="blog__details-paragraph">
                        Dolore eiusmod id nulla Lorem tempor occaecat tempor sunt in nostrud
                        dolore reprehenderit cupidatat. Duis tempor sint cupidatat sint do
                        veniam eu esse. Fugiat fugiat exercitation cupidatat culpa laborum.
                        Consectetur nostrud do duis aute excepteur amet incididunt magna
                        excepteur esse officia. Fugiat cupidatat mollit cupidatat voluptate
                        adipisicing veniam anim Lorem qui sit nulla irure.
                  </p>

                  <h3 class="blog__details-heading">Heading 2</h3>

                  <p class="blog__details-paragraph">
                        In non do ipsum proident labore mollit. Id mollit reprehenderit anim
                        veniam ea veniam incididunt. Pariatur eiusmod incididunt ipsum enim.
                        Proident est officia sunt voluptate Lorem nulla deserunt sint amet
                        Lorem cillum consectetur eu. Qui id quis voluptate proident culpa eu
                        cillum. Sunt sint aliqua ullamco consectetur. Et reprehenderit est
                        elit adipisicing. Quis enim nulla incididunt Lorem cupidatat
                        officia. Deserunt velit velit excepteur consequat duis sint ea nisi
                        aliqua. Exercitation Lorem magna fugiat velit esse pariatur.
                  </p>

                  <p class="blog__details-paragraph">
                        Ad consequat minim enim qui consequat esse non sunt mollit nostrud
                        mollit eu proident est. Occaecat labore ullamco irure consequat
                        dolor nisi aliqua. Ullamco do fugiat Lorem irure ad incididunt nulla
                        cupidatat amet dolore officia est dolor est. Nostrud cupidatat
                        cillum minim occaecat reprehenderit eu eu cupidatat velit officia
                        aute. Qui incididunt qui labore magna sit occaecat magna
                        exercitation anim exercitation amet incididunt.
                  </p>
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
                                    <a class="blogs__popular-item-link" href="http://localhost/WEB-XPEED-BE/test-1234/">
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
                                    <a class="blogs__popular-item-link" href="http://localhost/WEB-XPEED-BE/test-1234/">
                                          <img class="blogs__popular-item__img"
                                                src="https://rt6moto.co.kr/cdn/shop/articles/1_ec5cf67a-f507-4efe-a898-99e1bbd6b06b.jpg?v=1692755011&width=550"
                                                alt="" />
                                    </a>
                              </div>
                              <div class="">
                                    <h3 class="blogs__popular-item__title">
                                          <a class="blogs__popular-item-link"
                                                href="http://localhost/WEB-XPEED-BE/test-1234/">쇼룸 안내</a>
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

<?php get_footer(); ?>