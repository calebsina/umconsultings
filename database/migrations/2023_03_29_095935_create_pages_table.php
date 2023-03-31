<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('en_maintitle');
            $table->string('fr_maintitle');
            $table->string('en_subtitle');
            $table->string('fr_subtitle');
            $table->string('en_descone');
            $table->string('fr_descone');
            $table->string('en_mission');
            $table->string('fr_mission');
            $table->string('en_goal');
            $table->string('fr_goal');
            $table->string('en_name');
            $table->string('fr_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
};
