<?php
// app/Routes/web.php

require_once get_template_directory() . '/app/Controllers/UserController.php';
require_once get_template_directory() . '/app/Controllers/AuthController.php';

function register_routes()
{
    // Tạo một instance của UserController
    $userController = new \app\Controllers\UserController(); // Use the full namespace
    $authController = new \app\Controllers\AuthController(); // Use the full namespace

    // Đăng ký route /example (GET)
//    register_rest_route('custom-api/v1', '/example', [
//        'methods' => 'GET',
//        'callback' => [$controller, 'index'],  // Sử dụng instance thay vì tên class
//    ]);
//
//    // Đăng ký route /example/{id} (GET)
//    register_rest_route('custom-api/v1', '/example/(?P<id>\d+)', [
//        'methods' => 'GET',
//        'callback' => [$controller, 'show'],  // Sử dụng instance thay vì tên class
//    ]);

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