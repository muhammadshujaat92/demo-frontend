"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { baseUrl } from '@/utils/apiHelper';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../_redux/api/edit';

const EditBar = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state?.editThunk);
    const { token } = state || {};
    const pathName = usePathname();
    const isDynamicBlog = /^\/blog\/(\d+)$/;
    const [isTokenPresent, setIsTokenPresent] = useState(false); // Start with false

    useEffect(() => {
        // Set the token only after the component mounts
        setIsTokenPresent(!!token);
    }, [token]);

    const handleEdit = () => {
        let editUrl = '';

        switch (pathName) {
            case '/':
                editUrl = `${baseUrl}/admin/content-manager/collection-types/api::home-page.home-page/1`;
                break;
            case '/tour-packages':
                editUrl = `${baseUrl}/admin/content-manager/collection-types/api::tour-package.tour-package/1`;
                break;
            case '/contact':
                editUrl = `${baseUrl}/admin/content-manager/collection-types/api::contact-us.contact-us/1`;
                break;
            case '/blog':
                editUrl = `${baseUrl}/admin/content-manager/collection-types/api::blog-page.blog-page/1`;
                break;
            default:
                const match = pathName.match(isDynamicBlog);
                if (match) {
                    const blogId = match[1];
                    editUrl = `${baseUrl}/admin/content-manager/collection-types/api::blog-content.blog-content/${blogId}`;
                } else {
                    editUrl = baseUrl; // Fallback URL
                }
        }

        window.open(editUrl, '_blank');
    };

    const handleClose = () => {
        dispatch(logout());
        setIsTokenPresent(false);
    };

    if (!isTokenPresent) return null; // Avoid rendering if token is not present

    return (
        <div className="bg-[#3f3f3f] text-white py-2 px-4 flex justify-between items-center">
            <button onClick={handleEdit} className="border py-[2px] px-[15px]">Edit</button>
            <button onClick={handleClose} className="border py-[2px] px-[15px]">Close</button>
        </div>
    );
};

export default EditBar;