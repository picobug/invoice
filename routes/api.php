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
Route::prefix('auth')->group(function () {
    Route::post('login', 'AuthController@login');
    Route::middleware('auth:api')->get('user', function (Request $request) {
        if ($user = $request->user()) {
            return [
                'user' => $user,
            ];
        }

        return $user;
    });
});
