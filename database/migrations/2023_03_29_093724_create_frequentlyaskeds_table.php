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
        Schema::create('frequentlyaskeds', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('en_question');
            $table->string('fr_question');
            $table->string('en_answer');
            $table->string('fr_answer');
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
        Schema::dropIfExists('frequentlyaskeds');
    }
};
