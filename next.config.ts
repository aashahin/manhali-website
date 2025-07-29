import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  devIndicators: false,
  experimental: {
    cssChunking: true,
    inlineCss: true,
    nextScriptWorkers: true,
  },
};

export default nextConfig;
