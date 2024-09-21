'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { TiMediaPlay } from 'react-icons/ti'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ProgressBar from './ProgressBar';

const HeaderComponent = ({ data }) => {
    const Eref = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(Eref.current, {
            x: -300,
            opacity: 0,
            delay: 0.7,
            duration: 1
        });
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (data?.length ?? 0));
        }, 8000);

        return () => clearInterval(interval);
    }, [currentIndex, data?.length]);

    return (
        <>
            {data?.length ? (
                <div ref={Eref} className='flex flex-col gap-12 h-[11rem]'>
                    <div>
                        <div className='flex items-center text-[40px] font-sancoaleSoftened text-white'><TiMediaPlay className='text-orange-500' /><h1>{data[currentIndex].Title}</h1></div>
                        <p className='text-[16px] w-[800px] ms-3 mt-8'>{data[currentIndex].Paragraph}</p>
                    </div>
                    <button className='flex ms-3 items-center text-white bg-orange-500 gap-1 p-2 rounded-lg text-[15px] w-fit'>{data[currentIndex].ButtonText}<FaArrowRightLong /></button>
                </div>
            ) : (
                <div>--</div>
            )}
            <div className='flex items-center text-[16px] gap-9 ms-3'>
                <button className={`border-b-2 border-gray-400 relative ${currentIndex === 3 ? "text-orange-500" : ""} font-semibold pe-4`}>
                    {data?.[0]?.Category || ""}
                    {currentIndex === 3 && <ProgressBar index={currentIndex} />}
                </button>
                <button className={`border-b-2 border-gray-400 relative ${currentIndex === 0 ? "text-orange-500" : ""} font-semibold`}>
                    {data?.[1]?.Category || ""}
                    {currentIndex === 0 && <ProgressBar index={currentIndex} />}
                </button>
                <button className={`border-b-2 border-gray-400 relative ${currentIndex === 1 ? "text-orange-500" : ""} font-semibold pe-12`}>
                    {data?.[2]?.Category || ""}
                    {currentIndex === 1 && <ProgressBar index={currentIndex} />}
                </button>
                <button className={`border-b-2 border-gray-400 relative ${currentIndex === 2 ? "text-orange-500" : ""} font-semibold pe-12`}>
                    {data?.[3]?.Category || ""}
                    {currentIndex === 2 && <ProgressBar index={currentIndex} />}
                </button>
            </div>
        </>
    )
}

export default HeaderComponent