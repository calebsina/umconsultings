<?php

use App\Http\Controllers\ProfileController;
use App\Models\Service;
use App\Models\Blog;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'services' => Service::all(),
        'blog' => Blog::all(),
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// about page
Route::get('/about', function(){
    return Inertia::render('About');
});

// services
Route::get('/services', function(){
    return Inertia::render('Services',[
        'services' => Service::all(),

    ]);
});

// blog
Route::get('/blog', function(){
    return Inertia::render('Blog',[
        'blog' => Blog::paginate(4),
    ]);
});

// contact
Route::get('/contact', function(){
    return Inertia::render('Contact');
});

Route::get('/details/{id}', function($id){
    return Inertia::render('Details',[
        'blogId' => $id,
    ]);
});

require __DIR__.'/auth.php';
