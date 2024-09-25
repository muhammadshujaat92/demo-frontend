'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { mainUrl } from '../page';
import { useDispatch, useSelector } from 'react-redux';
import { homeSection7Thunk } from '../_redux/api/homePage/section7';

const HomeSection6 = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state?.homeSection7Thunk || {});

    useEffect(() => {
        dispatch(homeSection7Thunk());
    }, [dispatch]);

    const { Heading, Paragraph, testimonialContent, userImages } = items?.[0]?.attributes || {};
    const imageUrl = mainUrl()
    const { data } = userImages || {}

    return (
        <>
            <div className="max-w-sm p-6 bg-white rounded-lg flex flex-col gap-[3rem]">
                <div>
                    <h1 className='text-[30px] mb-6 font-bold'>{Heading}</h1>
                    <p className="text-gray-700 font-semibold">{Paragraph}</p>
                </div>
                <div className='flex items-center gap-[1.6rem]'>
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                        {
                            data || data?.length > 0 ? (
                                data.map((data) => {
                                    const { url } = data?.attributes || {}
                                    const Img = url ? `${url}` : ""
                                    return (
                                        <Image key={data.id} className="w-10 h-10 border-white rounded-full dark:border-gray-800" src={Img} width={100} height={100} alt="" />
                                    )
                                })
                            ) : (
                                <div>...</div>
                            )
                        }
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <FaStar className='text-yellow-400 text-[20px]' />
                            <FaStar className='text-yellow-400 text-[20px]' />
                            <FaStar className='text-yellow-400 text-[20px]' />
                            <FaStar className='text-yellow-400 text-[20px]' />
                            <FaStar className='text-yellow-400 text-[20px]' />
                        </div>
                        <p className='text-gray-400'>4.8/5</p>
                    </div>
                </div>
            </div>
            {
                testimonialContent || testimonialContent?.length > 0 ? (
                    testimonialContent.map((data) => {
                        const { ReviewText, AuthorName, AuthorDesignation, AuthorCountry } = data
                        return (
                            <div key={data.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-col gap-[8rem]">
                                <p className="font-normal text-gray-700">{ReviewText}</p>
                                <div>
                                    <h1 className='font-semibold text-[25px]'>{AuthorName}</h1>
                                    <p>{AuthorDesignation} | <span className='text-orange-500 font-semibold'>{AuthorCountry}</span></p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div>..</div>
                )
            }
        </>
    )
}

export default HomeSection6