<?php

namespace App\Http\Controllers;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'en_title' => 'required',
            'fr_title' => 'required',
            'en_des' => 'required',
            'fr_des' => 'required',
            'service_icon' => 'required'
        ]);
        $service = Service::create([
            'en_title' => $request->en_title,
            'fr_title' => $request->fr_title,
            'en_des' => $request->en_des,
            'fr_des' => $request->fr_des,
            'service_icon' => $request->service_icon
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
        $id = $request->id;
        $service = Service::where('id', $id)->update([
            'en_title' => $request->en_title,
            'fr_title' => $request->fr_title,
            'en_des' => $request->en_des,
            'fr_des' => $request->fr_des,
            'service_icon' => $request->service_icon
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
        $blog = Service::find($id);
        $blog->delete();
        return Redirect::route('dashboard');
    }
}
