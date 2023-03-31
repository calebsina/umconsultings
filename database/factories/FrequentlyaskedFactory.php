<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\frequentlyasked>
 */
class FrequentlyaskedFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'en_question'=>fake()->text(),
            'fr_question' =>fake()->text(),
            'en_answer' =>fake()->text(),
            'fr_answer' =>fake()->text(),

        ];
    }
}
