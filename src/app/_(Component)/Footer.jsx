import React from 'react'
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import logoImg from '@/public/IndiaYaatra-logo.webp'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='bg-green-700 text-white grid grid-cols-4 py-[2rem] px-[3rem]'>
            <div className=' pe-2'>
                {/* <h1 className='text-[25px] font-semibold'>India Yatra</h1> */}
                <Image src={logoImg} alt='logo' width={150} height={150}/>
                <p className='text-[15px] py-[2rem]'>IndiaYaatra commits people,
                    ideas, professionalism to help
                    our clients and the communities
                    where we live. We help
                    individuals, corporate on multiple
                    business related supporting task
                    which enables them to grow.
                    Team of global network develops
                    new ideas and creativity that
                    helps our customer to get more
                    productivity. We provide a variety
                    of multilingual virtual assistant
                    outsourcing services to
                    businesses of all size that are
                    looking to expand.</p>
            </div>
            <div className='flex flex-col items-center '>
                <h1 className='text-[25px] font-semibold'>Useful Links</h1>
                <ul className='flex flex-col justify-center h-[75%] text-[20px] gap-5'>
                    <li><Link href={'/tour-packages'}>Tour Packages</Link></li>
                    <li><Link href={'/blog'}>Blogs</Link></li>
                    <li><Link href={'/contact'}>Contact</Link></li>
                    <li><Link href={'/'}>Home</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-full'>
                    <h1 className='text-[25px] font-semibold'>Contact Details</h1>
                    <div className='h-[75%] flex justify-center flex-col gap-7'>
                        <p className='flex items-center gap-2'><FaPhoneAlt className='p-2 text-[2rem] border rounded-full' /> (629) 555-0129</p>
                        <p className='flex items-center gap-2'><IoLocationSharp className='p-2 text-[2rem] border rounded-full' />Info@Example.com</p>
                        <p className='flex items-center gap-2'><IoMail className='p-2 text-[2rem] border rounded-full' /> 6391 Elgin St. Celina, 10299</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer