import styles from "@/styles/common/banner_details.module.scss"
import Image from 'next/image'
import React from 'react'
import Banner_QR from './banner_QR'
import Box_search from './box_search'
import Header from './header'
import Box_search_details from "./box_search_detail"
const New_banner_detail = () => {
	return (
		<div>
			<div className={styles.new_banner}>
				<Header></Header>
				<div
					className={`${styles.box_search} ${styles.searchindex} ${styles.searchindex_th} `}
					id={styles.box_search_index}
				>
					<div className={styles.main_search}>
						<Box_search_details />
					</div>

					<div className={styles.btn_dow}>
						<a href="#dow_here">
							<Image
								width={19}
								height={19}
								src={'/images/before_login/icn_dow.png'}
								alt="xem thêm"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default New_banner_detail
