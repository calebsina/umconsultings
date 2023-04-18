<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;

class EventController extends Controller
{
    public function update(Request $request, $id){
        // dd($request);
        
        $id = $request->id;
        $event = Event::where('id', $id)->update([
            'event_name' => $request->event_name,
            'location' => $request->location,
            'time' => $request->time,
            'form_link' => $request->form_link,
        ]);
        return Redirect::route('dashboard');

    }
}
