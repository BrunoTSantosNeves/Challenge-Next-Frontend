import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
