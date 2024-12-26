import React from 'react'
import defaultImg from '@/public/imgs/woman-mountain-peak.webp'
import { imageUrl } from '@/utils/apiHelper'
import { kanit } from '../Font'
import Image from 'next/image'
import Link from 'next/link'

const HomeSection3 = ({ data }) => {
    const { ButtonText, Heading, Paragraph, image, URL } = data || {}
    const { url } = image?.data?.attributes || {}
    const imgUrl = imageUrl()
    const Img = url ? `${imgUrl}${url}` : defaultImg

    return (
        <div className='flex justify-center py-[3rem] bg-gray-200'>
            <div className='md:grid grid-cols-2 gap-[3rem] md:gap-[1rem] xl:gap-[3rem] w-full max-w-[1250px] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <div className='flex flex-col gap-[2rem] md:gap-[3rem] items-start'>
                    <div>
                        <h1 style={{ fontFamily: kanit.style.fontFamily }} className='font-bold text-[27px] md:text-[38px]'>{Heading}</h1>
                        <p className='my-3 text-[15px] md:text-[18px]'>{Paragraph}</p>
                    </div>
                    <Link href={`/contact/?rh=${URL}`} className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{ButtonText}</Link>
                </div>
                <div className='h-[20rem] md:h-[25rem] max-h-[25rem] relative rounded-l-[15rem] mt-7 md:mt-0'>
                    <Image src={Img} alt='bg-img' className='rounded-l-[15rem]' priority layout='fill' style={{ objectFit: "cover" }} />
                </div>
            </div>
        </div>
    )
}

export default HomeSection3