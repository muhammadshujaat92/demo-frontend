import React from 'react'
import { fetchData } from '../../utils/apiHelper';
import BlogPage from '../../Components/Blog/BlogPage';

export async function generateMetadata() {
    try {
        const metaData = await fetchData("blog-pages");
        const { Tabtitle, metaDescription } = metaData?.[0]?.attributes || {};

        return {
            title: Tabtitle || 'Default Title',
            description: metaDescription || 'Default Description',
            openGraph: {
                title: Tabtitle || 'Default Title',
                description: metaDescription || 'Default Description',
                images: [
                    {
                        url: "https://indiayaatra.com/media/India_Yaatra_logo_1504ad9733.webp",
                    }
                ]
            },
            alternates: {
                canonical: `https://indiayaatra.com/blog`,
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