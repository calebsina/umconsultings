<?php

namespace App\Http\Requests;

use App\Models\Blog;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class BlogCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() : bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'en_title' => ['required', 'max:500'],
            'author' => ['required', 'max:500'],
            'publishedOn' => ['required', 'max:500'],
            'descr' => ['required', 'max:1000'],
            'en_content_1' => ['required'],
            'img_url' => [
                'required', File::image()
                ->min(1024)
                ->max(12 * 1024),
                ]
        ];

        // $file = $request->img_url;
    }
}
