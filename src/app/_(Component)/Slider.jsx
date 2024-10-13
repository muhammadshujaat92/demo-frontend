'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImg from '@/public/sliderImg.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
    return (
        <Swiper
            // spaceBetween={30}
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
            <SwiperSlide>
                <div className="w-[9rem] py-[1.5rem]">
                    <Image src={sliderImg} width={130} height={130} alt="img" className="w-full h-full" />
                    <p className="text-[14px] text-center text-[#337ab7] font-semibold">Explore New Markets: Outsource Business Development.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[9rem] py-[1.5rem]">
                    <Image src={sliderImg} width={130} height={130} alt="img" className="w-full h-full" />
                    <p className="text-[14px] text-center text-[#337ab7] font-semibold">Explore New Markets: Outsource Business Development.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[9rem] py-[1.5rem]">
                    <Image src={sliderImg} width={130} height={130} alt="img" className="w-full h-full" />
                    <p className="text-[14px] text-center text-[#337ab7] font-semibold">Explore New Markets: Outsource Business Development.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[9rem] py-[1.5rem]">
                    <Image src={sliderImg} width={130} height={130} alt="img" className="w-full h-full" />
                    <p className="text-[14px] text-center text-[#337ab7] font-semibold">Explore New Markets: Outsource Business Development.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[9rem] py-[1.5rem]">
                    <Image src={sliderImg} width={130} height={130} alt="img" className="w-full h-full" />
                    <p className="text-[14px] text-center text-[#337ab7] font-semibold">Explore New Markets: Outsource Business Development.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[9rem] py-[1.5rem]">
                    <Image src={sliderImg} width={130} height={130} alt="img" className="w-full h-full" />
                    <p className="text-[14px] text-center text-[#337ab7] font-semibold">Explore New Markets: Outsource Business Development.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[9rem] py-[1.5rem]">
                    <Image src={sliderImg} width={130} height={130} alt="img" className="w-full h-full" />
                    <p className="text-[14px] text-center text-[#337ab7] font-semibold">Explore New Markets: Outsource Business Development.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;