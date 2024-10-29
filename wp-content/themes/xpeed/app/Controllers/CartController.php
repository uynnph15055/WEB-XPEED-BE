<?php

namespace app\Controllers;


use app\Controllers\Controller as BaseController;
use Illuminate\Database\Capsule\Manager as DB;

class CartController extends BaseController

{
    public function addToCartHandler($request)
    {
        // Khởi động session nếu chưa
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        // Lấy dữ liệu từ request (danh sách sản phẩm)
        $cart_items = $request->get_params();

        // Kiểm tra dữ liệu hợp lệ
        if (empty($cart_items) || !is_array($cart_items)) {
            return $this->fail('Dữ liệu không hợp lệ.');
        }

        // Khởi tạo giỏ hàng nếu chưa có
        if (!isset($_SESSION['cart'])) {
            $_SESSION['cart'] = [];
        }

        // Lấy giỏ hàng từ cookie nếu có
        $cart_cookie = isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : [];

        // Lặp qua từng sản phẩm trong request và thêm vào giỏ hàng
        foreach ($cart_items as $item) {
            $product_id = $item['productId'];
            $quantity = $item['quantity'];
            $variation = $item['variation'];

            // Kiểm tra dữ liệu từng sản phẩm
            if (empty($product_id) || !$quantity) {
                continue;  // Bỏ qua sản phẩm không hợp lệ
            }

            // Tạo chuỗi để kiểm tra kết hợp product_id và attributes
            $attribute_key = $product_id . '-' . json_encode($variation);

            // Tạo mảng sản phẩm để thêm vào giỏ hàng
            $cart_item = [
                'product_id' => $product_id,
                'quantity' => $quantity,
                'attributes' => $variation
            ];

            // Thêm hoặc cập nhật sản phẩm trong session và cookie
            $this->addOrUpdateCartItem($_SESSION['cart'], $attribute_key, $cart_item);
            $this->addOrUpdateCartItem($cart_cookie, $attribute_key, $cart_item);
        }

        // Lưu giỏ hàng vào cookie trong 30 ngày
        setcookie('cart', json_encode($cart_cookie), time() + (86400 * 30), "/");

        // Trả về kết quả thành công với dữ liệu giỏ hàng trong session và cookie
        return $this->success('Sản phẩm đã được thêm vào giỏ hàng.', [
            'session_cart' => $_SESSION['cart'],
            'cookie_cart' => $cart_cookie
        ]);
    }

    private function addOrUpdateCartItem(&$cart, $attribute_key, $cart_item)
    {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
        if (isset($cart[$attribute_key])) {
            $cart[$attribute_key]['quantity'] += $cart_item['quantity'];
        } else {
            // Nếu chưa có, thêm mới
            $cart[$attribute_key] = $cart_item;
        }
    }

    public function updateCartHandler($request)
    {
        // Khởi động session nếu chưa
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        // Lấy dữ liệu từ request (danh sách sản phẩm)
        $cart_items = $request->get_params();

        // Kiểm tra dữ liệu hợp lệ
        if (empty($cart_items) || !is_array($cart_items)) {
            return $this->fail('Dữ liệu không hợp lệ.');
        }

        // Khởi tạo giỏ hàng nếu chưa có
        if (!isset($_SESSION['cart'])) {
            $_SESSION['cart'] = [];
        }

        // Lấy giỏ hàng từ cookie nếu có
        $cart_cookie = isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : [];

        // Lặp qua từng sản phẩm trong request và cập nhật số lượng
        foreach ($cart_items as $item) {
            $product_id = $item['productId'];
            $quantity = $item['quantity'];
            $variation = $item['variation'];

            // Kiểm tra dữ liệu từng sản phẩm
            if (empty($product_id) || !is_numeric($quantity) || $quantity < 1) {
                continue;  // Bỏ qua sản phẩm không hợp lệ
            }

            // Tạo chuỗi để kiểm tra kết hợp product_id và attributes
            $attribute_key = $product_id . '-' . json_encode($variation);

            // Tạo mảng sản phẩm để cập nhật vào giỏ hàng
            $cart_item = [
                'product_id' => $product_id,
                'quantity' => $quantity,
                'attributes' => $variation
            ];

            // Cập nhật sản phẩm trong session và cookie
            $this->updateCartItem($_SESSION['cart'], $attribute_key, $cart_item);
            $this->updateCartItem($cart_cookie, $attribute_key, $cart_item);
        }

        // Lưu giỏ hàng vào cookie trong 30 ngày
        setcookie('cart', json_encode($cart_cookie), time() + (86400 * 30), "/");

        // Trả về kết quả thành công với dữ liệu giỏ hàng trong session và cookie
        return $this->success('Sản phẩm đã được cập nhật giỏ hàng.', [
            'session_cart' => $_SESSION['cart'],
            'cookie_cart' => $cart_cookie
        ]);
    }

    private function updateCartItem(&$cart, $attribute_key, $cart_item)
    {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
        if (isset($cart[$attribute_key])) {
            $cart[$attribute_key]['quantity'] = $cart_item['quantity'];
        } else {
            // Nếu chưa có, thêm mới
            $cart[$attribute_key] = $cart_item;
        }
    }

    public function getCartHandler()
    {
        // Lấy thông tin giỏ hàng từ session và cookie
        $cart_data = array_merge(
            isset($_SESSION['cart']) ? $_SESSION['cart'] : [],
            isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : []
        );

        // Kiểm tra nếu giỏ hàng trống
        if (empty($cart_data)) {
            return [];
        }

        $detailed_cart = [];

        // Duyệt qua giỏ hàng
        foreach ($cart_data as $cart_item) {
            $product_id = $cart_item['product_id'];
            $attributes = $cart_item['attributes'];
            $quantity = $cart_item['quantity'];

            // Lấy thông tin sản phẩm chính
            $product = DB::table('posts')
                ->where('ID', $product_id)
                ->where('post_type', 'product')
                ->where('post_status', 'publish')
                ->first();

            if ($product) {
                // Lấy biến thể phù hợp
                $matched_variation = DB::table('posts')
                    ->where('post_parent', $product_id)
                    ->where('post_type', 'product_variation')
                    ->where('post_status', 'publish')
                    ->get()
                    ->first(function ($variation) use ($attributes) {
                        foreach ($attributes as $attribute_key => $attribute_value) {
                            $meta_value = DB::table('postmeta')
                                ->where('post_id', $variation->ID)
                                ->where('meta_key', 'attribute_' . $attribute_key)
                                ->value('meta_value');
                            if ($meta_value !== $attribute_value) return false;
                        }
                        return true;
                    });

                // Lấy thông tin chi tiết về biến thể hoặc sản phẩm chính
                $price = $stock_quantity = null;
                $variation_title = $variation_image = 'Không tìm thấy biến thể phù hợp';

                if ($matched_variation) {
                    $variation_image = get_the_post_thumbnail_url($matched_variation->ID);
                    $post_meta = DB::table('postmeta')->where('post_id', $matched_variation->ID)->get();
                    $price = $post_meta->where('meta_key', '_price')->first()->meta_value ?? null;
                    $stock_quantity = $post_meta->where('meta_key', '_stock')->first()->meta_value ?? null;
                    $variation_title = $matched_variation->post_excerpt;
                } else {
                    $variation_image = get_the_post_thumbnail_url($product_id);
                }

                // Thêm thông tin vào giỏ hàng
                $detailed_cart[] = [
                    'product_id' => $product_id,
                    'product_name' => $product->post_title,
                    'quantity' => $quantity,
                    'variation_key' => array_keys($attributes)[0] ?? '',
                    'variation_title' => $variation_title,
                    'variation' => strtolower(explode(': ', $variation_title)[1] ?? $variation_title),
                    'price' => $price ? (float)$price : 0,
                    'stock_quantity' => $stock_quantity ? (int)$stock_quantity : 0,
                    'image' => $variation_image,
                    'total' => ($price ? $price * $quantity : 0),  // Tính tổng tiền cho mỗi sản phẩm
                ];
            }
        }

        // Trả về thông tin chi tiết của giỏ hàng
        return $detailed_cart;
    }

    public function removeCartItem($request)
    {
        // Khởi động session nếu chưa
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        // Lấy dữ liệu từ request (productId và variation)
        $product_id = $request->get_param('productId');
        $variation = $request->get_param('variation');
        // Kiểm tra dữ liệu hợp lệ
        if (empty($product_id) || empty($variation) || !is_array($variation)) {
            return $this->fail('Dữ liệu không hợp lệ.');
        }

        // Kiểm tra xem giỏ hàng trong session có tồn tại không
        if (!isset($_SESSION['cart']) || empty($_SESSION['cart'])) {
            return $this->fail('Giỏ hàng trống.');
        }

        // Lấy giỏ hàng từ cookie nếu có
        $cart_cookie = isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : [];

        // Tạo chuỗi để kiểm tra kết hợp product_id và attributes
        $attribute_key = $product_id . '-' . json_encode($variation);

        // Xóa sản phẩm trong session
        if (isset($_SESSION['cart'][$attribute_key])) {
            unset($_SESSION['cart'][$attribute_key]);
        }

        // Xóa sản phẩm trong cookie
        if (isset($cart_cookie[$attribute_key])) {
            unset($cart_cookie[$attribute_key]);
        }

        // Cập nhật lại cookie giỏ hàng
        setcookie('cart', json_encode($cart_cookie), time() + (86400 * 30), "/");

        // Trả về kết quả thành công với dữ liệu giỏ hàng sau khi đã xóa
        return $this->success('Sản phẩm đã được xóa khỏi giỏ hàng.', [
            'session_cart' => $_SESSION['cart'],
            'cookie_cart' => $cart_cookie
        ]);
    }
}