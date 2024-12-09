import React from 'react'
import BlogPage from '../_(Component)/BlogPage'
import { fetchData } from '@/utils/apiHelper';

export async function generateMetadata() {
    try {
        const metaData = await fetchData("blog-pages");
        const { Tabtitle, metaDescription, metaKeywords, canonicalUrl, ogTitle, ogDescription, ogImage } = metaData?.[0]?.attributes || {};

        return {
            title: Tabtitle || 'Default Title',
            description: metaDescription || 'Default Description',
            keywords: metaKeywords || "blogs, default, keywords",
            openGraph: {
                title: ogTitle || Tabtitle,
                description: ogDescription || metaDescription,
                images: [
                    {
                        url: ogImage ? `https://indiayaatra.com/media/${ogImage.replace('/uploads', '')}` : "https://indiayaatra.com/media/India_Yaatra_logo_1504ad9733.webp",
                    }
                ]
            },
            alternates: {
                canonical: canonicalUrl || `https://indiayaatra.com/blog`,
            }
        };
    } catch (error) {
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