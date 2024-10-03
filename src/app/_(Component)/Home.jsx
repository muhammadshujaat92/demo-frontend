'use client';
import React, { useEffect } from 'react';
import HeaderComponent from './HeaderComponent';
import HomeSection1 from './HomeSection1';
import ContactForm from './ContactForm';
import HomeSection2 from './HomeSection2';
import HomeSection6 from './HomeSection6';
import HomeSection7 from './HomeSection7';
import HomeSection5 from './HomeSection5';
import { useDispatch, useSelector } from 'react-redux';
import { homePageThunk } from '../_redux/api/HomePage';
import Spinner from './Spinner';
import HomeSection3 from './HomeSection3';
import HomeSection4 from './HomeSection4';
import HomeSection8 from './HomeSection8';

const Home = () => {
    const dispatch = useDispatch();
    const { items = [], status = 'idle' } = useSelector(state => state?.homePageThunk || {});

    useEffect(() => {
        dispatch(homePageThunk())
    }, [dispatch])

    const { slides, section1, section2, section3, section4, section5, testimonialBox, faqSection, lastSectionData } = items?.[0]?.attributes || {};

    if (status === 'loading') {
        return (
            <div className='h-screen flex items-center justify-center'>
                <Spinner />
            </div>
        )
    }

    return (
        <>
            <div className='h-fit md:py-[2rem] border-t-2 border-gray-400 md:flex justify-center bg-orange-300'>
                <div className='w-full max-w-[1250px] flex justify-between'>
                    <div className='h-[25rem] flex flex-col justify-center gap-[5rem] md:gap-28'>
                        <HeaderComponent data={slides} />
                    </div>
                    <div className='xl:w-[340px]'>
                        <ContactForm fontSize={'[25px]'} />
                    </div>
                </div>
            </div>
            <HomeSection1 secData={section1} />
            <HomeSection2 data={section2} />
            <HomeSection3 data={section3} />
            <HomeSection4 data={section4} />
            <HomeSection5 data={section5} />
            <div className='py-[3rem] flex items-center justify-between px-[5rem]'>
                <HomeSection6 item={testimonialBox} />
            </div>
            <HomeSection7 data={faqSection} />
            <HomeSection8 data={lastSectionData} />
        </>
    );
};

export default Home;