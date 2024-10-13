import React from 'react'
import BlogPage from '../_(Component)/BlogPage'
import { mainUrl } from '../page';
import axios from 'axios';

const Page = async () => {
    try {
        const url = mainUrl('blog-pages?populate=*')
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const blogData = response.data.data;

        return <BlogPage blogData={blogData} />;
    } catch (error) {
        console.error(error.message);
        return <div>Error loading tour packages</div>;
    }
};

export default Page