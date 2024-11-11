'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { imageUrl } from '@/utils/apiHelper'

const Navbar = ({ navBarData }) => {
    const { Link1, Link2, Link3, Link4 } = navBarData?.[0]?.attributes || {};
    const { url } = navBarData?.[0]?.attributes?.Logo?.data?.attributes || {};
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    const imgUrl = imageUrl()
    const Img = url ? `${imgUrl}${url}` : ""

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setShowMenu(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className='shadow-md flex justify-center'>
            <nav className='flex justify-between items-center py-6 max-w-[1250px] w-full px-3 md:ps-3'>
                <Link href={'/'}>
                    <div className='w-[9rem]'>
                        {Img ? (
                            <Image src={Img} alt='logo' priority width={300} height={300} className='w-full' />
                        ) : (
                            <span className='w-full h-full'></span>
                        )}
                    </div>
                </Link>
                <ul className='hidden md:flex items-center gap-6 tracking-wide text-[15px] font-semibold'>
                    <Link href={'/'}>{Link1}</Link>
                    <Link href={'/tour-packages'}>{Link2}</Link>
                    <Link href={'/contact'}>{Link3}</Link>
                    <Link href={'/blog'}>{Link4}</Link>
                </ul>
                <button
                    ref={buttonRef}
                    onClick={() => setShowMenu(!showMenu)}
                    className="cursor-pointer md:hidden"
                >
                    <i className={`fa-solid text-[25px] ${showMenu ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
                {
                    showMenu ? (
                        <ul ref={menuRef} className='absolute top-0 left-0 h-[100vh] w-[70%] pt-[5rem] ps-[2rem] flex flex-col bg-black text-white gap-6 tracking-wide text-[15px] font-semibold md:hidden z-10'>
                            <Link href={'/'} onClick={() => setShowMenu(false)}>{Link1}</Link>
                            <Link href={'/tour-packages'} onClick={() => setShowMenu(false)}>{Link2}</Link>
                            <Link href={'/contact'} onClick={() => setShowMenu(false)}>{Link3}</Link>
                            <Link href={'/blog'} onClick={() => setShowMenu(false)}>{Link4}</Link>
                        </ul>
                    ) : (
                        <span className='hidden'></span>
                    )
                }
            </nav>
        </div>
    )
}

export default Navbar