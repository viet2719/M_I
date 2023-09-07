import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '@styles/common/box_comment.module.scss'
import { useDispatch } from 'react-redux'
import { openModal } from '@/actions/actions'
import Input_reply from './input_reply'
import Content_Component from './box_content_comment'
import Item_comment from './item_comment'
import axios from 'axios'
import { arr_comments } from './datafake'

const Box_comment = (id: any) => {
	const [apiDataID, setApiDataID] = useState<any[]>(arr_comments)
	const [loading, setLoading] = useState<boolean>(true)
	// useEffect(() => {
	// 	if (id) {
	// 		const fetchData1 = async () => {
	// 			const token =
	// 				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MjA4NTEzLCJpZFRpbVZpZWMzNjUiOjExNzgzODQsImlkUUxDIjoxNzAzODAsImlkUmFvTmhhbmgzNjUiOjAsImVtYWlsIjoiIiwicGhvbmVUSyI6IjA4Njk1MTY5NzgiLCJjcmVhdGVkQXQiOjE2ODQyMjc1NDcsInR5cGUiOjB9LCJpYXQiOjE2OTM0NDYyNTAsImV4cCI6MTY5MzUzMjY1MH0.3UwrRDW3F-TQbYecgwYuedNaTLepj4kInZDb_UL5dQA'
	// 			try {
	// 				const response = await axios.post(
	// 					'http://210.245.108.202:3001/api/timviec/new/listComment',
	// 					{ new_id: 860696 },
	// 					{
	// 						headers: {
	// 							'Content-Type': 'application/json',
	// 							Authorization: `Bearer ${token}`,
	// 						},
	// 					}
	// 				)
	// 				setApiDataID(response?.data?.data?.arr_comments || [])
	// 				setLoading(false)
	// 			} catch (error) {
	// 				console.error(error)
	// 				setLoading(false)
	// 			}
	// 		}
	// 		fetchData1()
	// 	}
	// }, [id])
	const dispatch = useDispatch()
	const listIconStatus = [
		{ id: 1, img: '/images/img_comment/Ic_1.png', alt: 'Thích' },
		{ id: 2, img: '/images/img_comment/Ic_2.png', alt: 'Yêu thích' },
		{ id: 3, img: '/images/img_comment/Ic_3.png', alt: 'Wow' },
		{ id: 4, img: '/images/img_comment/Ic_4.png', alt: 'Thương thương' },
		{ id: 5, img: '/images/img_comment/Ic_5.png', alt: 'Phẫn nộ' },
		{ id: 6, img: '/images/img_comment/Ic_6.png', alt: 'Buồn' },
		{ id: 7, img: '/images/img_comment/Ic_7.png', alt: 'Haha' },
	]

	const [hoveredItemId, setHoveredItemId] = useState<number | null>(null)
	const [hoveredItemIdBottom, setHoveredItemIdBottom] = useState<number | null>(null)
	const [checkClickLike, setCheckClickLike] = useState<any>(false)
	// Lưu id của item được chọn - Xử lý phần thả cảm xúc của bài tin đăng tuyển
	const [stateIconState, setStateIconState] = useState<any>(null)
	const [status, setStatus] = useState<any>(null)
	const handleChooseIconStatus = (itemId: any, cateId: any) => {
		const foundItem = listIconStatus.find((item) => item.id === itemId)
		setStatus(foundItem)
		if (stateIconState !== cateId) {
			setStateIconState(cateId)
		}
	}
	const handleLike = (obj: any) => {
		if (false) {
			dispatch(openModal())
		} else {
			if (status == null) {
				const foundItem = listIconStatus.find((item) => item.id === 1)
				setStatus(foundItem)
			} else {
				setStatus(null)
			}
		}
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
	// Lưu trữ danh sách total của các loại cảm xúc
	const listTotalFeel = [
		{
			id: 1,
			total: 12,
			title: 'Thích',
		},
		{
			id: 2,
			total: 4,
			title: 'Thích',
		},
		{
			id: 3,
			total: 12,
			title: 'Thích',
		},
		{
			id: 1,
			total: 12,
			title: 'Thích',
		},
		{
			id: 1,
			total: 12,
			title: 'Thích',
		},
		{
			id: 1,
			total: 12,
			title: 'Thích',
		},
		{
			id: 1,
			total: 12,
			title: 'Thích',
		},
		{
			id: 1,
			total: 12,
			title: 'Thích',
		},
	]
	const dataCha = [
		{ id: 1, cm_sender_name: 'Test Cha nè', cm_comment: ' Comment dạo cha 1' },
		{ id: 1, cm_sender_name: 'Hoàng', cm_comment: ' Comment dạo 2' },
		{ id: 1, cm_sender_name: 'Hoàng nè', cm_comment: ' Comment dạo 3' },
	]
	const data = [
		{ id: 1, cm_sender_name: 'Test', cm_comment: ' Comment dạo 1' },
		{ id: 1, cm_sender_name: 'Hoàng 1', cm_comment: ' Comment dạo 2' },
		{ id: 1, cm_sender_name: 'Hoàng nè 3', cm_comment: ' Comment dạo 3' },
	]
	return (
		<div className={`${styles.box_comment_chat} ${styles.not_login}`}>
			<div style={{ clear: 'both' }} />
			<div className={`${styles.box_link_comment} ${styles.box_cm_vl}`}>
				<div className={styles.box_cm_body}>
					<div className={styles.cm_like}>
						<div className={styles.frame_cm_like}>
							<div className={styles.box_items_like_ic}>
								<span className={styles.cm_like_ic}>
									<Image
										height={20}
										width={20}
										className={`${styles.item_like_ic} ${styles.show_vip} ${styles.ic1}`}
										src="/images/img_comment/Ic_1.png"
										alt="Thích"
									/>
								</span>
								{listIconStatus.map((icon, index) => {
									return (
										<span className={styles.cm_like_ic} key={index}>
											<Image
												height={20}
												width={20}
												className={`${styles.item_like_ic} `}
												src={icon.img}
												alt={icon.alt}
												style={{
													display:
														status &&
														status.id === icon.id &&
														status.img !== '/images/img_comment/Ic_1.png'
															? 'block'
															: 'none',
												}}
											/>
										</span>
									)
								})}
							</div>
							<span className={styles.count_ic} data-like={11}>
								{status ? 'Pa Link và ' : ''}10 người khác
							</span>
						</div>
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
							onMouseEnter={() => setHoveredItemId(id)}
							onMouseLeave={() => setHoveredItemId(null)}
						>
							<span
								className={styles.like_event}
								onClick={() => {
									handleLike(status)
								}}
							>
								{status ? (
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
							{hoveredItemId === id && (
								<div className={styles.show_ic}>
									{listIconStatus.map((icon, index) => {
										return (
											<span
												className={styles.cm_like_ic}
												key={index}
												onClick={() => {
													handleChooseIconStatus(icon.id, id)
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
							<span
								className={styles.comment_event}
								onClick={() => {
									console.log(id)
								}}
							>
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
									toggleIdItemShare(id)
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
									modalShare && stateItemShare !== null && stateItemShare === id
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
									<Image height={24} width={24} src="/images/img_comment/sh_ic5.png" alt="Khác" />
									Khác
								</div>
							</div>
							<div
								className={
									stateItemShare !== null && stateItemShare === id && modalSocial
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
									<Image height={24} width={24} src="/images/img_comment/iic_t.png" alt="Twitter" />
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
						<Input_reply />
					</div>
					<div className={styles.cm_list}>
						<div className={styles.box_cm_list}>
							{apiDataID?.map((item, index) => {
								const hasReplyArray = item?.arr_reply.length > 0 && Array.isArray(item?.arr_reply)
								const isLastItem = index === apiDataID.length - 1
								return (
									<Content_Component
										key={index}
										dataCha={item}
										containerClassName={hasReplyArray ? styles.cm_has_reply : ''}
									>
										{hasReplyArray && (
											<>
												{item?.arr_reply.map((item_rep: any, index_rep: any) => (
													<Item_comment data={item_rep} key={index_rep}></Item_comment>
												))}
												{isLastItem && (
													<>
														<Item_comment
															data={item?.arr_reply[item?.arr_reply.length - 1]}
															key="last-item"
														>
															<span className={styles.line_reply1}></span>
														</Item_comment>
													</>
												)}
											</>
										)}
									</Content_Component>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Box_comment
