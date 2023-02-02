import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';

import HomeDashboard from './components/dashboard/Home';
import Produk from './components/dashboard/produk/Home';
import DetailProduk from './components/dashboard/produk/Detail';
import TambahProduk from './components/dashboard/produk/Tambah';
import UbahProduk from './components/dashboard/produk/Ubah';
import Protected from './components/Protected';

function App() {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('isLogin') === "true") {
            setIsLogin(true);

        } else if (localStorage.getItem('isLogin') === "false") {
            setIsLogin(false);
        }
    }, [isLogin]);

    return (
        <div className="App">
            <BrowserRouter>
                {isLogin ? (
                    <Routes>
                        <Route path='/' element={<Home />} />
                        {/* Cara 1: */}
                        {/* <Route path='dashboard' element={<HomeDashboard />} /> */}
                        {/* <Route path='/dashboard/produk' element={<Produk />} /> */}

                        {/* Cara 2: */}
                        <Route path='logout' element={<Protected Cmp={HomeDashboard} />} />
                        <Route path='dashboard' element={<Protected Cmp={HomeDashboard} />} />
                        <Route path='/dashboard/produk' element={<Protected Cmp={Produk} />} />
                        <Route path='/dashboard/produk/tambah' element={<Protected Cmp={TambahProduk} />} />
                        <Route path='/dashboard/produk/detail/:id' element={<Protected Cmp={DetailProduk} />} />
                        <Route path='/dashboard/produk/ubah/:id' element={<Protected Cmp={UbahProduk} />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                        <Route path='dashboard/*' element={<Protected Cmp={HomeDashboard} />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
