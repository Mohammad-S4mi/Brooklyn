import React from 'react';

const Input = ({type='text',name,placeholder,className}) => {
    return (
        <input type={type} name={name} placeholder={placeholder} className={`text-gray-500 my-6 font-normal text-lg leading-[133%] items-center outline-0 focus:border-primary-500 focus:text-primary-500 transition-all duration-200 w-full border-b-2 border-gray-100  ${className}`} />
    );
};

export default Input;