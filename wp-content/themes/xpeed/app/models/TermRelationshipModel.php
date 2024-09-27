<?php
namespace app\models;

use Illuminate\Database\Eloquent\Model;

class TermRelationshipModel extends Model
{
    protected $table = 'term_relationships'; // Bảng wp_term_relationships

    public $timestamps = false;

    protected $fillable = [
        'object_id',
        'term_taxonomy_id',
    ];

    public function product()
    {
        return $this->belongsTo(ProductModel::class, 'object_id', 'ID');
    }

    public function taxonomy()
    {
        return $this->belongsTo(TermTaxonomyModel::class, 'term_taxonomy_id', 'term_taxonomy_id');
    }
}
