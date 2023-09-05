/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/next-script-for-ga */
import { ISeo } from '@/pages'
import Head from 'next/head'

import Script from 'next/script'
// import { Helmet } from 'react-helmet'
type Props ={
	data:ISeo
}
const Head_common = ({
	data
}: Props) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://www.google-analytics.com" />
				<link rel="preconnect" href="https://www.googletagmanager.com" />
				<link rel="dns-prefetch" href="https://www.google-analytics.com" />
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
				<title>{data?.meta_title}</title>
				<meta name="title" content={data?.h1} />
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
				<meta name="robots" content={"index,nofollow"} />
				<meta name="description" content={data?.meta_des} />
				<meta name="keywords" content={data?.meta_key} />
				<meta
					name="viewport"
					content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no, minimal-ui"
				/>
				<meta property="og:site_name" content="Kênh tuyển dụng việc làm" />
				<meta property="og:type" content="Website" />
				<meta property="og:locale" content="vi_VN" />
				<meta property="og:title" content={data?.meta_title} />
				<meta property="og:url" content={data?.module} />
				<meta property="og:description" content={data?.meta_des} />
				<meta property="og:image" content={"https://timviec365.vn/images/banner/og_default.png"} />
				<meta name="copyright" content="Copyright © 2018 by Timviec365.vn" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:description" content={data?.meta_des} />
				<meta name="twitter:title" content={data?.meta_title} />
				<meta name="abstract" content="Tìm việc mới nhất trên toàn quốc - Tim viec online" />
				<meta name="author" content="Timviec365.vn" />
				<link rel="canonical" href={data?.module} />

				{/* <Helmet> */}
				<script type="application/ld+json">
					{JSON.stringify({
						'@context': 'http://schema.org/',
						'@type': 'Person',
						name: 'Trương Văn Trắc',
						url: [
							'https://www.facebook.com/truongvantrac1404',
							'https://timviec365.vn/gioi-thieu-chung.html',
							'https://timviec365.vn/blog/tac-gia/truong-van-trac-tg242',
							'https://docs.google.com/spreadsheets/d/12ehkpV4TTAyxXapITR2Mf6GpIfvj49Yl-ckFqf_rrYQ/edit#gid=0',
						],
						image: '/images/Truong-van-trac.jpg',
						jobTitle: 'CHỦ TỊCH HĐQT – TỔNG GIÁM ĐỐC',
						worksFor: {
							'@type': 'Organization',
							name: 'Công ty cổ phần thanh toán Hưng Hà',
						},
						telephone: '0963695689',
						email: 'truongvantrachhp@gmail.com',
						birthDate: '1956-04-14',
						birthPlace: 'Văn Lâm, Hưng Yên',
						address: [
							{
								'@type': 'PostalAddress',
								streetAddress:
									'Phòng 1808 Tòa nhà CT9 – Khu Đô Thị Định Công – Hoàng Mai – Hà Nội.',
							},
						],
						sameAs: [
							'https://dantri.com.vn/kinh-doanh/hung-ha-con-song-lon-cua-dai-duong-nganh-thuong-mai-dien-tu-20191104111804525.htm',
							'https://thitruong.nld.com.vn/doanh-nghiep-doanh-nhan/ceo-truong-van-trac-nguoi-hai-nhung-trai-ngot-chin-dam-o-tuoi-nghi-huu-20191202174903077.htm',
							'https://www.nguoiduatin.vn/ong-truong-van-trac-voi-tuyen-dung-hay-dung-nhan-nhu-dung-moc-a456833.html',
							'https://soha.vn/niem-tu-hao-tu-dua-con-tinh-than-cua-nguoi-thay-ceo-truong-van-trac-20191212134414297.htm',
							'https://vietnamnet.vn/ceo-truong-van-trac-khong-co-gi-la-qua-muon-de-bat-dau-589237.html',
							'https://vtc.vn/ceo-truong-van-trac-chinh-phuc-su-kho-tinh-cua-nha-tuyen-dung-voi-cv-tieng-viet-ar518809.html',
							'https://cafef.vn/ceo-truong-van-trac-va-hanh-trinh-dua-cong-ty-co-phan-thanh-toan-hung-ha-chinh-phuc-nganh-thuong-mai-dien-tu-2019112917315269.chn',
							'https://vov.vn/kinh-te/doanh-nghiep/ceo-truong-van-trac-va-nhung-tam-su-ve-hoai-bao-o-tuoi-thanh-thoi-986354.vov',
							'https://www.24h.com.vn/doanh-nghiep/cong-ty-cp-thanh-toan-hung-ha-hanh-trinh-di-tu-an-so-den-thuong-hieu-noi-tieng-tai-viet-nam-c849a1098262.html',
							'https://tienphong.vn/cung-ceo-truong-van-trac-kham-pha-cong-dung-cua-365-mau-cv-xin-viec-post1162627.tpo',
							'https://afamily.vn/cung-ceo-truong-van-trac-kham-pha-timviec365vn-20191212191025668.chn',
							'https://zingnews.vn/timviec365vn-loi-giai-cho-bai-toan-tim-viec-lam-tai-da-nang-post1035973.html',
							'https://vtv.vn/kinh-te/ceo-truong-van-trac-vuong-day-to-hong-se-duyen-cung-nganh-tuyen-dung-viec-lam-20191216103602312.htm',
							'https://thanhnien.vn/nghe-ceo-truong-van-trac-chia-se-ve-co-hoi-voi-viec-lam-kinh-doanh-185909954.htm',
							'https://baodautu.vn/ceo-timviec365vn-truong-van-trac-noi-gi-truoc-cac-doi-thu-nuoc-ngoai-d113084.html',
							'https://giaoducthoidai.vn/ceo-timviec365vn-truong-van-trac-va-nhung-chia-se-ve-viec-lam-kinh-doanh-bat-dong-san-tai-tphcm-post448249.html',
							'https://tuoitre.vn/trai-long-cua-ceo-truong-van-trac-ve-moi-luong-duyen-voi-nganh-tuyen-dung-20191231095745254.htm',
							'https://danviet.vn/ceo-truong-van-trac-tuyet-dinh-cong-phu-cv-xin-viec-tieng-anh-77771046940.htm',
							'https://www.techz.vn/143-120-6-ceo-timviec365vn-truong-van-trac-voi-cau-chuyen-tuyen-dung-viec-lam-bat-dong-san-ylt503655.html?utm_source=zalo&utm_medium=zalo&utm_campaign=zalo&zarsrc=31',
							'https://prlayout.cnnd.vn/previews/timviec365vn-noi-ban-co-the-giai-bai-toan-tim-viec-lam-tai-da-nang-ra-vo-so-nghiem-20200110201544567.chn',
							'https://vnmedia.vn/dan-sinh/202001/ceo-truong-van-trac-nuoi-duong-website-timviec365vn-thanh-nguoi-ban-dong-hanh-cung-ung-vien-2922278/',
							'http://hanoimoi.com.vn/tin-tuc/dich-vu/955444/timviec365vn---giac-mo-ve-tuong-lai-nguoi-tre-khong-con-that-nghiep',
							'https://vnreview.vn/thread-old/qc-ceo-truong-van-trac-va-the-gioi-viec-lam-mo-uoc-cua-moi-ung-vien.3031244',
							'https://docbao.vn/kinh-te/gap-go-ong-truong-van-trac-ly-giai-ve-su-phat-trien-cua-cong-ty-co-phan-thanh-toan-hung-ha-tintuc662648',
							'https://vnexpress.net/thay-giao-lam-ceo-trang-tuyen-dung-truc-tuyen-4031647.html',
							'https://vietbao.vn/timviec365-vn-ban-do-dan-duong-cho-viec-lam-cham-soc-khach-hang-196104.html',
							'https://congan.com.vn/thi-truong/website-timviec365vn-giup-ban-di-dung-quy-dao-viec-lam-hanh-chinh-nhan-su_91100.html',
							'https://www.youtube.com/watch?v=Mmij20WL7qA',
							'https://www.flickr.com/photos/truongvantrac/49067941168/in/photostream/',
						],
						alumniOf: [
							{
								'@type': 'OrganizationRole',
								startDate: 1977,
								alumniOf: {
									'@type': 'CollegeOrUniversity',
									name: 'Trường Cao đẳng sư phạm Hải Hưng (nay là trường Cao Đẳng sư phạm Hải Dương).',
								},
							},
						],
						hasPOS: [
							'VP1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội',
							'VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên',
						],
					})}
				</script>
				<script type="application/ld+json">
					{JSON.stringify({
						'@context': 'http://schema.org',
						'@type': 'WebSite',
						url: 'https://timviec365.vn/',
						potentialAction: {
							'@type': 'SearchAction',
							target: 'https://timviec365.vn/tim-kiem?keyword={keyword}',
							'query-input': 'required name=keyword',
						},
					})}
				</script>
				{/* <!-- Google Tag Manager --> */}

				{/* <!-- End Google Tag Manager -->	<!-- End Google Tag Manager -->
    <!-- Global site tag (gtag.js) - Google Ads: 934002795 --> */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=AW-934002795" />
				{/* </Helmet> */}
			</Head>
		</>
	)
}
export default Head_common
