<?php
namespace app\models;

use Illuminate\Database\Eloquent\Model;

class TermTaxonomyModel extends Model
{
    protected $table = 'term_taxonomy'; // Bảng wp_term_taxonomy

    public $timestamps = false;

    protected $primaryKey = 'term_taxonomy_id';

    protected $fillable = [
        'term_id',
        'taxonomy',
        'description',
        'parent',
        'count',
    ];

    public function terms()
    {
        return $this->belongsTo(TermModel::class, 'term_id', 'term_id');
    }
}
