import React from 'react';
import TourPage from '../_(Component)/TourPage';
import { fetchData } from '@/utils/apiHelper';

export const metadata = {
    title: 'Tour - Packages',
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