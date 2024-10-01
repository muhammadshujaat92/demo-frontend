'use client'
import Image from "next/image";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { cardThunk } from "../_redux/api/Card";
import { tourPackageThunk } from "../_redux/api/TourPackage";
import Spinner from "./Spinner";
import { mainUrl } from "../page";

const TourPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardThunk())
        dispatch(tourPackageThunk())
    }, [dispatch]);

    const { items, status } = useSelector(state => state?.cardThunk || {});
    const state = useSelector(state => state?.tourPackageThunk || {});
    const imageUrl = mainUrl()

    const { Banner, bannerHeading, bannerParagraph } = state?.items?.[0]?.attributes || {}
    const { url } = Banner?.data?.attributes || {}
    const bannerImg = url ? `${url}` : ""

    if (status === 'loading') {
        return (
            <div className='h-screen flex items-center justify-center'>
                <Spinner />
            </div>
        )
    }

    return (
        <div>
            <section className='mt-8'>
                <div className="relative h-[20rem] flex items-center justify-center xl:block md:h-[30rem] bg-black">
                    <Image src={bannerImg} alt='banner' width={1500} height={900} className='w-full h-full opacity-60' priority />
                    <div className='absolute xl:top-32 px-[5rem] flex flex-col gap-8'>
                        <h1 className='text-[42px] font-sancoaleSoftened text-white'>{bannerHeading}</h1>
                        <p className='lg:text-lg text-white lg:font-bold'>{bannerParagraph}</p>
                    </div>
                </div>
            </section>
            <section className='py-12 md:px-[5rem] flex gap-[1rem]'>
                <div className=' flex items-center flex-wrap gap-7 md:gap-[1rem]'>
                    {items && items.length > 0 ? (
                        items.map((data) => {
                            const { title, description, buttonText, price, Days, Sale, oldPrice, image, showCard } = data.attributes
                            const { url } = image.data.attributes;
                            const Img = url ? `${url}` : ""
                            return (
                                <Card key={data.id} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} />
                            )
                        })
                    ) : (
                        <div>NO PACKAGE</div>
                    )}
                </div>
                <div className="w-[33rem]">
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}

export default TourPage