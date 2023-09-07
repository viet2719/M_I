
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
  async rewrites() {
    return [
      {
        source: '/:title-p:id.html',
        destination: '/chi_tiet_nganh_nghe',
      },
      {
        source: '/:title-test-p:id.html',
        destination: '/chi_tiet_nganh_nghe1',
      },
      {
        source: '/tim-viec-tai-:title-c0v:id',
        destination: '/tim_kiem_tinh_thanh',
      },
      {
        source: '/nguoi-tim-viec.html',
        destination: '/nguoi_tim_viec',
      },
    ];
  },
}

module.exports = nextConfig
