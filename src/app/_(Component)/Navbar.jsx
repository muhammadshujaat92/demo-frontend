'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { imageUrl } from '@/utils/apiHelper'

const Navbar = ({navBarData}) => {
    const { Link1, Link2, Link3, Link4 } = navBarData?.[0]?.attributes || {};
    const { url } = navBarData?.[0]?.attributes?.Logo?.data?.attributes || {};

    const imgUrl = imageUrl()
    const Img = url ? `${imgUrl}${url}` : ""

    return (
        <div className='shadow-md flex justify-center'>
            <nav className='flex justify-between items-center py-6 max-w-[1250px] w-full ps-3'>
                <Link href={'/'}>
                    <div className='w-[9rem]'>
                        {Img ? (
                            <Image src={Img} alt='logo' priority width={300} height={300} className='w-full' />
                        ) : (
                            <span className='w-full h-full'></span>
                        )}
                    </div>
                </Link>
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