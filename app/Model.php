<?php

namespace App;

use Ramsey\Uuid\Uuid;

class Model extends \Model
{
    public $incrementing = false;
    protected $perPage = 25;

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->id = (string) Uuid::generate();
        });
    }
}
