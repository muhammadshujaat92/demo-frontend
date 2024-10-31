import React from 'react'
import BlogPage from '../_(Component)/BlogPage'
import { fetchData } from '@/utils/apiHelper';

export async function generateMetadata() {
    try {
        const blogData = await fetchData("blog-pages");
        const { Tabtitle, metaDescription } = blogData?.[0]?.attributes || {};

        return {
            title: Tabtitle || 'Default Title',
            description: metaDescription || 'Default Description',
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: 'Default Title',
            description: 'Default Description'
        };
    }
}

const Page = async () => {
    try {
        const blogData = await fetchData("blog-pages?populate=*");
        return <BlogPage blogData={blogData} />
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return <div>Oops! Something went wrong</div>
    }
};

export default Page;