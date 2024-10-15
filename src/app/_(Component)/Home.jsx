'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import HeaderComponent from './HeaderComponent'
const HomeSection1 = dynamic(() => import('./HomeSection1'))
const HomeSection2 = dynamic(() => import('./HomeSection2'))
const HomeSection3 = dynamic(() => import('./HomeSection3'))
const HomeSection4 = dynamic(() => import('./HomeSection4'))
const HomeSection5 = dynamic(() => import('./HomeSection5'))
const HomeSection6 = dynamic(() => import('./HomeSection6'))
const HomeSection7 = dynamic(() => import('./HomeSection7'))
const HomeSection8 = dynamic(() => import('./HomeSection8'))
const ContactForm = dynamic(() => import('./ContactForm'))

const Home = ({ homeData }) => {
    const { slides, section1, section2, section3, section4, section5, sec6, faqSection, lastSectionData } = homeData?.[0]?.attributes || {};

    return (
        <>
            <div className='h-fit md:py-[2rem] border-t-2 border-gray-400 md:flex justify-center bg-orange-300'>
                <div className='w-full max-w-[1250px] md:flex justify-between'>
                    <div className='h-[25rem] flex flex-col justify-center gap-[5rem] md:gap-28'>
                        <HeaderComponent data={slides} />
                    </div>
                    <div className='xl:w-[340px] px-2 md:ps-0'>
                        <ContactForm fontSize={'[25px]'} />
                    </div>
                </div>
            </div>

            <HomeSection1 secData={section1} />
            <HomeSection2 data={section2} />
            <HomeSection3 data={section3} />
            <HomeSection4 data={section4} />
            <HomeSection5 data={section5} />
            <div className='py-[3rem] flex justify-center'>
                <HomeSection6 item={sec6} />
            </div>
            <HomeSection7 data={faqSection} />
            <HomeSection8 data={lastSectionData} />
        </>
    );
};

export default Home;