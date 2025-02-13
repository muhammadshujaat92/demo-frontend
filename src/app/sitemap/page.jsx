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
        { path: "/tour-packages/", name: "Travel Packages" },
        { path: "/contact/", name: "Contact Us" },
        { path: "/blog/", name: "Blog" },
    ];

    return (
        <div className='h-screen flex justify-center'>
            <div className='w-full max-w-[1250px]'>
                <h1 className='font-bold text-[50px] border-b-[2px] border-black'>Sitemap</h1>
                <div className='py-[30px] px-[10px]'>
                    <ul>
                        {staticPages.map((data, index) => (
                            <li key={index} className='flex items-center text-[18px] font-semibold mb-2'>
                                <Icon name="boldArrow" className="text-[#ff6600]" />
                                <Link href={data.path} className='hover:text-[#ff6600]'>{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {blogs && (
                            blogs.map((data, index) => {
                                const slug = data?.slug.replace(/[^A-Za-z0-9]/g, '-').toLowerCase()
                                return (
                                    <li key={index} className='flex items-center text-[18px] font-semibold mb-2'>
                                        <Icon name="boldArrow" className="text-[#ff6600]" />
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