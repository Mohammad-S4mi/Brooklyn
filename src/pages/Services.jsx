import React from 'react';
import { Link, Outlet } from 'react-router';

const Services = () => {
    return (
        <div className='container'>
            <div className=" flex justify-center gap-4 ">
                <Link to='/service/service1'>Test 1</Link>
                <Link to='/service/service2'>Test 2</Link>
            </div>



            <h1 className='text-center p-5 text-5xl font-extrabold'>This Is Service Page</h1>
            <Outlet/>



        </div>
    );
};

export default Services;