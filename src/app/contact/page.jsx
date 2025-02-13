import React, { Suspense } from 'react'
import { fetchData } from '../../utils/apiHelper';
import ContactPage from '../../Components/Contact/ContactPage';

export async function generateMetadata() {
    try {
        const metaData = await fetchData("contact-uses");
        const { Tabtitle, metaDescription } = metaData?.[0]?.attributes || {};

        return {
            title: Tabtitle || 'Default Title',
            description: metaDescription || 'Default Description',
            openGraph: {
                title: Tabtitle || 'Default Title',
                description: metaDescription || 'Default Description',
                images: [
                    {
                        url: "https://indiayaatra.com/media/India_Yaatra_logo_1504ad9733.webp",
                    }
                ]
            },
            alternates: {
                canonical: `https://indiayaatra.com/contact/`,
            }
        };
    } catch (error) {
        return {
            title: 'Default Title',
            description: 'Default Description'
        };
    }
}

export const Loading = () => (
    <div className="flex justify-center items-center h-screen"></div>
);

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
};

export default page