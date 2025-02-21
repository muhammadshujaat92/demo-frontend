import React from 'react'
import Image from 'next/image'
import Accordian from '../Accordian'
import defaultImg1 from '../../public/imgs/Haridwar.webp'
import defaultImg2 from '../../public/imgs/Lordbuddha.webp'
import bgPattern from '../../public/imgs/beautiful-cube-pattern.webp'

const HomeSection7 = ({ data }) => {
    const { BackImage, FrontImage, frontText1, frontText2, Heading1, Heading2, Text, AccordianData } = data || {}
    const backImageUrl = BackImage?.data?.attributes?.url || ''
    const frontImageUrl = FrontImage?.data?.attributes?.url || ''
    const backImg = backImageUrl ? `${process.env.NEXT_PUBLIC_BASE_URL}${backImageUrl}` : defaultImg1
    const frontImg = frontImageUrl ? `${process.env.NEXT_PUBLIC_BASE_URL}${frontImageUrl}` : defaultImg2

    return (
        <div className='flex justify-center relative md:h-[620px] lg:h-[700px]'>
            {/* <Image src={bgPattern} alt='background' className='inset-0 absolute z-[-1] object-cover opacity-[0.1]' fill loading='lazy' /> */}
            <div className="absolute inset-0 bg-center opacity-[0.1] z-[-1]" style={{ backgroundImage: `url(${bgPattern.src})`}} />
            <div className='md:pt-[7rem] md:pb-[5rem] py-[2rem] w-full max-w-[1250px] md:grid grid-cols-2 px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <div className='md:relative top-0 md:block flex flex-col items-center'>
                    <Image src={backImg} alt='img' width={470} height={470} className='rounded-3xl' loading='lazy' />
                    <div className='md:absolute top-[-70px] left-[230px] my-[2rem] md:my-0'>
                        <Image src={frontImg} alt='img' width={280} height={280} className='rounded-3xl border-[8px] border-white' loading='lazy' />
                    </div>
                    <div className='md:absolute w-full md:w-fit top-[20rem] left-[-28px] bg-white border-[2px] rounded-[10px] py-[1.5rem] px-[1rem] text-center'>
                        <span className='text-[2rem] font-[500] block'>{frontText1}</span>
                        <span>{frontText2}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-[2rem] md:relative bottom-[70px]'>
                    <div className='px-4 pt-[2rem] md:pt-0'>
                        <h2 className='text-blue-600 text-[20px] lg:text-[23px] font-semibold'>{Heading1}</h2>
                        <h3 className='text-[25px] lg:text-[40px] font-semibold md:leading-[2rem] lg:leading-[2.6rem] md:my-3 lg:my-6'>{Heading2}</h3>
                        <p>{Text}</p>
                    </div>
                    <Accordian AccordianData={AccordianData} />
                </div>
            </div>
        </div>
    )
}

export default HomeSection7