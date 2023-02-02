<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Produk extends Model
{
    public $table = "produk";
    public $timestamp = true;

    function lihatData()
    {
        $produk = DB::table('produk')->orderBy('created_at', 'desc')->get();
        if ($produk != null) {
            return $produk;
        } else {
            return null;
        }
    }

    function getProdukByID($request)
    {
        $produk = DB::table('produk')->where('id', $request->id)->first();
        if ($produk != null) {
            return $produk;
        } else {
            return null;
        }
    }

    function tambah($request)
    {
        date_default_timezone_set("Asia/Jakarta");

        if ($request->file('foto') == null || $request->nama == null || $request->deskripsi == null || $request->harga == null) {
            return $produk = 0;

        } else {
            $produk = DB::table('produk')->insert([
                'file_path' => $request->file('foto')->store('produk'),
                'nama' => $request->nama,
                'deskripsi' => $request->deskripsi,
                'harga' => $request->harga,
            ]);
        }
        return $produk;
    }

    function ubah($request) {
        date_default_timezone_set("Asia/Jakarta");

        if ($request->nama == null || $request->deskripsi == null || $request->harga == null) {
            return $produk = 0;

        } else {
            if ($request->file('foto') == null) {
                $produk = DB::table('produk')->where('id', $request->id)->update([
                    'nama' => $request->nama,
                    'deskripsi' => $request->deskripsi,
                    'harga' => $request->harga,
                ]);

            } else {
                $path = DB::table('produk')->where('id', $request->id)->first();
                Storage::delete($path->file_path);

                $produk = DB::table('produk')->where('id', $request->id)->update([
                    'file_path' => $request->file('foto')->store('produk'),
                    'nama' => $request->nama,
                    'deskripsi' => $request->deskripsi,
                    'harga' => $request->harga,
                ]);
            }
        }
        return $produk;
    }

    function hapus($request) {
        $path = DB::table('produk')->where('id', $request->id)->first();
        
        if ($path) {
            Storage::delete($path->file_path);
            $produk = DB::table('produk')->where('id', $request->id)->delete();

        } else {
            $produk = 0;
        }

        return $produk;
    }

    function cari($request) {
        $produk = DB::table('produk')->where('nama', 'like', "%$request->keyword%")->orderBy('created_at', 'desc')->get();
        return $produk;
    }
}
