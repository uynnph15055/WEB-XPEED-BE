<?php

/**
 * Template Name: About Us
 */
get_header();
?>
<main id="main-content">
      <?php
      // Load nội dung được tạo bởi Elementor
      if (have_posts()) :
            while (have_posts()) :
                  the_post();
                  the_content(); // Elementor sẽ render nội dung ở đây
            endwhile;
      endif;
      ?>
</main>
<?php
get_footer();
