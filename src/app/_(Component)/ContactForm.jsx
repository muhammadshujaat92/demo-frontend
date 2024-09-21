'use client'
import React, { useEffect, useState } from 'react'

const ContactForm = ({ colspan2 }) => {
    const [country, setCountry] = useState('')

    const fetchCountry = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=9063eb09bb0e26')
            const data = await response.json();
            setCountry(data.country)
        } catch (error) {
            console.error('Error fetching country info:', error)
        }
    }

    useEffect(() => {
        fetchCountry()
    }, [])

    return (
        <form method="POST" className={`border bg-white border-gray-500 rounded-2xl ${colspan2}`}>
            <h1 className='font-sancoaleSoftened text-[28px] bg-orange-500 text-white rounded-t-2xl p-[1px] mb-3 text-center leading-[2.3]'>REQUEST FOR TRAVEL ESTIMATE</h1>
            <div className="mb-4 px-3 md:px-5">
                <input type="name" name='name' id="name" className="text-sm rounded-lg block w-full p-2.5 bg-gray-200 focus:outline-none border-none focus:border-0" placeholder="Enter Your Name" required />
            </div>
            <div className="mb-4 px-3 md:px-5">
                <input type="Email" name='email' id="Email" className="text-sm rounded-lg block w-full p-2.5 bg-gray-200 focus:outline-none border-none focus:border-0" required placeholder='Enter Your Email' />
            </div>
            <div className="mb-4 px-3 md:px-5 flex items-center">
                <label htmlFor="number" className='p-2 bg-[#c4c0c0] rounded-l-lg h-[40px]'>{country}</label>
                <input type="number" name='number' id="number" className="text-sm rounded-r-lg block w-full p-2.5 bg-gray-200 focus:outline-none border-none focus:border-0" required placeholder='Phone no.' />
            </div>
            <div className="mb-4 px-3 md:px-5">
                <input type="text" className="text-sm rounded-lg block w-full p-2.5 bg-gray-200 focus:outline-none border-none focus:border-0" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} required placeholder='Choose Date' />
            </div>
            <div className="mb-4 px-3 md:px-5 grid grid-cols-2 gap-3 mt-3">
                <input type="text" name='date' id="date" className="text-sm rounded-lg block w-full p-2.5 bg-gray-200 focus:outline-none border-none focus:border-0" required placeholder='Adults' />
                <input type="text" name='date' id="date" className="text-sm rounded-lg block w-full p-2.5 bg-gray-200 focus:outline-none border-none focus:border-0" required placeholder='Childrens' />
            </div>
            <div className="mb-4 px-3 md:px-5">
                <textarea id="message" name='message' rows="4" className="block p-2.5 w-full text-sm bg-gray-200 focus:outline-none border-none focus:border-0 rounded-lg" placeholder="Tour Plane"></textarea>
            </div>
            <div className="px-3 md:px-5 mb-2">
                <button type="submit" className="text-white mt-2 bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] w-full px-5 py-[3px] text-center text-[25px] font-sancoaleSoftened">SUBMIT</button>
            </div>
        </form>
    )
}

export default ContactForm