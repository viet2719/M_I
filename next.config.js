/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['timviec365.vn'],
	},
	webpack: (config) => {
		config.resolve.alias['@styles'] = path.join(__dirname, '/styles')
		return config
	},
	async rewrites() {
		return [
			{
				source: '/:title-p:id.html',
				destination: '/chi_tiet_nganh_nghe',
			},
			{
				source: '/tag7/DS-viec-lam-tuyen-dung-:title-:id',
				destination: '/ds_viec_lam_tag',
			},
			{
				source: '/:slug-c:cateidv:id',
				destination: '/tim_kiem_tinh_thanh',
			},
			{
				source: '/cong-ty',
				destination: '/viec_lam_cong_ty',
			},
			{
				source: '/tim-kiem/:slug&diadiem=:id',
				destination: '/tim_kiem_tinh_thanh',
			},
			{
				source: '/nguoi-tim-viec.html',
				destination: '/nguoi_tim_viec',
			},
		]
	},
}

module.exports = nextConfig
