import React from 'react'
import ContactPage from '../_(Component)/ContactPage'
import { fetchData } from '@/utils/apiHelper';

export async function generateMetadata() {
    try {
        const blogData = await fetchData("contact-uses");
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

const page = async () => {
    try {
        const contactData = await fetchData("contact-uses/?populate=Banner&populate=contactPageBox&populate=tst.feData&populate=tst.userImgs&populate=getInTouch.conDetail")
        return <ContactPage contactData={contactData} />
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
};

export default page