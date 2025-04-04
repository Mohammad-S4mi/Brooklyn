import React from 'react';

const Footer = () => {
    const menuItems = [
        {
            name: 'Home',
            link: '#',
        },
        {
            name: 'About',
            link: '#',
        },
        {
            name: 'Process',
            link: '#',
        },
        {
            name: 'Portfolio',
            link: '#',
        },
        {
            name: 'Blog',
            link: '#',
        },
        {
            name: 'Services',
            link: '#',
        },
        {
            name: 'Services',
            link: '#',
        },
    ]


    return (
        
        <section id='footer' className=' bg-gray-800 lg:-translate-y-15'>
            <div className="container p-6 grid lg:grid-cols-3 lg:justify-center lg:pt-[190px] lg:pb-[86px] items-center">
                <div className="footerLogo"><img src="images/footerLogo.png" alt="" /></div>
                <div className="footerTitle p-5">
                    <ul className='lg:flex gap-3'>

                    {menuItems.map((item , index) => (
                    <li key={index}><a className='hover:text-primary-500 font-normal text-base leading-[150%] text-gray-50 duration-150 font-[16px] my-2 inline-block leading-[150%] text-white font-medium' href="{item.link}">{item.name}</a></li>
                    ))}

                    </ul>
                </div>
                <div className="footerText font-normal text-base leading-[150%] text-gray-white text-center p-4 lg:p-0 lg:text-end">Copyright © 2022 Picto.</div>
            </div>
        </section>
    );
};

export default Footer;