<?php

namespace app\Controllers;

use WP_Query;
use WP_REST_Response;

class ProductController

{
      public $categories;

      public function __construct()
      {
            $this->categories = $this->getProductCategories();
      }

      private function getProductCategories()
      {
            $terms =  get_terms(array(
                  'taxonomy' => 'product_cat',
                  'hide_empty' => false,
            ));

            if (is_wp_error($terms)) {
                  return [];
            }

            return array_values($terms);
      }

      public function getCategoryLink($category_id)
      {
            $term = get_term($category_id, 'product_cat');
            if (!is_wp_error($term) && !empty($term)) {
                  return get_term_link($term);
            }
            return false;
      }

      public function getProductLimitItemPageHome($category_id = null)
      {
            $args = array(
                  'limit' => 5,
                  'orderby' => 'date',
                  'return' => 'objects',
                  'category' => get_term($category_id, 'product_cat')->slug,
            );

            $products = wc_get_products($args);
            return $products;
      }

      function getNewProducts($limit = 3)
      {
            $args = array(
                  'post_type' => 'product',
                  'posts_per_page' => $limit,
                  'tax_query' => array(
                        array(
                              'taxonomy' => 'product_tag',
                              'field'    => 'slug',
                              'terms'    => 'NEW',
                        ),
                  ),
            );

            $query = new WP_Query($args);
            $new_products = array();

            if ($query->have_posts()) {
                  while ($query->have_posts()) {
                        $query->the_post();
                        $terms = get_the_terms(get_the_ID(), 'product_cat');
                        $first_category = !empty($terms) && !is_wp_error($terms) ? reset($terms)->name : '';
                        $new_products[] = array(
                              'ID' => get_the_ID(),
                              'title' => get_the_title(),
                              'url' => get_permalink(),
                              'image' => get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'),
                              'price' => get_post_meta(get_the_ID(), '_price', true),
                              'first_category' => $first_category,
                        );
                  }
            }

            wp_reset_postdata();

            return $new_products;
      }

      function getListProducts($data)
      {
            $category = isset($data['category']) ? sanitize_text_field($data['category']) : '';
            $size = isset($data['size']) ? sanitize_text_field($data['size']) : '';
            $min_price = isset($data['min_price']) ? floatval($data['min_price']) : 0;
            $max_price = isset($data['max_price']) ? floatval($data['max_price']) : PHP_INT_MAX;
            $page = isset($data['page']) ? intval($data['page']) : 1;
            $per_page = isset($data['per_page']) ? intval($data['per_page']) : 10;
            $args = array(
                  'post_type' => 'product',
                  'posts_per_page' => $per_page,
                  'paged' => $page,
                  'tax_query' => array(),
                  'meta_query' => array('relation' => 'AND'),
            );

            if (!empty($category)) {
                  $args['tax_query'][] = array(
                        'taxonomy' => 'product_cat',
                        'field'    => 'slug',
                        'terms'    => $category,
                  );
            }


            if (!empty($size)) {
                  $args['meta_query'][] = array(
                        'key'     => 'attribute_pa_kich-thuoc',
                        'value'   => $size,
                        'compare' => '='
                  );
            }

            if ($min_price || $max_price < PHP_INT_MAX) {
                  $args['meta_query'][] = array(
                        'key'     => '_price',
                        'value'   => array($min_price, $max_price),
                        'compare' => 'BETWEEN',
                        'type'    => 'NUMERIC'
                  );
            }

            if (empty($args['tax_query'])) {
                  unset($args['tax_query']);
            }
            if (empty($args['meta_query'])) {
                  unset($args['meta_query']);
            }

            $query = new WP_Query($args);
            $products = array();

            if ($query->have_posts()) {
                  while ($query->have_posts()) {
                        $query->the_post();
                        $terms = get_the_terms(get_the_ID(), 'product_cat');
                        $first_category = !empty($terms) && !is_wp_error($terms) ? reset($terms)->name : '';
                        $products[] = array(
                              'ID' => get_the_ID(),
                              'title' => get_the_title(),
                              'url' => get_permalink(),
                              'image' => get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'),
                              'price' => get_post_meta(get_the_ID(), '_price', true),
                              'first_category' => $first_category,
                        );
                  }
            }

            wp_reset_postdata();

            return new WP_REST_Response(array(
                  'current_page' => $page,
                  'total_pages' => $query->max_num_pages,
                  'products' => $products,
            ), 200);
      }
}
