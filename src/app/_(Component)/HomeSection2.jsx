'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { mainUrl } from '../page'
import { useDispatch, useSelector } from 'react-redux'
import { homeSection3Thunk } from '../_redux/api/homePage/section3'

const HomeSection2 = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state?.homeSection3Thunk || {});

    useEffect(() => {
        dispatch(homeSection3Thunk());
    }, [dispatch]);

    const { buttonText, heading, paragraph, title, image } = items?.[0]?.attributes || {}
    const imageUrl = mainUrl()
    const { url } = image?.data?.attributes || {}
    const Secimg = url ? `${url}` : ""
    
    return (
        <>
            <div className='px-[8rem]'>
                <h1 className='font-bold text-[30px] text-center'>{title}</h1>
                <div className='grid grid-cols-2 my-4 py-[2rem]'>
                    <div className='h-[22rem] w-[30rem]'>
                        <Image src={Secimg} alt='img' width={700} height={700} className='rounded-r-[15rem] w-full h-full' />
                    </div>
                    <div className='flex flex-col gap-[3rem] items-end pe-[2rem]'>
                        <div>
                            <h1 className='font-semibold text-[30px]'>{heading}</h1>
                            <p className='my-3 text-[18px]'>{paragraph}</p>
                        </div>
                        <button className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{buttonText}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection2