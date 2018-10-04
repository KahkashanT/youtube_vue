<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('likes/create','LikesController@create');
Route::get('likes/index','LikesController@index');
Route::get('likes/show/{id}','LikesController@show');
Route::get('likes/edit/{id}','LikesController@edit');

Route::post('comments/create','CommentsController@create');
Route::get('comments/index','CommentsController@index');
Route::get('comments/show{id}','CommentsController@show');
