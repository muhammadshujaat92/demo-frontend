import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageUrl } from '@/utils/apiHelper'
import defaultImg from "@/public/imgs/gellary-2.jpg"

const extractAndCleanDescription = (markdown) => {
    if (!markdown) return '';

    const paragraphRegex = /^(?![#\-*!1\.\s]|!\[)(.+)$/gm;
    const matches = markdown.match(paragraphRegex);

    if (matches && matches.length > 0) {
        const description = matches[0].trim();
        return description.length > 100 ? description.slice(0, 100) + '...' : description;
    }

    return '';
};
const BlogCard = ({ BlogTitle, BlogCardImage, blogContent }) => {
    const { url } = BlogCardImage?.data?.attributes || ""
    const imgUrl = imageUrl()
    const cardImg = url ? `${imgUrl}${url}` : defaultImg
    const slug = BlogTitle.replace(/[^A-Za-z0-9]/g, '-');

    return (
        <div className="max-w-[23rem] md:max-w-[14rem] lg:max-w-[19rem] xl:max-w-[23rem] border h-[33rem] max-h-[33rem] border-gray-200 rounded-lg shadow">
            <div className='h-[18rem] md:h-[16rem] xl:h-[18rem]'>
                <Image className="rounded-t-lg h-full object-cover" src={cardImg} alt="cardImg" width={600} height={600} />
            </div>
            <div className="py-5 px-[15px] h-[45%] md:h-[50%] xl:h-[45%] flex justify-between items-start flex-col">
                <div>
                    <h5 className="mb-4 text-2xl md:text-[1rem] lg:text-[20px] font-bold md:leading-[1.4rem] tracking-tight">{BlogTitle}</h5>
                    <p className="mb-3 font-normal md:text-[14px] xl:text-[16px] text-gray-700">{extractAndCleanDescription(blogContent)}</p>
                </div>
                <div className='flex justify-end w-full'>
                    <Link href={`/blog/${slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg">
                        READ MORE
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard