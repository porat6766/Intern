import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  dangerouslyAllowSvg: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '*'
      },
      {
        protocol: "http",
        hostname: '*'
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
