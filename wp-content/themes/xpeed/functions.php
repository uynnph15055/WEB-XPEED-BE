<?php

// Kiểm tra xem WordPress đã được khởi động chưa
if (!defined('ABSPATH')) {
    exit; // Ngăn chặn truy cập trái phép
}

/**
 * Theme function.
 * Version: 1.0
 */
$theme = wp_get_theme('xpeed');
define("THEME_VER", $theme['Version']);
define('THEME_URL', get_stylesheet_directory());
define('TEMP_DIR', get_template_directory());
define('DIR_URI', get_stylesheet_directory_uri());

require_once __DIR__ . '/vendor/autoload.php'; // Bao gồm autoload của Composer
require_once get_template_directory() . '/app/Routes/web.php'; // Bao gồm web.php

const TEXT_DOMAIN = 'xpeed';
const CORE = THEME_URL . '/core';

load_theme_textdomain(TEXT_DOMAIN, TEMP_DIR . '/languages');

// Các hàm khác trong theme của bạn
// ...

// var_dump data
if (!function_exists('dd')) {
    function dd() {
        echo '<pre>';
        array_map(function ($x) {
            var_dump($x);
        }, func_get_args());
        echo '</pre>';
        die;
    }
}

// Cài đặt view cho blog
function set_views($post_ID) {
    $key = 'views';
    $count = get_post_meta($post_ID, $key, true); // Lấy số lượt xem

    if ($count == '') {
        $count = 0;
        delete_post_meta($post_ID, $key);
        add_post_meta($post_ID, $key, '0');
    } else {
        $count++;
        update_post_meta($post_ID, $key, $count);
    }
}
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

// Theo dõi blog tùy chỉnh
function track_custom_blogs($post_ID) {
    if (!is_single()) return;
    if (empty($post_ID)) {
        global $post;
        $post_ID = $post->ID;
    }
    set_views($post_ID);
}
add_action('wp_head', 'track_custom_blogs');

// Function to handle Google login callback
function google_login_callback()
{
    include_once get_template_directory() . '/inc/social-login/google-login.php';
    exit;
}

// Function to handle Facebook login callback
function facebook_login_callback()
{
    include_once get_template_directory() . '/inc/social-login/facebook-login.php';
    exit;
}

// Hook to process the login callbacks
add_action('init', function () {
    if (strpos($_SERVER['REQUEST_URI'], 'google-login-callback') !== false) {
        google_login_callback();
    }

    if (strpos($_SERVER['REQUEST_URI'], 'facebook-login-callback') !== false) {
        facebook_login_callback();
    }
});
