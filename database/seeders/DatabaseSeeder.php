<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(05)->create();
        \App\Models\Service::factory(9)->create();
        \App\Models\Blog::factory(9)->create();

        \App\Models\Service::factory(9)->create();
        \App\Models\Event::factory(3)->create();
        \App\Models\Frequentlyasked::factory(5)->create();
        \App\Models\Notification::factory(9)->create();







        // \App\Models\Page::factory()->create([
        //     'en_maintitle' => 'Its a Big World Out There, Go Explore',
        //     'fr_maintitle' => 'test@example.com',
        //     'en_subtitle' => 'We match student abilities, performance, and desires with the best possible career options',
        //     'fr_subtitle' => 'test@example.com',
        //     'en_descone' => 'The number one in providing one-stop study abroad solutions for students.
        //     help them achieve their goals through proper career counseling & guidance, to add value for our partner institutions and stakeholders.',
        //     'fr_descone' => 'test@example.com',
        //     'en_mission' => 'To match the students abilities, performance, and desires with the best possible career options, To provide customized solutions to the students aspiring to study overseas.',
        //     'fr_mission' => 'test@example.com',
        //     'en_goal' => 'Test User',
        //     'fr_goal' => 'test@example.com',
        //     'en_name' => 'U&M Consulting',
        //     'fr_name' => 'test@example.com',
        // ]);
    }
}
