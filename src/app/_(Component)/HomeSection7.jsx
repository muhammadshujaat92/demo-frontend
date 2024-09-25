'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Accordian from './Accordian'
import { mainUrl } from '../page'
import { useDispatch, useSelector } from 'react-redux'
import { homeSection8Thunk } from '../_redux/api/homePage/section8'

const HomeSection7 = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state?.homeSection8Thunk || {});

    useEffect(() => {
        dispatch(homeSection8Thunk());
    }, [dispatch]);

    const { images, frontText1, frontText2, Heading1, Heading2, text, accordian } = items?.[0]?.attributes || {}
    const imageUrl = mainUrl()
    const backImageUrl = images?.data?.[0]?.attributes?.url || ''
    const frontImageUrl = images?.data?.[1]?.attributes?.url || ''
    const backImg = backImageUrl ? `${backImageUrl}` : ""
    const frontImg = frontImageUrl ? `${frontImageUrl}` : ""

    return (
        <>
            <div className='pt-[7rem] pb-[5rem] px-[5rem] grid grid-cols-2 bg-gray-200'>
                <div className='relative top-0'>
                    <Image src={backImg} alt='img' width={470} height={470} className='rounded-3xl' />
                    <div className='absolute bottom-[300px] left-[230px]'>
                        <Image src={frontImg} alt='img' width={280} height={280} className='rounded-3xl border-[8px] border-white' />
                    </div>
                    <div className='absolute bottom-[75px] left-[-28px] bg-white rounded-[10px] py-[1rem]'>
                        <h1 className='text-[3rem]'>{frontText1}</h1>
                        <p>{frontText2}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[2rem]'>
                    <div className='px-4'>
                        <h1 className='text-blue-600 text-[23px] font-semibold'>{Heading1}</h1>
                        <h1 className='text-[45px] font-semibold leading-[3rem] my-6'>{Heading2}</h1>
                        <p>{text}</p>
                    </div>
                    {
                        accordian || accordian?.length > 0 ? (
                            accordian.map((data) => {
                                const { questionText, answerText } = data || {}
                                return (
                                    <Accordian key={data.id} title={questionText} answerText={answerText} />
                                )
                            })
                        ) : (
                            <div>..</div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default HomeSection7