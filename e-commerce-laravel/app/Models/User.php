<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public $table = 'users';
    public $timestamp = false;

    protected $fillable = [
        'nama',
        'email',
        'password',
    ];

    protected $hidden = [
        'password'
    ];

    function register($request) {
        if (DB::table('users')->where('email', '=', $request->email)->exists()) {
            // abort(406);
            return 0;
        
        } else {
            $password = Hash::make($request->password);
            
            $register = DB::table('users')->insert([
                'nama' => $request->nama,
                'email' => $request->email,
                'password' => $password,
            ]);
            return $register;
        }
    }
}
