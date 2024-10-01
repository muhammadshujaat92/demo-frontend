'use client'
import React, { useState } from 'react';
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/public/IndiaYaatra-logo.webp';

const Footer = () => {
    const [formData, setFormData] = useState({ name: "", email: "" })
    const [isChecked, setIsChecked] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    // Check if all fields are filled
    const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '' && isChecked;

    const handleSubscribe = () => {
        if (isFormValid) {
            setShowMessage(true);
            setFormData({ name: "", email: "" })
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target
        if (name === 'name') {
            // Allow only alphabetic characters for the name field
            const alphabetOnly = /^[A-Za-z\s]*$/;
            if (alphabetOnly.test(value)) {
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
        }
        else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    }

    return (
        <footer className='bg-green-700 text-white grid grid-cols-4 py-[2rem] px-[5rem] gap-[3rem]'>
            <div className=' pe-2'>
                <Image src={logoImg} alt='logo' width={150} height={150} />
                <p className='text-[15px] py-[2rem]'>
                    IndiaYaatra commits people,ideas, professionalism to help our clients and the communities where we live. We help individuals, corporate on multiple business-related supporting tasks, enabling them to grow. Our team develops ideas and creativity to help customers increase productivity. We provide various multilingual virtual assistant outsourcing services to businesses looking to expand.
                </p>
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

            <div>
                <h1 className='text-[25px] font-semibold'>News Letter</h1>
                <div className='mb-4'>
                    <label htmlFor="name">Name</label>
                    <input
                        id='name'
                        type="text"
                        placeholder='Name'
                        className='w-full py-[10px] px-[8px] text-black'
                        value={formData.name}
                        name='name'
                        onChange={handleInput}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="email"
                        placeholder='Email'
                        className='w-full py-[10px] px-[8px] text-black'
                        value={formData.email}
                        name='email'
                        onChange={handleInput}
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type="checkbox"
                        id='check'
                        className='me-2'
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <label htmlFor="check">I accept the privacy rules of this site</label>
                </div>
                <button
                    className={`w-full py-[10px] px-[35px] border bg-green-800 rounded-lg ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isFormValid}
                    onClick={handleSubscribe}
                >
                    Subscribe
                </button>
                {showMessage && (
                    <p className='mt-4 text-orange-500 font-semibold'>Thank you for subscribing!</p>
                )}
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
    );
};

export default Footer;