import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: {
    unoptimized: true,
    remotePatterns: [
      // GitHub raw assets
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      // Medium cover images
      { protocol: "https", hostname: "miro.medium.com" },
      // Cloudinary (commonly used for event photos)
      { protocol: "https", hostname: "res.cloudinary.com" },
      // CNCF blog images
      { protocol: "https", hostname: "www.cncf.io" },
      // Generic CDN patterns — add more as needed
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.lu.ma" },
    ],
  },
};

export default nextConfig;
