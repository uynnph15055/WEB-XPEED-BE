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
            $attribute_key = !empty($variation) ? $product_id . '-' . json_encode($variation) : $product_id;

            // Tạo mảng sản phẩm để thêm vào giỏ hàng
            $cart_item = [
                'product_id' => $product_id,
                'quantity' => $quantity,
                'attributes' => $variation
            ];
            $product = wc_get_product($product_id);
            if (!$product) {
                continue;  // Bỏ qua nếu không tìm thấy sản phẩm
            }

            // Kiểm tra số lượng tồn kho
            $stock_quantity = $product->get_stock_quantity();

            // Thêm hoặc cập nhật sản phẩm trong session và cookie

            $this->addOrUpdateCartItem($_SESSION['cart'], $attribute_key, $cart_item);
            $this->addOrUpdateCartItem($cart_cookie, $attribute_key, $cart_item);
            if ($cart_cookie[$attribute_key]['quantity'] > $stock_quantity) {
                return $this->fail('Số lượng yêu cầu vượt quá số lượng còn lại trong kho.');
            }
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
        // Lấy dữ liệu từ request (danh sách sản phẩm)
        $cart_items = $request->get_params();
        $cart_cookie = $this->progressUpdateCartItem($cart_items);
        // Trả về kết quả thành công với dữ liệu giỏ hàng trong session và cookie
        return $this->success('Sản phẩm đã được cập nhật giỏ hàng.', [
            'session_cart' => $_SESSION['cart'],
            'cookie_cart' => $cart_cookie
        ]);
    }

    public function progressUpdateCartItem($cart_items)
    {
        // Khởi động session nếu chưa
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

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
            $product = wc_get_product($product_id);
            if (!$product) {
                continue;  // Bỏ qua nếu không tìm thấy sản phẩm
            }

            // Kiểm tra số lượng tồn kho
            $stock_quantity = $product->get_stock_quantity();

            // Cập nhật sản phẩm trong session và cookie
            $this->updateCartItem($_SESSION['cart'], $attribute_key, $cart_item);
            $this->updateCartItem($cart_cookie, $attribute_key, $cart_item);

            if ($cart_cookie[$attribute_key]['quantity'] > $stock_quantity) {
                return $this->fail('Số lượng yêu cầu vượt quá số lượng còn lại trong kho.');
            }
        }

        // Lưu giỏ hàng vào cookie trong 30 ngày
        setcookie('cart', json_encode($cart_cookie), time() + (86400 * 30), "/");
        return $cart_cookie;
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

    function getCartHandler() {

        $cart_items = [];
        $data = (isset($_SESSION['cart']) ? $_SESSION['cart'] : [])
            + (isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : []);


        // Kiểm tra nếu giỏ hàng trống
        if (empty($data)) {
            return [];
        }


        foreach ($data as $key => $item) {
            // Lấy product_id và variation_key
            $product_id = $item['product_id'];
            $quantity = $item['quantity'];

            // Lấy thông tin sản phẩm
            $product = wc_get_product($product_id);

            $thumbnail_url = wp_get_attachment_url($product->get_image_id());

            if ($product) {
                // Lấy thông tin biến thể nếu có
                $variation_key = $key;
                $attributes = $data[$variation_key]["attributes"] ?? [];
                $variation_title = '';
                $attributeKey = $attributeValue = '';

                // Nếu có thuộc tính biến thể, lấy thông tin từ product
                if (!empty($attributes)) {
                    foreach ($attributes as $attr_key => $attr_value) {
                        $variation_title .= ucfirst($attr_key) . ': ' . $attr_value . ', ';
                        $attributeValue = $attr_value;
                        $attributeKey = $attr_key;

                    }
                    $variation_title = rtrim($variation_title, ', '); // Bỏ dấu phẩy cuối
                }

                // Lấy thông tin giá
                $price = $product->get_price();
                $stock_quantity = $product->get_stock_quantity();
                $image = wp_get_attachment_url($product->get_image_id());
                $total = $price * $quantity;

                // Thêm thông tin sản phẩm vào mảng giỏ hàng
                $cart_items[] = [
                    'product_id' => $product_id,
                    'product_name' => $product->get_name(),
                    'quantity' => $quantity,
                    'attribute_key' => $attributeKey,
                    'variation_title' => $variation_title,
                    'attribute' => $attributeValue,
                    'price' => $price,
                    'stock_quantity' => $stock_quantity,
                    'image' => $image ?? $thumbnail_url,
                    'total' => $total,
                ];

            }
        }

        //return $this->success(data:$cart_items);
        return $cart_items;
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
        if (empty($product_id)) {
            return $this->fail('Dữ liệu không hợp lệ.');
        }

        // Kiểm tra xem giỏ hàng trong session có tồn tại không
        if (!isset($_SESSION['cart']) || empty($_SESSION['cart'])) {
            return $this->fail('Giỏ hàng trống.');
        }

        // Lấy giỏ hàng từ cookie nếu có
        $cart_cookie = isset($_COOKIE['cart']) ? json_decode(stripslashes($_COOKIE['cart']), true) : [];

        // Tạo chuỗi để kiểm tra kết hợp product_id và attributes
        $attribute_key = !empty($variation) ? $product_id . '-' . json_encode($variation) : $product_id;
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