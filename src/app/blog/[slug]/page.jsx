import React from 'react'
import BlogContent from '../../../Components/Blog/BlogContent'
import { fetchData } from '@/utils/apiHelper';

export async function generateMetadata({ params }) {
    const slug = params.slug.replace(/-/g, ' ');
    const metaData = await fetchData(`blog-contents/${slug}`);
    const { metaDescription } = metaData?.attributes?.attributes || {};

    return {
        title: slug || 'Default Title',
        description: metaDescription || 'Default Description',
        openGraph: {
            title: slug || 'Default Title',
            description: metaDescription || 'Default Description',
            images: [
                {
                    url: "https://indiayaatra.com/media/India_Yaatra_logo_1504ad9733.webp",
                }
            ]
        },
        alternates: {
            canonical: `https://indiayaatra.com/blog/${slug}`,
        }
    }
}

const Page = async ({ params }) => {
    const slug = params.slug.replace(/-/g, ' ');
    try {
        const blogData = await fetchData(`blog-contents/${slug}`)
        return <BlogContent blogData={blogData} />
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
}

export default Page