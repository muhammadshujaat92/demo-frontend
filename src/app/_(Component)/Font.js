// src/fonts.js
import { Boogaloo } from 'next/font/google';
import localFont from 'next/font/local';

// Google Font: Boogaloo
export const boogaloo = Boogaloo({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});

// Local Font: Sancoale Softened
export const sancoaleSoftened = localFont({
    src: '../../public/fonts/Sancoale Softened Medium.ttf',
    weight: '400',
    style: 'normal',
    display: 'swap',
});
