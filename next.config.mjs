/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      'via.placeholder.com',
      'picsum.photos',
      'source.unsplash.com',
    ],
    // alternatively use remotePatterns for more control
  },
};

export default nextConfig;
