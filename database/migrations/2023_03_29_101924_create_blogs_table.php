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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('en_title');
            $table->string('fr_title');
            $table->string('author');
            $table->string('publishedon');
            $table->string('en_descr');
            $table->string('fr_descr');
            $table->text('fr_content_1')->nullable();
            $table->text('en_content_1')->nullable();
            $table->text('fr_content_2')->nullable();
            $table->text('en_content_2')->nullable();
            $table->text('en_content_3')->nullable();
            $table->text('fr_content_3')->nullable();
            $table->text('en_content_4')->nullable();
            $table->text('fr_content_4')->nullable();
            $table->string('img_url');
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
        Schema::dropIfExists('blogs');
    }
};
