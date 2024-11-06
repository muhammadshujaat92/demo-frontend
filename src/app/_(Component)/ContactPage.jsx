'use client'
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { imageUrl } from "@/utils/apiHelper";
import ContactForm from "./ContactForm";
import defaultImg from '@/public/imgs/Contact-IndiaYaatra.webp'

const ContactPage = ({ contactData }) => {
    const searchParams = useSearchParams();
    const keyword = searchParams.get('rh');

    const toSlug = (text) => {
        return text.replace(/[^A-Za-z0-9]/g, ' ');
    }

    const imgUrl = imageUrl()

    const { Banner, bannerHeading, bannerParagraph, contactPageBox, blowHeading, tst, getInTouch } = contactData?.[0]?.attributes || {};
    const { heading, paragraph, conDetail } = getInTouch || {}
    const { Heading, para, rating, feData, userImgs, icon } = tst || {}
    const { url } = Banner?.data?.attributes || {}
    const bannerImg = url ? `${imgUrl}${url}` : ""
    const { data } = userImgs || {}

    return (
        <div>
            <section>
                <div className={`relative h-[30rem]`}>
                    {
                        bannerImg ? (
                            <Image
                                src={bannerImg}
                                alt='banner'
                                width={1500}
                                height={900}
                                className={`w-full h-full`}
                                priority
                                fetchPriority="high"
                                placeholder="blur"
                                blurDataURL="/imgs/homeSection1BlurData.jpg"
                                style={{ objectFit: "cover" }}
                            />
                        ) : (
                            <Image
                                src={defaultImg}
                                alt='banner'
                                width={1500}
                                height={900}
                                className={`w-full h-full`}
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        )
                    }
                    <div className="flex justify-center imgae">
                        <div className='absolute top-28 w-full max-w-[1250px] ps-3 flex flex-col gap-8'>
                            <h1 className='text-[40px] text-white font-sancoaleSoftened'>{bannerHeading} {keyword && `- ${toSlug(keyword)}`}</h1>
                            <p className='text-lg text-white font-bold'>{bannerParagraph}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center">
                <section className='py-10 grid grid-cols-3 gap-5 w-full max-w-[1250px] ps-3'>
                    <ContactForm colspan2={"col-span-2"} />
                    <div className="bg-gray-100 rounded-2xl py-[1.5rem] px-[2rem] flex flex-col gap-[2rem]">
                        <div>
                            <h1 className="text-[30px] font-semibold">{heading}</h1>
                            <p className="my-2">{paragraph}</p>
                        </div>
                        <ul className='flex flex-col gap-[2rem]'>
                            {
                                conDetail && conDetail.length > 0 ? (
                                    conDetail.map((data) => (
                                        <li key={data.id} className="flex items-center gap-2">
                                            <i className={`py-[12px] px-3 text-[20px] border border-gray-500 rounded-full ${data.Icon}`}></i>
                                            <span className="text-[18px]">{data.contact}</span>
                                        </li>
                                    ))
                                ) : (
                                    <span></span>
                                )
                            }
                        </ul>
                    </div>
                </section>
                <div className="grid grid-cols-3 max-w-[1250px] w-full ps-3">
                    <div className="max-w-sm bg-white rounded-lg flex flex-col justify-between h-[20rem] pb-[2rem] ps-3">
                        <div>
                            <h1 className='text-[34px] mb-6 font-bold'>{Heading}</h1>
                            <p className="text-gray-700 font-semibold">{para}</p>
                        </div>
                        <div className='flex items-center gap-[1.6rem]'>
                            <div className="flex -space-x-4 rtl:space-x-reverse">
                                {
                                    data && data?.length > 0 ? (
                                        data.map((data) => {
                                            const { url } = data?.attributes || {}
                                            const Img = url ? `${imgUrl}${url}` : ""
                                            return (
                                                <Image key={data.id} className="w-10 h-10 border-white rounded-full dark:border-gray-800" src={Img} width={100} height={100} alt="" />
                                            )
                                        })
                                    ) : (
                                        <div></div>
                                    )
                                }
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <i className={`text-yellow-400 text-[20px] ${icon}`}></i>
                                    <i className={`text-yellow-400 text-[20px] ${icon}`}></i>
                                    <i className={`text-yellow-400 text-[20px] ${icon}`}></i>
                                    <i className={`text-yellow-400 text-[20px] ${icon}`}></i>
                                    <i className={`text-yellow-400 text-[20px] ${icon}`}></i>
                                </div>
                                <p className='text-gray-400'>{rating}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex items-center gap-[2rem]">
                        {
                            feData && feData.length > 0 ? (
                                feData.map((data) => (
                                    <div key={data.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-col justify-between h-[20rem]">
                                        <p className="font-normal text-gray-700">{data.reviewText}</p>
                                        <div>
                                            <h1 className='font-semibold text-[25px]'>{data.giver}</h1>
                                            <p className='text-orange-500 font-semibold'>{data.giverCountry}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                </div>
                <h1 className="text-[35px] w-full font-semibold max-w-[1250px] ps-3 pt-[2rem]">{blowHeading}</h1>
                <section className='flex justify-center items-center gap-36 py-5 w-full max-w-[1250px] ps-3'>
                    {contactPageBox && contactPageBox.length > 0 ? (
                        contactPageBox.map((data, index) => {
                            const { title, text } = data || {};
                            const h1BgColor = index === 0 ? 'bg-orange-500' : index === 1 ? 'bg-gray-500' : 'bg-green-600';
                            const pBgColor = index === 0 ? 'bg-orange-200' : index === 1 ? 'bg-gray-300' : 'bg-green-400';

                            return (
                                <div className='w-[20rem]' key={data.id}>
                                    <h1 className={`${h1BgColor} text-white py-3 px-4 rounded-t-3xl font-semibold text-center flex items-center text-lg`}>
                                        <i className={`me-4 ${data.icon}`}></i>
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
        </div>
    )
}

export default ContactPage