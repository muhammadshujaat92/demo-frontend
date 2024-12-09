'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ContactForm from './ContactForm';
import userImg from '@/public/user.png'
import Slider from './Slider';
import { imageUrl } from '@/utils/apiHelper';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '@/public/imgs/blogimg.webp'
import { blogContentThunk } from '../_redux/api/BlogContent';
import { sancoaleSoftened } from './Font';

const BlogContent = ({ blogContent }) => {
    const dispatch = useDispatch();
    const { blogData, admin, content } = blogContent?.attributes || {}
    const { data } = useSelector(state => state?.blogContentThunk?.data || {});
    const { Title, bannerHeading, bannerImage } = blogData || {};
    const { Name, paragraph } = admin || {}
    const { url } = bannerImage?.data?.attributes || {}
    const imgUrl = imageUrl()
    const bannerImg = url ? `${imgUrl}${url}` : defaultImg
    const [text, setText] = useState('');
    const [bannerLoaded, setBannerLoaded] = useState(false)

    useEffect(() => {
        let textt = content ?? '';

        // Horizontal lines
        textt = textt.replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm, '<hr class="my-[1rem] border-[1px] border-[#c9c9c9]"/>');

        // Headings
        textt = textt.replace(
            /^#\s(.+)/gm,
            '<h1 class="font-acme text-[32px] uppercase font-bold my-[10px]">$1</h1>'
        );
        textt = textt.replace(
            /^##\s(.+)/gm,
            '<h2 class="font-acme text-[24px] uppercase font-bold my-[10px]">$1</h2>'
        );
        textt = textt.replace(
            /^###\s(.+)/gm,
            '<h3 class="font-acme text-[20px] uppercase font-bold my-[10px]">$1</h3>'
        );
        textt = textt.replace(
            /^####\s(.+)/gm,
            '<h4 class="font-acme text-[18px] uppercase font-bold my-[10px]">$1</h4>'
        );
        textt = textt.replace(
            /^#####\s(.+)/gm,
            '<h5 class="font-acme text-[16px] uppercase font-bold my-[10px]">$1</h5>'
        );
        textt = textt.replace(
            /^######\s(.+)/gm,
            '<h6 class="font-acme text-[14px] uppercase font-bold my-[10px]">$1</h6>'
        );

        // Images
        textt = textt.replace(
            /!\[([^\]]+)\]\(([^)]+)\)/g,
            `<img src="$2">`
        );

        // Links
        textt = textt.replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a href="$2" class="underline text-blue-700 font-semibold">$1</a>'
        );

        // Bold, Italic, and Strikethrough
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        textt = textt.replace(/_(?![^<]*>)(.*?)_(?![^<]*>)/g, '<em>$1</em>');
        textt = textt.replace(/~~(.*?)~~/g, '<del>$1</del>');

        // Blockquote
        textt = textt.replace(/^>\s(.+)/gm, '<blockquote class="border-l-4 pl-4 italic text-gray-600">$1</blockquote>');

        // Numbered lists
        textt = textt.replace(/^(\d+)\.\s(.+)(\n\d+\.\s.+)*/gm, function (match) {
            const listItems = match
                .trim()
                .split('\n')
                .map((item) => {
                    const matchItem = item.match(/^(\d+)\.\s(.+)/);
                    return matchItem ? `<li class="list-decimal">${matchItem[2]}</li>` : '';
                })
                .join('\n');
            return `<ol class='ms-[15px]'>\n${listItems}\n</ol>`;
        });

        // Bullet lists
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match) {
            const listItems = match
                .trim()
                .split('\n')
                .map((item) => `<li class="list-disc">${item.slice(2)}</li>`)
                .join('\n');
            return `<ul class='ms-[20px]'>\n${listItems}\n</ul>`;
        });

        // Paragraphs (all text not already matched)
        textt = textt.replace(/^\/\/\s(.+)/gm, '<p class="mb-[1em]">$1</p>');

        textt = textt.replace(/\\n/g, '<br/>');

        setText(textt);
    }, [blogContent]);


    useEffect(() => {
        dispatch(blogContentThunk());
    }, [dispatch]);

    useEffect(() => {
        const img = new window.Image();
        img.src = bannerImg;
        img.onload = () => setBannerLoaded(true);
    }, [bannerImg]);


    if (blogData === null) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <h1 className='text-2xl'>No Blog</h1>
            </div>
        )
    }

    return (
        <div>
            <section>
                <div className={`relative h-[20rem] flex items-center justify-center xl:block md:h-[30rem]`}>
                    {bannerLoaded ? (
                        <Image
                            src={bannerImg}
                            alt='banner'
                            className={`w-full object-cover`}
                            layout="fill"
                            priority
                            fetchPriority="high"
                            placeholder="blur"
                            blurDataURL="/imgs/homeSection1BlurData.jpg"
                        />
                    ) : (
                        <Image
                            src={defaultImg}
                            alt='banner'
                            className={`w-full object-cover`}
                            layout="fill"
                            priority
                            fetchPriority="high"
                            placeholder="blur"
                            blurDataURL="/imgs/homeSection1BlurData.jpg"
                        />
                    )}
                    <div className={`flex justify-center inset-0 absolute ${bannerLoaded ? "bg-black bg-opacity-50" : ""}`}>
                        <div className='md:absolute md:top-[10rem] w-full max-w-[1250px] flex flex-col justify-center md:justify-normal gap-[1rem] md:gap-8 px-3'>
                            <h1 style={{ fontFamily: sancoaleSoftened.style.fontFamily }} className='text-[35px] leading-[2.5rem] md:text-[55px] text-white'>{bannerHeading}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex items-center flex-col'>
                <div className='py-[2rem] w-full max-w-[1250px] md:grid grid-cols-5 lg:grid-cols-3 gap-[3rem] xl:ps-3'>
                    <div className='md:col-span-3 lg:col-span-2'>
                        <div className='px-3 xl:px-0'>
                            <div dangerouslySetInnerHTML={{ __html: text }}></div>
                        </div>
                        <section className="md:ps-3 xl:ps-0 pb-[2rem]">
                            <h1 className="text-white bg-orange-500 font-semibold text-[25px] text-center">RECENT POSTS</h1>
                            <Slider imgData={data} />
                            <div className="bg-[#f2f2f2] p-[1rem] mt-2">
                                <h1 className="font-semibold text-[20px] mb-4">{Name}</h1>
                                <div className="flex gap-[1rem]">
                                    <Image src={userImg} alt="img" width={80} height={80} />
                                    <p className="text-[15px]">{paragraph}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="md:h-full md:relative px-3 xl:px-0 md:col-span-2 lg:col-span-1">
                        <div className="md:sticky md:top-[2%] md:right-0">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogContent