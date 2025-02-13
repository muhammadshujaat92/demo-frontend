/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    // experimental: {
    //     missingSuspenseWithCSRBailout: false,
    // },
    images: {
        domains: [
            'admin.indiayaatra.com',
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "admin.indiayaatra.com",
            },
        ],
    },
    // async redirects() {
    //     return [
    //         {
    //             source: "/:path((?!api|_next|static|favicon\\.ico).*)",
    //             has: [{ type: "header", key: "referer" }],
    //             destination: "/:path/",
    //             permanent: true,
    //         },
    //     ];
    // },
    async rewrites() {
        return [
            {
                source: '/media/:path*', // Proxy all /media/* requests
                destination: 'https://admin.indiayaatra.com/uploads/:path*', // Strapi's uploads directory
            },
        ];
    },
};

export default nextConfig;