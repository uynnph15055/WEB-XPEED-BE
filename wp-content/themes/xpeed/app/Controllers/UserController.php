<?php
// app/Controllers/YourController.php

namespace app\Controllers;

use app\models\UserModel;


class UserController
{
    // Phương thức xử lý GET request cho /example
    public function index($request)
    {
        return wp_send_json_success(['message' => 'Hello World']);
    }

    // Phương thức xử lý GET request cho /example/{id}
    public function show($request)
    {
        $id = $request['id']; // Lấy ID từ request
        return wp_send_json_success(['id' => $id, 'data' => 'Sample data for ID ' . $id]);
    }

    // Phương thức để lấy danh sách người dùng
    public function getUsers($request)
    {
        // Lấy tất cả các bản ghi người dùng
        $users = UserModel::all();
        return wp_send_json_success(['users' => $users]);
    }

    // Phương thức để xử lý đăng nhập
    public function login($request)
    {
        // Lấy dữ liệu từ request
        $username = $request->get_param('username');
        $password = $request->get_param('password');

        // Kiểm tra xem có tồn tại user không
        $user = get_user_by('login', $username);

        // Nếu không tồn tại user hoặc mật khẩu không chính xác
        if (!$user || !wp_check_password($password, $user->user_pass, $user->ID)) {
            return new \WP_REST_Response([
                'code' => 401,
                'message' => 'Tài khoản không chính xác.',
                'data' => null
            ], 401);
        }

        // Đăng nhập người dùng
        wp_set_current_user($user->ID);
        wp_set_auth_cookie($user->ID);

        // Trả về thông tin người dùng
        return new \WP_REST_Response([
            'code' => 200,
            'message' => 'Đăng nhập thành công.',
            'data' => [
                'ID' => $user->ID,
                'username' => $user->user_login,
                'email' => $user->user_email,
                // Thêm các thông tin khác nếu cần
            ]
        ], 200);
    }


    public function logout($request)
    {
        wp_logout();
        return new \WP_REST_Response(['message' => 'Đăng xuất thành công.'], 200);
    }

    public function register($request)
    {
        // Lấy dữ liệu từ request
        $name = $request->get_param('name');
        $email = $request->get_param('email');
        $password = $request->get_param('password');

        // Kiểm tra xem email đã tồn tại chưa
        if (email_exists($email)) {
            return new \WP_REST_Response([
                'code' => 400,
                'message' => 'Email đã tồn tại.',
                'data' => null
            ], 400);
        }

        // Mã hóa mật khẩu
        $hashed_password = wp_hash_password($password);

        // Tạo người dùng mới
        $user_id = wp_insert_user([
            'user_login' => $email,
            'user_pass' => $hashed_password,
            'user_email' => $email,
            'display_name' => $name,
            'role' => 'subscriber', // Hoặc role mà bạn muốn
        ]);

        // Kiểm tra xem việc tạo người dùng có thành công không
        if (is_wp_error($user_id)) {
            return new \WP_REST_Response([
                'code' => 500,
                'message' => 'Đã xảy ra lỗi khi tạo tài khoản.',
                'data' => null
            ], 500);
        }

        // Trả về thông báo thành công
        return new \WP_REST_Response([
            'code' => 200,
            'message' => 'Đăng ký thành công.',
            'data' => [
                'ID' => $user_id,
                'email' => $email,
            ]
        ], 200);
    }

}
