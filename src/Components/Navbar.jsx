'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Correct hook for route detection
import { imageUrl } from '../utils/apiHelper'

const Navbar = ({ navBarData }) => {
    const { Link1, Link2, Link3, Link4 } = navBarData?.[0]?.attributes || {};
    const { url } = navBarData?.[0]?.attributes?.Logo?.data?.attributes || {};
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const pathname = usePathname(); // Use usePathname to get the current route
    const imgUrl = imageUrl();
    const Img = url ? `${imgUrl}${url}` : "";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isActiveLink = (path) => pathname === path;

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
                    <li>
                        <Link
                            href={'/'}
                            className={`pb-[2px] ${isActiveLink('/') ? "border-b-[3px] border-[#ff6600]" : ""}`}>
                            {Link1}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/tour-packages'}
                            className={`pb-[2px] ${isActiveLink('/tour-packages') ? "border-b-[3px] border-[#ff6600]" : ""}`}>
                            {Link2}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/contact'}
                            className={`pb-[2px] ${isActiveLink('/contact') ? "border-b-[3px] border-[#ff6600]" : ""}`}>
                            {Link3}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/blog'}
                            className={`pb-[2px] ${isActiveLink('/blog') ? "border-b-[3px] border-[#ff6600]" : ""}`}>
                            {Link4}
                        </Link>
                    </li>
                </ul>
                <button
                    ref={buttonRef}
                    onClick={() => setShowMenu(!showMenu)}
                    className="cursor-pointer md:hidden"
                >
                    <i className={`fa-solid text-[25px] ${showMenu ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
                {showMenu && (
                    <ul ref={menuRef} className='absolute top-0 left-0 h-[100vh] w-[70%] pt-[5rem] ps-[2rem] flex flex-col bg-black text-white gap-6 tracking-wide text-[15px] font-semibold md:hidden z-10'>
                        <Link href={'/'} onClick={() => setShowMenu(false)}>{Link1}</Link>
                        <Link href={'/tour-packages'} onClick={() => setShowMenu(false)}>{Link2}</Link>
                        <Link href={'/contact'} onClick={() => setShowMenu(false)}>{Link3}</Link>
                        <Link href={'/blog'} onClick={() => setShowMenu(false)}>{Link4}</Link>
                    </ul>
                )}
            </nav>
        </div>
    )
}

export default Navbar;