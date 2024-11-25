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
            'password' => $request->get_param('password')
        ];

        // Khởi tạo validator
        $this->validator = new Validator();
    }

    // Định nghĩa các quy tắc xác thực
    public function rules()
    {
        return [
            'username' => 'required|min:10|max:100|unique:app\models\UserModel,user_login',
            'email' => 'required|email|unique:app\models\UserModel,user_email',
            'password' => 'required|min:10'
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
