/** @type {import('next').NextConfig} */
const nextConfig = {
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