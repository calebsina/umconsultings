<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'contact_1' =>fake()->text(),
            'contact_2' => fake()->text(),
            'email' => fake()->text(),
            'fbk' => fake()->text(),
            'ins' => fake()->text(),
            'lkn' =>  fake()->text(),
        ];
    }
}
