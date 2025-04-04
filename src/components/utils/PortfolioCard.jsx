import React from 'react';
import SecondaryBtn from './SecondaryBtn';
import { FaArrowRight } from "react-icons/fa6";


const PortfolioCard = ({portfolio:{comment, title, image, details}}) => {
    return (
        <div className='border border-gray-100 rounded-lg portfolio-shadow'>
            <a href="#" className='w-full'><img src={image} alt="" /></a>
            <div className="detail p-8">
            <p className='text-[12px] font-medium leading-[133%] text-gray-400'>{comment}</p>
            <a href="#" className='pt-1 pb-3 text-lg font-semibold leading-[133%] text-gray-900'>{title}</a>
            <p className='mb-5 text-sm font-normal leading-[143%] text-gray-600'>{details}</p>
            <SecondaryBtn className='flex justify-center items-center gap-3 w-[173px]'>Case Study <span><FaArrowRight />
            </span></SecondaryBtn>
            </div>

        </div>
    );
};

export default PortfolioCard;