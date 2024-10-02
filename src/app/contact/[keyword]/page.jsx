import ContactPage from '@/app/_(Component)/ContactPage'
import React from 'react'

const page = ({ params }) => {
    return (
        <ContactPage keyword={params.keyword} />
    )
}

export default page