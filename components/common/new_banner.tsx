import styles from '@styles/common/new_banner.module.scss'
import Image from 'next/image'
import React from 'react'
import Banner_QR from './banner_QR'
import Box_search from './box_search'
import Header from './header'
import Link from 'next/link'

const New_banner = () => {
	return (
		<div>
			<div className={styles.new_banner}>
				<Header></Header>
				<div
					className={`${styles.box_search} ${styles.searchindex} ${styles.searchindex_th} `}
					id={styles.box_search_index}
				>
					<div className={styles.main_search}>
						<div className={styles.box_text_search}>
							<p className={styles.box_text}>
								CHAT LIỀN TAY
								<span className={styles.img_txt_s}>
									<Image
										src={'/images/before_login/mess_icon2.png'}
										width={44}
										height={44}
										alt="Chat"
									/>
								</span>
							</p>
							<span className={styles.txt_s}>VIỆC TỚI NGAY</span>{' '}
						</div>
						<div className={styles.logo_banner}>
							<h1 className={styles.title_search}>Tìm việc làm</h1>
						</div>
						<Box_search />
					</div>

					<div className={styles.btn_dow}>
						<Link href="#dow_here">
							<Image
								width={19}
								height={19}
								src={'/images/before_login/icn_dow.png'}
								alt="xem thêm"
							/>
						</Link>
					</div>
					<Banner_QR />
				</div>
				<div className={styles.tktk}></div>
			</div>
		</div>
	)
}

export default New_banner
