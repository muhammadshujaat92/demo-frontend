import ContactPage from '@/app/_(Component)/ContactPage'
import { fetchData } from '@/utils/apiHelper'
import React from 'react'

const page = async () => {
    const contactData = await fetchData("contact-uses/?populate=Banner&populate=contactPageBox&populate=tst.feData&populate=tst.userImgs&populate=getInTouch.conDetail")
    return <ContactPage contactData={contactData} />
}

export default page