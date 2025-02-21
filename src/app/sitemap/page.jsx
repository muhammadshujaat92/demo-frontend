import Link from 'next/link';
import Icon from '../../Components/Icons';
import React from 'react'

export const metadata = {
    title: 'Sitemap',
}

const getBlogSlugs = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-contents`);
        const data = await response.json();
        return data.data.map(blog => ({
            slug: blog.attributes.pageURL || blog.attributes.BlogTitle
        }
        ))
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}

const page = async () => {
    const blogs = await getBlogSlugs();

    const staticPages = [
        { path: "/", name: "Home" },
        { path: "/india-tour-packages/", name: "Travel Packages" },
        { path: "/india-travel-contact/", name: "Contact Us" },
        { path: "/blog/", name: "Blog" },
    ];

    return (
        <div className='h-screen flex justify-center'>
            <div className='w-full max-w-[1250px]'>
                <h1 className='font-bold text-[50px] border-b-[2px] border-black'>Sitemap</h1>
                <div className='py-[30px] px-[10px]'>
                    <h2 className='font-semibold text-[30px] mb-3 underline'>Pages</h2>
                    <ul className='md:grid grid-cols-3 xl:grid-cols-4 md:ms-5 xl:ms-0 gap-2'>
                        {staticPages.map((data, index) => (
                            <li key={index} className='text-[16px] font-semibold mb-2 flex'>
                                <Icon name="boldArrow" className="text-[#ff6600] text-[22px]" />
                                <Link href={data.path} className='hover:text-[#ff6600]'>{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <h2 className='font-semibold text-[30px] my-[20px] underline'>Blogs</h2>
                    <ul className='md:grid grid-cols-3 xl:grid-cols-4 md:ms-5 xl:ms-0 gap-2'>
                        {blogs && (
                            blogs.map((data, index) => {
                                const slug = data?.slug.replace(/[^A-Za-z0-9]/g, '-').toLowerCase()
                                return (
                                    <li key={index} className='text-[16px] font-semibold mb-2 flex'>
                                        <Icon name="boldArrow" className="text-[#ff6600] text-[22px]" />
                                        <Link href={`/blog/${slug}/`} className='hover:text-[#ff6600]'>{data.slug}</Link>
                                    </li>
                                )
                            })
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page