import React from 'react';
import Heading from './utils/Heading'
import Para from './utils/Para'
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Happyclients = () => {
    const images = [
        {
            id: 1,
            src: 'images/AliExpress-Logo.wine.svg',
            url: '#',
        },
        {
            id: 2,
            src: 'images/Microsoft-Logo.wine.svg',
            url: '#',
        },
        {
            id: 3,
            src: 'images/Oracle_Corporation-Logo.wine.svg',
            url: '#',
        },
        {
            id: 4,
            src: 'images/Behance-Logo.wine.svg',
            url: '#',
        },
        {
            id: 5,
            src: 'images/Google-Logo.wine.svg',
            url: '#',
        },
        {
            id: 6,
            src: 'images/Medium_(website)-Logo.wine.svg',
            url: '#',
        },
        {
            id: 7,
            src: 'images/Spotify-Logo.wine.svg',
            url: '#',
        },
    ]


    return (
        <section id='happyclients'>
            <div className="container p-[20px] lg:p-[100px]">
                <div className="details grid justify-center text-center">
                    <Heading>Happy Clients</Heading>
                    <Para className={'mt-6 lg:px-50'}>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.</Para>
                </div>

                <div className="cards">
                     <Swiper
                        centeredSlides={true}
                        loop={true}
                        breakpoints={{
                            300: {
                              slidesPerView: 1,
                              spaceBetween: 10,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 16,
                            },
                            1024: {
                              slidesPerView: 5,
                              spaceBetween: 24,
                            },
                          }}
                        
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >                     
                            { images.map((image)=>
                            <SwiperSlide key={image.id}>
                                <a href={image.url}><img className='w-[200px] h-[200px]' src={image.src} alt="" /></a>
                            </SwiperSlide> )}

        
      </Swiper>











                    
                </div>
            </div>
            
        </section>
    );
};

export default Happyclients;