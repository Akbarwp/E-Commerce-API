import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div class="h-screen w-full flex flex-col justify-center items-center bg-white">
            <h1 class="text-9xl font-extrabold text-primary tracking-widest">404</h1>
            <div class="bg-secondary px-2 text-sm text-white rounded rotate-12 absolute">Page Not Found</div>
            <button class="mt-5">
                <Link to="/" class="relative inline-block text-sm font-medium text-secondary group active:text-orange-500 focus:outline-none focus:ring">
                    <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span class="relative block px-8 py-3 bg-white border border-current">Kembali</span>
                </Link>
            </button>
        </div>
    );
}

export default NotFound;