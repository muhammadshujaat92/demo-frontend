import BlogContent from '@/app/_(Component)/BlogContent'
import { mainUrl } from '@/app/page';
import axios from 'axios';
import React from 'react'

const Page = async ({ params }) => {
    try {
        const url = mainUrl(`blog-contents/${params.slug}?populate=blogData.bannerImage&populate=admin`)
        const response = await axios.get(url,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const blogContent = response.data.data
        return <BlogContent blogContent={blogContent}/>
    } catch (error) {
        console.log(error.message);
        return <div>Internal Server Error</div>
    }
}

export default Page