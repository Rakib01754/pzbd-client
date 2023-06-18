import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div class="grid h-screen px-4 bg-white place-content-center">
            <h1 class="tracking-widest text-gray-500 text-xl uppercase">{error.status} |{error.statusText}</h1>
            <Link to='/'>
                <button className="bg-[#e74e4e] hover:bg-[#FF0000] text-white font-semibold hover:text-white py-2 px-4 rounded my-3">
                    Back To Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;