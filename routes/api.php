<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\ProductController;

Route::post('login', [ApiController::class, 'authenticate']);
Route::post('register', [ApiController::class, 'register']);

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('logout', [ApiController::class, 'logout']);
    Route::get('get_user', [ApiController::class, 'get_user']);
    Route::get('products', [ProductController::class, 'index']);
    Route::get('products/{id}', [ProductController::class, 'show']);
    Route::post('products/create', [ProductController::class, 'store']);
    Route::put('products/update/{product}', [
        ProductController::class,
        'update',
    ]);
    Route::get('products/show/{product}', [ProductController::class, 'show']);
    Route::delete('products/delete/{product}', [
        ProductController::class,
        'destroy',
    ]);
});
