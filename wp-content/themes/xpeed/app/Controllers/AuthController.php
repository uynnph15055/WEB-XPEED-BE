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
        // Lấy ngôn ngữ hiện tại
        $lang = getCurrentLanguage();

        // Tạo một instance của LoginRequest
        $loginRequest = new LoginRequest($request);

        // Thực hiện xác thực
        if (!$loginRequest->validate()) {
            // Thông báo tùy theo ngôn ngữ
            $message = $lang === 'vi' ? 'Dữ liệu không hợp lệ.' : 'Invalid data.';
            return $this->failData($message, $loginRequest->errors());
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
            // Thông báo tùy theo ngôn ngữ
            $message = $lang === 'vi' ? 'Tài khoản không chính xác.' : 'Account is incorrect.';
            return $this->unauthorized($message);
        }

        // Đăng nhập người dùng
        wp_set_current_user($user->ID);
        wp_set_auth_cookie($user->ID);

        // Thông báo tùy theo ngôn ngữ
        $message = $lang === 'vi' ? 'Đăng nhập thành công.' : 'Login successful.';
        return $this->success($message, $user);
    }

    // Phương thức để xử lý đăng xuất
    public function logout($request)
    {
        // Lấy ngôn ngữ hiện tại
        $lang = getCurrentLanguage();

        wp_logout();

        // Thông báo tùy theo ngôn ngữ
        $message = $lang === 'vi' ? 'Đăng xuất thành công.' : 'Logout successful.';
        return $this->success($message);
    }

    // Phương thức để xử lý đăng ký
    public function register($request)
    {
        // Lấy ngôn ngữ hiện tại
        $lang = getCurrentLanguage();

        $registerRequest = new RegisterRequest($request);

        // Thực hiện xác thực
        if (!$registerRequest->validate()) {
            // Thông báo tùy theo ngôn ngữ
            $message = $lang === 'vi' ? 'Dữ liệu không hợp lệ.' : 'Invalid data.';
            return $this->failData($message, $registerRequest->errors(), 1, null, [], 400);
        }

        // Lấy dữ liệu hợp lệ
        $validatedData = $registerRequest->validated();
        $userName = $request->get_param('username');
        $email = $request->get_param('email');
        $password = $request->get_param('password');
        $address = $request->get_param('address');
        $user_url = home_url();

        // Tạo người dùng mới
        $user_id = wp_create_user($userName, $password, $email);

        if (!is_wp_error($user_id)) { // Kiểm tra xem tạo người dùng có thành công không
            // Cập nhật các thông tin khác cho người dùng
            wp_update_user([
                'ID' => $user_id,
                'display_name' => $userName,
                'user_url' => $user_url, // Cập nhật user_url
            ]);

            // Lưu địa chỉ người dùng vào meta
            update_user_meta($user_id, 'user_address', $address);

            // Thông báo thành công
            $message = $lang === 'vi' ? 'Đăng ký thành công.' : 'Registration successful.';
            return $this->success($message, ['ID' => $user_id, 'email' => $email, 'user_url' => $user_url]);
        } else {
            // Nếu có lỗi khi tạo người dùng
            $message = $lang === 'vi' ? 'Đăng ký không thành công.' : 'Registration failed.';
            return $this->failData($message, $user_id->get_error_message(), 1, null, [], 400);
        }
    }
}

