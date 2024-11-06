'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import ContactForm from './ContactForm';
import userImg from '@/public/user.png'
import Slider from './Slider';
import { imageUrl } from '@/utils/apiHelper';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '@/public/imgs/blogimg.webp'
import { blogContentThunk } from '../_redux/api/BlogContent';

const BlogContent = ({ blogContent }) => {
    const dispatch = useDispatch();
    const { blogData, admin } = blogContent?.attributes || {}
    const { data } = useSelector(state => state?.blogContentThunk?.data || {});
    const { Title, bannerHeading, paragraph1, paragraph2, bannerImage } = blogData || {};
    const { Name, paragraph } = admin || {}
    const { url } = bannerImage?.data?.attributes || {}
    const imgUrl = imageUrl()
    const bannerImg = url ? `${imgUrl}${url}` : ""
    console.log(data);


    useEffect(() => {
        dispatch(blogContentThunk());
    }, [dispatch]);


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
                                priority
                                style={{ objectFit: "cover" }}
                            />
                        )
                    }
                    <div className='flex justify-center imgae'>
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
                            <Slider imgData={data} />
                            <div className="bg-[#f2f2f2] p-[1rem] mt-2">
                                <h1 className="font-semibold text-[20px] mb-4">{Name}</h1>
                                <div className="flex gap-[1rem]">
                                    <Image src={userImg} alt="img" width={80} height={80} />
                                    <p className="text-[15px]">{paragraph}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="h-full relative">
                        <div className="sticky top-[2%] right-0">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogContent