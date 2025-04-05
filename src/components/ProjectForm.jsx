import React, { useRef } from 'react';
import Heading from './utils/Heading';
import Para from './utils/Para';
import ProjectFormCard from './utils/ProjectFormCard';
import { FaFacebookF } from "react-icons/fa";
import { PiDribbbleLogoBold } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import Input from './utils/Input';
import PrimaryBtn from './utils/PrimaryBtn';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const ProjectForm = () => {
    const form =useRef();
        const sendEmail = (e) => {
          e.preventDefault();

    emailjs.sendForm('service_3f6u7zd', 'template_dwnsvvp', form.current, {
        publicKey: 'IVc8jaodaGW7Vomlv',
      })
      .then(
        () => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your form has been submitted!",
                showConfirmButton: false,
                timer: 1500
              });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };





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
        <section id='projectForm'>
            <div className="container rounded-2xl p-4 grid lg:grid-cols-2 relative z-90 bg-gray-white shadow-projectForm lg:p-[88px]">
                <div className="details">
                    <Heading className='text-[38px] font-semibold leading-[132%] text-gray-900'>
                    Let’s discuss your Project
                    </Heading>

                    <Para className='text-lg mt-4 mb-9 font-normal leading-[133%] text-gray-400'> 
                    There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.
                    </Para>
                    <ProjectFormCard url={'#'} title={'New Mexico 31134'} head={'Address:'} />
                    <ProjectFormCard url={'#'} className={'my-3'} title={'mymail@mail.com'} head={'My Email:'} />
                    <ProjectFormCard url={'#'} title={'00-1234 00000'} head={'Call Me Now:'} />


{/* SOCIAL CARDS */}
    <div className="socialCards lg:mt-[35px] w-full flex max-w-[264px] justify-center p-3 rounded-[4px]">

    {
    socialCards.map((card, index) => (
        <a className='text-purple-700 rounded-sm p-4 duration-200 hover:bg-purple-700 hover:text-white' key={index} href={card.link} alt={card.text}>{card.icon}</a>
    ))}

</div>

                </div>

                <div className="infoForm">
                <p className='text-lg mt-4 mb-9 font-normal leading-[133%] text-gray-400'>There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.</p>


                <form action="" ref={form} onSubmit={sendEmail}>
                    <Input placeholder='Name*' name={'userName'} type='text' required/>
                    <Input placeholder='Email*' name={'Email'} type='Email' required/>
                    <Input placeholder='Location' name={'location'} type='text' />
                    <div className="grid lg:grid-cols-2">
                    <Input placeholder='Budget*' className={'max-w-[80%] [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'} name={'budget'} type='Number' required/>
                    <Input placeholder='Subject*' name={'subject'} type='text' />
                    </div>
                    <Input placeholder='Message*' name={'message'} type='text' />
                    <button type="submit" value="Send" className='!flex items-center mt-[50px] justify-around w-[130px] hover:-translate-y-1 hover:scale-110 btn'> Sumbit <span><IoIosArrowDroprightCircle />
                    </span></button>

                </form>

               

                
                </div>
                
            </div>
            
        </section>
    );
};

export default ProjectForm;