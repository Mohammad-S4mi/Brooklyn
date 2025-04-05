import React from 'react';
import { Link } from 'react-router';

const Page404 = () => {
    return (
        <div className='container p-4 h-screen grid grid-cols-2 items-center'>
            <div>
            <h1 className='lg:text-9xl text-3xl lg:font-extrabold text-gray-600'>404</h1>
            <p className='lg:text-4xl text-2xl py-3 lg:py-6 lg:font-semibold text-gray-500'>Page Not Found</p>
            <Link className='bg-red-500 text-lg font-medium leading-[150%] p-2 hover:bg-primary-500 lg:p-3 rounded-xl transition-[200] text-gray-white' to='/'>Go to Home</Link>
            </div>
            <img src="https://cdnl.iconscout.com/lottie/premium/thumb/error-404-animation-download-in-lottie-json-gif-static-svg-file-formats--page-not-found-response-pack-seo-web-animations-4699352.gif" alt="" />
        </div>
    );
};

export default Page404;