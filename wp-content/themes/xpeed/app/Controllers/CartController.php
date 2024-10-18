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

// Hàm để thêm hoặc cập nhật sản phẩm trong giỏ hàng
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


    public function getCartHandler()
    {
        // Lấy thông tin giỏ hàng từ session
        $session_cart = isset($_SESSION['cart']) ? $_SESSION['cart'] : [];

        // Lấy thông tin giỏ hàng từ cookie
        $cookie_cart = isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : [];

        // Kiểm tra nếu giỏ hàng rỗng cả ở session lẫn cookie
        if (empty($session_cart) && empty($cookie_cart)) {
            return $this->fail('Giỏ hàng trống.');
        }

        // Kết hợp dữ liệu từ session và cookie
        $cart_data = array_merge($cookie_cart, $session_cart);

        $detailed_cart = [];
        $total_price = 0;  // Khởi tạo biến tổng tiền

        foreach ($cart_data as $item) {
            // Lấy product ID và attributes
            $product_id = $item['product_id'];
            $quantity = $item['quantity'];
            $attributes = $item['attributes'];

            // Lấy đối tượng sản phẩm
            $product = wc_get_product($product_id);

            if ($product) {
                // Giá sản phẩm hoặc biến thể
                $price = $product->get_price();

                // Khởi tạo thông tin sản phẩm
                $product_data = [
                    'product_id'      => $product_id,
                    'name'            => $product->get_name(),
                    'price'           => $price,
                    'image'           => wp_get_attachment_image_url($product->get_image_id(), 'full'),
                    'purchased_quantity' => $quantity,
                    'attributes'      => $attributes,
                    'total_item_price' => $price * $quantity, // Tổng giá cho từng sản phẩm
                ];

                // Tính tổng giá cho từng sản phẩm và cộng dồn vào tổng tiền giỏ hàng
                $total_price += $price * $quantity;

                // Nếu sản phẩm là biến thể
                if ($product->is_type('variation')) {
                    // Tạo đối tượng biến thể
                    $variation = new WC_Product_Variation($product_id);

                    // Thêm dữ liệu biến thể vào mảng sản phẩm
                    $product_data['variation_price'] = $variation->get_price();
                }

                $detailed_cart[] = $product_data;
            }
        }

        // Trả về thông tin chi tiết của giỏ hàng kèm tổng tiền
        return $this->success('Thông tin giỏ hàng:', [
            'cart_items' => $detailed_cart,
            'total_price' => $total_price // Tổng tiền của giỏ hàng
        ]);
    }



}
