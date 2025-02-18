import React from 'react'
import { fira } from '../Font'

const HomeSection4 = ({ data }) => {
    const { Title, Paragraph, sideBox } = data || {}

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[1250px] py-[2rem] xl:py-[3rem] px-2 md:pe-3 md:ps-3 xl:pe-0'>
                <h2 style={{ fontFamily: fira.style.fontFamily }} className='text-[#ff6600] text-[30px] xl:text-[38px] font-bold'>{Title}</h2>
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
                                        <span className='text-[12px] xl:text-[15px] font-bold block'>{item.UpperText}</span>
                                        <span className='text-[10px] xl:text-[15px] text-gray-500 block'>{item.LowerText}</span>
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