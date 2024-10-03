import React from 'react'
import Image from 'next/image'
import { mainUrl } from '../page'
import Link from 'next/link'

const HomeSection3 = ({ data }) => {
    const { ButtonText, Heading, Paragraph, image } = data || {}
    const imageUrl = mainUrl()
    const { url } = image?.data?.attributes || {}
    const Secimg = url ? `${url}` : ""
    const toSlug = (text) => {
        return text.toLowerCase().replace(/ /g, '-');
    }

    const slug = Heading ? toSlug(Heading) : '';

    return (
        <div className='flex justify-center py-[3rem] bg-gray-200'>
            <div className='md:flex justify-between gap-[3rem] w-full max-w-[1250px]'>
                <div className='flex flex-col gap-[3rem] items-start'>
                    <h1 className='font-bold text-[27px] md:text-[35px]'>{Heading}</h1>
                    <div>
                        <p className='my-3 text-[18px]'>{Paragraph}</p>
                    </div>
                    <Link href={`/contact/${slug}`} className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{ButtonText}</Link>
                </div>
                <div className='md:w-[135rem] max-w-[135rem] h-[20rem] md:h-[25rem] max-h-[25rem] relative rounded-r-[15rem] mt-7 md:mt-0'>
                    <div className="absolute inset-0 bg-contain bg-center bg-no-repeat rounded-r-[15rem]" style={{ backgroundImage: `url(${Secimg})` }} />
                </div>
            </div>
        </div>
    )
}

export default HomeSection3