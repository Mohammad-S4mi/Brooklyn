import React, { useEffect, useState } from 'react';
import BlogCard from './../components/utils/BlogCard';
import LoadingCard from '../components/utils/LoadingCard';

const About = () => {
    const [datas, setDatas] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((json) =>
     {setDatas(json)
    setLoading(false)});})



    return (
        <div className="container">

            <h1 className='py-10 flex justify-center text-5xl font-bold'>About</h1>

        <div className='gap-4 grid grid-cols-3'>
            {
                loading && (
                    <>
                    <LoadingCard/>
                    <LoadingCard/>
                    <LoadingCard/>
                    </>
                )
            }
            {
                datas && datas.map((data) => <BlogCard key={data.id} portfolio={{image:`https://picsum.photos/id/${data.id}/200`, title:data.title, url:`/about/${data.id}`}} />)
            }
            
        </div>

        </div>

       
    );
};

export default About;