/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures Next.js generates static HTML files for deployment
  trailingSlash: true, // Adds a trailing slash to all URLs (e.g., /about/ instead of /about)
};

export default nextConfig;
