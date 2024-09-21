'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ProgressBar = ({ index }) => {
    const progressFillRef = useRef();

    useGSAP(() => {
        gsap.to(progressFillRef.current, {
            width: '100%',
            duration: 8,
            ease: 'power2.out',
            repeat: -1,
        });
    }, [index]);

    return (
        <div className='w-full bg-gray-400 rounded-2xl mt-1 h-[3px] absolute bottom-[-2px]'>
            <div
                className='bg-orange-500 h-[3px] rounded-3xl'
                ref={progressFillRef}
                style={{ width: '0%' }}
            ></div>
        </div>
    );
};

export default ProgressBar;
