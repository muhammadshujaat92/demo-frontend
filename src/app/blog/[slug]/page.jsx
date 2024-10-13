import React from 'react'
import BlogContent from '@/app/_(Component)/BlogContent'
import { fetchData } from '@/utils/apiHelper';

const Page = async ({ params }) => {
    const blogContent = fetchData(`blog-contents/${params.slug}?populate=blogData.bannerImage&populate=admin`)
    return <BlogContent blogContent={blogContent} />
}

export default Page