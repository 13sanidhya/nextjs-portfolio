/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "upload.wikimedia.org",
      "seaborn.pydata.org",
      "cdn-icons-png.flaticon.com"
    ]
  }
};

module.exports = nextConfig
