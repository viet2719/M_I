import React from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Image from 'next/image'

type Props = {
	name_comment: string
}

const Rep_comment = ({ name_comment }: Props) => {
	return (
		<div className={`${styles.cm_content} ${styles.cm_8143} ${styles.cm_reply_box}`} data-pr={8142}>
			<span className={`${styles.line_reply1}`} />
			<span className={`${styles.line_reply2}`} />
			<Image
				width={36}
				height={36}
				className={`${styles.ava_cm}`}
				src={'/images/638286918069380000_1404156.jpg'}
				alt="Nguyễn Quang Trường"
			/>
			<div className={`${styles.cm_box}`}>
				<div className={`${styles.cm_cm_ct}`}>
					<p className={`${styles.cm_content_user}`}>{name_comment}</p>
					<p className={`${styles.cm_nd}`}>e</p>
				</div>
				<div className={`${styles.cm_cm_ev}`}>
					<div className={`${styles.cm_list_ev}`}>
						<span className={`${styles.like_cm}`}>
							<span className={`${styles.like_cm_txt}`}>Thích</span> |
						</span>
						<span className={`${styles.reply_cm}`}>Phản hồi |</span>
						<span className={`${styles.time_cm}`}>2 ngày</span>

						<div>
							<span className={`${styles.cm_like_ic}`}>
								<img src="/images/img_comment/Ic_1.png" alt="icon1" />
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img src="/images/img_comment/Ic_2.png" alt="icon2" />
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img src="/images/img_comment/Ic_3.png" alt="icon3" />
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img src="/images/img_comment/Ic_4.png" alt="icon4" />
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img src="/images/img_comment/Ic_5.png" alt="icon5" />
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img src="/images/img_comment/Ic_6.png" alt="icon6" />
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img src="/images/img_comment/Ic_7.png" alt="icon7" />
							</span>
						</div>
					</div>
					<span className={styles.cm_list_like}>
						<span className={`${styles.cm_count_like} count_ic`} data-like={0}></span>
						<span className={styles.box_items_like_ic}>
							<span className={styles.cm_like_ic}>
								<img
									className="item_like_ic   ic1"
									src="/images/img_comment/Ic_1.png"
									alt="Thích"
								/>
							</span>
							<span className={styles.cm_like_ic}>
								<img
									className="item_like_ic   ic2"
									src="/images/img_comment/Ic_2.png"
									alt="Yêu thích"
								/>
							</span>
							<span className={styles.cm_like_ic}>
								<img className="item_like_ic   ic3" src="/images/img_comment/Ic_3.png" alt="Wow" />
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img
									className={`${styles.item_like_ic}   ${styles.ic4}`}
									src="/images/img_comment/Ic_4.png"
									alt="Thương thương"
								/>
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img
									className={`${styles.item_like_ic}   ${styles.ic5}`}
									src="/images/img_comment/Ic_5.png"
									alt="Phẫn nộ"
								/>
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img
									className={`${styles.item_like_ic}   ${styles.ic6}`}
									src="/images/img_comment/Ic_6.png"
									alt="Buồn"
								/>
							</span>
							<span className={`${styles.cm_like_ic}`}>
								<img
									className={`${styles.item_like_ic}   ${styles.ic7}`}
									src="/images/img_comment/Ic_7.png"
									alt="Ha ha"
								/>
							</span>
						</span>
					</span>
				</div>
			</div>
		</div>
	)
}
export default Rep_comment
