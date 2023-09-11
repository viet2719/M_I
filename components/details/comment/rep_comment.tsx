import React, { useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Image from 'next/image'
import Input_Rep_Rep_comment from './input_rep_rep_rep_comment'
import { listIconStatus } from '@/utils/constants'
import { Icomment, Iicons } from '@/utils/interface'

type Props = {
	listCommentRes: Icomment[]
	setlistCommentRes: (value: Icomment[]) => void
	cm_id: number
	handleGetComment: () => void
}

const Rep_comment = ({ listCommentRes, setlistCommentRes, cm_id, handleGetComment }: Props) => {
	const name_comment = 'Nguyễn Quang Trường'
	const [showIcon, setshowIcon] = useState<boolean>(false)
	const [content_comment, setcontent_comment] = useState<string>('')
	const [name_icon, setName_Icon] = useState<string>('Thích')
	const [icons_used, setIcons_used] = useState<Iicons[]>([])
	const [selectedCommentIconUsed, setSelectedCommentIIconUsed] = useState<any>(null)

	const [changeIcon, setchangeIcon] = useState<string>(
		'https://timviec365.vn/images/img_comment/Ic_color_2.png'
	)
	const [selectedCommentId, setSelectedCommentId] = useState<any>(null)
	const [selectedCommentIdShowIcon, setSelectedCommentIdShowIcon] = useState<any>(null)

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

	// Thao tác nút like mặc định
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

	//Show Input
	const handleShowResResPonse = (item: Icomment) => {
		if (selectedCommentId) {
			setSelectedCommentId(null)
		} else {
			setSelectedCommentId(item.cm_id)
		}
	}

	//Comment
	const handleComment = async (): Promise<void> => {
		try {
			if (content_comment) {
				await fetch(`http://210.245.108.202:3001/api/timviec/new/comment`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MTQwNDE1NiwiaWRUaW1WaWVjMzY1IjoxMzMzNjc2LCJpZFFMQyI6OTcwODU5LCJpZFJhb05oYW5oMzY1IjowLCJlbWFpbCI6bnVsbCwicGhvbmVUSyI6IjAzNjc2NDg5MDciLCJjcmVhdGVkQXQiOjE2OTA0MjEwODUsInR5cGUiOjB9LCJpYXQiOjE2OTM0NjcyNjgsImV4cCI6MTY5MzU1MzY2OH0.A3-8if-PGjG7WxigIX5qDaaHqFHL-6jKZT3FzTZyBI8`,
					},
					method: 'POST',
					body: JSON.stringify({
						cm_comment: content_comment,
						cm_new_id: 871632,
						cm_parent_id: cm_id,
					}),
				})
				handleGetComment()
			} else {
				alert('Vui lòng nhập bình luận')
			}
		} catch (error) {}
	}

	const handleDeleteRepComment = () => {
		setlistCommentRes([])
	}
	return (
		<div className={`${styles.cm_content} ${styles.cm_8143} ${styles.cm_reply_box}`}>
			{listCommentRes?.length > 0 &&
				listCommentRes?.map((item: Icomment, index: number) => {
					return (
						<div key={index} className={`${styles.cm_content} ${styles.cm_8142}`}>
							<span className={styles.line_reply2} />
							<Image
								width={36}
								height={36}
								className={`${styles.ava_cm}`}
								src={
									`${item.cm_sender_avatar}` == ''
										? 'https://timviec365.vn/images/user_no.png'
										: item.cm_sender_avatar
								}
								alt="Nguyễn Quang Trường"
							/>
							<div className={`${styles.cm_box} ${styles.frame_cm_box}`}>
								<div className={`${styles.cm_cm_ct}`}>
									<p className={`${styles.cm_content_user}`}>
										<a target="_blank" rel="nofollow">
											{item?.cm_sender_name}
										</a>
									</p>
									<p className={`${styles.cm_nd}`}>{item?.cm_comment}</p>
								</div>
								<div className={`${styles.cm_cm_ev}`}>
									<div className={`${styles.cm_list_ev}`}>
										<span className={`${styles.like_cm}`} onClick={() => handleLikeDefault(item)}>
											<span>
												<div
													onMouseOver={() => setSelectedCommentIdShowIcon(item.cm_id)}
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
											onClick={() => handleDeleteRepComment()}
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
																onMouseOver={() => setshowIcon(true)}
																onMouseLeave={() => setshowIcon(false)}
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
											{item?.arr_likes?.length}
										</div>

										{selectedCommentIconUsed == item.cm_id && (
											<div>
												{icons_used?.map((icon: Iicons, index: number) => {
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
										)}
									</span>
									{selectedCommentId === item?.cm_id && (
										<Input_Rep_Rep_comment
											handleComment={handleComment}
											setcontent_comment={setcontent_comment}
											content_comment={content_comment}
										/>
									)}
								</div>
							</div>
						</div>
					)
				})}
		</div>
	)
}
export default Rep_comment
