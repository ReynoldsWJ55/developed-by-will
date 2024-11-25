/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["developedbywill.com"],
  },
  trailingSlash: true,
  // Add production source maps for better error tracking
  productionBrowserSourceMaps: true,
  // Disable chunk optimization to see if it helps
  webpack: (config) => {
    config.optimization.splitChunks = false;
    return config;
  },
};

export default nextConfig;
