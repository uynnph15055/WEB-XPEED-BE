<?php

namespace app\Controllers;

use app\models\UserModel;
use app\Requests\RegisterRequest; // Import file request
use app\Requests\LoginRequest; // Import file request
use app\Controllers\Controller as BaseController;

class AuthController extends BaseController
{
    // Phương thức để xử lý đăng nhập
    public function login($request)
    {
        // Tạo một instance của LoginRequest
        $loginRequest = new LoginRequest($request);

        // Thực hiện xác thực
        if (!$loginRequest->validate()) {
            // Nếu xác thực thất bại, trả về thông báo lỗi
            return $this->failData( 'Dữ liệu không hợp lệ.', $loginRequest->errors());
        }
        // Lấy dữ liệu từ request

        $username = $request->get_param('username');
        $password = $request->get_param('password');

        // Kiểm tra xem có tồn tại user không
        $user = get_user_by('login', $username);

        // Nếu không tồn tại user hoặc mật khẩu không chính xác
        if (!$user || !wp_check_password($password, $user->user_pass, $user->ID)) {
            return $this->unauthorized('Tài khoản không chính xác.');
        }

        // Đăng nhập người dùng
        wp_set_current_user($user->ID);
        wp_set_auth_cookie($user->ID);

        // Trả về thông tin người dùng
        return $this->success('Đăng nhập thành công.', $user);
    }


    public function logout($request)
    {
        wp_logout();
        return $this->success('Đăng xuất thành công.');
    }

    public function register($request)
    {
        $registerRequest = new RegisterRequest($request);

        // Thực hiện xác thực
        if (!$registerRequest->validate()) {
            // Nếu xác thực thất bại, trả về thông báo lỗi
            return $this->badRequest('Dữ liệu không hợp lệ.', $registerRequest->errors());
        }

        // Lấy dữ liệu hợp lệ
        $validatedData = $registerRequest->validated();
        // Lấy dữ liệu từ request
        $name = $request->get_param('name');
        $email = $request->get_param('email');
        $password = $request->get_param('password');
        $user_url = home_url();

        // Kiểm tra xem email đã tồn tại chưa
        if (email_exists($email)) {
            return $this->fail('Email đã tồn tại.', 1, null, [], 400);
        }

        // Tạo người dùng mới
        $user_id = wp_create_user($email, $password, $email);

        // Kiểm tra xem việc tạo người dùng có thành công không
        if (is_wp_error($user_id)) {
            return $this->fail('Email đã tồn tại.', 1, null, [], 500);
        }

        // Cập nhật thông tin người dùng, bao gồm user_url
        wp_update_user([
            'ID' => $user_id,
            'display_name' => $name,
            'user_url' => $user_url, // Cập nhật user_url
        ]);

        // Trả về thông báo thành công
        return $this->success(
            'Đăng ký thành công.',
            ['ID' => $user_id, 'email' => $email, 'user_url' => $user_url]);

    }
}
