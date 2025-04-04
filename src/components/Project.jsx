import React from 'react';
import PrimaryBtn from './utils/PrimaryBtn';
import { FaArrowRight } from "react-icons/fa6";

const Project = () => {
    return (
        <section id='project' className=' bg-gray-900 '>
            <div className="container grid justify-center items-center p-[70px] lg:p-[100px]">
                <h1 className='lg:px-40 lg:font-semibold pt-4 pb-4 lg:pt-8 lg:pb-8 text-2xl lg:text-5xl leading-[117%] text-center text-gray-white'>Do you have Project Idia?
                Let's discuss your project!</h1>
                <p className='font-normal lg:px-50 lg:  text-lg leading-[133%] text-center text-gray-300'>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.</p>
                <div className="button grid justify-center mt-[32px]">
                    <PrimaryBtn className={'lg:w-[240px] !flex !justify-center !items-center gap-[18px]'}>Lets work Together <span><FaArrowRight/></span></PrimaryBtn>
                    </div>
            </div>
        </section>
    );
};

export default Project;