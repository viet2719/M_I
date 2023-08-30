import React, { useState } from 'react'
import styles from './pc_form.module.css'
import { Switch } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
type Props = {}

const Pc_form_after_login = (props: Props) => {
	const [showHsXv, setShowHsXv] = useState<boolean>(false)
	const [showHths, setshowHths] = useState<boolean>(false)
	const [showqlts, setshowqlts] = useState<boolean>(false)
	return (
		<div className={`${styles.mobi_sh_ul} ${styles.ctn_mobi_sh_ul}`} style={{ display: 'block' }}>
			<div id="mobi_ul" className={`${styles.m_header_mobile} ${styles.displayblock}`}>
				<div className={styles.mobi_from}>
					<div className={styles.m_ul_container} style={{ borderRadius: 20 }}>
						<li className={`${styles.ctn_mobi_sub_domain} ${styles.m_mobile_menu}`}>
							<div style={{ display: 'flex', gap: 10 }}>
								<div>
									<Image
									width={20}
									height={21}
										className={`${styles.ctn_avt_us} + ${styles.lazyloaded}`}
										src="https://timviec365.vn/images/dk_s.png"
										data-src="/images/dk_s.png"
										alt="Nguyễn Quang Trường"
									/>
								</div>

								<div className={styles.box_name_user}>
									<p className={styles.m_name_user} style={{ paddingBottom: 5 }}>
										<Link
											className={styles.dt_chat}
											href="/ung-vien/nguyen-quang-truong-uv1333676.html"
											rel="nofollow"
											target="_blank"
										>
											Nguyễn Quang Trường
										</Link>
									</p>
									<div className={styles.box_input_ntd} style={{ display: 'flex', gap: 10 }}>
										<label className={styles.m_label_cphepntd}>
											<Switch defaultChecked={true} size="small" />
											<span className={styles.m_span_cphepntd} />
										</label>
										<div>
											{' '}
											<p className={styles.m_txt_cphepntd}>Cho phép nhà tuyển dụng tìm thấy</p>
										</div>
									</div>
								</div>
							</div>
						</li>

						{/* ------- */}
						<div className={`${styles.container_menu_mobile}`}>
							<Link
								href="https://truyenthongnoibo.timviec365.vn/"
								target="_blank"
								rel="nofollow"
								className={`${styles.cursor_pt}`}
							>
								<li className={`${styles.menu_mobile_chung} ${styles.box_ic_menu}`}>
									<div
										style={{
											display: 'flex',
											gap: 10,
											color: 'black',
											fontSize: 14,
											paddingLeft: 20,
										}}
									>
										<Image
										width={20}
										height={21}
											className={`${styles.ic_menu}`}
											src="https://timviec365.vn/images/New_images/ic_menu_btin.svg"
											alt="bảng tin"
										/>
										<p
											className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
											style={{ color: 'rgb(71, 71, 71)' }}
										>
											&nbsp;Bảng tin
										</p>
									</div>
								</li>
							</Link>
							<div
								className={`${styles.more_infor_menu} `}
								style={{ overflow: 'hidden', paddingLeft: 20 }}
							>
								<div className={styles.box_more_menu}>
									<Link href="/quan-ly-ung-vien" rel="nofollow">
										<li className={`${styles.menu_mobile_chung} ${styles.box_ic_menu}`}>
											<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14 }}>
												<div>
													<Image
													width={20}
													height={21}
														className={styles.ic_menu}
														src="https://timviec365.vn/images/New_images/ic_menu_qlc.svg"
														alt="quản lý chung"
													/>
												</div>
												<div>
													<p
														className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
														style={{ color: 'rgb(71, 71, 71)' }}
													>
														{' '}
														Quản lý chung
													</p>
												</div>
											</div>
										</li>
									</Link>
									<div className={styles.container_hosoxv + ' ' + styles.content_menu_chung}>
										<li
											className={`${styles.header_poppup_item} ${styles.box_ic_menu}${styles.cursor_pt}`}
										>
											<div
												className={`${styles.container_hsxinviec} ${styles.container_menu_chung}`}
											>
												<div
													onClick={() => setShowHsXv(!showHsXv)}
													className={styles.content_hsxinviec}
													style={{
														display: 'flex',
														justifyContent: 'space-between',
														cursor: 'pointer',
													}}
												>
													<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14 }}>
														<div>
															<Image
															width={20}
															height={21}
																className={styles.ic_menu}
																src="https://timviec365.vn/images/New_images/ic_menu_hsxv.svg"
																alt="hồ sơ xin việc"
															/>
														</div>
														<div>
															<p
																className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
																style={{ color: 'rgb(71, 71, 71)' }}
															>
																Hồ sơ xin việc
															</p>
														</div>
													</div>
													<div>
														<Image
														width={20}
														height={21}
															className={`${styles.ic_menu} ${styles.ic_menu_angle} ${styles.angle_menu_hsxv}`}
															src="https://timviec365.vn/images/New_images/angle_bottom.svg"
															alt="mở rộng"
															style={{ transform: 'rotate(0deg)' }}
														/>
													</div>
												</div>
											</div>
										</li>
										{showHsXv && (
											<div
												className={`${styles.show_menu_more} ${styles.show_menu_more_hsxv}`}
												style={{ overflow: 'hidden', cursor: 'pointer' }}
											>
												<div
													style={{
														display: 'flex',
														justifyContent: 'space-around',
														lineHeight: 3,
														fontSize: 14,
													}}
												>
													<div style={{ padding: 16, fontSize: 14 }}>
														<div className={styles.menu_more}>
															<Link
																href="/ung-vien/danh-sach-mau-cv"
																rel="nofollow"
																className={`${styles.txt_qlc_more}${styles.cursor_pt}`}
															>
																<p
																	className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
																	style={{ color: 'rgb(71, 71, 71)' }}
																>
																	CV xin việc
																</p>
															</Link>
															<Link
																href="/ho-so-tai-len"
																rel="nofollow"
																className={`${styles.txt_qlc_more}${styles.cursor_pt}`}
															>
																<p>File tải lên</p>
															</Link>
														</div>
														<div className={styles.menu_more}>
															<Link
																href="/ho-so-ung-vien?vdgt=1"
																rel="nofollow"
																className={`${styles.txt_qlc_more}${styles.cursor_pt}`}
															>
																<p>Video tải lên</p>
															</Link>
															<Link
																href="/cv365/mau-don-xin-viec"
																rel="nofollow"
																className={`${styles.txt_qlc_more}${styles.cursor_pt}`}
															>
																<p>Đơn xin việc</p>
															</Link>
														</div>
													</div>
													<div style={{ padding: 16, fontSize: 14 }}>
														<div className={styles.menu_more}>
															<Link
																href="/cv365/mau-cover-letter-thu-xin-viec"
																rel="nofollow"
																className={`${styles.txt_qlc_more}${styles.cursor_pt}`}
															>
																<p>Thư xin việc</p>
															</Link>
															<Link
																href="/cv365/mau-so-yeu-ly-lich"
																rel="nofollow"
																className={`${styles.txt_qlc_more}${styles.cursor_pt}`}
															>
																<p>Sơ yếu lý lịch</p>
															</Link>
														</div>
														<div className={styles.menu_more}>
															<Link
																href="/ho-so-ung-vien"
																rel="nofollow"
																className={`${styles.txt_qlc_more}${styles.cursor_pt}`}
															>
																<p>Hồ sơ online</p>
															</Link>
															<Link
																href="/tai-ho-so.html"
																rel="nofollow"
																className={`${styles.txt_qlc_more}${styles.cursor_pt}`}
															>
																<p>Upload CV</p>
															</Link>
														</div>
													</div>
													<div></div>
												</div>
											</div>
										)}
									</div>

									<div className={styles.container_hosoxv + ' ' + styles.content_menu_chung}>
										<li
											className={`${styles.header_poppup_item} ${styles.box_ic_menu}${styles.cursor_pt}`}
										>
											<div
												className={`${styles.container_hsxinviec} ${styles.container_menu_chung}`}
											>
												<div
													onClick={() => setshowHths(!showHths)}
													className={styles.content_hsxinviec}
													style={{
														display: 'flex',
														justifyContent: 'space-between',
														cursor: 'pointer',
													}}
												>
													<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14 }}>
														<div>
															<Image
															width={20}
															height={21}
																className={styles.ic_menu}
																src="https://timviec365.vn/images/New_images/ic_menu_hths.svg"
																alt="hoàn thiện hồ sơ"
															/>
														</div>
														<div>
															<p
																className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
																style={{ color: 'rgb(71, 71, 71)' }}
															>
																Hoàn thiện hồ sơ
															</p>
														</div>
													</div>
													<div>
														<Image
														width={20}
														height={21}
															className={`${styles.ic_menu} ${styles.ic_menu_angle} ${styles.angle_menu_hsxv}`}
															src="https://timviec365.vn/images/New_images/angle_bottom.svg"
															alt="mở rộng"
															style={{ transform: 'rotate(0deg)' }}
														/>
													</div>
												</div>
											</div>
										</li>
										{showHths && (
											<div className={styles.content_menu_more}>
												<Link href="/ho-so-ung-vien" rel="nofollow">
													<div className={styles.menu_more}>
														<p className={`${styles.txt_qlc_more}${styles.cursor_pt}`}>
															<div style={{ padding: 16, fontSize: 14 }}>
																Tiến trình hoàn thiện hồ sơ{' '}
																<span
																	style={{
																		color: '#4C5BD4',
																		fontFamily: 'Roboto-Medium',
																	}}
																>
																	12.5%
																</span>
															</div>
														</p>
													</div>
												</Link>
												<div className={`${styles.menu_more}`}>
													<p className={`${styles.txt_qlc_more}${styles.cursor_pt}`}>
														<div style={{ paddingLeft: 16, fontSize: 14 }}>Làm mới hồ sơ</div>
													</p>
												</div>
											</div>
										)}
									</div>
									<Link href="/viec-lam-goi-y" rel="nofollow">
										<li
											className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
										>
											<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14 }}>
												<div>
													<Image
													width={20}
													height={21}
														className={`${styles.ic_menu}`}
														src="https://timviec365.vn/images/New_images/ic_menu_gyvlai.svg"
														alt="việc làm gợi ý từ AI"
													/>
												</div>
												<div>
													<p
														className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
														style={{ color: 'rgb(71, 71, 71)' }}
													>
														Việc làm gợi ý từ AI365
													</p>
												</div>
											</div>
										</li>
									</Link>

									<Link href="/viec-lam-ung-tuyen" rel="nofollow">
										<li
											className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
										>
											<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14 }}>
												<div>
													<Image
													width={20}
													height={21}
														className={`${styles.ic_menu}`}
														src="https://timviec365.vn/images/New_images/ic_menu_vldut.png"
														alt="việc làm đã ứng tuyển"
													/>
												</div>
												<div>
													<p
														className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
														style={{ color: 'rgb(71, 71, 71)' }}
													>
														Việc làm đã ứng tuyển
													</p>
												</div>
											</div>
										</li>
									</Link>
									<Link href="https://timviec365.vn/viec-lam-da-luu" rel="nofollow">
										<li
											className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
										>
											<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14 }}>
												<div>
													<Image
													width={20}
													height={21}
														className={`${styles.ic_menu}`}
														src="https://timviec365.vn/images/New_images/ic_menu_vldl.svg"
														alt="việc làm đã lưu"
													/>
												</div>
												<div>
													<p className={`${styles.txt_ic_menu}`}>Việc làm đã lưu</p>
												</div>
											</div>
										</li>
									</Link>

									{/* <Link href="https://chat365.timviec365.vn/" rel="nofollow" target="_blank"> */}

									<Link href="#" rel="nofollow">
										<li
											className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
										>
											<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14 }}>
												<div>
													<Image
													width={20}
													height={21}
														className={`${styles.ic_menu}`}
														src="https://timviec365.vn/images/New_images/ic_menu_chat.svg"
														alt="chat365"
													/>
												</div>
												<div>
													<p
														className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
														style={{ color: 'rgb(71, 71, 71)' }}
													>
														Chat365
													</p>
												</div>
											</div>
										</li>
									</Link>
									<Link href="/mail365/" rel="nofollow">
										<li
											className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
										>
											<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14 }}>
												<div>
													<Image
													width={20}
													height={21}
														className={`${styles.ic_menu}`}
														src="https://timviec365.vn/images/New_images/ic_menu_email.svg"
														alt="email đã nhận"
													/>
												</div>
												<div>
													<p
														className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
														style={{ color: 'rgb(71, 71, 71)' }}
													>
														Email đã nhận
													</p>
												</div>
											</div>
										</li>
									</Link>
									<div className={`${styles.container_hsxinviec} ${styles.container_menu_chung}`}>
										{' '}
										<li
											className={`${styles.header_poppup_item} ${styles.box_ic_menu}${styles.cursor_pt}`}
										>
											<div
												onClick={() => setshowqlts(!showqlts)}
												className={styles.content_hsxinviec}
												style={{
													display: 'flex',
													justifyContent: 'space-between',
													cursor: 'pointer',
												}}
											>
												<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14 }}>
													<div>
														<Image
														width={20}
														height={21}
															className={`${styles.ic_menu}`}
															src="https://timviec365.vn/images/New_images/ic_menu_qltk.svg"
															alt="quản lý tài khoản"
														/>
													</div>
													<div>
														<p
															className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
															style={{ color: 'rgb(71, 71, 71)' }}
														>
															Quản lý tài khoản
														</p>
													</div>
												</div>
												<div>
													<Image
													width={20}
													height={21}
														className={`${styles.ic_menu} ${styles.ic_menu_angle} ${styles.angle_menu_hsxv}`}
														src="https://timviec365.vn/images/New_images/angle_bottom.svg"
														alt="mở rộng"
														style={{ transform: 'rotate(0deg)' }}
													/>
												</div>
											</div>
										</li>
										{showqlts && (
											<div
												style={{ cursor: 'pointer' }}
												className={`${styles.show_menu_more} ${styles.show_menu_more_qltk}`}
											>
												<div
													style={{
														display: 'flex',
														justifyContent: 'space-around',
														lineHeight: 3,
														fontSize: 14,
													}}
												>
													<div className={`${styles.menu_more}`}>
														<Link
															href="/doi-mat-khau-ung-vien.html"
															rel="nofollow"
															className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
														>
															<p>Đổi mật khẩu</p>
														</Link>
														<div className={`${styles.menu_more}`}>
															{/* <p className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}>Thông tin chuyên viên hỗ trợ</p> */}
															<Link
																href="/ung-vien/quan-ly-phan-quyen"
																rel="nofollow"
																className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
															>
																<p>Phân quyền</p>
															</Link>
															<p className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}>
																QR tài khoản
															</p>
														</div>
													</div>
													<div className={`${styles.menu_more}`}>
														<Link
															href="/ho-so-ung-vien"
															rel="nofollow"
															className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
														>
															<p>Thông tin tài khoản</p>
														</Link>
														<Link
															href="/ung-vien/quan-ly-thong-bao"
															rel="nofollow"
															className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
														>
															<p>Thông báo</p>
														</Link>
													</div>
													<div></div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className={`${styles.container_menu_mobile}`}>
							<Link href="/dang-xuat-ung-vien" rel="nofollow">
								<li
									className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
								>
									<div style={{ display: 'flex', gap: 10, color: 'black', fontSize: 14,paddingLeft:20,paddingTop:10 }}>
										<div>
											<Image
											width={20}
											height={21}
												className={`${styles.ic_menu}`}
												src="https://timviec365.vn/images/New_images/ic_menu_dxuat.svg"
												alt="đăng xuất"
											/>
										</div>
										<div>
											<p
												className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
												style={{ color: 'red' }}
											>
												&nbsp;Đăng xuất
											</p>
										</div>
									</div>
								</li>
							</Link>
						</div>
					</div>
					{/*  */}
					<div className={`${styles.popup_show_listnganhnghe} ${styles.d_none}`}>
						<div className={`${styles.container_list}`}>
							<div className={`${styles.header_list} ${styles.cursor_pt}`}>
								<Image
									width={20}
									height={21}
									className={`${styles.ic_menu}`}
									src="https://timviec365.vn/images/New_images/ic_menu_angle_left.svg" alt={''}								/>
								<p className={`${styles.txt_list_header} ${styles.cursor_pt}`}>
									CV theo ngành nghề
								</p>
							</div>
							<div className={`${styles.content_list}`}>
								<Link rel="nofollow" href="/cv365/cv-it" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>IT</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-seo-website"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>SEO Website</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-marketing" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Marketing</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-ke-toan" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Kế toán</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-hanh-chinh-nhan-su"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Hành chính nhân sự</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-kinh-doanh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Kinh doanh</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-cong-nghe-thuc-pham"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Công Nghệ Thực Phẩm</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-hang-khong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Hàng Không</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-xay-dung" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Xây dựng</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-co-khi" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Cơ khí</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-van-chuyen-giao-nhan"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Vận Chuyển Giao Nhận</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-developers"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Developers</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-to-chuc-su-kien"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Tổ Chức Sự Kiện</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-an-toan-lao-dong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>An Toàn Lao Động</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-truyen-thong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Truyền Thông</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-dien-dien-tu"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Xuất nhập khẩu</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-bien-phien-dich"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Biên phiên dịch</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-kien-truc-noi-that"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Kiến trúc nội thất</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-bat-dong-san"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Bất động sản</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-sinh-vien-moi-ra-truong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Sinh viên mới ra trường</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-nhan-vien-ban-hang"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Nhân viên bán hàng</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-quan-tri-kinh-doanh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Quản trị kinh doanh</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-thu-ky-tro-ly"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thư ký - trợ lý</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-tu-van-vien"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Tư vấn viên</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-cham-soc-khach-hang"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Chăm sóc khách hàng</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-tiep-thi-quang-cao"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Tiếp thị quảng cáo</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-y-te-duoc" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Y tế dược</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-thu-ngan" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Thu Ngân</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-viec-lam-ban-thoi-gian"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Bán Thời Gian</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-thuong-mai-dien-tu"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thương mại điện tử</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-luat-phap-ly"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Luật pháp lý</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-thiet-bi-vat-tu"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thiết bị vật tư</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-giao-thong-van-tai"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Giao thông vận tải</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-quan-ly-dieu-hanh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Quản lý điều hành</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-phat-trien-thi-truong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Phát triển thị trường</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-van-hanh-san-xuat"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Vận hành sản xuất</p>
								</Link>

								<Link
									rel="nofollow"
									href="/cv365/cv-tham-dinh-giam-dinh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thẩm định giám định</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-du-lich" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Du lịch</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-nha-hang-khach-san"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Nhà hàng khách sạn</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-chan-nuoi-thu-y"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Chăn nuôi thú y</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-thuy-san" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Thủy Sản</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-bao-chi-truyen-hinh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Báo chí - Truyền hình</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-buu-chinh-vien-thong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Bưu chính viễn thông</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-dien-tu-vien-thong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Điện tử viễn thông</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-hanh-chinh-van-phong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Hành chính văn phòng</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-it-phan-cung-mang"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>It - Phần Cứng - Mạng</p>
								</Link>

								<Link rel="nofollow" href="/cv365/cv-ky-thuat" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Kỹ Thuật</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-thiet-ke-my-thuat"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thiết Kế - Mỹ Thuật</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-bao-hiem" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Bảo Hiểm</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-bao-ve" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Bảo Vệ</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-det-may-da-giay"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Dệt May - Da Giày</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-hoa-hoc-sinh-hoc"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Hóa Học - Sinh Học</p>
								</Link>

								<Link
									rel="nofollow"
									href="/cv365/cv-hoach-dinh-du-an"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Hoạch Định - Dự án</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-lao-dong-pho-thong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Lao Động Phổ Thông</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-my-pham-thoi-trang-trang-suc"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Mỹ Phẩm - Thời Trang</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-ngan-hang-chung-khoan"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Ngân hàng</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-dich-vu" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Dịch Vụ</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-ky-thuat-ung-dung"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Kỹ Thuật Ứng Dụng</p>
								</Link>

								<Link
									rel="nofollow"
									href="/cv365/cv-nong-lam-ngu-nghiep"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Nông Lâm Ngư nghiệp</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-quan-he-doi-ngoai"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Quan Hệ Đối Ngoại</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-the-duc-the-thao"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thể dục - Thể thao</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-thuc-pham-do-uong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thực phẩm - Đồ uống</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-van-tai-lai-xe"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Vận tải - Lái xe</p>
								</Link>

								<Link
									rel="nofollow"
									href="/cv365/cv-lam-dep-the-luc-spa"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Làm đẹp - Spa</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-viec-lam-phuc-vu"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Phục Vụ</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-viec-lam-trai-nganh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Trái Ngành </p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-viec-lam-telesale"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Telesale</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-viec-lam-le-tan"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Lễ Tân</p>
								</Link>

								<Link rel="nofollow" href="/cv365/cv-thong-ke" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Thống Kê</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-copywriter"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Copywriter</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-cong-nghe-cao"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Công Nghệ Cao </p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-logistic" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Logistic</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-tai-chinh" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tài Chính</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-tro-giang-tieng-anh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Trợ Giảng Tiếng Anh </p>
								</Link>

								<Link
									rel="nofollow"
									href="/cv365/cv-viec-lam-nganh-giao-duc"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Giáo Dục</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-trac-dia" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Trắc Địa</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-nau-an" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Nấu Ăn</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-hang-hai" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Hàng Hải</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-bao-tri" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Bảo Trì</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-dia-chat" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Địa Chất</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-thu-vien" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Thư Viện</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-khu-che-xuat-khu-cong-nghiep"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Khu chế xuất - khu công nghiệp</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-startup" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Startup</p>
								</Link>
							</div>
						</div>
					</div>
					{/*  */}
					<div className={`${styles.popup_show_listngongu} ${styles.d_none}`}>
						<div className={`${styles.container_list}`}>
							<div className={`${styles.header_list} ${styles.cursor_pt}`}>
								<Image
								width={20}
								height={21}
									className={`${styles.ic_menu}`}
									src="/images/New_images/ic_menu_angle_left.svg"
									alt="cv theo ngôn ngữ"
								/>
								<p className={`${styles.txt_list_header} ${styles.cursor_pt}`}>CV theo ngôn ngữ</p>
							</div>
							<div className={`${styles.content_list}`}>
								<Link rel="nofollow" href="/cv365/cv-tieng-anh" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tiếng Anh</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-tieng-trung"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Tiếng Trung</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-tieng-nhat"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Tiếng Nhật</p>
								</Link>
								<Link rel="nofollow" href="/cv365/cv-tieng-han" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tiếng Hàn</p>
								</Link>
								<Link
									rel="nofollow"
									href="/cv365/cv-tieng-viet"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Tiếng Việt</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Pc_form_after_login
