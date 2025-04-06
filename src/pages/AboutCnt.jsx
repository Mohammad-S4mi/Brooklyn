import React from 'react';
import { useParams } from 'react-router';

const AboutCnt = () => {
    const {id} = useParams()



    return (
        <div className='py-6 container text-3xl font-bold flex justify-center'>
            This is About Card Content ({id})
        </div>
    );
};

export default AboutCnt;