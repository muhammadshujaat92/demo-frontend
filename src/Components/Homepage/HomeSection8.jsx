import React from 'react'
import dynamic from 'next/dynamic';
import { kanit } from '../Font';
import Icon from '../Icons';
const ContactForm = dynamic(() => import('../ContactForm'), { loading: () => <p>Loading...</p> })

const HomeSection8 = ({ data }) => {
    const { Heading, Paragraph, Title, contactDetail } = data || {}
    const iconMap = {
        1: <Icon name="phone" className='p-2 text-[40px] border border-gray-500 rounded-full' />,
        2: <Icon name="email" className='p-2 text-[40px] border border-gray-500 rounded-full' />,
        3: <Icon name="location" className='p-2 text-[40px] border border-gray-500 rounded-full' />,
    };

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[1250px] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <h1 style={{ fontFamily: kanit.style.fontFamily }} className='text-[30px] md:text-[38px] font-bold mt-8'>{Title}</h1>
                <div className='md:grid grid-cols-2 gap-[3rem] py-[1.7rem] md:py-[3rem]'>
                    <ContactForm />
                    <div>
                        <h1 className='text-[30px] md:text-[38px] font-bold leading-[2.5rem] my-5'>{Heading}</h1>
                        <p>{Paragraph}</p>
                        <ul className='flex flex-col gap-5'>
                            {contactDetail && (
                                contactDetail.map((contact) => {
                                    const { id, detail } = contact;
                                    return (
                                        <li key={id} className='shadow-md py-[1.5rem] px-[1rem] rounded-xl'>
                                            <p className='flex items-center gap-2 font-semibold text-[18px]'>
                                                {iconMap[id]}
                                                {detail}
                                            </p>
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