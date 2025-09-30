import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Enable strict type checking for TypeScript
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
