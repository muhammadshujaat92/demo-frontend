import React from 'react'
import { IoIosPlayCircle } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image';

const HomeSection5 = ({ data }) => {
    const { Title, BoxHeading1, BoxHeading2, BoxText1, BoxText2, content } = data || {}

    return (
        <div className='py-2'>
            {/* <h1 className='text-[30px] font-bold text-gray-700 px-[6rem] pb-5'></h1> */}
            <div className='bg-[#f0f0f0] my-4 py-[1.5rem] px-[6rem] flex flex-col gap-[2rem]'>
                <h1 className='font-semibold text-[20px]'>{Title}</h1>
                <div className='grid grid-cols-3'>
                    <div>
                        <p className='font-semibold text-[14px] text-green-700'>{BoxHeading1}</p>
                        <h1 className='font-bold text-[40px] text-gray-800 leading-[2.8rem] my-3'>{BoxHeading2}</h1>
                        <p className='text-[14px] font-semibold'>in <span className='text-green-700'>{BoxText1}</span></p>
                        <p className='text-[14px] text-blue-700 font-semibold flex items-center mt-2'><IoIosPlayCircle />{BoxText2}</p>
                    </div>


                    <div className='flex items-center justify-center col-span-2 gap-[1rem]'>

                        {
                            content && content.length > 0 ? (
                                content.map((data, index) => {
                                    const { Paragraph, Text, image } = data;
                                    const imageUrl = 'https://inviting-thrill-7bbda9fa6e.strapiapp.com'
                                    const { url } = image?.data?.attributes || {}
                                    const Img = url ? `${url}` : ""

                                    return (
                                        <>
                                            <div key={data.id} className='flex flex-col justify-center items-center gap-[1rem] w-[8rem] text-center'>
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
                                        </>
                                    );
                                })
                            ) : (
                                <div>..</div>
                            )
                        }


                        {/* <div className='flex flex-col justify-center items-center gap-[1rem] w-[8rem] text-center'>
                            <div>
                                <Image src={icon2} alt='icon' width={100} height={100} />
                            </div>
                            <div>

                                <h1 className='font-semibold text-lg leading-[1.5rem]'>Get multiple free quotes</h1>
                                <p className='text-sm'>from verified travel experts</p>
                            </div>
                        </div>
                        <div>
                            <BsArrowRight className='text-green-700 text-[30px]' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-[1rem] w-[8rem] text-center'>
                            <div>
                                <Image src={icon3} alt='icon' width={100} height={100} />
                            </div>
                            <div>

                                <h1 className='font-semibold text-lg leading-[1.5rem]'>Customize & book</h1>
                                <p className='text-sm'>a perfect holiday experience</p>
                            </div>
                        </div> */}

                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeSection5