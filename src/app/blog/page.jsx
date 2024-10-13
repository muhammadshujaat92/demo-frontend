import React from 'react'
import BlogPage from '../_(Component)/BlogPage'
import { fetchData } from '@/utils/apiHelper';

const Page = async () => {
    const blogData = await fetchData("blog-pages?populate=*")
    return <BlogPage blogData={blogData} />
};

export default Page