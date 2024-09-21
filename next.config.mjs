/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            'inviting-thrill-7bbda9fa6e.strapiapp.com',
            'inviting-thrill-7bbda9fa6e.media.strapiapp.com'
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "inviting-thrill-7bbda9fa6e.strapiapp.com",
            },
            {
                protocol: "https",
                hostname: "inviting-thrill-7bbda9fa6e.media.strapiapp.com",
            }
        ],
    },
    experimental: {
        webpackMemoryOptimizations: true,
    },
};

export default nextConfig;