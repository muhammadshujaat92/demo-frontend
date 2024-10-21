import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { imageUrl } from '@/utils/apiHelper';

const HomeSection6 = ({ item }) => {
    const { Heading, Paragraph, rating, secData, userImages } = item || {};
    const { data } = userImages || {}
    const imgUrl = imageUrl()

    return (
        <div className='w-full max-w-[1250px] flex-wrap flex items-center justify-between px-2 md:pe-3 md:ps-3 xl:pe-0'>
            <div className="max-w-sm bg-white rounded-lg flex flex-col justify-between h-[27rem] pb-[2rem] px-2 md:pe-3 md:ps-3 xl:pe-0">
                <div>
                    <h1 className='text-[38px] lg:leading-[3rem] mb-6 font-bold'>{Heading}</h1>
                    <p className="text-gray-700 font-semibold text-[15px] lg:text-[16px]">{Paragraph}</p>
                </div>
                <div className='flex items-center gap-[1.6rem]'>
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                        {
                            data || data?.length > 0 ? (
                                data.map((data) => {
                                    const { url } = data?.attributes || {}
                                    const Img = url ? `${imgUrl}${url}` : ""
                                    return (
                                        <Image key={data.id} className="w-10 h-10 border-white rounded-full dark:border-gray-800" src={Img} width={100} height={100} alt="" />
                                    )
                                })
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <FaStar className='text-yellow-400 text-[20px]' />
                            <FaStar className='text-yellow-400 text-[20px]' />
                            <FaStar className='text-yellow-400 text-[20px]' />
                            <FaStar className='text-yellow-400 text-[20px]' />
                            <FaStar className='text-yellow-400 text-[20px]' />
                        </div>
                        <p className='text-gray-400'>{rating}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center gap-[2rem]'>
                {
                    secData || secData?.length > 0 ? (
                        secData.map((data) => {
                            const { ReviewText, AuthorName, AuthorCountry } = data
                            return (
                                <div key={data.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-col justify-between h-[27rem]">
                                    <p className="font-normal text-gray-700 text-[15px] lg:text-[16px]">{ReviewText}</p>
                                    <div>
                                        <h1 className='font-semibold leading-[2rem] text-[25px]'>{AuthorName}</h1>
                                        <p className='text-orange-500 font-semibold'>{AuthorCountry}</p>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    )
}

export default HomeSection6