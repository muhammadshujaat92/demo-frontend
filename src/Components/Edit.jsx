"use client"
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editThunk, login } from '../app/_redux/api/edit';
import { useRouter, usePathname } from 'next/navigation';

const Edit = () => {
    const [credentials, setCredentials] = useState({ identifier: "", password: "" });
    const dispatch = useDispatch();
    const state = useSelector(state => state?.editThunk);
    const { items, status } = state || {};
    const router = useRouter();
    const pathName = usePathname();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        dispatch(editThunk({ identifier: credentials.identifier, password: credentials.password }))
    };

    useEffect(() => {
        if (status === "success" && items?.jwt) {
            dispatch(login(items.jwt))
            const editRegex = /^(.*)\/edit$/;
            const match = pathName.match(editRegex);
            const basePath = match ? match[1] || '/' : '/';
            router.push(basePath);
        }
    }, [dispatch, router, status, items, pathName]);

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-[25rem] max-w-[1250px] shadows rounded-lg p-[1rem]">
                <div className="flex flex-col gap-[1rem]">
                    <input value={credentials.identifier} onChange={handleChange} type="email" name="identifier" placeholder="Email" className="bg-gray-100 px-2 py-3 rounded-lg focus:outline-none" required />
                    <input value={credentials.password} onChange={handleChange} type="password" name="password" placeholder="password" className="bg-gray-100 px-2 py-3 rounded-lg focus:outline-none" required />
                    {status === "loading" && <p>Authenticating...</p>}
                    {status === "rejected" && <p className="text-red-500">{error || "Authentication failed"}</p>}
                    <button onClick={handleSubmit} className="bg-green-600 text-white py-2 rounded-lg">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Edit