import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Enable strict type checking for TypeScript
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default nextConfig;
