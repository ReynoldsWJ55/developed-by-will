/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["developedbywill.com"],
  },
  trailingSlash: true,
  // Removed experimental.optimizeCss
};

export default nextConfig;
