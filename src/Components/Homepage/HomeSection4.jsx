import React from 'react'
import { kanit } from '../Font'

const HomeSection4 = ({ data }) => {
    const { Title, Paragraph, sideBox } = data || {}

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[1250px] py-[2rem] xl:py-[3rem] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <h1 style={{ fontFamily: kanit.style.fontFamily }} className='text-gray-700 text-[30px] xl:text-[38px] font-bold'>{Title}</h1>
                <div className="lg:grid grid-cols-2 pt-[1.5rem] xl:pt-[3rem] gap-[2rem]">
                    <p className='font-semibold text-[15px] xl:text-[18px] pb-[2rem] xl:pb-0'>{Paragraph}</p>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-[1.5rem] md:max-h-[15rem] items-center'>
                        {sideBox && (
                            sideBox.map((item) => (
                                <div key={item.id} className='flex'>
                                    <div>
                                        <i className={`text-[1rem] text-white bg-blue-400 p-2 rounded-full me-2 ${item.icon}`}></i>
                                    </div>
                                    <div>
                                        <h1 className='text-[12px] xl:text-[15px] font-bold'>{item.UpperText}</h1>
                                        <p className='text-[10px] xl:text-[13px] text-gray-500'>{item.LowerText}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection4