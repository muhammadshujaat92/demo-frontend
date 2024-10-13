'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { mainUrl } from '@/app/page';
import { blogContentThunk } from '@/app/_redux/api/BlogContent';
import Spinner from './Spinner';
import ContactForm from './ContactForm';
import sliderImg from '@/public/sliderImg.jpg'
import userImg from '@/public/user.png'
import Slider from './Slider';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogContent = ({ blogContent }) => {
    const dispatch = useDispatch();
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const formRef = useRef();

    // useEffect(() => {
    //     dispatch(blogContentThunk(slug))
    // }, [dispatch, slug])

    useEffect(() => {
        ScrollTrigger.create({
            trigger: formRef.current,
            start: "top 2%",
            end: "top -110%",
            pin: true,
            scrub: true,
            pinSpacing: true
        });

        return () => {
            ScrollTrigger.killAll(); // Clean up on unmount
        };
    }, []);

    const { items, status } = useSelector(state => state?.blogContentThunk);
    const { blogData, admin } = blogContent?.attributes || {}
    const { Title, bannerHeading, paragraph1, paragraph2, bannerImage } = blogData || {};
    const { Name, paragraph } = admin || {}
    const { url } = bannerImage?.data?.attributes || {}
    const imageUrl = mainUrl()
    const bannerImg = url ? `${imageUrl}${url}` : ""

    // if (status === 'loading') {
    //     return (
    //         <div className='h-screen flex items-center justify-center'>
    //             <Spinner />
    //         </div>
    //     )
    // }

    if (blogData === null) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <h1 className='text-2xl'>No Blog</h1>
            </div>
        )
    }

    return (
        <div>
            <section>
                <div className={`relative h-[30rem] bg-black`}>
                    <Image
                        src={bannerImg}
                        alt='banner'
                        width={1500}
                        height={900}
                        className={`w-full h-full opacity-60`}
                        priority
                    />
                    <div className='flex justify-center'>
                        <div className='absolute xl:top-32 w-full max-w-[1250px] ps-3 flex flex-col gap-8'>
                            <h1 className='text-[60px] font-sancoaleSoftened text-white'>{bannerHeading}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex items-center flex-col'>
                <div className='py-[2rem] w-full max-w-[1250px] grid grid-cols-3 gap-[3rem] ps-3'>
                    <div className='col-span-2'>
                        <div>
                            <h1 className='font-bold text-[50px] mb-2'>{Title}</h1>
                            <p>{paragraph1}</p>
                            <br />
                            <p>{paragraph2}</p>
                        </div>
                        <section className="ps-3 py-[2rem]">
                            <h1 className="text-white bg-orange-500 font-semibold text-[25px] text-center">RECENT POSTS</h1>
                            <Slider />
                            <div className="bg-[#f2f2f2] p-[1rem] mt-2">
                                <h1 className="font-semibold text-[20px] mb-4">{Name}</h1>
                                <div className="flex gap-[1rem]">
                                    <Image src={userImg} alt="img" width={80} height={80} />
                                    <p className="text-[15px]">{paragraph}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div ref={formRef} className="h-fit">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogContent