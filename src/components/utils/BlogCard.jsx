import React from 'react';

const BlogCard = ({portfolio:{image, title, url, date, comment}}) => {
    return (
        <div className='rounded-lg w-[97%] lg:w-full bg-gray-white portfolio-shadow border border-gray-50 overflow-hidden'>
            <a href={url} className='w-full'><img className='w-full' src={image} alt="" /></a>
            <div className='p-6'>
            <p className='text-sm block pb-2 font-normal leading-[143%] text-gray-400'>{date} / {comment} Comments</p>
            <a href={url} className='font-medium block text-sm lg:text-lg leading-[133%] text-[#333]'>{title}</a>
            </div>
        </div>
    );
};

export default BlogCard;