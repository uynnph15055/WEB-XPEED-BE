<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
      protected $table = 'wp_users';
      protected $primaryKey = 'ID';
      public $timestamps = false;
}
