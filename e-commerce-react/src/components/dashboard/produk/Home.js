import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from '../Navbar';

function Home() {

    const [produk, setProduk] = useState([]);
    const [keyword, setKeyword] = useState([]);

    const baseURL = "http://e-commerce-laravel.test";

    useEffect(() => {
        getData();

    }, []);

    async function getData() {
        let result = await fetch(baseURL + "/api/produk", {
            method: "GET",
        });
        result = await result.json();
        setProduk(result.data);
        setKeyword('');
    }

    async function hapusProduk(id) {
        let result = await fetch(baseURL + "/api/produk/hapus/" + id, {
            method: "DELETE",
        });
        await result.json();
        getData();
    }

    async function cariProduk() {
        let result = await fetch(baseURL + "/api/produk/cari/" + keyword, {
            method: "GET",
        });
        result = await result.json();
        setProduk(result.data);
    }

    return (
        <div className="app">
            <Navbar />
            <div className="container px-4 pt-32 mx-auto">
                <div className="w-full">
                    <div className="flex justify-center items-baseline">
                        <h1 className="mb-3 text-3xl font-semibold text-transparent bg-gradient-to-tl from-primary to-primary-light bg-clip-text">Produk</h1>
                        <Link to="tambah" className="ml-3 text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="25" height="25"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z" /></svg>
                        </Link>
                    </div>

                    <div className="mb-5">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari Produk ....." autocomplete="off" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                            <button class="text-white absolute right-20 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={cariProduk}>Search</button>
                            <button class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={getData}>Reset</button>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Id</th>
                                    <th scope="col" className="px-6 py-3">Nama Produk</th>
                                    <th scope="col" className="px-6 py-3">Deskripsi</th>
                                    <th scope="col" className="px-6 py-3">Harga</th>
                                    <th scope="col" className="px-6 py-3">Foto</th>
                                    <th scope="col" className="px-6 py-3">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produk.map((item) =>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4">{item.id}</td>
                                        <td className="px-6 py-4">{item.nama}</td>
                                        <td className="px-6 py-4">{item.deskripsi}</td>
                                        <td className="px-6 py-4">{item.harga}</td>
                                        <td className="px-6 py-4">
                                            <img src={"http://e-commerce-laravel.test/storage/" + item.file_path} alt="Foto Produk" className="w-24 rounded shadow-md" />
                                        </td>
                                        <td className="px-6 py-4 flex">
                                            <Link to={"detail/" + item.id} className="mr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /></svg>
                                            </Link>
                                            <Link to={"ubah/" + item.id} idProduk={item.id} className="mr-3 font-medium text-yellow-500 dark:text-blue-500 hover:underline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" /></svg>
                                            </Link>
                                            <button className="font-medium text-red-600 dark:text-blue-500 hover:underline" onClick={() => { window.confirm("Apakah Anda yakin?") && hapusProduk(item.id); }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10v2zM9 9v8h2V9H9zm4 0v8h2V9h-2z" /></svg>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;