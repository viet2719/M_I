
/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['timviec365.vn'],
  },
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(__dirname, '/styles');
    return config;
  },
}

module.exports = nextConfig
