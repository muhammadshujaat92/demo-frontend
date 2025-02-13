'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from "../public/IndiaYaatra-logo.webp";
import Icon from './Icons';
import footerImg from '../public/imgs/footer.jpg'
import watsappLogo from '../public/imgs/whatsapp-logo.webp'

const Footer = ({ footerData }) => {
    const [formData, setFormData] = useState({ name: "", email: "" })
    const [isChecked, setIsChecked] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const { Logo, paragraph, contactEmail, contactPhone, location } = footerData?.[0]?.attributes || {}
    const { url } = Logo?.data?.attributes || {}
    const Img = url ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : logoImg

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

    const handleClick = () => {
        window.open(`https://api.whatsapp.com/send?phone=${contactPhone}&text=Hello IndiaYaatra! Help me to plan My Trip!&type=phone_number&app_absent=0`, '_blank');
    }

    return (
        <>
            <div onClick={handleClick} className='fixed bottom-[20px] right-[20px] md:right-[30px] z-10 cursor-pointer'>
                <div className='border-[2px] border-[#7cfe04] h-full w-full absolute top-0 rounded-full animate-ping'></div>
                <Image src={watsappLogo} alt="logo" width={55} height={55} />
            </div>
            <div className='relative footer-style'>
                <Image
                    src={footerImg}
                    alt='banner'
                    className={`w-full !h-[50%] md:!h-full object-contain inset-0 absolute z-[-1]`}
                    layout="fill"
                    loading='lazy'
                />
                <div className='flex justify-center footer-bg'>
                    <footer className='text-white xl:flex pt-[90px] pb-[65px] w-full max-w-[1250px] gap-[3rem] px-3 xl:ps-3'>
                        <div className='xl:w-[35%] xl:pe-2'>
                            <Image src={Img} alt='logo' width={150} height={150} />
                            <p className='text-[15px] py-[2rem]'>{paragraph}</p>
                        </div>
                        <div className='flex justify-between flex-wrap xl:w-[65%] gap-[2rem] md:gap-0'>
                            <div className='flex flex-col items-center gap-[1.5rem] xl:gap-0'>
                                <h1 className='text-[25px] font-semibold'>Useful Links</h1>
                                <ul className='flex flex-col justify-center h-[75%] text-[20px] gap-5'>
                                    <li><Link href={'/'}>Home</Link></li>
                                    <li><Link href={'/tour-packages'}>Tour Packages</Link></li>
                                    <li><Link href={'/contact'}>Contact</Link></li>
                                    <li><Link href={'/blog'}>Blogs</Link></li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-[1.5rem] xl:gap-[3rem]">
                                <h1 className='text-[25px] font-semibold'>News Letter</h1>
                                <div>
                                    <div className='mb-4'>
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
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className='h-full'>
                                    <h1 className='text-[25px] font-semibold mb-[1.5rem] xl:mb-0'>Contact Details</h1>
                                    <div className='h-[75%] flex justify-center flex-col gap-7'>
                                        <p className='flex items-center gap-2'><Icon name="phone" className='p-2 text-[2rem] border rounded-full' />{contactPhone}</p>
                                        <p className='flex items-center gap-2'><Icon name="location" className='p-2 text-[2rem] border rounded-full' />{location}</p>
                                        <p className='flex items-center gap-2'><Icon name="email" className='p-2 text-[2rem] border rounded-full' />{contactEmail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                <div className='absolute bottom-0 text-white border-t-1 border-white w-full flex justify-center'>
                    <p className='w-full max-w-[1250px] px-3 py-[10px]'>© 2025 All Rights Reserved | <Link href={'/sitemap'}> Sitemap</Link></p>
                </div>
            </div>
        </>
    );
};

export default Footer;