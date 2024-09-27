<?php
// app/Controllers/ProductController.php

namespace app\Controllers;

use app\models\ProductModel; // Import the ProductModel
use app\models\ProductMetaModel; // Import the ProductMetaModel
use app\models\TermModel; // Import the TermModel
use app\models\TermTaxonomyModel; // Import the TermTaxonomyModel

class ProductController {
    // Phương thức xử lý GET request cho /products
    public function index($request) {
        // Lấy tất cả sản phẩm
        $products = ProductModel::where('post_type', 'product')->where('post_status', 'publish')->get();
        return wp_send_json_success(['products' => $products]);
    }

    // Phương thức để lấy sản phẩm theo ID
    public function show($request) {
        $id = $request['id']; // Lấy ID từ request
        $product = ProductModel::find($id);

        if (!$product) {
            return wp_send_json_error(['message' => 'Product not found'], 404);
        }

        return wp_send_json_success(['product' => $product]);
    }

    // Phương thức để lọc sản phẩm theo thuộc tính
    public function filterByAttribute($request) {
        $attribute = $request['attribute'] ?? null; // Lấy thuộc tính từ request
        $value = $request['value'] ?? null; // Lấy giá trị thuộc tính từ request

        if (!$attribute || !$value) {
            return wp_send_json_error(['message' => 'Attribute and value are required'], 400);
        }

        // Lấy các sản phẩm có thuộc tính tương ứng
        $products = ProductModel::where('post_type', 'product')
            ->where('post_status', 'publish')
            ->whereHas('meta', function ($query) use ($attribute, $value) {
                $query->where('meta_key', $attribute)
                    ->where('meta_value', $value);
            })->get();

        return wp_send_json_success(['products' => $products]);
    }
}
