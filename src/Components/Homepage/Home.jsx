'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeaderComponent from './HeaderComponent'
const HomeSection1 = dynamic(() => import('./HomeSection1'), { loading: () => <p>Loading...</p> })
const HomeSection2 = dynamic(() => import('./HomeSection2'), { loading: () => <p>Loading...</p> })
const HomeSection3 = dynamic(() => import('./HomeSection3'), { loading: () => <p>Loading...</p> })
const HomeSection4 = dynamic(() => import('./HomeSection4'), { loading: () => <p>Loading...</p> })
const HomeSection5 = dynamic(() => import('./HomeSection5'), { loading: () => <p>Loading...</p> })
const HomeSection6 = dynamic(() => import('./HomeSection6'), { loading: () => <p>Loading...</p> })
const HomeSection7 = dynamic(() => import('./HomeSection7'), { loading: () => <p>Loading...</p> })
const HomeSection8 = dynamic(() => import('./HomeSection8'), { suspense: true })
const ContactForm = dynamic(() => import('../ContactForm'))
import headerImg from '../../public/header.webp'
import Image from 'next/image';

const Home = ({ homeData }) => {
    const { slides, section1, section2, section3, section4, section5, sec6, faqSection, lastSectionData, bannerImage } = homeData?.[0]?.attributes || {};
    const { url } = bannerImage?.data?.attributes || {}
    const BannerImg = url ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : headerImg

    return (
        <>
            <div className='h-[528px] pb-[2rem] md:py-[2rem] relative'>
                <Image
                    src={BannerImg}
                    alt="banner_image"
                    className="object-cover"
                    layout="fill"
                    priority={true}
                    fetchPriority="high"
                    placeholder="blur"
                    blurDataURL="/imgs/homeSection1BlurData.jpg"
                />
                <div className='inset-0 absolute bg-black bg-opacity-60 md:flex justify-center items-center'>
                    <div className='w-full max-w-[1250px] md:flex justify-between'>
                        <div className='h-[25rem] flex flex-col justify-center gap-[5rem] md:gap-28 text-white'>
                            <HeaderComponent data={slides} />
                        </div>
                        <div className='xl:w-[340px] px-2 md:ps-0'>
                            <ContactForm fontSize={'[25px]'} />
                        </div>
                    </div>
                </div>
            </div>
            <HomeSection1 secData={section1} />
            <HomeSection2 data={section2} />
            <HomeSection3 data={section3} />
            <HomeSection4 data={section4} />
            <HomeSection5 data={section5} />
            <div className='py-[1.7rem] md:py-[3rem] flex justify-center'>
                <HomeSection6 item={sec6} />
            </div>
            <HomeSection7 data={faqSection} />
            <Suspense>
                <HomeSection8 data={lastSectionData} />
            </Suspense>
        </>
    );
};

export default Home;