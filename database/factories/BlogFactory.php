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
            'en_content' => fake()->text(),
            'fr_content' => fake()->text(),
            'img_url' => fake()->text()


        ];
    }
}
