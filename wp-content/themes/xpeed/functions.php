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


const TEXT_DOMAIN = ' xpeed';
const CORE = THEME_URL . '/core';


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


load_theme_textdomain(TEXT_DOMAIN, TEMP_DIR . '/languages');

// Các hàm khác trong theme của bạn
// ...

// Hàm var_dump data
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

if (!function_exists('check_user_login_and_redirect')) {
    function check_user_login_and_redirect($urlRedirect = null)
    {
        // Nếu người dùng chưa đăng nhập
        $urlRedirect = $urlRedirect ?? home_url('/login');
        if (!is_user_logged_in()) {
            // Lấy URL hiện tại
            $current_url = getCurrentUrl();

            if (strpos($current_url, 'wp-json') !== false) {
                return false;
            }

            // Lưu URL hiện tại vào cookie, thời gian sống 1 giờ (3600 giây)
            setcookie('redirect_after_login', $current_url, time() + 3600, '/');

            // Chuyển hướng đến trang login
            wp_redirect($urlRedirect);
            exit;
        }
    }

    function getCurrentUrl()
    {
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
        $host = $_SERVER['HTTP_HOST'];
        $requestUri = $_SERVER['REQUEST_URI'];

        return $protocol . '://' . $host . $requestUri;
    }
}

// Cài đặt view cho blog
function set_views($post_ID)
{
    $key = 'views';
    $count = get_post_meta($post_ID, $key, true);

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
function setup_eloquent()
{
    global $wpdb; // Đảm bảo biến $wpdb được gọi đúng cách

    $capsule = new Capsule;

    // Thiết lập kết nối cơ sở dữ liệu WordPress
    $capsule->addConnection([
        'driver' => 'mysql',
        'host' => DB_HOST,
        'database' => DB_NAME,
        'username' => DB_USER,
        'password' => DB_PASSWORD,
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => $wpdb->prefix, // Sử dụng tiền tố đúng cách
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

add_action('init', function () {
    load_textdomain('woocommerce', '/path/to/woocommerce/languages/woocommerce.mo');
});

function my_theme_setup()
{
    load_theme_textdomain('xpeed', get_template_directory() . '/languages');
}

add_action('after_setup_theme', 'my_theme_setup');

add_action('woocommerce_product_options_general_product_data', 'add_home_display_checkbox');
function add_home_display_checkbox()
{
    woocommerce_wp_checkbox(
        array(
            'id' => '_show_on_homepage',
            'label' => __('Hiển thị trên Trang chủ', 'woocommerce'),
            'description' => __('Chọn để hiển thị sản phẩm này trên trang chủ.', 'woocommerce'),
        )
    );
}

add_action('woocommerce_process_product_meta', 'save_home_display_checkbox');
function save_home_display_checkbox($post_id)
{
    $is_checked = isset($_POST['_show_on_homepage']) ? 'yes' : 'no';
    update_post_meta($post_id, '_show_on_homepage', $is_checked);
}


add_action('cancel_pending_order', 'handle_cancel_pending_order');

function handle_cancel_pending_order($order_id)
{
    $order = wc_get_order($order_id);

    if ($order && $order->get_status() === 'pending') {
        $order->update_status('cancelled', 'Order was cancelled due to non-payment.');

        // Ghi log trước khi hoàn lại kho
        error_log('Restocking items for order ID: ' . $order_id);

        // Hoàn lại số lượng kho theo cách thủ công
        foreach ($order->get_items() as $item) {
            $product = $item->get_product();
            $quantity = $item->get_quantity();

            if ($product && $product->managing_stock()) {
                // Cập nhật số lượng tồn kho
                $new_stock = $product->get_stock_quantity() + $quantity;
                $product->set_stock_quantity($new_stock);
                $product->save();

                // Ghi log sau khi hoàn lại kho
                error_log('Restocked product ID ' . $product->get_id() . ': New stock quantity is ' . $new_stock);
            }
        }
    }
}

function check_language_in_url($url)
{
    if (filter_var($url, FILTER_VALIDATE_URL) === false) {
        return false; // URL không hợp lệ
    }

    $path = parse_url($url, PHP_URL_PATH) ?? '';
    return preg_match('/\/(vi|en)\//', $path) ? true : false;
}

function custom_home_url_with_language($url)
{
    // Lấy ngôn ngữ hiện tại
    $current_language = strtok(get_locale(), '_');

    // Kiểm tra nếu đang sử dụng endpoint wp-json và không có ngôn ngữ trong URL
    if (strpos($url, '/wp-json') == false) {
        // Nếu ngôn ngữ là tiếng Anh, thêm '/en' trước '/wp-json'
        if ($current_language === 'en') {
            $parsed_url = parse_url($url);
            if (!check_language_in_url($url)) {
                if (isset($parsed_url['host']) && $parsed_url["host"] == "localhost") {
                    // Thêm '/en/' sau domain nếu chưa có
                    $url = str_replace('localhost/WEB-XPEED-BE/', 'localhost/WEB-XPEED-BE/' . $current_language . '/', $url);
                } else if (isset($parsed_url['host']) && $parsed_url["host"] != "localhost") {

                    $url = str_replace($parsed_url["host"], $parsed_url["host"] . '/'. $current_language , $url);
                }
            }
        }
    }
    return $url;
}

// Áp dụng filter home_url
add_filter('home_url', 'custom_home_url_with_language');
