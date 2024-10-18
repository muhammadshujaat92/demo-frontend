'use client'
import React, { useEffect, useState } from 'react'

const ContactForm = ({ colspan2, fontSize }) => {
    const [country, setCountry] = useState('');
    const [referrer, setReferrer] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        date: '',
        adult: '',
        children: '',
        message: ''
    });

    const fetchCountry = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=9063eb09bb0e26');
            const data = await response.json();
            setCountry(data.country);
        } catch (error) {
            console.error('Error fetching country info:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            // Allow only alphabetic characters for the name field
            const alphabetOnly = /^[A-Za-z\s]*$/;
            if (alphabetOnly.test(value)) {
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
        } else if (name === 'number' || name === 'adult' || name === 'children') {
            // Allow only numeric values in the number field
            const numericOnly = /^[0-9]*$/;
            if (numericOnly.test(value)) {
                setFormData({
                    ...formData,
                    [name]: value,
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    referrer
                }),
            });

            const data = await response.json();
            if (data.success) {
                alert('Email sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    date: '',
                    adult: '',
                    children: '',
                    message: ''
                })
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    useEffect(() => {
        setReferrer(document.referrer || window.location.href);
        fetchCountry();
    }, []);

    return (
        <form onSubmit={handleSubmit} className={`border bg-white border-gray-500 rounded-2xl ${colspan2}`}>
            <h1 className={`font-sancoaleSoftened ${fontSize ? `text-${fontSize}` : "text-[28px]"} bg-orange-500 text-white rounded-t-2xl mb-3 text-center`}>REQUEST FOR TRAVEL ESTIMATE</h1>
            <div className="mb-4 px-3 md:px-5">
                <input type="name" name='name' value={formData.name} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-200" placeholder="Enter Your Name" required />
            </div>
            <div className="mb-4 px-3 md:px-5">
                <input type="email" name='email' value={formData.email} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-200" required placeholder='Enter Your Email' />
            </div>
            <div className="mb-4 px-3 md:px-5 flex items-center">
                <label htmlFor="number" className='p-2 bg-[#c4c0c0] rounded-l-lg h-[40px]'>{country}</label>
                <input type="text" name='number' value={formData.number} onChange={handleChange} className="text-sm rounded-r-lg block w-full p-2.5 bg-gray-200" required placeholder='Phone no.' />
            </div>
            <div className="mb-4 px-3 md:px-5">
                <input type="text" name='date' value={formData.date} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-200" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} required placeholder='Choose Date' />
            </div>
            <div className="mb-4 px-3 md:px-5 grid grid-cols-2 gap-3 mt-3">
                <input type="text" name='adult' value={formData.adult} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-200" required placeholder='Adults' />
                <input type="text" name='children' value={formData.children} onChange={handleChange} className="text-sm rounded-lg block w-full p-2.5 bg-gray-200" required placeholder='Children' />
            </div>
            <div className="mb-4 px-3 md:px-5">
                <textarea id="message" name='message' value={formData.message} onChange={handleChange} rows="4" className="block p-2.5 w-full text-sm bg-gray-200 rounded-lg" placeholder="Tour Plan"></textarea>
            </div>
            <div className="px-3 md:px-5 mb-2">
                <button type="submit" className="text-white mt-2 bg-green-600 hover:bg-green-500 font-medium rounded-[4px] w-full px-5 py-[3px] text-center text-[25px]">SUBMIT</button>
            </div>
        </form>
    );
};

export default ContactForm;