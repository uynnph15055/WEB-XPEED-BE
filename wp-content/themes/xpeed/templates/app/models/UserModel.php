<?php

namespace app\models; // Make sure this matches

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    protected $table = 'users';

    public $timestamps = false;

    // Khóa chính của bảng
    protected $primaryKey = 'ID';

    protected $fillable = [
        'user_login',
        'user_pass',
        'user_nicename',
        'user_email',
        'user_url',
        'user_registered',
        'user_activation_key',
        'user_status',
        'display_name',
    ];

    protected $hidden = [
        'user_pass',  // Ẩn mật khẩu
        'user_activation_key',
    ];
}
