<?php

namespace app\Requests;

use app\helpers\Validator;

class RegisterRequest
{
    protected $data;
    protected $validator;
    protected $errors = [];

    public function __construct($request)
    {
        // Lấy tất cả dữ liệu từ request
        $this->data = [
            'username' => $request->get_param('username'),
            'email' => $request->get_param('email'),
            'password' => $request->get_param('password'),
            'password_confirmation' => $request->get_param('password_confirmation'),
        ];

        // Khởi tạo validator
        $this->validator = new Validator();
    }

    // Định nghĩa các quy tắc xác thực
    public function rules()
    {

        return [
            'username' => 'required|min:3|max:20',
            'email' => 'required|email',
            'password' => 'required',
            'address' => 'required',
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
