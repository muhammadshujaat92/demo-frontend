'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <h1 className='font-sancoaleSoftened text-[28px] bg-orange-500 py-[1px] px-4 text-white rounded-t-xl text-center'>LISTEN TO OUR TRAVELERS</h1>
            <div>
                <div className="w-full bg-gray-200 rounded-b-xl h-[480px]">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper h-full"
                    >
                        <SwiperSlide className='pt-8 px-8'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, modi. Minus dolore exercitationem nesciunt molestias, ullam voluptates corrupti porro temporibus ipsa laborum rerum sed consequuntur quae blanditiis corporis repellendus. Aliquid sit nihil eveniet quasi maiores, ipsum corrupti iste odit vel consequuntur nisi veniam nesciunt sint laborum, nobis reiciendis alias voluptates.</p>
                            <div className='flex items-center gap-3 mt-8 me-6 justify-end'>
                                <div>
                                    <h1 className='text-lg text-orange-500 font-semibold'>M Shujaat,</h1>
                                    <p className='text-sm font-semibold mt-1 text-green-600'>Germany</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pt-8 px-8'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, modi. Minus dolore exercitationem nesciunt molestias, ullam voluptates corrupti porro temporibus ipsa laborum rerum sed consequuntur quae blanditiis corporis repellendus. Aliquid sit nihil eveniet quasi maiores, ipsum corrupti iste odit vel consequuntur nisi veniam nesciunt sint laborum, nobis reiciendis alias voluptates.</p>
                            <div className='flex items-center gap-3 mt-8 me-6 justify-end'>
                                <div>
                                    <h1 className='text-lg text-orange-500 font-semibold'>M Shujaat,</h1>
                                    <p className='text-sm font-semibold mt-1 text-green-600'>Germany</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='pt-8 px-8'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, modi. Minus dolore exercitationem nesciunt molestias, ullam voluptates corrupti porro temporibus ipsa laborum rerum sed consequuntur quae blanditiis corporis repellendus. Aliquid sit nihil eveniet quasi maiores, ipsum corrupti iste odit vel consequuntur nisi veniam nesciunt sint laborum, nobis reiciendis alias voluptates.</p>
                            <div className='flex items-center gap-3 mt-8 me-6 justify-end'>
                                <div>
                                    <h1 className='text-lg text-orange-500 font-semibold'>M Shujaat,</h1>
                                    <p className='text-sm font-semibold mt-1 text-green-600'>Germany</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Slider