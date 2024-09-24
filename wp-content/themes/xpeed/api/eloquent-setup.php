<?php

use Illuminate\Database\Capsule\Manager as Capsule;

if (!class_exists('EloquentSetup')) {
      class EloquentSetup
      {
            public function __construct()
            {
                  $this->initEloquent();
            }

            public function initEloquent()
            {
                  // Kết nối cơ sở dữ liệu
                  $capsule = new Capsule;

                  $capsule->addConnection([
                        'driver'    => 'mysql',
                        'host'      => DB_HOST,
                        'database'  => DB_NAME,
                        'username'  => DB_USER,
                        'password'  => DB_PASSWORD,
                        'charset'   => 'utf8',
                        'collation' => 'utf8_unicode_ci',
                        'prefix'    => $GLOBALS['table_prefix'],
                  ]);

                  // Thiết lập Eloquent ORM
                  $capsule->setAsGlobal();
                  $capsule->bootEloquent();
            }
      }

      // Khởi tạo Eloquent trong WordPress
      new EloquentSetup();
}
