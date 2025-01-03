import ContactPage from '@/Components/Contact/ContactPage'
import { fetchData } from '@/utils/apiHelper'
import React, { Suspense } from 'react'
import { Loading } from '../page'

const page = async () => {
    try {
        const contactData = await fetchData("contact-uses/?populate=Banner&populate=contactPageBox&populate=tst.feData&populate=tst.userImgs&populate=getInTouch.conDetail")
        return (
            <Suspense fallback={<Loading />} >
                <ContactPage contactData={contactData} />
            </Suspense>
        )
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
}

export default page