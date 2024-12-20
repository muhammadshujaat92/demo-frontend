import Image from 'next/image'
import React from 'react'
import { LuAlarmClock } from "react-icons/lu";
import cardImg from "@/public/imgs/gellary-2.jpg"
import Link from 'next/link';

const Card = ({ Width, Img, title, description, btnText, priceText, days, saleBtn, spanText, icon, readMoreURL }) => {
    let descriptionTruncate = description?.split(' ')
    let truncateDescription = descriptionTruncate?.length > 15 ? `${descriptionTruncate.slice(0, 12).join(' ')}...` : description;
    let titleTruncate = title?.split(' ')
    let truncatedTitle = titleTruncate?.length > 3 ? `${titleTruncate.slice(0, 3).join(' ')}...` : title

    // const toSlug = (text) => {
    //     return text.replace(/ /g, '-');
    // }

    // const slug = title ? toSlug(title) : '';

    // console.log(readMoreURL || "");

    return (
        <div className={`${Width ? `${Width}` : "max-w-[18rem]"} max-h-[31rem] bg-white border border-gray-200 rounded-lg shadow-md`}>
            <div className={`${Width ? `${Width}` : "max-w-[18rem]"} h-[15rem] max-h-[15rem] relative`}>
                {
                    Img ? (
                        <Image className="rounded-t-lg w-full h-full" src={Img} width={250} height={250} alt="cardImg" />
                    ) : (
                        <Image className="rounded-t-lg w-full h-full" src={cardImg} width={250} height={250} alt="cardImg" />
                    )
                }
                <div className={`absolute top-3 font-semibold text-[15px] ${saleBtn ? "flex items-center justify-between w-full" : ""}`}>
                    <button className='bg-[#d3a102] text-white p-2'><span className='text-[13px] me-1 line-through'>{spanText}</span>{priceText}</button>
                    {saleBtn ? (
                        <button className='bg-blue-400 text-white py-1 px-2'>Sale</button>
                    ) : (<></>)}
                </div>
            </div>
            <div className="flex flex-col justify-between h-[16rem] max-h-[16rem]">
                <div className='py-4 px-2'>
                    <a href="#">
                        <h5 className="text-lg md:text-[1rem] xl:text-[20px] leading-[1.5rem] font-bold tracking-tight text-[#ff6600]">{title}</h5>
                    </a>
                    <p className='text-[14px] flex items-center my-3'><LuAlarmClock className='text-[17px] me-1' />{days}</p>
                    <p className="font-normal text-gray-700 text-[14px] leading-[1.2rem]">{description}</p>
                </div>
                <div className='text-end relative flex items-center justify-between bg-gray-100 rounded-b-lg'>
                    <div className='flex gap-1 ms-3 text-[15px] md:text-[12px] xl:text-[15px] items-center'>
                        <i className={`text-yellow-500 ${icon}`}></i>
                        <i className={`text-yellow-500 ${icon}`}></i>
                        <i className={`text-yellow-500 ${icon}`}></i>
                        <i className={`text-yellow-500 ${icon}`}></i>
                        <i className={`text-yellow-500 ${icon}`}></i>
                    </div>
                    <Link href={`/contact/?rh=${readMoreURL}`} className="ribbon px-[25px] rounded-br-lg py-2 md:text-[12px] xl:text-[0.975rem] text-sm font-medium text-center text-white bg-green-700 hover:bg-green-800">
                        {btnText}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card