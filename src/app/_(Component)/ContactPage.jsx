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
    useEffect(() => {
        dispatch(contactPageThunk())
    }, [dispatch])

    const { items, status } = useSelector(state => state.contactPageThunk);
    const imageUrl = mainUrl()

    const { Banner, bannerHeading, bannerParagraph, contactPageBox } = items?.[0]?.attributes || {}
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
                <div className='h-[30rem] bg-black relative'>
                    <Image src={bannerImg} alt='banner' priority width={1500} height={900} className='w-full h-full opacity-80' />
                    <div className='absolute top-28 px-[5rem] flex flex-col gap-8'>
                        <h1 className='text-[40px] text-white font-sancoaleSoftened'>{bannerHeading}</h1>
                        <p className='text-lg text-white font-bold'>{bannerParagraph}</p>
                    </div>
                </div>
            </section>
            <section className='px-[5rem] py-10 grid grid-cols-3 gap-5'>
                <ContactForm colspan2={"col-span-2"} />
                <Slider />
            </section>
            <h1 className="text-[30px] px-[5rem]">Heading</h1>
            <section className='flex justify-center items-center gap-36 py-5 px-[5rem]'>
                {contactPageBox && contactPageBox.length > 0 ? (
                    contactPageBox.map((data, index) => {
                        const { title, text } = data || {};
                        const h1BgColor = index === 0 ? 'bg-orange-500' : index === 1 ? 'bg-gray-500' : 'bg-green-600';
                        const pBgColor = index === 0 ? 'bg-orange-200' : index === 1 ? 'bg-gray-300' : 'bg-green-400';

                        return (
                            <div className='w-[20rem]' key={data.id}>
                                <h1 className={`${h1BgColor} text-white py-3 px-4 rounded-t-3xl font-semibold text-center flex items-center text-lg`}>
                                    <Image src={userImg} alt='' width={30} height={30} className='me-4' />
                                    {title}
                                </h1>
                                <p className={`${pBgColor} p-3`}>
                                    {text}
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <div></div>
                )}
            </section>
        </div>
    )
}

export default ContactPage