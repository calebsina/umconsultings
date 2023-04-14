<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'en_title',
        'author',
        'publishedon',
        'en_descr',
        'en_content_1',
        'en_content_2',
        'en_content_3',
        'en_content_4',
        'img_url',
    ];
}
