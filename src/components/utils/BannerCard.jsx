import React from 'react';
import CountUp from 'react-countup';


const BannerCard = ({counter,suffix,title}) => {
    return (
        <div className='py-3 lg:py-4 bg-[#EDD8FF] text-center'> 
            <CountUp end={counter} 
                className='font-semibold text-gray-700 leading-[125%] text-[24px] lg:text-[32px]'
                duration={2.5} 
                suffix={suffix}
            />

            <p className='leading-[150%] text-gray-500'>{title}</p>
        </div>
    );
};

export default BannerCard;