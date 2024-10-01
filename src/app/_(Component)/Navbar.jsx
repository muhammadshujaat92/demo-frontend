'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { navbarThunk } from '../_redux/api/Navbar'
import { mainUrl } from '../page'

const Navbar = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state?.navbarThunk || {});
    const { Link1, Link2, Link3, Link4 } = items?.[0]?.attributes || {};
    const { url } = items?.[0]?.attributes?.Logo?.data?.attributes || {};

    useEffect(() => {
        dispatch(navbarThunk())
    }, [dispatch]);

    const imageUrl = mainUrl()
    const Img = url ? `${url}` : ""

    return (
        <div className='shadow-md'>
            <nav className='flex justify-between items-center py-6 px-[5rem]'>
                <div className='w-[9rem]'>
                    {Img ? (
                        <Image src={Img} alt='logo' priority width={300} height={300} className='w-full' />
                    ) : (
                        <span className='w-full'>.</span>
                    )}
                </div>
                <ul className='flex items-center gap-6 tracking-wide text-[15px] font-semibold'>
                    <Link href={'/'}>{Link1}</Link>
                    <Link href={'/tour-packages'}>{Link2}</Link>
                    <Link href={'/contact'}>{Link3}</Link>
                    <Link href={'/blog'}>{Link4}</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar