/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'admin.indiayaatra.com',
            // 'inviting-thrill-7bbda9fa6e.media.strapiapp.com' // Add this line
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "admin.indiayaatra.com",
            },
            // {
            //     protocol: "https",
            //     // hostname: "inviting-thrill-7bbda9fa6e.media.strapiapp.com", // Add this line
            // }
        ],
    },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: ['admin.indiayaatra.com'],
//     },
// };

// export default nextConfig;