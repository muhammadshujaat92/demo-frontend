import React from 'react'
import defaultImg from '../../public/imgs/woman-mountain-peak.webp'
import { fira } from '../Font'
import Image from 'next/image'
import Link from 'next/link'
import bgImg from "../../public/imgs/footer_bg.webp";

const HomeSection3 = ({ data }) => {
    const { ButtonText, Heading, Paragraph, image, URL } = data || {}
    const { url } = image?.data?.attributes || {}
    const Img = url ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : defaultImg;
    const slug = Heading?.replace(/[^A-Za-z0-9]/g, '-').toLowerCase();

    return (
        <div className='flex justify-center py-[3rem] relative'>
            <Image src={bgImg} alt='background' className='inset-0 absolute z-[-1] object-cover' fill loading='lazy' />
            <div className='md:grid grid-cols-2 gap-[3rem] md:gap-[1rem] xl:gap-[3rem] w-full max-w-[1250px] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <div className='flex flex-col gap-[2rem] md:gap-[3rem] items-start'>
                    <div>
                        <h3 style={{ fontFamily: fira.style.fontFamily }} className='font-bold text-[27px] md:text-[28px] lg:text-[38px]'>{Heading}</h3>
                        <p className='my-3 text-[15px] md:text-[14px] lg:text-[18px]'>{Paragraph}</p>
                    </div>
                    <Link href={`${URL ? URL : `/india-travel-contact/?rh=${slug}`}`} className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{ButtonText}</Link>
                </div>
                <div className='h-[20rem] md:h-[25rem] max-h-[25rem] relative rounded-l-[15rem] mt-7 md:mt-0'>
                    <Image src={Img} alt='bg-img' className='rounded-l-[15rem] object-cover' loading='lazy' fill />
                </div>
            </div>
        </div>
    )
}

export default HomeSection3