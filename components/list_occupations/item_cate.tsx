import {
	calculateTimeDifference,
	convertToSlug,
	removeHtmlTags,
	unixTimestampToDateString,
} from '@/utils/convert'
import { listCitys, listNganhNghe } from '@/utils/constants'
import Model_ungtuyen_sendmail_NTD from '../pop_up/model_ungtuyen_sendmail_NTD'
import Model_works_match_after_ungtuyen from '../pop_up/model_works_match_after_ungtuyen'
import { ICity, IJob } from '@/utils/interface'
import styles from '@styles/list_occupations/item_cate.module.scss'
import { Button, Checkbox } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Box_comment from '../common/box_comment'
import Model_noti from '../pop_up/model_noti'
type Props = {
	listJobs: IJob[]
	name: string
	checkedBox: any
	handleChange: any
	checkboxStates: any
}
const List_cate = ({ listJobs, name, checkedBox, handleChange, checkboxStates }: Props) => {
	const dispatch = useDispatch()
	const islogin = true
	const iscv = true
	const [openCategory, setOpenCategory] = useState<any>(null)
	const toggleCategory = (cateId: any) => {
		if (openCategory === cateId) {
			setOpenCategory(null)
		} else {
			setOpenCategory(cateId)
		}
	}
	const [stateSeenAll, setStateSeenAll] = useState<any>(null)
	const toggleIdSeenAll = (id: any) => {
		if (stateSeenAll === id) {
			setStateSeenAll(null)
		} else {
			setStateSeenAll(id)
		}
	}
	// Lấy danh sách tin

	const [loading, setLoading] = useState<boolean>(true)
	const [selectedId, setSelectedId] = useState<any | null>(null)
	// useEffect(() => {
	// 	if (selectedId) {
	// 		const fetchData1 = async () => {
	// 			const token =
	// 				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MjA4NTEzLCJpZFRpbVZpZWMzNjUiOjExNzgzODQsImlkUUxDIjoxNzAzODAsImlkUmFvTmhhbmgzNjUiOjAsImVtYWlsIjoiIiwicGhvbmVUSyI6IjA4Njk1MTY5NzgiLCJjcmVhdGVkQXQiOjE2ODQyMjc1NDcsInR5cGUiOjB9LCJpYXQiOjE2OTM0NDYyNTAsImV4cCI6MTY5MzUzMjY1MH0.3UwrRDW3F-TQbYecgwYuedNaTLepj4kInZDb_UL5dQA'
	// 			try {
	// 				const response = await axios.post(
	// 					`${base_timviec365}/api/timviec/new/listComment`,
	// 					{ new_id: selectedId },
	// 					{
	// 						headers: {
	// 							'Content-Type': 'application/json',
	// 							Authorization: `Bearer ${token}`,
	// 						},
	// 					}
	// 				)
	// 				setlistJobsID(response?.data || [])
	// 				setLoading(false)
	// 			} catch (error) {
	// 				console.error(error)
	// 				setLoading(false)
	// 			}
	// 		}

	// 		fetchData1()
	// 	}
	// }, [selectedId])
	const handleItemClick = (id: any) => {
		setSelectedId(id)
	}
	const router = useRouter()
	const [showMailUngTuyen, setshowMailUngTuyen] = useState<boolean>(false)
	const [showWorkMatch, setShowWorkMatch] = useState<boolean>(false)
	const [ungTuyen, setungTuyen] = useState('Ứng tuyển')
	const [idUngTuyen, setIdUngTuyen] = useState<any>()
	const handleUngTuyen = (cate: any) => {
		if (idUngTuyen !== cate.new_id) {
			setIdUngTuyen(cate.new_id)
			setshowMailUngTuyen(true)
			setungTuyen('Đã ứng tuyển')
		}
	}
	return (
		<div className={styles.main_cate}>
			{/* Ấn nút ứng tuyển sau khi có CV */}
			<Model_ungtuyen_sendmail_NTD
				showMailUngTuyen={showMailUngTuyen}
				setshowMailUngTuyen={setshowMailUngTuyen}
				setShowWorkMatch={setShowWorkMatch}
			/>
			{/* Sau khi thoát model sendmail */}
			<Model_works_match_after_ungtuyen
				showWorkMatch={showWorkMatch}
				setShowWorkMatch={setShowWorkMatch}
			/>
			{listJobs?.length > 0 && (
				<ul>
					{listJobs?.map((cate?: IJob | any, index?: any) => {
						return (
							<div className={styles.item_cate} key={index}>
								{islogin && iscv && (
									<Checkbox
										checked={checkboxStates[index]} // Sử dụng trạng thái tương ứng
										onChange={(e: any) => handleChange(e, cate)}
										style={{ position: 'absolute' }}
										className="custom-checkbox"
									/>
								)}
								<div
									onClick={() => {
										handleItemClick(cate?.new_id)
									}}
								></div>
								<div
									style={{ paddingLeft: 8 }}
									className={`${styles.img_cate} ${styles.box_new_left}`}
								>
									<Link className={`${styles.logo_user_th}`} href={`#`} title={cate?.new_title}>
										<Image
											width={141}
											height={141}
											src="/images/before_login/user_chat_off.png"
											alt={cate?.usc_company}
										/>
										{(cate.new_badge == 1 || cate.usc_badge == 1) && (
											<Image
												width={28}
												height={28}
												src="/images/before_login/icon_tiaset.svg"
												className={styles.icon_tiaset_new}
												alt=""
											/>
										)}
										{cate.usc_star == 1 && (
											<Image
												width={28}
												height={28}
												src="/images/icon_anhsao.gif"
												className={styles.icon_tiaset_new}
												alt=""
											/>
										)}
										<span className={styles.box_time_off}>
											{calculateTimeDifference(cate?.usc_time_login)}
										</span>{' '}
									</Link>
									<Button
										onClick={() => handleUngTuyen(cate)}
										style={{ background: '#4C5BD4', color: '#fff', borderRadius: 50 }}
									>
										{idUngTuyen === cate.new_id ? ungTuyen : 'Ứng tuyển'}
									</Button>
									<div className={styles.box_vote_new}>
										<Image
											width={16}
											height={16}
											className={styles.icon_vote_new}
											src="/images/before_login/icon_star_gray.svg"
											alt="star grey"
										/>
										<Image
											width={16}
											height={16}
											className={styles.icon_vote_new}
											src="/images/before_login/icon_star_gray.svg"
											alt="star grey"
										/>
										<Image
											width={16}
											height={16}
											className={styles.icon_vote_new}
											src="/images/before_login/icon_star_gray.svg"
											alt="star grey"
										/>
										<Image
											width={16}
											height={16}
											className={styles.icon_vote_new}
											src="/images/before_login/icon_star_gray.svg"
											alt="star grey"
										/>
										<Image
											width={16}
											height={16}
											className={styles.icon_vote_new}
											src="/images/before_login/icon_star_gray.svg"
											alt="star grey"
										/>{' '}
									</div>
								</div>
								<div className={styles.center_cate}>
									<div className={`${styles.center_cate_l}`}>
										<h2 className={`${styles.box_mb} ${styles.box_new_left_mb}`}>
											<Link
												style={{ width: 70, overflow: 'unset' }}
												className={`${styles.logo_user_th} ${styles}`}
												href={`${cate.new_title}-p${cate.new_id}.html`}
												title="TUYỂN DỤNG TRƯỞNG NHÓM BÁN HÀNG"
											>
												<Image
													height={142}
													width={142}
													className={`${styles.tia_set} lazyload ${styles.img_center_cate_mb} ${styles.no_logo_chat}`}
													src="/images/load.gif"
													alt={cate?.usc_company}
												/>
												<span className={styles.box_time_off}>3 ngày</span>{' '}
												<Image
													height={33}
													width={33}
													className={styles.icon_tiaset_new}
													alt=""
													src="/images/before_login/icon_tiaset.svg"
												></Image>
											</Link>
											<Link
												style={{ color: '#4C5BD4' }}
												href={`/${cate?.new_alias}-p${cate?.new_id}.html`}
												title={cate?.new_title}
												className={`${styles.tag_th} ${styles.title_cate}`}
											>
												{cate?.new_title}
											</Link>
											<div className={styles.box_vote_new}>{/* Your icon_vote_new images */}</div>
										</h2>

										<div className="">
											<p className={styles.cpn_name}>
												<Link
													className={styles.tag_th}
													href={`/${
														cate.usc_alias ? cate.usc_alias : convertToSlug(cate?.usc_company)
													}-co${cate.new_id}`}
													title={cate.usc_company}
												>
													{cate?.usc_company}{' '}
												</Link>
											</p>
										</div>
										<div
											title="Tiền lương"
											className={`${styles.con_tooltip} ${styles.top} ${styles.tt_sm}`}
										>
											<p style={{ width: '100%' }}>
												<span className={styles.cate_ml}>
													{cate.nm_min_value / 1000000 == 0
														? 'Thỏa thuận'
														: `${cate.nm_min_value / 1000000}${
																cate.nm_max_value / 1000000 == 0
																	? ''
																	: cate.nm_max_value < 1000
																	? -cate.nm_max_value
																	: -cate.nm_max_value / 1000000
														  } triệu`}
												</span>
											</p>
											{/* <span className={styles.tooltip}>
										<span>Từ 7.000.000 VNĐ Đến 15.000.000 VNĐ</span>
									</span> */}
										</div>
										<div className={`${styles.con_tooltip} ${styles.top} ${styles.tt_sm}`}>
											<p className={`${styles.ddlv} ${styles.cate_dd}`} style={{ width: '100%' }}>
												<span title="Địa điểm">
													{cate.new_city === '0'
														? 'Toàn quốc'
														: typeof cate.new_city === 'string' &&
														  cate?.new_city !== '0' &&
														  cate?.new_city
																?.split(',')
																.map((cityId: any, index: number) => {
																	const city = listCitys.find(
																		(item: ICity) => item.cit_id === parseInt(cityId, 10)
																	)
																	return city ? city.cit_name : null
																})
																.sort((a: any, b: any) => {
																	const aId =
																		listCitys.find((item: ICity) => item.cit_name === a)?.cit_id ||
																		0
																	const bId =
																		listCitys.find((item: ICity) => item.cit_name === b)?.cit_id ||
																		0
																	return aId - bId
																})
																.filter(Boolean)
																.join(', ')}
												</span>
											</p>
											{/* <span className={styles.tooltip}>
										<span>Hồ Chí MinhHà Nội</span>
									</span> */}
										</div>
										<p>
											<span className={styles.cate_hn} title="Hạn nộp CV">
											Hạn nộp: {unixTimestampToDateString(cate.new_han_nop)}
											</span>
										</p>

										<p>
											<Link
												href="/lich-su/danh-sach-tong-u241071t1"
												className={styles.history_point}
											>
												Lịch sử vào trang
											</Link>
										</p>
										<span className={styles.job_chat + ' ' + styles.m_online}>Chat</span>
										<span
											onClick={() => handleUngTuyen(cate)}
											style={{ left: 200, width: 150, background: '#4C5BD4', color: '#fff' }}
											className={styles.job_chat + ' ' + styles.ung_tuyen}
										>
											{ungTuyen}
										</span>

										<div className={`${styles.con_tooltip} ${styles.top} ${styles.frame_txt}`}>
											<p
												style={{ overflow: 'hidden', display: 'flex', height: 30 }}
												className={styles.box_txt}
												title={removeHtmlTags(cate.new_quyenloi)}
											>
												Quyền lợi: {removeHtmlTags(cate.new_quyenloi)}
											</p>
										</div>
										<div
											className={`${styles.con_tooltip} ${styles.top} ${styles.frame_txt} ${styles.ctn_frame_txt}`}
										>
											<p
												style={{ height: 30 }}
												className={styles.box_txt}
												title={removeHtmlTags(cate.new_yeucau)}
											>
												Yêu cầu: {removeHtmlTags(cate.new_yeucau)}
											</p>
											{/* <span className={styles.tooltip}>
												<span>
													Yêu thích kinh doanh, máu lửa, năng động, tự tin, giao tiếp tốt Tốt nghiệp
													Cao đẳng trở lên các khối ngành kinh tế, quản trị kinh doanh,... Độ tuổi:
													Từ 21 đến 26 Có Laptop thành thạo sử dụng các phần mềm văn phòng, gửi/nhận
													email. Năng động, nhiệt tình, kiên trì, chịu khó, có khả năng tập trung
													công việc cao
												</span>
											</span> */}
										</div>
										<div className={styles.box_btn_ut_mb}></div>
									</div>
									<p className={styles.xt_tag} onClick={() => toggleCategory(cate.new_id)}>
										{openCategory === cate.new_id ? 'Rút gọn' : 'Xem thêm'}
									</p>
								</div>
								{openCategory === cate.new_id && (
									<div className={styles.nd_xt} style={{ display: 'block' }}>
										<ul className={styles.nd_xt_ct}>
											<p>Xem tìm kiếm tương tự</p>
											<ul>
												{cate?.new_cat_id?.split(',').map((items: any) =>
													listNganhNghe.map(
														(item: any, index: number) =>
															+items == item.cat_id && (
																<li key={index}>
																	<Link
																		href={`/viec-lam-${convertToSlug(item.cat_name)}-c${
																			item.cat_id
																		}v${0}`}
																	>
																		{item.cat_name}
																	</Link>
																</li>
															)
													)
												)}
											</ul>

											<li>
												<Link href={`/tim-viec-tai-${convertToSlug(name)}-c0v${router.query.id}`}>
													Việc làm tại {name}
												</Link>
											</li>
											<li>
												<Link
													href={
														cate?.usc_alias ? cate?.usc_alias : convertToSlug(cate?.usc_company)
													}
												>
													Việc làm tại {cate?.usc_company}
												</Link>
											</li>
										</ul>
									</div>
								)}
								{/* <Box_comment id={cate?.new_id} /> */}
							</div>
						)
					})}
				</ul>
			)}
			<Model_noti />
		</div>
	)
}

export default List_cate
