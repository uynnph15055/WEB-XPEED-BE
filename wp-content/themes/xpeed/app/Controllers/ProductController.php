<?php

namespace app\Controllers;


use app\Controllers\Controller as BaseController;


class ProductController extends BaseController

{
    public $categories;

    public function __construct()
    {
        $this->categories = $this->getProductCategories();
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

        if ($product) {
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

                        $attribute_values = wc_get_product_terms($wc_product->get_id(), $attribute->get_name(), ['fields' => 'names']);
                        $attributes[$attribute["name"]] = [
                            'name' => wc_attribute_label($attribute->get_name()),
                            'value' => implode(', ', $attribute_values),
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
                    'meta_data' => $meta_data,
                    'categories' => $categories,
                    'upsell_products' => $upsell_products,
                ];
            }
        }

        return [];
    }

    public function getProductPrice($request)
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
        $variations = $product->get_available_variations();

        // Tìm biến thể khớp với các thuộc tính
        foreach ($variations as $variation) {
            $matched = array_reduce(array_keys($attributes), function ($carry, $attribute_name) use ($variation, $attributeKey, $attributes) {
                return $carry && ($variation['attributes']['attribute_' . $attributeKey] == $attributes[$attribute_name]);
            }, true);

            // Nếu tìm thấy biến thể phù hợp, trả về giá
            if ($matched) {
                return $this->success('Thành công', [
                    'price' => $variation['display_price'],
                    'regular_price' => $variation['display_regular_price'],
                    'sale_price' => $variation['display_sale_price'],
                ]);
            }
        }
        return $this->fail('Không tìm thấy biến thể phù hợp.');
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
