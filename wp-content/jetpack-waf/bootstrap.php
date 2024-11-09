<?php
define( 'DISABLE_JETPACK_WAF', false );
if ( defined( 'DISABLE_JETPACK_WAF' ) && DISABLE_JETPACK_WAF ) return;
define( 'JETPACK_WAF_MODE', 'silent' );
define( 'JETPACK_WAF_SHARE_DATA', false );
define( 'JETPACK_WAF_SHARE_DEBUG_DATA', false );
define('JETPACK_WAF_DIR', plugin_dir_path(__FILE__));
define('JETPACK_WAF_WPCONFIG', ABSPATH . 'wp-config.php');

// Sử dụng plugin_dir_path(__FILE__) cho autoload.php
require_once plugin_dir_path(__FILE__) . '../plugins/jetpack/vendor/autoload.php';

Automattic\Jetpack\Waf\Waf_Runner::initialize();
