import React from 'react'
import ContactPage from '../_(Component)/ContactPage'
import { fetchData } from '@/utils/apiHelper';

const page = async () => {
    const contactData = await fetchData("contact-uses/?populate=Banner&populate=contactPageBox&populate=tst.feData&populate=tst.userImgs&populate=getInTouch.conDetail")
    return <ContactPage contactData={contactData} />
};

export default page