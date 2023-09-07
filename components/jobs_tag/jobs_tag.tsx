import React, { useState } from 'react'
import New_banner from '../common/new_banner'
import Link from 'next/link'
import styles from '@styles/jobs_tag/jobs_tag.module.scss'
import Chat_NTD from '../common/chat_NTD'
import Footer from '../common/footer'
import Box_bottom_cate from '../list_occupations/box_bottom_cate'

const Jobs_tag = () => {
	const listComp = [
		{ id: 0, comp: 'Chọn tất cả' },
		{ id: 1, comp: 'Phù hợp nhất' },
		{ id: 2, comp: 'Mới nhất' },
		{ id: 3, comp: 'Lương tốt nhất' },
	]
	const [compActive, setCompActive] = useState<any>(1)

	return (
		<div>
			<New_banner />
			<div className={styles.main_timviec}>
				<div className={styles.container_timviec}>
					<div className={`${styles.div_bre} ${styles.div_bre_2}`}>
						<ul className={styles.breadcrumb} itemScope itemType="http://schema.org/BreadcrumbList">
							<li className={styles.first}>
								<Link href="/" target="_blank" itemProp="item">
									<span itemProp="name">Trang chủ</span>
								</Link>
							</li>
							<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
								<Link href={'#'} itemProp="item">
									<span itemProp="name">Việc làm kế toán nội bộ</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.vl_left}>
						<div
							className={`${styles.right_cate} ${styles.nd_cate} ${styles.nd_caten} ${styles.nd_cate_new}`}
							id={styles.nd_cate}
						>
							<h1 className={styles.title_cate_list}>Tìm Việc Làm kế toán nội bộ</h1>
						</div>
					</div>
					<Chat_NTD classNameProps={true} propsElementSlugNganhNghe={true} />
					<Box_bottom_cate />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Jobs_tag
