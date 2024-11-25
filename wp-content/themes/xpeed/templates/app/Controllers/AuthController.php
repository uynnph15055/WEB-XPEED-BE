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
            return $this->failData('Dữ liệu không hợp lệ.', $loginRequest->errors());
        }

        // Lấy dữ liệu từ request
        $loginInput = $request->get_param('username'); // Có thể là email hoặc username
        $password = $request->get_param('password');

        // Kiểm tra xem input là email hay username
        if (filter_var($loginInput, FILTER_VALIDATE_EMAIL)) {
            // Nếu là email, tìm user theo email
            $user = get_user_by('email', $loginInput);
        } else {
            // Nếu không phải email, tìm user theo username
            $user = get_user_by('login', $loginInput);
        }

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
            return $this->failData('Dữ liệu không hợp lệ.', $registerRequest->errors(), 1, null, [], 400);
        }

        // Lấy dữ liệu hợp lệ
        $validatedData = $registerRequest->validated();
        // Lấy dữ liệu từ request
        $userName = $request->get_param('username');
        $email = $request->get_param('email');
        $password = $request->get_param('password');
        $address = $request->get_param('address');
        $user_url = home_url();

        // Tạo người dùng mới
        $user_id = wp_create_user($userName, $password, $email);
        if (!empty($user_id)) {
            UserModel::find($user_id)->update([
                'ID' => $user_id,
                'display_name' => $userName,
                'user_url' => $user_url, // Cập nhật user_url
                'user_address' => $address
            ]);

            // Trả về thông báo thành công
            return $this->success(
                'Đăng ký thành công.',
                ['ID' => $user_id, 'email' => $email, 'user_url' => $user_url]
            );
        }
    }
}
