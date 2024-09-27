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

use Illuminate\Database\Capsule\Manager as Capsule;

// Bao gồm file autoload của Composer
require_once __DIR__ . '/vendor/autoload.php'; // Đảm bảo đường dẫn chính xác
require_once get_template_directory() . '/app/Routes/web.php'; // Bao gồm các route

const TEXT_DOMAIN = 'xpeed';
const CORE = THEME_URL . '/core';

load_theme_textdomain(TEXT_DOMAIN, TEMP_DIR . '/languages');

$list_files = array(
    "/includes/class_customizes.php",
    "/includes/theme_functions_ajax.php",
    "/includes/theme_functions_helper.php",
    "/includes/theme_template_main_functions.php",
    "/includes/theme_template_sidebar.php",
    "/includes/theme_template_scripts.php",
    "/includes/theme_functions_api.php",
    "/includes/theme_functions_job_sync.php",
);

foreach ($list_files as $file) {
    require_once(TEMP_DIR . $file);
}

// var_dump data
if (!function_exists('dd')) {
    function dd()
    {
        echo '<pre>';
        array_map(function ($x) {
            var_dump($x);
        }, func_get_args());
        echo '</pre>';
        die;
    }
}


// Set views blogs
function set_views($post_ID)
{
    $key = 'views';
    $count = get_post_meta($post_ID, $key, true); //retrieves the count

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

function track_custom_blogs($post_ID)
{
    if (!is_single()) return;
    if (empty($post_ID)) {
        global $post;
        $post_ID = $post->ID;
    }
    set_views($post_ID);
}
add_action('wp_head', 'track_custom_blogs');

// Hàm thiết lập Eloquent ORM
function setup_eloquent() {
    global $wpdb; // Đảm bảo biến $wpdb được gọi đúng cách

    $capsule = new Capsule;

    // Thiết lập kết nối cơ sở dữ liệu WordPress
    $capsule->addConnection([
        'driver'    => 'mysql',
        'host'      => DB_HOST,
        'database'  => DB_NAME,
        'username'  => DB_USER,
        'password'  => DB_PASSWORD,
        'charset'   => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix'    => $wpdb->prefix, // Sử dụng tiền tố đúng cách
    ]);

    // Thiết lập Eloquent ORM để sử dụng
    $capsule->setAsGlobal();
    $capsule->bootEloquent();
}

// Thêm hàm thiết lập vào hook 'init'
add_action('init', 'setup_eloquent');

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
