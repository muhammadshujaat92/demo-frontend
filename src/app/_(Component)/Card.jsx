import Image from 'next/image'
import React from 'react'
import { LuAlarmClock } from "react-icons/lu";
import cardImg from "@/public/imgs/gellary-2.jpg"

const Card = ({ Width, Img, title, description, btnText, priceText, days, saleBtn, spanText, icon }) => {
    let descriptionTruncate = description?.split(' ')
    let truncateDescription = descriptionTruncate?.length > 15 ? `${descriptionTruncate.slice(0, 12).join(' ')}...` : description;
    let titleTruncate = title?.split(' ')
    let truncatedTitle = titleTruncate?.length > 3 ? `${titleTruncate.slice(0, 3).join(' ')}...` : title

    return (
        <div className={`${Width ? `${Width}` : "max-w-[18rem]"} max-h-[27rem] bg-white border border-gray-200 rounded-lg shadow-md`}>
            <div className={`${Width ? `${Width}` : "max-w-[18rem]"} h-[15rem] max-h-[15rem] relative`}>
                {
                    Img ? (
                        <Image className="rounded-t-lg w-full h-full" src={Img} width={250} height={250} alt="cardImg"/>
                    ) : (
                        <Image className="rounded-t-lg w-full h-full" src={cardImg} width={250} height={250} alt="cardImg" />
                    )
                }
                <div className={`absolute top-3 font-semibold text-[13px] ${saleBtn ? "flex items-center justify-between w-full" : ""}`}>
                    <button className='bg-yellow-300 p-1'><span className='text-[11px] me-1 line-through text-gray-600'>{spanText}</span>{priceText}</button>
                    {saleBtn ? (
                        <button className='bg-blue-400 text-white py-1 px-2'>Sale</button>
                    ) : (<></>)}
                </div>
            </div>
            <div className="flex flex-col justify-between h-[12rem] max-h-[12rem]">
                <div className='p-3'>
                    <a href="#">
                        <h5 className="text-lg font-bold tracking-tight text-gray-900">{truncatedTitle}</h5>
                    </a>
                    <p className='text-xs text-gray-500 flex items-center my-3'><LuAlarmClock className='text-[17px] me-1' />{days}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs">{truncateDescription}</p>
                </div>
                <div className='text-end relative flex items-center justify-between bg-gray-100 rounded-b-lg'>
                    <div className='flex gap-1 ms-3 text-[15px] items-center'>
                        <i className={`text-yellow-500 ${icon}`}></i>
                        <i className={`text-yellow-500 ${icon}`}></i>
                        <i className={`text-yellow-500 ${icon}`}></i>
                        <i className={`text-yellow-500 ${icon}`}></i>
                        <i className={`text-yellow-500 ${icon}`}></i>
                    </div>
                    <button className="ribbon px-[30px] rounded-br-lg py-2 text-sm font-medium text-center text-white bg-green-700 hover:bg-green-800">
                        {btnText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card