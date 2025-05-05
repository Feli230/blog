/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //     // port: '1337',
    //   },
    // ],
  },
};

export default nextConfig;
