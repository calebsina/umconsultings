<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = [
        'en_title',
        'fr_title',
        'en_des',
        'fr_des',
        'service_icon'
    ];
}
