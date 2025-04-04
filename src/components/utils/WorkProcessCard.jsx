import React from 'react';
import Para from './Para';

const WorkProcessCard = ({icon, title}) => {
    return (
        <div className='bg-gray-white rounded-xl p-8'>
            <img src={icon} className='lg:max-w-[72px] lg:max-h-[72px]' alt="" />
            <h2 className='font-semibold text-xl leading-[120%] text-gray-900 mt-8 mb-3'>{title}</h2>
            <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.</Para>
        </div>
    );
};

export default WorkProcessCard;