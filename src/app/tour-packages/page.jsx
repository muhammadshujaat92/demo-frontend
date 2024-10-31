import React from 'react';
import TourPage from '../_(Component)/TourPage';
import { fetchData } from '@/utils/apiHelper';

export async function generateMetadata() {
    try {
        const blogData = await fetchData("tour-packages");
        const { Tabtitle, metaDescription } = blogData?.[0]?.attributes || {};

        return {
            title: Tabtitle || 'Default Title',
            description: metaDescription || 'Default Description',
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
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