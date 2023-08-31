import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import styles from '@styles/common/box_content_comment.module.scss'
import Item_comment from './item_comment'

const Content_Component = ({ children, id, dataCha, containerClassName }: any) => {
	const [hoveredItemId, setHoveredItemId] = useState<number | null>(null)
	const [hoveredItemIdBottom, setHoveredItemIdBottom] = useState<number | null>(null)
	const listIconStatus = [
		{ id: 1, img: '/images/img_comment/Ic_1.png', alt: 'Thích' },
		{ id: 2, img: '/images/img_comment/Ic_2.png', alt: 'Yêu thích' },
		{ id: 3, img: '/images/img_comment/Ic_3.png', alt: 'Wow' },
		{ id: 4, img: '/images/img_comment/Ic_4.png', alt: 'Thương thương' },
		{ id: 5, img: '/images/img_comment/Ic_5.png', alt: 'Phẫn nộ' },
		{ id: 6, img: '/images/img_comment/Ic_6.png', alt: 'Buồn' },
		{ id: 7, img: '/images/img_comment/Ic_7.png', alt: 'Haha' },
	]

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
							<span className={styles.like_cm}>
								<span className={styles.like_cm_txt}>Thích</span> |
							</span>
							<span className={styles.reply_cm}>Phản hồi |</span>
							<span className={styles.delete_cm}>
								Xóa <span className={styles.span_del}>|</span>
							</span>
							<span className={styles.time_cm}>Vừa xong</span>
							{hoveredItemIdBottom === id ? (
								<div className={styles.show_ic}>
									{listIconStatus.map((icon, index) => {
										return (
											<span className={styles.cm_like_ic} key={index}>
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
					{children}
				</div>
			</div>
		</div>
	)
}

export default Content_Component
