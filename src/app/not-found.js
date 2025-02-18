import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-[95vh] flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-[30px] md:text-[55px] font-bold'>Oops! This Page Can&apos;t Be Found.</h1>
                <p className='text-[10px] md:text-[20px] mt-[10px] md:mt-[15px] mb-[25px] md:mb-[35px]'>Try using the search or return to the previous page.</p>
                <Link href="/" className='bg-[#ff6600] hover:bg-[#e75d00] text-white py-[10px] md:py-[13px] px-[20px] md:px-[30px] text-[15px] md:text-[18px] font-bold rounded-lg'>Return Home Page</Link>
            </div>
        </div>
    )
}