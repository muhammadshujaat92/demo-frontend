import React from 'react';
import TourPage from '../../Components/Tour-packages/TourPage';
import { fetchData } from '../../utils/apiHelper';

export async function generateMetadata() {
    try {
        const metaData = await fetchData("tour-packages");
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
                canonical: `https://indiayaatra.com/tour-packages`,
            }
        };
    } catch (error) {
        return {
            title: 'Default Title',
            description: 'Default Description'
        };
    }
}

const Page = async () => {
    try {
        const tourPackages = await fetchData("tour-packages/?populate=*")
        return <TourPage pageData={tourPackages} />;
    } catch (error) {
        return <div>Oops! something went wrong</div>
    }
};

export default Page;