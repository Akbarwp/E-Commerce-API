<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;

class ProdukController extends Controller
{
    function index()
    {
        $model = new Produk();
        $produk = $model->lihatData();

        if ($produk != null) {
            return response([
                'status' => true,
                'message' => 'Lihat Semua Produk',
                'data' => $produk
            ], 200);

        } else {
            return response([
                'status' => false,
                'message' => 'Tidak ada produk',
            ], 204);
        }
    }

    function getProdukByID(Request $request) {
        $model = new Produk();
        $produk = $model->getProdukByID($request);

        if ($produk != null) {
            return response([
                'status' => true,
                'message' => 'Produk Berhasil ditemukan',
                'data' => $produk
            ], 200);

        } else {
            return response([
                'status' => false,
                'message' => 'Tidak ada produk',
            ], 204);
        }
    }

    function tambah(Request $request)
    {
        $model = new Produk();
        $produk = $model->tambah($request);

        if ($produk > 0) {
            return response([
                'status' => true,
                'message' => 'Produk berhasil ditambahkan',
                'data' => [
                    'nama' => $request['nama'],
                    'deskripsi' => $request['deskripsi'],
                    'harga' => $request['harga'],
                ]
            ], 201);
        } else {
            return response([
                'status' => false,
                'message' => 'Produk gagal ditambahkan'
            ], 400);
        }
    }

    function ubah(Request $request) {
        $model = new Produk();
        $produk = $model->ubah($request);

        if ($produk > 0) {
            return response([
                'status' => true,
                'message' => 'Produk berhasil diubah',
                'data' => [
                    'nama' => $request['nama'],
                    'deskripsi' => $request['deskripsi'],
                    'harga' => $request['harga'],
                ]
            ], 200);
        } else {
            return response([
                'status' => false,
                'message' => 'Produk gagal diubah'
            ], 400);
        }
    }

    function hapus(Request $request)
    {
        $model = new Produk();
        $model->hapus($request);

        return response([
            'status' => true,
            'message' => 'Produk berhasil dihapus',
            'data' => [
                'id' => $request['id'],
            ]
        ], 200);
    }

    function cari(Request $request)
    {
        $model = new Produk();
        $cari = $model->cari($request);

        return response([
            'status' => true,
            'message' => 'Produk berhasil dicari',
            'data' => $cari
        ], 200);
    }
}
