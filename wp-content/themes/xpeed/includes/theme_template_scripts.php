<?php
if (!function_exists('template_scripts')) {
    function template_scripts()
    {
        // CSS
        wp_enqueue_style('fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.20/fancybox/fancybox.min.css');
        wp_enqueue_style('icon-font', 'https://pro.fontawesome.com/releases/v5.15.0/css/all.css', false, '5.15', 'all');

        wp_enqueue_style('main-css', DIR_URI . '/assets/css/main.css?r=' . rand(100, 999), array(), THEME_VER);
        wp_enqueue_script('fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.20/fancybox/fancybox.umd.js', array('jquery'), '5.0.0', true);

        wp_enqueue_script('main-js', DIR_URI . '/assets/js/main.js', array(), THEME_VER, true);
    }
}

add_action('wp_enqueue_scripts', 'template_scripts');
