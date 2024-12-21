<?php

namespace app\Controllers;

use WP_REST_Response;
use WP_REST_Request;
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
        'taxonomy'   => 'product_cat',
        'hide_empty' => false,
        'parent'     => 0, 
    ));

    if (is_wp_error($terms)) {
        return [];
    }

    // Lọc danh mục theo ngôn ngữ hiện tại
    $current_language = pll_current_language(); // Lấy ngôn ngữ hiện tại
    $filtered_terms   = [];

    foreach ($terms as $term) {
        // Lấy ID của danh mục theo ngôn ngữ hiện tại
        $translated_term_id = pll_get_term($term->term_id, $current_language);

        if ($translated_term_id) {
            $translated_term = get_term($translated_term_id, 'product_cat');
            if ($translated_term && !is_wp_error($translated_term)) {
                // Thêm liên kết vào đối tượng term
                $translated_term->link = get_term_link($translated_term);

                $filtered_terms[] = $translated_term;
            }
        }
    }

    return array_values($filtered_terms);
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
            'post_type' => 'product',
            'limit' => 5,
            'orderby' => 'date',
            'return' => 'objects',
            'category' => get_term($category_id, 'product_cat')->slug,
            // 'meta_query' => array(
            //     array(
            //         'key' => '_show_on_homepage',
            //         'value' => '0', 
            //         'compare' => '='
            //     )
            // )
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

            if (!$wc_product) {
                return 'Sản phẩm không hợp lệ !';
            }
            $product_type = $wc_product->get_type();

            // Check product type
            if (!in_array($product_type, ['variable'])) {
                return 'Sản phẩm không phải loại variable! ';
            }

            // Retrieve product categories
            $categories = [];
            foreach ($wc_product->get_category_ids() as $category_id) {
                $category = get_term($category_id, 'product_cat');
                if (!is_wp_error($category) && !empty($category)) {
                    $categories[] = [
                        'id' => $category->term_id,
                        'name' => $category->name,
                        'slug' => $category->slug,
                        'link' => get_term_link($category),
                    ];
                }
            }

            // Get gallery and main image
            $gallery_images = array_map('wp_get_attachment_url', $wc_product->get_gallery_image_ids());
            $main_image = $wc_product->get_image_id() ? wp_get_attachment_url($wc_product->get_image_id()) : ($gallery_images[0] ?? '');

            // Retrieve attributes with custom order
            $attributes = [];
            $variations = [];

            foreach ($wc_product->get_attributes() as $key => $attribute) {
                $attribute_name = wc_attribute_label($key);
                $is_taxonomy = $attribute->is_taxonomy();
                $term_ids = $attribute->get_options();
                $term_names = [];

                if ($is_taxonomy) {
                    // Get terms with custom order
                    $terms = get_terms([
                        'taxonomy'   => $key,
                        'include'    => $term_ids,
                        'orderby'    => 'term_order', // Order by custom order
                        'hide_empty' => false,
                    ]);

                    foreach ($terms as $term) {
                        $term_names[] = [
                            'name' => $term->name,
                            'slug' => $term->slug,
                        ];
                    }
                } else {
                    // For non-taxonomy attributes, use raw options
                    foreach ($term_ids as $value) {
                        $term_names[] = [
                            'name' => $value,
                            'slug' => sanitize_title($value),
                        ];
                    }
                }

                $attributes[$attribute_name] = ['value' => $term_names];

                if ($is_taxonomy) {
                    $attribute_values = $wc_product->get_available_variations();
                    $variations = $attribute_values;
                } else {
                    $variations = $attribute->get_options();
                }
            }

            if (empty($attributes)) {
                return 'Sản phẩm không có biến thể!';
            }

            // Retrieve product meta data
            $meta_data = [];
            foreach ($wc_product->get_meta_data() as $meta) {
                $meta_data[] = [
                    'key' => $meta->key,
                    'value' => $meta->value,
                ];
            }

            // Retrieve upsell products
            $upsell_ids = $wc_product->get_upsell_ids();
            $upsell_products = [];

            foreach ($upsell_ids as $upsell_id) {
                $upsell_product = wc_get_product($upsell_id);
                if ($upsell_product) {
                    $upsell_category_ids = $upsell_product->get_category_ids();
                    $upsell_categories = [];

                    foreach ($upsell_category_ids as $upsell_category_id) {
                        $upsell_category = get_term($upsell_category_id, 'product_cat');
                        if (!is_wp_error($upsell_category) && !empty($upsell_category)) {
                            $upsell_categories[] = [
                                'id' => $upsell_category->term_id,
                                'name' => $upsell_category->name,
                                'slug' => $upsell_category->slug,
                                'link' => get_term_link($upsell_category),
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
                'variations' => $variations,
                'productType' => !empty($attributes) ? 'variable' : 'simple',
                'meta_data' => $meta_data,
                'categories' => $categories,
                'upsell_products' => $upsell_products,
            ];
        }

        return 'Sản phẩm không hợp lệ!';
    }


    public function getCategorySlugUrl()
    {
        return basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));;
    }

    public function getProductByCategory()
    {
        global $wpdb;

        // Lấy slug của category từ URL
        $mainCategorySlug = $this->getCategorySlugUrl();
        $urlData = $_GET;

        // Lấy thông tin category chính
        $mainCategory = get_term_by('slug', $mainCategorySlug, 'product_cat');
        if (!$mainCategory) {
            return []; // Không tồn tại category chính
        }

        $mainCategoryID = $mainCategory->term_id;

        // Xử lý các tham số bổ sung (các attributes)
        $processedParams = array_map(
            fn($value) => explode(',', $value),
            array_diff_key($urlData, array_flip(['page', 'lang']))
        );

        // Lấy ngôn ngữ từ URL hoặc WPML/Polylang
        $lang = !empty($urlData['lang']) ? sanitize_text_field($urlData['lang']) : apply_filters('wpml_current_language', null);

        // Xây dựng tax_query cho attributes
        $taxQuery = [
            'relation' => 'AND',
            [
                'taxonomy' => 'product_cat',
                'field'    => 'term_id',
                'terms'    => $mainCategoryID,
            ],
        ];

        foreach ($processedParams as $attribute => $values) {
            $filteredValues = array_filter($values); // Loại bỏ giá trị rỗng
            if (!empty($filteredValues)) {
                $taxQuery[] = [
                    'taxonomy' => 'pa_' . sanitize_title($attribute),
                    'field'    => 'slug',
                    'terms'    => $filteredValues,
                ];
            }
        }

        // Lấy trang hiện tại
        $paged = !empty($urlData['page']) ? (int)$urlData['page'] : 1;

        // Lấy ID sản phẩm cha
        $parentProductID = isset($urlData['parentProductID']) ? (int)$urlData['parentProductID'] : 0;

        // Xây dựng WP_Query
        $args = [
            'post_type'      => 'product',
            'posts_per_page' => -1, // Lấy tất cả sản phẩm
            'post_status'    => 'publish',
            'tax_query'      => $taxQuery,
        ];

        // Thêm ngôn ngữ nếu có
        if (!empty($lang)) {
            $args['lang'] = $lang;
        }

        // Lọc sản phẩm theo parent ID nếu có
        if ($parentProductID) {
            $args['post_parent'] = $parentProductID;
        }

        $query = new WP_Query($args);

        // Xử lý dữ liệu sản phẩm trả về
        $formattedProducts = [];
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();

                $product = wc_get_product(get_the_ID());
                if (!$product) {
                    continue;
                }

                // Lấy thông tin sản phẩm
                $title = get_the_title();
                $url = get_permalink();
                $image = get_the_post_thumbnail_url($product->get_id(), 'full');

                // Lấy giá sản phẩm
                $regular_price = $product->get_regular_price();
                $sale_price = $product->get_sale_price();
                $price = $product->get_price();

                if (empty($price)) {
                    $price = (float)$regular_price;
                }

                if (!empty($sale_price)) {
                    $price = (float)$sale_price;
                }

                $categories = get_the_terms($product->get_id(), 'product_cat');
                $tags = get_the_terms($product->get_id(), 'product_tag');

                $formattedProducts[] = [
                    'ID'              => $product->get_id(),
                    'title'           => $title,
                    'url'             => $url,
                    'image'           => $image,
                    'price'           => $price,
                    'sale_price'      => $sale_price,
                    'first_category'  => $categories ? $categories[0]->name : null,
                    'first_tag'       => $tags ? $tags[0]->name : null,
                ];
            }
            wp_reset_postdata();
        }

        // Sắp xếp danh sách sản phẩm theo first_tag
        usort($formattedProducts, function ($a, $b) {
            return strcmp($a['first_tag'] ?? '', $b['first_tag'] ?? '');
        });

        // Trả về dữ liệu sản phẩm
        return [
            'products' => $formattedProducts,
        ];
    }




    public function getProductByCategoryApi(WP_REST_Request $request)
    {
        global $wpdb;

        // Lấy các tham số từ request
        $urlData = $request->get_params();
        $mainCategorySlug = $urlData['mainCategory'] ?? null;

        if (!$mainCategorySlug) {
            return new WP_REST_Response(['error' => 'mainCategory is required'], 400);
        }

        // Lấy thông tin category chính
        $mainCategory = get_term_by('slug', $mainCategorySlug, 'product_cat');
        if (!$mainCategory) {
            return new WP_REST_Response(['error' => 'Category not found'], 404);
        }

        $mainCategoryID = $mainCategory->term_id;

        // Lấy giá trị lọc giá
        $minPrice = !empty($urlData['minPrice']) ? (float)$urlData['minPrice'] : 0;
        $maxPrice = !empty($urlData['maxPrice']) ? (float)$urlData['maxPrice'] : PHP_INT_MAX;

        // Xử lý các tham số bổ sung (các attributes)
        $processedParams = array_map(
            fn($value) => explode(',', $value),
            array_diff_key($urlData, array_flip(['mainCategory', 'page', 'minPrice', 'maxPrice']))
        );

        // Xây dựng tax_query cho attributes
        $taxQuery = [
            'relation' => 'AND',
            [
                'taxonomy' => 'product_cat',
                'field'    => 'term_id',
                'terms'    => $mainCategoryID,
            ],
        ];

        foreach ($processedParams as $attribute => $values) {
            $filteredValues = array_filter($values); // Loại bỏ giá trị rỗng
            if (!empty($filteredValues)) {
                $taxQuery[] = [
                    'taxonomy' => 'pa_' . sanitize_title($attribute),
                    'field'    => 'slug',
                    'terms'    => $filteredValues,
                ];
            }
        }

        // Xây dựng meta_query để lọc giá
        $metaQuery = [
            'relation' => 'AND',
            [
                'key'     => '_price',
                'value'   => [$minPrice, $maxPrice],
                'type'    => 'NUMERIC',
                'compare' => 'BETWEEN',
            ],
        ];

        // Lấy trang hiện tại
        $paged = !empty($urlData['page']) ? (int)$urlData['page'] : 1;

        // Lấy các sản phẩm cha
        $parentProductID = $urlData['parentProductID'] ?? 0;

        // Xây dựng WP_Query
        $args = [
            'post_type'      => 'product',
            'posts_per_page' => -1, // Lấy tất cả sản phẩm
            'post_status'    => 'publish',
            'tax_query'      => $taxQuery,
        ];

        // Nếu có ID của sản phẩm cha, chỉ lấy sản phẩm con của nó
        if ($parentProductID) {
            $args['post_parent'] = $parentProductID;
        }

        $query = new WP_Query($args);

        // Xử lý dữ liệu sản phẩm trả về
        $formattedProducts = [];
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();

                $product = wc_get_product(get_the_ID());

                if (!$product) {
                    continue;
                }

                // Lấy thông tin sản phẩm
                $title = get_the_title();
                $url = get_permalink();
                $image = get_the_post_thumbnail_url($product->get_id(), 'full');
                $price = (float)$product->get_regular_price();
                $sale_price = $product->get_sale_price();
                $categories = get_the_terms($product->get_id(), 'product_cat');
                $tags = get_the_terms($product->get_id(), 'product_tag');

                // Kiểm tra giá và sale_price có tồn tại không
                if (empty($price) && !empty($product->price)) {
                    $price = (float)$product->price;
                }

                // Nếu có sale_price thì lấy sale_price thay vì price
                if (!empty($sale_price)) {
                    $price = (float)$sale_price;
                }

                $formattedProducts[] = [
                    'ID'              => $product->get_id(),
                    'title'           => $title,
                    'url'             => $url,
                    'image'           => $image,
                    'price'           => $price,
                    'sale_price'      => $sale_price,
                    'first_category'  => $categories ? $categories[0]->name : null,
                    'first_tag'       => $tags ? $tags[0]->name : null,
                ];
            }
            wp_reset_postdata();
        }

        // Trả về dữ liệu sản phẩm và thông tin phân trang dưới dạng JSON
        return new WP_REST_Response([
            'products'   => $formattedProducts,
            'pagination' => [
                'total'    => $query->max_num_pages,
                'current'  => $paged,
                'per_page' => 20,
            ],
        ], 200);
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

    function getNewProducts($limit = 3)
    {
        $args = array(
            'post_type' => 'product',
            'posts_per_page' => $limit,
            'tax_query' => array(
                array(
                    'taxonomy' => 'product_tag',
                    'field' => 'slug',
                    'terms' => 'NEW',
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

    function getOptionFilter()
    {
        $options = [];


        // Lấy danh sách attributes (WooCommerce attributes)
        $attributes = wc_get_attribute_taxonomies();

        if (!empty($attributes)) {
            $options['attributes'] = [];
            $options['categories'] = $this->categories;
            foreach ($attributes as $attribute) {
                $attribute_name = wc_attribute_taxonomy_name($attribute->attribute_name);

                // Lấy terms (biến thể của attribute)
                $terms = get_terms([
                    'taxonomy' => $attribute_name,
                    'hide_empty' => false,
                ]);

                $options['attributes'][] = [
                    'id' => $attribute->attribute_id,
                    'name' => $attribute->attribute_label,
                    'slug' => $attribute->attribute_name,
                    'terms' => !is_wp_error($terms) ? array_map(function ($term) {
                        return [
                            'id' => $term->term_id,
                            'name' => $term->name,
                            'slug' => $term->slug,
                        ];
                    }, $terms) : [],
                ];
            }
        }

        return $options;
    }
}
