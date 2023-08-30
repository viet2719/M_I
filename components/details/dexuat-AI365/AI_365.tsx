import React, { useEffect, useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Link from 'next/link'
import { IWorks } from '@/components/pop_up/model_works_match_after_ungtuyen'
import Image from 'next/image'

type Props = {}

const AI_365 = (props: Props) => {
	const [listSameJob, setListSameJob] = useState<IWorks[]>()
	useEffect(() => {
		let arr: IWorks[] = []
		for (let i = 1; i <= 5; i++) {
			arr.push({
				src: 'https://timviec365.vn/images/no-image.png',
				name_work: `NHÂN VIÊN KINH DOANH` + ' ' + i,
				name_com: 'CÔNG TY CỔ PHẦN SX TM DV BAO BÌ NHỰA TRUNG SƠN',
				address: 'HỒ CHÍ MINH',
				time: '25/01/2000',
				monney: '14.000.000',
			})
		}
		setListSameJob(arr)
	}, [])
	return (
		<div className={`${styles.title_all} ${styles.box_vltt} ${styles.active}`} id="title_all">
			<div className={`${styles.option}`}>
				<h3 className={`${styles.tit_bangtin}`}>VIỆC LÀM ĐỀ XUẤT BỞI AI365</h3>
			</div>
			<div className={`${styles.list_same_job}`}>
				{listSameJob?.map((item: IWorks, index: number) => {
					return (
						<div key={index} className={`${styles.same_job}`}>
							<div className={`${styles.box_img_same}`}>
								<Link
									className={`${styles.logo_user_th}`}
									href="/nhan-vien-ky-thuat-san-pham-p850760.html"
								>
									<Image
									width={70}
									height={70}
										className={`${styles.ava_com_same_job} ${styles.lazyloaded}`}
										src={item.src}
										data-src="https://timviec365.vn/images/no-image.png"
										alt="Công Ty Cổ Phần Hợp Tác Quốc Tế Japan Link"
									/>
									<span className={`${styles.box_time_off}`}>2 giờ</span>{' '}
								</Link>
								<div className={`${styles.box_vote_new}`}>
									<Image
									width={13} height={13}
										className={`${styles.icon_vote_new}`}
										src="/images/icon_star_gray.svg"
										alt="star grey"
									/>
										<Image
									width={13} height={13}
										className={`${styles.icon_vote_new}`}
										src="/images/icon_star_gray.svg"
										alt="star grey"
									/>
									<Image
									width={13} height={13}
										className={`${styles.icon_vote_new}`}
										src="/images/icon_star_gray.svg"
										alt="star grey"
									/>
										<Image
									width={13} height={13}
										className={`${styles.icon_vote_new}`}
										src="/images/icon_star_gray.svg"
										alt="star grey"
									/>
										<Image
									width={13} height={13}
										className={`${styles.icon_vote_new}`}
										src="/images/icon_star_gray.svg"
										alt="star grey"
									/>
								</div>
							</div>
							<div className={`${styles.info_same_job}`}>
								<div className={`${styles.job}`}>
									<Link
										className={`${styles.name_job}`}
										href="/nhan-vien-ky-thuat-san-pham-p850760.html"
									>
									{item.name_work}
									</Link>
								</div>
								<Link
									className={`${styles.name}`}
									href="/cong-ty-co-phan-hop-tac-quoc-te-japan-link-co229660"
								>
									{item.name_com}
								</Link>
								<div className={`${styles.detail_info}`}>
									<p className={`${styles.detail_info_l}`}>
										<Image
										width={16}
										height={16}
											src="/images/calendar.svg"
											alt=""
											style={{ width: 16 }}
										/>
										<span className={`${styles.mb_hidden}`}>Hạn nộp:</span>
										<span> 31/12/2024</span>
									</p>
									<p className={`${styles.detail_info_l}`}>
										<Image
										width={16}
										height={16}
											src="/images/location.svg"
											alt=""
											style={{ width: 16 }}
										/>
										<span>{item.address}</span>
									</p>
									<p className={`${styles.detail_info_r} ${styles.openApp}`} id-chat={30825}>
										<Image
										width={16}
										height={16}
											src="/images/icon_chat.svg"
											alt=""
											style={{ width: 16 }}
										/>
										<span>Chat</span>
									</p>
									<p className={`${styles.detail_info_all}`}>
										<Image
										width={16}
										height={16}
											src="/images/dola.svg"
											alt=""
											style={{ width: 16 }}
										/>
										<span className={`${styles.purple}`}>Đến {item.monney} </span>
									</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default AI_365
