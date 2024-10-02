'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { cardThunk } from "../_redux/api/Card";
import { tourPackageThunk } from "../_redux/api/TourPackage";
import Spinner from "./Spinner";
import { mainUrl } from "../page";

const TourPage = () => {
    const dispatch = useDispatch();
    const [pageNo, setPageNo] = useState(1);  // Add state for pagination

    useEffect(() => {
        dispatch(cardThunk({ pageSize: 8, page: pageNo }))
        dispatch(tourPackageThunk())
    }, [dispatch, pageNo]);

    const { data, meta } = useSelector(state => state?.cardThunk?.items || {});
    const { items, status } = useSelector(state => state?.tourPackageThunk || {});
    const imageUrl = mainUrl()

    const { Banner, bannerHeading, bannerParagraph } = items?.[0]?.attributes || {}
    const { url } = Banner?.data?.attributes || {}
    const totalCards = meta?.pagination?.total || 0;  // Total number of posts
    const cardsPerPage = 8; // Show 6 cards per page
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const pageOptions = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (status === 'loading') {
        return (
            <div className='h-screen flex items-center justify-center'>
                <Spinner />
            </div>
        )
    }

    return (
        <div>
            <section className='mt-8'>
                <div className={`relative h-[20rem] flex items-center justify-center xl:block md:h-[30rem] bg-black`}>
                    <Image src={url} alt='banner' width={1500} height={900} className='w-full h-full opacity-60' priority />
                    <div className='absolute xl:top-32 px-[5rem] flex flex-col gap-8'>
                        <h1 className='text-[42px] font-sancoaleSoftened text-white'>{bannerHeading}</h1>
                        <p className='lg:text-lg text-white lg:font-bold'>{bannerParagraph}</p>
                    </div>
                </div>
            </section>
            <section className='py-12 md:px-[5rem] flex gap-[1rem] justify-between'>
                <div className=' flex items-center flex-wrap gap-7 md:gap-[1rem]'>
                    {data && data.length > 0 ? (
                        data.map((data) => {
                            const { title, description, buttonText, price, Days, Sale, oldPrice, image, showCard } = data.attributes
                            const { url } = image.data.attributes;
                            const Img = url ? `${url}` : ""
                            return (
                                <Card key={data.id} Img={Img} title={title} description={description} btnText={buttonText} priceText={price} days={Days} saleBtn={Sale} spanText={oldPrice} />
                            )
                        })
                    ) : (
                        <div>NO PACKAGE</div>
                    )}
                </div>
                <div className="w-[33rem]">
                    <ContactForm />
                </div>
            </section>
            <section className='mb-8 px-[5rem]'>
                <ul class="flex items-center -space-x-px h-10 text-base">
                    <button
                        onClick={() => setPageNo((prev) => prev - 1)}
                        disabled={pageNo === 1}
                        className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${pageNo === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : ''
                            }`}>
                        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </button>
                    {
                        pageOptions.map((page, index) => (
                            <button key={index} className={`${pageNo === page ? "bg-[#f0f0f0]" : ""} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700`} onClick={() => setPageNo(page)}>
                                {page}
                            </button>
                        ))
                    }
                    {/* <button className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'>
                            Page: {totalPages}
                        </button> */}
                    <button
                        type="button"
                        onClick={() => setPageNo((prev) => prev + 1)}
                        disabled={pageNo === totalPages}
                        className={`${pageNo === totalPages ? "cursor-not-allowed" : ""} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700`}
                    >
                        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                </ul>
            </section>
        </div>
    )
}

export default TourPage