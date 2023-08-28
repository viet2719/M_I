import React, { useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Rep_comment from './rep_comment'
import Image from 'next/image'
import { Icomment, Iicons } from './comment'

type Props = {
	listComment: Icomment[]
}

const Respones_comment = ({ listComment }: Props) => {
	const [showIcons, setshowIcons] = useState<boolean>(false)
	const [showBinhLuan, setShowBinhLuan] = useState<boolean>(true)
	const [showDanhGia, setShowDanhGia] = useState<boolean>(false)
	const [showIcon, setshowIcon] = useState<boolean>(false)
	const [showBox_share, setShowBox_share] = useState<boolean>(false)
	const [show_Box_Share_Mxh, setShow_Box_Share_Mxh] = useState<boolean>(false)
	const [icons_used, setIcons_used] = useState<Iicons[]>([])
	const [name_active, setName_active] = useState<string>('')
	const [name_comment, setName_comemnt] = useState<string>('')
	const [content_comment_demo, setcontent_comment_demo] = useState<string>('')
	const [content_comment, setcontent_comment] = useState<string>('')
	const [count_comment, setCount_comment] = useState<number>(0)
	const [totalIconsUsed, settotalIconsUsed] = useState<number>(0)
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
	const handleActionIcon = (icon: Iicons) => {
		setchangeIcon(icon?.img)
		setName_Icon(icon?.alt)
		setName_active('Nguyễn Quang Trường')
		settotalIconsUsed(totalIconsUsed + 1)
		// if (icon.id == 1) {
		// 	setcount1(count1 + 1)
		// }
		// if (icon.id == 2) {
		// 	setcount1(count2 + 1)
		// }
		// if (icon.id == 3) {
		// 	setcount3(count3 + 1)
		// }
		// if (icon.id == 4) {
		// 	setcount4(count4 + 1)
		// }
		// if (icon.id == 5) {
		// 	setcount5(count5 + 1)
		// }
		// if (icon.id == 6) {
		// 	setcount6(count6 + 1)
		// }
		// if (icon.id == 7) {
		// 	setcount7(count7 + 1)
		// }
		let isExis: any = icons_used.find((item: Iicons) => item.id === icon.id)
		if (!isExis) {
			icons_used.push(icon)
		}
	}
	return (
		<div>
			{listComment?.length > 0 &&
				listComment?.map((item: Icomment, index: number) => {
					return (
						<div className={`${styles.box_cm_list}`} key={index}>
							<div className={`${styles.cm_comment} ${styles.cm_has_reply}`}>
								<div className={`${styles.cm_content} ${styles.cm_8142}`}>
									<Image
										width={36}
										height={36}
										className={`${styles.ava_cm}`}
										src={'/images/638286918069380000_1404156.jpg'}
										alt="Nguyễn Quang Trường"
									/>
									<div className={`${styles.cm_box} ${styles.frame_cm_box}`}>
										<div className={`${styles.cm_cm_ct}`}>
											<p className={`${styles.cm_content_user}`}>
												<a
													target="_blank"
													rel="nofollow"
													href="https://chat365.timviec365.vn/chat-MTQ2MjM3MA=="
												>
													{item?.name}
												</a>
											</p>
											<p className={`${styles.cm_nd}`}>{item?.content}</p>
										</div>
										<div className={`${styles.cm_cm_ev}`}>
											<div className={`${styles.cm_list_ev}`}>
												<span
													className={`${styles.like_cm}`}
													onMouseOver={() => setshowIcons(true)}
													onMouseLeave={() => setshowIcons(false)}
												>
													<span className={`${styles.like_cm_txt}`}>Thích</span> |
												</span>
												<span className={`${styles.reply_cm}`}>Phản hồi |</span>
												<span
													className={`${styles.time_cm}`}
													title="Thứ bảy, 26 - Tháng 08, 2023 lúc 08:52"
												>
													now
												</span>
												{showIcons && (
													<div onMouseOver={() => setshowIcons(true)}>
														{listIconStatus?.map((icon, index) => {
															return (
																<span
																	onClick={() => handleActionIcon(icon)}
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
												<div style={{ display: 'flex', paddingRight: 10 }}> {totalIconsUsed}</div>
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
										</div>
										{/* <Rep_comment name_comment={name_comment} /> */}
									</div>
								</div>
							</div>
						</div>
					)
				})}
		</div>
	)
}
export default Respones_comment
