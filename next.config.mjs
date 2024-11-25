/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["developedbywill.com"],
  },
  trailingSlash: true,
  // Add these optimizations while keeping your existing config
  poweredByHeader: false,
  generateEtags: true,
  webpack: (config) => {
    return {
      ...config,
      optimization: {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 70000,
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: "commons",
              chunks: "all",
              minChunks: 2,
            },
          },
        },
      },
    };
  },
};

export default nextConfig;
