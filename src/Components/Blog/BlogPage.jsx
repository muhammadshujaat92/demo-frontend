'use client'
import React, { useEffect, useMemo, useState } from 'react'
import defaultImg from '../../public/imgs/blogimg.webp'
import { useDispatch, useSelector } from 'react-redux';
import { imageUrl } from '../../utils/apiHelper';
import { blogCardThunk } from '../../app/_redux/api/BlogCard';
import Image from 'next/image';
import { sancoaleSoftened } from '../Font';
import BlogCard from './BlogCard';
import ContactForm from '../ContactForm';
import Link from 'next/link';
import Icon from '../Icons';

const BlogPage = ({ blogData }) => {
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null);
    const [pageNo, setPageNo] = useState(1);  // Add state for pagination
    const { data, meta } = useSelector(state => state?.blogCardThunk?.data || {});


    const { bannerHeading, bannerImage } = blogData?.[0]?.attributes || {};
    const { url } = bannerImage?.data?.attributes || {};
    const imgUrl = imageUrl()
    const bannerImg = url ? `${imgUrl}${url}` : defaultImg;

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
                <div className={`relative h-[20rem] flex items-center justify-center xl:block md:h-[30rem]`}>
                    <Image
                        src={bannerImg}
                        alt='banner'
                        className={`w-full object-cover`}
                        layout="fill"
                        priority
                        fetchPriority="high"
                        placeholder="blur"
                        blurDataURL="/imgs/homeSection1BlurData.jpg"
                    />
                    {bannerImg && (
                        <div className={`flex justify-center inset-0 absolute bg-black bg-opacity-50`}>
                            <div className='md:absolute md:top-[10rem] w-full max-w-[1250px] flex flex-col justify-center md:justify-normal gap-[1rem] md:gap-8 px-3'>
                                <h1 style={{ fontFamily: sancoaleSoftened.style.fontFamily }} className='text-[35px] leading-[2.5rem] md:text-[50px] text-white'>{bannerHeading}</h1>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section className='flex justify-center'>
                <div className='lg:grid grid-cols-3 py-[2rem] w-full max-w-[1250px] px-3 xl:ps-3 gap-[1rem]'>
                    <div className='flex flex-wrap gap-[1.5rem] col-span-2 mb-[2rem] lg:mb-0 justify-center lg:justify-normal'>
                        {
                            filteredData && (
                                filteredData.map((post) => {
                                    const { BlogTitle, BlogCardImage, blogContent, pageURL } = post.attributes;
                                    return (
                                        <BlogCard key={post.id} BlogTitle={BlogTitle} BlogCardImage={BlogCardImage} blogContent={blogContent} pageURL={pageURL} />
                                    )
                                })
                            )
                        }
                    </div>
                    <div>
                        <ContactForm />
                        <div className='border border-gray-500 rounded-2xl pb-4 bg-gray-200 mt-5'>
                            <h1 className='font-sancoaleSoftened text-white bg-orange-500 text-[28px] text-center rounded-t-2xl'>Recent Posts</h1>
                            <div className='px-5'>
                                {data && (
                                    data.slice(-5).map((data) => {
                                        const { BlogTitle, pageURL } = data.attributes;
                                        const slug = pageURL ? pageURL.replace(/[^A-Za-z0-9]/g, '-').toLowerCase() : BlogTitle.replace(/[^A-Za-z0-9]/g, '-').toLowerCase();
                                        return (
                                            <Link key={data.id} href={`/blog/${slug}`}>
                                                <div className='bg-gray-200 flex items-center py-5 gap-2 border border-b-gray-400'>
                                                    <Icon name="check" className='text-orange-500' />
                                                    <h1 className='text-blue-500 font-semibold'>{BlogTitle}</h1>
                                                </div>
                                            </Link>
                                        );
                                    })
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
                                                <Icon name="check" className='text-orange-500' />
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
                        <ul className="mt-8 flex items-center -space-x-px h-10 text-base w-full max-w-[1250px]">
                            <button
                                onClick={() => setPageNo((prev) => prev - 1)}
                                disabled={pageNo === 1}
                                className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${pageNo === 1
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : ''
                                    }`}>
                                <Icon name="previous" className="w-3 h-3 rtl:rotate-180" />
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
                                <Icon name="next" className="w-3 h-3 rtl:rotate-180" />
                            </button>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;