<?php

namespace app\models; // Make sure this matches

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    // Đặt tên bảng là wp_users của WordPress
    protected $table = 'users'; // Lưu ý: không cần tiền tố "wp_" vì đã sử dụng $wpdb->prefix trong setup Eloquent

    // Bỏ qua timestamps vì bảng wp_users của WordPress không có cột created_at và updated_at
    public $timestamps = false;

    // Khóa chính của bảng
    protected $primaryKey = 'ID';

    // Các cột có thể được gán giá trị (fillable) khi tạo hoặc cập nhật user
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

    // Ẩn các cột nhạy cảm khi trả về kết quả
    protected $hidden = [
        'user_pass',  // Ẩn mật khẩu
        'user_activation_key',
    ];

    // Nếu cần, bạn có thể thêm các mối quan hệ hoặc phương thức tùy chỉnh khác
}
