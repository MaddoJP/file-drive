/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "hearty-lark-54.convex.cloud",
        }
        ]
    }
};

export default nextConfig;
