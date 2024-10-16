import React from 'react'
import BlogContent from '@/app/_(Component)/BlogContent'
import { fetchData } from '@/utils/apiHelper';

export async function generateMetadata({ params }) {
    return {
        title: `Blog - ${params.slug}`,
    }
}

const Page = async ({ params }) => {
    try {
        const blogContent = await fetchData(`blog-contents/${params.slug}?populate=blogData.bannerImage&populate=admin`)
        return <BlogContent blogContent={blogContent} />
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
}

export default Page