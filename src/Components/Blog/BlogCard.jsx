import React from 'react'
import { imageUrl } from '../../utils/apiHelper';
import Image from 'next/image';
import Link from 'next/link';
import defaultImg from "../../public/imgs/gellary-2.webp"
import Icon from '../Icons';

const extractAndCleanDescription = (markdown) => {
    if (!markdown) return '';

    // Match paragraph lines while ignoring markdown syntax
    const paragraphRegex = /^(?![#\-*!1\.\s]|!\[)(.+)$/gm;
    const matches = markdown.match(paragraphRegex);

    if (matches && matches.length > 0) {
        let description = matches[0].trim();

        // Remove markdown links [text](url)
        description = description.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

        // Remove any remaining special characters, keeping letters, numbers, spaces, and basic punctuation
        description = description.replace(/[^a-zA-Z0-9 .,!?'-]/g, '');

        return description.length > 100 ? description.slice(0, 100) + '...' : description;
    }

    return '';
};

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const BlogCard = ({ BlogTitle, BlogCardImage, blogContent, pageURL, createdAt }) => {
    const { url } = BlogCardImage?.data?.attributes || ""
    const imgUrl = imageUrl()
    const cardImg = url ? `${imgUrl}${url}` : defaultImg
    const slug = pageURL ? pageURL.replace(/[^A-Za-z0-9]/g, '-').toLowerCase() : BlogTitle.replace(/[^A-Za-z0-9]/g, '-').toLowerCase();

    return (
        <div className="max-w-[23rem] md:max-w-[14rem] lg:max-w-[19rem] xl:max-w-[23rem] border h-fit md:h-[33rem] md:max-h-[33rem] border-gray-200 rounded-lg shadow">
            <div className='h-[18rem] md:h-[16rem] xl:h-[18rem] relative'>
                <span className='absolute bg-[#d3a102] text-white py-[3px] px-[10px] top-[10px]'>{formatDate(createdAt)}</span>
                <Image className="rounded-t-lg h-full object-cover" src={cardImg} alt="cardImg" width={600} height={600} loading='lazy' />
            </div>
            <div className="py-5 px-[15px] h-[45%] md:h-[50%] xl:h-[45%] flex justify-between items-start flex-col">
                <div>
                    <Link href={`/blog/${slug}/`} className="mb-4 text-2xl md:text-[1rem] lg:text-[20px] font-bold md:leading-[1.4rem] tracking-tight text-[#ff6600]">{BlogTitle}</Link>
                    <p className="my-3 font-normal md:text-[14px] xl:text-[16px] text-gray-700">{extractAndCleanDescription(blogContent)}</p>
                </div>
                <div className='flex justify-end w-full'>
                    <Link href={`/blog/${slug}/`} className="inline-flex items-center px-3 py-2 text-[1rem] font-medium text-center text-green-600 rounded-lg hover:bg-green-600 hover:text-white border-[2px] border-green-600">
                        READ MORE
                        <Icon name="arrow" className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard