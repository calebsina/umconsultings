<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\App;


use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;


class LangController extends Controller
{
    public function changeLang($locale) {
        // dd($locale);
        App::setLocale($locale);
        
        $lang= App::getLocale();
  
        // rest of your logic goes here
        // dd($lang);
        
        return Inertia::render('welcome',[
        'locale' => $lang

        ]);
        // Redirect::to(`/${lang}/about`);
    }
}
