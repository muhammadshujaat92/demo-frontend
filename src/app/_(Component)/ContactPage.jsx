'use client'
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { contactPageThunk } from "../_redux/api/Contact";
import ContactForm from "./ContactForm";
import Slider from "./Slider";
import Spinner from "./Spinner";
import userImg from '@/public/user.png'
import { mainUrl } from "../page";

const ContactPage = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state.contactPageThunk);
    const imageUrl = mainUrl()

    useEffect(() => {
        dispatch(contactPageThunk())
    }, [dispatch])


    const { Banner, bannerHeading, bannerParagraph, contactPageBox } = items?.[0]?.attributes || {}
    const { url } = Banner?.data?.attributes || {}
    const bannerImg = url ? `${url}` : ""

    return (
        <div>
            <section className='mt-8'>
                <div className='h-[28rem] bg-black relative'>
                    {bannerImg ? (
                        <Image src={bannerImg} alt='banner' width={1500} height={900} className='w-full h-full opacity-80' />
                    ) : (
                        <div className='w-full h-full'></div>
                    )}
                    <div className='absolute top-24 px-12 flex flex-col gap-8'>
                        <h1 className='text-[40px] text-white font-sancoaleSoftened'>{bannerHeading}</h1>
                        <p className='text-lg text-white font-bold'>{bannerParagraph}</p>
                    </div>
                </div>
            </section>
            <section className='px-12 py-10 grid grid-cols-3 gap-5'>
                <ContactForm colspan2={"col-span-2"} />
                <Slider />
            </section>
            <section className='flex justify-center items-center gap-36 py-5'>

                {
                    status === 'loading' ? (
                        <Spinner />
                    ) : (
                        contactPageBox || contactPageBox?.length || {} > 0 ? (
                            contactPageBox.map((data) => {
                                const { title, text, Theme, headingTheme } = data || {}
                                return (
                                    <div className='w-[20rem]' key={data.id}>
                                        <h1 className={`bg-${headingTheme} py-3 px-4 rounded-t-3xl font-semibold text-center flex items-center text-lg`}>
                                            <Image src={userImg} alt='' width={30} height={30} className='me-4' />
                                            {title}</h1>
                                        <p className={`bg-${Theme} p-3`}>{text}</p>
                                    </div>
                                )
                            })
                        ) : (
                            <div>----</div>
                        )
                    )
                }
            </section>
        </div>
    )
}

export default ContactPage