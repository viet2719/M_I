import React, { useEffect, useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Model_ungtuyen from '@/components/pop_up/model_ungtuyen'
import Model_luutin from '@/components/pop_up/model_luutin'
import Model_Phan_Anh_NTD from '@/components/pop_up/model_phan_anh_NTD'
import Model_ungtuyen_sendmail_NTD from '@/components/pop_up/model_ungtuyen_sendmail_NTD'
import Model_works_match_after_ungtuyen from '@/components/pop_up/model_works_match_after_ungtuyen'
import { useDispatch } from 'react-redux'
import { openModal } from '@/actions/actions'
import Info from './info'
import Scroll_option from './scroll_option'

type Props = {}

const Chi_tiet_td = ({}: Props) => {
	const isLogin = false
	const isCv = false
	const [showModelUngTuyen, setShowModelUngTuyen] = useState<boolean>(false)
	const [showLuuTin, setLuuTin] = useState<boolean>(false)
	const [stt_luutin, setStt_luutin] = useState<string>('Lưu tin')
	const [stt_luuCongViec, setStt_luuCongViec] = useState<string>('Lưu công việc')
	const [name_UT, setname_UT] = useState<string>('Ứng tuyển')
	const [showPhanAnhNTD, setShowPhanAnhNTD] = useState<boolean>(false)
	const [showMailUngTuyen, setshowMailUngTuyen] = useState<boolean>(false)
	const [showWorkMatch, setShowWorkMatch] = useState<boolean>(false)
	const [showUserCallGiongNoi, setshowUserCallGiongNoi] = useState<boolean>(false)
	const dispatch = useDispatch()

	//BTN Lưu tin
	const handleLuuTin: () => void = () => {
		if (!isLogin) {
			dispatch(openModal())
		} else {
			if (!showLuuTin && stt_luutin == 'Lưu tin') {
				setStt_luutin('Đã Lưu tin')
				setLuuTin(true)
			}
			if (!showLuuTin && stt_luutin != 'Lưu tin') {
				setStt_luutin('Lưu tin')
				setLuuTin(false)
			}
		}
	}
	//BTN Lưu công việc
	const handleLuuCongViec: () => void = () => {
		if (!isLogin) {
			dispatch(openModal())
		} else {
			if (!showLuuTin && stt_luuCongViec == 'Lưu công việc') {
				setStt_luuCongViec('Đã lưu công việc')
				setLuuTin(true)
			}
			if (!showLuuTin && stt_luuCongViec != 'Lưu công việc') {
				setStt_luuCongViec('Lưu công việc')
				setLuuTin(false)
			}
		}
	}
	//BTN Ứng tuyển
	const handleUngTuyen: () => void = () => {
		if (!isLogin) {
			dispatch(openModal())
		} else {
			if (isCv) {
				if (name_UT === 'Ứng tuyển') {
					setshowMailUngTuyen(true)
					setname_UT('Đã ứng tuyển')
				} else {
					alert('Bạn đã ứng tuyển rồi')
				}
			} else {
				setShowModelUngTuyen(true)
			}
		}
	}
	//BTN Phản ánh NTD
	const handlePhanAnhNTD: () => void = () => {
		if (!isLogin) {
			dispatch(openModal())
		} else {
			setShowPhanAnhNTD(true)
		}
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
						<h1 className={`${styles.com_post}`}>Nhân viên Kỹ thuật Điện Tử</h1>

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
									{name_UT}
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
				<Scroll_option />

				{/* audio */}
				<div className={`${styles.audio_tindang}`}>
					<div className={`${styles.audio_news}`}>
						<div className={`${styles.ctn_audio}`}>
							<audio
								controls
								title="Audio : Cán Bộ Kỹ Thuật Hiện Trường Khu Vực Miền Tây"
								preload="none"
							>
								<source
									src="https://timviec365.vn/dowload/new/new_871458/audio_871458_4.wav"
									type="audio/wav"
								/>
							</audio>
						</div>
						<div className={`${styles.chuyen_giong}`}>
							<Image
								style={{ cursor: 'pointer' }}
								onClick={() => setshowUserCallGiongNoi(!showUserCallGiongNoi)}
								alt="Chọn người đọc"
								title="Chọn người đọc"
								width={20}
								height={30}
								src="https://timviec365.vn/images/img_new/exp_chuyengiong.png"
								className={`${styles.chongiong}`}
							/>
							{/* Chọn người đọc audio */}
							{showUserCallGiongNoi && (
								<div className={`${styles.tca_giong}`}>
									<p className={`${styles.giong_moi}`}>1. Triệu Thảo</p>
									<p className={`${styles.giong_moi}`}>2. Đình Kiên</p>
									<p className={`${styles.giong_moi}`}>3. Lại Trang</p>
									<p className={`${styles.giong_moi}`}>4. Phương Anh</p>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className={`${styles.ctn_tab_ttin} ${styles.w_100} ${styles.active}`} id="tab_ttin">
					<Info />
					<div className={`${styles.btn_tt_all}`}>
						<button
							className={`${styles.btn_tt} ${styles.save_job}`}
							onClick={() => handleLuuCongViec()}
						>
							{stt_luuCongViec}
						</button>
						<button
							onClick={() => handlePhanAnhNTD()}
							className={`${styles.bcuv} ${styles.btn_tt} `}
							data-use={1333676}
						>
							Phản ánh NTD
						</button>
						{!isLogin && (
							<Link
								href={'https://timviec365.vn/tai-ho-so.html?id=871080'}
								className={`${styles.bcuv} ${styles.btn_tt} `}
							>
								Ứng tuyển nhanh
							</Link>
						)}

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
				{/* <div className={`${styles.ctn_tab_ttin}`} id="tab_phhop">
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
				</div> */}
			</div>
		</>
	)
}
export default Chi_tiet_td
