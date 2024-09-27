<?php
namespace app\models;

use Illuminate\Database\Eloquent\Model;

class TermModel extends Model
{
    protected $table = 'terms'; // Bảng wp_terms

    public $timestamps = false;

    protected $primaryKey = 'term_id';

    protected $fillable = [
        'name',
        'slug',
    ];

    public function taxonomy()
    {
        return $this->hasMany(TermTaxonomyModel::class, 'term_id', 'term_id');
    }
}
