import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    cssChunking: true,
    inlineCss: true,
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;
