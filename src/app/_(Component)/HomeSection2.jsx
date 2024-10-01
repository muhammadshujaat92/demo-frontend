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
            <div className='px-[1rem] md:px-[5rem]'>
                <h1 className='font-bold text-[27px] md:text-[35px] text-center'>{Title}</h1>
                <div className='md:flex justify-between gap-[3rem] my-4 py-[2rem]'>
                    {/* <div className='w-[140rem]'>
                        <Image src={Secimg} alt='img' width={700} height={700} className='rounded-r-[15rem] w-full h-full' />
                    </div> */}
                    <div className='md:w-[135rem] max-w-[135rem] h-[20rem] md:h-[25rem] max-h-[25rem] relative rounded-r-[15rem]'>
                        <div className="absolute inset-0 bg-contain bg-center bg-no-repeat rounded-r-[15rem]" style={{ backgroundImage: `url(${Secimg})` }} />
                    </div>
                    <div className='flex flex-col gap-[2rem] md:gap-[3rem] items-end mt-5 md:mt-0'>
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