import React, { useEffect, useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Model_ungtuyen from '@/components/pop_up/model_ungtuyen'
import Model_luutin from '@/components/pop_up/model_luutin'
import Model_Phan_Anh_NTD from '@/components/pop_up/model_phan_anh_NTD'
import Model_ungtuyen_sendmail_NTD from '@/components/pop_up/model_ungtuyen_sendmail_NTD'
import Model_works_match_after_ungtuyen from '@/components/pop_up/model_works_match_after_ungtuyen'

type Props = {
	show: boolean
}

const Chi_tiet_td = ({ show }: Props) => {
	const [showChiTiet, setshowChiTiet] = useState<boolean>(false)
	const [showModelUngTuyen, setShowModelUngTuyen] = useState<boolean>(false)
	const [showLuuTin, setLuuTin] = useState<boolean>(false)
	const [stt_luutin, setStt_luutin] = useState<string>('Lưu tin')
	const [stt_luuCongViec, setStt_luuCongViec] = useState<string>('Lưu công việc')
	const [showPhanAnhNTD, setShowPhanAnhNTD] = useState<boolean>(false)
	const [showMailUngTuyen, setshowMailUngTuyen] = useState<boolean>(false)
	const [showWorkMatch, setShowWorkMatch] = useState<boolean>(false)

	const handleLuuTin = () => {
		if (!showLuuTin && stt_luutin == 'Lưu tin') {
			setStt_luutin('Đã Lưu tin')
			setLuuTin(true)
		}
		if (!showLuuTin && stt_luutin != 'Lưu tin') {
			setStt_luutin('Lưu tin')
			setLuuTin(false)
		}
	}
	const handleLuuCongViec = () => {
		if (!showLuuTin && stt_luuCongViec == 'Lưu công việc') {
			setStt_luuCongViec('Đã lưu công việc')
			setLuuTin(true)
		}
		if (!showLuuTin && stt_luuCongViec != 'Lưu công việc') {
			setStt_luuCongViec('Lưu công việc')
			setLuuTin(false)
		}
	}
	const handleUngTuyen = () => {
		setShowModelUngTuyen(true)
		setshowMailUngTuyen(true)
	}
	return (
		<>
		
			{/* Ấn nút ứng tuyển trước khi có cv */}
			<Model_ungtuyen
				setShowModelUngTuyen={setShowModelUngTuyen}
				showModelUngTuyen={showModelUngTuyen}
			/>
			
			{/* Ấn nút lưu tin */}
			<Model_luutin showLuuTin={showLuuTin} setLuuTin={setLuuTin} />

			{/* Ấn nút phản ánh NTD */}
			<Model_Phan_Anh_NTD showPhanAnhNTD={showPhanAnhNTD} setShowPhanAnhNTD={setShowPhanAnhNTD} />
			
			{/* Ấn nút ứng tuyển sau khi có CV */}
			<Model_ungtuyen_sendmail_NTD
				showMailUngTuyen={showMailUngTuyen}
				setshowMailUngTuyen={setshowMailUngTuyen}
				setShowWorkMatch={setShowWorkMatch}

			/>
			
			{/* Sau khi thoát model sendmail */}
			<Model_works_match_after_ungtuyen
			showWorkMatch={showWorkMatch}
			setShowWorkMatch={setShowWorkMatch}
			/>

			<div className={`${styles.chitiettd_head}`}>
				<div className={`${styles.mb_top}`}>
					<div className={`${styles.logo_com} ${styles.hidden_mobi}`}>
						<div className={`${styles.img_detail}`}>
							<Link
								href={'#'}
								className={`${styles.logo_user_th} ${styles.logo_user_th_new} ${styles.show_avt}`}

							>
								<Image
									width={130}
									height={130}
									className={`${styles.avt} ${styles.lazyloaded}`}
									src="https://timviec365.vn/pictures/2020/12/26/nmu1608965751.PNG"
									data-src="https://timviec365.vn/pictures/2020/12/26/nmu1608965751.PNG"
									alt="Công ty cổ phần việt hưng việt nam"
								/>
								<span className={`${styles.box_time_off}`}>10 phút</span>{' '}
							</Link>
						</div>
					</div>
					<div className={`${styles.com_info}`}>
						<h1 className={`${styles.com_post}`}>
							Nhân viên Kỹ thuật Điện Tử
						</h1>

						<div className={`${styles.mobi_ctiet}`} style={{ marginLeft: -5 }}>
							<span className={`${styles.tag_red}`}>Thỏa thuận</span>

							<p style={{ marginLeft: -15 }} className={`${styles.diachi_ctiet}`}>
								{' '}
								<Image
									width={16}
									height={16}
									src="https://timviec365.vn/images/img_new/exp_ddien.png"
									alt=""
								/>{' '}
								Quận Cầu Giấy ,Hà Nội
							</p>
						</div>
						<Link
							className={`${styles.com_name} ${styles.hidden_mobi}`}
							href="/cong-ty-co-phan-viet-hung-viet-nam-co206405"
							title="Công ty cổ phần việt hưng việt nam"
						>
							<p className={`${styles.com_name_text}`}>Công ty cổ phần việt hưng việt nam</p>
						</Link>
						<p className={`${styles.index} ${styles.hidden_mobi}`}>
							Ngành nghề:
							<Link
								className={`${styles.tag}`}
								href="/viec-lam-ky-thuat-c18v0"
								title="Việc làm Kỹ thuật"
							>
								Kỹ thuật
							</Link>
							<Link
								className={`${styles.tag}`}
								href="/viec-lam-ky-thuat-ung-dung-c47v0"
								title="Việc làm Kỹ thuật ứng dụng"
							>
								Kỹ thuật ứng dụng
							</Link>
						</p>
						<p className={`${styles.index} ${styles.hidden_mobi}`}>
							Mức lương: <span className={`${styles.tag_red}`}>Thỏa thuận</span>
						</p>
						<div className={`${styles.ctn_cnhat_lxem}`}>
							<p className={`${styles.index}`}>Lượt xem: 516</p>
							<span className={`${styles.ngancach_lxcn}`}>|</span>
							<p className={`${styles.index}`}>
								Cập nhật: 25/08/2023
								<span className={`${styles.hidden_mobi}`}> (18 phút trước)</span>
							</p>
						</div>
						<div className={`${styles.mobi_ctiet}`}>
							<div className={`${styles.ctn_avt_nglv}`}>
								<div className={`${styles.avt_tkhoan_mbi}`}>
									<div className={`${styles.logo_com}`}>
										<div className={`${styles.img_detail}`}>
											<Link
												href={'#'}
												className={`${styles.logo_user_th} ${styles.logo_user_th_new} ${styles.show_avt}`}
											>
												<Image
													width={55}
													height={57}
													className={`${styles.lazyload}`}
													src="https://timviec365.vn/pictures/2020/12/26/nmu1608965751.PNG"
													data-src="https://timviec365.vn/pictures/2020/12/26/nmu1608965751.PNG"
													alt="Công ty cổ phần việt hưng việt nam"
												/>
												<span className={`${styles.box_time_off}`}>10 phút</span>{' '}
											</Link>
										</div>
									</div>
								</div>
								<div className={`${styles.ctiet_tkhoan}`}>
									<div className={`${styles.ten_congty}`}>
										<Link
											className={`${styles.com_name}`}
											href="/cong-ty-co-phan-viet-hung-viet-nam-co206405"
											title="Công ty cổ phần việt hưng việt nam"
										>
											<p className={`${styles.com_name_text}`}>
												Công ty cổ phần việt hưng việt nam
											</p>
										</Link>
									</div>
									<div className={`${styles.nnghe_vlam}`}>
										<Link
											className={`${styles.tag}`}
											href="/viec-lam-ky-thuat-c18v0"
											title="Việc làm Kỹ thuật"
										>
											Kỹ thuật
										</Link>{' '}
										<span>/</span>
										<Link
											className={`${styles.tag}`}
											href="/viec-lam-ky-thuat-ung-dung-c47v0"
											title="Việc làm Kỹ thuật ứng dụng"
										>
											Kỹ thuật ứng dụng
										</Link>{' '}
										<span>/</span>
										{/* linh vuc */}
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.ctn_chat_utuyen_luu}`}>
							<div className={`${styles.ctn_chatcall} ${styles.ctn_chung_moi}`}>
								<Link
									href={'#'}
									rel="nofollow"
									target="_blank"
									className={`${styles.chat_call} ${styles.job_chat}`}
								>
									<Image
										width={19}
										height={20}
										src="https://timviec365.vn/images/detail/icon_chat_w.svg"
										alt="Chat ngay"
									/>
									Chat ngay
								</Link>
							</div>
							<div
								onClick={() => handleUngTuyen()}
								className={`${styles.ungtuyen} ${styles.ctn_chung_moi}`}
							>
								<div
									style={{ cursor: 'pointer' }}
									className={`${styles.btn_ungtuyen} ${styles.btn_ut}`}
								>
									<Image
										width={17}
										height={16}
										src="https://timviec365.vn/images/detail/icon_ut.svg"
										alt="ứng tuyển"
									/>
									Ứng tuyển
								</div>
							</div>
							<div
								className={`${styles.luu_tdang} ${styles.ctn_chung_moi}`}
								onClick={() => handleLuuTin()}
							>
								<div
									style={{ cursor: 'pointer' }}
									className={`${styles.save_job} ${styles.btn_love}`}
									title="Lưu công việc"
								>
									<Image
										width={17}
										height={16}
										src="https://timviec365.vn/images/detail/love.svg"
										alt="lưu công việc"
									/>
									<span>{stt_luutin}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={`${styles.content_info}`}>
				{show && (
					<div className={`${styles.scroll_option} ${styles.active}`}>
						<div className={`${styles.option} ${styles.list_option} `} id="floatingDiv">
							<div
								onClick={() => setshowChiTiet(!showChiTiet)}
								className={`${styles.option_post} ${styles.ctn_opa} ${styles.m_active}`}
								data-tab="tab_ttin"
							>
								<div>
									Chi tiết
									{showChiTiet && (
										<div className={`${styles.pos_ttin_all}`}>
											<p
												className={`${styles.tca_ttin_chung} ${styles.ctn_opt_post}`}
												data-tab="tab_ttin"
											>
												Thông tin
											</p>
											<p className={`${styles.tca_ttin_chung}`}>
												<Link href="/cong-ty-co-phan-viet-hung-viet-nam-co206405">Công ty</Link>
											</p>
											<p className={`${styles.tca_ttin_chung} ${styles.vlam_goiy}`}>
												<a href="#title_all">Việc làm đề xuất bởi AI365</a>
											</p>
										</div>
									)}
								</div>

								<span />
							</div>

							<Link
								className={`${styles.option_post}`}
								href="/lich-su/danh-sach-tong-u206405t1"
								rel="nofollow"
								target="_blank"
							>
								Lịch sử
							</Link>
							<Link
								className={`${styles.option_post}`}
								href="/phu-hop/danh-sach-tong-u206405t1"
								rel="nofollow"
								target="_blank"
							>
								Phù hợp
							</Link>
							<Link
								href={'#'}
								className={`${styles.option_post} ${styles.ctn_opt_post} ${styles.mucdo_phhop_ctn}`}
								data-tab="tab_phhop"
							>
								Tường
							</Link>
							<div className={`${styles.mobi_ctiet}`}>
								{' '}
								<Link
									className={`${styles.option_post} ${styles.option_dtg}`}
									href="https://truyenthongnoibo.timviec365.vn/trang-ca-nhan-c18162"
									rel="nofollow"
									target="_blank"
								>
									Tường
								</Link>
							</div>
						</div>
					</div>
				)}
				<div className={`${styles.ctn_tab_ttin} ${styles.w_100} ${styles.active}`} id="tab_ttin">
					<div className={`${styles.info_window}`}>
						<p className={`${styles.info_title}`}>Thông tin chung</p>
						<div className={`${styles.d_flex} ${styles.all_stat}`}>
							<div className={`${styles.info_window_stat}`}>
								<div className={`${styles.detail_if}`}>
									<p className={`${styles.item_if}`}>Chức vụ</p>{' '}
									<span className={`${styles.tag_none}`}>Nhân viên</span>
								</div>
								<div className={`${styles.detail_if}`}>
									<p className={`${styles.item_if}`}>Hình thức làm việc</p>{' '}
									<span className={`${styles.tag_none}`}>Toàn thời gian cố định</span>
								</div>
							</div>
							<div className={`${styles.info_window_stat}`}>
								<div className={`${styles.detail_if}`}>
									<p className={`${styles.item_if}`}>Số lượng cần tuyển</p>{' '}
									<span className={`${styles.tag_none}`}>1 người</span>
								</div>
								<div className={`${styles.detail_if}`}>
									<p className={`${styles.item_if}`}>Thời gian thử việc</p>{' '}
									<span className={`${styles.tag_none}`}>2 tháng</span>
								</div>
								<div className={`${styles.detail_if}`}>
									<p className={`${styles.item_if}`}>Hạn nộp hồ sơ</p>
									<span className={`${styles.tag_none}`}>
										02/10/2023 <span className={`${styles.tgian_clai}`}>( 1 tháng)</span>{' '}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.info_window}`}>
						<p className={`${styles.info_title}`}>Địa điểm làm việc</p>
						<div className={`${styles.d_flex} ${styles.ctn_moi_ddiemlv}`}>
							<div className={`${styles.info_window_stat}`}>
								<div className={`${styles.detail_if}`}>
									<p style={{ marginRight: 10 }}>Tỉnh thành</p>
									<Link
										className={`${styles.tag}`}
										target="blank"
										href="/tim-viec-lam-tai-ha-noi.html"
										title="Việc làm tại Hà Nội"
									>
										Hà Nội
									</Link>
								</div>
							</div>
							<div className={`${styles.info_window_stat}`}>
								<div className={`${styles.detail_if}`}>
									<p style={{ marginRight: 10 }}>Quận huyện</p>
									<Link
										className={`${styles.tag}`}
										target="blank"
										href="/tag1/viec-lam-tai-quan-cau-giay-ha-noi-31"
										title="việc làm Quận Cầu Giấy"
									>
										Quận Cầu Giấy
									</Link>{' '}
								</div>
							</div>
							<div className={`${styles.detail_if} ${styles.w_100}`}>
								<p className={`${styles.item_if}`}>Địa chỉ chi tiết</p>
								<span className={`${styles.diachi}`}>
									Số 8c ngách 189/14, ngõ 189 đường nguyễn ngọc vũ
								</span>
							</div>
						</div>
					</div>
					<div className={`${styles.mt_20}`}>
						<div className={`${styles.tit_detail_post_a}`}>
							<h2 className={`${styles.tit_detail_post}`}>MÔ TẢ CÔNG VIỆC</h2>
						</div>
						<p className={`${styles.text_content} ${styles.ctn_chung_pd}`}>
							- sản xuất, sửa chữa, bảo hành bo mạch điện tử và thiết bị điện tử do công ty sản xuất
							và cung cấp và lắp đặt cho khách hàng. Thiết bị điện tử do cty sản xuất liên quan đến
							âm thanh và kết nối mạng internet ( wifi, 3g/4g) <br /> - phối hợp triển khai lắp đặt,
							hỗ trợ tư vấn kỹ thuật, hỗ trợ theo dõi quản lý thiết bị bằng phần mềm quản lý trên
							điện thoại và máy tính <br />{' '}
						</p>
					</div>
					<div className={`${styles.mt_20}`}>
						<div className={`${styles.tit_detail_post_a}`}>
							<h2 className={`${styles.tit_detail_post}`}>YÊU CẦU</h2>
						</div>
						<div
							className={`${styles.ctn_moi_ycau} ${styles.d_flex} ${styles.w_100} ${styles.ctn_chung_pd}`}
						>
							<div className={`${styles.info_window_stat}`}>
								<div className={`${styles.detail_if}`}>
									<p className={`${styles.item_if}`}>Kinh nghiệm</p>{' '}
									<span className={`${styles.tag_none}`}>0 - 1 năm kinh nghiệm</span>
								</div>
							</div>
							<div className={`${styles.info_window_stat}`}>
								<div className={`${styles.detail_if}`}>
									<p className={`${styles.item_if}`}>Bằng cấp</p>{' '}
									<span className={`${styles.tag_none}`}>Cao đẳng trở lên</span>
								</div>
							</div>
							<div className={`${styles.detail_if} ${styles.w_100}`}>
								<p className={`${styles.item_if}`}>Giới tính</p>{' '}
								<span className={`${styles.tag_none}`}>Nam</span>
							</div>
							<p className={`${styles.text_content} ${styles.w_100} ${styles.ycau_tdung}`}>
								- ưu tiên ứng viên có kinh nghiệm đã từng làm về mạch điện tử <br /> - Thỉnh thoảng
								đi công tác tỉnh trong thời gian ngắn{' '}
							</p>
						</div>
					</div>
					<div className={`${styles.mt_20}`}>
						<div className={`${styles.tit_detail_post_a}`}>
							<h2 className={`${styles.tit_detail_post}`}>QUYỀN LỢI</h2>
						</div>
						<p className={`${styles.text_content} ${styles.ctn_chung_pd}`}>
							- Thời gian làm việc cố định 6 ngày/tuần <br /> - Lương thử việc 2 tháng đầu 5-6
							triệu, hết thử việc thỏa thuận theo khả năng đáp ứng công việc <br /> - Được hướng
							dẫn, theo sát suốt quá trình làm việc{' '}
						</p>
					</div>
					<div className={`${styles.mt_20}`}>
						<div className={`${styles.tit_detail_post_a}`}>
							<h2 className={`${styles.tit_detail_post}`}>HỒ SƠ BAO GỒM</h2>
						</div>
						<p className={`${styles.text_content} ${styles.ctn_chung_pd}`}>
							- Đơn xin việc. <br /> - Sơ yếu lý lịch. <br /> - Hộ khẩu, chứng minh nhân dân và giấy
							khám sức khoẻ. <br /> - Các bằng cấp có liên quan.{' '}
						</p>
					</div>
					<div className={`${styles.mt_20}`}>
						<div className={`${styles.tit_detail_post_a}`}>
							<h2 className={`${styles.tit_detail_post}`}>Thông tin liên hệ</h2>
						</div>
						<div
							className={`${styles.ctn_moi_ycau} ${styles.d_flex} ${styles.w_100} ${styles.ctn_chung_pd} ${styles.ctn_ttin_lhe}`}
						>
							<p className={`${styles.text_content} ${styles.text_ttlhe}`}>
								Tên người liên hệ: <span>Công ty cổ phần việt hưng việt nam</span>
							</p>
							<p className={`${styles.text_content} ${styles.text_ttlhe}`}>
								Địa chỉ liên hệ:{' '}
								<span>
									Số 16, ngõ 271, phố Yên Hoà, Phường Yên Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt
									Nam
								</span>
							</p>
							<p className={`${styles.text_content} ${styles.text_ttlhe}`}>
								Số điện thoại liên hệ: <span>*********</span>
							</p>
							<p className={`${styles.text_content} ${styles.text_ttlhe}`}>
								Email liên hệ: <span>*********</span>
							</p>
						</div>
					</div>
					<div className={`${styles.btn_tt_all}`}>
						<button
							data-id={868030}
							data-use={1333676}
							data-uid={1333676}
							className={`${styles.btn_tt} ${styles.save_job}`}
							onClick={() => handleLuuCongViec()}
						>
							{stt_luuCongViec}
						</button>
						<button
							onClick={() => setShowPhanAnhNTD(true)}
							className={`${styles.bcuv} ${styles.btn_tt} `}
							data-use={1333676}
						>
							Phản ánh NTD
						</button>
						<Link
							rel="nofollow"
							href="/ssl/so-sanh-luong.html"
							target="_blank"
							className={`${styles.btn_tt} ${styles.btn_ssl}`}
						>
							So sánh lương
						</Link>
					</div>
				</div>
				<div className={`${styles.ctn_tab_ttin}`} id="tab_phhop">
					<div className={`${styles.mucdo_phhop}`}>
						<div className={`${styles.phhop_phtich}`}>
							<p className={`${styles.tde_phuhop}`}>Phân tích chi tiết ứng viên</p>
							<div className={`${styles.ctn_mdo_phuhop}`}>
								<div className={`${styles.phhop_trai} ${styles.ctn_phhop_ch}`}>
									<p className={`${styles.tde_ch_phhop}`}>Điểm số tương đồng</p>
									<p className={`${styles.dgia_phhop}`}>
										AI365 đánh giá bạn hợp <span className={`${styles.percent}`}>40%</span> công
										việc này
									</p>
									<div className={`${styles.bdo_dgia}`}>
										<div className={`${styles.ctn_bieudo}`}>
											<svg viewBox="0 0 120 120" className={`${styles.lh_gauge}`}>
												<circle
													className={`${styles.lh_gauge_base}`}
													r={52}
													cx={60}
													cy={60}
													strokeWidth="3.5"
												/>
												<circle
													className={`${styles.lh_gauge_arc}`}
													r={52}
													cx={60}
													cy={60}
													strokeWidth="3.5"
													style={{
														transform: 'rotate(-90deg)',
														strokeDasharray: '132, 330',
													}}
												/>
											</svg>
											<p className={`${styles.text_pp}`}>40%</p>
										</div>
										<div className={`${styles.ctn_capnhat}`}>
											<p className={`${styles.txt_md}`}>Đây là mức độ phù hợp ở mức thấp </p>
											<p className={`${styles.text_do}`}>
												Để ứng tuyển công việc thành công, bạn nên:
											</p>
											<ul className={`${styles.phhop_ul}`}>
												<li className={`${styles.update_cv}`}>Cập nhật thông tin</li>
												<li className={`${styles.change_job}`}>
													Ứng tuyển công việc khác phù hợp hơn.
												</li>
											</ul>
										</div>
									</div>
									<div className={`${styles.cnhat_cv}`}>
										<Link href="/ho-so-ung-vien" target="_blank" className={`${styles.capnhat_cv}`}>
											Cập nhật thông tin
										</Link>
									</div>
								</div>
								<div className={`${styles.phhop_phai} ${styles.ctn_phhop_ch}`}>
									<p className={`${styles.tde_ch_phhop}`}>Xếp hạng năng lực</p>
									<div className={`${styles.bdo_dgia}`}>
										<div className={`${styles.ctn_avt_xeph}`}>
											<p>0</p>
											<Image
												width={25}
												height={25}
												src="/images/img_new/exp_xephang.png"
												className={`${styles.ctn_xephang}`}
												alt="xep hang"
											/>
										</div>
										<div className={`${styles.ctn_capnhat}`}>
											<p>Bạn đứng vị trí 0 trên 0 ứng viên phù hợp ứng tuyển vào công việc này</p>
										</div>
									</div>
									<div className={`${styles.knghiem_xh}`}>
										<div className={`${styles.ctn_kinhng} ${styles.ph_kinhnghiem}`}>
											<p className={`${styles.tde_knghiem}`}>Kinh nghiệm</p>
											<p className={`${styles.tde_knghiem} ${styles.text_percent}`}>40%</p>
											<div className={`${styles.kinhng_bdo}`}>
												<div className={`${styles.ctn_kinhng_bdo}`} style={{ width: '40%' }} />
											</div>
											<div className={`${styles.bgr_ctn}`}>
												<Image width={25} height={25} alt="25" src="/images/img_new/exp_kn.png" />
											</div>
										</div>
										<div className={`${styles.ctn_kinhng} ${styles.ph_mucluong}`}>
											<p className={`${styles.tde_knghiem}`}>Mức lương</p>
											<p className={`${styles.tde_knghiem} ${styles.text_percent}`}>60%</p>
											<div className={`${styles.kinhng_bdo}`}>
												<div className={`${styles.ctn_kinhng_bdo}`} style={{ width: '60%' }} />
											</div>
											<div className={`${styles.bgr_ctn}`}>
												<Image width={25} height={25} alt="25" src="/images/img_new/exp_kn.png" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Chi_tiet_td
