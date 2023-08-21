import Image from 'next/image'
import React from 'react'
import styles from '@styles/home/box_vlhd_top.module.scss'

const Box_vlhd_top = ({ jobData }: any) => {
	return (
		<div>
			<div className={styles.slide_hd}>
				{jobData.map((job: any, index: any) => (
					<div className={`${styles.item_vl} ${styles.item_home_th}`} key={index}>
						<div className={styles.in_vl}>
							<div className={styles.img_item_vl}>
								<a href="" className={styles.logo_user_th} title="[tuyen dung] nhan vien kinh doan">
									<Image
										height={70}
										width={70}
										src="/images/before_login/user_chat_off.png"
										className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
										alt=""
									/>
									<span className={styles.box_time_off}>1 ngay</span>
								</a>
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
									alt=""
								/>
							</div>
							<div className={styles.right_item_vl}>
								<h3>
									<a className={styles.tit_vip} href="#" title={job.title}>
										{job.title}
									</a>
								</h3>
								<a className={styles.name_com} href="#" title={job.company}>
									{job.company}
								</a>
								<p className={styles.job_local}>{job.location}</p>
								<p className={styles.job_chat} data-id="243931" id-chat="1346583">
									Chat
								</p>
								<p className={styles.job_time}>{job.date}</p>
								<p className={styles.job_money} title={job.salary}>
									{job.salary}
								</p>
								<a href="/lich-su/danh-sach-tong-u243931t1" className={styles.job_history}>
									<Image
										width={16}
										height={16}
										src="/images/before_login/icon_history_home.svg"
										alt="icon lịch sử"
									/>
									Lịch sử
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Box_vlhd_top
