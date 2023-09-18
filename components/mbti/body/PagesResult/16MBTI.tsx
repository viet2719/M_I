import React from 'react'
import Image from 'next/image'
import styles from '@/styles/mbti/resuilt.module.scss'
import { data } from './data'
export default function MBTI() {
	return (
		<div>
			<main className={styles.main_footer}>
				<div className={styles.children_footer}>
					<div className={styles.title__overview}>
						<h4>16 loại hình tính cách MBTI</h4>
					</div>
					<div className={styles.grid_footer}>
						{data.map((item) => (
							<div key={item.id} className={styles.img_tit}>
								<div>
									<Image width={100} height={100} src={item.imgSrc} alt="" />
								</div>
								<p>{item.title}</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}
