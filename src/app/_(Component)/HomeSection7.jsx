import React from 'react'
import Image from 'next/image'
import Accordian from './Accordian'

const HomeSection7 = ({ data }) => {
    const { BackImage, FrontImage, frontText1, frontText2, Heading1, Heading2, Text, AccordianData } = data || {}
    const imageUrl = 'https://inviting-thrill-7bbda9fa6e.strapiapp.com'
    const backImageUrl = BackImage?.data?.attributes?.url || ''
    const frontImageUrl = FrontImage?.data?.attributes?.url || ''
    const backImg = backImageUrl ? `${backImageUrl}` : ""
    const frontImg = frontImageUrl ? `${frontImageUrl}` : ""

    return (
        <>
            <div className='pt-[7rem] pb-[5rem] px-[5rem] grid grid-cols-2 bg-gray-200'>
                <div className='relative top-0'>
                    <Image src={backImg} alt='img' width={470} height={470} className='rounded-3xl' />
                    <div className='absolute bottom-[300px] left-[230px]'>
                        <Image src={frontImg} alt='img' width={280} height={280} className='rounded-3xl border-[8px] border-white' />
                    </div>
                    <div className='absolute bottom-[75px] left-[-28px] bg-white rounded-[10px] py-[1rem]'>
                        <h1 className='text-[3rem]'>{frontText1}</h1>
                        <p>{frontText2}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[2rem]'>
                    <div className='px-4'>
                        <h1 className='text-blue-600 text-[23px] font-semibold'>{Heading1}</h1>
                        <h1 className='text-[45px] font-semibold leading-[3rem] my-6'>{Heading2}</h1>
                        <p>{Text}</p>
                    </div>
                    {
                        AccordianData || AccordianData?.length > 0 ? (
                            AccordianData.map((data) => {
                                const { questionText, answerText } = data || {}
                                return (
                                    <Accordian key={data.id} title={questionText} answerText={answerText} />
                                )
                            })
                        ) : (
                            <div>..</div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default HomeSection7