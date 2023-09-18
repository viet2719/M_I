import React from 'react'
import Link from 'next/link'
import { Image } from 'antd'
import styles from './result.module.scss'

export default function Job(): JSX.Element {
	return (
		<div>
			<div className={styles.job_title}>Công việc phù hợp với{}</div>
			<div className={styles.job_tong}>
				<div className={styles.job_right}>
					<div className={styles.job_right_top}>
						<div className={styles.job_right_top_link}>
							<div>
								<Link href={'/#'}>
									<span className={styles.job_name_tong}>Luật/Pháp lý</span>
									<p>Xem công việc</p>
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.job_right_top_img}>
						<Image alt="anh-loi" src={'/images/mbti/Vector 9.svg'} preview={false} />
					</div>
					<div className={styles.job_right_bottom}>
						<Link href={'/#'}>
							<span className={styles.job_name_tong}>Kế toán/Kiểm toán</span>
							<p>Xem công việc</p>
						</Link>
					</div>
					<div className={styles.job_right_bottom_img}>
						<Image alt="anh-loi" src={'/images/mbti/Vector 9.svg'} preview={false} />
					</div>
				</div>
				<div>
					<Image alt="anh-loi" src={'/images/mbti/balo.svg'} preview={false} />
				</div>

				{/* left  */}
				<div className={styles.job_left}>
					<div className={styles.job_left_top}>
						<Link href={'/#'}>
							<span className={styles.job_name_tong}>Tư vấn</span>
							<p>Xem công việc</p>
						</Link>
					</div>
					<div className={styles.job_left_top_img}>
						<Image alt="anh-loi" src={'/images/mbti/Vector 9.svg'} preview={false} />
					</div>
					<div className={styles.job_left_bottom}>
						<Link href={'/#'}>
							<span className={styles.job_name_tong}>Kỹ sư phần mềm </span>
							<p>Xem công việc</p>
						</Link>
					</div>
					<div className={styles.job_left_bottom_img}>
						<Image alt="anh-loi" src={'/images/mbti/Vector 9.svg'} preview={false} />
					</div>
				</div>
			</div>
			{/* job-con */}
			<div className={styles.job_con}>
				<div className={styles.job_con_img_center}>
					<Image alt="anh-con" src={'/images/mbti/balo.svg'} />
				</div>
				<div className={styles.job_img}>
					<div className={styles.job_con_left_img}>
						<Image alt="anh-loi" src={'/images/mbti/contrai.svg'} preview={false} />
					</div>
					<div className={styles.job_con_right_img}>
						<Image alt="anh-loi" src={'/images/mbti/conphai.svg'} preview={false} />
					</div>
				</div>
				<div>
					<div className={styles.job_con_link}>
						<div className={styles.job_con_right}>
							<div className={styles.job_con_right_top}>
								<Link href={'/#'}>
									<span className={styles.job_name_con} style={{ fontSize: 16 }}>
										Luật/Pháp lý
									</span>
									<p>Xem công việc</p>
								</Link>
							</div>
							<div className={styles.job_con_right_bottom}>
								<Link href={'/#'}>
									<span className={styles.job_name_con} style={{ fontSize: 16 }}>
										{' '}
										Tư vấn
									</span>
									<p>Xem công việc</p>
								</Link>
							</div>
						</div>
						<div className={styles.job_con_left}>
							<div className={styles.job_con_left_top}>
								<Link href={'/#'}>
									<span className={styles.job_name_con} style={{ fontSize: 16 }}>
										Kế toán/Kiểm toán
									</span>
									<p>Xem công việc</p>
								</Link>
							</div>
							<div className={styles.job_con_left_bottom}>
								<Link href={'/#'}>
									<span className={styles.job_name_con} style={{ fontSize: 16 }}>
										Kĩ sư phần mềm
									</span>
									<p>Xem công việc</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
