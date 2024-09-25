'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TiMediaPlay } from 'react-icons/ti';
import ProgressBar from './ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { homeSection1Thunk } from '../_redux/api/homePage/section1';

const HeaderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    const dispatch = useDispatch();
    const { items, status, error } = useSelector(state => state?.homeSection1Thunk);

    useEffect(() => {
        dispatch(homeSection1Thunk());
    }, [dispatch]);

    useEffect(() => {
        if (items && items.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
                setAnimationKey((prevKey) => prevKey + 1); // Re-trigger animation
            }, 8000);

            return () => clearInterval(interval); // Cleanup interval on unmount
        }
    }, [items]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    return (
        <>
            {items && items.length > 0 ? (
                <div key={animationKey} className="flex flex-col gap-12 h-[11rem] animate-slide-in-left">
                    <div>
                        <div className="flex items-center text-[40px] font-sancoaleSoftened text-white">
                            <TiMediaPlay className="text-orange-500" />
                            <h1>{items[currentIndex].attributes.slideTitle}</h1>
                        </div>
                        <p className="text-[16px] w-[800px] ms-3 mt-8">
                            {items[currentIndex].attributes.slideText}
                        </p>
                    </div>
                    <button className="flex ms-3 items-center text-white bg-orange-500 gap-1 p-2 rounded-lg text-[15px] w-fit">
                        {items[currentIndex].attributes.slideButtonText}
                        <FaArrowRightLong />
                    </button>
                </div>
            ) : (
                <div>--</div>
            )}
            <div className="flex items-center text-[16px] gap-9 ms-3">
                {items?.map((item, index) => (
                    <button
                        key={index}
                        className={`border-b-2 border-gray-400 relative font-semibold ${currentIndex === index ? 'text-orange-500' : ''}`}
                        onClick={() => setCurrentIndex(index)} // Allows manual selection of slides
                    >
                        {item.attributes.category}
                        {currentIndex === index && <ProgressBar />}
                    </button>
                ))}
            </div>
        </>
    );
};

export default HeaderComponent;