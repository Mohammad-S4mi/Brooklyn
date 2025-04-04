import React from 'react';

const SecondaryBtn = ({children,className,url=`#`}) => {
    return (
        <a href={url} className={`${className} hover:bg-primary-500 duration-200 hover:text-gray-white secondary-btn outline text-primary-500 font-semibold text-[16px] leading-[150%] outline-primary-500 rounded-sm px-6 py-3 bg-gray-white`}>
            {children}
        </a>
    );
};

export default SecondaryBtn;