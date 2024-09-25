'use client'
import React, { useEffect } from 'react'
import ContactForm from './ContactForm'
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { homeSection9Thunk } from '../_redux/api/homePage/section9';

const HomeSection8 = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state?.homeSection9Thunk || {});

    useEffect(() => {
        dispatch(homeSection9Thunk());
    }, [dispatch]);

    const { Heading, Paragraph, title, email, phoneNum, address } = items?.[0]?.attributes || {}

    return (
        <div className='px-[5rem]'>
            <h1 className='text-[35px] font-bold mt-8'>{title}</h1>
            <div className='grid grid-cols-2 gap-[3rem] py-[3rem]'>
                <ContactForm />
                <div>
                    <h1 className='text-[38px] font-bold leading-[2.5rem] my-5'>{Heading}</h1>
                    <p>{Paragraph}</p>
                    <ul className='flex flex-col gap-5'>
                        <li className='shadow-md py-[1.5rem] px-[1rem] rounded-xl'>
                            <p className='flex items-center gap-2 font-semibold text-[18px]'>
                                <FaPhoneAlt className='p-2 text-[40px] border border-gray-500 rounded-full' />
                                {phoneNum}
                            </p>
                        </li>
                        <li className='shadow-md py-[1.5rem] px-[1rem] rounded-xl'>
                            <p className='flex items-center gap-2 font-semibold text-[18px]'>
                                <IoMail className='p-2 text-[40px] border border-gray-500 rounded-full' />
                                {email}
                            </p>
                        </li>
                        <li className='shadow-md py-[1.5rem] px-[1rem] rounded-xl'>
                            <p className='flex items-center gap-2 font-semibold text-[18px]'>
                                <IoLocationSharp className='p-2 text-[40px] border border-gray-500 rounded-full' />
                                {address}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeSection8