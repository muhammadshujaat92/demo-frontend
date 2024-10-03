'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { cardThunk } from '../_redux/api/Card'
import { mainUrl } from '../page'

const HomeSection1 = ({ secData }) => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state?.cardThunk?.items || {});
    const imageUrl = mainUrl()

    useEffect(() => {
        dispatch(cardThunk({ pageSize: 8, page: 1 }))
    }, [dispatch]);

    const { BackgroundImageTitle, ButtonText, Paragraph, Title, BackgroundImage } = secData || {}
    const { url } = BackgroundImage?.data?.attributes || {}
    const backgroundImg = url ? `${url}` : ""

    return (
        <div className='py-[40px]'>
            <div className='flex justify-center'>
                <div className='w-full max-w-[1250px] ps-3'>
                    <h1 className='text-[32px] font-semibold text-gray-700 '>{Title}</h1>
                    <p className='text-[18px] mt-3'>{Paragraph}</p>
                    <div className='flex justify-end mb-3'>
                        <button className='bg-yellow-400 font-semibold'>{ButtonText}</button>
                    </div>
                </div>
            </div>

            <div className='relative h-fit'>
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }} />
                <div className='relative py-[1rem] w-full text-center'>
                    <h1 className='font-semibold text-[30px] md:text-[35px]'>{BackgroundImageTitle}</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='relative py-[2rem] flex items-center flex-col md:flex-row w-full ps-3 justify-between max-w-[1250px] gap-[2rem] xl:gap-[8rem]'>
                        {
                            data && data.length > 0 ? (
                                data.map((data) => {
                                    const { title, description, buttonText, price, Days, Sale, oldPrice, image, showCard } = data?.attributes || {}
                                    const { url } = image?.data?.attributes || {};
                                    const Img = url ? `${url}` : ""
                                    if (showCard === 'homePage' || showCard === "tour&homePage") {
                                        return (
                                            <Card key={data.id} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} />
                                        )
                                    }
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

export default HomeSection1