'use client'
import React, { useEffect } from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { IoCameraOutline } from "react-icons/io5";
import { PiWechatLogoBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { homeSection5Thunk } from '../_redux/api/homePage/section5';

const HomeSection4 = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state?.homeSection5Thunk || {});

    useEffect(() => {
        dispatch(homeSection5Thunk());
    }, [dispatch]);

    const { title, paragraph, data } = items?.[0]?.attributes || {}

    return (
        <div className='py-[3rem] px-[5rem]'>
            <h1 className='text-gray-700 text-[35px] font-bold'>{title}</h1>
            <div className="grid grid-cols-2 pt-[3rem] gap-[3rem]">
                <p className='font-semibold text-[22px]'>{paragraph}</p>

                <div className='grid grid-cols-3 gap-2'>
                    <div className='flex'>
                        <div>
                            <AiOutlineGlobal className='text-[2.5rem] text-white bg-blue-400 p-2 rounded-full me-2' />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold'>{data?.[0]?.UpperText || ""}</h1>
                            <p className='text-xs text-gray-400'>{data?.[0]?.LowerText || ""}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <LiaMoneyBillWaveSolid className='text-[2.5rem] text-white bg-blue-400 p-2 rounded-full me-2' />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold'>{data?.[1]?.UpperText || ""}</h1>
                            <p className='text-xs text-gray-400'>{data?.[1]?.LowerText || ""}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <IoCameraOutline className='text-[2.5rem] text-white bg-blue-400 p-2 rounded-full me-2' />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold'>{data?.[2]?.UpperText || ""}</h1>
                            <p className='text-xs text-gray-400'>{data?.[2]?.LowerText || ""}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <PiWechatLogoBold className='text-[2.5rem] text-white bg-blue-400 p-2 rounded-full me-2' />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold'>{data?.[3]?.UpperText || ""}</h1>
                            <p className='text-xs text-gray-400'>{data?.[3]?.LowerText || ""}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <FaRegHeart className='text-[2.5rem] text-white bg-blue-400 p-2 rounded-full me-2' />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold'>{data?.[4]?.UpperText || ""}</h1>
                            <p className='text-xs text-gray-400'>{data?.[4]?.LowerText || ""}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <SlCalender className='text-[2.5rem] text-white bg-blue-400 p-2 rounded-full me-2' />
                        </div>
                        <div>
                            <h1 className='text-sm font-bold'>{data?.[5]?.UpperText || ""}</h1>
                            <p className='text-xs text-gray-400'>{data?.[5]?.LowerText || ""}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection4