'use client'
import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { cardThunk } from '../_redux/api/Card'
import { imageUrl } from '@/utils/apiHelper'
import Image from 'next/image'
import bgImg from "@/public/imgs/homeSection1Default.webp"

const HomeSection1 = ({ secData }) => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state?.cardThunk?.items || {});
    const imgUrl = imageUrl()

    useEffect(() => {
        dispatch(cardThunk())
    }, [dispatch]);

    const { BackgroundImageTitle, ButtonText, Paragraph, Title, BackgroundImage } = secData || {}
    const { url } = BackgroundImage?.data?.attributes || {}
    const backgroundImg = url ? `${imgUrl}${url}` : ""

    return (
        <div className='py-[40px]'>
            <div className='flex justify-center'>
                <div className='w-full max-w-[1250px] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                    <h1 className='text-[32px] font-semibold text-gray-700 '>{Title}</h1>
                    <p className='text-[15px] md:text-[18px] mt-3'>{Paragraph}</p>
                    <div className='flex justify-end mb-3'>
                        <button className='bg-yellow-400 font-semibold'>{ButtonText}</button>
                    </div>
                </div>
            </div>

            <div className='relative h-fit'>
                {url ? (
                    <Image
                        src={backgroundImg}
                        alt="banner_image"
                        style={{ objectFit: "cover" }}
                        className="z-[-1]"
                        layout="fill"
                        priority
                        fetchPriority="high"
                        placeholder="blur"
                        blurDataURL="/imgs/homeSection1BlurData.jpg"
                    />
                ) : (
                    <Image src={bgImg}
                        layout="fill"
                        style={{ objectFit: "cover" }}
                        className="z-[-1]"
                        priority />
                )}
                <div className='relative py-[1rem] w-full text-center'>
                    <h1 className='font-semibold text-[30px] md:text-[35px]'>{BackgroundImageTitle}</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='relative py-[2rem] flex items-center flex-col md:flex-row w-full justify-between max-w-[1250px] gap-[2rem] xl:gap-[8rem] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                        {
                            data && data.length > 0 ? (
                                data.map((data) => {
                                    const { title, description, buttonText, price, Days, Sale, oldPrice, image, showCardToHome, icon } = data?.attributes || {}
                                    const { url } = image?.data?.attributes || {};
                                    const Img = url ? `${imgUrl}${url}` : ""
                                    if (showCardToHome) {
                                        return (
                                            <Card key={data.id} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} icon={icon} />
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