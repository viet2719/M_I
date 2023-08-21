import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/common/footer.module.scss'
const footerData = [
	{
		id: 1,
		header: 'Dành cho ứng viên',
		links: [
			{ label: 'Mẫu CV xin việc', url: '#' },
			{ label: 'Thư xin việc', url: '#' },
			{ label: 'Hồ sơ xin việc', url: '#' },
			{ label: 'Bí quyết viết CV', url: '#' },
			{ label: 'Trang vàng', url: '#' },
		],
	},
	{
		id: 2,
		header: 'Dành cho nhà tuyển dụng',
		links: [
			{ label: 'Đăng tuyển dụng', url: '#' },
			{ label: 'Cẩm nang tuyển dụng', url: '#' },
			{ label: 'Tìm hồ sơ', url: '#' },
			{ label: 'Ứng dụng chuyển đổi số', url: '#' },
			{ label: 'Biểu mẫu', url: '#' },
		],
	},
	{
		id: 3,
		header: 'Tiện ích',
		links: [
			{ label: 'Tra cứu lương', url: '#' },
			{ label: 'Lương Gross - Net', url: '#' },
			{ label: 'Email365', url: '#' },
			{ label: 'Tải app', url: '#' },
			{ label: 'Tính bảo hiểm thất nghiệp', url: '#' },
		],
	},
	{
		id: 4,
		header: 'Việc làm theo khu vực',
		links: [
			{ label: 'Việc làm tại Hà Nội', url: '#' },
			{ label: 'Việc làm tại Hồ Chí Minh', url: '#' },
			{ label: 'Việc làm tại Đà Nẵng', url: '#' },
			{ label: 'Việc làm tại Hải Phòng', url: '#' },
			{ label: 'Việc làm tại Bình Dương', url: '#' },
			{ label: 'Việc làm tại Cần Thơ', url: '#' },
			{ label: 'Việc làm tại Đồng Nai', url: '#' },
			{ label: 'Việc làm tại Bắc Ninh', url: '#' },
		],
		other_list: 'Xem tất cả',
	},
	{
		id: 5,
		header: 'Việc làm theo ngành nghề',
		links: [
			{ label: 'Việc làm kinh doanh', url: '#' },
			{ label: 'Việc làm bất động sản', url: '#' },
			{ label: 'Việc làm bảo hiểm', url: '#' },
			{ label: 'Việc làm IT', url: '#' },
			{ label: 'Việc làm nhân sự', url: '#' },
			{ label: 'Việc làm bán hàng', url: '#' },
			{ label: 'Việc làm lương cao', url: '#' },
			{ label: 'Việc làm kế toán', url: '#' },
		],
		other_list: 'Xem tất cả',
	},
	{
		id: 6,
		header: 'Việc làm theo tag',
		links: [
			{ label: 'Việc làm PHP', url: '#' },
			{ label: 'Việc làm Kế toán nội bộ', url: '#' },
			{ label: 'Việc làm Digital Marketing', url: '#' },
			{ label: 'Việc làm chuyên viên seo', url: '#' },
			{ label: 'Việc làm bất động sản', url: '#' },
			{ label: 'Việc làm thực tập sinh', url: '#' },
			{ label: 'Việc làm nhân viên bảo hiểm', url: '#' },
			{ label: 'Việc làm Content', url: '#' },
		],
		other_list: 'Xem tất cả',
	},
]
const Footer = () => {
	const [show_timviec365, setShow_timviec365] = useState(false)
	const [activeSection, setActiveSection] = useState(null)
	const toggleSection = (index: any) => {
		if (activeSection === index) {
			setActiveSection(null)
		} else {
			setActiveSection(index)
		}
	}
	return (
		<div className={styles.footer_main}>
			<div className={styles.footer_content}>
				<div className={styles.footer_block1}>
					<a rel="dofollow" target="_blank" href="cv365/" className={styles.footer_block1_txt}>
						Hồ sơ xin việc,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-tieng-anh"
						className={styles.footer_block1_txt}
					>
						cv tiếng anh,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-tieng-viet"
						className={styles.footer_block1_txt}
					>
						cv tiếng việt,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-tieng-han"
						className={styles.footer_block1_txt}
					>
						cv tiếng hàn,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-tieng-nhat"
						className={styles.footer_block1_txt}
					>
						cv tiếng nhật,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/mau-don-xin-viec"
						className={styles.footer_block1_txt}
					>
						đơn xin việc,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/mau-cover-letter-thu-xin-viec"
						className={styles.footer_block1_txt}
					>
						thư xin việc,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/mau-so-yeu-ly-lich"
						className={styles.footer_block1_txt}
					>
						sơ yếu lý lịch,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-viet-tat-cua-tu-gi-nhung-dieu-can-biet-khi-viet-cv.html"
						className={styles.footer_block1_txt}
					>
						cv là gì,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cau-hoi-tuyen-dung"
						className={styles.footer_block1_txt}
					>
						câu hỏi phỏng vấn,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-ke-toan"
						className={styles.footer_block1_txt}
					>
						cv kế toán,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-kinh-doanh"
						className={styles.footer_block1_txt}
					>
						cv kinh doanh,
					</a>
					<a rel="dofollow" target="_blank" href="cv365/cv-it" className={styles.footer_block1_txt}>
						cv IT,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-hanh-chinh-nhan-su"
						className={styles.footer_block1_txt}
					>
						cv nhân sự,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-nhan-vien-ban-hang"
						className={styles.footer_block1_txt}
					>
						cv bán hàng,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-marketing"
						className={styles.footer_block1_txt}
					>
						CV marketing,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-xay-dung"
						className={styles.footer_block1_txt}
					>
						cv xây dựng,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-co-khi"
						className={styles.footer_block1_txt}
					>
						cv cơ khí,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-xuat-nhap-khau"
						className={styles.footer_block1_txt}
					>
						cv xuất nhập khẩu,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-sinh-vien-moi-ra-truong"
						className={styles.footer_block1_txt}
					>
						cv sinh viên mới ra trường,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-kien-truc-noi-that"
						className={styles.footer_block1_txt}
					>
						cv kiến trúc nội thất,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-cham-soc-khach-hang"
						className={styles.footer_block1_txt}
					>
						cv chăm sóc khách hàng,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-phat-trien-thi-truong"
						className={styles.footer_block1_txt}
					>
						cv phát triển thị trường,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-du-lich"
						className={styles.footer_block1_txt}
					>
						cv du lịch,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-thu-ngan"
						className={styles.footer_block1_txt}
					>
						cv thu ngân,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-viec-lam-telesale"
						className={styles.footer_block1_txt}
					>
						cv telesale,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-tai-chinh"
						className={styles.footer_block1_txt}
					>
						cv tài chính,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-logistic"
						className={styles.footer_block1_txt}
					>
						cv logistic,
					</a>
					<a
						rel="dofollow"
						target="_blank"
						href="cv365/cv-nha-hang-khach-san"
						className={styles.footer_block1_txt}
					>
						cv nhà hàng khách sạn
					</a>
				</div>
				<div className={styles.gach_ngang} />
				<div className={styles.footer_block2}>
					<div className={styles.about_365}>
						<div
							className={`${styles.wrap_arr} ${styles.open_content}`}
							onClick={() => {
								setShow_timviec365(!show_timviec365)
							}}
						>
							<p className={styles.footer_block2_header}>Về Timviec365</p>
							<div className={`${styles.arr_respon} ${styles.hidden}`}>
								{show_timviec365 ? (
									<Image
										width={14}
										height={15}
										src={'images/before_login/arr_up.svg'}
										className={styles.hidden}
										alt="arrow_up"
									/>
								) : (
									<Image
										width={14}
										height={15}
										src={'images/before_login/arr_down.svg'}
										className={styles.hidden}
										alt="arrow_up"
									/>
								)}
							</div>
						</div>
						<div
							className={`${styles.list_about_365} ${styles.content_show} ${
								show_timviec365 ? styles.show : styles.hide
							}`}
						>
							<div className={styles.timviec_item}>
								<div className={styles.content_item}>
									<a rel="nofollow" href="gioi-thieu-chung.html">
										Giới thiệu
									</a>
									<a rel="nofollow" href="thong-tin-can-biet.html">
										Thông tin
									</a>
									<a
										rel="nofollow"
										href="blog/hoi-va-dap-ve-timviec365vn-chat365-va-cac-ung-dung-chuyen-doi-so-new16648.html"
									>
										Hỏi đáp
									</a>
									<a rel="nofollow" href="blog">
										Cẩm nang
									</a>
									<a rel="nofollow" href="thoa-thuan-su-dung.html">
										Thỏa thuận
									</a>
									<a rel="nofollow" href="quy-dinh-bao-mat.html">
										Bảo mật
									</a>
								</div>
								<div className={styles.content_item}>
									<a rel="nofollow" href="giai-quyet-tranh-chap.html">
										Giải quyết tranh chấp
									</a>
									<a rel="nofollow" href="so-do-trang-web.html">
										Sơ đồ Website
									</a>
									<a
										rel="nofollow"
										target="_blank"
										href="https://www.youtube.com/watch?v=UssNzo6m1p8"
									>
										Video
									</a>
									<a rel="nofollow" href="blog/ung-dung-cua-trinh-sat-ai365-new16655.html">
										AI365
									</a>
									<a rel="nofollow" href="blog/huy-hieu-tia-set-new16722.html">
										Huy hiệu tia sét
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.footer_block2_right}>
						{footerData.map((item, index) => (
							<div key={index} className={styles.for_uv}>
								<div
									className={`${styles.wrap_arr} ${styles.open_content}`}
									onClick={() => {
										toggleSection(item.id)
									}}
								>
									<p className={styles.footer_block2_header}>{item.header}</p>
									<div className={`${styles.arr_respon} ${styles.hidden}`}>
										{activeSection === item.id ? (
											<Image
												width={14}
												height={15}
												src={'images/before_login/arr_up.svg'}
												className={styles.hidden}
												alt="arrow_up"
											/>
										) : (
											<Image
												width={14}
												height={15}
												src={'images/before_login/arr_down.svg'}
												className={styles.hidden}
												alt="arrow_down"
											/>
										)}
									</div>
								</div>
								<div
									key={`${index}_content`}
									className={`${styles.list_for_uv} ${styles.content_show} ${
										activeSection === item.id ? styles.show : styles.hide
									}`}
								>
									<div className={styles.timviec_item}>
										<div className={styles.content_item}>
											{item.links
												.slice(0, Math.ceil(item.links.length / 2))
												.map((link, linkIndex) => (
													<a key={linkIndex} href={link.url}>
														{link.label}
													</a>
												))}
										</div>
										<div className={styles.content_item}>
											{item.links.slice(Math.ceil(item.links.length / 2)).map((link, linkIndex) => (
												<a key={`${linkIndex}_second`} href={link.url}>
													{link.label}
												</a>
											))}
										</div>
									</div>
									{item.other_list && (
										<a
											rel="nofollow"
											href="danh-sach-viec-lam-theo-tags"
											className={styles.seen_all}
										>
											{item.other_list}{' '}
											<Image
												style={{ display: 'inline-block' }}
												width={12}
												height={11}
												src="/images/before_login/2arr_right.svg"
												alt="see_all"
											/>
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={styles.gach_ngang} />
				<div className={styles.footer_block3}>
					<div className={styles.wrap_365}>
						<div>
							<Image
								width={184}
								height={41}
								className=" lazyloaded"
								src="/images/365timviec.png"
								alt="timviec365"
							/>
						</div>
						<span className={styles.wrap_365_txt}>KẾT NỐI VỚI TIMVIEC365.VN</span>
						<div className={styles.wrap_block_connect}>
							<div className={styles.wrap_icon_connet}>
								<a href="https://chat365.timviec365.vn/" rel="nofollow" target="_blank">
									<Image width={27} height={14} src="/images/before_login/icon365.svg" alt="chat" />
								</a>
							</div>
							<div className={styles.wrap_icon_connet}>
								<a href="https://www.facebook.com/Timviec365.Vn/" rel="nofollow" target="_blank">
									<Image
										width={9}
										height={14}
										src="/images/before_login/icon_fb.svg"
										alt="facebook"
									/>
								</a>
							</div>
							<div className={styles.wrap_icon_connet}>
								<a href="https://twitter.com/timviec365vn" rel="nofollow" target="_blank">
									<Image
										width={13}
										height={11}
										src="/images/before_login/icon_witter.svg"
										alt="witter"
									/>
								</a>
							</div>
							<div className={styles.wrap_icon_connet}>
								<a
									href="https://www.youtube.com/channel/UCI6_mZYL8exLuvmtipBFrkg/videos"
									rel="nofollow"
									target="_blank"
								>
									<Image
										width={13}
										height={10}
										src="/images/before_login/icon_youtube.svg"
										alt="youtube"
									/>
								</a>
							</div>
						</div>
						<div className={styles.wrap_certify}>
							<a rel="nofollow" href="http://online.gov.vn/Home/WebDetails/35979">
								<Image
									width={108}
									height={40}
									className={`${styles.icon_bct} ${styles.lazyloaded}`}
									src="/images/before_login/DK_bocongthuong.png"
									alt="Đã đăng ký bộ công thương"
								/>
							</a>
							<a
								rel="nofollow"
								href="//www.dmca.com/Protection/Status.aspx?ID=5b1070f1-e6fb-4ba4-8283-84c7da8f8398"
							>
								<Image
									width={40}
									height={40}
									className={`${styles.icon_dmca} ${styles.lazyloaded}`}
									src="/images/before_login/dmca.png"
									alt="DMCA.com Protection Status"
								/>
							</a>
						</div>
					</div>
					<div className={styles.wrap_address}>
						<p className={styles.wrap_address_header}>CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ</p>
						<a
							href="https://goo.gl/maps/stYYuH5Ln5U2"
							rel="nofollow"
							target="_blank"
							className={styles.wrap_address_txt}
						>
							VP 1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội
						</a>
						<p className={styles.wrap_address_txt}>
							VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên
						</p>
						{/* <p class={styles.wrap_address_txt}>VP3: Tầng 3, Số 1 đường Trần Nguyên Đán, Khu Đô Thị Định Công, Hoàng Mai, Hà Nội</p> */}
						<p className={styles.wrap_address_txt}>Hotline: 0982079209, 1900633682 - ấn phím 1</p>
						<p className={styles.wrap_address_txt}>Email: timviec365.vn@gmail.com</p>
					</div>
					<div className={styles.wrap_qr}>
						<p className={styles.wrap_qr_header}>TẢI APP ĐỂ TÌM VIỆC SIÊU TỐC</p>
						<div className={styles.wrap_qr_block}>
							<div className={styles.wrap_qr_child}>
								<Image
									width={115}
									height={114}
									className={`${styles.qr_img} ${styles.lazyloaded}`}
									style={{ width: '101.5%' }}
									src="/images/before_login/qr_timviec_uv.png"
									alt="download_app"
								/>
								<p className={styles.qr_txt}>App Timviec365 UV</p>
							</div>
							<div className={styles.wrap_qr_child}>
								<Image
									width={115}
									height={114}
									className={`${styles.qr_img} ${styles.lazyloaded}`}
									src="/images/before_login/new_qr_ft1.png"
									alt="download_app"
								/>
								<p className={styles.qr_txt}>App Timviec365 NTD</p>
							</div>
							<div className={styles.wrap_qr_child}>
								<Image
									width={115}
									height={114}
									className={`${styles.qr_img} ${styles.lazyloaded}`}
									src="/images/before_login/qr_app_cv_new.png"
									alt="download_app"
								/>
								<p className={styles.qr_txt}>App CV365</p>
							</div>
							<div className={styles.wrap_qr_child}>
								<Image
									width={115}
									height={114}
									className={`${styles.qr_img} ${styles.lazyloaded}`}
									src="/images/before_login/qr_chat_365.png"
									alt="download_app"
								/>
								<p className={styles.qr_txt}>App Chat365</p>
							</div>
						</div>
					</div>
				</div>
				<div className={`${styles.footer_block3_2}`}>
					<div>
						<Image
							width={184}
							height={47}
							className={`${styles.lazyloaded}`}
							src="/images/365timviec.png"
							alt="timviec365"
						/>
					</div>
					<div className={`${styles.wrap_address}`}>
						<p className={`${styles.wrap_address_header}`}>CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ</p>
						<p className={`${styles.wrap_address_txt}`}>
							VP 1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội
						</p>
						<p className={`${styles.wrap_address_txt}`}>
							VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên
						</p>
						<p className={`${styles.wrap_address_txt}`}>
							Hotline: 0982079209, 1900633682 - ấn phím 1
						</p>
						<p className={`${styles.wrap_address_txt}`}>Email: timviec365.vn@gmail.com</p>
					</div>
					<div className={`${styles.flex} ${styles.jtf_sb}`}>
						<div className={`${styles.wrap_certify}`}>
							<a
								rel="nofollow"
								target="_blank"
								href="http://online.gov.vn/Home/WebDetails/35979?AspxAutoDetectCookieSupport=1"
							>
								<Image
									width={109}
									height={40}
									className={`${styles.icon_bct} ${styles.lazyloaded}`}
									src="/images/DK_bocongthuong.png"
									alt="Đã đăng ký bộ công thương"
								/>
							</a>
							<a
								rel="nofollow"
								href="//www.dmca.com/Protection/Status.aspx?ID=5b1070f1-e6fb-4ba4-8283-84c7da8f8398"
							>
								<Image
									width={37}
									height={40}
									className={`${styles.icon_dmca} ${styles.lazyloaded}`}
									src="/images/dmca.png"
									alt="DMCA.com Protection Status"
								/>
							</a>
						</div>
						<div className={`${styles.wrap_block_connect}`}>
							<div className={`${styles.wrap_icon_connet}`}>
								<a href="https://chat365.timviec365.vn/" rel="nofollow" target="_blank">
									<Image width={9} height={14} src="/images/icon365.svg" alt="chat" />
								</a>
							</div>
							<div className={`${styles.wrap_icon_connet}`}>
								<a href="https://www.facebook.com/Timviec365.Vn/" rel="nofollow" target="_blank">
									<Image width={9} height={14} src="/images/icon_fb.svg" alt="facebook" />
								</a>
							</div>
							<div className={`${styles.wrap_icon_connet}`}>
								<a href="https://twitter.com/timviec365vn" rel="nofollow" target="_blank">
									<Image width={9} height={14} src="/images/icon_witter.svg" alt="witter" />
								</a>
							</div>
							<div className={`${styles.wrap_icon_connet}`}>
								<a
									href="https://www.youtube.com/channel/UCI6_mZYL8exLuvmtipBFrkg/videos"
									rel="nofollow"
									target="_blank"
								>
									<Image width={9} height={14} src="/images/icon_youtube.svg" alt="youtube" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.footer_block4}>
					<p className={styles.wrap_qr_header}>TẢI APP ĐỂ TÌM VIỆC SIÊU TỐC</p>
					<p className={styles.wrap_qr_header_2}>
						Tải app để tìm việc siêu tốc Tạo CV đẹp với 365+ mẫu CV xin việc
					</p>
					<div className={styles.wrap_qr_block}>
						<button className={styles.wrap_qr_child}>
							<a
								href="https://play.google.com/store/apps/details?id=timviec365vn.timviec365_vn"
								ios-href="https://apps.apple.com/vn/app/t%C3%ACm-vi%E1%BB%87c-365-t%C3%ACm-vi%E1%BB%87c-online/id1597712953?l=vi"
								className={styles.ios_check}
								rel="nofollow"
								target="_blank"
							>
								<p className={styles.qr_txt}>Tải app Timviec365 UV</p>
								<Image
									width={9}
									height={14}
									className={styles.download_img}
									src="/images/download.svg"
									alt="download"
								/>
							</a>
						</button>
						<button className={styles.wrap_qr_child}>
							<a
								href="https://play.google.com/store/apps/details?id=vn.timviec365.company"
								ios-href="https://apps.apple.com/vn/app/nh%C3%A0-tuy%E1%BB%83n-d%E1%BB%A5ng-timviec365-vn/id1606069668"
								rel="nofollow"
								className={styles.ios_check}
								target="_blank"
							>
								<p className={styles.qr_txt}>Tải app Timviec365 NTD</p>
								<Image
									width={9}
									height={14}
									className={styles.download_img}
									src="/images/download.svg"
									alt="download"
								/>
							</a>
						</button>
						<button className={styles.wrap_qr_child + ' ' + styles.wrap_qr_child_respon}>
							<a
								href="https://play.google.com/store/apps/details?id=vn.timviec365.cv.cv365_vn"
								className={styles.ios_check}
								ios-href="https://apps.apple.com/us/app/cv-xin-vi%E1%BB%87c-365-t%E1%BA%A1o-cv-%C4%91%E1%BA%B9p/id1631076979"
								rel="nofollow"
								target="_blank"
							>
								<p className={styles.qr_txt}>Tải app CV365</p>
								<Image
									width={9}
									height={14}
									className={styles.download_img}
									src="/images/download.svg"
									alt="download"
								/>
							</a>
						</button>
						<button className={styles.wrap_qr_child + ' ' + styles.wrap_qr_child_respon}>
							<a
								href="https://play.google.com/store/apps/details?id=vn.timviec365.chat_365"
								className={styles.ios_check}
								ios-href="https://apps.apple.com/us/app/chat365-nh%E1%BA%AFn-tin-nhanh-ch%C3%B3ng/id1623353330"
								rel="nofollow"
								target="_blank"
							>
								<p className={styles.qr_txt}>Tải app Chat365</p>
								<Image
									width={9}
									height={14}
									className={styles.download_img}
									src="/images/download.svg"
									alt="download"
								/>
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
