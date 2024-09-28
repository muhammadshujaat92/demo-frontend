'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { cardThunk } from '../_redux/api/Card'
import { mainUrl } from '../page'

const HomeSection1 = ({ data }) => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state?.cardThunk || {});
    const imageUrl = mainUrl()

    useEffect(() => {
        dispatch(cardThunk())
    }, [dispatch]);

    const { BackgroundImageTitle, ButtonText, Paragraph, Title, BackgroundImage } = data || {}
    const { url } = BackgroundImage?.data?.attributes || {}
    const backgroundImg = url ? `${url}` : ""

    return (
        <div className='py-[40px]'>
            <div>
                <div className='px-[5rem]'>
                    <h1 className='text-[32px] font-semibold text-gray-700 '>{Title}</h1>
                    <p className='text-[18px] mt-3'>{Paragraph}</p>
                    <div className='flex justify-end mb-3'>
                        <button className='bg-yellow-400 font-semibold'>{ButtonText}</button>
                    </div>
                </div>

                <div className='relative'>
                    <div className='h-[38rem] w-full'>
                        {
                            backgroundImg ? (
                                <Image className='h-full w-full' src={backgroundImg} alt='bg-img' width={1500} height={1500} />
                            ) : (
                                <div className='h-full w-full'></div>
                            )
                        }
                    </div>
                    <div className='absolute top-8 w-full text-center'>
                        <h1 className='font-semibold text-[35px]'>{BackgroundImageTitle}</h1>
                    </div>
                    <div className='absolute top-[28%] flex items-center w-full justify-center gap-[8rem]'>

                        {
                            items || items.length > 0 ? (
                                items.map((data) => {
                                    const { title, description, buttonText, price, Days, Sale, oldPrice, image } = data?.attributes?.TourPackageCard || {}
                                    const { url } = image?.data?.attributes || {};
                                    const Img = url ? `${url}` : ""

                                    return (
                                        <Card key={data.id} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} />
                                    )
                                })
                            ) : (
                                <div>NO PACKAGE</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection1