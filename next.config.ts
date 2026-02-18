import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Preferred: allow matching host + path patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // add other hosts you may use:
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],

    // Alternative (older) approach:
    // domains: ["images.unsplash.com", "images.pexels.com"],
  },
};

export default nextConfig;
