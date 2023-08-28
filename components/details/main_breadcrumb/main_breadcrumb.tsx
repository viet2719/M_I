import React from 'react'
import styles from './style.main_breadcrumb.module.css'
import Link from 'next/link'
type Props = {}

const Main_breadcrumb = (props: Props) => {
	return (
		<div
			className={`${styles.main_timviec} ${styles.main_breadcrumb} ${styles.main_breadcrumb_new}`}
		>
			<div className={styles.container_timviec}>
				<div className={`${styles.div_bre} ${styles.div_bre_2}`}>
					<ul className={styles.breadcrumb} itemType="http://schema.org/BreadcrumbList">
						<li
							className={`${styles.first} ${styles.br_clr} ${styles.active}`}
							itemProp="itemListElement"
							itemType="http://schema.org/ListItem"
						>
							<Link href="https://timviec365.vn/" target="_blank" itemProp="item">
								<span itemProp="name">Trang chủ</span>
							</Link>
							<meta itemProp="position" content={'1'} />
						</li>
						<li
							itemProp="itemListElement"
							itemType="http://schema.org/ListItem"
							className={`${styles.br_clr} ${styles.active}`}
						>
							<Link
								href="https://timviec365.vn/viec-lam-nhan-vien-kinh-doanh-c9v0"
								target="_blank"
								itemProp="item"
							>
								<span itemProp="name">Việc làm Nhân viên kinh doanh</span>
							</Link>
							<meta itemProp="position" content={'2'} />
						</li>
						<li
							itemProp="itemListElement"
							itemType="http://schema.org/ListItem"
							className={`${styles.br_clr}`}
						>
							<Link href={'#'} itemProp="item">
								<span className={styles.namePage} itemProp="name">
									Nhân viên sale game online
								</span>
							</Link>
							<meta itemProp="position" content={'3'} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Main_breadcrumb
