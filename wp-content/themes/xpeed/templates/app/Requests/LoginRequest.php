<?php

namespace app\Requests;

use app\helpers\Validator;

class LoginRequest
{
    protected $data;
    protected $validator;
    protected $errors = [];

    public function __construct($request)
    {
        // Lấy tất cả dữ liệu từ request
        $this->data = [
            'username' => $request->get_param('username'),
            'password' => $request->get_param('password'),
        ];

        // Khởi tạo validator
        $this->validator = new Validator();
    }

    // Định nghĩa các quy tắc xác thực
    public function rules()
    {
        return [
            'username' => 'required', // Tên người dùng là bắt buộc và phải là chuỗi
            'password' => 'required', // Mật khẩu là bắt buộc, phải là chuỗi và có ít nhất 6 ký tự
        ];
    }

    // Hàm để xác thực
    public function validate()
    {
        // Xác thực dữ liệu dựa trên các quy tắc đã định nghĩa
        if (!$this->validator->validate($this->data, $this->rules())) {
            $this->errors = $this->validator->getErrors();
            return false;
        }
        return true;
    }

    // Lấy dữ liệu hợp lệ
    public function validated()
    {
        return $this->data;
    }

    // Lấy thông báo lỗi
    public function errors()
    {
        return $this->errors;
    }
}
