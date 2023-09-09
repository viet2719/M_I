import Chat_NTD from '@/components/common/chat_NTD'
import Footer from '@/components/common/footer'
import New_banner from '@/components/common/new_banner'
import Slide_cv from '@/components/common/slide_cv'
import { IJob } from '@/utils/interface'
import styles from '@styles/list_occupations/main_search.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Box_bottom_cate from './box_bottom_cate'
import { convertToSlug, removeHtmlTags, unixTimestampToDateStringMon } from '@/utils/convert'
import { listCities, listQuanhuyen } from '@/utils/constants'
import { Button, Checkbox, Pagination } from 'antd'
import Model_ungtuyen_sendmail_NTD from '../pop_up/model_ungtuyen_sendmail_NTD'
import Model_works_match_after_ungtuyen from '../pop_up/model_works_match_after_ungtuyen'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { base_timviec365 } from '../service/functions'
import List_cate from './item_cate'
import { parse } from 'querystring'
import { createContext } from 'vm'
import { useMyContext } from '../useContext/useContext'
import Viec_lam_cong_ty from '@/pages/viec_lam_cong_ty'
const Main_search = ({
	dataSSR,
	checkBox,
	footnewSSR,
	chucdanhSSR,
	diadiemSSR,
	congtySSR,
	nganhNgheLienQuan,
}: any) => {
	const islogin = true
	const iscv = true
	const dispatch = useDispatch()
	const [expandedItems, setExpandedItems] = useState<any>()
	const [compActive, setCompActive] = useState<any>(1)
	const router = useRouter()
	const [listJobs, setlistJobs] = useState<IJob[] | any>([])
	const [page, setpPage] = useState<number>(1)
	const [pageSize, setpageSize] = useState<number>(20)
	const [id, setid] = useState<number>()
	const [checkedBox, setcheckedBox] = useState(true)
	const [type, setType] = useState<string>('')
	const [selectAllChecked, setSelectAllChecked] = useState<any>(false)
	const [checkboxStates, setCheckboxStates] = useState<any>(checkBox)
	const [showMailUngTuyen, setshowMailUngTuyen] = useState<boolean>(false)
	const [showWorkMatch, setShowWorkMatch] = useState<boolean>(false)
	const [footerNew, setfooterNew] = useState<any>()
	const [listChucDanh, setlistChucDanh] = useState<any>()
	const [listDiaDiem, setlistDiaDiem] = useState<any>()
	const [listCongTy, setlistCongTy] = useState<any>()
	const [listNganhNgheLienQuan, setListNganhNgheLienQuan] = useState<any>()
	const [name, setname] = useState<string>('')
	const [withoutDiadiem, setwithoutDiadiem] = useState('')
	const [tenNganhNghe, settenNganhNghe] = useState<string | any>('')
	if (typeof sessionStorage !== 'undefined') {
		useEffect(() => {
			if (typeof window !== 'undefined') {
				const queryString = window?.location.pathname
				const withoutKeyword = decodeURIComponent(queryString).replace('/tim-kiem/keyword=', '')
				// Loại bỏ dấu "-" từ chuỗi
				const withoutDashes = withoutKeyword.replace(/-/g, ' ') // Sử dụng biểu thức chính quy để thay thế tất cả dấu "-" bằng khoảng trắng
				// Loại bỏ "&diadiem=..." từ chuỗi (nếu có)
				const withoutDiadiem = withoutDashes.replace(/&diadiem=\d*/, '')
				setwithoutDiadiem(withoutDiadiem)
			}
			if (typeof sessionStorage !== 'undefined') {
				const name: any = sessionStorage.getItem('tenNganhNghe')
				if (name && name.length > 4) {
					settenNganhNghe(name)
				}
			} else {
				console.log('Trình duyệt không hỗ trợ sessionStorage.')
			}
		}, [withoutDiadiem, sessionStorage.getItem('tenNganhNghe')])
	}
	const data = [
		{
			id: 1,
			title: 'Ngành nghề liên quan',
			links: nganhNgheLienQuan,
		},
		{
			id: 2,
			title: 'Chức danh',
			links: listChucDanh,
		},
		{
			id: 3,
			title: 'Địa điểm',
			links: listDiaDiem,
		},
		{
			id: 4,
			title: 'Công ty',
			links: listCongTy,
		},
	]
	const toggleItem = (index: number) => {
		if (index === expandedItems) {
			setExpandedItems('')
		} else {
			setExpandedItems(index)
		}
	}
	const listComp = [
		{ id: 0, comp: 'Chọn tất cả' },
		{ id: 1, comp: 'Phù hợp nhất' },
		{ id: 2, comp: 'Mới nhất' },
		{ id: 3, comp: 'Lương tốt nhất' },
	]
	const idFromRouter: any = router.query.id
	const idAsString = idFromRouter?.toString()
	let sanitizedId = ''

	if (idAsString) {
		const vIndex = idAsString.indexOf('v')
		const diadiemIndex = idAsString.indexOf('diadiem=')

		if (diadiemIndex !== -1) {
			// Nếu có 'diadiem=' trong chuỗi, lấy giá trị sau 'diadiem='.
			sanitizedId = idAsString.substring(diadiemIndex + 8) // 8 là độ dài của "diadiem=".
		} else if (vIndex !== -1) {
			// Nếu không có 'diadiem=', lấy giá trị sau 'v'.
			sanitizedId = idAsString.substring(vIndex + 1)
		}
	}
	let cate_id: any = ''
	if (idFromRouter[0] != 'v') {
		let id = router.query.cateidv + idFromRouter[0]
		cate_id = id
	} else {
		cate_id = router.query.cateidv
	}
	const handleGetJos = async () => {
		if (sanitizedId || idAsString) {
			try {
				const res = await fetch(`${base_timviec365}/api/timviec/new/listJobBySearch`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify({
						city: sanitizedId || idAsString,
						cate_id: cate_id,
						pageSize: pageSize,
						page: page,
						type: type,
					}),
				})
				const data = await res.json()
				setlistJobs(data?.data?.items)
				setCheckboxStates(data?.data?.items?.map(() => false) || [])
				setfooterNew(data?.data?.footerNew)
				setlistChucDanh(data?.data?.listChucDanh)
				setlistDiaDiem(data?.data?.listCityReated)
				setlistCongTy(data?.data?.listCongvieclienquan)
				setListNganhNgheLienQuan(data?.data.listWordReacted)
			} catch (error) {}
		}
	}
	useEffect(() => {
		if (page == 1 && type == '') {
			setlistJobs(dataSSR)
			setfooterNew(footnewSSR)
			setlistChucDanh(chucdanhSSR)
			setlistDiaDiem(diadiemSSR)
			setlistCongTy(congtySSR)
			setListNganhNgheLienQuan(nganhNgheLienQuan)
		} else {
			handleGetJos()
		}
		const nameCity: any = listCities.filter((item) => {
			return item.cit_id === Number(sanitizedId || router.query.id)
		})
		setname(nameCity[0]?.cit_name)
	}, [page, sanitizedId, pageSize, type, idAsString])
	const date: any = new Date()
	const handleChange = (e: any, cate: any) => {
		const updatedStates = [...checkboxStates] // Sao chép mảng trạng thái hiện tại

		const index = listJobs.findIndex((job: any) => job === cate)

		while (updatedStates.length <= index) {
			updatedStates.push(false) // Mặc định là false
		}

		// Đặt trạng thái của Checkbox tại index tương ứng
		updatedStates[index] = e.target.checked

		setCheckboxStates(updatedStates) // Cập nhật mảng trạng thái
	}
	const handleSelectAll = () => {
		const updatedStates = checkboxStates.map((state: any) => !state)
		setCheckboxStates(updatedStates)
		setSelectAllChecked(!selectAllChecked)
	}
	const handleUngTuyen = () => {
		setshowMailUngTuyen(true)
	}
	if (idAsString?.length < 25) {
		return (
			<div>
				<New_banner />
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
				<div className={styles.main_timviec}>
					<div className={styles.container_timviec}>
						<div className={`${styles.div_bre} ${styles.div_bre_2}`}>
							<ul
								className={styles.breadcrumb}
								itemScope
								itemType="http://schema.org/BreadcrumbList"
							>
								<li className={styles.first}>
									<Link href="/" target="_blank" itemProp="item">
										<span itemProp="name">Trang chủ</span>
									</Link>
								</li>
								<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
									<Link href={'#'} itemProp="item">
										<span itemProp="name">
											{idAsString.includes('diadiem') || +idAsString < 100 ? (
												<p>
													Việc làm {withoutDiadiem} mới nhất tại {name}
												</p>
											) : (
												<div className={styles.tag_tdnew}>
													{tenNganhNghe?.includes('Việc')
														? tenNganhNghe
														: 'việc làm ' + tenNganhNghe}{' '}
													{name ? ' Tại ' + name : ''}
												</div>
											)}
										</span>
									</Link>
								</li>
							</ul>
						</div>
						{idAsString.includes('diadiem') || +idAsString < 100 ? (
							<p className={styles.title_cate_list}>
								Việc làm {withoutDiadiem} mới nhất tại {name}
							</p>
						) : (
							<div className={styles.tag_tdnew}>
								<h1>
									Tuyển dụng, tìm{' '}
									{tenNganhNghe?.includes('Việc') ? tenNganhNghe : 'việc làm ' + tenNganhNghe}{' '}
									{name ? ' Tại ' + name : ''} tháng {unixTimestampToDateStringMon(date / 1000)}{' '}
								</h1>
							</div>
						)}

						<div className={styles.vl_left}>
							<div
								className={`${styles.right_cate} ${styles.nd_cate} ${styles.nd_caten} ${styles.nd_cate_new}`}
								id={styles.nd_cate}
							>
								<div className={styles.box_type}>
									{listComp.map((comp, index) => {
										return (
											<div key={index}>
												{islogin && iscv && comp.id == 0 ? (
													<div
														onClick={handleSelectAll}
														key={index}
														className={`${styles.items_type} ${
															compActive === comp.id ? styles.active : ''
														}`}
													>
														<Checkbox checked={selectAllChecked} className="custom-checkbox" />{' '}
														{comp.comp}
													</div>
												) : (
													<div>
														{comp.id > 0 && (
															<div
																key={index}
																className={`${styles.items_type} ${
																	compActive === comp.id ? styles.active : ''
																}`}
																onClick={() => {
																	if (comp.id != 0) {
																		setCompActive(comp.id)
																		if (comp.id == 2) {
																			setType('new')
																		}
																		if (comp.id == 3) {
																			setType('money')
																		}
																		if (comp.id == 1) {
																			setType('')
																		}
																	}
																}}
															>
																{comp.comp}
															</div>
														)}
													</div>
												)}
											</div>
										)
									})}
									{islogin && iscv && (
										<p
											onClick={() => handleUngTuyen()}
											className={`${styles.ut_all} ${styles.btn_bl_w}`}
										>
											Ứng tuyển tất cả
										</p>
									)}

									<div className={styles.box_mb_items}>
										<p className={styles.items_name}>Phù hợp nhất</p>
										<div className={styles.pop_items}>
											{listComp.map((comp, index) => {
												return (
													<div key={index} className={`${styles.items_type} ${styles.active}`}>
														{comp.comp}
													</div>
												)
											})}
										</div>
									</div>
								</div>

								{/* jobs */}
								{compActive === 1 && (
									<List_cate
										listJobs={listJobs}
										name={name}
										checkedBox={checkedBox}
										handleChange={handleChange}
										checkboxStates={checkboxStates}
										sanitizedId={sanitizedId}
										idAsString={idAsString}
									/>
								)}
								{compActive === 2 && (
									<List_cate
										listJobs={listJobs}
										name={name}
										checkedBox={checkedBox}
										handleChange={handleChange}
										checkboxStates={checkboxStates}
										sanitizedId={sanitizedId}
										idAsString={idAsString}
									/>
								)}
								{compActive === 3 && (
									<List_cate
										listJobs={listJobs}
										name={name}
										checkedBox={checkedBox}
										handleChange={handleChange}
										checkboxStates={checkboxStates}
										sanitizedId={sanitizedId}
										idAsString={idAsString}
									/>
								)}
							</div>
							{listJobs.length > 1 && (
								<Pagination
									style={{ float: 'right' }}
									pageSize={pageSize}
									current={page}
									total={page * 20 * 6}
									onChange={(current, pageSizes) => {
										if (current != page) {
											setpPage(current)
										}
										if (pageSizes != pageSize) {
											setpageSize(pageSizes)
										}
									}}
								/>
							)}
						</div>

						<Chat_NTD classNameProps={true} propsElementSlugNganhNghe={true} />
						<p className={styles.title_cate_list}>
							Mẫu CV Bất động sản đẹp nhất{' '}
							<Link
								className={styles.cv_all}
								rel="nofollow"
								href="https://timviec365.vn/cv365/cv-bat-dong-san"
								target="_blank"
							>
								(xem tất cả mẫu CV)
							</Link>
						</p>
						<Slide_cv />
						<div className={styles.btn_upload_cv}>
							<div className={styles.btn_upload_cv_left}>
								<p>AI365: CÓ VIỆC SIÊU TỐC</p>
								<p>CẬP NHẬT CV NHANH - BẬT ĐÈN XANH CHO NHÀ TUYỂN DỤNG</p>
								<a
									rel="nofollow"
									href="/tai-ho-so.html"
									className={styles.btn_tuvan}
									title="Tải hồ sơ của bạn lên"
								>
									Tải CV từ máy tính của bạn
								</a>
							</div>
							<div className={styles.btn_upload_cv_right}>
								<div className={styles.cv_right_video}>
									<div className={styles.cv_right_video}>
										<iframe
											height={182}
											width={278}
											className={styles.lazyloaded}
											src="https://www.youtube.com/embed/eMOPVei2nis"
											frameBorder={0}
											allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.cate_tag}>
							{data.map((item, index) => (
								<div
									key={index}
									className={`${styles.dm_gy_list} ${
										expandedItems === item.id ? '' : styles.rut_gon
									}`}
								>
									<p className={styles.title_tag}>{item.title}</p>
									{item?.links?.map((link: any, linkIndex: any) => (
										<>
											{link?.key_name && link.key_city_id && (
												<Link
													key={index}
													href={`/viec-lam-${convertToSlug(link?.key_name)}-${link?.key_id}`}
												>
													Việc làm tại {link?.key_name}
												</Link>
											)}
											{link?.key_qh_id &&
												listQuanhuyen.map((item) => {
													{
														if (item.cit_id === link?.key_qh_id) {
															return (
																<Link
																	key={index}
																	href={`tag${item.cit_parent}/tim-viec-tai-${convertToSlug(
																		item?.cit_name
																	)}-${item?.cit_id}`}
																>
																	Việc làm tại {item?.cit_name}
																</Link>
															)
														}
													}
												})}

											{linkIndex < item.links.length - 1 && <span>-</span>}
										</>
									))}
									{expandedItems === item.id ? (
										<span className={styles.hiden_cd} onClick={() => toggleItem(item.id)}>
											<Image
												height={24}
												width={24}
												src="/images/before_login/icons_hiden.png"
												alt="Xem thêm gợi ý"
											/>
										</span>
									) : (
										<span className={styles.show_cd} onClick={() => toggleItem(item.id)}>
											<Image
												height={24}
												width={24}
												src="/images/before_login/icons_more.png"
												alt="Xem thêm gợi ý"
											/>
										</span>
									)}
								</div>
							))}
						</div>

						<Box_bottom_cate footerNew={footerNew} />
					</div>
				</div>

				<Footer />
			</div>
		)
	} else {
		return <Viec_lam_cong_ty />
	}
}

export default Main_search
