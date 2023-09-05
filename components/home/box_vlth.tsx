import Image from 'next/image'
import React from 'react'
import styles from '@styles/home/box_vlth.module.scss'
import Link from 'next/link'
import { calculateTimeDifference, unixTimestampToDateString } from '@/utils/convert'
import { ICity, IJob } from '@/utils/interface'
import { listCitys } from '@/utils/constants'
type Props = {
	jobList: IJob[]
}
const Box_vlth = ({ jobList }: Props) => {
	return (
		<div className={styles.main_box_vieclam1}>
			<div className={styles.slide_hd}>
				{jobList?.map((job: IJob, index: number) => (
					<div key={index} className={`${styles.item_vl} ${styles.item_home_th}`}>
						<div className={styles.in_vl}>
							<div className={styles.img_item_vl}>
								<Link
									href={`/${job?.new_alias}-p123.html`}
									className={styles.logo_user_th}
									title={job?.new_title}
								>
									<Image
										height={70}
										width={70}
										src="/images/before_login/user_chat_off.png"
										className={`${styles.tia_set} ${styles.no_logo_chat} ${styles.lazyloaded}`}
										alt="user_chat_off"
									/>
									<span className={styles.box_time_off}>
										{calculateTimeDifference(job.usc_time_login)}
									</span>
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
										href={`/${job.new_alias}-p123.html`}
										title={job.new_title}
									>
										{job.new_title}
									</Link>
								</h3>
								<Link
									className={styles.name_com}
									href={`/${job.usc_alias}-co${job.new_id}`}
									title={job.usc_company}
								>
									{job.usc_company}
								</Link>
								<p className={styles.job_local}>
									{job.new_city[0] === 0
										? 'Toàn quốc'
										: job.new_city
												.map((cityId, index) => {
													const city = listCitys.find((item:any) => item.cit_id === cityId)
													return city ? city.cit_name : null
												})
												.filter(Boolean)
												.join(', ')}
								</p>
								<p className={styles.job_chat} data-id={job.new_id} id-chat={job.chat365_id}>
									Chat
								</p>
								<p className={styles.job_time}>{unixTimestampToDateString(job.new_han_nop)}</p>
								<p className={styles.job_money} title={`${job.nm_max_value}`}>
									{job.nm_min_value / 1000000 == 0
										? 'Thỏa thuận'
										: `${job.nm_min_value / 1000000}${
												job.nm_max_value / 1000000 == 0
													? ''
													: job.nm_max_value < 1000
													? -job.nm_max_value
													: -job.nm_max_value / 1000000
										  } triệu`}
								</p>
								<Link href={`/${job.new_alias}-p123.html`} className={styles.job_history}>
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
