/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'inviting-thrill-7bbda9fa6e.strapiapp.com',
            'inviting-thrill-7bbda9fa6e.media.strapiapp.com' // Add this line
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "inviting-thrill-7bbda9fa6e.strapiapp.com",
            },
            {
                protocol: "https",
                hostname: "inviting-thrill-7bbda9fa6e.media.strapiapp.com", // Add this line
            }
        ],
    },
};

export default nextConfig;