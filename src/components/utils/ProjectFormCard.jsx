import React from 'react';
import { GrLocation } from "react-icons/gr";


const ProjectFormCard = ({head,title,className,url}) => {
    return (
        <div className={`p-6 ${className} flex gap-x-3.5 h-[96px] w-[336px] hover:bg-gray-white hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] `}>

            <a href={url} className="icons bg-[#edd8ff80] hover:bg-primary-500 duration-200 text-primary-500 hover:text-gray-white rounded-sm p-3 text-center">
            <GrLocation className=' hover:text-gray-white text-2xl  font-extrabold'/>
            </a>
            <div className="details gap-y-1">
                <p className='font-normal text-sm leading-[143%] text-gray-700'>{head}</p>
                <h4 className='font-medium text-base leading-[150%] text-gray-900'>{title}</h4>
            </div>
            
        </div>
    );
};

export default ProjectFormCard;