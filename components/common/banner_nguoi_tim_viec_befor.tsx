import styles from '@/styles/common/banner_details_befor.module.scss'
import Image from 'next/image'
import React from 'react'
import Header from './header'
import Link from 'next/link'
import Banner_QR_Details from './banner_QR_details'
import Box_search_nguoi_tim_viec from './box_search_nguoi_tim_viec'
type Props = {
	isLogin: boolean
}
const New_banner_nguoi_tim_viec_befor = ({ isLogin }: Props) => {
	return (
		<div>
			<div className={styles.new_banner}>
				<Header isLogin={isLogin}></Header>
				<div
					className={`${styles.box_search} ${styles.searchindex} ${styles.searchindex_th} `}
					id={styles.box_search_index}
				>
					<div className={styles.main_search} >
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
					<Banner_QR_Details />
				</div>
			</div>
		</div>
	)
}

export default New_banner_nguoi_tim_viec_befor
