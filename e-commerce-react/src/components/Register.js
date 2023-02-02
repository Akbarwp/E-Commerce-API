import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from './Navbar';

function Register() {

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/dashboard");
        }
    });

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const baseURL = "http://e-commerce-laravel.test";
    const navigate = useNavigate();

    async function register() {
        let data = { nama, email, password }

        let result = await fetch(baseURL + "/api/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        result = await result.json();
        localStorage.setItem('user-register', JSON.stringify({ result }));

        let ls = JSON.parse(localStorage.getItem('user-register'));
        if (ls.result.status === false) {
            localStorage.removeItem("user-register");
            setStatus(false);

        } else {
            navigate("/login");
        }
    }

    const [status, setStatus] = useState(true);
    function error() {
        if (status === false) {
            return (
                <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span class="font-medium">User sudah terdaftar!</span> Silakan menggunakan email yang berbeda.
                </div>
            );
        }
    }

    return (
        <div className="app">
            <Navbar />
            <div className="container pt-32 px-4 mx-auto">
                { error() }

                <div className="items-center flex flex-wrap">
                    <div className="w-5/12 rotate-90 md:rotate-0 md:w-1/2 lg:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    </div>

                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="p-6 pb-0 mb-5 bg-transparent border-b-0 rounded-t-2xl">
                                <h3 className="relative mb-1 text-2xl font-bold text-transparent bg-gradient-to-tl from-primary to-primary-light bg-clip-text">Regristration</h3>
                                <p className="text-xl">Fill the form to register</p>
                            </div>
                            <form>
                                <label className="mb-2 ml-1 font-bold text-md text-slate-700">Nama</label>
                                <div className="mb-4">
                                    <input type="text"
                                        className="focus:shadow-soft-primary-outline text-md leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                        placeholder="Nama" aria-label="Nama" aria-describedby="nama-addon" required onChange={(e) => setNama(e.target.value)} />
                                </div>
                                <label className="mb-2 ml-1 font-bold text-md text-slate-700">Email</label>
                                <div className="mb-4">
                                    <input type="email"
                                        className="focus:shadow-soft-primary-outline text-md leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                        placeholder="Email" aria-label="Email" aria-describedby="email-addon" required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <label className="mb-2 ml-1 font-bold text-md text-slate-700">Password</label>
                                <div className="mb-4">
                                    <input type="password"
                                        className="focus:shadow-soft-primary-outline text-md leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                        placeholder="Password" aria-label="Password" aria-describedby="password-addon" required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="text-center">
                                    <button type="button" className="inline-block w-full py-3 my-1 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-md ease-soft-in tracking-tight-soft bg-gradient-to-tl from-primary to-primary-light hover:scale-102 hover:shadow-soft-xs active:opacity-85" onClick={register}>Register</button>
                                </div>
                            </form>
                            <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                <p className="mx-auto mb-6 leading-normal text-sm">
                                    Sudah Punya Akun?
                                    <Link to="/login" className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text"> Masuk Sekarang</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;