'use client'
import defaultImg from '../../public/imgs/Contact-IndiaYaatra.webp'
import { imageUrl } from '../../utils/apiHelper';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import ContactForm from '../ContactForm';
import { sancoaleSoftened } from '../Font';

const ContactPage = ({ contactData }) => {
    const searchParams = useSearchParams();
    const keyword = searchParams.get('rh');

    const toSlug = (text) => {
        return text
            .split('-') // Split by hyphens
            .map(text => text.charAt(0).toUpperCase() + text.slice(1)) // Capitalize first letter
            .join(' '); // Join back with spaces
    }


    const imgUrl = imageUrl()

    const { Banner, bannerHeading, bannerParagraph, contactPageBox, blowHeading, tst, getInTouch } = contactData?.[0]?.attributes || {};
    const { heading, paragraph, conDetail } = getInTouch || {}
    const { Heading, para, rating, feData, userImgs, icon } = tst || {}
    const { url } = Banner?.data?.attributes || {}
    const bannerImg = url ? `${imgUrl}${url}` : defaultImg
    const { data } = userImgs || {}

    return (
        <div>
            <section>
                <div className={`relative h-[20rem] flex items-center justify-center xl:block md:h-[30rem]`}>
                    <Image
                        src={bannerImg}
                        alt="banner"
                        className="w-full object-cover"
                        fill
                        fetchPriority="high"
                        priority
                        placeholder="blur"
                        blurDataURL="../../public/imgs/homeSection1BlurData.webp"
                    />
                    {bannerImg && (
                        <div className={`flex justify-center inset-0 absolute bg-black bg-opacity-[0.4]`}>
                            <div className='md:absolute md:top-[10rem] w-full max-w-[1250px] flex flex-col justify-center md:justify-normal gap-[1rem] md:gap-8 px-3'>
                                <h1 style={{ fontFamily: sancoaleSoftened.style.fontFamily }} className='text-[35px] leading-[2.5rem] md:text-[50px] text-white'>{bannerHeading} {keyword && `- ${toSlug(keyword)}`}</h1>
                                <p className='lg:text-[18px] text-white md:w-[550px]'>{bannerParagraph}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section >
            <div className="flex flex-col items-center">
                <section className='py-10 md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 w-full max-w-[1250px] px-3 xl:ps-3'>
                    <ContactForm colspan2={"xl:col-span-2"} />
                    <div className="bg-gray-100 rounded-2xl py-[1.5rem] px-3 md:px-[2rem] flex flex-col gap-[2rem] my-[2rem] md:my-0">
                        <div>
                            <h2 className="text-[30px] font-semibold">{heading}</h2>
                            <p className="my-2">{paragraph}</p>
                        </div>
                        <ul className='flex flex-col gap-[2rem]'>
                            {
                                conDetail && (
                                    conDetail.map((data) => (
                                        <li key={data.id} className="flex items-center gap-2">
                                            <i className={`py-[12px] px-3 text-[20px] border border-gray-500 rounded-full ${data.Icon}`}></i>
                                            <span className="text-[18px]">{data.contact}</span>
                                        </li>
                                    ))
                                )
                            }
                        </ul>
                    </div>
                </section>
                <div className="md:grid grid-cols-3 md:gap-[1rem] xl:gap-0 max-w-[1250px] w-full px-3 md:ps-3">
                    <div className="max-w-sm bg-white rounded-lg flex flex-col justify-between h-[23rem] pb-[2rem] px-3 md:ps-3">
                        <div>
                            <h2 className='text-[34px] md:text-[30px] xl:text-[34px] mb-6 font-bold'>{Heading}</h2>
                            <p className="text-gray-700 font-semibold">{para}</p>
                        </div>
                        <div className='md:flex items-center gap-[1.6rem]'>
                            <div className="flex -space-x-4 rtl:space-x-reverse">
                                {
                                    data && (
                                        data.map((data) => {
                                            const { url } = data?.attributes || {}
                                            const Img = url ? `${imgUrl}${url}` : ""
                                            return (
                                                <Image key={data.id} className="w-10 h-10 border-white rounded-full dark:border-gray-800" src={Img} width={100} height={100} alt="img" loading='lazy' />
                                            )
                                        })
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
                    <div className="col-span-2 flex flex-col md:flex-row items-center gap-3 xl:gap-[2rem]">
                        {
                            feData && (
                                feData.map((data) => (
                                    <div key={data.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-col justify-between h-[23rem]">
                                        <p className="font-normal text-gray-700 text-[12px] xl:text-[15px]">{data.reviewText}</p>
                                        <div>
                                            <span className='font-semibold text-[25px] block'>{data.giver}</span>
                                            <span className='text-orange-500 font-semibold'>{data.giverCountry}</span>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
                <h2 className="text-[35px] w-full font-semibold max-w-[1250px] px-3 xl:ps-3 pt-[2rem]">{blowHeading}</h2>
                <section className='flex flex-col md:flex-row justify-center items-center gap-[1rem] xl:gap-36 py-5 w-full max-w-[1250px] px-3 md:ps-3'>
                    {contactPageBox && (
                        contactPageBox.map((data, index) => {
                            const { title, text } = data || {};
                            const h1BgColor = index === 0 ? 'bg-orange-500' : index === 1 ? 'bg-gray-500' : 'bg-green-600';
                            const pBgColor = index === 0 ? 'bg-orange-200' : index === 1 ? 'bg-gray-300' : 'bg-green-400';

                            return (
                                <div className='md:w-[20rem]' key={data.id}>
                                    <h3 className={`${h1BgColor} text-white py-3 px-4 rounded-t-3xl font-semibold text-center flex items-center text-lg md:text-[1rem] xl:text-lg`}>
                                        <i className={`me-4 ${data.icon}`}></i>
                                        {title}
                                    </h3>
                                    <p className={`${pBgColor} p-3 text-[15px] md:text-[13px] xl:text-[15px] h-[8rem] max-h-[8rem] md:h-[10rem] md:max-h-[10rem] xl:h-[8rem] xl:max-h-[8rem] flex items-center`}>
                                        {text}
                                    </p>
                                </div>
                            );
                        })
                    )}
                </section>
            </div>
        </div >
    )
}

export default ContactPage