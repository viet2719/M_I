import React, { useState } from 'react'
import styles from './mobile_form.module.css'
import { Switch } from 'antd'
type Props = {}

const Mobile_form_after_login = (props: Props) => {
	const [showChiTiet, setShowChiTiet] = useState(false)
	return (
		<div className={`${styles.mobi_sh_ul} ${styles.ctn_mobi_sh_ul}`} style={{ display: 'block' }}>
			<div id="mobi_ul" className={`${styles.m_header_mobile} ${styles.displayblock}`}>
				<div className={styles.mobi_from}>
					<div className={styles.m_ul_container}>
						<li className={`${styles.ctn_mobi_sub_domain} ${styles.m_mobile_menu}`}>
							<div style={{ display: 'flex', gap: 10 }}>
								<div>
									<img
										className={`${styles.ctn_avt_us} + ${styles.lazyloaded}`}
										src="https://timviec365.vn/images/dk_s.png"
										data-src="/images/dk_s.png"
										alt="Nguyễn Quang Trường"
									/>
								</div>

								<div className={styles.box_name_user}>
									<p className={styles.m_name_user}>
										<a
											className={styles.dt_chat}
											href="/ung-vien/nguyen-quang-truong-uv1333676.html"
											rel="nofollow"
											target="_blank"
										>
											Nguyễn Quang Trường
										</a>
									</p>
									<div className={styles.box_input_ntd} style={{ display: 'flex' }}>
										<label className={styles.m_label_cphepntd}>
											<Switch size="small" />
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
						<div
							onClick={() => setShowChiTiet(!showChiTiet)}
							className={styles.container_menu_mobile}
						>
							<li
								className={`${styles.menu_mobile_chung} ${styles.menu_mobile_qlct} ${styles.cursor_pt}`}
							>
								<div className={styles.box_quanlychitiet}>
									<div className={styles.m_quanlychitiet}>
										<img
											className={styles.ic_menu_mobile}
											src="https://timviec365.vn/images/New_images/ic_menu_qlct.svg"
											alt="quản lý chi tiết"
										/>
										<p
											className={`${styles.txt_qlct} ${styles.txt_menu_mobile}`}
											style={{ color: 'rgb(71, 71, 71)' }}
										>
											Quản lý chi tiết
										</p>
									</div>
									<img
										className={`${styles.angle_menu_mobile} ${styles.ic_menu}`}
										src="https://timviec365.vn/images/New_images/angle_bottom.svg"
										alt="mở rộng"
										style={{ transform: 'rotate(0deg)' }}
									/>
								</div>
							</li>
							{showChiTiet && (
								<div
									className={`${styles.more_infor_menu} `}
									style={{ overflow: 'hidden', paddingLeft: 20 }}
								>
									<div className={styles.box_more_menu}>
										<a href="/quan-ly-ung-vien" rel="nofollow">
											<li
												className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
											>
												<div style={{ display: 'flex', gap: 10 }}>
													<div>
														<img
															className={styles.ic_menu}
															src="https://timviec365.vn/images/New_images/ic_menu_qlc.svg"
															alt="quản lý chung"
														/>
													</div>
													<div>
														<p className={styles.txt_ic_menu}>Quản lý chung</p>
													</div>
												</div>
											</li>
										</a>
										<div className={styles.container_hosoxv + ' ' + styles.content_menu_chung}>
											<li
												className={`${styles.header_poppup_item} ${styles.box_ic_menu} cursor_pt`}
											>
												<div
													className={`${styles.container_hsxinviec} ${styles.container_menu_chung}`}
												>
													<div
														className={styles.content_hsxinviec}
														style={{ display: 'flex', justifyContent: 'space-between' }}
													>
														<div style={{ display: 'flex', gap: 10 }}>
															<div>
																<img
																	className={styles.ic_menu}
																	src="https://timviec365.vn/images/New_images/ic_menu_hsxv.svg"
																	alt="hồ sơ xin việc"
																/>
															</div>
															<div>
																<p
																	className={styles.txt_ic_menu}
																	style={{ color: 'rgb(71, 71, 71)' }}
																>
																	Hồ sơ xin việc
																</p>
															</div>
														</div>
														<div>
															<img
																className={`${styles.ic_menu} ${styles.ic_menu_angle} ${styles.angle_menu_hsxv}`}
																src="https://timviec365.vn/images/New_images/angle_bottom.svg"
																alt="mở rộng"
																style={{ transform: 'rotate(0deg)' }}
															/>
														</div>
													</div>
												</div>
											</li>
											<div
												className={`${styles.show_menu_more} ${styles.show_menu_more_hsxv} ${styles.d_none}`}
												style={{ overflow: 'hidden', display: 'none' }}
											>
												<div className={styles.content_menu_more}>
													<div className={styles.menu_more}>
														<a
															href="/ung-vien/danh-sach-mau-cv"
															rel="nofollow"
															className={`${styles.txt_qlc_more} cursor_pt`}
														>
															<p>CV xin việc</p>
														</a>
														<a
															href="/ho-so-tai-len"
															rel="nofollow"
															className={`${styles.txt_qlc_more} cursor_pt`}
														>
															<p>File tải lên</p>
														</a>
													</div>
													<div className={styles.menu_more}>
														<a
															href="/ho-so-ung-vien?vdgt=1"
															rel="nofollow"
															className={`${styles.txt_qlc_more} cursor_pt`}
														>
															<p>Video tải lên</p>
														</a>
														<a
															href="/cv365/mau-don-xin-viec"
															rel="nofollow"
															className={`${styles.txt_qlc_more} cursor_pt`}
														>
															<p>Đơn xin việc</p>
														</a>
													</div>
													<div className={styles.menu_more}>
														<a
															href="/cv365/mau-cover-letter-thu-xin-viec"
															rel="nofollow"
															className={`${styles.txt_qlc_more} cursor_pt`}
														>
															<p>Thư xin việc</p>
														</a>
														<a
															href="/cv365/mau-so-yeu-ly-lich"
															rel="nofollow"
															className={`${styles.txt_qlc_more} cursor_pt`}
														>
															<p>Sơ yếu lý lịch</p>
														</a>
													</div>
													<div className={styles.menu_more}>
														<a
															href="/ho-so-ung-vien"
															rel="nofollow"
															className={`${styles.txt_qlc_more} cursor_pt`}
														>
															<p>Hồ sơ online</p>
														</a>
														<a
															href="/tai-ho-so.html"
															rel="nofollow"
															className={`${styles.txt_qlc_more} cursor_pt`}
														>
															<p>Upload CV</p>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className={styles.content_menu_chung}>
											<li
												className={`${styles.header_poppup_item} ${styles.box_ic_menu} cursor_pt`}
											>
												<div className={`${styles.container_hths} ${styles.container_menu_chung}`}>
													<div
														className={styles.content_hsxinviec}
														style={{ display: 'flex', justifyContent: 'space-between' }}
													>
														<div style={{ display: 'flex', gap: 10 }}>
															<div>
																<img
																	className="ic_menu"
																	src="https://timviec365.vn/images/New_images/ic_menu_hths.svg"
																	alt="hoàn thiện hồ sơ"
																/>
															</div>
															<div>
																<p
																	className={`${styles.txt_ic_menu}`}
																	style={{ color: 'rgb(71, 71, 71)' }}
																>
																	Hoàn thiện hồ sơ
																</p>
															</div>
														</div>
														<div>
															<img
																className={`${styles.ic_menu} ${styles.ic_menu_angle} ${styles.angle_menu_hsxv}`}
																src="https://timviec365.vn/images/New_images/angle_bottom.svg"
																alt="mở rộng"
																style={{ transform: 'rotate(0deg)' }}
															/>
														</div>
													</div>
												</div>
											</li>
											<div
												className={`${styles.show_menu_more} ${styles.d_none}`}
												style={{ overflow: 'hidden', display: 'none' }}
											>
												<div className={styles.content_menu_more}>
													<a href="/ho-so-ung-vien" rel="nofollow">
														<div className={styles.menu_more}>
															<p className={`${styles.txt_qlc_more} cursor_pt`}>
																Tiến trình hoàn thiện hồ sơ (
																<span
																	style={{
																		color: '#4C5BD4',
																		fontFamily: 'Roboto-Medium',
																	}}
																>
																	12.5%
																</span>
																)
															</p>
														</div>
													</a>
													<div className={`${styles.menu_more}`}>
														<p className={`${styles.txt_qlc_more} cursor_pt`}>Làm mới hồ sơ</p>
													</div>
												</div>
											</div>
										</div>
										<a href="/viec-lam-goi-y" rel="nofollow" className={styles.cursor_pt}>
											<li
												className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
											>
												<img
													className={`${styles.ic_menu}`}
													src="https://timviec365.vn/images/New_images/ic_menu_gyvlai.svg"
													alt="việc làm gợi ý từ AI"
												/>
												<p className={`${styles.txt_ic_menu}`}>Việc làm gợi ý từ AI365</p>
											</li>
										</a>
										<a href="/viec-lam-ung-tuyen" rel="nofollow">
											<li
												className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
											>
												<img
													className={`${styles.ic_menu}`}
													src="https://timviec365.vn/images/New_images/ic_menu_vldut.png"
													alt="việc làm đã ứng tuyển"
												/>
												<p className={`${styles.txt_ic_menu}`}>Việc làm đã ứng tuyển</p>
											</li>
										</a>
										<a href="https://timviec365.vn/viec-lam-da-luu" rel="nofollow">
											<li
												className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
											>
												<img
													className={`${styles.ic_menu}`}
													src="https://timviec365.vn/images/New_images/ic_menu_vldl.svg"
													alt="việc làm đã lưu"
												/>
												<p className={`${styles.txt_ic_menu}`}>Việc làm đã lưu</p>
											</li>
										</a>
										{/* <a href="https://chat365.timviec365.vn/" rel="nofollow" target="_blank"> */}
										<a className={`${styles.openApp}`}>
											<li
												className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
											>
												<img
													className={`${styles.ic_menu}`}
													src="https://timviec365.vn/images/New_images/ic_menu_chat.svg"
													alt="chat365"
												/>
												<p className={`${styles.txt_ic_menu}`}>Chat365</p>
											</li>
										</a>
										<a href="/mail365/" target="_blank" rel="nofollow">
											<li
												className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt}`}
											>
												<img
													className={`${styles.ic_menu}`}
													src="https://timviec365.vn/images/New_images/ic_menu_email.svg"
													alt="email đã nhận"
												/>
												<p className={`${styles.txt_ic_menu}`}>Email đã nhận</p>
											</li>
										</a>
										<div className={`${styles.container_qltaikhoan} ${styles.content_menu_chung}`}>
											<li
												className={`${styles.header_poppup_item} ${styles.box_ic_menu} ${styles.cursor_pt} ${styles.quanlychung}`}
											>
												<div
													className={`${styles.container_qltaikhoan} ${styles.container_menu_chung}`}
												>
													<div className={`${styles.content_qltaikhoan}`}>
														<img
															className={`${styles.ic_menu}`}
															src="https://timviec365.vn/images/New_images/ic_menu_qltk.svg"
															alt="quản lý tài khoản"
														/>
														<p className={`${styles.txt_ic_menu}`}>Quản lý tài khoản</p>
													</div>
													<img
														className={`${styles.ic_menu} ${styles.ic_menu_angle} ${styles.angle_menu_qltk}`}
														src="https://timviec365.vn/images/New_images/angle_bottom.svg"
														alt="mở rộng"
													/>
												</div>
											</li>
											<div
												className={`${styles.show_menu_more} ${styles.show_menu_more_qltk} ${styles.d_none}`}
											>
												<div className={`${styles.content_menu_more}`}>
													<div className={`${styles.menu_more}`}>
														<a
															href="/doi-mat-khau-ung-vien.html"
															rel="nofollow"
															className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
														>
															<p>Đổi mật khẩu</p>
														</a>
														<a
															href="/ho-so-ung-vien"
															rel="nofollow"
															className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
														>
															<p>Thông tin tài khoản</p>
														</a>
													</div>
													<div className={`${styles.menu_more}`}>
														<p className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}>
															QR tài khoản
														</p>
														<a
															href="/ung-vien/quan-ly-thong-bao"
															rel="nofollow"
															className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
														>
															<p>Thông báo</p>
														</a>
													</div>
													<div className={`${styles.menu_more}`}>
														{/* <p className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}>Thông tin chuyên viên hỗ trợ</p> */}
														<a
															href="/ung-vien/quan-ly-phan-quyen"
															rel="nofollow"
															className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
														>
															<p>Phân quyền</p>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
						{/* ------- */}
						<div className={`${styles.container_menu_mobile}`}>
							<a
								href="https://truyenthongnoibo.timviec365.vn/"
								target="_blank"
								rel="nofollow"
								className={`${styles.cursor_pt}`}
							>
								<li className={`${styles.menu_mobile_chung} ${styles.box_ic_menu}`}>
									<img
										className={`${styles.ic_menu}`}
										src="https://timviec365.vn/images/New_images/ic_menu_btin.svg"
										alt="bảng tin"
									/>
									<p className={`${styles.txt_ic_menu}`}>Bảng tin</p>
								</li>
							</a>
						</div>
						<div className={`${styles.container_menu_mobile}`}>
							<a href="/cv-xin-viec" rel="nofollow" className={`${styles.cursor_pt}`}>
								<li className={`${styles.menu_mobile_chung} ${styles.box_ic_menu}`}>
									<img
										className={`${styles.ic_menu}`}
										src="https://timviec365.vn/images/New_images/ic_menu_hsxv.svg"
										alt="hồ sơ xin việc"
									/>
									<p className={`${styles.txt_ic_menu}`}>CV xin việc</p>
								</li>
							</a>
						</div>
						{/* chung giua menu ntd và menu ung vien */}
						<div className={`${styles.container_menu_mobile}`}>
							<div className={`${styles.container_khampha} ${styles.content_menu_chung}`}>
								<li className={`${styles.box_ic_menu} ${styles.cursor_pt}`}>
									<div className={`${styles.container_khampha} ${styles.container_menu_chung}`}>
										<div className={`${styles.content_khampha}`}>
											<img
												className={`${styles.ic_menu}`}
												src="https://timviec365.vn/images/New_images/ic_menu_khampha.svg"
												alt="khám phá"
											/>
											<p className={`${styles.txt_ic_menu}`} style={{ color: 'rgb(71, 71, 71)' }}>
												Khám phá
											</p>
										</div>
										<img
											className={`${styles.ic_menu} ${styles.ic_menu_angle} ${styles.angle_menu_hsxv}`}
											src="https://timviec365.vn/images/New_images/angle_bottom.svg"
											alt="mở rộng"
											style={{ transform: 'rotate(0deg)' }}
										/>
									</div>
								</li>
								<div
									className={`${styles.show_menu_more} ${styles.show_menu_more_kpha} ${styles.d_none}`}
									style={{ overflow: 'hidden', display: 'none' }}
								>
									<div className={`${styles.content_menu_more}`}>
										<div className={`${styles.menu_more}`}>
											<a
												href="/blog"
												rel="nofollow"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Blog</p>
											</a>
											<a
												href="/thong-tin-bang-gia.html"
												rel="nofollow"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Bảng giá</p>
											</a>
										</div>
										<div className={`${styles.menu_more}`}>
											<a
												href="/trang-vang-doanh-nghiep.html"
												rel="nofollow"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Trang vàng</p>
											</a>
											<a
												href="/cong-tac-vien.html"
												rel="nofollow"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Cộng tác viên</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.container_menu_mobile}`}>
							<div className={`${styles.container_tienich} ${styles.content_menu_chung}`}>
								<li className={`${styles.box_ic_menu} ${styles.cursor_pt}`}>
									<div className={`${styles.container_tienich} ${styles.container_menu_chung}`}>
										<div className={`${styles.content_tienich}`}>
											<img
												className={`${styles.ic_menu}`}
												src="https://timviec365.vn/images/New_images/ic_menu_tienich.svg"
												alt="tiện ích"
											/>
											<p className={`${styles.txt_ic_menu}`} style={{ color: 'rgb(71, 71, 71)' }}>
												Tiện ích
											</p>
										</div>
										<img
											className={`${styles.ic_menu} ${styles.ic_menu_angle} ${styles.angle_menu_hsxv}`}
											src="https://timviec365.vn/images/New_images/angle_bottom.svg"
											alt="mở rộng"
											style={{ transform: 'rotate(0deg)' }}
										/>
									</div>
								</li>
								<div
									className={`${styles.show_menu_more} ${styles.show_menu_more_kpha} ${styles.d_none}`}
									style={{ overflow: 'hidden', display: 'none' }}
								>
									<div className={`${styles.content_menu_more}`}>
										<div className={`${styles.menu_more}`}>
											<a
												href="/ssl/so-sanh-luong.html"
												rel="nofollow"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Tra cứu lương</p>
											</a>
											<a
												href="/tinh-luong-gross-net.html"
												rel="nofollow"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Lương GROSS - NET</p>
											</a>
										</div>
										<div className={`${styles.menu_more}`}>
											<a
												href="/mail365/"
												target="_blank"
												rel="nofollow"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Email365</p>
											</a>
											<a
												href="/gioi-thieu-app-tim-viec.html"
												rel="nofollow"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Tải app</p>
											</a>
										</div>
										<div className={`${styles.menu_more}`}>
											<a
												href="/tinh-bao-hiem-that-nghiep"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Bảo hiểm thất nghiệp</p>
											</a>
											<a
												href="/blog/mi-la-gi-new16664.html"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Trắc nghiệm MI</p>
											</a>
										</div>
										<div className={`${styles.menu_more}`}>
											<a
												href="/blog/mbti-la-gi-new16663.html"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Trắc nghiệm MBTI</p>
											</a>
											<a
												href="/blog/trac-nghiem-eq-new16667.html"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Trắc nghiệm EQ</p>
											</a>
										</div>
										<div className={`${styles.menu_more}`}>
											<a
												href="/blog/trac-nghiem-tinh-cach-enneagram-new16668.html"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Trắc nghiệm Energram</p>
											</a>
											<a
												href="/phan-tich-cv"
												className={`${styles.txt_qlc_more} ${styles.cursor_pt}`}
											>
												<p>Phân tích CV</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.container_menu_mobile}`}>
							<a rel="nofollow" target="_blank" href="https://quanlychung.timviec365.vn/">
								<li
									className={`${styles.menu_mobile_chung} ${styles.box_ic_menu} ${styles.cursor_pt}`}
								>
									<img
										className={`${styles.ic_menu}`}
										src="https://timviec365.vn/images/New_images/ic_menu_cds.svg"
										alt="chuyển đổi số"
									/>
									<p className={`${styles.txt_ic_menu}`}>Chuyển đổi số</p>
								</li>
							</a>
						</div>
						<div className={`${styles.container_menu_mobile}`}>
							<a href="/dang-xuat-ung-vien" rel="nofollow">
								<li
									className={`${styles.menu_mobile_chung} ${styles.box_ic_menu} ${styles.cursor_pt}`}
								>
									<img
										className={`${styles.ic_menu}`}
										src="https://timviec365.vn/images/New_images/ic_menu_dxuat.svg"
										alt="đăng xuất"
									/>
									<p className={`${styles.txt_ic_menu} ${styles.cl_r}`}>Đăng xuất</p>
								</li>
							</a>
						</div>
					</div>
					{/*  */}
					<div className={`${styles.popup_show_listnganhnghe} ${styles.d_none}`}>
						<div className={`${styles.container_list}`}>
							<div className={`${styles.header_list} ${styles.cursor_pt}`}>
								<img
									className={`${styles.ic_menu}`}
									src="https://timviec365.vn/images/New_images/ic_menu_angle_left.svg"
								/>
								<p className={`${styles.txt_list_header} ${styles.cursor_pt}`}>
									CV theo ngành nghề
								</p>
							</div>
							<div className={`${styles.content_list}`}>
								<a rel="nofollow" href="/cv365/cv-it" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>IT</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-seo-website" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>SEO Website</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-marketing" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Marketing</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-ke-toan" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Kế toán</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-hanh-chinh-nhan-su"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Hành chính nhân sự</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-kinh-doanh" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Kinh doanh</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-cong-nghe-thuc-pham"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Công Nghệ Thực Phẩm</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-hang-khong" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Hàng Không</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-xay-dung" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Xây dựng</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-co-khi" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Cơ khí</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-van-chuyen-giao-nhan"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Vận Chuyển Giao Nhận</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-developers" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Developers</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-to-chuc-su-kien"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Tổ Chức Sự Kiện</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-an-toan-lao-dong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>An Toàn Lao Động</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-truyen-thong" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Truyền Thông</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-dien-dien-tu" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Xuất nhập khẩu</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-bien-phien-dich"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Biên phiên dịch</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-kien-truc-noi-that"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Kiến trúc nội thất</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-bat-dong-san" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Bất động sản</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-sinh-vien-moi-ra-truong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Sinh viên mới ra trường</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-nhan-vien-ban-hang"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Nhân viên bán hàng</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-quan-tri-kinh-doanh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Quản trị kinh doanh</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-thu-ky-tro-ly"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thư ký - trợ lý</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-tu-van-vien" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tư vấn viên</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-cham-soc-khach-hang"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Chăm sóc khách hàng</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-tiep-thi-quang-cao"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Tiếp thị quảng cáo</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-y-te-duoc" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Y tế dược</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-thu-ngan" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Thu Ngân</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-viec-lam-ban-thoi-gian"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Bán Thời Gian</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-thuong-mai-dien-tu"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thương mại điện tử</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-luat-phap-ly" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Luật pháp lý</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-thiet-bi-vat-tu"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thiết bị vật tư</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-giao-thong-van-tai"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Giao thông vận tải</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-quan-ly-dieu-hanh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Quản lý điều hành</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-phat-trien-thi-truong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Phát triển thị trường</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-van-hanh-san-xuat"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Vận hành sản xuất</p>
								</a>

								<a
									rel="nofollow"
									href="/cv365/cv-tham-dinh-giam-dinh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thẩm định giám định</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-du-lich" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Du lịch</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-nha-hang-khach-san"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Nhà hàng khách sạn</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-chan-nuoi-thu-y"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Chăn nuôi thú y</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-thuy-san" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Thủy Sản</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-bao-chi-truyen-hinh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Báo chí - Truyền hình</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-buu-chinh-vien-thong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Bưu chính viễn thông</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-dien-tu-vien-thong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Điện tử viễn thông</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-hanh-chinh-van-phong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Hành chính văn phòng</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-it-phan-cung-mang"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>It - Phần Cứng - Mạng</p>
								</a>

								<a rel="nofollow" href="/cv365/cv-ky-thuat" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Kỹ Thuật</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-thiet-ke-my-thuat"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thiết Kế - Mỹ Thuật</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-bao-hiem" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Bảo Hiểm</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-bao-ve" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Bảo Vệ</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-det-may-da-giay"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Dệt May - Da Giày</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-hoa-hoc-sinh-hoc"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Hóa Học - Sinh Học</p>
								</a>

								<a
									rel="nofollow"
									href="/cv365/cv-hoach-dinh-du-an"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Hoạch Định - Dự án</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-lao-dong-pho-thong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Lao Động Phổ Thông</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-my-pham-thoi-trang-trang-suc"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Mỹ Phẩm - Thời Trang</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-ngan-hang-chung-khoan"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Ngân hàng</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-dich-vu" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Dịch Vụ</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-ky-thuat-ung-dung"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Kỹ Thuật Ứng Dụng</p>
								</a>

								<a
									rel="nofollow"
									href="/cv365/cv-nong-lam-ngu-nghiep"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Nông Lâm Ngư nghiệp</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-quan-he-doi-ngoai"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Quan Hệ Đối Ngoại</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-the-duc-the-thao"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thể dục - Thể thao</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-thuc-pham-do-uong"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Thực phẩm - Đồ uống</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-van-tai-lai-xe"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Vận tải - Lái xe</p>
								</a>

								<a
									rel="nofollow"
									href="/cv365/cv-lam-dep-the-luc-spa"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Làm đẹp - Spa</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-viec-lam-phuc-vu"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Phục Vụ</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-viec-lam-trai-nganh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Trái Ngành </p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-viec-lam-telesale"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Telesale</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-viec-lam-le-tan"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Lễ Tân</p>
								</a>

								<a rel="nofollow" href="/cv365/cv-thong-ke" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Thống Kê</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-copywriter" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Copywriter</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-cong-nghe-cao"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Công Nghệ Cao </p>
								</a>
								<a rel="nofollow" href="/cv365/cv-logistic" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Logistic</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-tai-chinh" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tài Chính</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-tro-giang-tieng-anh"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Trợ Giảng Tiếng Anh </p>
								</a>

								<a
									rel="nofollow"
									href="/cv365/cv-viec-lam-nganh-giao-duc"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Việc Làm Giáo Dục</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-trac-dia" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Trắc Địa</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-nau-an" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Nấu Ăn</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-hang-hai" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Hàng Hải</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-bao-tri" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Bảo Trì</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-dia-chat" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Địa Chất</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-thu-vien" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Thư Viện</p>
								</a>
								<a
									rel="nofollow"
									href="/cv365/cv-khu-che-xuat-khu-cong-nghiep"
									className={`${styles.a_name_nncv}`}
								>
									<p className={`${styles.p_name_nncv}`}>Khu chế xuất - khu công nghiệp</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-startup" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Startup</p>
								</a>
							</div>
						</div>
					</div>
					{/*  */}
					<div className={`${styles.popup_show_listngongu} ${styles.d_none}`}>
						<div className={`${styles.container_list}`}>
							<div className={`${styles.header_list} ${styles.cursor_pt}`}>
								<img
									className={`${styles.ic_menu}`}
									src="/images/New_images/ic_menu_angle_left.svg"
									alt="cv theo ngôn ngữ"
								/>
								<p className={`${styles.txt_list_header} ${styles.cursor_pt}`}>CV theo ngôn ngữ</p>
							</div>
							<div className={`${styles.content_list}`}>
								<a rel="nofollow" href="/cv365/cv-tieng-anh" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tiếng Anh</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-tieng-trung" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tiếng Trung</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-tieng-nhat" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tiếng Nhật</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-tieng-han" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tiếng Hàn</p>
								</a>
								<a rel="nofollow" href="/cv365/cv-tieng-viet" className={`${styles.a_name_nncv}`}>
									<p className={`${styles.p_name_nncv}`}>Tiếng Việt</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Mobile_form_after_login
