<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\BlogCreateRequest;
use Illuminate\Validation\Rules\File;
use App\Models\Blog;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;





class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) : RedirectResponse
    {
      

        $request->validate([
            'en_title' => ['required', 'max:500'],
            'author' => ['required', 'max:500'],
            'publishedon' => ['required', 'max:500'],
            'en_descr' => ['required', 'max:1000'],
            'en_content_1' => ['required'],
            'img_url' => [
                'required', 
                ]
        ]);
        // dd($request);
        $file = $request->file('img_url');
        // dd($file);
        $tempPath = $file->store('blog');
        $finalPath = 'storage/' . $file->getClientOriginalName();
        move_uploaded_file($tempPath, $finalPath);
    
        // $fileModel = new File();
        // $fileModel->path = $finalPath;
        $blog = Blog::create([
            'en_title' => $request->en_title,
            'author' => $request->author,
            'publishedon' => $request->publishedon,
            'en_descr' => $request->en_descr,
            'en_content_1' => $request->en_content_1,
            'en_content_2' => $request->en_content_2,
            'en_content_3' => $request->en_content_3,
            'en_content_4' => $request->en_content_4,
            'img_url' => $tempPath,
        ]);
        return Redirect::route('dashboard');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd($request);
        $id = $request->id;

        if($request->hasFile('img_url')){
            $file = $request->file('img_url');
            $tempPath = $file->store('blog');
            $finalPath = 'storage/' . $file->getClientOriginalName();
            move_uploaded_file($tempPath, $finalPath);
            $blog = Blog::where('id', $id)->update([
            'img_url' => $tempPath,

            ]);
        }
       
        $blog = Blog::where('id', $id)->update([
            'en_title' => $request->en_title,
            'author' => $request->author,
            'publishedon' => $request->publishedon,
            'en_descr' => $request->en_descr,
            'en_content_1' => $request->en_content_1,
            'en_content_2' => $request->en_content_2,
            'en_content_3' => $request->en_content_3,
            'en_content_4' => $request->en_content_4,
        ]);
        return Redirect::route('dashboard');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);
        $blog->delete();
        return Redirect::route('dashboard');

    }
}
