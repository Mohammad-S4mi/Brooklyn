import React from 'react';
import Heading from './utils/Heading';
import Para from './utils/Para';
import WorkProcessCard from './utils/WorkProcessCard';

const WorkProcess = () => {
    return (
        <section id='workProcess' className='bg-gray-50 pt-[40px] lg:pt-[248px] lg:pb-[140px] lg:-translate-y-[115px]'>
            <div className="container grid lg:grid-cols-2 lg:gap-[80px] gap-[40px] justify-center items-center">
                <div className="details p-3 lg:p-0">
                <Heading className='lg:!text-5xl'>Work Process</Heading>
                <Para className='pt-6 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</Para>
                <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</Para>
                </div>

                <div className="cards grid lg:grid-cols-2 lg:gap-6 gap-3">
                <div className="firstRow grid lg:gap-6 gap-3">
                <WorkProcessCard icon={`images/WPCard1.png`} title={`1. Research`}/>
                <WorkProcessCard icon={`images/WPCard2.png`} title={`2. Analyze`}/>
                
                </div>
                <div className="lastRow grid lg:gap-6 gap-3 lg:mt-[24px]">
                <WorkProcessCard icon={`images/WPCard3.png`} title={`3. Design`}/>
                <WorkProcessCard icon={`images/WPCard4.png`} title={`4. Launch`}/>
                
                </div>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;