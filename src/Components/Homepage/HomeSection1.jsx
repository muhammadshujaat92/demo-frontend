'use client'
import React, { useEffect } from 'react'
import bgImg from "../../public/imgs/homeSection1Default.webp"
import { useDispatch, useSelector } from 'react-redux';
import { cardThunk } from '../../app/_redux/api/Card';
import { boogaloo, kanit } from '../Font';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const Card = dynamic(() => import('../Card'), { loading: () => <p>Loading...</p> })

const HomeSection1 = ({ secData }) => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state?.cardThunk?.items || {});

    useEffect(() => {
        dispatch(cardThunk())
    }, [dispatch]);

    const { BackgroundImageTitle, ButtonText, Paragraph, Title, BackgroundImage } = secData || {}
    const { url } = BackgroundImage?.data?.attributes || {}
    const backgroundImg = url ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : bgImg

    return (
        <div className='py-[40px] mt-[22rem] md:mt-0'>
            <div className='flex justify-center pt-[25px] pb-[35px]'>
                <div className='w-full max-w-[1250px] px-2 md:pe-3 xl:pe-0'>
                    <h1 style={{ fontFamily: kanit.style.fontFamily }} className='text-[40px] leading-[2.7rem] md:leading-none font-bold md:text-[50px] text-[#e75c00] tracking-tight'>{Title}</h1>
                    <p className='text-[15px] md:text-[18px] mt-3'>{Paragraph}</p>
                    <div className='flex justify-end mb-3'>
                        <Link href={'/tour-packages'} className='bg-yellow-400 font-semibold py-[10px] px-[60px] hover:bg-yellow-500 shadow-md shadow-orange-500 mt-2'>{ButtonText}</Link>
                    </div>
                </div>
            </div>

            <div className='relative h-fit'>
                <Image
                    src={backgroundImg}
                    alt="banner_image"
                    className="z-[-1] object-cover"
                    layout="fill"
                    loading='lazy'
                />
                <div className='relative py-[1rem] w-full text-center'>
                    <h1 style={{ fontFamily: kanit.style.fontFamily }} className='font-semibold text-[30px] md:text-[38px]'>{BackgroundImageTitle}</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='relative py-[2rem] flex items-center flex-col md:flex-row w-full justify-between max-w-[1250px] gap-[2rem] xl:gap-[8rem] px-2 md:pe-3 md:px-0 xl:pe-0'>
                        {data && (
                            data.map((data) => {
                                const { title, description, buttonText, price, Days, Sale, oldPrice, image, showCardToHome, icon } = data?.attributes || {}
                                const { url } = image?.data?.attributes || {};
                                const Img = url ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : ""
                                if (showCardToHome) {
                                    return (
                                        <Card key={data.id} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} icon={icon} />
                                    )
                                }
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection1