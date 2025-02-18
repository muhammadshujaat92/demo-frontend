'use client'
import React, { useEffect, useState } from 'react'
import defaultImg from '../../public/imgs/blogimg.webp'
import { useDispatch, useSelector } from 'react-redux';
import { imageUrl } from '../../utils/apiHelper';
import { blogContentThunk } from '../../app/_redux/api/BlogContent';
import Image from 'next/image';
import { fira, sancoaleSoftened } from '../Font';
import Slider from '../Slider';
import ContactForm from '../ContactForm';
import userImg from '../../public/user.webp'

const BlogContent = ({ blogData }) => {
    const dispatch = useDispatch();
    const { BlogTitle, blogContent, bannerImage, createdBy, displayImageText, displayImageUrl } = blogData?.attributes?.attributes || {}
    const { data } = useSelector(state => state?.blogContentThunk?.data || {});
    const { url } = bannerImage || {}
    const imgUrl = imageUrl()
    const bannerImg = url ? `${imgUrl}${url}` : defaultImg
    const [text, setText] = useState('');

    useEffect(() => {
        let textt = blogContent ?? '';

        // Horizontal lines
        textt = textt.replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm, '<hr class="my-[1rem] border-[1px] border-[#c9c9c9]"/>');

        // Headings
        textt = textt.replace(
            /^#\s(.+)/gm,
            `<h1 style="font-family: ${fira.style.fontFamily}" class="font-acme text-[28px] uppercase font-bold my-[10px] text-[#ff6600]">$1</h1>`
        );
        textt = textt.replace(
            /^##\s(.+)/gm,
            `<h2 style="font-family: ${fira.style.fontFamily}" class="font-acme text-[26px] uppercase font-bold my-[10px] text-[#ff6600]">$1</h2>`
        );
        textt = textt.replace(
            /^###\s(.+)/gm,
            `<h3 style="font-family: ${fira.style.fontFamily}" class="font-acme text-[24px] uppercase font-bold my-[10px] text-[#ff6600]">$1</h3>`
        );
        textt = textt.replace(
            /^####\s(.+)/gm,
            `<h4 style="font-family: ${fira.style.fontFamily}" class="font-acme text-[20px] uppercase font-bold my-[10px] text-[#ff6600]">$1</h4>`
        );
        textt = textt.replace(
            /^#####\s(.+)/gm,
            `<h5 style="font-family: ${fira.style.fontFamily}" class="font-acme text-[18px] uppercase font-bold my-[10px] text-[#ff6600]">$1</h5>`
        );
        textt = textt.replace(
            /^######\s(.+)/gm,
            `<h6 style="font-family: ${fira.style.fontFamily}" class="font-acme text-[14px] uppercase font-bold my-[10px] text-[#ff6600]">$1</h6>`
        );

        // Images
        textt = textt.replace(
            /!\[([^\]]+)\]\(([^)]+)\)/g,
            `
            <div class="my-[6px] relative">
                <img src="$2" alt="Image">
                ${!displayImageUrl ? `` : `<a target="_blank" href="${displayImageUrl}" class="inset-0 absolute"></a>`}
                ${!displayImageText ? `` : `<span class="text-white bg-black bg-opacity-50 absolute w-full text-center lg:text-[25px] font-semibold py-[5px] lg:py-[10px] bottom-[50px] lg:bottom-[75px]">${displayImageText}</span>`}
            </div>
            `
        );

        // Links
        textt = textt.replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a target="_blank" href="$2" class="underline text-blue-700 font-semibold">$1</a>'
        );

        // Bold, Italic, and Strikethrough
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        textt = textt.replace(/_(?![^<]*>)(.*?)_(?![^<]*>)/g, '<em>$1</em>');
        textt = textt.replace(/~~(.*?)~~/g, '<del>$1</del>');
        textt = textt.replace(/::arrow::/g, "<span class='me-[6px]'>&#11166;</span>");

        // Blockquote
        textt = textt.replace(/^>\s(.+)/gm, '<blockquote class="border-l-4 relative border-green-600 pt-[25px] pb-[16px] ps-[30px] italic text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5 text-gray-400 absolute top-[4px] left-[13px] rotate-180" viewBox="0 0 975.036 975.036"><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg> $1 </blockquote>');

        // Numbered lists
        textt = textt.replace(/^(\d+)\.\s(.+)(\n\d+\.\s.+)*/gm, function (match) {
            const listItems = match
                .trim()
                .split('\n')
                .map((item) => {
                    const matchItem = item.match(/^(\d+)\.\s(.+)/);
                    return matchItem ? `<li>${matchItem[2]}</li>` : '';
                })
                .join('\n');
            return `<ol class='ms-[2px]'>\n${listItems}\n</ol>`;
        });

        // Bullet lists
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match) {
            const listItems = match
                .trim()
                .split('\n')
                .map((item) => `<li class="list-disc">${item.slice(2)}</li>`)
                .join('\n');
            return `<ul class='ms-[2px]'>\n${listItems}\n</ul>`;
        });

        textt = textt.replace(/(\n\s*\n)/g, '<br/>');

        setText(textt);
    }, [blogContent]);


    useEffect(() => {
        dispatch(blogContentThunk());
    }, [dispatch]);

    if (blogData === null || blogData == undefined) {
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
                    <Image
                        src={bannerImg}
                        alt='banner'
                        className={`w-full object-cover`}
                        fill
                        priority
                        fetchPriority="high"
                        placeholder="blur"
                        blurDataURL="../../public/imgs/homeSection1BlurData.webp"
                    />
                    {bannerImg && (
                        <div className={`flex justify-center inset-0 absolute bg-black bg-opacity-[0.2]`}>
                            <div className='md:absolute md:top-[10rem] w-full max-w-[1250px] flex flex-col justify-center md:justify-normal gap-[1rem] md:gap-8 px-3'>
                                <h1 style={{ fontFamily: sancoaleSoftened.style.fontFamily }} className='text-[35px] leading-[3.5rem] md:text-[50px] text-white'>{BlogTitle}</h1>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section className='flex items-center flex-col'>
                <div className='py-[2rem] w-full max-w-[1250px] md:grid grid-cols-5 lg:grid-cols-3 gap-[3rem] xl:ps-3'>
                    <div className='md:col-span-3 lg:col-span-2'>
                        <div className='px-3 xl:px-0'>
                            <div dangerouslySetInnerHTML={{ __html: text }}></div>
                        </div>
                        <section className="md:ps-3 xl:ps-0 md:py-[2rem]">
                            <h2 className="text-white bg-orange-500 font-semibold text-[25px] text-center">RECENT POSTS</h2>
                            <Slider imgData={data} />
                            <div className="bg-[#f2f2f2] p-[1rem] mt-2 mb-[20px]">
                                <span className="font-semibold text-[17px] mb-4 block">Author</span>
                                <div className="flex gap-[1rem]">
                                    <Image src={userImg} alt="img" width={80} height={80} loading='lazy' />
                                    <p className="md:text-[20px] font-semibold">{createdBy.firstname + " " + createdBy.lastname}</p>
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