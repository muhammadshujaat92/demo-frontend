'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { mainUrl } from '@/app/page';
import { blogContentThunk } from '@/app/_redux/api/BlogContent';
import Spinner from './Spinner';
import ContactForm from './ContactForm';

const BlogContent = ({ slug }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(blogContentThunk(slug))
    }, [dispatch, slug])

    const { items, status } = useSelector(state => state?.blogContentThunk);
    const { blogData } = items?.attributes || {}
    const { Title, bannerHeading, paragraph1, paragraph2, bannerImage } = blogData || {}
    const { url } = bannerImage?.data?.attributes || {}
    const imageUrl = mainUrl()
    const bannerImg = url ? `${url}` : ""

    if (status === 'loading') {
        return (
            <div className='h-screen flex items-center justify-center'>
                <Spinner />
            </div>
        )
    }

    if (blogData === null) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <h1 className='text-2xl'>No Blog</h1>
            </div>
        )
    }

    return (
        <div>
            <section className='mt-8'>
                <div className="relative h-[20rem] flex items-center justify-center xl:block md:h-[30rem] bg-black">
                    <Image src={url} alt='banner' width={1500} priority height={900} className='w-full h-full opacity-60' />
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
                        <h1 className='font-bold text-[50px] mb-2'>{Title}</h1>
                        <p>{paragraph1}</p>
                        <br />
                        <p>{paragraph2}</p>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
                <section className='grid grid-cols-3 py-[2rem] w-full max-w-[1250px] ps-3'>
                    <ContactForm colspan2={'col-span-2'} />
                </section>
            </section>
        </div>
    )
}

export default BlogContent