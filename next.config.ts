import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion", "@radix-ui/react-tabs", "@radix-ui/react-label"],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
