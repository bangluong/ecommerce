<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get(
    '/customer/get/{id}',
    [CustomerController::class, 'getById']
);
Route::post(
    '/customer/post',
    [CustomerController::class, 'login']
);
Route::get(
    '/customer/getToken/{email}/{password}',
    [CustomerController::class, 'getToken']
);
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    //product api
    Route::post('/product/add', [ProductController::class, 'store']);
    Route::get('/test', [ProductController::class, 'getCategories']);
    Route::get('/images/productId/{productId}', [ProductController::class, 'getProductImages']);

    //category api
    Route::post('/category/add', [CategoryController::class, 'store']);
    Route::get('/category/all', [CategoryController::class, 'getAll']);
});
