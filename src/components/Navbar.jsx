import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import PrimaryBtn from './utils/PrimaryBtn';
import { MdCancel } from "react-icons/md";
import {  NavLink } from 'react-router';



const Navbar = () => {

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


    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav id='navbar'>
        <div className='container py-[12px] lg:py-[20px] grid grid-cols-3 gap-4 items-center px-5'>

            <div className="logo">
            <img className='max-w-full' src="images/Logo.png" alt="" />
            </div>

            {/* MENU */}

            <div className={`menuBar ${!showMenu ? 'invisible opacity-0' : "visible opacity-100"} z-100 lg:visible lg:opacity-100 transition-all duration-300 fixed lg:static col-span-2 bg-gray-500/70 inset-0`}>

            
                <ul className= {`${!showMenu ? 'scale-x-0' : ''} z-100 duration-200 origin-left pt-12 lg:pt-0 lg:scale-x-100 lg:flex relative bg-gray-white max-w-[70%] lg:max-w-full h-full lg:h-auto overflow-auto justify-end items-center text-center gap-8`}>

                    
            {/* CANCEL BUTTON */}

            <button onClick={()=>setShowMenu(false)} className="closeBtn absolute right-5 top-2 lg:hidden text-3xl text-red-500">

            <MdCancel />

            </button>

                {/* MENU ITEMS */}
                    {menuItems.map((item , index) => (

                        <li key={index}><NavLink className='navLink hover:text-primary-500 duration-150 font-[16px] my-2 inline-block leading-[150%] font-medium' to={item.link}>{item.name}</NavLink></li>
                        
                        ))}
                    
                    <li>
                    <PrimaryBtn url='/contact'>
                        Contact
                    </PrimaryBtn>
                    </li>
                </ul>


            </div>

            <div className="menuIcon lg:hidden col-span-2 text-end font-bold">
            <button  onClick={()=> setShowMenu(true)} className="cursor-pointer" >
            <TiThMenu />
            </button>
            </div>

        </div>
        </nav>
    );
};

export default Navbar;