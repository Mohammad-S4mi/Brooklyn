import React from 'react';
import Heading from './utils/Heading'
import Para from './utils/Para'
import PrimaryBtn from './utils/PrimaryBtn';
import UserExpCard from './utils/UserExpCard';

const UserExp = () => {
    return (
        <section id='userExp' className='bg-gray-50 p-[20px] lg:p-[150px]'>
            <div className="container bg-gray-50 grid lg:grid-cols-2  justify-center items-center">
                <div className="details">
                    <Heading>What I do?</Heading>
                    <Para className={'lg:pt-6 lg:pb-4'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</Para>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</Para>
                    <PrimaryBtn className={'mt-[50px] mb-10 lg:mb-0'}>Say Hello!</PrimaryBtn>
                </div>



                <div className="cards">

                    <UserExpCard className={'userExp-shadow'} url={'#'} heading={'User Experience (UX)'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.'}/> 




                    <UserExpCard className={ 'bg-gray-white mt-6 mb-6'} url={'#'} heading={'User Interface (UI)'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.'}/> 





                    <UserExpCard className={'bg-gray-white'} url={'#'} heading={'Web Development'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.'}/> 
                </div>
            </div>
            
        </section>
    );
};

export default UserExp;