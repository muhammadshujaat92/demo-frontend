import Image from 'next/image'
import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";

const Card = ({ Img, title, description, btnText, priceText, days, saleBtn, spanText }) => {
    return (
        <div className="md:max-w-[16rem] bg-white border border-gray-200 rounded-lg shadow-md">
            <div className='md:max-w-[16rem] h-[14rem] md:h-[12rem] relative'>
                <Image className="rounded-t-lg w-full h-full" src={Img} width={250} height={250} alt="cardImg" />
                <div className={`absolute top-3 font-semibold text-[13px] ${saleBtn ? "flex items-center justify-between w-full" : ""}`}>
                    <button className='bg-yellow-300 p-1'><span className='text-[11px] me-1 line-through text-gray-600'>{spanText}</span>{priceText}</button>
                    {saleBtn ? (
                        <button className='bg-blue-400 text-white py-1 px-2'>Sale</button>
                    ) : (<></>)}
                </div>
            </div>
            <div>
                <div className='p-3'>
                    <a href="#">
                        <h5 className="text-lg font-bold tracking-tight text-gray-900">{title}</h5>
                    </a>
                    <p className='text-xs text-gray-500 flex items-center my-3'><LuAlarmClock className='text-[17px] me-1' />{days}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">{description}</p>
                </div>
                <div className='text-end relative flex items-center justify-between bg-gray-100'>
                    <div className='flex gap-1 ms-3 text-[18px] items-center'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <CiStar className='text-yellow-500' />
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