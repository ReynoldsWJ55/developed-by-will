/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures Next.js generates static HTML files for deployment
  trailingSlash: true, // Adds a trailing slash to all URLs (e.g., /about/ instead of /about)
  images: {
    unoptimized: true, // Disables the default image optimization API
  },
};

export default nextConfig;
