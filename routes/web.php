<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LangController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FrequentlyAskedController;






use App\Models\Service;
use App\Models\Blog;
use App\Models\Contact;
use App\Models\Event;
use App\Models\Frequentlyasked;



use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Redirect;


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

// localization middle ware
Route::group(['prefix' => LaravelLocalization::setLocale(Session::get('locale'))], function(){
   
    // language routes
    // Route::get('/lang/{locale}', [LangController::class, 'changeLang']);

    Route::get('language/{locale}', function ($locale) {
        App::setLocale($locale);
        $session = session();
        $session->put('locale', $locale);
        // dd($session->get('locale'));

        return redirect()->to("/$locale");
    });

    // home pag route
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
            'events' => Event::all(),
            'asked' => Frequentlyasked::all(),
        ]);
    });

    // details route for blog
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

    Route::get('/formlink/{events}', function($event){
        // dd($event);
        return redirect()->to(`https://{$event}`);
    });

    // about page
    Route::get('/about', function(){
        // dd(locale);
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
        'asked' => Frequentlyasked::paginate(4),

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

    // frequently asked questions routes

    Route::get('/question', function(){
        return Inertia::render('AddQuestion');
    });

    Route::get('/question/{id}', function($id){
        $question = Frequentlyasked::find($id);
        return Inertia::render('EditQuestion',[
            'question' => $question,
        ]);
    });


    Route::post('/question', [FrequentlyAskedController::class, 'store'])->name('question.store');
    Route::post('/question/{id}', [FrequentlyAskedController::class, 'update'])->name('question.update');
    Route::delete('/question/{id}', [FrequentlyAskedController::class, 'destroy'])->name('question.destroy');
    


    // contact page routes

    Route::get('/contact/{id}', function($id){
        $contact = Contact::find($id);
        return Inertia::render('EditContact',[
            'contact' => $contact,
        ]);
    });
    Route::post('/contact/{id}', [ContactController::class, 'update'])->name('contact.update');

    Route::post('/event/{id}', [EventController::class, 'update'])->name('event.update');


    Route::get('/event/{id}', function($id){
        $event = Event::find($id);
        return Inertia::render('Events',[
            'events' => $event,
        ]);
    });

});








require __DIR__.'/auth.php';
