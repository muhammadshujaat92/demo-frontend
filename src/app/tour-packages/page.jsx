import React from 'react';
import { baseUrl } from '../page';
import axios from 'axios';
import TourPage from '../_(Component)/TourPage';

const Page = async () => {
  try {
    const url = baseUrl('tour-packages');
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const tourPackages = response.data.data;

    return <TourPage test={tourPackages} />;
  } catch (error) {
    console.error(error.message);
    return <div>Error loading tour packages</div>;
  }
};

export default Page;