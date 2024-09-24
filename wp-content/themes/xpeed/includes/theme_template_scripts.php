<?php
if (!function_exists('template_scripts')) {
    function template_scripts()
    {
        wp_enqueue_script('jquery');

        wp_enqueue_style('icon-font', 'https://pro.fontawesome.com/releases/v5.15.0/css/all.css', false, '5.15', 'all');

        wp_enqueue_style('main-css', DIR_URI . '/assets/css/main.css?r=' . rand(100, 999), array(), THEME_VER);

        wp_enqueue_script('theme-main-js', get_template_directory_uri() . '/dist/main.bundle.js', array(), time(), true);

        wp_enqueue_script('fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.20/fancybox/fancybox.umd.js', array('jquery'), '5.0.0', true);
    }
}

add_action('wp_enqueue_scripts', 'template_scripts');

function register_my_menu()
{
    register_nav_menu('header-menu', __('Menu chính'));
    register_nav_menu('footer-menu', __('Menu Footer'));
}
add_action('init', 'register_my_menu');
