import React from 'react'
import ContactPage from '../_(Component)/ContactPage'
import { fetchData } from '@/utils/apiHelper';

export const metadata = {
    title: 'Contact Us',
};

const page = async () => {
    try {
        const contactData = await fetchData("contact-uses/?populate=Banner&populate=contactPageBox&populate=tst.feData&populate=tst.userImgs&populate=getInTouch.conDetail")
        return <ContactPage contactData={contactData} />
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
};

export default page