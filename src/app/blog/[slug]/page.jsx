import React from 'react'
import BlogContent from '../../../Components/Blog/BlogContent';
import { fetchData } from '../../../utils/apiHelper';

export async function generateMetadata({ params }) {
    const normalizedSlug = params.slug.replace(/-/g, " ")
    const metaData = await fetchData(`blog-contents/${normalizedSlug}`);
    const { metaDescription } = metaData?.attributes?.attributes || {};

    return {
        title: normalizedSlug || 'Default Title',
        description: metaDescription || 'Default Description',
        openGraph: {
            title: normalizedSlug || 'Default Title',
            description: metaDescription || 'Default Description',
            images: [
                {
                    url: "https://indiayaatra.com/media/India_Yaatra_logo_1504ad9733.webp",
                }
            ]
        },
        alternates: {
            canonical: `https://indiayaatra.com/blog/${params.slug}/`,
        }
    }
}

const Page = async ({ params }) => {
    try {
        const normalizedSlug = params.slug.replace(/-/g, " ")
        let blogData = await fetchData(`blog-contents/${normalizedSlug}`);

        return <BlogContent blogData={blogData} />
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
}

export default Page