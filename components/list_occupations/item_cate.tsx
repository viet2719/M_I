import { openModal } from '@/actions/actions'
import styles from '@styles/list_occupations/item_cate.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Model_noti from './model_noti'

const List_cate = () => {
	const dispatch = useDispatch()
	const listCate = [
		{ id: 1, title: 'TUYỂN DỤNG TRƯỞNG NHÓM BÁN HÀNG' },
		{ id: 2, title: 'TUYỂN DỤNG TRƯỞNG NHÓM BÁN HÀNG 2' },
		{ id: 3, title: 'TUYỂN DỤNG TRƯỞNG NHÓM BÁN HÀNG 3' },
	]
	const listIconStatus = [
		{ id: 1, img: '/images/img_comment/Ic_1.png', alt: 'Thích' },
		{ id: 2, img: '/images/img_comment/Ic_2.png', alt: 'Yêu thích' },
		{ id: 3, img: '/images/img_comment/Ic_3.png', alt: 'Wow' },
		{ id: 4, img: '/images/img_comment/Ic_4.png', alt: 'Thương thương' },
		{ id: 5, img: '/images/img_comment/Ic_5.png', alt: 'Phẫn nộ' },
		{ id: 6, img: '/images/img_comment/Ic_6.png', alt: 'Buồn' },
		{ id: 7, img: '/images/img_comment/Ic_7.png', alt: 'Haha' },
	]
	const [stateSeenAll, setStateSeenAll] = useState<any>(null)
	const toggleIdSeenAll = (id: any) => {
		if (stateSeenAll === id) {
			setStateSeenAll(null)
		} else {
			setStateSeenAll(id)
		}
	}

	const [hoveredItemId, setHoveredItemId] = useState<number | null>(null)
	const [hoveredItemIdBottom, setHoveredItemIdBottom] = useState<number | null>(null)
	// Lưu id của item được chọn
	const [stateIconState, setStateIconState] = useState<any>(null)
	const [status, setStatus] = useState<any>(null)
	const handleChooseIconStatus = (itemId: any, cateId: any) => {
		const foundItem = listIconStatus.find((item) => item.id === itemId)
		setStatus(foundItem)
		if (stateIconState !== cateId) {
			setStateIconState(cateId)
		}
	}
	const handleOpenModal = (obj: any) => {
		dispatch(openModal())
	}
	//  Xử lý share
	const [modalShare, setModalShare] = useState(false)
	const [modalSocial, setModalSocial] = useState(false)
	// Lấy ra item share
	const [stateItemShare, setStateItemShare] = useState<any>(null)
	const toggleIdItemShare = (id: any) => {
		if (stateItemShare === id) {
			setStateItemShare(null)
		} else {
			setStateItemShare(id)
		}
	}
	return (
		<div className={styles.main_cate}>
			{listCate.map((cate, index) => {
				return (
					<div className={styles.item_cate} key={index}>
						<div className={`${styles.img_cate} ${styles.box_new_left}`}>
							<Link
								className={`${styles.logo_user_th}`}
								href="/nhan-vien-kinh-doanh-p866743.html"
								title="Nhân viên kinh doanh"
							>
								<Image
									width={141}
									height={141}
									src="/images/before_login/user_chat_off.png"
									alt="CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ T-TECH VIỆT NAM"
								/>
								<span className={styles.box_time_off}>5 giờ</span>{' '}
							</Link>
							<div className={styles.box_vote_new}>
								<Image
									width={16}
									height={16}
									className={styles.icon_vote_new}
									src="/images/before_login/icon_star_gray.svg"
									alt="star grey"
								/>
								<Image
									width={16}
									height={16}
									className={styles.icon_vote_new}
									src="/images/before_login/icon_star_gray.svg"
									alt="star grey"
								/>
								<Image
									width={16}
									height={16}
									className={styles.icon_vote_new}
									src="/images/before_login/icon_star_gray.svg"
									alt="star grey"
								/>
								<Image
									width={16}
									height={16}
									className={styles.icon_vote_new}
									src="/images/before_login/icon_star_gray.svg"
									alt="star grey"
								/>
								<Image
									width={16}
									height={16}
									className={styles.icon_vote_new}
									src="/images/before_login/icon_star_gray.svg"
									alt="star grey"
								/>{' '}
							</div>
						</div>
						<div className={styles.center_cate}>
							<div className={`${styles.center_cate_l}`}>
								<h2 className={`${styles.box_mb} ${styles.box_new_left_mb}`}>
									<Link
										style={{ width: 70, overflow: 'unset' }}
										className={`${styles.logo_user_th} ${styles}`}
										href="/tuyen-dung-truong-nhom-ban-hang-p866842.html"
										title="TUYỂN DỤNG TRƯỞNG NHÓM BÁN HÀNG"
									>
										<Image
											height={142}
											width={142}
											className={`${styles.tia_set} lazyload ${styles.img_center_cate_mb} ${styles.no_logo_chat}`}
											src="/images/load.gif"
											alt="Công Ty Cổ Phần Dược Phẩm Việt ( Đông Dược Viêt)"
										/>
										<span className={styles.box_time_off}>3 ngày</span>{' '}
										<Image
											height={33}
											width={33}
											className={styles.icon_tiaset_new}
											alt=""
											src="/images/before_login/icon_tiaset.svg"
										></Image>
									</Link>
									<Link
										style={{ color: '#4C5BD4' }}
										href="/tuyen-dung-truong-nhom-ban-hang-p866842.html"
										title="TUYỂN DỤNG TRƯỞNG NHÓM BÁN HÀNG"
										className={`${styles.tag_th} ${styles.title_cate}`}
									>
										{cate.title}
									</Link>
									<div className={styles.box_vote_new}>{/* Your icon_vote_new images */}</div>
								</h2>

								<div className="">
									<p className={styles.cpn_name}>
										<Link
											className={styles.tag_th}
											href="/cong-ty-co-phan-duoc-pham-viet-dong-duoc-viet-co241071"
											title="Công Ty Cổ Phần Dược Phẩm Việt ( Đông Dược Viêt)"
										>
											Công Ty Cổ Phần Dược Phẩm Việt ( Đông Dược Viêt)
										</Link>
									</p>
								</div>
								<div className={`${styles.con_tooltip} ${styles.top} ${styles.tt_sm}`}>
									<p style={{ width: '100%' }}>
										<span className={styles.cate_ml}>Từ 7.000.000 VNĐ Đến 15.000.000 VNĐ</span>
									</p>
									{/* <span className={styles.tooltip}>
										<span>Từ 7.000.000 VNĐ Đến 15.000.000 VNĐ</span>
									</span> */}
								</div>
								<div className={`${styles.con_tooltip} ${styles.top} ${styles.tt_sm}`}>
									<p className={`${styles.ddlv} ${styles.cate_dd}`} style={{ width: '100%' }}>
										<span title="">Hồ Chí Minh </span>
									</p>
									{/* <span className={styles.tooltip}>
										<span>Hồ Chí MinhHà Nội</span>
									</span> */}
								</div>
								<p>
									<span className={styles.cate_hn} title="14/09/2023">
										Hạn nộp: 14/09/2023
									</span>
								</p>

								<p>
									<Link href="/lich-su/danh-sach-tong-u241071t1" className={styles.history_point}>
										Lịch sử vào trang
									</Link>
								</p>
								<span className={styles.job_chat + ' ' + styles.m_online}>Chat</span>
								<div className={`${styles.con_tooltip} ${styles.top} ${styles.frame_txt}`}>
									<p
										className={styles.box_txt}
										title="Quyền lợi: Lương khởi điểm 7.000.000đ + thưởng doanh số tháng/quý/năm, thu nhập
									bình quân tháng từ 15.000.000đ + Được xem xét điều chỉnh chế độ đãi ngộ 2 lần/
									năm Được liên tục đào tạo nâng cao năng lực bản thân, có lộ trình phát triển rõ
									ràng Được làm việc trong môi trường chuyên nghiệp, năng động, sáng tạo. Được
									hưởng đầy đủ các chế độ phúc lợi của công ty : BHXH, BHYT, BHTN... Thời gian làm
									việc: 08h00 - 17h30 Thứ 2 đến sáng Thứ 7"
									>
										Quyền lợi: Lương khởi điểm 7.000.000đ + thưởng doanh số tháng/quý/năm, thu nhập
										bình quân tháng từ 15.000.000đ + Được xem xét điều chỉnh chế độ đãi ngộ 2 lần/
										năm Được liên tục đào tạo nâng cao năng lực bản thân, có lộ trình phát triển rõ
										ràng Được làm việc trong môi trường chuyên nghiệp, năng động, sáng tạo. Được
										hưởng đầy đủ các chế độ phúc lợi của công ty : BHXH, BHYT, BHTN... Thời gian làm
										việc: 08h00 - 17h30 Thứ 2 đến sáng Thứ 7
									</p>
									<span className={styles.tooltip}>
										<span>
											Lương khởi điểm 7.000.000đ + thưởng doanh số tháng/quý/năm, thu nhập bình quân
											tháng từ 15.000.000đ + Được xem xét điều chỉnh chế độ đãi ngộ 2 lần/ năm Được
											liên tục đào tạo nâng cao năng lực bản thân, có lộ trình phát triển rõ ràng
											Được làm việc trong môi trường chuyên nghiệp, năng động, sáng tạo. Được hưởng
											đầy đủ các chế độ phúc lợi của công ty : BHXH, BHYT, BHTN... Thời gian làm
											việc: 08h00 - 17h30 Thứ 2 đến sáng Thứ 7
										</span>
									</span>
								</div>
								<div
									className={`${styles.con_tooltip} ${styles.top} ${styles.frame_txt} ${styles.ctn_frame_txt}`}
								>
									<p
										className={styles.box_txt}
										title="Yêu cầu: Yêu thích kinh doanh, máu lửa, năng động, tự tin, giao tiếp tốt Tốt
									nghiệp Cao đẳng trở lên các khối ngành kinh tế, quản trị kinh doanh,... Độ tuổi:
									Từ 21 đến 26 Có Laptop thành thạo sử dụng các phần mềm văn phòng, gửi/nhận
									email. Năng động, nhiệt tình, kiên trì, chịu khó, có khả năng tập trung công
									việc cao"
									>
										Yêu cầu: Yêu thích kinh doanh, máu lửa, năng động, tự tin, giao tiếp tốt Tốt
										nghiệp Cao đẳng trở lên các khối ngành kinh tế, quản trị kinh doanh,... Độ tuổi:
										Từ 21 đến 26 Có Laptop thành thạo sử dụng các phần mềm văn phòng, gửi/nhận
										email. Năng động, nhiệt tình, kiên trì, chịu khó, có khả năng tập trung công
										việc cao
									</p>
									<span className={styles.tooltip}>
										<span>
											Yêu thích kinh doanh, máu lửa, năng động, tự tin, giao tiếp tốt Tốt nghiệp Cao
											đẳng trở lên các khối ngành kinh tế, quản trị kinh doanh,... Độ tuổi: Từ 21
											đến 26 Có Laptop thành thạo sử dụng các phần mềm văn phòng, gửi/nhận email.
											Năng động, nhiệt tình, kiên trì, chịu khó, có khả năng tập trung công việc cao
										</span>
									</span>
								</div>
								<div className={styles.box_btn_ut_mb}></div>
							</div>
							<p
								className={styles.xt_tag}
								onClick={() => {
									toggleIdSeenAll(cate.id)
								}}
							>
								{stateSeenAll !== null && stateSeenAll === cate.id ? 'Rút gọn ' : ' Xem thêm'}
							</p>
						</div>
						{stateSeenAll !== null && stateSeenAll === cate.id && (
							<div className={styles.nd_xt} style={{ display: 'block' }}>
								<ul className={styles.nd_xt_ct}>
									<p>Xem tìm kiếm tương tự</p>
									<li>
										<Link href="/viec-lam-cham-soc-khach-hang-c45v0">
											Việc làm Chăm sóc khách hàng
										</Link>
									</li>
									<li>
										<Link href="/viec-lam-tai-ho-chi-minh-c0v45">Việc làm Hồ Chí Minh</Link>
									</li>
									<li>
										<Link href="/cong-ty-co-phan-giai-phap-cong-nghe-arito-co244238">
											Việc làm tại Công Ty Cổ Phần Giải Pháp Công Nghệ Arito
										</Link>
									</li>
								</ul>
							</div>
						)}
						<div className={`${styles.box_comment_chat} ${styles.not_login}`}>
							<div style={{ clear: 'both' }} />
							<div className={`${styles.box_link_comment} ${styles.box_cm_vl}`}>
								<div className={styles.box_cm_body}>
									<div className={styles.cm_like}>
										<span className={styles.cm_sh_ic}>
											<b>•</b> 0 chia sẻ{' '}
										</span>
										<span className={styles.cm_cm_ic}>
											<b>•</b> <span>0</span> bình luận{' '}
										</span>
										<span className={styles.cm_view_ic}>639 lượt xem</span>
									</div>
									<div className={styles.cm_event}>
										<div
											className={styles.cm_ev_div}
											onMouseEnter={() => setHoveredItemId(cate.id)}
											onMouseLeave={() => setHoveredItemId(null)}
										>
											<span
												className={styles.like_event}
												onClick={() => {
													handleOpenModal(status)
												}}
											>
												{status && stateIconState === cate.id ? (
													<>
														<Image
															width={24}
															height={24}
															className={styles.like_event_img}
															src={status.img}
															alt={status.alt}
														/>
														<span className={styles.like_event_txt}>{status.alt}</span>
													</>
												) : (
													<>
														<Image
															width={24}
															height={24}
															className={styles.like_event_img}
															src="/images/Ic_color_2.png"
															alt="Icon"
														/>
														<span className={styles.like_event_txt}>Thích</span>
													</>
												)}
											</span>
											{hoveredItemId === cate.id && (
												<div className={styles.show_ic}>
													{listIconStatus.map((icon, index) => {
														return (
															<span
																className={styles.cm_like_ic}
																key={index}
																onClick={() => {
																	handleChooseIconStatus(icon.id, cate.id)
																}}
															>
																<Image height={35} width={35} src={icon.img} alt={icon.alt} />
															</span>
														)
													})}
												</div>
											)}
										</div>
										<div className={styles.cm_ev_div}>
											<span className={styles.comment_event}>
												<svg
													width={21}
													height={20}
													viewBox="0 0 21 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M0.5 9.33214C0.5 4.1332 4.99145 0 10.4314 0C15.8682 0 20.3627 4.13306 20.3627 9.33214C20.3627 14.5311 15.8713 18.6643 10.4314 18.6643C9.55178 18.6643 8.6952 18.5573 7.87958 18.3536L5.09363 19.8999C4.56865 20.1913 3.92375 19.8117 3.92375 19.2112V16.3821C1.83534 14.6788 0.5 12.1588 0.5 9.33214ZM10.4314 1.43206C5.6902 1.43206 1.93206 5.01322 1.93206 9.33214C1.93206 11.7956 3.1452 14.0062 5.07169 15.4631L5.35582 15.678V18.1165L7.69446 16.8185L7.97815 16.8983C8.75226 17.116 9.57712 17.2322 10.4314 17.2322C15.1725 17.2322 18.9307 13.6511 18.9307 9.33214C18.9307 5.01336 15.1698 1.43206 10.4314 1.43206Z"
														fill="#474747"
													/>
												</svg>
												Bình luận
											</span>
										</div>
										<div
											className={styles.cm_ev_div}
											id="share"
											onClick={() => {
												setModalShare(true)
												setModalSocial(false)
											}}
										>
											<span
												className={styles.share_event}
												onClick={() => {
													toggleIdItemShare(cate.id)
												}}
											>
												<svg
													width={19}
													height={18}
													viewBox="0 0 19 18"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M12.9956 12.4056L18.392 7.09795L18.4604 7.01995C18.5617 6.88399 18.6105 6.71606 18.5979 6.54699C18.5854 6.37792 18.5123 6.21906 18.392 6.09955L12.9956 0.794353L12.9212 0.730753C12.4892 0.406753 11.8532 0.718753 11.8532 1.29355V3.84955L11.5832 3.86755C7.30761 4.20595 4.80321 6.91195 4.20561 11.82C4.12881 12.45 4.85121 12.8448 5.31921 12.4272C7.03641 10.8936 8.81121 9.94075 10.6532 9.55915C10.9484 9.49795 11.2448 9.45115 11.5436 9.41875L11.8532 9.39115V11.9064L11.8592 12.0048C11.9312 12.5484 12.59 12.804 12.9956 12.4056ZM11.6708 5.06395L13.0532 4.97155V2.53195L17.1884 6.59755L13.0532 10.6656V8.07715L11.426 8.22355H11.4164C9.37281 8.44315 7.44441 9.26155 5.62401 10.626C5.98161 9.01915 6.59241 7.81075 7.39521 6.94555C8.39121 5.87155 9.78321 5.21395 11.6708 5.06275V5.06395ZM3.59961 1.79995C2.80396 1.79995 2.0409 2.11602 1.47829 2.67863C0.91568 3.24124 0.599609 4.0043 0.599609 4.79995V14.4C0.599609 15.1956 0.91568 15.9587 1.47829 16.5213C2.0409 17.0839 2.80396 17.4 3.59961 17.4H13.1996C13.9953 17.4 14.7583 17.0839 15.3209 16.5213C15.8835 15.9587 16.1996 15.1956 16.1996 14.4V13.2C16.1996 13.0408 16.1364 12.8882 16.0239 12.7757C15.9114 12.6632 15.7587 12.6 15.5996 12.6C15.4405 12.6 15.2879 12.6632 15.1753 12.7757C15.0628 12.8882 14.9996 13.0408 14.9996 13.2V14.4C14.9996 14.8773 14.81 15.3352 14.4724 15.6727C14.1348 16.0103 13.677 16.2 13.1996 16.2H3.59961C3.12222 16.2 2.66438 16.0103 2.32682 15.6727C1.98925 15.3352 1.79961 14.8773 1.79961 14.4V4.79995C1.79961 4.32256 1.98925 3.86473 2.32682 3.52716C2.66438 3.18959 3.12222 2.99995 3.59961 2.99995H7.19961C7.35874 2.99995 7.51135 2.93674 7.62387 2.82422C7.7364 2.71169 7.79961 2.55908 7.79961 2.39995C7.79961 2.24082 7.7364 2.08821 7.62387 1.97569C7.51135 1.86317 7.35874 1.79995 7.19961 1.79995H3.59961Z"
														fill="black"
													/>
												</svg>
												Chia sẻ
											</span>
											<div
												className={
													modalShare && stateItemShare !== null && stateItemShare === cate.id
														? styles.box_share
														: styles.none
												}
											>
												{/* <div className={`${styles.box_share_items} ${styles.hidden}`}>
													<img
														src="/images/img_comment/sh_ic1.png"
														alt="Chia sẻ trang cá nhân của bạn"
													/>
													Chia sẻ lên trang cá nhân (Của bạn)
												</div>
												<div className={`${styles.box_share_items} ${styles.hidden}`}>
													<img
														src="/images/img_comment/sh_ic2.png"
														alt="Chia sẻ trang cá nhân bạn bè"
													/>
													Chia sẻ lên trang cá nhân (Bạn bè)
												</div> */}
												<div className={`${styles.box_share_items} ${styles.share_items_chat365}`}>
													<Image
														height={24}
														width={24}
														src="/images/img_comment/sh_ic3.png"
														alt="Gửi bằng Chat365"
													/>
													Gửi bằng Chat365
												</div>
												<div className={`${styles.box_share_items} ${styles.share_group_chat365}`}>
													<Image
														height={24}
														width={24}
														src="/images/img_comment/sh_ic4.png"
														alt="Gửi lên nhóm Chat365"
													/>
													Gửi lên nhóm Chat365
												</div>
												<div
													className={`${styles.box_share_items} ${styles.share_items_mxh}`}
													onClick={() => {
														setModalSocial(!modalSocial)
													}}
												>
													<Image
														height={24}
														width={24}
														src="/images/img_comment/sh_ic5.png"
														alt="Khác"
													/>
													Khác
												</div>
											</div>
											<div
												className={
													stateItemShare !== null && stateItemShare === cate.id && modalSocial
														? styles.box_share_mxh
														: styles.none
												}
											>
												<div className={styles.box_share_items}>
													<Image
														height={24}
														width={24}
														src="/images/img_comment/iic_f.png"
														alt="Facebook"
													/>
													Facebook
												</div>
												<div className={styles.box_share_items}>
													<Image
														height={24}
														width={24}
														src="/images/img_comment/iic_t.png"
														alt="Twitter"
													/>
													Twitter
												</div>
												<div className={styles.box_share_items}>
													<Image
														height={24}
														width={24}
														src="/images/img_comment/iic_v.png"
														alt="Vkontakte"
													/>
													Vkontakte
												</div>
												<div className={styles.box_share_items}>
													<Image
														height={24}
														width={24}
														src="/images/img_comment/iic_l.png"
														alt="Linked In"
													/>
													Linked In
												</div>
											</div>
										</div>
									</div>
									<div className={styles.order_cm}>
										<div className={`${styles.cm_input} ${styles.input_comment}`}>
											<Image
												height={80}
												width={80}
												className={styles.img_user}
												src="/images/user_no.png"
												alt="bình luận"
											/>
											<textarea
												className={`${styles.ct_cm} ${styles.tag_cm}`}
												maxLength={250}
												placeholder="Viết bình luận"
												style={{ height: 48 }}
											/>
											<svg
												className={styles.ic_send_cm}
												width={32}
												height={32}
												viewBox="0 0 32 32"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect width="32" height="32" rx="16" fill="#4C5BD4"></rect>
												<path
													d="M24.7922 8.21841C24.6908 8.11767 24.5628 8.04793 24.4231 8.01737C24.2835 7.98681 24.138 7.99672 24.0037 8.04592L7.48458 14.0456C7.34211 14.0996 7.21946 14.1956 7.13291 14.3208C7.04635 14.4461 7 14.5946 7 14.7468C7 14.899 7.04635 15.0476 7.13291 15.1728C7.21946 15.2981 7.34211 15.3941 7.48458 15.448L13.9346 18.0204L18.6951 13.2507L19.7538 14.3081L14.9708 19.0854L17.5538 25.5275C17.6094 25.6671 17.7057 25.7867 17.8302 25.8709C17.9547 25.9552 18.1017 26.0001 18.2521 26C18.4038 25.9969 18.551 25.9479 18.6744 25.8596C18.7977 25.7712 18.8913 25.6476 18.9429 25.505L24.9498 9.00587C25.001 8.87319 25.0133 8.72871 24.9854 8.58929C24.9575 8.44987 24.8905 8.32124 24.7922 8.21841Z"
													fill="white"
												></path>
											</svg>
											<svg
												className={styles.cm_img_ct}
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6.76017 22H17.2402C20.0002 22 21.1002 20.31 21.2302 18.25L21.7502 9.99C21.8902 7.83 20.1702 6 18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.89017 20.31 4.00017 22 6.76017 22Z"
													stroke="#999999"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
												<path
													d="M10.5 8H13.5"
													stroke="#999999"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
												<path
													d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z"
													stroke="#999999"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
											<input
												style={{ display: 'none' }}
												name="listimg"
												className={styles.fileupload}
												type="file"
											/>
											<div className={styles.tag_friend} style={{ display: 'none' }} />
										</div>
									</div>
									<div className={styles.cm_list}>
										<div className={styles.box_cm_list}>
											<div className={styles.cm_comment}>
												<div className={`${styles.cm_content} ${styles.cm_7294}`}>
													<Image
														height={48}
														width={48}
														className={styles.ava_cm}
														src="/images/user_no.png"
														alt="Pa Linkn"
													/>
													<div className={`${styles.cm_box} ${styles.frame_cm_box}`}>
														<div className={styles.cm_cm_ct}>
															<p className={styles.cm_content_user}>Pa Link</p>
															<p className={styles.cm_nd}>a</p>
														</div>
														<div className={styles.cm_cm_ev}>
															<div
																className={styles.cm_list_ev}
																onMouseEnter={() => setHoveredItemIdBottom(cate.id)}
																onMouseLeave={() => setHoveredItemIdBottom(null)}
															>
																<span className={styles.like_cm}>
																	<span className={styles.like_cm_txt}>Thích</span> |
																</span>
																<span className={styles.reply_cm}>Phản hồi |</span>
																<span className={styles.delete_cm}>
																	Xóa <span className={styles.span_del}>|</span>
																</span>
																<span className={styles.time_cm}>Vừa xong</span>
																{hoveredItemIdBottom === cate.id ? (
																	<div className={styles.show_ic}>
																		{listIconStatus.map((icon, index) => {
																			return (
																				<span
																					className={styles.cm_like_ic}
																					key={index}
																					onClick={() => {
																						handleChooseIconStatus(icon.id, cate.id)
																					}}
																				>
																					<Image
																						height={35}
																						width={35}
																						src={icon.img}
																						alt={icon.alt}
																					/>
																				</span>
																			)
																		})}
																	</div>
																) : (
																	''
																)}
															</div>
															<span className={styles.cm_list_like}>
																<span className={`${styles.cm_count_like} ${styles.count_ic}`} />
																<span className={styles.box_items_like_ic}>
																	<span className={`${styles.cm_like_ic}`}>
																		<Image
																			height={20}
																			width={20}
																			className={`${styles.item_like_ic} ${styles.ic1}`}
																			src="/images/img_comment/Ic_1.png"
																			alt="Thích"
																		/>
																	</span>
																</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})}
			{/* <Pagination defaultCurrent={1} total={50000} current={1} pageSize={10} /> */}
			<Model_noti />
		</div>
	)
}

export default List_cate
