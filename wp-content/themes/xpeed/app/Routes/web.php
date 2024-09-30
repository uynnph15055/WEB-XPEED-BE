<?php
// app/Routes/web.php

require_once get_template_directory() . '/app/Controllers/UserController.php';

function register_routes()
{
    // Tạo một instance của UserController
    $controller = new \app\Controllers\UserController(); // Use the full namespace

    // Đăng ký route /example (GET)
    register_rest_route('custom-api/v1', '/example', [
        'methods'  => 'GET',
        'callback' => [$controller, 'index'],  // Sử dụng instance thay vì tên class
    ]);

    // Đăng ký route /example/{id} (GET)
    register_rest_route('custom-api/v1', '/example/(?P<id>\d+)', [
        'methods'  => 'GET',
        'callback' => [$controller, 'show'],  // Sử dụng instance thay vì tên class
    ]);

    // Đăng ký route để lấy danh sách người dùng
    register_rest_route('custom-api/v1', '/users', [  // Correct the route path here
        'methods'  => 'GET',
        'callback' => [$controller, 'getUsers'],  // Sử dụng instance thay vì tên class
    ]);

    // Đăng ký route cho login (POST)
    register_rest_route('custom-api/v1', '/login', [
        'methods'  => 'GET',
        'callback' => [$controller, 'login'],
        'permission_callback' => '__return_true',
    ]);
}

// Hook vào 'rest_api_init' để đăng ký route
add_action('rest_api_init', 'register_routes');