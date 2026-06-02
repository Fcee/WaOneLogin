import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/WaOneLogin', // <-- Sesuaikan dengan nama repo di GitHub
  assetPrefix: '/WaOneLogin/', // <-- Sesuaikan dengan nama repo di GitHub
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;