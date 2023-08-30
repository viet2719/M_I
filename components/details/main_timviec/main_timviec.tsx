import Footer from '@/components/common/footer'
import React from 'react'
import styles from './main_timviec.module.css'
import Link from 'next/link'
import Chi_tiet_td from '../chi_tiet_td/chi_tiet_td'
import Comment from '../comment/comment'
import AI_365 from '../dexuat-AI365/AI_365'
import All_content_post_sub from '../all_content_post_sub/all_content_post_sub'
import Ctn_all_new from '../ctn_all_new/ctn_all_new'
type Props = {
	show: boolean
	isLogin:boolean
}

const Main_timviec = ({ show,isLogin }: Props) => {
	return (
		<div className={`${styles.main_timviec} ${styles.m_detail_city}`}>
			<div className={`${styles.nd_chitiettd}`}>
				<div className={`${styles.chitiettd}`}>
					<div className={`${styles.all_content_post}`}>
						<div className={`${styles.all_content_post_main}`}>
							<Chi_tiet_td show={show} isLogin={isLogin}/>
							<Comment isLogin={isLogin}/>
							<div className={`${styles.banner_timviec}`}>
								<Link href="/cv-xin-viec" className={`${styles.cv_xinviec}`} target="blank">
									CV XIN VIỆC
									<div>
										<img src="https://timviec365.vn/images/detail/icon_go.svg" alt="icon cv" />
									</div>
								</Link>
							</div>
							<AI_365 />
						</div>
						<All_content_post_sub />
					</div>
					<Ctn_all_new />
				</div>
				<Footer />
			</div>
		</div>
	)
}
export default Main_timviec
