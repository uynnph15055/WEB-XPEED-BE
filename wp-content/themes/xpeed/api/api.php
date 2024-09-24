<?php
if (!defined('ABSPATH')) exit;

function my_custom_api_handler()
{
      $data = array(
            'message' => 'Hello from WordPress API',
            'status' => 'success'
      );
      return new WP_REST_Response($data, 200);
}

function my_register_custom_api_routes()
{
      register_rest_route('custom-api/v1', '/data/', array(
            'methods' => 'GET',
            'callback' => 'my_custom_api_handler',
      ));
}

add_action('rest_api_init', 'my_register_custom_api_routes');
