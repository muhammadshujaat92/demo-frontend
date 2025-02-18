import React from 'react'
import Image from 'next/image';
import Icon from '../Icons';
import Link from 'next/link';
import bgPattern from '../../public/imgs/pattern2.webp'

const HomeSection5 = ({ data }) => {
    const { Title, BoxHeading1, BoxHeading2, BoxText1, BoxText2, content } = data || {}

    return (
        <div className='py-2 flex justify-center relative'>
            <Image src={bgPattern} alt='background' className='inset-0 absolute z-[-1] object-cover' fill loading='lazy' />
            <div className='xl:my-4 py-[2rem] w-full max-w-[1250px] flex flex-col gap-[1rem] md:gap-[2rem] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <span className='font-semibold text-[20px]'>{Title}</span>
                <div className='md:flex justify-between lg:gap-[2rem]'>
                    <div className='pb-[1rem] md:pb-0'>
                        <span className='font-semibold text-[12px] md:text-[14px] text-green-700'>{BoxHeading1}</span>
                        <h2 className='font-bold text-[40px] md:text-[38px] lg:text-[55px] text-gray-800 leading-[2.7rem] lg:leading-[4rem] my-3'>{BoxHeading2}</h2>
                        <span className='text-[12px] md:text-[14px] font-semibold text-green-700'>{BoxText1}</span>
                        <Link href={'https://www.youtube.com/@indiayaatra8780'} className='text-[12px] md:text-[14px] text-blue-700 font-semibold flex items-center mt-2 w-fit'><Icon name="boldArrow" className="bg-blue-700 text-white rounded-full p-[2px] me-1 text-[14px]" />{BoxText2}</Link>
                    </div>
                    <div className='flex mt-[1rem] md:mt-0 justify-center md:justify-normal flex-wrap md:flex-nowrap items-center xl:gap-[1rem]'>
                        {
                            content && (
                                content.map((data, index) => {
                                    const { Paragraph, Text, image } = data;
                                    const { url } = image?.data?.attributes || {}
                                    const Img = url ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : ""

                                    return (
                                        <div key={data.id} className='flex items-center justify-center xl:gap-[1rem]'>
                                            <div className='flex flex-col justify-center items-center md:gap-[1rem] w-[8rem] text-center'>
                                                <div>
                                                    <Image src={Img} alt='icon' width={110} height={110} className='w-auto h-auto' loading='lazy' />
                                                </div>
                                                <div>
                                                    <span className='font-semibold text-lg leading-5 block'>{Text}</span>
                                                    <span className='text-sm block'>{Paragraph}</span>
                                                </div>
                                            </div>
                                            {index < content.length - 1 && (
                                                <div>
                                                    <Icon name="thinArrow" className="text-green-700 text-[20px] xl:text-[30px]" />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection5