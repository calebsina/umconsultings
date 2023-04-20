<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Frequentlyasked extends Model
{
    use HasFactory;
    protected $fillable = [
        'en_question',
        'fr_question',
        'en_answer',
        'fr_answer',
    ];
}
