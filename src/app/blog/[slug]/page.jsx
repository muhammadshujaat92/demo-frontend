import React from 'react'
import BlogContent from '@/app/_(Component)/BlogContent'
import { fetchData } from '@/utils/apiHelper';

export async function generateMetadata({ params }) {
    const metaData = await fetchData(`blog-contents/${params.slug}`);
    const { Tabtitle, metaDescription, metaKeywords, canonicalUrl, ogTitle, ogDescription, ogImage } = metaData?.attributes || {};

    return {
        title: Tabtitle || 'Default Title',
        description: metaDescription || 'Default Description',
        keywords: metaKeywords || "blog content, default, keywords",
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
            canonical: canonicalUrl || `https://indiayaatra.com/blog/${params.slug}`,
        }
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