<?php
/**
 * Plugin Name: Disable Grouped Product
 * Description: Loại bỏ Grouped Product trong WooCommerce.
 * Version: 1.0
 * Author: Phuongdd
 */

add_filter('product_type_selector', function($types) {
    if (isset($types['simple'])) {
        unset($types['simple']);
    }
    if (isset($types['grouped'])) {
        unset($types['grouped']);
    }
    if (isset($types['external'])) {
        unset($types['external']);
    }
    return $types;
});
