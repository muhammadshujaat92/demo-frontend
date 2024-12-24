"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { baseUrl } from '@/utils/apiHelper';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/app/_redux/api/edit';

const EditBar = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state?.editThunk);
    const { token } = state || {};
    const pathName = usePathname();
    const isDynamicBlog = /^\/blog\/([^/]+)$/;
    const [isTokenPresent, setIsTokenPresent] = useState(false);

    useEffect(() => {
        setIsTokenPresent(!!token);
    }, [token]);

    const handleEdit = async () => {
        let editUrl = '';
        const match = pathName.match(isDynamicBlog);

        if (match) {
            const blogTitle = match[1];
            const slug = blogTitle.replace(/-/g, ' ');

            try {
                const response = await fetch(`${baseUrl}/api/blog-contents/${slug}`);
                const data = await response.json();

                if (data) {
                    const blogId = data.data.id;
                    editUrl = `${baseUrl}/admin/content-manager/collection-types/api::blog-content.blog-content/${blogId}`;
                }
            } catch (error) {
                console.error('Error fetching blog ID:', error);
                return;
            }
        } else {
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
                    editUrl = baseUrl;
            }
        }

        if (editUrl) {
            window.open(editUrl, '_blank');
        }
    };


    const handleClose = () => {
        dispatch(logout());
        setIsTokenPresent(false);
    };

    if (!isTokenPresent) return null;

    return (
        <div className="bg-[#3f3f3f] text-white py-2 px-4 flex justify-between items-center">
            <button onClick={handleEdit} className="border py-[2px] px-[15px]">Edit</button>
            <button onClick={handleClose} className="border py-[2px] px-[15px]">Close</button>
        </div>
    );
};

export default EditBar;