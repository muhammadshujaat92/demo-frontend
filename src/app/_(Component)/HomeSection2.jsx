import React from 'react'
import Image from 'next/image'
import { mainUrl } from '../page'

const HomeSection2 = ({ data }) => {
    const { ButtonText, Heading, Paragraph, Title, image } = data || {}
    const imageUrl = mainUrl()
    const { url } = image?.data?.attributes || {}
    const Secimg = url ? `${url}` : ""
    return (
        <>
            <div className='px-[5rem]'>
                <h1 className='font-bold text-[30px] text-center'>{Title}</h1>
                <div className='flex justify-between gap-[3rem] my-4 py-[2rem]'>
                    <div className='w-[140rem]'>
                        <Image src={Secimg} alt='img' width={700} height={700} className='rounded-r-[15rem] w-full h-full' />
                    </div>
                    <div className='flex flex-col gap-[3rem] items-end'>
                        <div>
                            <h1 className='font-semibold text-[30px]'>{Heading}</h1>
                            <p className='my-3 text-[18px]'>{Paragraph}</p>
                        </div>
                        <button className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{ButtonText}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection2