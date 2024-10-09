<?php
// app/Routes/web.php

require_once get_template_directory() . '/app/Controllers/UserController.php';

function register_routes()
{
    // Tạo một instance của UserController
    $userController = new \app\Controllers\UserController(); // Use the full namespace
    $authController = new \app\Controllers\AuthController();
    $productController = new \app\Controllers\ProductController();

    register_rest_route('custom/v1', '/products', array(
        'methods' => 'GET',
        'callback' => [$productController, 'getListProducts'],
        'args' => array(
            'category' => array(
                'required' => false,
                'validate_callback' => function ($param) {
                    return is_string($param);
                },
            ),
            'size' => array(
                'required' => false,
                'validate_callback' => function ($param) {
                    return is_string($param);
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

    // Đăng ký route để lấy danh sách người dùng
    register_rest_route('custom-api/v1', '/users', [  // Correct the route path here
        'methods' => 'GET',
        'callback' => [$userController, 'index'],  // Sử dụng instance thay vì tên class
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