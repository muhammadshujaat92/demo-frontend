'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardThunk } from "../_redux/api/Card";
import discountImg from '@/public/discount.png'
import { imageUrl } from "@/utils/apiHelper";
import ContactForm from "./ContactForm";
import Card from "./Card";

const TourPage = ({ pageData }) => {
    const dispatch = useDispatch();
    const [isImageLoad, setIsImageLoad] = useState(false)

    useEffect(() => {
        dispatch(cardThunk())
    }, [dispatch]);

    const { data } = useSelector(state => state?.cardThunk?.items || {});
    const imgUrl = imageUrl()

    const { Banner, bannerHeading, bannerParagraph, discountHeading, discountParagraph, discountBtnText } = pageData?.[0]?.attributes || {}
    const { url } = Banner?.data?.attributes || {}
    const BannerImg = url ? `${imgUrl}${url}` : ""

    return (
        <div>
            <section>
                <div className={`relative h-[20rem] flex items-center justify-center xl:block md:h-[30rem]`}>
                    <Image
                        src={BannerImg}
                        alt='banner'
                        width={1500}
                        height={900}
                        className={`w-full h-full ${isImageLoad ? "visible" : "invisible"}`}
                        priority={true}
                        onLoad={() => setIsImageLoad(true)}
                        style={{ objectFit: "cover" }}
                    />
                    {
                        isImageLoad ? (
                            <div className="flex justify-center imgae">
                                <div className='absolute xl:top-32 w-full max-w-[1250px] flex flex-col gap-8 ps-3'>
                                    <h1 className='text-[42px] font-sancoaleSoftened text-white'>{bannerHeading}</h1>
                                    <p className='lg:text-lg text-white lg:font-bold'>{bannerParagraph}</p>
                                </div>
                            </div>
                        ) : (
                            <span></span>
                        )
                    }
                </div>
            </section>
            <section className='flex justify-center'>
                <div className="py-12 w-full max-w-[1250px] ps-3 grid grid-cols-3 gap-[1rem]">
                    <div className='flex items-center flex-wrap gap-7 md:gap-[1.5rem] col-span-2 h-fit'>
                        {data && data.length > 0 ? (
                            data.slice(0, 6).map((data) => {
                                const { title, description, buttonText, price, Days, Sale, oldPrice, image, showCard, icon } = data.attributes
                                const { url } = image.data.attributes;
                                const Img = url ? `${imgUrl}${url}` : ""
                                return (
                                    <Card key={data.id} Width={'max-w-[16rem]'} icon={icon} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} />
                                )
                            })
                        ) : (
                            <div>NO PACKAGE</div>
                        )}
                        <div className="flex gap-[2rem] px-[1rem] pt-[3rem] pb-[2rem] rounded-xl bg-[#f2f2f2]">
                            <div className="flex flex-col gap-[2.5rem]">
                                <div>
                                    <h1 className="font-semibold text-[30px] leading-[2.2rem]">{discountHeading}</h1>
                                    <p className="text-[14px] mt-[1rem]">{discountParagraph}</p>
                                </div>
                                <div className="flex justify-end">
                                    <button className="bg-green-700 text-white py-[10px] px-[35px] rounded-[35px]">{discountBtnText}</button>
                                </div>
                            </div>
                            <div className="w-[35rem]">
                                <Image src={discountImg} width={300} height={300} alt='img' className="w-full h-full" />
                            </div>
                        </div>
                        {data && data.length > 0 ? (
                            data.slice(6).map((data) => {
                                const { title, description, buttonText, price, Days, Sale, oldPrice, image, icon } = data.attributes
                                const { url } = image.data.attributes;
                                const Img = url ? `${imgUrl}${url}` : ""
                                return (
                                    <Card key={data.id} Width={'max-w-[16rem]'} icon={icon} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} />
                                )
                            })
                        ) : (
                            <div>NO PACKAGE</div>
                        )}
                    </div>
                    <div className={`h-full relative`}>
                        <div className={`sticky top-[2%] right-0`}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TourPage