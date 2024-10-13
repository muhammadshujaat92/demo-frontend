import React from 'react';
import TourPage from '../_(Component)/TourPage';
import { fetchData } from '@/utils/apiHelper';

const Page = async () => {
    const tourPackages = await fetchData("tour-packages/?populate=*")
    return <TourPage test={tourPackages} />;
};

export default Page;