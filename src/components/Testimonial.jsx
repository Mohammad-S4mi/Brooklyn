import React from 'react';
import Heading from './utils/Heading'
import Para from './utils/Para'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';


const Testimonial = () => {
    const testimonial = [
        {
            id: 1,
            para : '“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”',
            name : 'Esther Howard',
            title: 'Managing Director, ABC company'
        },
        {
            id: 2,
            para : '“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”',
            name : 'Esther Howard',
            title: 'Managing Director, ABC company'
        },
        {
            id: 3,
            para : '“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”',
            name : 'Esther Howard',
            title: 'Managing Director, ABC company'
        },
    ]
    return (
        <section id='testimonial'>
            <div className='container p-3 lg:p-0 '>
                <div className="details">
                <Heading className={'text-center'}>Testimonial</Heading>
                <Para className={'text-center lg:px-75 mt-6 mb-[70px] !text-gray-400'}>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.</Para>
                </div>




                <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >


                {
                    testimonial.map((item) => 
                    <SwiperSlide  key={item.id}>
                            <div className="cards ">
                                        <Para className={'text-center !font-medium !text-gray-800 lg:px-50'}>{item.para}</Para>
                                        <h4 className='text-center font-medium text-lg leading-[144%] text-[#000] mt-6 mb-2'>{item.name}</h4>
                                        <p className='mb-[158px] text-center text-base leading-[150%] text-[#000] font-light'>{item.title}</p>
                            </div>
                    </SwiperSlide>
                    
                        
                    
                    
                    )
                }





      </Swiper>





                





            </div>
            
        </section>
    );
};

export default Testimonial;