import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'realfood.gov',
      },
    ],
  },
};

export default nextConfig;
