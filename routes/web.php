<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
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
    $blog = DB::table('blogs')->orderBy('created_at', 'desc')->limit(4)->get();
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'services' => Service::all(),
        'blog' => $blog,
    ]);
});


Route::get('/dashboard', function () {
    $events = DB::table('events')->orderBy('created_at', 'desc')->limit(4)->get();
    return Inertia::render('Dashboard',[
        'blog' => Blog::paginate(4),
        'events' => $events,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // blog routes
    Route::get('/adminblog', function(){
        return Inertia::render('AdminBlog');
    });
    Route::get('/adminblog/{id}', function($id){
        $details = Blog::find($id);
        return Inertia::render('EditBlog',[
            'details' => $details,
        ]);
    });
    Route::post('/blogcreate', [BlogController::class, 'store'])->name('blog.store');
    Route::post('/blogcreate/{id}', [BlogController::class, 'update'])->name('blog.update');
    Route::delete('/blogcreate/{id}', [BlogController::class, 'destroy'])->name('blog.destroy');



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
Route::get('/blogs', function(){
    return Inertia::render('Blog',[
        'blog' => Blog::paginate(8),
    ]);
});

// contact
Route::get('/contact', function(){
    return Inertia::render('Contact');
});

Route::get('/details/{id}', function($id){
    $details = Blog::find($id);
    return Inertia::render('Details',[
        'details' => $details,
    ]);
});

require __DIR__.'/auth.php';
