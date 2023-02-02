import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from '../Navbar';

function Tambah() {

    const [foto, setFoto] = useState("");
    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState("");

    const baseURL = "http://e-commerce-laravel.test";
    const navigate = useNavigate();

    async function tambahProduk() {
        const formData = new FormData();
        
        formData.append('foto', foto);
        formData.append('nama', nama);
        formData.append('deskripsi', deskripsi);
        formData.append('harga', harga);

        let result = await fetch(baseURL + "/api/produk/tambah", {
            method: "POST",
            body: formData,
        });
        result = await result.json();
        let produk = result;
        
        if (produk.status === true) {
            navigate("/dashboard/produk");
            alert('Produk berhasil ditambahkan!');
            
        } else {
            alert('Produk gagal ditambahkan!');
        }

    }

    return (
        <div className="app">
            <Navbar />
            <div className="container px-4 pt-32 mx-auto">
                <h1 className="mb-5 text-3xl font-semibold text-transparent bg-gradient-to-tl from-primary to-primary-light bg-clip-text">Tambah Produk</h1>
                <div className="flex justify-center">
                    <form className="basis-1/2">
                        <div className="mb-6">
                            <label for="foto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Foto Produk</label>
                            <input type="file" name="foto" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" onChange={(e) => setFoto(e.target.files[0])} />
                        </div>
                        <div className="mb-6">
                            <label for="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Produk</label>
                            <input type="text" id="nama" name="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Produk" required onChange={(e) => setNama(e.target.value)} />
                        </div>
                        <div className="mb-6">
                            <label for="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi Produk</label>
                            <textarea id="deskripsi" name="deskripsi" rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deskripsi Produk" required onChange={(e) => setDeskripsi(e.target.value)}></textarea>
                        </div>
                        <div className="mb-6">
                            <label for="harga" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga Produk</label>
                            <input type="number" id="harga" name="harga" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Harga Produk" required onChange={(e) => setHarga(e.target.value)} />
                        </div>
                        <button type="button" className="mr-3 text-white bg-gradient-to-tl from-primary to-primary-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={tambahProduk}>Tambah</button>
                        <Link to="/dashboard/produk" className="text-white bg-gradient-to-tl from-gray-500 to-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Batal</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Tambah;