<?php

namespace app\Controllers;

use WP_Query;

class BlogController
{
      public $paged = 1;
      public $blogs;
      public $total_pages;
      public $blog_slug;

      public function __construct()
      {
            $this->blog_slug = url_to_postid(basename($_SERVER['REQUEST_URI']));
            $this->paged  = (get_query_var('paged')) ? get_query_var('paged') : 1;
            $this->blogs = $this->getBlogs();
      }

      public function getBlogs()
      {
            $posts_array = [];
            $args = array(
                  'post_type' => 'post',
                  'posts_per_page' => 3,
                  'paged' => $this->paged
            );

            $query = new WP_Query($args);
            $this->total_pages = $query->max_num_pages;

            if ($query->have_posts()) {
                  while ($query->have_posts()) {
                        $query->the_post();

                        $posts_array[] = array(
                              'title' => get_the_title(),
                              'link' => get_the_permalink(),
                              'excerpt' => get_the_excerpt(),
                              'date' => get_the_date(),
                              'thumbnail' => get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'),
                        );
                  }
            } else {
                  echo '<p>No posts found.</p>';
            }
            wp_reset_postdata();

            return $posts_array;
      }

      public function getBlogMoreView()
      {
            $args = array(
                  'post_type' => 'post',
                  'posts_per_page' => 3,
                  'meta_key' => 'views',
                  'orderby' => 'meta_value_num',
                  'order' => 'DESC',
            );

            $query = new WP_Query($args);
            $postTops = [];

            if ($query->have_posts()) {
                  while ($query->have_posts()) {
                        $query->the_post();
                        $postTops[] = array(
                              'ID' => get_the_ID(),
                              'title' => get_the_title(),
                              'url' => get_permalink(),
                              'excerpt' => get_the_excerpt(),
                              'views' => get_post_meta(get_the_ID(), 'views', true),
                              'image' => get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'), // Lấy URL hình ảnh đại diện
                        );
                  }
            }

            wp_reset_postdata();

            return $postTops;
      }

      public function paginationLinks()
      {
            $pagination_links = [];
            $previous_page_link = '';
            $next_page_link = '';

            if ($this->total_pages > 1) {
                  $pagination_links = paginate_links(array(
                        'total' => $this->total_pages,
                        'current' => $this->paged,
                        'format' => '?paged=%#%', // Đảm bảo tham số paged được thêm vào
                        'add_args' => false,
                        'prev_text' => false,
                        'next_text' => false,
                        'type' => 'array',
                  ));

                  if ($this->paged > 1) {
                        $previous_page_link = paginate_links(array(
                              'total' => $this->total_pages,
                              'current' => $this->paged - 1,
                              'format' => '?paged=%#%',
                              'add_args' => false,
                              'prev_text' => false,
                              'next_text' => false,
                              'type' => 'array',
                        ));
                        $previous_page_link = $previous_page_link[0] ?? '';
                  }

                  if ($this->paged < $this->total_pages) {
                        $next_page_link = paginate_links(array(
                              'total' => $this->total_pages,
                              'current' => $this->paged + 1,
                              'format' => '?paged=%#%',
                              'add_args' => false,
                              'prev_text' => false,
                              'next_text' => false,
                              'type' => 'array',
                        ));
                        $next_page_link = $next_page_link[0] ?? '';
                  }
            }

            return [
                  'pagination_links' => $pagination_links,
                  'previous_page_link' => $previous_page_link,
                  'next_page_link' => $next_page_link,
            ];
      }

      public function getBlogDetails()
      {
            $blogs_details = [];
            if ($this->blog_slug) {
                  $blogs_details = get_post($this->blog_slug);
            } else {
                  $blogs_details = [];
            }

            return $blogs_details;
      }
}
