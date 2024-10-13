'use client'
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
const ContactForm = dynamic(() => import('./ContactForm'))
const Card = dynamic(() => import('./Card'))
import { useDispatch, useSelector } from "react-redux";
import { cardThunk } from "../_redux/api/Card";
import { tourPackageThunk } from "../_redux/api/TourPackage";
import Spinner from "./Spinner";
import { mainUrl } from "../page";
import discountImg from '@/public/discount.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TourPage = ({ test }) => {
    const dispatch = useDispatch();
    const formRef = useRef();
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: formRef.current,
            start: "top 2%",
            end: "top -120%",
            pin: true,
            scrub: true,
            pinSpacing: true
        });

        return () => {
            ScrollTrigger.killAll(); // Clean up on unmount
        };
    }, []);

    useEffect(() => {
        dispatch(cardThunk())
        // dispatch(tourPackageThunk())
    }, [dispatch]);

    const { data, meta } = useSelector(state => state?.cardThunk?.items || {});
    const { items, status } = useSelector(state => state?.tourPackageThunk || {});
    const imageUrl = mainUrl()

    const { Banner, bannerHeading, bannerParagraph, discountHeading, discountParagraph, discountBtnText } = test?.[0]?.attributes || {}
    const { url } = Banner?.data?.attributes || {}
    const BannerImg = url ? `${imageUrl}${url}` : ""

    // if (status === 'loading') {
    //     return (
    //         <div className='h-screen flex items-center justify-center'>
    //             <Spinner />
    //         </div>
    //     )
    // }

    return (
        <div>
            <section>
                <div className={`relative h-[20rem] flex items-center justify-center xl:block md:h-[30rem] bg-black`}>
                    <Image
                        src={BannerImg}
                        alt='banner'
                        width={1500}
                        height={900}
                        className={`w-full h-full opacity-60`}
                        priority
                    />
                    <div className="flex justify-center">
                        <div className='absolute xl:top-32 w-full max-w-[1250px] flex flex-col gap-8 ps-3'>
                            <h1 className='text-[42px] font-sancoaleSoftened text-white'>{bannerHeading}</h1>
                            <p className='lg:text-lg text-white lg:font-bold'>{bannerParagraph}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center'>
                <div className="py-12 w-full max-w-[1250px] ps-3 grid grid-cols-3 gap-[1rem]">
                    <div className='flex items-center flex-wrap gap-7 md:gap-[1.5rem] col-span-2 h-fit'>
                        {data && data.length > 0 ? (
                            data.slice(0, 3).map((data) => {
                                const { title, description, buttonText, price, Days, Sale, oldPrice, image, showCard, icon } = data.attributes
                                const { url } = image.data.attributes;
                                const Img = url ? `${imageUrl}${url}` : ""
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
                            data.slice(3).map((data) => {
                                const { title, description, buttonText, price, Days, Sale, oldPrice, image, icon } = data.attributes
                                const { url } = image.data.attributes;
                                const Img = url ? `${imageUrl}${url}` : ""
                                return (
                                    <Card key={data.id} Width={'max-w-[16rem]'} icon={icon} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} />
                                )
                            })
                        ) : (
                            <div>NO PACKAGE</div>
                        )}
                    </div>
                    <div ref={formRef} className="h-fit">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TourPage