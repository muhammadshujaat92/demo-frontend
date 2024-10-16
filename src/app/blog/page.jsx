import React from 'react'
import BlogPage from '../_(Component)/BlogPage'
import { fetchData } from '@/utils/apiHelper';

export const metadata = {
    title: 'Blogs'
}

const Page = async () => {
    try {
        const blogData = await fetchData("blog-pages?populate=*")
        return <BlogPage blogData={blogData} />
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
};

export default Page