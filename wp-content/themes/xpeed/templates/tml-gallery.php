<?php

/**
 * Template Name: Gallery
 * Author: Uynn
 */

get_header();
?>
<div class="about__header">
      <img class="header-overlay__img about__header-img"
            src="https://xpeed-helmets.com/wp-content/uploads/2024/12/NEX-70-MC5-3.png" alt="" />
      <h1 id="about-title" class="about__heading"><?= _e('Gallery', 'xpeed') ?></h1>
</div>
<main id="main-content">
      <div class="containerX" style="margin-bottom: 80px">
            <?php
            // Kiểm tra xem trang có bài viết không
            if (have_posts()) :
                  while (have_posts()) :
                        the_post();
                        the_content(); // Elementor sẽ render nội dung ở đây
                  endwhile;
            endif;
            ?>
      </div>
</main>

<?php
get_footer();
?>