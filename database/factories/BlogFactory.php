<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'en_title' => fake()->text(),
            'fr_title' => fake()->text(),
            'author' => fake()->name(),
            'publishedon' => fake()->text(),
            'en_descr' => fake()->text(),
            'fr_descr' => fake()->text(),
            'en_content_1' => fake()->text(),
            'fr_content_1' => fake()->text(),
            'en_content_2' => fake()->text(),
            'fr_content_2' => fake()->text(),
            'en_content_3' => fake()->text(),
            'fr_content_3' => fake()->text(),
            'en_content_4' => fake()->text(),
            'fr_content_4' => fake()->text(),
            'img_url' => fake()->text()


        ];
    }
}
