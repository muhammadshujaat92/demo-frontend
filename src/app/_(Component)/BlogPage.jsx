'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import BlogCard from './BlogCard'
import { useDispatch, useSelector } from 'react-redux'
import { blogPageThunk } from '../_redux/api/BlogPage'
import { mainUrl } from '../page'
import ContactForm from './ContactForm'
import { blogCardThunk } from '../_redux/api/BlogCard'
import Spinner from './Spinner'
import { GiCheckMark } from "react-icons/gi";
import Link from 'next/link'

const BlogPage = () => {
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null);
    const { items, status } = useSelector(state => state?.blogPageThunk);
    const { data } = useSelector(state => state.blogCardThunk);

    const { bannerHeading, bannerImage } = items?.[0]?.attributes || {};
    const { url } = bannerImage?.data?.attributes || {};
    const bannerImg = url ? `${url}` : "";

    useEffect(() => {
        dispatch(blogPageThunk());
        dispatch(blogCardThunk());
    }, [dispatch]);

    // Memoized function to format the date
    const getDate = useMemo(() => {
        return (date) => {
            const dateObj = new Date(date);
            const year = dateObj.getUTCFullYear();
            const month = dateObj.toLocaleString('en-US', { month: 'short' });
            return `${month}-${year}`;
        };
    }, []);

    // Memoized function to filter posts by selected date
    const filteredData = useMemo(() => {
        if (selectedDate && data) {
            return data.filter(post => {
                const postDate = new Date(post.attributes.createdAt);
                const year = postDate.getUTCFullYear();
                const month = postDate.getUTCMonth() + 1; // 0-based month
                return `${year}-${month}` === selectedDate;
            });
        }
        return data;
    }, [selectedDate, data]);

    // Memoized unique dates extraction
    const uniqueDates = useMemo(() => {
        const unique = new Set();
        data?.forEach(post => {
            const postDate = new Date(post.attributes.createdAt);
            const year = postDate.getUTCFullYear();
            const month = postDate.getUTCMonth() + 1;
            unique.add(`${year}-${month}`);
        });
        return Array.from(unique); // Convert Set to array
    }, [data]);

    if (status === 'loading') {
        return (
            <div className='h-screen flex items-center justify-center'>
                <Spinner />
            </div>
        );
    }

    return (
        <div>
            <section className='mt-8'>
                <div className="relative h-[20rem] flex items-center justify-center xl:block md:h-[28rem] bg-black">
                    <Image src={bannerImg} alt='banner' width={1500} height={900} className='w-full h-full opacity-60' />
                    <div className='absolute xl:top-28 px-[5rem] flex flex-col gap-8'>
                        <h1 className='text-[60px] font-sancoaleSoftened text-white'>{bannerHeading}</h1>
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-3 py-[2rem] px-[5rem]'>
                <div className=' flex items-center flex-wrap gap-[3rem] col-span-2'>
                    {
                        filteredData && filteredData.length > 0 ? (
                            filteredData.map((post) => {
                                const { BlogCardTitle, BlogCardDescription, BlogCardImage, BlogCardButtonText } = post.attributes;
                                return (
                                    <BlogCard key={post.id} BlogCardTitle={BlogCardTitle} BlogCardDescription={BlogCardDescription} BlogCardButtonText={BlogCardButtonText} slug={post.id} BlogCardImage={BlogCardImage} />
                                )
                            })
                        ) : (
                            <div>No posts available for this date.</div>
                        )
                    }
                </div>
                <div>
                    <ContactForm />
                    <div className='border border-gray-500 rounded-2xl pb-4 bg-gray-200 mt-5'>
                        <h1 className='font-sancoaleSoftened text-white bg-orange-500 text-[28px] text-center rounded-t-2xl'>Recent Posts</h1>
                        <div className='px-5'>
                            {data && data.length > 0 ? (
                                data.slice(-5).map((data) => {
                                    const { BlogCardTitle } = data.attributes;
                                    return (
                                        <Link key={data.id} href={`/blog/${data.id}`}>
                                            <div className='bg-gray-200 flex items-center py-5 gap-2 border border-b-gray-400'>
                                                <GiCheckMark className='text-orange-500' />
                                                <h1 className='text-blue-500 font-semibold'>{BlogCardTitle}</h1>
                                            </div>
                                        </Link>
                                    );
                                })
                            ) : (
                                <div>..</div>
                            )}
                        </div>
                    </div>
                    <div className='border border-gray-500 rounded-2xl pb-4 bg-gray-200 mt-5'>
                        <h1 className='font-sancoaleSoftened text-white bg-orange-500 text-[28px] text-center rounded-t-2xl'>Archives</h1>
                        <div className='px-5'>
                            {uniqueDates.length > 0 ? (
                                uniqueDates.map((monthYearKey) => {
                                    const [year, month] = monthYearKey.split('-');
                                    const displayDate = getDate(`${year}-${month}-01`); // Create a valid date string
                                    return (
                                        <div
                                            key={monthYearKey}
                                            onClick={() => setSelectedDate(monthYearKey)}
                                            className='bg-gray-200 flex items-center py-5 gap-2 border border-b-gray-400 cursor-pointer'
                                        >
                                            <GiCheckMark className='text-orange-500' />
                                            <h1 className='text-blue-500 font-semibold'>{displayDate}</h1>
                                        </div>
                                    );
                                })
                            ) : (
                                <div>No archive data available.</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;