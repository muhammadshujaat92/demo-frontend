import React from 'react';
import HeaderComponent from './HeaderComponent';
import HomeSection1 from './HomeSection1';
import ContactForm from './ContactForm';
import HomeSection2 from './HomeSection2';
import HomeSection6 from './HomeSection6';
import HomeSection7 from './HomeSection7';
import HomeSection5 from './HomeSection5';
import HomeSection3 from './HomeSection3';
import HomeSection4 from './HomeSection4';
import HomeSection8 from './HomeSection8';

const Home = () => {
    return (
        <>
            <div className='h-fit py-[2rem] border-t-2 border-gray-400 grid grid-cols-3 px-[60px] bg-orange-300'>
                <div className='h-[70%] flex flex-col justify-center gap-28 col-span-2'>
                    <HeaderComponent />
                </div>
                <div className='w-[340px]'>
                    <ContactForm fontSize={'[25px]'} />
                </div>
            </div>
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            <HomeSection4 />
            <HomeSection5 />
            <div className='py-[3rem] flex items-center gap-6 justify-center'>
                <HomeSection6 />
            </div>
            <HomeSection7 />
            <HomeSection8 />
        </>
    );
};

export default Home;