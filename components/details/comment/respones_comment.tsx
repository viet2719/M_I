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
	const [content_comment, setcontent_comment] = useState<string>('')
	const [listCommentRes, setlistCommentRes] = useState<Icomment[]>([])
	const [icons_used, setIcons_used] = useState<Iicons[]>([])
	const [changeIcon, setchangeIcon] = useState<string>(
		'https://timviec365.vn/images/img_comment/Ic_color_2.png'
	)
	const [selectedCommentId, setSelectedCommentId] = useState<any>(null)
	const [selectedCommentIconUsed, setSelectedCommentIIconUsed] = useState<any>(null)

	const [selectedCommentIdShowIcon, setSelectedCommentIdShowIcon] = useState<any>(null)
	const [name_icon, setName_Icon] = useState<string>('Thích')
	const listIconStatus: Iicons[] = [
		{
			id: 1,
			img: 'https://timviec365.vn/images/img_comment/Ic_1.png',
			alt: 'Thích',
			style: 'blue',
		},
		{
			id: 2,
			img: 'https://timviec365.vn/images/img_comment/Ic_2.png',
			alt: 'Yêu thích',
			style: 'red',
		},
		{
			id: 3,
			img: 'https://timviec365.vn/images/img_comment/Ic_3.png',
			alt: 'Wow',
			style: 'orange',
		},
		{
			id: 4,
			img: 'https://timviec365.vn/images/img_comment/Ic_4.png',
			alt: 'Thương thương',
			style: 'orange',
		},
		{
			id: 5,
			img: 'https://timviec365.vn/images/img_comment/Ic_5.png',
			alt: 'Phẫn nộ',
			style: 'orange',
		},
		{
			id: 6,
			img: 'https://timviec365.vn/images/img_comment/Ic_6.png',
			alt: 'Buồn',
			style: 'orange',
		},
		{
			id: 7,
			img: 'https://timviec365.vn/images/img_comment/Ic_7.png',
			alt: 'Haha',
			style: 'orange',
		},
	]

	const handleActionIcon = (icon: Iicons, item: Icomment) => {
		setSelectedCommentIIconUsed(item.cm_id)
		let name: any = document.getElementById(`likeText_${item.cm_id}`)
		if (name) {
			setchangeIcon(icon?.img)
			name.innerHTML = icon?.alt + ' |'
			setName_Icon(icon?.alt)
			setIcons_used([icon])
		}

		// Tìm phần chữ 'Thích' trong phần comment và thay đổi màu chữ
		const likeText = document.getElementById(`likeText_${item.cm_id}`)
		if (likeText) {
			likeText.style.color = icon.style
		}
	}
	const handleShowResResPonse = (item: Icomment) => {
		if (selectedCommentId) {
			setSelectedCommentId(null)
		} else {
			setSelectedCommentId(item.cm_id)
		}
	}
	const handleLikeDefault = (item: Icomment) => {
		setSelectedCommentIIconUsed(item.cm_id)
		let likeText: any = document.getElementById(`likeText_${item.cm_id}`)
		setSelectedCommentIdShowIcon(null)
		if (likeText) {
			if (likeText.innerHTML === 'Thích |') {
				likeText.innerHTML = 'Đã thích |'
				likeText.style.color = 'blue'
				setIcons_used([
					{ img: 'https://timviec365.vn/images/img_comment/Ic_1.png', alt: '', style: '', id: 1 },
				])
			} else {
				likeText.innerHTML = 'Thích |'
				likeText.style.color = 'black'
				setIcons_used([])
			}
		}
	}
	const handleDeleteComment = () => {
		// setlistComment([])
	}
	const handleComment = async (): Promise<void> => {
		try {
			if (content_comment) {
				await fetch(`http://210.245.108.202:3001/api/timviec/new/comment`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTQwNDE1NiwiaWRUaW1WaWVjMzY1IjoxMzMzNjc2LCJpZFFMQyI6OTcwODU5LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6bnVsbCwicGhvbmVUSyI6IjAzNjc2NDg5MDciLCJjcmVhdGVkQXQiOjE2OTA0MjEwODUsInR5cGUiOjB9LCJpYXQiOjE2OTMzNjk3MDcsImV4cCI6MTY5MzQ1NjEwN30.hB8R4lGMIFDE0birZpTnjmcKDLdt5geN1uLDwPTQg3Q`,
					},
					method: 'POST',
					body: JSON.stringify({
						cm_comment: content_comment,
						cm_new_id: 870398,
						cm_parent_id: selectedCommentId,
					}),
				})
			} else {
				alert('Vui lòng nhập bình luận')
			}
		} catch (error) {}
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
									<Image
										alt=""
										width={54}
										height={54}
										className={`${styles.ava_cm}`}
										src={
											`${item.cm_sender_avatar}` == ''
												? 'https://timviec365.vn/images/user_no.png'
												: `${`/${item.cm_sender_avatar}`}`
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
													onClick={() => handleLikeDefault(item)}
												>
													<span onMouseOver={() => setSelectedCommentIdShowIcon(item.cm_id)}>
														<div
															className={`${styles.like_cm_txt}   
													`}
															id={`likeText_${item.cm_id}`}
														>
															Thích |
														</div>
													</span>
												</span>
												<span
													onClick={() => handleShowResResPonse(item)}
													className={`${styles.reply_cm}`}
												>
													Phản hồi |
												</span>

												{/* <span
													onClick={() => handleDeleteComment()}
													style={{ color: 'red' }}
													className={`${styles.reply_cm}`}
												>
													Xóa |
												</span> */}

												<span
													className={`${styles.time_cm}`}
													title="Thứ bảy, 26 - Tháng 08, 2023 lúc 08:52"
												>
													now
												</span>

												{selectedCommentIdShowIcon === item?.cm_id && (
													<div
														onMouseLeave={() => setSelectedCommentIdShowIcon(null)}
														onClick={() => setSelectedCommentIdShowIcon(null)}
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
													{item.arr_likes.length > 0 && item.arr_likes.length}
												</div>

												{selectedCommentIconUsed == item.cm_id && <div>
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
												</div>}
											</span>
											{/* Nút gửi phản hồi */}
											{selectedCommentId === item?.cm_id && (
												<Input_Rep_comment
													handleComment={handleComment}
													setcontent_comment={setcontent_comment}
													content_comment={content_comment}
												/>
											)}
											{item?.arr_reply && (
												<Rep_comment
													listCommentRes={item?.arr_reply}
													cm_id={item.cm_id}
													setlistCommentRes={setlistCommentRes}
												/>
											)}
											{/* Phản hồi của phản hồi tin tuyển dụng */}
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
