import BlogContent from '@/app/_(Component)/BlogContent'
import React from 'react'

const page = ({ params }) => {
    return (
        <BlogContent slug={params.slug}/>
    )
}

export default page