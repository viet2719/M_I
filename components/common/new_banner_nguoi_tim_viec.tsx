import styles from '@/styles/common/banner_details.module.scss'
import Image from 'next/image'
import React from 'react'
import HeaderAfterLogin from './header_after_login'
import Link from 'next/link'
import Box_search_nguoi_tim_viec from './box_search_nguoi_tim_viec'
const New_banner_nguoi_tim_viec = () => {
	return (
		<div>
			<div className={styles.new_banner}>
				<HeaderAfterLogin />
				<div
					className={`${styles.box_search} ${styles.searchindex} ${styles.searchindex_th} `}
					id={styles.box_search_index}
				>
					<div className={`${styles.main_search} ${styles.fix}`} >
					<Box_search_nguoi_tim_viec />
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
				</div>
			</div>
		</div>
	)
}

export default New_banner_nguoi_tim_viec
