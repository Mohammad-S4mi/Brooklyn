import React from 'react';

const PrimaryBtn = ({children,url='#',className}) => {
    return (
       <a className={`${className} btn`} href={url}>{children}</a>
    );
};

export default PrimaryBtn;