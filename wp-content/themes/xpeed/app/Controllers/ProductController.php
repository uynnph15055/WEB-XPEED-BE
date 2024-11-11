<?php

namespace app\Controllers;

use WP_REST_Response;
use WP_Query;

use app\Controllers\Controller as BaseController;

class ProductController extends BaseController

{
    public $categories;
    public $attributes;
    public $attribute_slug = 'pa_size';

    public function __construct()
    {
        $this->categories = $this->getProductCategories();
        $this->attributes = $this->getAttributes();
    }

    public function getProductCategoriesApi()
    {
        return new WP_REST_Response(array(
            'categories' => $this->categories,
        ), 200);
    }

    public function getAttributesApi()
    {
        return new WP_REST_Response(array(
            'attributes' => $this->attributes,
        ), 200);
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
            $categories = explode(',', $category);
            $args['tax_query'][] = array(
                'taxonomy' => 'product_cat',
                'field' => 'slug',
                'terms' => $categories,
            );
        }

        if (!empty($size)) {
            $sizes = explode(',', $size);
            $args['meta_query'][] = array(
                'key' => 'attribute_pa_size',
                'value' => $sizes,
                'compare' => '='
            );
        }

        if ($min_price || $max_price < PHP_INT_MAX) {
            $args['meta_query'][] = array(
                'key' => '_price',
                'value' => array($min_price, $max_price),
                'compare' => 'BETWEEN',
                'type' => 'NUMERIC'
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

                $tags = get_the_terms(get_the_ID(), 'product_tag');
                $first_tag = !empty($tags) && !is_wp_error($tags) ? reset($tags)->name : '';

                $sale_price = get_post_meta(get_the_ID(), '_sale_price', true);

                $products[] = array(
                    'ID' => get_the_ID(),
                    'title' => get_the_title(),
                    'url' => get_permalink(),
                    'image' => get_the_post_thumbnail_url(get_the_ID(), 'thumbnail'),
                    'price' => get_post_meta(get_the_ID(), '_price', true),
                    'sale_price' => $sale_price ? $sale_price : null,
                    'first_category' => $first_category,
                    'first_tag' => $first_tag,
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

    public function getAttributes()
    {
        $terms = get_terms(array(
            'taxonomy' => $this->attribute_slug,
            'hide_empty' => false,
        ));

        $attribute_values = [];

        if (!empty($terms) && !is_wp_error($terms)) {
            foreach ($terms as $term) {
                $attribute_values[] = array(
                    'name' => $term->name,
                    'slug' => $term->slug,
                );
            }
        } else {
            return [];
        }

        return $attribute_values;
    }

    private function getProductCategories()
    {
        $terms = get_terms(array(
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

    public function getProductInfo()
    {
        // Get the current URL
        $current_url = home_url(add_query_arg(NULL, NULL));

        // Parse URL to get the slug
        $url_parts = parse_url($current_url);
        $path = $url_parts['path'];
        $slug = basename($path);

        // Retrieve product by slug
        $product = get_page_by_path($slug, OBJECT, 'product');

        if (true) {
            $product_id = $product->ID;

            $wc_product = wc_get_product($product_id);

            if ($wc_product) {
                // Retrieve product categories
                $category_ids = $wc_product->get_category_ids();
                $categories = [];

                foreach ($category_ids as $category_id) {
                    $category = get_term($category_id, 'product_cat');
                    if (!is_wp_error($category) && !empty($category)) {
                        $categories[] = [
                            'id' => $category->term_id,
                            'name' => $category->name,
                            'slug' => $category->slug,
                            'link' => get_term_link($category)
                        ];
                    }
                }

                // Get gallery and main image
                $gallery_images = array_map('wp_get_attachment_url', $wc_product->get_gallery_image_ids());

                $main_image = $wc_product->get_image_id() ? wp_get_attachment_url($wc_product->get_image_id()) : ($gallery_images[0] ?? '');

                // Retrieve Upsell Products
                $upsell_ids = $wc_product->get_upsell_ids();
                $upsell_products = [];

                if (!empty($upsell_ids)) {
                    foreach ($upsell_ids as $upsell_id) {
                        $upsell_product = wc_get_product($upsell_id);

                        if ($upsell_product) {
                            // Get upsell product categories
                            $upsell_category_ids = $upsell_product->get_category_ids();
                            $upsell_categories = [];

                            foreach ($upsell_category_ids as $upsell_category_id) {
                                $upsell_category = get_term($upsell_category_id, 'product_cat');
                                if (!is_wp_error($upsell_category) && !empty($upsell_category)) {
                                    $upsell_categories[] = [
                                        'id' => $upsell_category->term_id,
                                        'name' => $upsell_category->name,
                                        'slug' => $upsell_category->slug,
                                        'link' => get_term_link($upsell_category)
                                    ];
                                }
                            }

                            $upsell_products[] = [
                                'id' => $upsell_product->get_id(),
                                'name' => $upsell_product->get_name(),
                                'price' => $upsell_product->get_price(),
                                'image_url' => wp_get_attachment_url($upsell_product->get_image_id()),
                                'link' => get_permalink($upsell_product->get_id()),
                                'categories' => $upsell_categories,
                            ];
                        }
                    }
                }

                // Retrieve product attributes
                $attributes = [];
                foreach ($wc_product->get_attributes() as $attribute) {
                    if ($attribute->is_taxonomy()) {

                        $attribute_values = $wc_product->get_available_variations();
                        $attributes[$attribute["name"]] = [
                            'name' => wc_attribute_label($attribute->get_name()),
                            'value' => $attribute_values,
                        ];
                    } else {
                        $attributes[$attribute["name"]] = [
                            'name' => wc_attribute_label($attribute->get_name()),
                            'value' => implode(', ', $attribute->get_options()),
                        ];
                    }
                }

                // Retrieve product meta data
                $meta_data = [];
                foreach ($wc_product->get_meta_data() as $meta) {
                    $meta_data[] = [
                        'key' => $meta->key,
                        'value' => $meta->value,
                    ];
                }
                // Return product information

                return [
                    'id' => $wc_product->get_id(),
                    'name' => $wc_product->get_name(),
                    'price' => $wc_product->get_price(),
                    'short_description' => $wc_product->get_short_description(),
                    'full_description' => $wc_product->get_description(),
                    'main_image' => $main_image,
                    'gallery_images' => $gallery_images,
                    'stock_quantity' => $wc_product->get_stock_quantity(),
                    'attributes' => $attributes,
                    'productType' => !empty($attributes) ? 'variable' : 'simple',
                    'meta_data' => $meta_data,
                    'categories' => $categories,
                    'upsell_products' => $upsell_products,
                ];
            }
        }

        return [];
    }

    public function getProductByAttributes($request)
    {
        // Lấy các tham số từ request
        $product_id = $request->get_param('product_id');
        $attributes = $request->get_param('attributes');
        $attributeKey = $request->get_param('attributeKey');

        // Kiểm tra sản phẩm tồn tại và là sản phẩm biến thể
        $product = wc_get_product($product_id);
        if (!$product || !$product->is_type('variable')) {
            return $this->fail('Sản phẩm không tồn tại hoặc không phải sản phẩm biến thể.');
        }

        // Lấy các biến thể có sẵn
        $product = wc_get_product($product_id);
        $variations = $product->get_available_variations();

        // Tìm biến thể khớp với các thuộc tính
        foreach ($variations as $variation) {
            $matched = array_reduce(array_keys($attributes), function ($carry, $attribute_name) use ($variation, $attributeKey, $attributes) {
                return $carry && ($variation['attributes']['attribute_' . $attributeKey] == $attributes[$attribute_name]);
            }, true);
            $variation['product_name'] = $product->get_name();
            // Nếu tìm thấy biến thể phù hợp, trả về giá
            if ($matched) {
                return $this->success('Thành công', $variation);
            }
        }
        return $this->fail('Không tìm thấy biến thể phù hợp.');
    }
}
