<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProdukController;

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

// Register, Login, Logout
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/logout', [UserController::class, 'logout']);

// Produk
Route::get('/produk', [ProdukController::class, 'index']);
Route::get('/produk/{id}', [ProdukController::class, 'getProdukByID']);
Route::post('/produk/tambah', [ProdukController::class, 'tambah']);
Route::post('/produk/ubah/{id}', [ProdukController::class, 'ubah']);
Route::delete('/produk/hapus/{id}', [ProdukController::class, 'hapus']);
Route::get('/produk/cari/{keyword}', [ProdukController::class, 'cari']);