import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

function Navbar() {

    const baseURL = "http://e-commerce-laravel.test";
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        fetch(baseURL + "/api/login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });
        localStorage.setItem('isLogin', false);
        navigate("/");
        window.location.reload(true);
    }

    return (
        <nav className="bg-gradient-to-br from-primary to-primary-light border-gray-200 shadow-md px-2 sm:px-4 py-2.5 z-20 top-0 left-0 fixed w-full rounded-b dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/dashboard" className="flex items-center">
                    <span className='text-white mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-current' viewBox="0 0 24 24" width="42" height="42"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.901 10a2.999 2.999 0 0 0 4.075 1.113 3.5 3.5 0 0 1-1.975 3.55L21 21h-7v-2a2 2 0 0 0-1.85-1.995L12 17a2 2 0 0 0-1.995 1.85L10 19v2H3v-6.336a3.5 3.5 0 0 1-1.979-3.553A2.999 2.999 0 0 0 5.098 10h13.803zm-.971 2H6.069l-.076.079c-.431.42-.935.76-1.486 1.002l-.096.039.589.28-.001 5.6 3.002-.001v-.072l.01-.223c.149-2.016 1.78-3.599 3.854-3.698l.208-.005.223.01a4 4 0 0 1 3.699 3.787l.004.201L19 19l.001-5.6.587-.28-.095-.04a5.002 5.002 0 0 1-1.486-1.001L17.93 12zm-.894-9a3.5 3.5 0 0 0 4.446 2.86 3.5 3.5 0 0 1-3.29 3.135L18 9H6a3.5 3.5 0 0 1-3.482-3.14A3.5 3.5 0 0 0 6.964 3h10.072zM15.6 5H8.399a5.507 5.507 0 0 1-1.49 1.816L6.661 7h10.677l-.012-.008a5.518 5.518 0 0 1-1.579-1.722L15.6 5z" /></svg>
                    </span>
                    <span className="self-center text-xl font-semibold font-zen text-white hover:text-secondary whitespace-nowrap dark:text-white dark:hover:text-secondary transition">Lara Dashboard</span>
                </Link>

                {/* Awal Toogle mobile */}
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:text-secondary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                {/* Akhir Toogle mobile */}

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/dashboard" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/produk" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Produk</Link>
                        </li>
                        <li>
                            <Link to="/logout" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={logout}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;