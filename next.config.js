/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "user-images.githubusercontent.com",
            "s3.amazonaws.com",
            // "github-production-user-asset-6210df.s3.amazonaws.com",
        ],
    },
};

module.exports = nextConfig;
