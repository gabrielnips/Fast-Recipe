/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["spoonacular.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
