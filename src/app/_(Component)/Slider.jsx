'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import { baseUrl } from '@/utils/apiHelper';
import Link from 'next/link';

const Slider = ({ imgData }) => {
    return (
        <Swiper
            slidesPerView={'auto'}
            loop={true}
            speed={6500}
            freeMode={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper ease-linear"
        >

            {
                imgData ? (
                    imgData.slice(-7).map((item) => {
                        const { BlogCardTitle, BlogCardImage } = item.attributes;
                        const { url } = BlogCardImage.data.attributes;
                        const blogImg = url ? `${baseUrl}${url}` : ""
                        return (
                            <SwiperSlide key={item.id}>
                                <div className="w-[9rem] py-[1.5rem]">
                                    <Image src={blogImg} width={130} height={130} alt="img" className="w-full min-h-[8rem] max-h-[8rem]" />
                                    <Link href={`/blog/${item.id}`} className="mt-1 text-[14px] text-[#337ab7] font-semibold">
                                        <p className='text-center'>{BlogCardTitle}</p>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })
                ) : (
                    <span></span>
                )
            }
        </Swiper>
    );
}

export default Slider;