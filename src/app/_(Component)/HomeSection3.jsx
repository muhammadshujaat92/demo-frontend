import React from 'react'
import Link from 'next/link'
import { imageUrl } from '@/utils/apiHelper'
import Image from 'next/image'

const HomeSection3 = ({ data }) => {
    const { ButtonText, Heading, Paragraph, image } = data || {}
    const { url } = image?.data?.attributes || {}
    const imgUrl = imageUrl()
    const Img = url ? `${imgUrl}${url}` : ""

    const toSlug = (text) => {
        return text.replace(/ /g, '-');
    }

    const slug = Heading ? toSlug(Heading) : '';

    return (
        <div className='flex justify-center py-[3rem] bg-gray-200'>
            <div className='md:flex justify-between gap-[3rem] w-full max-w-[1250px] ps-3'>
                <div className='flex flex-col gap-[3rem] items-start'>
                    <h1 className='font-bold text-[27px] md:text-[35px]'>{Heading}</h1>
                    <div>
                        <p className='my-3 text-[18px]'>{Paragraph}</p>
                    </div>
                    <Link href={`/contact/?rh=${slug}`} className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{ButtonText}</Link>
                </div>
                <div className='md:w-[123rem] max-w-[123rem] h-[20rem] md:h-[25rem] max-h-[25rem] relative rounded-l-[15rem] mt-7 md:mt-0'>
                    <Image src={Img} alt='' className='rounded-l-[15rem]' priority={true} layout='fill' style={{ objectFit: "cover" }}/>
                </div>
            </div>
        </div>
    )
}

export default HomeSection3