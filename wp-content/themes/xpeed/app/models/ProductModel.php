<?php
namespace app\models;

use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    protected $table = 'posts'; // Bảng wp_posts

    public $timestamps = false;

    protected $primaryKey = 'ID';

    protected $fillable = [
        'post_title',
        'post_content',
        'post_excerpt',
        'post_status',
        'post_type',
        'post_date',
        'post_modified',
    ];

    protected $hidden = [
        'post_content', // Ẩn nội dung nếu không cần thiết
    ];

    public function meta()
    {
        return $this->hasMany(ProductMetaModel::class, 'post_id', 'ID');
    }

    public function terms()
    {
        return $this->belongsToMany(TermModel::class, 'term_relationships', 'object_id', 'term_taxonomy_id');
    }
}
