<?php
// app/Routes/web.php

require_once get_template_directory() . '/app/Controllers/YourController.php';
// Bao gồm các controller khác nếu có

use Phroute\Phroute\RouteCollector;
use Phroute\Phroute\Dispatcher;

function register_routes() {
    $router = new RouteCollector();

    // Định nghĩa các route
    $router->get('/example', 'YourController@index');
    $router->get('/example/{id}', 'YourController@show');

    // Lấy route
    $dispatcher = new Dispatcher($router->getData());

    // Lấy URI và phương thức của yêu cầu
    $uri = $_SERVER['REQUEST_URI'];
    $method = $_SERVER['REQUEST_METHOD'];

    // Phân tích và gọi hàm callback
    try {
        $response = $dispatcher->dispatch($method, $uri);
        if ($response) {
            wp_send_json($response);
        }
    } catch (Exception $e) {
        wp_send_json_error(['message' => $e->getMessage()], 404);
    }
}

// Hook vào init
add_action('init', 'register_routes');
