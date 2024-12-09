import React from 'react';
import TourPage from '../_(Component)/TourPage';
import { fetchData } from '@/utils/apiHelper';

export async function generateMetadata() {
    try {
        const metaData = await fetchData("tour-packages");
        const { Tabtitle, metaDescription, metaKeywords, canonicalUrl, ogTitle, ogDescription, ogImage } = metaData?.[0]?.attributes || {};

        return {
            title: Tabtitle || 'Default Title',
            description: metaDescription || 'Default Description',
            keywords: metaKeywords || "tour packages, default, keywords",
            openGraph: {
                title: ogTitle || Tabtitle,
                description: ogDescription || metaDescription,
                images: [
                    {
                        url: ogImage ? `https://indiayaatra.com${ogImage}` : "https://indiayaatra.com/media/India_Tour_Package_b46abceaa3.webp",
                    }
                ]
            },
            alternates: {
                canonical: canonicalUrl || `https://indiayaatra.com/tour-packages`,
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
        const tourPackages = await fetchData("tour-packages/?populate=*")
        return <TourPage pageData={tourPackages} />;
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
};

export default Page;