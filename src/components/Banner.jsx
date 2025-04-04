import React from 'react';
import PrimaryBtn from './utils/PrimaryBtn';
import BannerCard from './utils/BannerCard';

const Banner = () => {
    return (
        <section id='banner' className='mt-2 lg:mt-[126px] mx-2 lg:mx-0 '>
            <div className="container grid lg:grid-cols-2 items-center">

            <div className="bannerDetails order-last lg:order-first">

                <h2 className='font-semibold mt-5 lg:mt-0 text-[30px] lg:text-[72px] leading-[117%] text-gray-900'>
                Hello, I’m
                Brooklyn Gilbert
                </h2>
                <p className=' my-6 font-normal lg:text-[18px] leading-[133%] text-gray-600'>
                I'm a Freelance <span className='text-gray-900'>UI/UX Designer</span> and <span className='text-gray-900'>Developer</span> based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
                </p>
                <button>
                    <PrimaryBtn>
                    Say Hello!
                    </PrimaryBtn>
                </button>

                <div className="expCard mt-[40px] grid grid-cols-3 gap-0.5 lg:mt-[142px]">
                    <BannerCard counter={15}  suffix={ `Y.`} title={`Experience`}/>
                    <BannerCard counter={250} suffix={`+`} title={`Project Completed`}/>
                    <BannerCard counter={58} title={`Happy Client`}/>
                </div>
                
            </div>


            <div className="max-w-3/4 bannerImg lg:max-w-full m-auto lg:ms-auto order-first lg:order-last">
                <img src="images/bannerImg.png" alt="" />
            </div>

            </div>
        </section>
    );
};

export default Banner;