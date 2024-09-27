<?php
namespace app\models;

use Illuminate\Database\Eloquent\Model;

class ProductMetaModel extends Model
{
    protected $table = 'postmeta'; // Bảng wp_postmeta

    public $timestamps = false;

    protected $primaryKey = 'meta_id';

    protected $fillable = [
        'post_id',
        'meta_key',
        'meta_value',
    ];

    protected $hidden = [
        'meta_value', // Ẩn giá trị meta nếu không cần thiết
    ];
}
