'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TiMediaPlay } from 'react-icons/ti';
import ProgressBar from '../ProgressBar';
import Link from 'next/link';
import { sancoaleSoftened } from '../Font';

const HeaderComponent = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-animation

    useEffect(() => {
        if (data && data.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
                setAnimationKey((prevKey) => prevKey + 1); // Re-trigger animation
            }, 8000);

            return () => clearInterval(interval); // Cleanup interval on unmount
        }
    }, [data]);

    return (
        <>
            {data?.length ? (
                <div key={animationKey} className="flex flex-col gap-[2rem] md:gap-12 h-[11rem] animate-slide-in-left">
                    <div>
                        <div style={{ fontFamily: sancoaleSoftened.style.fontFamily }} className="flex items-center text-[28px] md:text-[40px] text-white leading-[2rem]">
                            <TiMediaPlay className="text-orange-500" />
                            <h1>{data[currentIndex].Title}</h1>
                        </div>
                        <p className="text-[13px] md:text-[16px] md:w-[500px] xl:w-[800px] px-3 mt-4 md:mt-8">{data[currentIndex].Paragraph}</p>
                    </div>
                    <Link href={`${data[currentIndex].ButtonLink}`} className="flex ms-3 items-center text-white bg-orange-500 gap-1 p-2 rounded-lg text-[15px] w-fit">
                        {data[currentIndex].ButtonText}
                        <FaArrowRightLong />
                    </Link>
                </div>
            ) : (
                <span></span>
            )}
            <div className="flex items-center text-[9.5px] md:text-[12.5px] gap-[0.8rem] md:gap-[2rem] xl:gap-[5rem] xl:text-[18px] px-3">
                {data?.map((item, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className={`border-b-2 border-gray-400 relative font-semibold ${currentIndex === index ? 'text-orange-500' : ''}`}>
                        {item.Category}
                        {currentIndex === index && <ProgressBar />}
                    </button>
                ))}
            </div>
        </>
    );
};

export default HeaderComponent;