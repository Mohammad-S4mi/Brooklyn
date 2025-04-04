import React from 'react';
import Heading from './utils/Heading';
import Para from './utils/Para';
import PortfolioCard from './utils/PortfolioCard';
import BlogCard from './utils/BlogCard';
import PrimaryBtn from './utils/PrimaryBtn'

const Portfolio = () => {
    const pfObjs =[
        {
            id: 1,
            comment: 'UI UX DESIGN',
            title: 'Product Admin Dashboard',
            image: 'images/pfimg1.png',
            details: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
        },
        {
            id: 2,
            comment: 'UI UX DESIGN',
            title: 'Product Admin Dashboard',
            image: 'images/pfimg2.png',
            details: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
        },
        {
            id: 3,
            comment: 'UI UX DESIGN',
            title: 'Product Admin Dashboard',
            image: 'images/pfimg3.png',
            details: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
        },
        {
            id: 4,
            comment: 'UI UX DESIGN',
            title: 'Product Admin Dashboard',
            image: 'images/pfimg4.png',
            details: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
        },
        {
            id: 5,
            comment: 'UI UX DESIGN',
            title: 'Product Admin Dashboard',
            image: 'images/pfimg5.png',
            details: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
        },
        {
            id: 6,
            comment: 'UI UX DESIGN',
            title: 'Product Admin Dashboard',
            image: 'images/pfimg6.png',
            details: 'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.',
        },
    ]
       

    return (
        <section id='portfolio'>
            <div className="container grid pt-10 lg:pt-0">
                <div className="text grid justify-center text-center">
                    <Heading >Portfolio</Heading>
                    <Para className={`pt-6 pb-[70px] lg:px-75`}>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.</Para>
                </div>

                    <div className="cards grid lg:grid-cols-3 gap-6">
                    {
                        pfObjs.map((object) => (<PortfolioCard key={object.id} portfolio={object}/>))
                    }
                    </div>


                    <div className="button grid justify-center mt-[62px] mb-[100px]">
                    <PrimaryBtn>More Project</PrimaryBtn>
                    </div>
                            
                            



                    
                
                
                </div>    
        </section>
    );
};

export default Portfolio;