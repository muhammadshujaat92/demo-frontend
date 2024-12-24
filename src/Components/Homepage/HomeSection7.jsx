import React from 'react'
import Image from 'next/image'
import Accordian from '../Accordian'
import { imageUrl } from '@/utils/apiHelper'
import defaultImg1 from '@/public/imgs/Haridwar.webp'
import defaultImg2 from '@/public/imgs/Lordbuddha.webp'
import { kanit } from '../Font'

const HomeSection7 = ({ data }) => {
    const { BackImage, FrontImage, frontText1, frontText2, Heading1, Heading2, Text, AccordianData } = data || {}
    const imgUrl = imageUrl()
    const backImageUrl = BackImage?.data?.attributes?.url || ''
    const frontImageUrl = FrontImage?.data?.attributes?.url || ''
    const backImg = backImageUrl ? `${imgUrl}${backImageUrl}` : defaultImg1
    const frontImg = frontImageUrl ? `${imgUrl}${frontImageUrl}` : defaultImg2

    return (
        <div className='flex justify-center bg-gray-200'>
            <div className='md:pt-[7rem] md:pb-[5rem] py-[2rem] w-full max-w-[1250px] md:grid grid-cols-2 px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <div className='md:relative top-0 md:block flex flex-col items-center'>
                    <Image src={backImg} alt='img' width={470} height={470} className='rounded-3xl' />
                    <div className='md:absolute top-[-70px] left-[230px] my-[2rem] md:my-0'>
                        <Image src={frontImg} alt='img' width={280} height={280} className='rounded-3xl border-[8px] border-white' />
                    </div>
                    <div className='md:absolute w-full md:w-fit top-[20rem] left-[-28px] bg-white rounded-[10px] py-[1.5rem] px-[1rem] text-center'>
                        <h1 className='text-[2rem] font-[500]'>{frontText1}</h1>
                        <p>{frontText2}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[2rem] md:relative bottom-[70px]'>
                    <div className='px-4 pt-[2rem] md:pt-0'>
                        <h1 className='text-blue-600 text-[20px] md:text-[23px] font-semibold'>{Heading1}</h1>
                        <h1 style={{ fontFamily: kanit.style.fontFamily }} className='text-[30px] md:text-[45px] font-semibold leading-[2.5rem] md:leading-[3rem] my-6'>{Heading2}</h1>
                        <p>{Text}</p>
                    </div>
                    <Accordian AccordianData={AccordianData} />
                </div>
            </div>
        </div>
    )
}

export default HomeSection7