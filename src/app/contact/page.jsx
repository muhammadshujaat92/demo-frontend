import React from 'react'
import ContactPage from '../_(Component)/ContactPage'
import { fetchData } from '@/utils/apiHelper';

export async function generateMetadata() {
    try {
        const metaData = await fetchData("contact-uses");
        const { Tabtitle, metaDescription, metaKeywords, canonicalUrl, ogTitle, ogDescription, ogImage } = metaData?.[0]?.attributes || {};

        return {
            title: Tabtitle || 'Default Title',
            description: metaDescription || 'Default Description',
            keywords: metaKeywords || "contact, default, keywords",
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
                canonical: canonicalUrl || `https://indiayaatra.com/contact`,
            }
        };
    } catch (error) {
        return {
            title: 'Default Title',
            description: 'Default Description'
        };
    }
}

const page = async () => {
    try {
        const contactData = await fetchData("contact-uses/?populate=Banner&populate=contactPageBox&populate=tst.feData&populate=tst.userImgs&populate=getInTouch.conDetail")
        return <ContactPage contactData={contactData} />
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
};

export default page