import React from 'react'
import ContactPage from '../_(Component)/ContactPage'
import { mainUrl } from '../page';
import axios from 'axios';

const Page = async () => {
    try {
        const url = mainUrl('contact-uses/?populate=*,getInTouch.conDetail,Banner,contactPageBox,tst.feData,tst.userImgs');
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const contactData = response.data.data;

        return <ContactPage contactData={contactData} />;
    } catch (error) {
        console.error(error.message);
        return <div>Error loading tour packages</div>;
    }
};

export default Page