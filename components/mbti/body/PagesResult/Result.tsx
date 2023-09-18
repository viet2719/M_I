import React, { useEffect, useState } from 'react'
import styles from '@/styles/mbti/resuilt.module.scss'
import MBTI from './16MBTI'
import Link from 'next/link'
import Social_network from './Social_network'
import { resuilt } from './data'
import { Image } from 'antd'

import type { Metadata } from 'next'

interface PersonalityData {
	id: string
	imgSrc: string
	imgSrc1: string
	imgSrc2: string
	imgSrc3: string
	imgSrc4: string
	imgSrc5: string
	personality_name: string
	link: string
	overview: string
	content_children2: string
	content_children3: string
	content_children4: string
	job1: string
	job2: string
	job3: string
	job4: string
	link1: string
	link2: string
	link3: string
	link4: string
}
export default function Resuilt() {
	const [selectedId, setSelectedId] = useState<string | null>(null)

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * resuilt.length)
		const randomPersonality = resuilt[randomIndex]
		setSelectedId(randomPersonality.id)
	}, [resuilt])
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
	return (
		<div>
			<section className={styles.section}>
				{/* ================================================================= */}
				{resuilt.map(
					(personality) =>
						personality.id === selectedId && (
							<div key={personality.id} className={styles.selectedPersonalityContent}>
								{resuilt.map(
									(personality) =>
										personality.id === selectedId && (
											<div key={personality.id}>
												<div className={`${styles.resuilt__header} header`}>
													<div className={styles.header}>
														<h4 className={styles.gr_character}>NHÓM TÍNH CÁCH CỦA BẠN LÀ</h4>

														<div>
															<div className={styles.gr}>
																<div style={{ display: 'block', position: 'relative', left: 87 }}>
																	<a href="#tongquan">
																		<p className={styles.tongquan}>Tổng quan</p>
																	</a>

																	<a href="#uudiem">
																		<p className={styles.uudiem}>Ưu điểm</p>
																	</a>
																</div>
																<div className="keotim">
																	<Image preview={false} src={'/images/mi/keotim.svg'} />
																</div>
																<div className="keoxanhla">
																	<Image preview={false} src={'/images/mi/keoxanhla.svg'} />
																</div>
																<div className={styles.img}>
																	<div>
																		<Image src={personality.imgSrc} preview={false} />
																	</div>
																</div>
																<div className="keodoxanh">
																	<Image preview={false} src={'/images/mi/keodoxanh.svg'} />
																</div>
																<div style={{ display: 'block', position: 'relative', right: 43 }}>
																	<a href="#nhuocdiem">
																		<p className={styles.nhuocdiem}>Nhược điểm</p>
																	</a>
																	<a href="#nganhnghe">
																		<p className={styles.nganhnghe}>Ngành nghề</p>
																	</a>{' '}
																</div>
															</div>
														</div>
														<Image
															className={styles.tongcon}
															alt=""
															src={personality.imgSrc4}
															preview={false}
														/>
														<h4 className={styles.personality_name}>
															{personality.personality_name}
														</h4>
													</div>
												</div>

												<div className={styles.suitable_job}>
													<div>
														<div className={styles.job_title}>
															Công việc phù hợp với&nbsp;{personality.link}
														</div>
														<div className={styles.job_tong}>
															<div className={styles.job_right}>
																<div className={styles.job_right_top}>
																	<div className={styles.job_right_top_link}>
																		<div>
																			<span className={styles.job_name_tong}>
																				{personality.job1}
																			</span>

																			<Link href={personality.link1}>
																				<p>Xem công việc</p>
																			</Link>
																		</div>
																	</div>
																</div>

																<div className={styles.job_right_bottom}>
																	<span className={`${styles.job_name_tong} `}>
																		{personality.job3}
																	</span>
																	<Link href={personality.link3}>
																		<p>Xem công việc</p>
																	</Link>
																</div>
															</div>
															<div>
																<Image
																	width={170}
																	alt="anh-loi"
																	src={'/images/mbti/ba.png'}
																	preview={false}
																/>
															</div>

															{/* left  */}
															<div className={styles.job_left}>
																<div className={styles.job_left_top}>
																	<span className={`${styles.job_name_tong} ${styles.job2}`}>
																		{personality.job2}
																	</span>
																	<Link href={personality.link2}>
																		<p>Xem công việc</p>
																	</Link>
																</div>

																<div className={styles.job_left_bottom}>
																	<span className={`${styles.job_name_tong} ${styles.job2}`}>
																		{personality.job4}
																	</span>
																	<Link href={personality.link4}>
																		<p>Xem công việc</p>
																	</Link>
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
																	<Image
																		alt="anh-loi"
																		src={'/images/mbti/contrai.svg'}
																		preview={false}
																	/>
																</div>
																<div className={styles.job_con_right_img}>
																	<Image
																		alt="anh-loi"
																		src={'/images/mbti/conphai.svg'}
																		preview={false}
																	/>
																</div>
															</div>
															<div>
																<div className={styles.job_con_link}>
																	<div className={styles.job_con_right}>
																		<div className={styles.job_con_right_top}>
																			<span
																				className={styles.job_name_con}
																				style={{ fontSize: 16 }}
																			>
																				{personality.job1}
																			</span>
																			<Link href={personality.link1}>
																				<p>Xem công việc</p>
																			</Link>
																		</div>
																		<div className={styles.job_con_right_bottom}>
																			<span
																				className={styles.job_name_con}
																				style={{ fontSize: 16 }}
																			>
																				{personality.job3}
																			</span>

																			<Link href={personality.link3}>
																				<p>Xem công việc</p>
																			</Link>
																		</div>
																	</div>
																	<div className={styles.job_con_left}>
																		<div className={styles.job_con_left_top}>
																			<span
																				className={styles.job_name_con}
																				style={{ fontSize: 16 }}
																			>
																				{personality.job2}
																			</span>
																			<Link href={personality.link2}>
																				<p>Xem công việc</p>
																			</Link>
																		</div>
																		<div className={styles.job_con_left_bottom}>
																			<span
																				className={styles.job_name_con}
																				style={{ fontSize: 16 }}
																			>
																				{personality.job4}
																			</span>
																			<Link href={personality.link4}>
																				<p>Xem công việc</p>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<main className={styles.main1}>
													<div className={styles.children1}>
														<span>
															<Link href="/mbti/quiz">Trắc nghiệm tính cách MBTI</Link> &nbsp;/
															&nbsp;Nhóm tính cách {personality.link}, tổng quan, nghề nghiệp phù
															hợp
														</span>
														<div id="tongquan" className={styles.overview}>
															<div className={styles.title__overview}>
																<h4>TỔNG QUAN</h4>
																<div className={styles.btn}>
																	<Link href={'/mbti/quiz'}>
																		<button className={styles.btn_restart}>
																			<Image alt="" preview={false} src="/images/mbti/pen.svg" />
																			Làm lại trắc nghiệm
																		</button>
																	</Link>
																	<Social_network />
																</div>
															</div>
															<p className={styles.content_children1}>{personality.overview}</p>
														</div>
													</div>
												</main>
												{/* Hiển thị các ưu điểm */}
												<main id="uudiem" className={styles.main2}>
													<div className={styles.children2}>
														<div className={styles.title__overview}>
															<h4>Ưu điểm của {personality.link}:</h4>
														</div>
														<div className={styles.content_children2}>
															<ul>
																{personality.content_children2
																	.split('.')
																	.map((item, index) => item && <li key={index}>{item.trim()}</li>)}
															</ul>
														</div>
													</div>
												</main>
												{/* Hiển thị các điểm yếu */}
												<main id="nhuocdiem" className={styles.main3}>
													<div className={styles.children3}>
														<div className={styles.title__overview}>
															<h4>Nhược điểm của {personality.link}:</h4>
														</div>
														<div className={styles.content_children3}>
															<ul>
																{personality.content_children3
																	.split('.')
																	.map((item, index) => item && <li key={index}>{item.trim()}</li>)}
															</ul>
														</div>
													</div>
												</main>
												{/* Hiển thị nghề nghiệp phù hợp */}

												<main id="nganhnghe" className={styles.main4}>
													<div className={styles.children4}>
														<Image preview={false} alt="" src={personality.imgSrc3} />
														<div className={styles.title__overview}>
															<h4>CÁC NGHÀNH NGHỀ PHÙ HỢP VỚI {personality.link}</h4>
														</div>
														<div className={styles.content_children4}>
															<ul>
																{personality.content_children4
																	.split('.')
																	.map((item, index) => item && <li key={index}>{item.trim()}</li>)}
															</ul>
														</div>
													</div>
												</main>
												<div>
													<MBTI />
												</div>
											</div>
										)
								)}
							</div>
						)
				)}
			</section>
		</div>
	)
}
