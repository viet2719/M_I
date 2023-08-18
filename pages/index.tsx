import React, { useEffect } from 'react'
import { NextPageWithLayout } from '@/models/common'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { HomePageBeforeLayout } from '@/components/layout/home_before_login'
import Image from 'next/image'
import Header from '@/components/common/header'
import Banner_QR from '@/components/common/components/banner_QR'
import Search_common from '@/components/common/components/search_common'
import ProvinceList from './test'
import Footer from '@/components/common/footer'

const Home: NextPageWithLayout = () => {
	const img_qr_con = 'https://timviec365.vn/images/banner_new/qr_code.svg'
	const img_down = 'https://timviec365.vn/images/New_images/icn_dow.png'

	return (
		<>
			<Head>
				<title>Tìm Việc Làm & Tuyển Dụng Việc Làm Nhanh | timviec365.vn</title>
				<meta name="title" content="Tìm việc làm" />
				{/* <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" /> */}
				<meta name="robots" content="index,follow" />
				<meta
					name="description"
					content="Tìm việc làm nhanh, việc làm 24h hiệu quả, lương cao từ những nhà tuyển dụng uy tín. Hàng nghìn việc làm mới mỗi ngày trên toàn quốc. Tìm việc ngay tại Timviec365.vn"
				/>
				<meta
					name="keywords"
					content="Tìm việc, việc làm, tìm việc làm, tuyển dụng, tuyển dụng việc làm, cần tìm việc làm, tìm việc làm nhanh, việc làm nhanh, công ty tuyển dụng, việc làm online, tìm việc làm online, kiếm việc, tim viec, viec lam, tim viec lam, tuyen dung"
				/>
				<meta
					name="viewport"
					content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no, minimal-ui"
				/>
				<meta property="og:site_name" content="Kênh tuyển dụng việc làm" />
				<meta property="og:type" content="Website" />
				<meta property="og:locale" content="vi_VN" />
				<meta
					property="og:title"
					content="Tìm Việc Làm & Tuyển Dụng Việc Làm Nhanh | timviec365.vn"
				/>
				<meta property="og:url" content="https://timviec365.vn" />
				<meta
					property="og:description"
					content="Tìm việc làm nhanh, việc làm 24h hiệu quả, lương cao từ những nhà tuyển dụng uy tín. Hàng nghìn việc làm mới mỗi ngày trên toàn quốc. Tìm việc ngay tại Timviec365.vn"
				/>
				<meta property="og:image" content="https://timviec365.vn/images/banner/og_default.png" />
				<meta name="copyright" content="Copyright © 2018 by Timviec365.vn" />
				<meta name="twitter:card" content="summary" />
				<meta
					name="twitter:description"
					content="Tìm việc làm nhanh, việc làm 24h hiệu quả, lương cao từ những nhà tuyển dụng uy tín. Hàng nghìn việc làm mới mỗi ngày trên toàn quốc. Tìm việc ngay tại Timviec365.vn"
				/>
				<meta
					name="twitter:title"
					content="Tìm Việc Làm & Tuyển Dụng Việc Làm Nhanh | timviec365.vn"
				/>
				<meta name="abstract" content="Tìm việc mới nhất trên toàn quốc - Tim viec online" />
				<meta name="author" content="Timviec365.vn" />
				<link rel="canonical" href="https://timviec365.vn" />
			</Head>
			<>
				<div className={styles.new_banner}>
					<Header></Header>
					<div
						className={`${styles.box_search} ${styles.searchindex} ${styles.searchindex_th} `}
						id={styles.box_search_index}
					>
						<div className={styles.main_search}>
							<div className={styles.box_text_search}>
								<p className={styles.box_text}>
									CHAT LIỀN TAY
									<span className={styles.img_txt_s}>
										<Image
											src={'/images/before_login/mess_icon2.png'}
											width={44}
											height={44}
											alt=""
										/>
									</span>
								</p>
								<span className={styles.txt_s}>VIỆC TỚI NGAY</span>{' '}
							</div>
							<div className={styles.logo_banner}>
								<h1 className={styles.title_search}>Tìm việc làm</h1>
							</div>
							<Search_common />
						</div>

						<div className={styles.btn_dow}>
							<a href="#dow_here">
								<Image width={19} height={19} src={img_down} alt="xem thêm" />
							</a>
						</div>
						<Banner_QR />
					</div>
					{/* <div className={styles.tktk}></div> */}
				</div>
				<section className={styles.section_home}>
					<div className={styles.vieclam_container}>
						<p className={styles.clear}></p>

						<div className={styles.box_vl}>
							<div className={`${styles.box_vl_fix} ${styles.stiky}`}>
								<div className={styles.span_vl}>
									<a href="">
										<p>Hap dan</p>
									</a>
								</div>
								<div className={styles.span_vl}>
									<a href="">
										<p>Hap dan</p>
									</a>
								</div>
								<div className={styles.span_vl}>
									<a href="">
										<p>Hap dan</p>
									</a>
								</div>
							</div>
						</div>
						<div className={styles.vl_left}>
							<div
								id={styles.box_vlth}
								className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}
							>
								<h2 className={styles.ic_vlth}>VIỆC LÀM HẤP DẪN</h2>
								<div className={styles.main_box_vieclam}>
									<div className={styles.slide_hd}>
										<div className={`${styles.item_vl} ${styles.item_home_th}`}>
											<div className={styles.in_vl}>
												<div className={styles.img_item_vl}>
													<a
														href=""
														className={styles.logo_user_th}
														title="[tuyen dung] nhan vien kinh doan"
													>
														<Image
															height={70}
															width={70}
															src="/images/before_login/user_chat_off.png"
															className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
															alt=""
														/>
														<span className={styles.box_time_off}>1 ngay</span>
													</a>
													<div className={styles.box_vote_new}>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
													</div>
													<Image
														width={28}
														height={28}
														src="/images/before_login/icon_tiaset.svg"
														className={styles.icon_tiaset_new}
														alt=""
													/>
												</div>
												<div className={styles.right_item_vl}>
													<h3>
														<a
															className={styles.tit_vip}
															href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
															title="[Tuyển dụng] Nhân viên Kinh doanh"
														>
															[Tuyển dụng] Nhân viên Kinh doanh
														</a>
													</h3>
													<a
														className={styles.name_com}
														href="/cong-ty-tnhh-chung-anh-logistics-co243931"
														title="Công Ty TNHH Chung Anh Logistics"
													>
														Công Ty TNHH Chung Anh Logistics
													</a>
													<p className={styles.job_local}>Hà Nội</p>
													<p className={styles.job_chat} data-id="243931" id-chat="1346583">
														Chat
													</p>
													<p className={styles.job_time}>25/08/2023</p>
													<p className={styles.job_money} title="Từ 7.5 triệu ">
														Từ 7.5 triệu{' '}
													</p>
													<a
														href="/lich-su/danh-sach-tong-u243931t1"
														className={styles.job_history}
													>
														<Image
															width={16}
															height={16}
															src="/images/before_login/icon_history_home.svg"
															alt="icon lịch sử"
														/>
														Lịch sử
													</a>
												</div>
											</div>
										</div>
										<div className={`${styles.item_vl} ${styles.item_home_th}`}>
											<div className={styles.in_vl}>
												<div className={styles.img_item_vl}>
													<a
														href=""
														className={styles.logo_user_th}
														title="[tuyen dung] nhan vien kinh doan"
													>
														<Image
															height={70}
															width={70}
															src="/images/before_login/user_chat_off.png"
															className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
															alt=""
														/>
														<span className={styles.box_time_off}>1 ngay</span>
													</a>
													<div className={styles.box_vote_new}>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
													</div>
													<Image
														width={28}
														height={28}
														src="/images/before_login/icon_tiaset.svg"
														className={styles.icon_tiaset_new}
														alt=""
													/>
												</div>
												<div className={styles.right_item_vl}>
													<h3>
														<a
															className={styles.tit_vip}
															href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
															title="[Tuyển dụng] Nhân viên Kinh doanh"
														>
															[Tuyển dụng] Nhân viên Kinh doanh
														</a>
													</h3>
													<a
														className={styles.name_com}
														href="/cong-ty-tnhh-chung-anh-logistics-co243931"
														title="Công Ty TNHH Chung Anh Logistics"
													>
														Công Ty TNHH Chung Anh Logistics
													</a>
													<p className={styles.job_local}>Hà Nội</p>
													<p className={styles.job_chat} data-id="243931" id-chat="1346583">
														Chat
													</p>
													<p className={styles.job_time}>25/08/2023</p>
													<p className={styles.job_money} title="Từ 7.5 triệu ">
														Từ 7.5 triệu{' '}
													</p>
													<a
														href="/lich-su/danh-sach-tong-u243931t1"
														className={styles.job_history}
													>
														<Image
															width={16}
															height={16}
															src="/images/before_login/icon_history_home.svg"
															alt="icon lịch sử"
														/>
														Lịch sử
													</a>
												</div>
											</div>
										</div>
										<div className={`${styles.item_vl} ${styles.item_home_th}`}>
											<div className={styles.in_vl}>
												<div className={styles.img_item_vl}>
													<a
														href=""
														className={styles.logo_user_th}
														title="[tuyen dung] nhan vien kinh doan"
													>
														<Image
															height={70}
															width={70}
															src="/images/before_login/user_chat_off.png"
															className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
															alt=""
														/>
														<span className={styles.box_time_off}>1 ngay</span>
													</a>
													<div className={styles.box_vote_new}>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
														<Image
															className="icon_vote_new"
															width={13}
															height={13}
															src="/images/before_login/icon_star_gray.svg"
															alt="star grey"
														/>
													</div>
													<Image
														width={28}
														height={28}
														src="/images/before_login/icon_tiaset.svg"
														className={styles.icon_tiaset_new}
														alt=""
													/>
												</div>
												<div className={styles.right_item_vl}>
													<h3>
														<a
															className={styles.tit_vip}
															href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
															title="[Tuyển dụng] Nhân viên Kinh doanh"
														>
															[Tuyển dụng] Nhân viên Kinh doanh
														</a>
													</h3>
													<a
														className={styles.name_com}
														href="/cong-ty-tnhh-chung-anh-logistics-co243931"
														title="Công Ty TNHH Chung Anh Logistics"
													>
														Công Ty TNHH Chung Anh Logistics
													</a>
													<p className={styles.job_local}>Hà Nội</p>
													<p className={styles.job_chat} data-id="243931" id-chat="1346583">
														Chat
													</p>
													<p className={styles.job_time}>25/08/2023</p>
													<p className={styles.job_money} title="Từ 7.5 triệu ">
														Từ 7.5 triệu{' '}
													</p>
													<a
														href="/lich-su/danh-sach-tong-u243931t1"
														className={styles.job_history}
													>
														<Image
															width={16}
															height={16}
															src="/images/before_login/icon_history_home.svg"
															alt="icon lịch sử"
														/>
														Lịch sử
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.plus_next}>
									<a className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
										Tất cả tin tuyển dụng &gt;&gt;
									</a>
								</div>
							</div>
						</div>
						<div className={styles.vl_right}>
							<div className={styles.list_ntd_home}>
								<p className={styles.tt_chat_ntd}>
									<Image
										className={styles.ic_list_onnile}
										src="/images/Ic_list_online.png"
										alt="Chat"
										width={40}
										height={40}
									/>{' '}
									Chat với nhà tuyển dụng
								</p>
								<div className={styles.list_nganh_nghe}>
									<a rel="nofollow" className={styles.link_all_onl} href="">
										Tất cả &gt;&gt;
									</a>
									<ul className={styles.list_chat_ntd}>
										<li className={`${styles.online_item} ${styles.openApp} ${styles.m_online}`}>
											<a href="">
												<span className={`${styles.ava_mess} ${styles.m_online}`}>
													<img src="" alt="" />
												</span>
												<span className={`${styles.ct_online} ${styles.box_tooltip}`}>
													<p>Công Ty Cổ Phần Nam Dược Cn Miền Nam</p>
													<p className={`${styles.con_tooltip} ${styles.top}`}>
														<span className={styles.span_con_item}>
															Trình Dược Viên kênh OTC tại KV Đắk Lắk
														</span>
														<span className={styles.tooltip}>
															<span>Trình Dược Viên kênh OTC tại KV Đắk Lắk</span>
														</span>
													</p>
													<p>Đắk Lắk</p>
												</span>
											</a>
										</li>
										<li className={`${styles.online_item} ${styles.openApp} ${styles.m_online}`}>
											<a href="">
												<span className={`${styles.ava_mess} ${styles.m_online}`}>
													<img src="" alt="" />
												</span>
												<span className={`${styles.ct_online} ${styles.box_tooltip}`}>
													<p>Công Ty Cổ Phần Nam Dược Cn Miền Nam</p>
													<p className={`${styles.con_tooltip} ${styles.top}`}>
														<span className={styles.span_con_item}>
															Trình Dược Viên kênh OTC tại KV Đắk Lắk
														</span>
														<span className={styles.tooltip}>
															<span>Trình Dược Viên kênh OTC tại KV Đắk Lắk</span>
														</span>
													</p>
													<p>Đắk Lắk</p>
												</span>
											</a>
										</li>
										<li className={`${styles.online_item} ${styles.openApp} ${styles.m_online}`}>
											<a href="">
												<span className={`${styles.ava_mess} ${styles.m_online}`}>
													<img src="" alt="" />
												</span>
												<span className={`${styles.ct_online} ${styles.box_tooltip}`}>
													<p>Công Ty Cổ Phần Nam Dược Cn Miền Nam</p>
													<p className={`${styles.con_tooltip} ${styles.top}`}>
														<span className={styles.span_con_item}>
															Trình Dược Viên kênh OTC tại KV Đắk Lắk
														</span>
														<span className={styles.tooltip}>
															<span>Trình Dược Viên kênh OTC tại KV Đắk Lắk</span>
														</span>
													</p>
													<p>Đắk Lắk</p>
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={styles.ctn_banner_utcv}>
							<div className={styles.ctn_ndung_utcv}>
								<div className={`${styles.ctn_left_uplcv} ${styles.ctn_chung_utcv}`}>
									<p className={styles.ctn_tde_uplcv}>Sử dụng CV có sẵn để tìm việc làm</p>
									<p className={styles.ctn_des_uplcv}>
										AI365: Có việc siêu tốc cập nhật cv nhanh - bật đèn xanh cho nhà tuyển dụng:
									</p>
									<a className={styles.ctn_dd_uplcv} href="/tai-ho-so.html">
										Upload CV ngay{' '}
										<Image
											width={29}
											height={29}
											src="/images/before_login/exp_ultcv.png"
											alt="Upload CV"
										/>
									</a>
								</div>
								<div className={`${styles.ctn_right_tcv} ${styles.ctn_chung_utcv}`}>
									<p className={styles.ctn_tde_uplcv}>Tạo CV online ấn tượng</p>
									<p className={styles.ctn_des_uplcv}>
										Timviec365 hiện có 3500+ mẫu CV chuyên nghiệp, độc đáo cùng 5 ngôn ngữ Anh,
										Việt, Hàn... phù hợp với mọi ngành nghề
									</p>
									<a className={styles.ctn_dd_uplcv} href="/cv-xin-viec">
										Tạo CV ngay{' '}
										<Image
											width={29}
											height={29}
											src="/images/before_login/exp_ultcv.png"
											alt="Tạo CV"
										/>
									</a>
								</div>
							</div>
						</div>
						<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
							<h2 className={styles.icn_vlhd}>VIỆC LÀM THƯƠNG HIỆU</h2>
							<div className={styles.main_box_vieclam1}>
								<div className={styles.slide_hd}>
									<div className={`${styles.item_vl} ${styles.item_home_th}`}>
										<div className={styles.in_vl}>
											<div className={styles.img_item_vl}>
												<a
													href=""
													className={styles.logo_user_th}
													title="[tuyen dung] nhan vien kinh doan"
												>
													<Image
														height={70}
														width={70}
														src="/images/before_login/user_chat_off.png"
														className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
														alt=""
													/>
													<span className={styles.box_time_off}>1 ngay</span>
												</a>
												<div className={styles.box_vote_new}>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
												</div>
												<Image
													width={28}
													height={28}
													src="/images/before_login/icon_tiaset.svg"
													className={styles.icon_tiaset_new}
													alt=""
												/>
											</div>
											<div className={styles.right_item_vl}>
												<h3>
													<a
														className={styles.tit_vip}
														href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
														title="[Tuyển dụng] Nhân viên Kinh doanh"
													>
														[Tuyển dụng] Nhân viên Kinh doanh
													</a>
												</h3>
												<a
													className={styles.name_com}
													href="/cong-ty-tnhh-chung-anh-logistics-co243931"
													title="Công Ty TNHH Chung Anh Logistics"
												>
													Công Ty TNHH Chung Anh Logistics
												</a>
												<p className={styles.job_local}>Hà Nội</p>
												<p className={styles.job_chat} data-id="243931" id-chat="1346583">
													Chat
												</p>
												<p className={styles.job_time}>25/08/2023</p>
												<p className={styles.job_money} title="Từ 7.5 triệu ">
													Từ 7.5 triệu{' '}
												</p>
												<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
													<Image
														width={16}
														height={16}
														src="/images/before_login/icon_history_home.svg"
														alt="icon lịch sử"
													/>
													Lịch sử
												</a>
											</div>
										</div>
									</div>
									<div className={`${styles.item_vl} ${styles.item_home_th}`}>
										<div className={styles.in_vl}>
											<div className={styles.img_item_vl}>
												<a
													href=""
													className={styles.logo_user_th}
													title="[tuyen dung] nhan vien kinh doan"
												>
													<Image
														height={70}
														width={70}
														src="/images/before_login/user_chat_off.png"
														className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
														alt=""
													/>
													<span className={styles.box_time_off}>1 ngay</span>
												</a>
												<div className={styles.box_vote_new}>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
												</div>
												<Image
													width={28}
													height={28}
													src="/images/before_login/icon_tiaset.svg"
													className={styles.icon_tiaset_new}
													alt=""
												/>
											</div>
											<div className={styles.right_item_vl}>
												<h3>
													<a
														className={styles.tit_vip}
														href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
														title="[Tuyển dụng] Nhân viên Kinh doanh"
													>
														[Tuyển dụng] Nhân viên Kinh doanh
													</a>
												</h3>
												<a
													className={styles.name_com}
													href="/cong-ty-tnhh-chung-anh-logistics-co243931"
													title="Công Ty TNHH Chung Anh Logistics"
												>
													Công Ty TNHH Chung Anh Logistics
												</a>
												<p className={styles.job_local}>Hà Nội</p>
												<p className={styles.job_chat} data-id="243931" id-chat="1346583">
													Chat
												</p>
												<p className={styles.job_time}>25/08/2023</p>
												<p className={styles.job_money} title="Từ 7.5 triệu ">
													Từ 7.5 triệu{' '}
												</p>
												<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
													<Image
														width={16}
														height={16}
														src="/images/before_login/icon_history_home.svg"
														alt="icon lịch sử"
													/>
													Lịch sử
												</a>
											</div>
										</div>
									</div>
									<div className={`${styles.item_vl} ${styles.item_home_th}`}>
										<div className={styles.in_vl}>
											<div className={styles.img_item_vl}>
												<a
													href=""
													className={styles.logo_user_th}
													title="[tuyen dung] nhan vien kinh doan"
												>
													<Image
														height={70}
														width={70}
														src="/images/before_login/user_chat_off.png"
														className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
														alt=""
													/>
													<span className={styles.box_time_off}>1 ngay</span>
												</a>
												<div className={styles.box_vote_new}>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
												</div>
												<Image
													width={28}
													height={28}
													src="/images/before_login/icon_tiaset.svg"
													className={styles.icon_tiaset_new}
													alt=""
												/>
											</div>
											<div className={styles.right_item_vl}>
												<h3>
													<a
														className={styles.tit_vip}
														href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
														title="[Tuyển dụng] Nhân viên Kinh doanh"
													>
														[Tuyển dụng] Nhân viên Kinh doanh
													</a>
												</h3>
												<a
													className={styles.name_com}
													href="/cong-ty-tnhh-chung-anh-logistics-co243931"
													title="Công Ty TNHH Chung Anh Logistics"
												>
													Công Ty TNHH Chung Anh Logistics
												</a>
												<p className={styles.job_local}>Hà Nội</p>
												<p className={styles.job_chat} data-id="243931" id-chat="1346583">
													Chat
												</p>
												<p className={styles.job_time}>25/08/2023</p>
												<p className={styles.job_money} title="Từ 7.5 triệu ">
													Từ 7.5 triệu{' '}
												</p>
												<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
													<Image
														width={16}
														height={16}
														src="/images/before_login/icon_history_home.svg"
														alt="icon lịch sử"
													/>
													Lịch sử
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.plus_next}>
								<a className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
									Tất cả tin tuyển dụng &gt;&gt;
								</a>
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
									<a className={styles.link_list} href="/danh-sach-tia-set">
										XEM NGAY <img alt="xem ngay" src="/images/before_login/arrow_right.svg" />
									</a>
								</div>
							</div>
						</div>
						<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
							<h2 className={styles.icn_vllc}>VIỆC LÀM TUYỂN GẤP</h2>
							<div className={styles.main_box_vieclam1}>
								<div className={styles.slide_hd}>
									<div className={`${styles.item_vl} ${styles.item_home_th}`}>
										<div className={styles.in_vl}>
											<div className={styles.img_item_vl}>
												<a
													href=""
													className={styles.logo_user_th}
													title="[tuyen dung] nhan vien kinh doan"
												>
													<Image
														height={70}
														width={70}
														src="/images/before_login/user_chat_off.png"
														className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
														alt=""
													/>
													<span className={styles.box_time_off}>1 ngay</span>
												</a>
												<div className={styles.box_vote_new}>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
												</div>
												<Image
													width={28}
													height={28}
													src="/images/before_login/icon_tiaset.svg"
													className={styles.icon_tiaset_new}
													alt=""
												/>
											</div>
											<div className={styles.right_item_vl}>
												<h3>
													<a
														className={styles.tit_vip}
														href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
														title="[Tuyển dụng] Nhân viên Kinh doanh"
													>
														[Tuyển dụng] Nhân viên Kinh doanh
													</a>
												</h3>
												<a
													className={styles.name_com}
													href="/cong-ty-tnhh-chung-anh-logistics-co243931"
													title="Công Ty TNHH Chung Anh Logistics"
												>
													Công Ty TNHH Chung Anh Logistics
												</a>
												<p className={styles.job_local}>Hà Nội</p>
												<p className={styles.job_chat} data-id="243931" id-chat="1346583">
													Chat
												</p>
												<p className={styles.job_time}>25/08/2023</p>
												<p className={styles.job_money} title="Từ 7.5 triệu ">
													Từ 7.5 triệu{' '}
												</p>
												<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
													<Image
														width={16}
														height={16}
														src="/images/before_login/icon_history_home.svg"
														alt="icon lịch sử"
													/>
													Lịch sử
												</a>
											</div>
										</div>
									</div>
									<div className={`${styles.item_vl} ${styles.item_home_th}`}>
										<div className={styles.in_vl}>
											<div className={styles.img_item_vl}>
												<a
													href=""
													className={styles.logo_user_th}
													title="[tuyen dung] nhan vien kinh doan"
												>
													<Image
														height={70}
														width={70}
														src="/images/before_login/user_chat_off.png"
														className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
														alt=""
													/>
													<span className={styles.box_time_off}>1 ngay</span>
												</a>
												<div className={styles.box_vote_new}>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
												</div>
												<Image
													width={28}
													height={28}
													src="/images/before_login/icon_tiaset.svg"
													className={styles.icon_tiaset_new}
													alt=""
												/>
											</div>
											<div className={styles.right_item_vl}>
												<h3>
													<a
														className={styles.tit_vip}
														href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
														title="[Tuyển dụng] Nhân viên Kinh doanh"
													>
														[Tuyển dụng] Nhân viên Kinh doanh
													</a>
												</h3>
												<a
													className={styles.name_com}
													href="/cong-ty-tnhh-chung-anh-logistics-co243931"
													title="Công Ty TNHH Chung Anh Logistics"
												>
													Công Ty TNHH Chung Anh Logistics
												</a>
												<p className={styles.job_local}>Hà Nội</p>
												<p className={styles.job_chat} data-id="243931" id-chat="1346583">
													Chat
												</p>
												<p className={styles.job_time}>25/08/2023</p>
												<p className={styles.job_money} title="Từ 7.5 triệu ">
													Từ 7.5 triệu{' '}
												</p>
												<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
													<Image
														width={16}
														height={16}
														src="/images/before_login/icon_history_home.svg"
														alt="icon lịch sử"
													/>
													Lịch sử
												</a>
											</div>
										</div>
									</div>
									<div className={`${styles.item_vl} ${styles.item_home_th}`}>
										<div className={styles.in_vl}>
											<div className={styles.img_item_vl}>
												<a
													href=""
													className={styles.logo_user_th}
													title="[tuyen dung] nhan vien kinh doan"
												>
													<Image
														height={70}
														width={70}
														src="/images/before_login/user_chat_off.png"
														className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
														alt=""
													/>
													<span className={styles.box_time_off}>1 ngay</span>
												</a>
												<div className={styles.box_vote_new}>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
												</div>
												<Image
													width={28}
													height={28}
													src="/images/before_login/icon_tiaset.svg"
													className={styles.icon_tiaset_new}
													alt=""
												/>
											</div>
											<div className={styles.right_item_vl}>
												<h3>
													<a
														className={styles.tit_vip}
														href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
														title="[Tuyển dụng] Nhân viên Kinh doanh"
													>
														[Tuyển dụng] Nhân viên Kinh doanh
													</a>
												</h3>
												<a
													className={styles.name_com}
													href="/cong-ty-tnhh-chung-anh-logistics-co243931"
													title="Công Ty TNHH Chung Anh Logistics"
												>
													Công Ty TNHH Chung Anh Logistics
												</a>
												<p className={styles.job_local}>Hà Nội</p>
												<p className={styles.job_chat} data-id="243931" id-chat="1346583">
													Chat
												</p>
												<p className={styles.job_time}>25/08/2023</p>
												<p className={styles.job_money} title="Từ 7.5 triệu ">
													Từ 7.5 triệu{' '}
												</p>
												<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
													<Image
														width={16}
														height={16}
														src="/images/before_login/icon_history_home.svg"
														alt="icon lịch sử"
													/>
													Lịch sử
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.plus_next}>
								<a className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
									Tất cả tin tuyển dụng &gt;&gt;
								</a>
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
									<a className={styles.link_list} href="/danh-sach-anh-sao">
										XEM NGAY <img alt="xem ngay" src="/images/before_login/arrow_right.svg" />
									</a>
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
									<select
										name="filter_select"
										className={`${styles.filter_select} ${styles.select2_hidden_accessible}`}
										id="filter_select"
										tabIndex={-1}
										aria-hidden="true"
									>
										<option value="addr">Địa điểm</option>
										<option value="money">Mức lương</option>
										<option value="exp">Kinh nghiệm</option>
										<option value="cate">Ngành nghề</option>
									</select>
									<span
										className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
										dir="ltr"
										style={{ width: '270px' }}
									>
										<span className={styles.selection}>
											<span
												className={`${styles.select2_selection} ${styles.select2_selection_single}`}
												role="combobox"
												aria-haspopup="true"
												aria-expanded="false"
												tabIndex={0}
												aria-labelledby="select2-filter_select-container"
											>
												<span
													className={`${styles.select2_selection__rendered}`}
													id="select2-filter_select-container"
													title="Địa điểm"
												>
													Địa điểm
												</span>
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
									<select
										name="filter_select"
										className={`${styles.filter_select} ${styles.select2_hidden_accessible}`}
										id="filter_select_right"
										tabIndex={-1}
										aria-hidden="true"
									>
										<option value={0}>Ngẫu nhiên</option>
										<option value={1}>Hà Nội</option>
										<option value={45}>Hồ Chí Minh</option>
										<option value={1000}>Miền Bắc</option>
										<option value={1001}>Miền Trung</option>
										<option value={1002}>Miền Nam</option>
									</select>
									<span
										className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
										dir="ltr"
										style={{ width: '100px' }}
									>
										<span className={`${styles.selection}`}>
											<span
												className={`${styles.select2_selection} ${styles.select2_selection_single} ${styles.addr}`}
												role="combobox"
												aria-haspopup="true"
												aria-expanded="false"
												tabIndex={0}
												aria-labelledby="select2-filter_select_right-container"
												data-before="Việc làm tại:"
											>
												<span
													className={`${styles.select2_selection__rendered}`}
													id="select2-filter_select_right-container"
													title="Ngẫu nhiên"
												>
													Ngẫu nhiên
												</span>
												<span className={`${styles.select2_selection__arrow}`} role="presentation">
													<b role="presentation" />
												</span>
											</span>
										</span>
										<span className={`${styles.dropdown_wrapper}`} aria-hidden="true" />
									</span>
								</div>
							</div>

							<div className={styles.main_box_vieclam1}>
								<div className={styles.slide_hd}>
									<div className={`${styles.item_vl} ${styles.item_home_th}`}>
										<div className={styles.in_vl}>
											<div className={styles.img_item_vl}>
												<a
													href=""
													className={styles.logo_user_th}
													title="[tuyen dung] nhan vien kinh doan"
												>
													<Image
														height={70}
														width={70}
														src="/images/before_login/user_chat_off.png"
														className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
														alt=""
													/>
													<span className={styles.box_time_off}>1 ngay</span>
												</a>
												<div className={styles.box_vote_new}>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
												</div>
												<Image
													width={28}
													height={28}
													src="/images/before_login/icon_tiaset.svg"
													className={styles.icon_tiaset_new}
													alt=""
												/>
											</div>
											<div className={styles.right_item_vl}>
												<h3>
													<a
														className={styles.tit_vip}
														href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
														title="[Tuyển dụng] Nhân viên Kinh doanh"
													>
														[Tuyển dụng] Nhân viên Kinh doanh
													</a>
												</h3>
												<a
													className={styles.name_com}
													href="/cong-ty-tnhh-chung-anh-logistics-co243931"
													title="Công Ty TNHH Chung Anh Logistics"
												>
													Công Ty TNHH Chung Anh Logistics
												</a>
												<p className={styles.job_local}>Hà Nội</p>
												<p className={styles.job_chat} data-id="243931" id-chat="1346583">
													Chat
												</p>
												<p className={styles.job_time}>25/08/2023</p>
												<p className={styles.job_money} title="Từ 7.5 triệu ">
													Từ 7.5 triệu{' '}
												</p>
												<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
													<Image
														width={16}
														height={16}
														src="/images/before_login/icon_history_home.svg"
														alt="icon lịch sử"
													/>
													Lịch sử
												</a>
											</div>
										</div>
									</div>
									<div className={`${styles.item_vl} ${styles.item_home_th}`}>
										<div className={styles.in_vl}>
											<div className={styles.img_item_vl}>
												<a
													href=""
													className={styles.logo_user_th}
													title="[tuyen dung] nhan vien kinh doan"
												>
													<Image
														height={70}
														width={70}
														src="/images/before_login/user_chat_off.png"
														className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
														alt=""
													/>
													<span className={styles.box_time_off}>1 ngay</span>
												</a>
												<div className={styles.box_vote_new}>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
												</div>
												<Image
													width={28}
													height={28}
													src="/images/before_login/icon_tiaset.svg"
													className={styles.icon_tiaset_new}
													alt=""
												/>
											</div>
											<div className={styles.right_item_vl}>
												<h3>
													<a
														className={styles.tit_vip}
														href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
														title="[Tuyển dụng] Nhân viên Kinh doanh"
													>
														[Tuyển dụng] Nhân viên Kinh doanh
													</a>
												</h3>
												<a
													className={styles.name_com}
													href="/cong-ty-tnhh-chung-anh-logistics-co243931"
													title="Công Ty TNHH Chung Anh Logistics"
												>
													Công Ty TNHH Chung Anh Logistics
												</a>
												<p className={styles.job_local}>Hà Nội</p>
												<p className={styles.job_chat} data-id="243931" id-chat="1346583">
													Chat
												</p>
												<p className={styles.job_time}>25/08/2023</p>
												<p className={styles.job_money} title="Từ 7.5 triệu ">
													Từ 7.5 triệu{' '}
												</p>
												<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
													<Image
														width={16}
														height={16}
														src="/images/before_login/icon_history_home.svg"
														alt="icon lịch sử"
													/>
													Lịch sử
												</a>
											</div>
										</div>
									</div>
									<div className={`${styles.item_vl} ${styles.item_home_th}`}>
										<div className={styles.in_vl}>
											<div className={styles.img_item_vl}>
												<a
													href=""
													className={styles.logo_user_th}
													title="[tuyen dung] nhan vien kinh doan"
												>
													<Image
														height={70}
														width={70}
														src="/images/before_login/user_chat_off.png"
														className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
														alt=""
													/>
													<span className={styles.box_time_off}>1 ngay</span>
												</a>
												<div className={styles.box_vote_new}>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
													<Image
														className="icon_vote_new"
														width={13}
														height={13}
														src="/images/before_login/icon_star_gray.svg"
														alt="star grey"
													/>
												</div>
												<Image
													width={28}
													height={28}
													src="/images/before_login/icon_tiaset.svg"
													className={styles.icon_tiaset_new}
													alt=""
												/>
											</div>
											<div className={styles.right_item_vl}>
												<h3>
													<a
														className={styles.tit_vip}
														href="/tuyen-dung-nhan-vien-kinh-doanh-p867245.html"
														title="[Tuyển dụng] Nhân viên Kinh doanh"
													>
														[Tuyển dụng] Nhân viên Kinh doanh
													</a>
												</h3>
												<a
													className={styles.name_com}
													href="/cong-ty-tnhh-chung-anh-logistics-co243931"
													title="Công Ty TNHH Chung Anh Logistics"
												>
													Công Ty TNHH Chung Anh Logistics
												</a>
												<p className={styles.job_local}>Hà Nội</p>
												<p className={styles.job_chat} data-id="243931" id-chat="1346583">
													Chat
												</p>
												<p className={styles.job_time}>25/08/2023</p>
												<p className={styles.job_money} title="Từ 7.5 triệu ">
													Từ 7.5 triệu{' '}
												</p>
												<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
													<Image
														width={16}
														height={16}
														src="/images/before_login/icon_history_home.svg"
														alt="icon lịch sử"
													/>
													Lịch sử
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.plus_next}>
								<a className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
									Tất cả tin tuyển dụng &gt;&gt;
								</a>
							</div>
						</div>
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
											<a className={`${styles.callHot} ${styles.chat365}`} href="">
												<span className={styles.icon}>
													<Image
														height={24}
														width={24}
														src="/images/before_login/icon_chat_blue.svg"
														alt="Chat"
													/>
												</span>
												<span>Chat 365</span>
											</a>
										</div>
										<div className={`${styles.hotNd} ${styles.mbHot} ${styles.hidden}`}>
											<a
												rel="nofollow"
												target="_blank"
												title="Click chọn để chat qua zalo"
												href="http://zalo.me/0904646975"
												className="user-support"
											>
												Zalo
											</a>
											<a
												rel="nofollow"
												target="_blank"
												title="Click chọn để chat qua Skype"
												href="skype:live:binhminhmta123?chat"
												className="user-support"
											>
												Skype
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
				{/* <div id="liveChatContainer">
					<div className="widget timviec365">
						<button className="talk_button">Trực tuyến</button>
						<div className="liveChatMain" style={{ display: 'none' }}>
							<div className="liveChatHeader">
								<div className="liveChatHeaderButton">
									<button id="liveChatClose">X</button>
								</div>
								<div className="text-center text">
									<a rel="nofollow" download href="/dowload/livechat/chat.exe" className="text">
										Bạn tải CHAT365 <span className="underLine">tại đây</span> để nhận được sự hỗ
										trợ tốt nhất, <span className="underLine">tải ngay</span>
									</a>
								</div>
							</div>
							<div className="liveChatBody">
								<div className="listConversation" />
								<div id="typing" />
								<div id="mainEnterChat">
									<div id="boxPreview" className="hidden">
										<button className="itemPreview" id="itemAddNewFile">
											<img src="/images/livechat/add_new_file.svg" />
										</button>
									</div>
									<div id="boxEnterChat">
										<div id="boxEditor">
											<div id="boxRepMess">
												<div id="boxRepMessTop">
													<img src="/images/livechat/repMess.svg" />
													<div id="boxContentRepMess">
														<p id="contentRepMess" />
														<p id="timeRepMess" />
													</div>
													<button id="closeRepMess">X</button>
												</div>
											</div>
											<textarea
												disabled
												placeholder="Nhập nội dung"
												id="tawk-chatinput-editor"
												rows={1}
												defaultValue={''}
											/>
										</div>
										<div id="chatinputActionButtons">
											<button id="btnSendMess" className="hidden">
												<svg
													width={50}
													height={51}
													viewBox="0 0 30 31"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_571_56690)">
														<path
															d="M30 7.4273V23.5726C30 27.3987 26.8987 30.5 23.0727 30.5H6.92736C3.10131 30.5 0 27.3987 0 23.5727V7.4273C0 3.60131 3.10131 0.5 6.92736 0.5H23.0727C26.8987 0.5 30 3.60131 30 7.4273Z"
															fill="url(#paint0_linear_571_56690)"
														/>
														<path
															d="M6.79923 30.5C3.05012 30.5 0 27.4499 0 23.7008V7.29923C0 3.55012 3.05012 0.5 6.79923 0.5H23.2008C26.9499 0.5 30 3.55012 30 7.29923V23.7008C30 27.4499 26.9499 30.5 23.2008 30.5H6.79923Z"
															fill="url(#paint1_linear_571_56690)"
														/>
														<path
															opacity="0.5"
															d="M30.0001 15.4666V23.5725C30.0001 27.3986 26.8987 30.5 23.0726 30.5H16.8868L8.66577 22.279L23.4435 8.90997L30.0001 15.4666Z"
															fill="url(#paint2_linear_571_56690)"
														/>
														<path
															opacity="0.3"
															d="M23.7208 9.24756L5.73975 13.7902L8.95742 16.8186V22.5914L12.1258 20.1762L15.2035 23.2539L23.7208 9.24756Z"
															fill="#1A1A1A"
														/>
														<path
															d="M23.4085 8.93506L10.2539 18.3042L14.8911 22.9414L23.4085 8.93506Z"
															fill="url(#paint3_linear_571_56690)"
														/>
														<path
															d="M8.64502 16.5061V22.279L10.2539 18.3042L23.4085 8.93506L8.64502 16.5061Z"
															fill="url(#paint4_linear_571_56690)"
														/>
														<path
															d="M5.42725 13.4777L8.64492 16.5061L23.4084 8.93506L5.42725 13.4777Z"
															fill="url(#paint5_linear_571_56690)"
														/>
														<path
															d="M8.64502 22.279L11.8134 19.8638L10.2539 18.3042L8.64502 22.279Z"
															fill="#D2D2D2"
														/>
														<path
															d="M23.4085 8.93506L10.2539 18.3042L14.8911 22.9414L23.4085 8.93506Z"
															fill="white"
														/>
														<path
															d="M8.64502 16.5061V22.279L10.2539 18.3042L23.4085 8.93506L8.64502 16.5061Z"
															fill="#9FB5DF"
														/>
														<path
															d="M5.42725 13.4777L8.64492 16.5061L23.4084 8.93506L5.42725 13.4777Z"
															fill="white"
														/>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_571_56690"
															x1={15}
															y1="0.5"
															x2={15}
															y2="30.5"
															gradientUnits="userSpaceOnUse"
														>
															<stop offset="0.005" stopColor="#FFE5AE" />
															<stop offset={1} stopColor="#FF992D" />
														</linearGradient>
														<linearGradient
															id="paint1_linear_571_56690"
															x1={15}
															y1="0.792976"
															x2={15}
															y2="30.678"
															gradientUnits="userSpaceOnUse"
														>
															<stop stopColor="#4C5BD4" />
															<stop offset={1} stopColor="#1F7ED0" />
														</linearGradient>
														<linearGradient
															id="paint2_linear_571_56690"
															x1="15.9939"
															y1="15.5339"
															x2="28.7275"
															y2="28.267"
															gradientUnits="userSpaceOnUse"
														>
															<stop stopColor="#64A8E2" />
															<stop offset={1} stopColor="#1F7ED0" stopOpacity={0} />
														</linearGradient>
														<linearGradient
															id="paint3_linear_571_56690"
															x1="10.2539"
															y1="15.9382"
															x2="23.4085"
															y2="15.9382"
															gradientUnits="userSpaceOnUse"
														>
															<stop offset="0.009" stopColor="#F3E0DF" />
															<stop offset={1} stopColor="#E8E0BA" />
														</linearGradient>
														<linearGradient
															id="paint4_linear_571_56690"
															x1="14.2217"
															y1="12.9556"
															x2="15.4627"
															y2="14.7785"
															gradientUnits="userSpaceOnUse"
														>
															<stop offset="0.009" stopColor="#65BCC0" />
															<stop offset={1} stopColor="#53838A" />
														</linearGradient>
														<linearGradient
															id="paint5_linear_571_56690"
															x1="5.42725"
															y1="12.7206"
															x2="23.4084"
															y2="12.7206"
															gradientUnits="userSpaceOnUse"
														>
															<stop offset="0.009" stopColor="#F3E0DF" />
															<stop offset={1} stopColor="#E8E0BA" />
														</linearGradient>
														<clipPath id="clip0_571_56690">
															<rect y="0.5" width={30} height={30} rx={15} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</button>
											<button id="addFile">
												<svg
													width={32}
													height={38}
													viewBox="0 0 22 28"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M21.0371 7.45508L14.7324 1.15039C14.5566 0.974609 14.3193 0.875 14.0703 0.875H1.625C1.10645 0.875 0.6875 1.29395 0.6875 1.8125V26.1875C0.6875 26.7061 1.10645 27.125 1.625 27.125H20.375C20.8936 27.125 21.3125 26.7061 21.3125 26.1875V8.12012C21.3125 7.87109 21.2129 7.63086 21.0371 7.45508ZM19.1504 8.55078H13.6367V3.03711L19.1504 8.55078ZM19.2031 25.0156H2.79688V2.98438H11.6445V9.3125C11.6445 9.63884 11.7742 9.95182 12.0049 10.1826C12.2357 10.4133 12.5487 10.543 12.875 10.543H19.2031V25.0156ZM11.9375 12.8281C11.9375 12.6992 11.832 12.5938 11.7031 12.5938H10.2969C10.168 12.5938 10.0625 12.6992 10.0625 12.8281V15.9922H6.89844C6.76953 15.9922 6.66406 16.0977 6.66406 16.2266V17.6328C6.66406 17.7617 6.76953 17.8672 6.89844 17.8672H10.0625V21.0312C10.0625 21.1602 10.168 21.2656 10.2969 21.2656H11.7031C11.832 21.2656 11.9375 21.1602 11.9375 21.0312V17.8672H15.1016C15.2305 17.8672 15.3359 17.7617 15.3359 17.6328V16.2266C15.3359 16.0977 15.2305 15.9922 15.1016 15.9922H11.9375V12.8281Z"
														fill="#474747"
													/>
												</svg>
											</button>
											<input type="file" id="tawk-chatinput-addFile" multiple hidden />
										</div>
									</div>
								</div>
								<button id="onBotLiveChat">
									<img src="/images/livechat/onBottom.svg" />
								</button>
							</div>
							<div id="drag">
								<img src="/images/livechat/drag.png" />
							</div>
						</div>
					</div>
					<audio controls id="notificationAudio" style={{ display: 'none' }} />
				</div> */}
			</>
		</>
	)
}

Home.Layout = HomePageBeforeLayout

export default Home
