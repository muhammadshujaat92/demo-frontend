'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TiMediaPlay } from 'react-icons/ti';
import ProgressBar from './ProgressBar';

const HeaderComponent = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0); // Key to trigger re-animation

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (data?.length ?? 0));
            setAnimationKey((prevKey) => prevKey + 1); // Re-trigger animation
        }, 8000);

        return () => clearInterval(interval);
    }, [currentIndex, data?.length]);

    return (
        <>
            {data?.length ? (
                <div key={animationKey} className="flex flex-col gap-12 h-[11rem] animate-slide-in-left">
                    <div>
                        <div className="flex items-center text-[40px] font-sancoaleSoftened text-white">
                            <TiMediaPlay className="text-orange-500" />
                            <h1>{data[currentIndex].Title}</h1>
                        </div>
                        <p className="text-[16px] w-[800px] ms-3 mt-8">{data[currentIndex].Paragraph}</p>
                    </div>
                    <button className="flex ms-3 items-center text-white bg-orange-500 gap-1 p-2 rounded-lg text-[15px] w-fit">
                        {data[currentIndex].ButtonText}
                        <FaArrowRightLong />
                    </button>
                </div>
            ) : (
                <div>--</div>
            )}
            <div className="flex items-center text-[16px] gap-9 ms-3">
                {data?.map((item, index) => (
                    <button
                        key={index}
                        className={`border-b-2 border-gray-400 relative font-semibold ${currentIndex === index ? 'text-orange-500' : ''
                            }`}
                    >
                        {item.Category}
                        {currentIndex === index && <ProgressBar />}
                    </button>
                ))}
            </div>
        </>
    );
};

export default HeaderComponent;