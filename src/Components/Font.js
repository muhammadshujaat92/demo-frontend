import { Boogaloo, Asul, ADLaM_Display, ABeeZee, Acme, Fira_Sans } from 'next/font/google';
import localFont from 'next/font/local';

// Google Font
export const boogaloo = Boogaloo({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
});

export const kanit = Fira_Sans({
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
