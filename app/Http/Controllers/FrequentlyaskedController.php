<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Frequentlyasked;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;

class FrequentlyAskedController extends Controller
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
        try {
            $request->validate([
                'en_question' => 'required',
                'fr_question' => 'required',
                'en_answer' => 'required',
                'fr_answer' => 'required'
            ]);
            $question = Frequentlyasked::create([
                'en_question' => $request->en_question,
                'fr_question' => $request->fr_question,
                'en_answer' => $request->en_answer,
                'fr_answer' => $request->fr_answer,
            ]);
            return Redirect::route('dashboard');
        } catch (\Throwable $th) {
            throw $th;
        }
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
        try {
            $id = $request->id;
            $question = Frequentlyasked::where('id', $id)->update([
            'en_question' => $request->en_question,
            'fr_question'=> $request->fr_question,
            'en_answer' => $request->en_answer,
            'fr_answer' => $request->fr_answer,
        ]);
        return Redirect::route('dashboard');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $question = Frequentlyasked::find($id);
        $question->delete();
        return Redirect::route('dashboard');
    }
}
