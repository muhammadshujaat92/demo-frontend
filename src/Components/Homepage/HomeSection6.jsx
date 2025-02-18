import React from 'react'
import Image from 'next/image'
import Icon from '../Icons';

const HomeSection6 = ({ item }) => {
    const { Heading, Paragraph, rating, secData, userImages } = item || {};
    const { data } = userImages || {}

    return (
        <div className='w-full max-w-[1250px] flex-wrap flex items-center justify-between md:grid md:grid-cols-3 px-2 md:pe-3 md:ps-3 xl:pe-0'>
            <div className="max-w-sm bg-white rounded-lg flex flex-col justify-between h-[27rem] pb-[2rem] px-2 md:pe-3 md:ps-3 xl:pe-0">
                <div>
                    <h2 className='text-[28px] lg:text-[38px] lg:leading-[3rem] lg:mb-6 font-bold text-[#ff6600]'>{Heading}</h2>
                    <p className="text-gray-700 font-semibold text-[15px] md:text-[14px] xl:text-[16px]">{Paragraph}</p>
                </div>
                <div className='flex items-center gap-[1.6rem]'>
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                        {data && (
                            data.map((data) => {
                                const { url } = data?.attributes || {}
                                const Img = url ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : ""
                                return (
                                    <Image key={data.id} className="w-10 h-10 border-white rounded-full dark:border-gray-800" src={Img} width={100} height={100} alt="star" loading='lazy'/>
                                )
                            })
                        )}
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <Icon name="star" className='text-yellow-400 text-[20px]' />
                            <Icon name="star" className='text-yellow-400 text-[20px]' />
                            <Icon name="star" className='text-yellow-400 text-[20px]' />
                            <Icon name="star" className='text-yellow-400 text-[20px]' />
                            <Icon name="star" className='text-yellow-400 text-[20px]' />
                        </div>
                        <span className='text-gray-400'>{rating}</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center md:grid md:grid-cols-2 md:col-span-2 lg:gap-[2rem]'>
                {secData && (
                    secData.map((data) => {
                        const { ReviewText, AuthorName, AuthorCountry } = data
                        return (
                            <div key={data.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-col justify-between h-[27rem]">
                                <p className="font-normal text-gray-700 text-[15px] md:text-[14px] xl:text-[16px]">{ReviewText}</p>
                                <div>
                                    <span className='font-semibold leading-[2rem] text-[20md] xl:text-[25px] block'>{AuthorName}</span>
                                    <span className='text-orange-500 font-semibold block'>{AuthorCountry}</span>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default HomeSection6