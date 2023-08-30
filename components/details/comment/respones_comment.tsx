import React, { useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Rep_comment from './rep_comment'
import Image from 'next/image'
import { Icomment, Iicons } from './comment'
import Input_Rep_comment from './input_rep_rep_comment'

type Props = {
	listComment: Icomment[]
	setlistComment: (value: Icomment[]) => void
}

const Respones_comment = ({ listComment, setlistComment }: Props) => {
	// Lấy ở reduce or api
	const name_comment = 'Nguyễn Quang Trường'

	const [showIcons, setshowIcons] = useState<boolean>(false)
	const [showRes_Response, setshowRes_Response] = useState<boolean>(false)
	const [showIcon, setshowIcon] = useState<boolean>(false)
	const [content_comment, setcontent_comment] = useState<string>('')
	const [listCommentRes, setlistCommentRes] = useState<Icomment[]>([])
	const [showInput, setShowInput] = useState<boolean>(false)
	const [icons_used, setIcons_used] = useState<Iicons[]>([])
	const [changeIcon, setchangeIcon] = useState<string>(
		'https://timviec365.vn/images/img_comment/Ic_color_2.png'
	)
	const [selectedCommentId, setSelectedCommentId] = useState<any>(null)
	const [selectedCommentIdShowIcon, setSelectedCommentIdShowIcon] = useState<any>(null)
	const [name_icon, setName_Icon] = useState<string>('Thích')

	const listIconStatus: Iicons[] = [
		{
			id: 1,
			img: 'https://timviec365.vn/images/img_comment/Ic_1.png',
			alt: 'Thích',
		},
		{
			id: 2,
			img: 'https://timviec365.vn/images/img_comment/Ic_2.png',
			alt: 'Yêu thích',
		},
		{ id: 3, img: 'https://timviec365.vn/images/img_comment/Ic_3.png', alt: 'Wow' },
		{
			id: 4,
			img: 'https://timviec365.vn/images/img_comment/Ic_4.png',
			alt: 'Thương thương',
		},
		{
			id: 5,
			img: 'https://timviec365.vn/images/img_comment/Ic_5.png',
			alt: 'Phẫn nộ',
		},
		{ id: 6, img: 'https://timviec365.vn/images/img_comment/Ic_6.png', alt: 'Buồn' },
		{ id: 7, img: 'https://timviec365.vn/images/img_comment/Ic_7.png', alt: 'Haha' },
	]
	const [selectedIconId, setSelectedIconId] = useState<number>() // State để lưu trạng thái của icon được chọn

	const handleActionIcon = (icon: Iicons, item: Icomment) => {
		let name: any = document.getElementById(`${item.cm_id}`)
		setchangeIcon(icon?.img)
		name.innerHTML = icon?.alt
		setName_Icon(icon?.alt)
		setSelectedIconId(item.cm_id)
	}
	const handleComment = async (): Promise<void> => {
	//Api bình luận
	}
	const handleShowResResPonse = (item: Icomment) => {
		if(selectedCommentId){
			setSelectedCommentId(null)

		}else{
			setSelectedCommentId(item.cm_id)

		}

		// setShowInput(!showInput)
	}
	const handleDeleteComment = () => {
		setlistComment([])
	}
	return (
		<>
			{listComment?.length > 0 &&
				listComment?.map((item: Icomment, index: number) => {
					return (
						<div className={`${styles.box_cm_list}`} key={index}>
							<div
								className={`${styles.cm_comment} ${styles.cm_has_reply}`}
								style={{
									boxShadow: `inset 10px 10px 10px #fff`, // Áp dụng box-shadow để tạo hiệu ứng thấp xuống 1px
								}}
							>
								<div className={`${styles.cm_content} ${styles.cm_8142}`}>
									<img
										width={36}
										height={36}
										className={`${styles.ava_cm}`}
										src={
											`${item.cm_sender_avatar}` == ''
												? 'https://timviec365.vn/images/user_no.png'
												: item.cm_sender_avatar
										}
									/>
									<div className={`${styles.cm_box} ${styles.frame_cm_box}`}>
										<div className={`${styles.cm_cm_ct}`}>
											<p className={`${styles.cm_content_user}`}>
												<a
													target="_blank"
													rel="nofollow"
													href="https://chat365.timviec365.vn/chat-MTQ2MjM3MA=="
												>
													{item?.cm_sender_name}
												</a>
											</p>
											<p className={`${styles.cm_nd}`}>{item?.cm_comment}</p>
										</div>
										<div className={`${styles.cm_cm_ev}`}>
											<div className={`${styles.cm_list_ev}`}>
												<span
													className={`${styles.like_cm}`}
													onMouseOver={() => setSelectedCommentIdShowIcon(item.cm_id)}
												>
													<span>
														<div
															className={`${styles.like_cm_txt}   
													${selectedIconId === item?.cm_id && name_icon === 'Thích' ? styles.blue : ''}
													${selectedIconId === item?.cm_id && name_icon === 'Yêu thích' ? styles.red : ''}
													${selectedIconId === item?.cm_id && name_icon === 'Wow' ? styles.cam : ''}
													${selectedIconId === item?.cm_id && name_icon === 'Thương thương' ? styles.cam : ''}
													${selectedIconId === item?.cm_id && name_icon === 'Phẫn nộ' ? styles.cam : ''}
													${selectedIconId === item?.cm_id && name_icon === 'Buồn' ? styles.cam : ''}
													${selectedIconId === item?.cm_id && name_icon === 'Haha' ? styles.cam : ''}
													`}
															id={`${item?.cm_id}`}
														>
															Thích
														</div>
													</span>
												</span>
												<span
													onClick={() => handleShowResResPonse(item)}
													className={`${styles.reply_cm}`}
												>
													Phản hồi |
												</span>
												
												<span
													onClick={() => handleDeleteComment()}
													style={{ color: 'red' }}
													className={`${styles.reply_cm}`}
												>
													Xóa |
												</span>

												<span
													className={`${styles.time_cm}`}
													title="Thứ bảy, 26 - Tháng 08, 2023 lúc 08:52"
												>
													now
												</span>
												{selectedCommentIdShowIcon === item?.cm_id && (
													<div
														onMouseLeave={() => setSelectedCommentIdShowIcon(null)}
														className={`${styles.box_items_like_ic2}`}
													>
														{listIconStatus?.map((icon, index) => {
															return (
																<span
																	onClick={() => handleActionIcon(icon, item)}
																	className={styles.cm_like_ic}
																	key={index}
																>
																	<Image
																		style={{ cursor: 'pointer' }}
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
											<span
												className={`${styles.cm_list_like}`}
												data-like={0}
												style={{ display: 'flex' }}
											>
												<div style={{ display: 'flex', paddingRight: 10 }}>
													{' '}
													{item.arr_likes.length}
												</div>
												<div>
													{icons_used?.map((icon: Iicons, index: number) => {
														// if()
														return (
															<span key={index} style={{ gap: 10 }}>
																<Image
																	width={25}
																	height={25}
																	style={{ cursor: 'pointer' }}
																	src={icon?.img}
																	alt={icon?.alt}
																/>
															</span>
														)
													})}
												</div>
											</span>
											{item?.arr_reply && (
												<Rep_comment
													showRes_Response={showRes_Response}
													setshowRes_Response={setshowRes_Response}
													listCommentRes={item?.arr_reply}
													setlistCommentRes={setlistCommentRes}
												/>
											)}
											{/* Phản hồi của phản hồi tin tuyển dụng */}

											{selectedCommentId === item?.cm_id && (
												<Input_Rep_comment
													handleComment={handleComment}
													setcontent_comment={setcontent_comment}
													content_comment={content_comment}
													showInput={showInput}
													setShowInput={setShowInput}
												/>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					)
				})}
		</>
	)
}
export default Respones_comment
