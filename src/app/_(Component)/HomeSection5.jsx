import React from 'react'
import { IoIosPlayCircle } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image';
import { imageUrl } from '@/utils/apiHelper';

const HomeSection5 = ({ data }) => {
    const { Title, BoxHeading1, BoxHeading2, BoxText1, BoxText2, content } = data || {}

    return (
        <div className='py-2 flex justify-center bg-[#f0f0f0]'>
            <div className='my-4 py-[2rem] w-full max-w-[1250px] flex flex-col gap-[2rem] ps-3'>
                <h1 className='font-semibold text-[20px]'>{Title}</h1>
                <div className='flex justify-between gap-[2rem]'>
                    <div>
                        <p className='font-semibold text-[14px] text-green-700'>{BoxHeading1}</p>
                        <h1 className='font-bold text-[60px] text-gray-800 leading-[4rem] my-3'>{BoxHeading2}</h1>
                        <p className='text-[14px] font-semibold'>in <span className='text-green-700'>{BoxText1}</span></p>
                        <p className='text-[14px] text-blue-700 font-semibold flex items-center mt-2'><IoIosPlayCircle />{BoxText2}</p>
                    </div>
                    <div className='flex items-center gap-[1rem]'>
                    {
                        content && content.length > 0 ? (
                            content.map((data, index) => {
                                const { Paragraph, Text, image } = data;
                                const imgUrl = imageUrl()
                                const { url } = image?.data?.attributes || {}
                                const Img = url ? `${imgUrl}${url}` : ""

                                return (
                                    <div key={data.id} className='flex items-center justify-center gap-[1rem]'>
                                        <div className='flex flex-col justify-center items-center gap-[1rem] w-[8rem] text-center'>
                                            <div>
                                                <Image src={Img} alt='icon' width={110} height={110} />
                                            </div>
                                            <div>
                                                <h1 className='font-semibold text-lg leading-[1.5rem]'>{Text}</h1>
                                                <p className='text-sm'>{Paragraph}</p>
                                            </div>
                                        </div>
                                        {index < content.length - 1 && (
                                            <div>
                                                <BsArrowRight className='text-green-700 text-[30px]' />
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