import React from 'react'
import { IoIosPlayCircle } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image';
import { imageUrl } from '@/utils/apiHelper';

const HomeSection5 = ({ data }) => {
    const { Title, BoxHeading1, BoxHeading2, BoxText1, BoxText2, content } = data || {}

    return (
        <div className='py-2 flex justify-center bg-[#f0f0f0]'>
            <div className='xl:my-4 py-[2rem] w-full max-w-[1250px] flex flex-col gap-[1rem] md:gap-[2rem] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <h1 className='font-semibold text-[20px]'>{Title}</h1>
                <div className='md:flex justify-between lg:gap-[2rem]'>
                    <div className='pb-[1rem] md:pb-0'>
                        <p className='font-semibold text-[12px] md:text-[14px] text-green-700'>{BoxHeading1}</p>
                        <h1 className='font-bold text-[40px] md:text-[38px] lg:text-[55px] text-gray-800 leading-[2.7rem] lg:leading-[4rem] my-3'>{BoxHeading2}</h1>
                        <p className='text-[12px] md:text-[14px] font-semibold'><span className='text-green-700'>{BoxText1}</span></p>
                        <p className='text-[12px] md:text-[14px] text-blue-700 font-semibold flex items-center mt-2'><IoIosPlayCircle />{BoxText2}</p>
                    </div>
                    <div className='flex mt-[1rem] md:mt-0 justify-center md:justify-normal flex-wrap md:flex-nowrap items-center xl:gap-[1rem]'>
                        {
                            content && content.length > 0 ? (
                                content.map((data, index) => {
                                    const { Paragraph, Text, image } = data;
                                    const imgUrl = imageUrl()
                                    const { url } = image?.data?.attributes || {}
                                    const Img = url ? `${imgUrl}${url}` : ""

                                    return (
                                        <div key={data.id} className='flex items-center justify-center xl:gap-[1rem]'>
                                            <div className='flex flex-col justify-center items-center md:gap-[1rem] w-[8rem] text-center'>
                                                <div>
                                                    <Image src={Img} alt='icon' width={110} height={110} />
                                                </div>
                                                <div>
                                                    <h1 className='font-semibold text-lg leading-5'>{Text}</h1>
                                                    <p className='text-sm'>{Paragraph}</p>
                                                </div>
                                            </div>
                                            {index < content.length - 1 && (
                                                <div>
                                                    <BsArrowRight className='text-green-700 text-[20px] xl:text-[30px]' />
                                                    {/* <i className="text-green-700 text-[30px] fa-solid fa-arrow-down md:hidden"></i> */}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection5