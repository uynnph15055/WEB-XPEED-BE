<?php
get_header();

use app\Controllers\BlogController;

$blog = new BlogController();
$blogDetail =  $blog->getBlogDetails();

?>
<div class="blogs-detail__header">
      <img class="blogs-detail__header-img"
            src="https://rt6moto.co.kr/cdn/shop/files/menu-top_4c3d4001-dd09-4cb6-bb8f-8b8f19dd9503_640x.jpg?v=1683088746"
            alt="" />
      <div class="blogs-detail__content">
            <h2 id="blogs-detail-title-page" class="blogs-detail__desc" style="font-size: 40px">
                  Bài viết
            </h2>
      </div>
</div>
<!-- end blogs header -->

<div class="blog__details">
      <div class="blog__details__contents">
            <div class="blog__details__author">
                  <h2 class="blog__details__author-name">
                        <ion-icon name="person-outline" class="blog__details__author-icon"></ion-icon>
                        <span class="blog__details__author-content">Admin</span>
                  </h2>

                  <div class="blog__details__author-group">
                        <p class="blog__details__author-date">
                              <ion-icon name="calendar-outline" class="blog__details__author-icon"></ion-icon>
                              <span
                                    class="blog__details__author-date"><?= date('d/m/Y H:i', strtotime($blogDetail->post_date)) ?></span>
                        </p>
                  </div>
            </div>

            <div class="blog__details__content">
                  <h1 id="blogs-detail-title" class="blogs-detail__heading">
                        <?= $blogDetail->post_title ?> </h1>
                  <?= $blogDetail->post_content ?>
            </div>
      </div>
      <?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>