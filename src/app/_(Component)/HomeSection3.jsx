'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { mainUrl } from '../page'
import { useDispatch, useSelector } from 'react-redux';
import { homeSection3Thunk } from '../_redux/api/homePage/section3';

const HomeSection3 = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state?.homeSection3Thunk || {});

    useEffect(() => {
        dispatch(homeSection3Thunk());
    }, [dispatch]);

    const { buttonText, heading, paragraph, image } = items?.[1]?.attributes || {}
    const imageUrl = mainUrl()
    const { url } = image?.data?.attributes || {}
    const Secimg = url ? `${url}` : ""

    return (
        <div className='px-[8rem] py-[3rem] bg-gray-200'>
            <h1 className='font-bold text-[33px]'>{heading}</h1>
            <div className='grid grid-cols-2 gap-[5rem]'>
                <div className='flex flex-col gap-[3rem] items-start'>
                    <div>
                        <p className='my-3 text-[18px]'>{paragraph}</p>
                    </div>
                    <button className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{buttonText}</button>
                </div>
                <div className='h-[22rem] w-[30rem]'>
                    <Image src={Secimg} alt='img' width={700} height={700} className='rounded-l-[15rem] w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default HomeSection3