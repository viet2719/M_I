import React, { useEffect, useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import { Image } from 'antd'
import Respones_comment from './respones_comment'
import Input_comment from './input_comment'
import Option_share from './option_share'
import Action_chat365 from './action_share/action_chat365'
import Action_Gr_Chat365 from './action_share/action_gr_chat365'
import Danh_gia from './danh_gia'
import Model_History_comment from '@/components/pop_up/model_history_comment'

type Props = {}
export interface Iicons {
	id: number
	img: string
	alt: string
	count: number
}
export interface Icomment {
	name: string
	content: string
}
const Comment = (props: Props) => {
	const [showBinhLuan, setShowBinhLuan] = useState<boolean>(true)
	const [showDanhGia, setShowDanhGia] = useState<boolean>(false)
	const [showIcon, setshowIcon] = useState<boolean>(false)
	const [showBox_share, setShowBox_share] = useState<boolean>(false)
	const [show_Box_Share_Mxh, setShow_Box_Share_Mxh] = useState<boolean>(false)
	const [icons_used, setIcons_used] = useState<Iicons[]>([])
	const [name_active, setName_active] = useState<string>('')
	const [name_comment, setName_comemnt] = useState<string>('')
	const [listComment, setlistComment] = useState<Icomment[]>([])
	const [content_comment, setcontent_comment] = useState<string>('')
	const [showChat365, setShowChat365] = useState<boolean>(false)
	const [showGrChat365, setShowGrChat365] = useState<boolean>(false)
	const [showHistoryComemnt, setShowHistoryComemnt] = useState<boolean>(false)
	const [changeIcon, setchangeIcon] = useState<string>(
		'https://timviec365.vn/images/img_comment/Ic_color_2.png'
	)
	const [name_icon, setName_Icon] = useState<string>('thích')
	const [count1, setcount1] = useState<number>(0)
	const [count2, setcount2] = useState<number>(0)

	const [count3, setcount3] = useState<number>(0)

	const [count4, setcount4] = useState<number>(0)

	const [count5, setcount5] = useState<number>(0)

	const [count6, setcount6] = useState<number>(0)

	const [count7, setcount7] = useState<number>(0)

	const listIconStatus: Iicons[] = [
		{
			id: 1,
			img: 'https://timviec365.vn/images/img_comment/Ic_1.png',
			alt: 'Thích',
			count: +count1,
		},
		{
			id: 2,
			img: 'https://timviec365.vn/images/img_comment/Ic_2.png',
			alt: 'Yêu thích',
			count: count2,
		},
		{ id: 3, img: 'https://timviec365.vn/images/img_comment/Ic_3.png', alt: 'Wow', count: count3 },
		{
			id: 4,
			img: 'https://timviec365.vn/images/img_comment/Ic_4.png',
			alt: 'Thương thương',
			count: count4,
		},
		{
			id: 5,
			img: 'https://timviec365.vn/images/img_comment/Ic_5.png',
			alt: 'Phẫn nộ',
			count: count5,
		},
		{ id: 6, img: 'https://timviec365.vn/images/img_comment/Ic_6.png', alt: 'Buồn', count: count6 },
		{ id: 7, img: 'https://timviec365.vn/images/img_comment/Ic_7.png', alt: 'Haha', count: count7 },
	]
	// Thay đổi icons và nội dung
	const handleActionIcon = (icon: Iicons) => {
		setchangeIcon(icon?.img)
		setName_Icon(icon?.alt)
		setName_active('Nguyễn Quang Trường')
		if (icon.id == 1) {
			setcount1(count1 + 1)
		}
		if (icon.id == 2) {
			setcount2(count2 + 1)
		}
		if (icon.id == 3) {
			setcount3(count3 + 1)
		}
		if (icon.id == 4) {
			setcount4(count4 + 1)
		}
		if (icon.id == 5) {
			setcount5(count5 + 1)
		}
		if (icon.id == 6) {
			setcount6(count6 + 1)
		}
		if (icon.id == 7) {
			setcount7(count7 + 1)
		}
		let isExis: any = icons_used.find((item: Iicons) => item.id === icon.id)
		if (!isExis) {
			icons_used.push(icon)
		}
	}
	// Ẩn share khi click ra ngoài
	const handleOutsideClick = (event: any) => {
		const detailsIcon: HTMLElement | any = document.getElementById('share')

		if (!detailsIcon?.contains(event.target)) {
			setShowBox_share(false)
			setShow_Box_Share_Mxh(false)
		}
	}

	const handleComment = async (): Promise<void> => {
		if (content_comment) {
			setlistComment([...listComment, { name: name_comment, content: content_comment }])
			listComment.shift()
			setcontent_comment('')
		} else {
			alert('Vui lòng nhập bình luận')
		}
	}
	// Thêm sự kiện click cho cả màn hình
	useEffect(() => {
		document?.addEventListener('click', handleOutsideClick)
	}, [])
	return (
		<div className={`${styles.title_all} ${styles.content_cmt_vote}`}>
			<div className={`${styles.box_cmt_vote}`}>
				<div className={`${styles.tab_cmt_vote}`}>
					<button
						onClick={() => {
							setShowBinhLuan(true), setShowDanhGia(false)
						}}
						className={`${styles.tablink_cmt_vote} ${styles.text_cm_hed} ${
							showBinhLuan ? `${styles.active}` : ''
						}`}
					>
						BÌNH LUẬN
					</button>
					<button
						onClick={() => {
							setShowBinhLuan(false), setShowDanhGia(true)
						}}
						className={`${styles.tablink_cmt_vote} ${styles.text_cm_hed} ${
							showDanhGia ? `${styles.active}` : ''
						}`}
					>
						ĐÁNH GIÁ
					</button>
				</div>
				<div className={`${styles.tab_content}`}>
					{showBinhLuan && (
						<div className={`${styles.item_cmt_vote}`} id="box_contain_cmt">
							<link rel="stylesheet" href="/css/style_cm.css?v=315" />
							<div id="box_comment_chat">
								<div style={{ clear: 'both' }} />
								<div className={`${styles.box_link_comment}`}>
									<div className={`${styles.box_cm_head}`}>
										<span className={`${styles.text_cm_hed}`}>Bình luận</span>
									</div>

									<div>
										<div className={`${styles.cm_like}`}>
											<div className={`${styles.frame_cm_like}`}>
												<div className={`${styles.frame_cm_like}`}>
													{showIcon && (
														<div className={`${styles.box_items_like_ic}`}>
															{listIconStatus?.map((icon, index) => {
																return (
																	<span
																		onClick={() => handleActionIcon(icon)}
																		className={styles.cm_like_ic}
																		key={index}
																	>
																		<Image
																			onMouseOver={() => setshowIcon(true)}
																			onMouseLeave={() => setshowIcon(false)}
																			preview={false}
																			height={35}
																			width={35}
																			src={icon.img}
																			alt={icon.alt}
																		/>
																	</span>
																)
															})}
														</div>
													)}
												</div>
											</div>	
											<span className={`${styles.count_ic}`}>
												{icons_used?.map((icon: Iicons, index: number) => {
													// if()
													return (
														<span key={index}>
															<Image
																onClick={() => setShowHistoryComemnt(true)}
																preview={false}
																width={25}
																height={25}
																src={icon?.img}
																alt={icon?.alt}
															/>
														</span>
													)
												})}

												<span> {name_active}</span>
											</span>
											<span className={`${styles.cm_sh_ic}`}>
												<b>•</b> 0 chia sẻ{' '}
											</span>
											<span className={`${styles.cm_cm_ic}`}>
												<b>•</b> <span>0</span> bình luận{' '}
											</span>

											<span className={`${styles.cm_view_ic}`}>516 lượt xem</span>
											<div className={`${styles.box_sh_ic}`} style={{ display: 'none' }}>
												<div className={`${styles.frame}`}>
													<p className={`${styles.sh_title}`}>Chia sẻ</p>
												</div>
											</div>
											<div className={`${styles.box_cm_ic}`} style={{ display: 'none' }}>
												<div className={`${styles.frame}`}>
													<p className={`${styles.cm_title}`}>Bình luận</p>
												</div>
											</div>
										</div>

										<div className={`${styles.cm_event}`}>
											<div className={`${styles.cm_ev_div}`}>
												<span
													className={`${styles.like_event}`}
													onMouseOver={() => setshowIcon(true)}
												>
													<img
														id="action_icon"
														className={`${styles.like_event_img}`}
														src={changeIcon}
														alt="Icon"
													/>
													<span id="details_icon" className={`${styles.like_event_txt}`}>
														{name_icon}
													</span>
												</span>
												<div className={`${styles.show_ic}`} style={{ display: 'none' }}>
													<span className={`${styles.cm_like_ic}`}>
														<img
															src="https://timviec365.vn/images/img_comment/Ic_1.png"
															alt="icon1"
														/>
													</span>
													<span className={`${styles.cm_like_ic}`}>
														<img
															src="https://timviec365.vn/images/img_comment/Ic_2.png"
															alt="icon2"
														/>
													</span>
													<span className={`${styles.cm_like_ic}`}>
														<img
															src="https://timviec365.vn/images/img_comment/Ic_3.png"
															alt="icon3"
														/>
													</span>
													<span className={`${styles.cm_like_ic}`}>
														<img
															src="https://timviec365.vn/images/img_comment/Ic_4.png"
															alt="icon4"
														/>
													</span>
													<span className={`${styles.cm_like_ic}`}>
														<img
															src="https://timviec365.vn/images/img_comment/Ic_5.png"
															alt="icon5"
														/>
													</span>
													<span className={`${styles.cm_like_ic}`}>
														<img
															src="https://timviec365.vn/images/img_comment/Ic_6.png"
															alt="icon6"
														/>
													</span>
													<span className={`${styles.cm_like_ic}`}>
														<img
															src="https://timviec365.vn/images/img_comment/Ic_7.png"
															alt="icon7"
														/>
													</span>
												</div>
											</div>
											<div className={`${styles.cm_ev_div}`}>
												<span className={`${styles.comment_event}`}>
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
											<div className={`${styles.cm_ev_div}`} id="share">
												<span
													className={`${styles.share_event}`}
													onClick={() => setShowBox_share(!showBox_share)}
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

												{/* option_share */}
												<Option_share
													showBox_share={showBox_share}
													show_Box_Share_Mxh={show_Box_Share_Mxh}
													setShow_Box_Share_Mxh={setShow_Box_Share_Mxh}
													setShowChat365={setShowChat365}
													setShowGrChat365={setShowGrChat365}
												/>
											</div>
										</div>
										<div className={`${styles.order_cm}`}>
											<select className={`${styles.new_old}`}>
												<option value={1}> Mới nhất</option>
												<option value={2}>Cũ nhất</option>
											</select>

											{/* {comment_accion} */}
											<Input_comment
												handleComment={handleComment}
												setcontent_comment={setcontent_comment}
												setName_comemnt={setName_comemnt}
												content_comment={content_comment}
											/>
										</div>
										{/* Phản  hồi comment */}
										<Respones_comment listComment={listComment} />
									</div>
								</div>
								<div
									className={`${styles.popup_comment}`}
									id="popup_items_sh"
									style={{ display: 'none' }}
								>
									<div className={`${styles.popup_items_sh}`}>
										<div className={`${styles.box_header}`}>
											<div className={`${styles.title}`}>Những người đã chia sẻ tin này</div>
											<img
												src="/images/img_comment/close.png"
												alt="close"
												className={`${styles.close_cm}`}
											/>
										</div>
										<div className={`${styles.frame_items}`}></div>
									</div>
								</div>
								{/* Xem những ai đã thả tym */}
								<Model_History_comment
									showHistoryComemnt={showHistoryComemnt}
									setShowHistoryComemnt={setShowHistoryComemnt}
									count1={count1}
									count2={count2}
									count3={count3}
									count4={count4}
									count5={count5}
									count6={count6}
									count7={count7}
								/>

								{/* Action_share */}
								{(showChat365 || showGrChat365) && (
									<div className={`${styles.popup_comment}`} id="popup_share_gr">
										{/* {Gửi bằng chát 365} */}
										<Action_chat365 showChat365={showChat365} setShowChat365={setShowChat365} />
										<Action_Gr_Chat365
											showGrChat365={showGrChat365}
											setShowGrChat365={setShowGrChat365}
										/>
									</div>
								)}
							</div>
						</div>
					)}
					<Danh_gia showDanhGia={showDanhGia} />
				</div>
			</div>
		</div>
	)
}
export default Comment
