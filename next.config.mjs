/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/**', // এটি সব ইমেজ পাথ এলাউ করবে
      },
    ],
  },
};

export default nextConfig;
