import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    const menuItems = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'About',
            link: '/about',
        },
        {
            name: 'Process',
            link: '/process',
        },
        {
            name: 'Portfolio',
            link: '/portfolio',
        },
        {
            name: 'Blog',
            link: '/blog',
        },
        {
            name: 'Services',
            link: '/service',
        },
    ]


    return (
        
        <section id='footer' className=' bg-gray-800 lg:-translate-y-15'>
            <div className="container p-6 grid lg:grid-cols-3 lg:justify-center lg:pt-[190px] lg:pb-[86px] items-center">
                <div className="footerLogo"><img src="images/footerLogo.png" alt="" /></div>
                <div className="footerTitle p-5">
                    <ul className='lg:flex gap-3'>

                    {menuItems.map((item , index) => (
                    <li key={index}><NavLink className='hover:text-primary-500 font-normal text-base leading-[150%] text-gray-50 duration-150 font-[16px] my-2 inline-block leading-[150%] text-white font-medium' to={item.link}>{item.name}</NavLink></li>
                    ))}

                    </ul>
                </div>
                <div className="footerText font-normal text-base leading-[150%] text-gray-white text-center p-4 lg:p-0 lg:text-end">Copyright © 2022 Picto.</div>
            </div>
        </section>
    );
};

export default Footer;