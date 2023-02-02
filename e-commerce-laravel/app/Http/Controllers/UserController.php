<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register(Request $request) {
        $model = new User();
        $register = $model->register($request);
        if($register > 0) {
            return response([
                'status' => true,
                'message' => 'Data telah ditambahkan',
                'data' => [
                    'nama' => $request['nama'],
                    'email' => $request['email'],
                ]
            ], 201);

        } else {
            return response([
                'status' => false,
                'message' => 'User Error atau User sudah ada'
            ], 400);
        }

        return $register;
    }

    function login(Request $request) {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'status' => false,
                'message' => 'Login Gagal',
            ], 400);
        }
        
        return response([
            'status' => true,
            'message' => 'Login Berhasil',
        ], 200);
    }

    function logout() {
        return response([
            'status' => true,
            'message' => 'Logout Berhasil',
        ], 200);
    }
}
