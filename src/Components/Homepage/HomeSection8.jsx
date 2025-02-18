import React from 'react'
import dynamic from 'next/dynamic';
import { fira } from '../Font';
import Icon from '../Icons';
import Image from 'next/image';
const ContactForm = dynamic(() => import('../ContactForm'), { loading: () => <p>Loading...</p> })
import circleImg from "../../public/imgs/circle.webp"

const HomeSection8 = ({ data }) => {
    const { Heading, Paragraph, Title, contactDetail } = data || {}
    const iconMap = {
        1: <Icon name="phone" className='p-2 text-[40px] border border-gray-500 rounded-full' />,
        2: <Icon name="email" className='p-2 text-[40px] border border-gray-500 rounded-full' />,
        3: <Icon name="location" className='p-2 text-[40px] border border-gray-500 rounded-full' />,
    };

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[1250px] px-2 md:pe-3 md:ps-3 xl:pe-0 relative overflow-hidden'>
                <Image alt='circleImg' src={circleImg} width={500} height={500} className='absolute hidden md:inline top-[-135px] right-[-30px] w-[320px] z-[-6] animate-spin'loading='lazy' />
                <h2 style={{ fontFamily: fira.style.fontFamily }} className='text-[30px] md:text-[38px] font-bold mt-8 text-[#ff6600]'>{Title}</h2>
                <div className='md:grid grid-cols-2 gap-[3rem] py-[1.7rem] md:py-[3rem]'>
                    <ContactForm fontSize={'text-[20px] lg:text-[25px]'} />
                    <div>
                        <h3 className='text-[25px] lg:text-[35px] xl:text-[40px] font-semibold md:leading-[2rem] lg:leading-[2.6rem] my-5'>{Heading}</h3>
                        <p>{Paragraph}</p>
                        <ul className='flex flex-col gap-5'>
                            {contactDetail && (
                                contactDetail.map((contact) => {
                                    const { id, detail } = contact;
                                    return (
                                        <li key={id} className='shadow-md py-[1.5rem] px-[1rem] rounded-xl'>
                                            <span className='flex items-center gap-2 font-semibold text-[18px]'>
                                                {iconMap[id]}
                                                {detail}
                                            </span>
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection8