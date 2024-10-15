import React from 'react'

const HomeSection4 = ({ data }) => {
    const { Title, Paragraph, sideBox } = data || {}

    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[1250px] py-[3rem] ps-3'>
                <h1 className='text-gray-700 text-[35px] font-bold'>{Title}</h1>
                <div className="grid grid-cols-2 pt-[3rem] gap-[3rem]">
                    <p className='font-semibold text-[22px]'>{Paragraph}</p>

                    <div className='grid grid-cols-3 gap-2'>
                        {sideBox && sideBox.length > 0 ? (
                            sideBox.map((item) => (
                                <div key={item.id} className='flex'>
                                    <div>
                                        <i className={`text-[1rem] text-white bg-blue-400 p-2 rounded-full me-2 ${item.icon}`}></i>
                                    </div>
                                    <div>
                                        <h1 className='text-sm font-bold'>{item.UpperText}</h1>
                                        <p className='text-xs text-gray-400'>{item.LowerText}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <span></span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection4