import Chat_NTD from '@/components/common/chat_NTD'
import Footer from '@/components/common/footer'
import New_banner from '@/components/common/new_banner'
import Head_common from '@/components/head'
import Box_vlhd_top from '@/components/home/box_vlhd_top'
import Box_vlth from '@/components/home/box_vlth'
import Chat_container from '@/components/home/chat_container'
import { HomePageBeforeLayout } from '@/components/layout/home_before_login'
import { NextPageWithLayout } from '@/models/common'
import { convertToSlug } from '@/utils/convert'
import styles from '@styles/home/home.module.scss'
import { Carousel } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import Select from 'react-select'

const Home: NextPageWithLayout = () => {
	const jobData = [
		{
			title: '[Tuyển dụng] Nhân viên Kinh doanh',
			company: 'Công Ty TNHH Chung Anh Logistics',
			location: 'Hà Nội',
			date: '25/08/2023',
			link: convertToSlug('[Tuyển dụng] Nhân viên Kinh doanh', '23'),
			salary: 'Từ 7.5 triệu',
		},
		{
			title: '[Tuyển dụng] Nhân viên Kinh doanh',
			company: 'Công Ty TNHH Chung Anh Logistics',
			location: 'Hà Nội',
			date: '25/08/2023',
			link: convertToSlug('[Tuyển dụng] Nhân viên Kinh doanh', 23),
			salary: 'Từ 7.5 triệu',
		},
		{
			title: '[Tuyển dụng] Nhân viên Kinh doanh',
			company: 'Công Ty TNHH Chung Anh Logistics',
			location: 'Hà Nội',
			date: '25/08/2023',
			link: convertToSlug('[Tuyển dụng] Nhân viên Kinh doanh', '24'),
			salary: 'Từ 7.5 triệu',
		},
		{
			title: '[Tuyển dụng] Nhân viên Kinh doanh',
			company: 'Công Ty TNHH Chung Anh Logistics',
			location: 'Hà Nội',
			date: '25/08/2023',
			link: convertToSlug('[Tuyển dụng] Nhân viên Kinh doanh', '24'),
			salary: 'Từ 7.5 triệu',
		},
		{
			title: '[Tuyển dụng] Nhân viên Kinh doanh',
			company: 'Công Ty TNHH Chung Anh Logistics',
			location: 'Hà Nội',
			date: '25/08/2023',
			link: convertToSlug('[Tuyển dụng] Nhân viên Kinh doanh', '24'),
			salary: 'Từ 7.5 triệu',
		},
	]

	const cityOptions = [
		{ value: 'hanoi', label: 'Hà Nội' },
		{ value: 'hochiminh', label: 'TP. Hồ Chí Minh' },
		{ value: 'danang', label: 'Đà Nẵng' },
		{ value: 'hue', label: 'Huế' },
	]
	const title = 'Tìm Việc Làm & Tuyển Dụng Việc Làm Nhanh | timviec365.vn'
	const des =
		'Tìm việc làm nhanh, việc làm 24h hiệu quả, lương cao từ những nhà tuyển dụng uy tín. Hàng nghìn việc làm mới mỗi ngày trên toàn quốc. Tìm việc ngay tại Timviec365.vn'
	const keyw =
		'Tìm việc, việc làm, tìm việc làm, tuyển dụng, tuyển dụng việc làm, cần tìm việc làm, tìm việc làm nhanh, việc làm nhanh, công ty tuyển dụng, việc làm online, tìm việc làm online, kiếm việc, tim viec, viec lam, tim viec lam, tuyen dung'
	const url = 'https://timviec365.vn'
	const robot = 'noindex,nofollow'
	const cano = 'https://timviec365.vn'
	const url_img = 'https://timviec365.vn/images/banner/og_default.png'
	const abstract = 'Tìm việc mới nhất trên toàn quốc - Tim viec online'

	return (
		<>
			<Head_common
				title={title}
				des={des}
				keyw={keyw}
				url={url}
				robot={robot}
				url_img={url_img}
				cano={cano}
				abstract={abstract}
			/>

			<New_banner />
			<section className={styles.section_home}>
				<div className={styles.vieclam_container}>
					<p className={styles.clear}></p>
					<div className={styles.box_vl}>
						<div className={`${styles.box_vl_fix} ${styles.stiky}`}>
							<div className={styles.span_vl}>
								<Link href="#">
									<p>HẤP DẪN</p>
								</Link>
							</div>
							<div className={styles.span_vl}>
								<Link href="#">
									<p>THƯƠNG HIỆU</p>
								</Link>
							</div>
							<div className={styles.span_vl}>
								<Link href="#">
									<p>TUYỂN GẤP</p>
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.vl_left}>
						<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
							<h2 className={styles.ic_vlth}>VIỆC LÀM HẤP DẪN</h2>

							<div className={styles.main_box_vieclam}>
								<Carousel autoplay className={styles.customCarousel}>
									<Box_vlhd_top jobData={jobData} />
									<Box_vlhd_top jobData={jobData} />
									<Box_vlhd_top jobData={jobData} />
									<Box_vlhd_top jobData={jobData} />
								</Carousel>
							</div>
							<div className={styles.plus_next}>
								<Link className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
									Tất cả tin tuyển dụng &gt;&gt;
								</Link>
							</div>
						</div>
					</div>
					<Chat_NTD />
					<div className={styles.ctn_banner_utcv}>
						<div className={styles.ctn_ndung_utcv}>
							<div className={`${styles.ctn_left_uplcv} ${styles.ctn_chung_utcv}`}>
								<p className={styles.ctn_tde_uplcv}>Sử dụng CV có sẵn để tìm việc làm</p>
								<p className={styles.ctn_des_uplcv}>
									AI365: Có việc siêu tốc cập nhật cv nhanh - bật đèn xanh cho nhà tuyển dụng:
								</p>
								<Link className={styles.ctn_dd_uplcv} href="/tai-ho-so.html">
									Upload CV ngay{' '}
									<Image
										width={29}
										height={29}
										src="/images/before_login/exp_ultcv.png"
										alt="Upload CV"
									/>
								</Link>
							</div>
							<div className={`${styles.ctn_right_tcv} ${styles.ctn_chung_utcv}`}>
								<p className={styles.ctn_tde_uplcv}>Tạo CV online ấn tượng</p>
								<p className={styles.ctn_des_uplcv}>
									Timviec365 hiện có 3500+ mẫu CV chuyên nghiệp, độc đáo cùng 5 ngôn ngữ Anh, Việt,
									Hàn... phù hợp với mọi ngành nghề
								</p>
								<Link className={styles.ctn_dd_uplcv} href="/cv-xin-viec">
									Tạo CV ngay{' '}
									<Image
										width={29}
										height={29}
										src="/images/before_login/exp_ultcv.png"
										alt="Tạo CV"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
						<h2 className={styles.icn_vlhd}>VIỆC LÀM THƯƠNG HIỆU</h2>
						<Box_vlth jobList={jobData} />
						<div className={styles.plus_next}>
							<Link className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
								Tất cả tin tuyển dụng &gt;&gt;
							</Link>
						</div>
					</div>
					<div className={`${styles.box_banner_tiaset} ${styles.banner_home_tiaset}`}>
						<div className={styles.content_banner_tiaset}>
							<div className={styles.banner_tiaset_left}>
								<div className={styles.box_title_banner}>
									<p className={styles.title_tiaset}>HUY HIỆU TIA SÉT</p>
									<p className={styles.note_tiaset}>
										Ghi nhận sự tương tác giữa ứng viên và nhà tuyển dụng thông qua tin tuyển dụng
										trong vòng 12 giờ.
									</p>
								</div>
								<div className={styles.box_time_tiaset}>
									<p className={styles.txt_time_ts}>TỰ ĐỘNG CẬP NHẬT SAU</p>
									<div className={styles.box_countdown_clock}>
										<div className={`${styles.box_countdown_item} ${styles.hour}`}>
											<div className={styles.box_num_clock}>
												<div className={styles.box_lock}>
													<p className={`${styles.num_clock} ${styles.one} `}>0</p>
												</div>
												<div className={styles.box_lock}>
													<p className={`${styles.num_clock} ${styles.two}`}>7</p>
												</div>
											</div>
											<p className={styles.title_clock}>GIỜ</p>
										</div>
										<span className={styles.hai_cham}>:</span>
										<div className={`${styles.box_countdown_item} ${styles.minute}`}>
											<div className={styles.box_num_clock}>
												<div className={styles.box_lock}>
													<p className={`${styles.num_clock} ${styles.one} `}>0</p>
												</div>
												<div className={styles.box_lock}>
													<p className={`${styles.num_clock} ${styles.two}`}>7</p>
												</div>
											</div>
											<p className={styles.title_clock}>PHÚT</p>
										</div>
										<span className={styles.hai_cham}>:</span>
										<div className={`${styles.box_countdown_item} ${styles.second}`}>
											<div className={styles.box_num_clock}>
												<div className={styles.box_lock}>
													<p className={`${styles.num_clock} ${styles.one} `}>0</p>
												</div>
												<div className={styles.box_lock}>
													<p className={`${styles.num_clock} ${styles.two}`}>7</p>
												</div>
											</div>
											<p className={styles.title_clock}>GIÂY</p>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.banner_tiaset_right}>
								<p className={styles.title_list}>Danh sách tin ĐĂNG đạt huy hiệu tia sét</p>
								<Link className={styles.link_list} href="/danh-sach-tia-set">
									XEM NGAY{' '}
									<Image
										width={20}
										height={20}
										alt="xem ngay"
										src="/images/before_login/arrow_right.svg"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
						<h2 className={styles.icn_vllc}>VIỆC LÀM TUYỂN GẤP</h2>
						<Box_vlth jobList={jobData} />
						<div className={styles.plus_next}>
							<Link className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
								Tất cả tin tuyển dụng &gt;&gt;
							</Link>
						</div>
					</div>
					<div className={`${styles.banner_home_tiaset} ${styles.banner_home_anhsao}`}>
						<div className={styles.content_banner_anhsao}>
							<div className={styles.banner_anhsao_left}>
								<Image
									width={111}
									height={111}
									className={styles.icon_anhsao_banner}
									src="/images/icon_anhsao.gif"
									alt="logo ánh sao"
								/>
								<div className={styles.box_title_banner}>
									<p className={styles.title_tiaset}>HUY HIỆU ÁNH SAO</p>
									<p className={styles.note_tiaset}>
										Với những NTD có điểm lịch sử lớn hơn 50 điểm sẽ có huy hiệu ánh sao
									</p>
								</div>
							</div>
							<div className={styles.box_time_tiaset}>
								<p className={styles.txt_time_ts}>TỰ ĐỘNG CẬP NHẬT SAU</p>
								<div className={styles.box_countdown_clock}>
									<div className={`${styles.box_countdown_item} ${styles.hour}`}>
										<div className={styles.box_num_clock}>
											<div className={styles.box_lock}>
												<p className={`${styles.num_clock} ${styles.one} `}>0</p>
											</div>
											<div className={styles.box_lock}>
												<p className={`${styles.num_clock} ${styles.two}`}>7</p>
											</div>
										</div>
										<p className={styles.title_clock}>GIỜ</p>
									</div>
									<span className={styles.hai_cham}>:</span>
									<div className={`${styles.box_countdown_item} ${styles.minute}`}>
										<div className={styles.box_num_clock}>
											<div className={styles.box_lock}>
												<p className={`${styles.num_clock} ${styles.one} `}>0</p>
											</div>
											<div className={styles.box_lock}>
												<p className={`${styles.num_clock} ${styles.two}`}>7</p>
											</div>
										</div>
										<p className={styles.title_clock}>PHÚT</p>
									</div>
									<span className={styles.hai_cham}>:</span>
									<div className={`${styles.box_countdown_item} ${styles.second}`}>
										<div className={styles.box_num_clock}>
											<div className={styles.box_lock}>
												<p className={`${styles.num_clock} ${styles.one} `}>0</p>
											</div>
											<div className={styles.box_lock}>
												<p className={`${styles.num_clock} ${styles.two}`}>7</p>
											</div>
										</div>
										<p className={styles.title_clock}>GIÂY</p>
									</div>
								</div>
							</div>
							<div className={styles.banner_tiaset_right}>
								<p className={styles.title_list}>Danh sách tin ĐĂNG đạt huy hiệu ÁNH SAO</p>
								<Link className={styles.link_list} href="/danh-sach-anh-sao">
									XEM NGAY{' '}
									<Image
										width={20}
										height={20}
										alt="xem ngay"
										src="/images/before_login/arrow_right.svg"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
						<h2 className={styles.icon_ai_home}>VIỆC LÀM ĐỀ XUẤT BỞI AI365</h2>
						<div className={styles.sub_text}>
							Hệ thống AI365 cần bạn đăng nhập hoặc thông tin về vị trí của bạn để có thể hiển thị
							các việc làm phù hợp nhất.<button>Xem hướng dẫn chia sẻ vị trí tại đây!</button>
						</div>
						<div className={`${styles.box_filter} ${styles.filter_new}`}>
							<div className={styles.filter_left}>
								<span
									className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
									dir="ltr"
									style={{ width: '270px' }}
								>
									<span className={styles.selection}>
										<span
											className={`${styles.select2_selection} ${styles.select2_selection_single}`}
										>
											<Select
												id="city_search"
												className={styles.city_search}
												options={cityOptions}
												placeholder="Chọn thành phố"
												styles={{
													indicatorsContainer: (baseStyles, state) => ({
														...baseStyles,
														display: 'none',
													}),
													input: (baseStyles, state) => ({
														...baseStyles,
														outline: 'none',
														border: 'none',
													}),
													placeholder: (baseStyles, state) => ({
														...baseStyles,
														fontSize: '16px',
													}),
													singleValue: (baseStyles, state) => ({
														...baseStyles,
														height: '100%',
														fontSize: '16px',
														color: '#474747',
														lineHeight: '31px',
														fontWeight: 600,
													}),

													control: (baseStyles, state) => ({
														...baseStyles,
														margin: '0',
														height: '30px',
														lineHeight: '22px',
														minHeight: '25px',
														border: 'none',
														outline: 'none',
														boxShadow: 'none',
													}),
													option: (baseStyles, state) => ({
														...baseStyles,
														padding: '0 8px',
													}),
												}}
											/>
											<span className={`${styles.select2_selection__arrow}`} role="presentation">
												<b role="presentation" />
											</span>
										</span>
									</span>
									<span className={`${styles.dropdown_wrapper}`} aria-hidden="true" />
								</span>
							</div>
							<div className={styles.filter_right}>
								<div className={styles.btn_prev}>
									<Image
										width={10}
										height={18}
										src="/images/before_login/icon_arrow_left.svg"
										alt="prev"
									/>
								</div>
								<div className={styles.box_list_item}>
									<div className={styles.list_item}>
										<button className={`${styles.item} ${styles.active}`}>Ngẫu nhiên</button>
										<button className={`${styles.item}`} data-city={1}>
											Hà Nội
										</button>
										<button className={`${styles.item}`} data-city={45}>
											Hồ Chí Minh
										</button>
										<button className={`${styles.item}`} data-area={1}>
											Miền Bắc
										</button>
										<button className={`${styles.item}`} data-area={2}>
											Miền Trung
										</button>
										<button className={`${styles.item}`} data-area={3}>
											Miền Nam
										</button>
									</div>
								</div>
								<div className={styles.btn_next}>
									<Image
										width={10}
										height={18}
										src="/images/before_login/icon_arrow_right.svg"
										alt="prev"
									/>
								</div>
							</div>
							<div className={styles.filter_right_select}>
								<span
									className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
									dir="ltr"
								>
									<span className={`${styles.selection}`}>
										<span
											className={`${styles.select2_selection} ${styles.select2_selection_single} ${styles.addr}`}
										>
											<Select
												id="city_search"
												className={styles.city_search}
												options={cityOptions}
												placeholder="Ngẫu nhiên"
												styles={{
													indicatorsContainer: (baseStyles, state) => ({
														...baseStyles,
														display: 'none',
													}),
													input: (baseStyles, state) => ({
														...baseStyles,
														outline: 'none',
														border: 'none',
													}),
													placeholder: (baseStyles, state) => ({
														...baseStyles,
														fontSize: '16px',
													}),
													singleValue: (baseStyles, state) => ({
														...baseStyles,
														height: '100%',
														fontSize: '16px',
														color: '#474747',
														lineHeight: '28px',
														fontWeight: 600,
													}),

													control: (baseStyles, state) => ({
														...baseStyles,
														margin: '0',
														height: '30px',
														lineHeight: '22px',
														minHeight: '25px',
														border: 'none',
														outline: 'none',
														boxShadow: 'none',
													}),
													option: (baseStyles, state) => ({
														...baseStyles,
														padding: '0 8px',
													}),
												}}
											/>
											<span className={`${styles.select2_selection__arrow}`} role="presentation">
												<b role="presentation" />
											</span>
										</span>
									</span>
									<span className={`${styles.dropdown_wrapper}`} aria-hidden="true" />
								</span>
							</div>
						</div>
						<Box_vlth jobList={jobData} />
						<div className={styles.plus_next}>
							<Link className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
								Tất cả tin tuyển dụng &gt;&gt;
							</Link>
						</div>
					</div>
					{/* Hotline */}
					<div className={styles.hotlineLeft}>
						<div className={styles.hotline}>
							<h3 className={styles.hotlineH4}>
								<span className={styles.icon}>
									<Image
										width={41}
										height={41}
										src="/images/before_login/icon_hotline.svg"
										alt="HOTLINE HỖ TRỢ"
									/>
								</span>
								HOTLINE HỖ TRỢ CHO NTD và Ứng viên
							</h3>
							<div className={styles.boxHotline}>
								<div className={styles.boxContact}>
									<p className={styles.hotlineTitle}>HOTLINE tư vấn tuyển dụng</p>
									<div className={styles.content}>
										<div className={styles.hotNd}>
											<p>
												<span>0985.472.529</span> - Nhóm Ngô Dung
											</p>
											<p>
												<span>0985.771.347</span> - Nhóm Huyền Ly{' '}
											</p>
											<p>
												<span>0904.646.975</span> - Nhóm Mai Hương
											</p>
										</div>
										<div className={styles.hotNd}>
											<p>
												<span>0981.208.813</span> - Nhóm Thùy Linh
											</p>
											<p>
												<span>0946.131.908</span> - Nhóm Thanh Hoa
											</p>
											<p>
												<span>0971.207.216</span> - Nhóm Ngọc Hà{' '}
											</p>
										</div>
									</div>
								</div>
								<div className={styles.boxComplaint}>
									<p className={styles.hotlineTitle}>CSKH &amp; Khiếu nại dịch vụ</p>
									<div className={`${styles.hotNd} ${styles.mbHot}`}>
										<p className={styles.callHot}>
											<span className={styles.icon}>
												<Image
													height={24}
													width={24}
													src="/images/before_login/ic_call_hot.png"
													alt="Hotline"
												/>
											</span>
											Hotline: <span>0982.079.209</span>
										</p>
										<Link className={`${styles.callHot} ${styles.chat365}`} href="#">
											<span className={styles.icon}>
												<Image
													height={24}
													width={24}
													src="/images/before_login/icon_chat_blue.svg"
													alt="Chat"
												/>
											</span>
											<span>Chat 365</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
			<Chat_container />
		</>
	)
}

Home.Layout = HomePageBeforeLayout

export default Home
