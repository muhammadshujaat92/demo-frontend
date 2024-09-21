'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { cardThunk } from '../_redux/api/Card'

const HomeSection1 = ({ data }) => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state?.cardThunk || {});
    const imageUrl = 'https://inviting-thrill-7bbda9fa6e.strapiapp.com'

    useEffect(() => {
        dispatch(cardThunk())
    }, [dispatch]);

    const { BackgroundImageTitle, ButtonText, Paragraph, Title, BackgroundImage } = data || {}
    const { url } = BackgroundImage?.data?.attributes || {}
    const backgroundImg = url ? `${url}` : ""

    return (
        <div className='py-[40px] px-20'>
            <div>
                <div>
                    <h1 className='text-[32px] font-semibold text-gray-700 '>{Title}</h1>
                    <p className='text-[18px] mt-3'>{Paragraph}</p>
                    <div className='flex justify-end mb-3'>
                        <button className='bg-yellow-400 font-semibold'>{ButtonText}</button>
                    </div>
                </div>

                <div className='relative'>
                    <div className='h-[35rem] w-full'>
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
                    <div className='absolute top-[28%] flex items-center w-full justify-center gap-20'>

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

                        {/* <Card Img={cardImg1} title={'Noteworthy technology'} description={'Here are the biggest enterprise technology so chronological order.'} btnText={'Read more'} priceText={'$100.00'} days={'4 DAYS-5 NIGHTS'} />

                        <Card Img={cardImg2} title={'Noteworthy technology'} description={'Here are the biggest enterprise technology so chronological order.'} btnText={'Read more'} priceText={'$64.00'} days={'2 DAYS-1 NIGHTS'} spanText={'$92.00'} saleBtn={'Sale!'} />

                        <Card Img={cardImg3} title={'Noteworthy technology'} description={'Here are the biggest enterprise technology so chronological order.'} btnText={'Read more'} priceText={'$100.00'} days={'6 DAYS-5 NIGHTS'} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection1