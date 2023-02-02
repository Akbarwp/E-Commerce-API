import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from '../Navbar';

function Detail() {

    const [produk, setProduk] = useState("");

    const baseURL = "http://e-commerce-laravel.test";
    const { id } = useParams();

    useEffect(() => {
        detailProduk();

    }, []);

    async function detailProduk() {
        let result = await fetch(baseURL + "/api/produk/" + id, {
            method: "GET",
        });
        result = await result.json();
        setProduk(result.data);
    }

    return (
        <div className="app">
            <Navbar />
            <div className="container px-4 pt-32 mx-auto mb-10">
                <Link to="/dashboard/produk" className="font-medium text-primary hover:underline">Kembali</Link>

                <div class="max-w-lg mx-auto mt-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg" src={"http://e-commerce-laravel.test/" + produk.file_path} alt="" />
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{produk.nama}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{produk.deskripsi}</p>
                        <p class="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rp{produk.harga}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;