<?php
/**
 * Template Name: About Us
 */

get_header(); 
?>
<div class="about__header">
    <img
        class="header-overlay__img about__header-img"
        src="https://rt6moto.co.kr/cdn/shop/files/MAIN-full_face.jpg"
        alt=""
      />
    <h1 id="about-title" class="about__heading">Giới thiệu</h1>
</div>
<main id="main-content">
    <div class="containerX">
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