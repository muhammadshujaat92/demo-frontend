import React from 'react'
import defaultImg from '@/public/imgs/woman-mountain-peak.webp'
import { imageUrl } from '@/utils/apiHelper'
import { kanit } from '../Font'
import Image from 'next/image'
import Link from 'next/link'

const HomeSection2 = ({ data }) => {
    const { ButtonText, Heading, Paragraph, Title, image, URL } = data || {}
    const { url } = image?.data?.attributes || {}
    const imgUrl = imageUrl()
    const Img = url ? `${imgUrl}${url}` : defaultImg

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[1250px] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <h1 style={{ fontFamily: kanit.style.fontFamily }} className='font-bold text-[27px] md:text-[38px] text-center'>{Title}</h1>
                <div className='md:grid grid-cols-2 gap-[3rem] md:gap-[1rem] xl:gap-[3rem] my-4 py-[2rem]'>
                    <div className='h-[20rem] md:h-[25rem] max-h-[25rem] relative rounded-r-[15rem]'>
                        <Image src={Img} alt='bg-img' className='rounded-r-[15rem]' loading='lazy' layout='fill' style={{ objectFit: "cover" }} />
                    </div>
                    <div className='flex flex-col gap-[2rem] md:gap-[3rem] items-end mt-5 md:mt-0'>
                        <div>
                            <h1 className='font-semibold text-[30px]'>{Heading}</h1>
                            <p className='my-3 text-[15px] md:text-[18px]'>{Paragraph}</p>
                        </div>
                        <Link href={`/contact/?rh=${URL}`} className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{ButtonText}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection2