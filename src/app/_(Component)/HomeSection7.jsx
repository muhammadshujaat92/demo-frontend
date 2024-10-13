import React from 'react'
import Image from 'next/image'
import Accordian from './Accordian'
import { mainUrl } from '../page'

const HomeSection7 = ({ data }) => {
    const { BackImage, FrontImage, frontText1, frontText2, Heading1, Heading2, Text, AccordianData } = data || {}
    const imageUrl = mainUrl()
    const backImageUrl = BackImage?.data?.attributes?.url || ''
    const frontImageUrl = FrontImage?.data?.attributes?.url || ''
    const backImg = backImageUrl ? `${imageUrl}${backImageUrl}` : ""
    const frontImg = frontImageUrl ? `${imageUrl}${frontImageUrl}` : ""

    return (
        <div className='flex justify-center bg-gray-200'>
            <div className='pt-[7rem] pb-[5rem] w-full max-w-[1250px] grid grid-cols-2 ps-3'>
                <div className='relative top-0'>
                    <Image src={backImg} alt='img' width={470} height={470} className='rounded-3xl' />
                    <div className='absolute top-[-70px] left-[230px]'>
                        <Image src={frontImg} alt='img' width={280} height={280} className='rounded-3xl border-[8px] border-white' />
                    </div>
                    <div className='absolute top-[20rem] left-[-28px] bg-white rounded-[10px] py-[1rem]'>
                        <h1 className='text-[3rem]'>{frontText1}</h1>
                        <p>{frontText2}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[2rem] relative bottom-[70px]'>
                    <div className='px-4'>
                        <h1 className='text-blue-600 text-[23px] font-semibold'>{Heading1}</h1>
                        <h1 className='text-[45px] font-semibold leading-[3rem] my-6'>{Heading2}</h1>
                        <p>{Text}</p>
                    </div>
                    <Accordian AccordianData={AccordianData}/>
                </div>
            </div>
        </div>
    )
}

export default HomeSection7