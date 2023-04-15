<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
// use Inertia\Middleware\SetLocale;
use Illuminate\Support\Facades\App;

use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *16
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => fn() => $request->user() ? $request->user()->only('id', 'name', 'email') : null,
            ],
            'translations' => [
                'welcome' => trans('welcome'),
                'welcome2' => trans('welcome2'),
                'explore' => trans('explore'),
                'explore_des_1' => trans('explore_des_1'),
                'explore_des_2' => trans('explore_des_2'),
                'services' => trans('services'),
                'services_des' => trans('services_des'),
                'goal' => trans('goal'),
                'goal_1' => trans('goal_1'),
                'goal_2' => trans('goal_2'),
                'about' => trans('about'),
                'about_us' => trans('about_us'),
                'footer' => trans('footer'),
                'contact' => trans('contact'),
                'quest' => trans('quest'),
                'read' => trans('read')
            ],
            'locale' => App::getLocale(),
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
