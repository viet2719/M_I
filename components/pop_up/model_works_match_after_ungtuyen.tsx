import React, { useEffect, useState } from 'react'
import styles from '@/components/details/details.module.css'
import Link from 'next/link'
import Image from 'next/image'
export interface IWorks {
	src: string
	name_work: string
	name_com: string
	address: string
	time: string
	monney: string
}
type Props = {
	showWorkMatch: boolean
	setShowWorkMatch: (value: boolean) => void
}

const Model_works_match_after_ungtuyen = ({ showWorkMatch, setShowWorkMatch }: Props) => {
	const [listWorksMatch, setListWorksMatch] = useState<IWorks[]>()
	// Nộp hồ sơ
	const handleSendHs = () => {
		alert('Nộp hồ sơ thành công')
		setShowWorkMatch(false)
	}
	useEffect(() => {
		let arr: IWorks[] = []
		for (let i = 1; i <= 5; i++) {
			arr.push({
				src: 'https://timviec365.vn/pictures/2023/06/21/tkv1687338431.jpg',
				name_work: `NHÂN VIÊN KINH DOANH` + ' ' + i,
				name_com: 'CÔNG TY CỔ PHẦN SX TM DV BAO BÌ NHỰA TRUNG SƠN',
				address: 'HỒ CHÍ MINH',
				time: '25/01/2000',
				monney: '7-10',
			})
		}
		setListWorksMatch(arr)
	}, [])
	return (
		<div>
			{showWorkMatch && (
				<div className={styles.overlay_nhs1}>
					<div className={styles.overlay_nhs} style={{ width: 'block' }}>
						<div className={styles.wapper + styles.wapper_nhs}>
							<div className={styles.auth_form + styles.form_vltt}>
								<div
									className={styles.nhs_header}
									style={{ display: 'flex', justifyContent: 'space-between' }}
								>
									<p>
										<Image
											width={23}
											height={24}
											className={styles.nhs_bag}
											src={'	https://timviec365.vn/images/loc/bag.png'}
											alt={''}
										/>
										<p className={styles.nhs_title_2}>Timviec365.vn Thông báo</p>
									</p>

									<Image
										onClick={() => setShowWorkMatch(false)}
										width={15}
										height={15}
										style={{ cursor: 'pointer' }}
										className={styles.close_pop_login}
										src="/images/close_while.png"
										alt="close"
									/>
								</div>
								<div className={styles.nhs_main_2}>
									<div className={styles.gy_tit}>
										<p className={styles.gy_title} style={{ fontSize: 16 }}>
											<Image width={19} height={19} src={'/images/check_nhs.png'} alt=""></Image>{' '}
											<span style={{ color: '#3BB54A' }}>Nộp hồ sơ thành công </span>
											<span style={{ color: '#307df1' }}>AI365</span> gợi ý cho bạn một số việc làm
											tương tự
										</p>
										<p>
											Chúng tôi đã lọc ra danh sách công việc phù hợp với những tiêu chí của bạn
										</p>

										<p style={{ color: '#FD1616' }}>
											Click vào từng việc làm để xem thêm thông tin chi tiết !!
										</p>
									</div>
									<div className={`${styles.item_cate} ${styles.item_cate_nhs}`}>
										{listWorksMatch?.map((item: IWorks, index: number) => {
											return (
												<div key={index}>
													<div className={styles['input-checkbox']}>
														<input
															defaultChecked={true}
															type="checkbox"
															className={styles.check_vl}
															name="fieldset"
														/>
														<label htmlFor="checkbox2-864135" />
													</div>
													<div className={styles.img_cate}>
														<Image
															width={120}
															height={80}
															src={item.src}
															alt="CÔNG TY CỔ PHẦN SX TM DV BAO BÌ NHỰA TRUNG SƠN"
														/>
													</div>
													<div className={styles.center_cate}>
														<div className={styles.center_cate_l}>
															<p>
																<Link
																	href="/nhan-vien-kinh-doanh-p864135.html"
																	title="NHÂN VIÊN KINH DOANH"
																	target="_blank"
																	className={styles.title_cate}
																>
																	{item.name_work}
																</Link>
															</p>
															<p>
																<Link
																	href="/cong-ty-co-phan-sx-tm-dv-bao-bi-nhua-trung-son-co243041"
																	rel="nofollow"
																	title="CÔNG TY CỔ PHẦN SX TM DV BAO BÌ NHỰA TRUNG SƠN"
																>
																	{item.name_com}
																</Link>
															</p>
															<p style={{ color: '#6F6F6F' }}>Hạn nộp: 05/09/2023</p>
															<p>
																<Image
																	width={16}
																	height={16}
																	src={'/images/location.svg'}
																	alt=""
																></Image>
																&nbsp; <span className="cate_dd">{item.address}</span>&nbsp;
																<Image
																	width={16}
																	height={16}
																	src={'/images/dola.svg'}
																	alt=""
																></Image>
																&nbsp; <span className="cate_ml">{item.monney} triệu</span>
															</p>
														</div>
													</div>
												</div>
											)
										})}
									</div>
								</div>
								<div className={`${styles.pop_footer}`}>
									<div className={`${styles.pop_tf}`}>
										<p>
											Click <Image width={16} height={16} alt="" src="/images/tick_2.png" /> để bỏ
											chọn công việc bạn không mong muốn
										</p>
										<p>
											Bạn muốn ứng tuyển{' '}
											<span style={{ color: '#FF490F' }} className={`${styles.soluongcv}`}>
												5
											</span>{' '}
											vị trí ở trên
										</p>
									</div>
									<span onClick={() => handleSendHs()} className={`${styles.btn_ungtuyen_nvt}`}>
										Nộp hồ sơ
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
export default Model_works_match_after_ungtuyen
