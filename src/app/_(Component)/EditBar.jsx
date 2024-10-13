'use client';
import React, { useContext } from 'react';
import { AuthContext } from '../_context/AuthContext';
import { usePathname } from 'next/navigation';

const EditBar = () => {
    const { token, logout } = useContext(AuthContext);
    const pathName = usePathname();
    const isDynamicBlog = /^\/blog\/(\d+)$/;

    const handleEdit = () => {
        let editUrl = '';

        switch (pathName) {
            case '/':
                editUrl = 'http://localhost:1337/admin/content-manager/collection-types/api::home-page.home-page/1';
                break;
            case '/tour-packages':
                editUrl = 'http://localhost:1337/admin/content-manager/collection-types/api::tour-package.tour-package/1';
                break;
            case '/contact':
                editUrl = 'http://localhost:1337/admin/content-manager/collection-types/api::contact-us.contact-us/1';
                break;
            case '/blog':
                editUrl = 'http://localhost:1337/admin/content-manager/collection-types/api::blog-page.blog-page/1';
                break;
            default:
                const match = pathName.match(isDynamicBlog);
                if (match) {
                    const blogId = match[1];
                    editUrl = `http://localhost:1337/admin/content-manager/collection-types/api::blog-content.blog-content/${blogId}`;
                } else {
                    editUrl = 'http://localhost:1337/admin'; // Fallback URL
                }
        }

        window.open(editUrl, '_blank');
    };

    const handleClose = () => {
        logout();
    };

    return (
        <div className={`bg-[#3f3f3f] text-white py-2 px-4 ${token ? "flex" : "hidden"} justify-between items-center`}>
            <button onClick={handleEdit} className="border py-[2px] px-[15px]">Edit</button>
            <button onClick={handleClose} className="border py-[2px] px-[15px]">Close</button>
        </div>
    );
};

export default EditBar;