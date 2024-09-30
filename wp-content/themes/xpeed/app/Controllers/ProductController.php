<?php

namespace app\Controllers;


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
}


$product = new ProductController();
$categories = $product->categories;

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