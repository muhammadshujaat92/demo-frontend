'use client'
import { useEffect } from 'react';
import { cardThunk } from '../../app/_redux/api/Card';
import defaultImg from '../../public/imgs/India-tour-package.webp'
import discountImg from '../../public/imgs/discount.webp'
import { useDispatch, useSelector } from 'react-redux';
import { imageUrl } from '../../utils/apiHelper';
import Image from 'next/image';
import { sancoaleSoftened } from '../Font';
import Card from '../Card';
import ContactForm from '../ContactForm';
import Link from 'next/link';
import discBgImg from '../../public/imgs/discBgImg.webp'

const TourPage = ({ pageData }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardThunk())
    }, [dispatch]);

    const { data } = useSelector(state => state?.cardThunk?.items || {});
    const imgUrl = imageUrl()

    const { Banner, bannerHeading, bannerParagraph, discountHeading, discountParagraph, discountBtnText, discountBtnUrl } = pageData?.[0]?.attributes || {}
    const { url } = Banner?.data?.attributes || {}
    const BannerImg = url ? `${imgUrl}${url}` : defaultImg;

    const formatUrl = (url) => {
        if (!url) return "#";
        try {
            const urlObj = new URL(url, "http://indiayaatra.com");
            urlObj.searchParams.forEach((v, k) => urlObj.searchParams.set(k, v.toLowerCase().replace(/\s+/g, "-")));
            return urlObj.pathname + urlObj.search;
        } catch {
            return "#";
        }
    };


    return (
        <div>
            <section>
                <div className={`relative h-[20rem] flex items-center justify-center xl:block md:h-[30rem]`}>
                    <Image
                        src={BannerImg}
                        alt='banner'
                        className={`w-full object-cover`}
                        fill
                        fetchPriority="high"
                        placeholder="blur"
                        blurDataURL="../../public/imgs/homeSection1BlurData.webp"
                        priority
                    />
                    {BannerImg && (
                        <div className={`flex justify-center inset-0 absolute bg-black bg-opacity-[0.4]`}>
                            <div className='md:absolute md:top-[10rem] w-full max-w-[1250px] flex flex-col justify-center md:justify-normal gap-[1rem] md:gap-8 px-3'>
                                <h1 style={{ fontFamily: sancoaleSoftened.style.fontFamily }} className='text-[35px] leading-[2.5rem] md:text-[50px] text-white'>{bannerHeading}</h1>
                                <p className='lg:text-[18px] text-white md:w-[550px]'>{bannerParagraph}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section className='flex justify-center'>
                <div className="py-8 md:py-12 w-full max-w-[1250px] md:px-3 xl:pe-0 xl:ps-3 lg:grid grid-cols-3 xl:gap-[1rem]">
                    <div className='flex items-center mb-[2rem] lg:pe-3 xl:pe-0 lg:mb-0 justify-center lg:justify-normal flex-wrap gap-7 md:gap-[1.5rem] col-span-2 h-fit'>
                        {data && data.length > 0 ? (
                            data.slice(0, 6).map((data) => {
                                const { title, description, buttonText, price, Days, Sale, oldPrice, image, readMoreURL, icon } = data.attributes
                                const { url } = image?.data?.attributes || "";
                                const Img = url ? `${imgUrl}${url}` : ""
                                return (
                                    <Card key={data.id} Width={'max-w-[16rem] md:max-w-[14rem] lg:max-w-[17rem] xl:max-w-[16rem]'} readMoreURL={readMoreURL} icon={icon} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} />
                                )
                            })
                        ) : (
                            <div>Loading...</div>
                        )}
                        <div className='relative min-w-full max-w-full h-[420px]'>
                            <Image alt='backImg' src={discBgImg} width={500} height={500} className='z-[-1] rounded-xl object-cover w-full h-full' loading='lazy' />
                            <div className="md:flex md:justify-evenly gap-[2rem] px-[1rem] pt-[3rem] pb-[2rem] text-white inset-0 absolute rounded-xl bg-orange-500 bg-opacity-[0.8]">
                                <div className="flex flex-col md:w-[28rem] gap-[1.5rem]">
                                    <div>
                                        <h2 className="font-semibold text-[30px] leading-[2.2rem]">{discountHeading}</h2>
                                        <p className="text-[15px] mt-[1rem]">{discountParagraph}</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <Link href={`${formatUrl(discountBtnUrl)}`} className="font-semibold bg-green-600 hover:bg-green-500 text-white py-[10px] px-[30px] text-[20px] rounded-[35px]">{discountBtnText}</Link>
                                    </div>
                                </div>
                                <div className="md:w-[20rem] md:h-[16rem] mt-[2rem] md:mt-0 hidden md:block">
                                    <Image src={discountImg} width={300} height={300} alt='img' className="w-full h-full" loading='lazy' />
                                </div>
                            </div>
                        </div>
                        {data && data.length > 0 ? (
                            data.slice(6).map((data) => {
                                const { title, description, buttonText, price, Days, Sale, oldPrice, image, icon } = data.attributes
                                const { url } = image?.data?.attributes || "";
                                const Img = url ? `${imgUrl}${url}` : ""
                                return (
                                    <Card key={data.id} Width={'max-w-[16rem] md:max-w-[14rem] lg:max-w-[17rem] xl:max-w-[16rem]'} icon={icon} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} />
                                )
                            })
                        ) : (
                            <div>loading...</div>
                        )}
                    </div>
                    <div className={`lg:h-full lg:relative px-3 lg:px-0`}>
                        <div className={`lg:sticky top-[2%] right-0`}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TourPage