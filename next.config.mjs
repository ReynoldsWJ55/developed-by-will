/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["developedbywill.com"],
  },
  trailingSlash: true,
  // Remove assetPrefix as it might cause issues with static file paths
  experimental: {
    optimizeCss: true,
  },
  // Add this to ensure static files are copied correctly
  distDir: "out",
};

export default nextConfig;
