<?php
// app/Controllers/YourController.php

namespace app\Controllers;

use app\models\UserModel;
use app\Controllers\Controller;

class UserController extends Controller
{
    // Phương thức để lấy danh sách người dùng
    public function index($request)
    {
        // Lấy tất cả các bản ghi người dùng
        $users = UserModel::paginate(1);
        return $this->success('Thành công', $users);
    }
}
