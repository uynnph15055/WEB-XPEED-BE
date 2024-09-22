<?php

if (!defined('ABSPATH')) {
      exit;
}

class MyController
{
      public function __construct()
      {
            add_action('wp_ajax_my_custom_action', array($this, 'handle_request'));
            add_action('wp_ajax_nopriv_my_custom_action', array($this, 'handle_request'));
      }

      public function handle_request()
      {
            if (isset($_POST['data'])) {
                  $data = sanitize_text_field($_POST['data']);

                  wp_send_json_success(array('message' => 'Yêu cầu thành công', 'data' => $data));
            } else {
                  wp_send_json_error(array('message' => 'Dữ liệu không hợp lệ'));
            }

            // Kết thúc quá trình
            wp_die();
      }
}

// Khởi tạo controller
new MyController();
