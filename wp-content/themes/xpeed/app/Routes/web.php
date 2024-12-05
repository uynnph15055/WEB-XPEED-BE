<?php
// app/Routes/web.php


require_once get_template_directory() . '/app/Controllers/UserController.php';

function register_routes()
{
    // Tạo một instance của UserController
    $productController = new \app\Controllers\ProductController(); // Use the full namespace

    register_rest_route('custom-api/v1', '/products', array(
        'methods' => 'GET',
        'callback' => [$productController, 'getListProducts'],
        'args' => array(
            'category' => array(
                'required' => false,
                'validate_callback' => function ($param) {
                    return is_string($param) || is_array($param);
                },
            ),
            'size' => array(
                'required' => false,
                'validate_callback' => function ($param) {
                    return is_string($param) || is_array($param);
                },
            ),
            'min_price' => array(
                'required' => false,
                'validate_callback' => function ($param) {
                    return is_numeric($param);
                },
            ),
            'max_price' => array(
                'required' => false,
                'validate_callback' => function ($param) {
                    return is_numeric($param);
                },
            ),
            'page' => array(
                'required' => false,
                'validate_callback' => function ($param) {
                    return is_numeric($param);
                },
            ),
            'per_page' => array(
                'required' => false,
                'validate_callback' => function ($param) {
                    return is_numeric($param);
                },
            ),
        ),
    ));

    register_rest_route('custom-api/v1', '/categories', array(
        'methods' => 'GET',
        'callback' => [$productController, 'getProductCategoriesApi'],
    ));
    register_rest_route('custom-api/v1', '/list-products-by-cate', array(
        'methods' => 'GET',
        'callback' => [$productController, 'getListProductsApi'],
    ));
    register_rest_route('custom-api/v1', '/attributes', array(
        'methods' => 'GET',
        'callback' => [$productController, 'getAttributesApi'],
    ));
    // Đăng ký route để lấy danh sách người dùng
    register_rest_route('custom-api/v1', '/users', [  // Correct the route path here
        'methods' => 'GET',
        'callback' => [new \app\Controllers\UserController(), 'index'],  // Sử dụng instance thay vì tên class
    ]);

    register_rest_route('custom-api/v1', '/get-product-price', [
        'methods' => 'POST',
        'callback' => [new \app\Controllers\ProductController(), 'getProductByAttributes'],
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('custom-api/v1', '/process-payment', [
        'methods' => 'POST',
        'callback' => [new \app\Controllers\PaymentController(), 'processPayment'],
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('custom-api/v1', '/add-to-cart', array(
        'methods' => 'POST',
        'callback' => [new \app\Controllers\CartController(), 'addToCartHandler'],
        'permission_callback' => '__return_true'
    ));

    register_rest_route('custom-api/v1', '/path-to-handle-ipn', [
        'methods' => 'GET',
        'callback' => [new \app\Controllers\CheckoutController(), 'handleIPN'],
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('custom-api/v1', '/order/create', [
        'methods' => 'GET',
        'callback' => [new \app\Controllers\CheckoutController(), 'moveCartToOrder'],
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('custom-api/v1', '/remove-cart-item', [
        'methods' => 'POST',
        'callback' => [new \app\Controllers\CartController(), 'removeCartItem'],
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('custom-api/v1', '/update-cart', array(
        'methods' => 'POST',
        'callback' => [new \app\Controllers\CartController(), 'updateCartHandler'],
        'permission_callback' => '__return_true'
    ));
    register_rest_route('custom-api/v1', '/add-order', array(
        'methods' => 'POST',
        'callback' => [new \app\Controllers\CheckoutController(), 'addOrder'],
        'permission_callback' => '__return_true'
    ));

    register_rest_route('custom-api/v1', '/cart', [
        'methods' => 'GET',
        'callback' => [new \app\Controllers\CartController(), 'getCartHandler'],
    ]);

    // Đăng ký route cho login (POST)
    register_rest_route('custom-api/v1', '/login', [
        'methods' => 'POST',
        'callback' => [new \app\Controllers\AuthController(), 'login'],
        'permission_callback' => '__return_true',
    ]);

    // Đăng ký route cho đăng ký (POST)
    register_rest_route('custom-api/v1', '/register', [
        'methods' => 'POST',
        'callback' => [new \app\Controllers\AuthController(), 'register'],
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('custom-api/v1', '/logout', [
        'methods' => 'POST',
        'callback' => [new \app\Controllers\AuthController(), 'logout'],
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('custom/v1', '/language-switcher', array(
        'methods' => 'GET',
        'callback' => 'get_language_switcher_urls_api',
        'permission_callback' => '__return_true',
    ));
}


// Hook vào 'rest_api_init' để đăng ký route
add_action('rest_api_init', 'register_routes');
