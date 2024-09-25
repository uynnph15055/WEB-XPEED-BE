<?php
// app/Controllers/YourController.php

namespace app\Controllers;

use app\models\UserModel; // Import the UserModel

class UserController {
    // Phương thức xử lý GET request cho /example
    public function index($request) {
        return wp_send_json_success(['message' => 'Hello World']);
    }

    // Phương thức xử lý GET request cho /example/{id}
    public function show($request) {
        $id = $request['id']; // Lấy ID từ request
        return wp_send_json_success(['id' => $id, 'data' => 'Sample data for ID ' . $id]);
    }

    // Phương thức để lấy danh sách người dùng
    public function getUsers($request) {
        // Lấy tất cả các bản ghi người dùng
        $users = UserModel::all();
        
        return wp_send_json_success(['users' => $users]);
    }

    // Phương thức để xử lý đăng nhập
    public function login($request) {
        // Lấy dữ liệu từ request
        $username = $request->get_param('username');
        $password = $request->get_param('password');

        // Kiểm tra xem có tồn tại user không
        $user = get_user_by('login', $username);

        if (!$user) {
            return new \WP_REST_Response(['message' => 'Tên người dùng không tồn tại.'], 401);
        }

        // Kiểm tra mật khẩu
        if (!wp_check_password($password, $user->user_pass, $user->ID)) {
            return new \WP_REST_Response(['message' => 'Mật khẩu không chính xác.'], 401);
        }

        // Đăng nhập người dùng
        wp_set_current_user($user->ID);
        wp_set_auth_cookie($user->ID);

        // Trả về thông tin người dùng
        return new \WP_REST_Response([
            'message' => 'Đăng nhập thành công.',
            'user' => [
                'ID' => $user->ID,
                'username' => $user->user_login,
                'email' => $user->user_email,
                // Thêm các thông tin khác nếu cần
            ]
        ], 200);
    }
}
