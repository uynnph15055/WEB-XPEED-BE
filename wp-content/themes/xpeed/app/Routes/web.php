<?php
// app/Routes/web.php


require_once get_template_directory() . '/app/Controllers/UserController.php';

function register_routes()
{
    // Tạo một instance của UserController
    $userController = new \app\Controllers\UserController(); // Use the full namespace
    $authController = new \app\Controllers\AuthController(); // Use the full namespace
    $productController = new \app\Controllers\ProductController(); // Use the full namespace

    // Đăng ký route để lấy danh sách người dùng
    register_rest_route('custom-api/v1', '/users', [  // Correct the route path here
        'methods' => 'GET',
        'callback' => [$userController, 'index'],  // Sử dụng instance thay vì tên class
    ]);

    register_rest_route('custom-api/v1', '/get-product-price', [
        'methods' => 'POST',
        'callback' => [$productController, 'getProductPrice'],
        'permission_callback' => '__return_true',
    ]);

    // Đăng ký route cho login (POST)
    register_rest_route('custom-api/v1', '/login', [
        'methods' => 'POST',
        'callback' => [$authController, 'login'],
        'permission_callback' => '__return_true',
    ]);

// Đăng ký route cho đăng ký (POST)
    register_rest_route('custom-api/v1', '/register', [
        'methods' => 'POST',
        'callback' => [$authController, 'register'],
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('custom-api/v1', '/logout', [
        'methods' => 'POST',
        'callback' => [$authController, 'logout'],
        'permission_callback' => '__return_true',
    ]);
}

// Hook vào 'rest_api_init' để đăng ký route
add_action('rest_api_init', 'register_routes');