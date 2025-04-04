import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { PiDribbbleLogoBold } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import SecondaryBtn from './utils/SecondaryBtn';
import Heading from './utils/Heading';
import { MdOutlineFileDownload } from "react-icons/md";
import Para from './utils/Para';
import PrimaryBtn from './utils/PrimaryBtn';





const Profile = () => {

    const socialCards = [

        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com",
            text: "Facebook"

        },
        {
            icon: <PiDribbbleLogoBold />,
            link: "https://www.dribble.com",
            text: "Dribbble"

        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com",
            text: "Instagram"

        },
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com",
            text: "LinkedIn"
        },
        {
            icon: <FaBehance />,
            link: "https://www.behance.net",
            text: "Behance"
        },
        










    ]



    return (
        <section id='profile' className='lg:mt-[222px] mt-10 relative z-10'>
            <div className="container bg-gray-white rounded-2xl">
                <div className="shadow-custom rounded-sm lg:p-[112px] p-1 lg:gap-20 items-center grid lg:grid-cols-2">
                    <div className="profileImg relative">
                        <img src="images/ProfileImage.png" className='max-w-full' alt="" />


                        {/* SOCIAL CARDS */}
                    <div className="socialCards w-full flex max-w-[264px] shadow-social justify-center p-3 absolute left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded-[4px]">

                    {
                        socialCards.map((card, index) => (
                            <a className='text-purple-700 rounded-sm p-4 duration-200 hover:bg-purple-700 hover:text-white' key={index} href={card.link} alt={card.text}>{card.icon}</a>
                    ))}

                    </div>





                    </div>


                    <div className="profileDetails lg:p-0 p-2 mt-14 lg:mt-0]">
                    <Heading>I am Professional User Experience Designer</Heading>
                    <Para className="mt-[32px] mb-[16px]">I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</Para>
                    <Para >I design and develop services for customers specializing creating stylish, modern websites, web services.</Para>
                    


                    
                        <div className='flex gap-4 mt-[32px]'>
                        <PrimaryBtn>My Project</PrimaryBtn>
                    
                    <SecondaryBtn className='flex justify-center items-center gap-3'>
                    <MdOutlineFileDownload />
                    Download CV
                    </SecondaryBtn>
                        </div>
                    

                    </div>



                </div>
            </div>
        </section>
    );
};

export default Profile;