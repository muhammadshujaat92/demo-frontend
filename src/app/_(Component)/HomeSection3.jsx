import React from 'react'
import Image from 'next/image'
import { mainUrl } from '../page'

const HomeSection3 = ({ data }) => {
    const { ButtonText, Heading, Paragraph, Title, image } = data || {}
    const imageUrl = mainUrl()
    const { url } = image?.data?.attributes || {}
    const Secimg = url ? `${url}` : ""

    return (
        <div className='px-[5rem] py-[3rem] bg-gray-200'>
            <h1 className='font-bold text-[33px]'>{Heading}</h1>
            <div className='flex justify-between gap-[3rem]'>
                <div className='flex flex-col gap-[3rem] items-start'>
                    <div>
                        <p className='my-3 text-[18px]'>{Paragraph}</p>
                    </div>
                    <button className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{ButtonText}</button>
                </div>
                <div className='w-[140rem]'>
                    <Image src={Secimg} alt='img' width={700} height={700} className='rounded-l-[15rem] w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default HomeSection3