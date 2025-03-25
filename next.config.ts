import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fsgn2-4.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'htmldemo.net',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
