import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageUrl } from '@/utils/apiHelper'
import defaultImg from "@/public/imgs/gellary-2.jpg"

const BlogCard = ({ BlogCardTitle, BlogCardDescription, BlogCardButtonText, slug, BlogCardImage }) => {
    const { url } = BlogCardImage?.data?.attributes || {}
    const imgUrl = imageUrl()
    const cardImg = url ? `${imgUrl}${url}` : ""
    let descriptionTruncate = BlogCardDescription?.split(' ')
    let truncatedBlogCardDescription = descriptionTruncate?.length > 15 ? `${descriptionTruncate.slice(0, 15).join(' ')}...` : BlogCardDescription;
    let titleTruncate = BlogCardTitle?.split(' ')
    let truncatedBlogCardTitle = titleTruncate?.length > 6 ? `${titleTruncate.slice(0, 6).join(' ')}...` : BlogCardTitle

    return (
        <div className="max-w-[23rem] border h-[33rem] max-h-[33rem] border-gray-200 rounded-lg shadow">
            <div className='h-[18rem]'>
                {
                    cardImg ? (
                        <Image className="rounded-t-lg h-full object-cover" src={cardImg} alt="cardImg" width={600} height={600} />

                    ) : (
                        <Image className="rounded-t-lg h-full object-cover" src={defaultImg} alt="cardImg" width={600} height={600} />
                    )
                }
            </div>
            <div className="p-5 h-[45%] flex justify-between items-start flex-col">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{truncatedBlogCardTitle}</h5>
                    <p className="mb-3 font-normal text-gray-700">{truncatedBlogCardDescription}</p>
                </div>
                <Link href={`/blog/${slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg">
                    {BlogCardButtonText}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard