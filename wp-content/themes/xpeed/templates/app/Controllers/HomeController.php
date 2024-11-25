<?php
// app/Controllers/YourController.php

namespace app\Controllers;

use WP_Query;
use app\Controllers\Controller as BaseController;

class HomeController extends BaseController
{
    public $count = 'xin chào';

    // Phương thức để lấy danh sách bài viết xã hội
    public function getSocial($numberPost = -1)
    {
        // Điều kiện truy vấn
        $args = array(
            'post_type' => 'home-social',
            'posts_per_page' => $numberPost,
        );

        // Truy vấn bài viết từ WP
        $query = new \WP_Query($args);

        // Kiểm tra và lấy dữ liệu
        if ($query->have_posts()) {
            $posts = [];
            while ($query->have_posts()) {
                $query->the_post();
                // Thêm các bài viết vào mảng $posts
                $posts[] = [
                    'title'   => get_the_title(),
                    'content' => get_the_content(),
                    'link'    => get_permalink(),
                    'image'   => get_the_post_thumbnail_url(get_the_ID(), 'full'), // Lấy ảnh đại diện
                ];
            }
            // Reset lại dữ liệu truy vấn chính
            wp_reset_postdata();

            // Trả về kết quả thành công với dữ liệu bài viết
            return $posts;
        } else {
            // Trả về thông báo nếu không có bài viết
            return [];
        }
    }
}