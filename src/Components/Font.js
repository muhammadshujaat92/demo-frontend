import { Boogaloo, Kanit } from 'next/font/google';
import localFont from 'next/font/local';

// Google Font
export const boogaloo = Boogaloo({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});

export const kanit = Kanit({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});


// Local Font
export const sancoaleSoftened = localFont({
    src: '../public/fonts/Sancoale Softened Medium.ttf',
    weight: '400',
    style: 'normal',
    display: 'swap',
});
