import React from 'react'
import Link from 'next/link'
import { imageUrl } from '@/utils/apiHelper'

const HomeSection2 = ({ data }) => {
    const { ButtonText, Heading, Paragraph, Title, image } = data || {}
    const { url } = image?.data?.attributes || {}
    const imgUrl = imageUrl()
    const Img = url ? `${imgUrl}${url}` : ""

    const toSlug = (text) => {
        return text.replace(/ /g, '-');
    }

    const slug = Heading ? toSlug(Heading) : '';
    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[1250px] ps-3'>
                <h1 className='font-bold text-[27px] md:text-[35px] text-center'>{Title}</h1>
                <div className='md:flex justify-between gap-[3rem] my-4 py-[2rem]'>
                    <div className='md:w-[123rem] max-w-[123rem] h-[20rem] md:h-[25rem] max-h-[25rem] relative rounded-r-[15rem]'>
                        <div className="absolute inset-0 bg-contain bg-center bg-no-repeat rounded-r-[15rem]" style={{ backgroundImage: `url(${Img})` }} />
                    </div>
                    <div className='flex flex-col gap-[2rem] md:gap-[3rem] items-end mt-5 md:mt-0'>
                        <div>
                            <h1 className='font-semibold text-[30px]'>{Heading}</h1>
                            <p className='my-3 text-[18px]'>{Paragraph}</p>
                        </div>
                        <Link href={`/contact/?rh=${slug}`} className='font-bold bg-green-600 text-white px-4 py-1 text-[18px]'>{ButtonText}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection2