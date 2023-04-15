<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ContactController;



use App\Models\Service;
use App\Models\Blog;
use App\Models\Contact;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;

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


Route::group(['prefix' => LaravelLocalization::setLocale()], function(){
    Route::get('/lang/{lang}', function ($lang) {
        session(['locale' => $lang]);
        App::setLocale('fr');
        return redirect('/');
      })->middleware('web')->name('lang.switch');

    Route::get('/', function () {
        $blog = DB::table('blogs')->orderBy('created_at', 'desc')->limit(4)->get();
        $service = DB::table('services')->orderBy('created_at', 'desc')->limit(4)->get();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'services' => $service,
            'blog' => $blog,
            'contact' => Contact::all(),
        ]);
        App::setLocale($locale);
    });

    Route::get('/details/{id}', function($id){
        $details = Blog::find($id);
        return Inertia::render('Details',[
            'details' => $details,
        ]);
    });

    // contact
Route::get('/contact', function(){
    return Inertia::render('Contact',[
        'contact' => Contact::all(),
    ]);
});

// blog
Route::get('/blogs', function(){
    return Inertia::render('Blog',[
        'blog' => Blog::paginate(8),
    ]);
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


});



Route::get('/dashboard', function () {
    $events = DB::table('events')->orderBy('created_at', 'desc')->limit(4)->get();
    return Inertia::render('Dashboard',[
        'blog' => Blog::paginate(4),
        'service' => Service::paginate(4),
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

    // edit blog routes
    Route::get('/adminblog/{id}', function($id){
        $details = Blog::find($id);
        return Inertia::render('EditBlog',[
            'details' => $details,
        ]);
    });
    Route::post('/blogcreate', [BlogController::class, 'store'])->name('blog.store');
    Route::post('/blogcreate/{id}', [BlogController::class, 'update'])->name('blog.update');
    Route::delete('/blogcreate/{id}', [BlogController::class, 'destroy'])->name('blog.destroy');

    // services routes
    Route::get('/adminservice', function(){
        return Inertia::render('AdminService');
    });

    Route::get('/adminservice/{id}', function($id){
        $service = Service::find($id);
        return Inertia::render('EditService',[
            'service' => $service,
        ]);
    });

    Route::post('/adminservices', [ServiceController::class, 'store'])->name('service.store');
    Route::post('/adminservice/{id}', [ServiceController::class, 'update'])->name('service.update');
    Route::delete('/adminservice/{id}', [ServiceController::class, 'destroy'])->name('service.destroy');


    // contact page routes

    Route::get('/contact/{id}', function($id){
        $contact = Contact::find($id);
        return Inertia::render('EditContact',[
            'contact' => $contact,
        ]);
    });
    Route::post('/contact/{id}', [ContactController::class, 'update'])->name('contact.update');

});








require __DIR__.'/auth.php';
