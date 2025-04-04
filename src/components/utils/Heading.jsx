import React from 'react';

const Heading = ({children,className}) => {
    return (
        <h2 className={`${className} font-semibold text-[38px] leading-[132%] text-gray-900`}>
            {children}
        </h2>
    );
};

export default Heading;