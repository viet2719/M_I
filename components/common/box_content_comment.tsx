import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import styles from '@styles/common/box_content_comment.module.scss'
import Item_comment from './item_comment'
import Input_reply from './input_reply'

const Content_Component = ({ children, id, dataCha, containerClassName }: any) => {
	const [hoveredItemIdBottom, setHoveredItemIdBottom] = useState<number | null>(null)
	const listIconStatus = [
		{ id: 1, img: '/images/img_comment/Ic_1.png', alt: 'Thích', color: 'blue' },
		{ id: 2, img: '/images/img_comment/Ic_2.png', alt: 'Yêu thích', color: 'red' },
		{ id: 3, img: '/images/img_comment/Ic_3.png', alt: 'Wow', color: 'orange' },
		{ id: 4, img: '/images/img_comment/Ic_4.png', alt: 'Thương thương', color: 'orange' },
		{ id: 5, img: '/images/img_comment/Ic_5.png', alt: 'Phẫn nộ', color: 'orange' },
		{ id: 6, img: '/images/img_comment/Ic_6.png', alt: 'Buồn', color: 'orange' },
		{ id: 7, img: '/images/img_comment/Ic_7.png', alt: 'Haha', color: 'orange' },
	]
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
		if (status == null) {
			const foundItem = listIconStatus.find((item) => item.id === 1)
			setStatus(foundItem)
		} else {
			setStatus(null)
		}
	}
	// Id reply cmt parent
	const [idReplyCmtParent, setIdReplyCmtParent] = useState<any>()

	return (
		<div className={`${styles.cm_comment}  ${containerClassName}`}>
			<div className={`${styles.cm_content} ${styles.cm_7294}`}>
				<Image
					height={48}
					width={48}
					className={styles.ava_cm}
					src="/images/user_no.png"
					alt={dataCha?.cm_sender_name}
				/>
				<div className={`${styles.cm_box} ${styles.frame_cm_box}`}>
					<div className={styles.cm_cm_ct}>
						<p className={styles.cm_content_user}>{dataCha?.cm_sender_name}</p>
						<p className={styles.cm_nd}>{dataCha?.cm_comment}</p>
					</div>
					<div className={styles.cm_cm_ev}>
						<div
							className={styles.cm_list_ev}
							onMouseEnter={() => setHoveredItemIdBottom(id)}
							onMouseLeave={() => setHoveredItemIdBottom(null)}
						>
							<span
								className={styles.like_cm}
								onClick={() => {
									handleLike(status)
								}}
							>
								<span className={styles.like_cm_txt} style={{ color: status ? status.color : '' }}>
									{status ? status.alt : 'Thích'}
								</span>
								|
							</span>
							<span
								className={styles.reply_cm}
								onClick={() => {
									setIdReplyCmtParent(id)
								}}
							>
								Phản hồi |
							</span>
							<span className={styles.delete_cm}>
								Xóa <span className={styles.span_del}>|</span>
							</span>
							<span className={styles.time_cm}>Vừa xong</span>
							{hoveredItemIdBottom === id ? (
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
							) : (
								''
							)}
						</div>
						<span className={styles.cm_list_like}>
							<span className={`${styles.cm_count_like} ${styles.count_ic}`} />
							<span className={styles.box_items_like_ic}>
								<span className={`${styles.cm_like_ic}`}>
									{status ? (
										<Image
											height={20}
											width={20}
											className={`${styles.item_like_ic} ${styles.ic1}`}
											src={status.img}
											alt={status.alt}
										/>
									) : (
										<></>
									)}
								</span>
							</span>
						</span>
					</div>

					{children}
					{idReplyCmtParent && idReplyCmtParent === id && (
						<div className={styles.order_cm}>
							<Input_reply cm_new_id={dataCha?.cm_new_id} cm_parent_id={idReplyCmtParent} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Content_Component
