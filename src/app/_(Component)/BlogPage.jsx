'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlogCard from './BlogCard'
import { useDispatch, useSelector } from 'react-redux'
import ContactForm from './ContactForm'
import { blogCardThunk } from '../_redux/api/BlogCard'
import { GiCheckMark } from "react-icons/gi";
import { imageUrl } from '@/utils/apiHelper'

const BlogPage = ({ blogData }) => {
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null);
    const [pageNo, setPageNo] = useState(1);  // Add state for pagination
    const { data, meta } = useSelector(state => state?.blogCardThunk?.data || {});

    const { bannerHeading, bannerImage } = blogData?.[0]?.attributes || {};
    const { url } = bannerImage?.data?.attributes || {};
    const imgUrl = imageUrl()
    const bannerImg = url ? `${imgUrl}${url}` : "";

    const totalCards = meta?.pagination?.total || 0;  // Total number of posts
    const cardsPerPage = 8; // Show 6 cards per page
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const pageOptions = Array.from({ length: totalPages }, (_, i) => i + 1);

    useEffect(() => {
        dispatch(blogCardThunk({ pageSize: 8, page: pageNo }));
    }, [dispatch, pageNo]);

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
                        priority={true}
                    />
                    <div className='flex justify-center'>
                        <div className='absolute xl:top-32 w-full max-w-[1250px] ps-3 flex flex-col gap-8'>
                            <h1 className='text-[60px] font-sancoaleSoftened text-white'>{bannerHeading}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex justify-center'>
                <div className='grid grid-cols-3 py-[2rem] w-full max-w-[1250px] ps-3 gap-[1rem]'>
                    <div className='flex flex-wrap gap-[1.5rem] col-span-2'>
                        {
                            filteredData && filteredData.length > 0 ? (
                                filteredData.map((post) => {
                                    const { BlogCardTitle, BlogCardDescription, BlogCardImage, BlogCardButtonText } = post.attributes;
                                    return (
                                        <BlogCard key={post.id} BlogCardTitle={BlogCardTitle} BlogCardDescription={BlogCardDescription} BlogCardButtonText={BlogCardButtonText} slug={post.id} BlogCardImage={BlogCardImage} />
                                    )
                                })
                            ) : (
                                <div>No posts available</div>
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
                                    <div></div>
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
                                    <div>No data.</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-center flex-col pt-[2rem]">
                        <ul class="mt-8 flex items-center -space-x-px h-10 text-base w-full max-w-[1250px]">
                            <button
                                onClick={() => setPageNo((prev) => prev - 1)}
                                disabled={pageNo === 1}
                                className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${pageNo === 1
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : ''
                                    }`}>
                                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                Previous
                            </button>
                            {
                                pageOptions.map((page, index) => (
                                    <button key={index} className={`${pageNo === page ? "bg-[#f0f0f0]" : ""} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700`} onClick={() => setPageNo(page)}>
                                        {page}
                                    </button>
                                ))
                            }
                            <button
                                type="button"
                                onClick={() => setPageNo((prev) => prev + 1)}
                                disabled={pageNo === totalPages}
                                className={`${pageNo === totalPages ? "cursor-not-allowed" : ""} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700`}
                            >
                                Next
                                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </button>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;