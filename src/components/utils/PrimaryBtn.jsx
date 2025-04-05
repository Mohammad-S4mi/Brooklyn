import React from 'react';
import { Link } from 'react-router';

const PrimaryBtn = ({children,url='#',className}) => {
    return (
       <Link className={`${className} btn`} to={url}>{children}</Link>
    );
};

export default PrimaryBtn;