import React from 'react'
import styles from '@styles/common/box_content_comment.module.scss'
import Image from 'next/image'

const Item_comment = ({ data, children }: any) => {
	return (
		<div className={`${styles.cm_content} ${styles.cm_8397} ${styles.cm_reply_box}`}>
			{children}
			<span className={styles.line_reply2} />
			<Image
				height={48}
				width={48}
				className={styles.ava_cm}
				src="/images/user_no.png"
				alt={data?.cm_ip}
			/>
			<div className={styles.cm_box}>
				<div className={styles.cm_cm_ct}>
					<p className={styles.cm_content_user}>{data?.cm_ip}</p>
					<p className={styles.cm_nd}>{data?.cm_comment}</p>
				</div>
				<div className={styles.cm_cm_ev}>
					<div className={styles.cm_list_ev}>
						<span className={styles.like_cm}>
							<span className={styles.like_cm_txt}>Thích</span> |
						</span>
						<span className={styles.reply_cm}>Phản hồi |</span>
						<span className={styles.delete_cm}>
							Xóa <span className={styles.span_del}>|</span>
						</span>
						<span className={styles.time_cm}>Vừa xong</span>
						<div className={styles.show_ic} style={{ display: 'none' }}>
							{/* Các biểu tượng ic tương ứng */}
						</div>
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
	)
}

export default Item_comment
