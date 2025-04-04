import React from 'react';

const Para = ({children,className}) => {
    return (
        <p className={`${className} font-normal lg:text-[18px] leading-[133%] text-gray-600`}>
            {children}
        </p>
    );
};

export default Para;