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

const BlogContent = ({ blogContent }) => {
    const dispatch = useDispatch();
    const { blogData, admin, content } = blogContent?.attributes || {}
    const { data } = useSelector(state => state?.blogContentThunk?.data || {});
    const { Title, bannerHeading, paragraph1, paragraph2, bannerImage } = blogData || {};
    const { Name, paragraph } = admin || {}
    const { url } = bannerImage?.data?.attributes || {}
    const imgUrl = imageUrl()
    const bannerImg = url ? `${imgUrl}${url}` : ""
    const [text, setText] = useState('');

    useEffect(() => {
        let textt = content ?? '';

        // Horizontal lines
        textt = textt.replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm, '<hr class="my-[1rem] border-[1px] border-[#c9c9c9]"/>');

        // Headings
        textt = textt.replace(
            /^#\s(.+)/gm,
            '<h1 class="font-acme text-[32px] uppercase font-normal mb-[-10px] text-[#30B1C0]">$1</h1>'
        );
        textt = textt.replace(
            /^##\s(.+)/gm,
            '<h2 class="font-acme text-[24px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h2>'
        );
        textt = textt.replace(
            /^###\s(.+)/gm,
            '<h3 class="font-acme text-[20px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h3>'
        );
        textt = textt.replace(
            /^####\s(.+)/gm,
            '<h4 class="font-acme text-[18px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h4>'
        );
        textt = textt.replace(
            /^#####\s(.+)/gm,
            '<h5 class="font-acme text-[16px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h5>'
        );
        textt = textt.replace(
            /^######\s(.+)/gm,
            '<h6 class="font-acme text-[14px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h6>'
        );

        // Images
        textt = textt.replace(
            /!\[([^\]]+)\]\(([^)]+)\)/g,
            `<img src="$2" class='w-[100%] h-[100%]'>`
        );

        // Links
        textt = textt.replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a href="$2" class="text-[#F60] font-bold">$1</a>'
        );

        // Bold, Italic, and Strikethrough
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F60]">$1</strong>');
        textt = textt.replace(/_(?![^<]*>)(.*?)_(?![^<]*>)/g, '<em>$1</em>');
        textt = textt.replace(/~~(.*?)~~/g, '<del>$1</del>');

        // Blockquote
        textt = textt.replace(/^>\s(.+)/gm, '<blockquote class="border-l-4 pl-4 italic text-gray-500">$1</blockquote>');

        // Lists
        textt = textt.replace(/\n/gi, '<br/> \n');
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match
                .trim()
                .split('\n')
                .map((item) => `<li class="">${item.slice(2)}</li>`)
                .join('\n');
            return `<ul class='chooseus'>\n${listItems}\n</ul>`;
        });

        setText(textt);
    }, [blogContent]);


    useEffect(() => {
        dispatch(blogContentThunk());
    }, [dispatch]);


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
                <div className={`relative h-[30rem]`}>
                    {
                        bannerImg ? (
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
                            />
                        )
                    }
                    <div className='flex justify-center inset-0 absolute bg-black bg-opacity-50'>
                        <div className='absolute xl:top-32 w-full max-w-[1250px] ps-3 flex flex-col gap-8'>
                            <h1 className='text-[60px] font-sancoaleSoftened text-white'>{bannerHeading}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex items-center flex-col'>
                <div className='py-[2rem] w-full max-w-[1250px] grid grid-cols-3 gap-[3rem] ps-3'>
                    <div className='col-span-2'>
                        <div>
                            <h1 className='font-bold text-[50px] mb-2'>{Title}</h1>
                            <p>{paragraph1}</p>
                            <div dangerouslySetInnerHTML={{ __html: text }}></div>
                            <br />
                            <p>{paragraph2}</p>
                        </div>
                        <section className="ps-3 py-[2rem]">
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
                    <div className="h-full relative">
                        <div className="sticky top-[2%] right-0">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogContent