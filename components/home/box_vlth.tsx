import Image from 'next/image'
import React from 'react'
import styles from '@styles/home/box_vlth.module.scss'
import Link from 'next/link'

const Box_vlth = ({ jobList }: any) => {
	return (
		<div className={styles.main_box_vieclam1}>
			<div className={styles.slide_hd}>
				{jobList.map((job: any, index: any) => (
					<div key={index} className={`${styles.item_vl} ${styles.item_home_th}`}>
						<div className={styles.in_vl}>
							<div className={styles.img_item_vl}>
								<Link
									href={`/[slug]-p[id].html?slug=${job.link}&id=123`}
									as={`/${job.link}-p123.html`}
									className={styles.logo_user_th}
									title="[tuyen dung] nhan vien kinh doan"
								>
									<Image
										height={70}
										width={70}
										src="/images/before_login/user_chat_off.png"
										className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
										alt="user_chat_off"
									/>
									<span className={styles.box_time_off}>1 ngay</span>
								</Link>
								<div className={styles.box_vote_new}>
									<Image
										className="icon_vote_new"
										width={13}
										height={13}
										src="/images/before_login/icon_star_gray.svg"
										alt="star grey"
									/>
									<Image
										className="icon_vote_new"
										width={13}
										height={13}
										src="/images/before_login/icon_star_gray.svg"
										alt="star grey"
									/>
									<Image
										className="icon_vote_new"
										width={13}
										height={13}
										src="/images/before_login/icon_star_gray.svg"
										alt="star grey"
									/>
									<Image
										className="icon_vote_new"
										width={13}
										height={13}
										src="/images/before_login/icon_star_gray.svg"
										alt="star grey"
									/>
									<Image
										className="icon_vote_new"
										width={13}
										height={13}
										src="/images/before_login/icon_star_gray.svg"
										alt="star grey"
									/>
								</div>
								<Image
									width={28}
									height={28}
									src="/images/before_login/icon_tiaset.svg"
									className={styles.icon_tiaset_new}
									alt="icon_tiaset_new"
								/>
							</div>
							<div className={styles.right_item_vl}>
								<h3>
									<Link
										className={styles.tit_vip}
										href={`/[slug]-p[id].html?slug=${job.link}&id=123`}
										as={`/${job.link}-p123.html`}
										title={job.title}
									>
										{job.title}
									</Link>
								</h3>
								<Link
									className={styles.name_com}
									href={`/[slug]-p[id].html?slug=${job.link}&id=123`}
									as={`/${job.link}-p123.html`}
									title={job.companyName}
								>
									{job.companyName}
								</Link>
								<p className={styles.job_local}>{job.location}</p>
								<p className={styles.job_chat} data-id={job.id} id-chat={job.chatId}>
									Chat
								</p>
								<p className={styles.job_time}>{job.date}</p>
								<p className={styles.job_money} title={job.salary}>
									{job.salary}
								</p>
								<Link
									href={`/[slug]-p[id].html?slug=${job.link}&id=123`}
									as={`/${job.link}-p123.html`}
									className={styles.job_history}
								>
									<Image
										width={16}
										height={16}
										src="/images/before_login/icon_history_home.svg"
										alt="icon lịch sử"
									/>
									Lịch sử
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Box_vlth
