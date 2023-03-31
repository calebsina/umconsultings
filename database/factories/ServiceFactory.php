<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

// $faker = Faker\Factory::create();
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\service>
 */
class ServiceFactory extends Factory
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
            'en_des' => fake()->text(),
            'fr_des' => fake()->text(),
        ];
    }
}
