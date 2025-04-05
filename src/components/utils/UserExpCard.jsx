import React from 'react';

const UserExpCard = ({heading,para,className,url}) => {
    return (
        <div className={`${className} border-s-5 border-transparent hover:border-primary-500 hover:-translate-y-2 hover:duration-200 hover:border-s-5 p-5 lg:p-8 rounded-md`}>

            <a href={url} className='font-semibold text-2xl leading-[100%] text-gray-900'>{heading}</a>
            <p className='font-normal text-base leading-[150%] text-gray-700 mt-4'>{para}</p>
        </div>
    );
};

export default UserExpCard;