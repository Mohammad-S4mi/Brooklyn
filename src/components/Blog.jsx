import React from 'react';
import BlogCard from './utils/BlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import Heading from './utils/Heading'
import Para from './utils/Para'

const Blog = () => {

    const blogPosts = [

        {
            title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
            id:'1',
            image:"images/blogimg1.png",
            url: "#",
            date: "2021-9-18",
            comment: 673,
            
        },
        {
            title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
            id:'2',
            image:"images/blogimg2.png",
            url: "#",
            date: "2019-01-01",
            comment: 256,
        },
        {
            title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
            id:'3',
            image:"images/blogimg3.png",
            url: "#",
            date: "2023-7-4",
            comment: 456,
        },
        {
            title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
            id:'4',
            image:"images/blogimg4.png",
            url: "#",
            date: "2020-12-5",
            comment: 286,
        },
        {
            title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
            id:'5',
            image:"https://picsum.photos/id/1/312/226",
            url: "#",
            date: "2025-01-09",
            comment: 563,
        },



            
    ]



    return (
        <section id='blog' className='lg:bg-gradient-to-r from-violet-200 via-neutral-50 to-emerald-50'>
            <div  className='container justify-center pt-[50px] pb-[50px] lg:pb-[132px] lg:pt-[100px]'>
            <div className="details grid justify-center">
            <Heading className={'text-center'}>Blog</Heading>
            <Para className={'text-center pt-6 pb-[70px] lg:px-80 !leading-[143%] !text-gray-400'}>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.</Para>
            </div>





            <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{enabled: true,clickable:true}}
            Autoplay
            loop={true}
            breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 14,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
            {blogPosts.map((post) => (
                      <SwiperSlide key={post.id}> 
                      <BlogCard portfolio={post}/>
                      </SwiperSlide>
                    ))}

            </Swiper>
            </div>
        </section>
    );
};

export default Blog;