import React from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Ctn_all_new = (props: Props) => {
	return (
		<div className={`${styles.ctn_all_new}`}>
			<div className={`${styles.title_all}`}>
				<div className={`${styles.option}`}>
					<p className={`${styles.tit_bangtin}`}>ĐỊA ĐIỂM</p>
				</div>
				<div className={`${styles.all_tag} ${styles.content_padding}`}>
					<div className={`${styles.select_tag}`}>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-quan-ba-dinh-ha-noi-26">
							Việc làm tại Quận Ba Đình Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-quan-hoan-kiem-ha-noi-27">
							Việc làm tại Quận Hoàn Kiếm Hà Nội
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag1/viec-lam-tai-quan-hai-ba-trung-ha-noi-28"
						>
							Việc làm tại Quận Hai Bà Trưng Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-quan-dong-da-ha-noi-29">
							Việc làm tại Quận Đống Đa Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-quan-tay-ho-ha-noi-30">
							Việc làm tại Quận Tây Hồ Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-quan-cau-giay-ha-noi-31">
							Việc làm tại Quận Cầu Giấy Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-quan-thanh-xuan-ha-noi-32">
							Việc làm tại Quận Thanh Xuân Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-quan-hoang-mai-ha-noi-33">
							Việc làm tại Quận Hoàng Mai Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-huyen-hoai-duc-ha-noi-34">
							Việc làm tại Huyện Hoài Đức Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-huyen-my-duc-ha-noi-35">
							Việc làm tại Huyện Mỹ Đức Hà Nội
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag1/viec-lam-tai-huyen-thuong-tin-ha-noi-36"
						>
							Việc làm tại Huyện Thường Tín Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-huyen-phu-xuyen-ha-noi-37">
							Việc làm tại Huyện Phú Xuyên Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-huyen-me-linh-ha-noi-38">
							Việc làm tại Huyện Mê Linh Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-quan-long-bien-ha-noi-119">
							Việc làm tại Quận Long Biên Hà Nội
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag1/viec-lam-tai-huyen-thanh-tri-ha-noi-120"
						>
							Việc làm tại Huyện Thanh Trì Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-huyen-gia-lam-ha-noi-121">
							Việc làm tại Huyện Gia Lâm Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-huyen-dong-anh-ha-noi-122">
							Việc làm tại Huyện Đông Anh Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-huyen-soc-son-ha-noi-123">
							Việc làm tại Huyện Sóc Sơn Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-quan-ha-dong-ha-noi-124">
							Việc làm tại Quận Hà Đông Hà Nội
						</Link>
						<Link className={`${styles.t_tag}`} href="/tag1/viec-lam-tai-thi-xa-son-tay-ha-noi-125">
							Việc làm tại Thị xã Sơn Tây Hà Nội
						</Link>
					</div>
					<Image width={25} height={25}
						className={`${styles.show_tg}`}
						src="	https://timviec365.vn/images/detail/add_tag.svg"
						alt="địa điểm"
					/>
				</div>
			</div>
			<div className={`${styles.title_all}`}>
				<div className={`${styles.option}`}>
					<p className={`${styles.tit_bangtin}`}>CHỨC DANH</p>
				</div>
				<div className={`${styles.all_tag} ${styles.content_padding}`}>
					<div className={`${styles.select_tag}`}>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-cau-giay-ha-noi-s8333.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Cầu Giấy Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-lap-dat-tai-quan-cau-giay-ha-noi-s14114.html"
						>
							Việc làm nhân viên lắp đặt tại Quận Cầu Giấy Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-chuyen-vien-ky-thuat-tai-ha-noi-s6739.html"
						>
							Việc làm chuyên viên kỹ thuật tại Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-ba-dinh-ha-noi-s8071.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Ba Đình Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-tay-ho-ha-noi-s8551.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Tây Hồ Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-long-bien-ha-noi-s8607.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Long Biên Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-dong-da-ha-noi-s8763.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Đống Đa Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-hai-ba-trung-ha-noi-s8959.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Hai Bà Trưng Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-hoang-mai-ha-noi-s9123.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Hoàng Mai Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-thanh-xuan-ha-noi-s9303.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Thanh Xuân Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-huyen-dong-anh-ha-noi-s9367.html"
						>
							Việc làm nhân viên kỹ thuật tại Huyện Đông Anh Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-nam-tu-liem-ha-noi-s9455.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Nam Từ Liêm Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-bac-tu-liem-ha-noi-s9611.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Bắc Từ Liêm Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-quan-ha-dong-ha-noi-s9737.html"
						>
							Việc làm nhân viên kỹ thuật tại Quận Hà Đông Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ky-thuat-tai-huyen-hoai-duc-ha-noi-s9815.html"
						>
							Việc làm nhân viên kỹ thuật tại Huyện Hoài Đức Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-truong-phong-ky-thuat-tai-ha-noi-s12725.html"
						>
							Việc làm Trưởng Phòng Kỹ Thuật tại Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-ho-tro-ky-thuat-tai-ha-noi-s13801.html"
						>
							Việc làm nhân viên hỗ trợ kỹ thuật tại Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-lap-dat-camera-tai-ha-noi-s12643.html"
						>
							Việc làm nhân viên lắp đặt camera tại Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-lap-dat-tai-ha-noi-s13802.html"
						>
							Việc làm nhân viên lắp đặt tại Hà Nội{' '}
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-nhan-vien-lap-dat-tai-quan-thanh-xuan-ha-noi-s14127.html"
						>
							Việc làm nhân viên lắp đặt tại Quận Thanh Xuân Hà Nội{' '}
						</Link>
					</div>
					<Image width={25} height={25}
						className={`${styles.show_tg}`}
						src="	https://timviec365.vn/images/detail/add_tag.svg"
						alt="chức danh"
					/>
				</div>
			</div>
			<div className={`${styles.title_all}`}>
				<div className={`${styles.option}`}>
					<p className={`${styles.tit_bangtin}`}>TỪ KHÓA LIÊN QUAN</p>
				</div>
				<div className={`${styles.all_tag} ${styles.content_padding}`}>
					<div className={`${styles.select_tag}`}>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-phan-mem-dien-thoai-3594"
						>
							Việc làm Kỹ Thuật Phần Mềm Điện Thoại
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-ky-thuat-vien-dien-thoai-t14617.html"
						>
							Việc làm kỹ thuật viên điện thoại
						</Link>
						<Link className={`${styles.t_tag}`} href="/tim-viec-lam-ky-thuat-dien-nuoc-t15668.html">
							Việc làm kỹ thuật điện nước
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-vien-san-xuat-1146"
						>
							Việc làm kỹ thuật viên sản xuất
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-vien-1483"
						>
							Việc làm kỹ thuật viên
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-nong-nghiep-1593"
						>
							Việc làm kỹ thuật nông nghiệp
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-cu-nhan-ky-thuat-hinh-anh-1826"
						>
							Việc làm cử nhân kỹ thuật hình ảnh
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-toa-nha-1852"
						>
							Việc làm kỹ thuật tòa nhà
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-hien-truong-2014"
						>
							Việc làm kỹ thuật hiện trường
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-vien-massage-2015"
						>
							Việc làm kỹ thuật viên massage
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-vien-o-to-2016"
						>
							Việc làm kỹ thuật viên ô tô
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-vien-xu-ly-du-lieu-2131"
						>
							Việc làm kỹ thuật viên xử lý dữ liệu
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-nhuom-2288"
						>
							Việc làm kỹ thuật nhuộm
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-vien-it-2290"
						>
							Việc làm kỹ thuật viên IT
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-bao-hanh-2419"
						>
							Việc làm Kỹ Thuật Bảo Hành
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-ky-thuat-vien-may-in-2456"
						>
							Việc làm Kỹ Thuật Viên Máy In
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tag7/DS-viec-lam-tuyen-dung-pho-phong-ky-thuat-2995"
						>
							Việc làm Phó Phòng Kỹ Thuật
						</Link>
						<Link className={`${styles.t_tag}`} href="/tim-viec-lam-ky-thuat-vien-son-t11439.html">
							Việc làm kỹ thuật viên sơn
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-ky-thuat-vien-ep-nhua-t14619.html"
						>
							Việc làm kỹ thuật viên ép nhựa
						</Link>
						<Link
							className={`${styles.t_tag}`}
							href="/tim-viec-lam-ky-thuat-vien-tin-hoc-t14621.html"
						>
							Việc làm kỹ thuật viên tin học
						</Link>
					</div>
					<Image width={25} height={25}
						className={`${styles.show_tg}`}
						src="	https://timviec365.vn/images/detail/add_tag.svg"
						alt="từ khóa liên quan"
					/>
				</div>
			</div>
			<div className={`${styles.title_all}`}>
				<div className={`${styles.option}`}>
					<p className={`${styles.tit_bangtin}`}>HƯỚNG DẪN TÌM VIỆC</p>
				</div>
				<div className={`${styles.hd} ${styles.content_padding}`}>
					<div className={`${styles.hd_tin}`}>
						<Link target="blank" href="/blog/chay-tiep-suc-la-gi-new16926.html">
							<Image width={25} height={25}
								className={`${styles.lazyloaded}`}
								src="https://timviec365.vn/pictures/news/2023/08/17/wal1692269700.jpg"
								alt="Hành trình đồng đội trong bộ môn điền kinh - chạy tiếp sức là gì"
							/>
						</Link>
						<p className={`${styles.hd_tin_text}`}>
							<Link target="blank" href="/blog/chay-tiep-suc-la-gi-new16926.html">
								Hành trình đồng đội trong bộ môn điền kinh - chạy tiếp sức là gì
							</Link>
						</p>
					</div>
					<div className={`${styles.hd_tin}`}>
						<Link target="blank" href="/blog/ky-nang-dien-dat-la-gi-new16908.html">
							<Image width={25} height={25}
								className={`${styles.lazyloaded}`}
								src="https://timviec365.vn/pictures/news/2023/08/12/idg1691830468.jpg"
								data-src="/pictures/news/2023/08/12/idg1691830468.jpg"
								alt="Chinh phục nghệ thuật biểu đạt ngôn ngữ - kỹ năng diễn đạt là gì"
							/>
						</Link>
						<p className={`${styles.hd_tin_text}`}>
							<Link target="blank" href="/blog/ky-nang-dien-dat-la-gi-new16908.html">
								Chinh phục nghệ thuật biểu đạt ngôn ngữ - kỹ năng diễn đạt là gì
							</Link>
						</p>
					</div>
					<div className={`${styles.hd_tin}`}>
						<Link target="blank" href="/blog/phong-cach-wabi-sabi-la-gi-new16847.html">
							<Image width={25} height={25}
								className={`${styles.lazyloaded}`}
								src="https://timviec365.vn/pictures/news/2023/07/24/yjb1690193831.jpg"
								data-src="/pictures/news/2023/07/24/yjb1690193831.jpg"
								alt="Phong cách Wabi Sabi là gì và tính nghệ thuật của phong cách này"
							/>
						</Link>
						<p className={`${styles.hd_tin_text}`}>
							<Link target="blank" href="/blog/phong-cach-wabi-sabi-la-gi-new16847.html">
								Phong cách Wabi Sabi là gì và tính nghệ thuật của phong cách này
							</Link>
						</p>
					</div>
					<div className={`${styles.hd_tin}`}>
						<Link target="blank" href="/blog/dich-thuat-ha-noi-new16736.html">
							<Image width={25} height={25}
								className={`${styles.lazyloaded}`}
								src="https://timviec365.vn/pictures/news/2023/06/16/umh1686898711.jpg"
								data-src="/pictures/news/2023/06/16/umh1686898711.jpg"
								alt="Nhu cầu tuyển dụng & cơ hội nghề nghiệp đối với dịch thuật Hà Nội"
							/>
						</Link>
						<p className={`${styles.hd_tin_text}`}>
							<Link target="blank" href="/blog/dich-thuat-ha-noi-new16736.html">
								Nhu cầu tuyển dụng &amp; cơ hội nghề nghiệp đối với dịch thuật Hà Nội
							</Link>
						</p>
					</div>
				</div>
			</div>
			<div className={`${styles.title_all}`}>
				<div className={`${styles.option}`}>
					<p className={`${styles.tit_bangtin}`}>TÌM VIỆC LÀM THEO TIÊU CHÍ</p>
				</div>
				<div className={`${styles.timviec} ${styles.content_padding}`}>
					<Link
						className={`${styles.city_dof} ${styles.btn_s_j}`}
						href="/viec-lam-ky-thuat-c18v0"
						title="Việc làm Kỹ thuật"
					>
						<Image width={25} height={25} src="https://timviec365.vn/images/detail/icon_ut.svg" alt="icon vl" /> Tìm việc làm
						Kỹ thuật
					</Link>
					<Link
						className={`${styles.city_dof} ${styles.btn_s_j}`}
						href="/viec-lam-ky-thuat-ung-dung-c47v0"
						title="Việc làm Kỹ thuật ứng dụng"
					>
						<Image width={25} height={25} src="https://timviec365.vn/images/detail/icon_ut.svg" alt="icon vl" /> Tìm việc làm
						Kỹ thuật ứng dụng
					</Link>
					<p className={`${styles.city_dof} ${styles.btn_s_j}`}>
						<Image width={25} height={25} src="https://timviec365.vn/images/detail/icon_ut.svg" alt="icon vl" /> Tìm việc làm
						liên quan:
						<Link target="_blank" style={{ color: '#FFF600' }} href="/">
							{' '}
							Tại đây
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
export default Ctn_all_new
