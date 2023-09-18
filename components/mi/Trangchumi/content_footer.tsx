'use client'
import React, { lazy, useState } from 'react'
import styles from '@/styles/mbti/introduce.module.scss'
import Image from 'next/image'
import { data } from './footerData'

interface PersonalityData {
	id: string
	imgSrc4: string
	kind_of_intelligence: string
	overview: string
	children_content: string
}
export default function Content_footer() {
	const [openItemId, setOpenItemId] = useState<string | null>(null)

	const toggleOpenItem = (id: string) => {
		setOpenItemId(openItemId === id ? null : id)
	}

	return (
		<div className={styles.mi}>
			<p className={styles.labelmi}>9 Loại trí thông minh</p>
			<div className={styles.gridmi}>
				{data.map((item, index) => (
					<div key={index} className={styles.footer_mi}>
						<div
							key={index}
							className={styles.grid_contentMI}
							onClick={() => toggleOpenItem(item.id)}
						>
							<div className={styles.content__contentmi}>
								<div className={styles.grid_title}>{item.kind_of_intelligence}</div>
								<div className={styles.grid_content_sub}>
									<div className={styles.text}>{item.overview}</div>
								</div>
							</div>
							<div className={styles.grid_imageMI}>
								<Image width={350} height={102} alt="" src={item.imgSrc4} />
							</div>
						</div>
						{openItemId === item.id && (
							<div className={` ${styles.children_content}   `}>{item.children_content}</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
