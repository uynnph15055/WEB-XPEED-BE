<?php

/**
 * Template Name: Blog
 * Author: Uynn
 */
get_header();

use app\Controllers\BlogController;

$blog = new BlogController();
$blogs = $blog->blogs;
$paged = $blog->paged;
$pagination = $blog->paginationLinks();
$pagination_links =  $pagination_links = $pagination['pagination_links'];
$previous_page_link = $pagination['previous_page_link'];
$next_page_link = $pagination['next_page_link'];
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
      <?php get_sidebar(); ?>
</div>
<?php
get_footer();
?>