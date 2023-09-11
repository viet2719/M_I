import React from 'react'
import styles from '@/styles/mbti/introduce.module.scss'
import Content_body from './content_body'
import Content_footer from './content_footer'
import Ads from './Ads'
import Content_header from './content_header'
export default function introduce() {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.introduce}>
					<div className={styles.content}>
						<div className={styles.body}>
							<div className={styles.body__header}>
								<Content_header />
							</div>
							<div className={styles.content_body}>
								<Content_body />
							</div>
							<div className={styles.content_footer}>
								<Content_footer />
							</div>
						</div>
						<div className={styles.ads}>
							<Ads />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
