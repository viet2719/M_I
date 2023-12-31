import Chat_NTD from '@/components/common/chat_NTD'
import Footer from '@/components/common/footer'
import New_banner from '@/components/common/new_banner'
import { listCities } from '@/utils/constants'
import { convertToSlug } from '@/utils/convert'
import { IJob } from '@/utils/interface'
import styles from '@styles/list_occupations/main_search.module.scss'
import { Checkbox, Pagination } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Model_ungtuyen_sendmail_NTD from '../pop_up/model_ungtuyen_sendmail_NTD'
import Model_works_match_after_ungtuyen from '../pop_up/model_works_match_after_ungtuyen'
import { base_timviec365 } from '../service/functions'
import Box_bottom_cate from './box_bottom_cate'
import List_cate from './item_cate'
const Main_search = () => {
	const islogin = true
	const iscv = true
	const dispatch = useDispatch()

	const [expandedItems, setExpandedItems] = useState<any>()
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
	const [compActive, setCompActive] = useState<any>(1)
	const router = useRouter()
	const [listJobs, setlistJobs] = useState<IJob[] | any>([])
	const [page, setpPage] = useState<number>(1)
	const [pageSize, setpageSize] = useState<number>(20)
	const [id, setid] = useState<number>()
	const [checkedBox, setcheckedBox] = useState(true)
	const [type, setType] = useState<string>('')
	const [selectAllChecked, setSelectAllChecked] = useState<any>(false)
	const [checkboxStates, setCheckboxStates] = useState<any>()
	const [showMailUngTuyen, setshowMailUngTuyen] = useState<boolean>(false)
	const [showWorkMatch, setShowWorkMatch] = useState<boolean>(false)
	const [footerNew, setfooterNew] = useState<any>()
	const [listChucDanh, setlistChucDanh] = useState<any>()
	const [listDiaDiem, setlistDiaDiem] = useState<any>()
	const [listCongTy, setlistCongTy] = useState<any>()
	const data = [
		{
			id: 1,
			title: 'Chức danh',
			links: listChucDanh,
		},
		{
			id: 2,
			title: 'Địa điểm',
			links: listDiaDiem,
		},
		{
			id: 3,
			title: 'Công ty',
			links: listCongTy,
		},
	]
	const idFromRouter: any = router.query.id // Assuming you have a variable or object representing the ID.
	const idAsString = idFromRouter?.toString() // Convert it to a string if it's not already.
	const sanitizedId = idAsString?.replace('v', '') // Remove 'v' from the string.
	const handleGetJos = async () => {
		if (sanitizedId) {
			try {
				const res = await fetch(`${base_timviec365}/api/timviec/new/listJobBySearch`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify({
						city: sanitizedId,
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
			} catch (error) {}
		}
	}
	const [name, setname] = useState<string>('')
	useEffect(() => {
		const nameCity: any = listCities.filter((item) => {
			return item.cit_id === Number(sanitizedId)
		})
		handleGetJos()
		setname(nameCity[0]?.cit_name)
	}, [page, sanitizedId, pageSize, type])

	const date: any = new Date()
	const handleChange = (e: any, cate: any) => {
		const updatedStates = [...checkboxStates] // Sao chép mảng trạng thái hiện tại

		// Tìm index của cate trong listJobs
		const index = listJobs.findIndex((job: any) => job === cate)

		// Đảm bảo mảng trạng thái đủ lớn để lưu trạng thái của từng Checkbox
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
	const [togglePop_items, setTogglePop_items] = useState(false)
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
						<ul className={styles.breadcrumb} itemScope itemType="http://schema.org/BreadcrumbList">
							<li className={styles.first}>
								<Link href="/" target="_blank" itemProp="item">
									<span itemProp="name">Trang chủ</span>
								</Link>
							</li>
							<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
								<Link href={'#'} itemProp="item">
									<span itemProp="name">Việc làm tại {name}</span>
								</Link>
							</li>
						</ul>
					</div>

					<div className={styles.vl_left}>
						<div
							className={`${styles.right_cate} ${styles.nd_cate} ${styles.nd_caten} ${styles.nd_cate_new}`}
							id={styles.nd_cate}
						>
							<h1 className={styles.title_cate_list}>Tìm Việc Làm kế toán nội bộ</h1>

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
																		handleGetJos()
																	}
																	if (comp.id == 3) {
																		setType('money')
																		handleGetJos()
																	}
																	if (comp.id == 1) {
																		setType('')
																		handleGetJos()
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

								<div
									className={styles.box_mb_items}
									onClick={() => {
										setTogglePop_items(!togglePop_items)
									}}
								>
									<p className={styles.items_name}>Phù hợp nhất</p>
									{togglePop_items && (
										<div className={styles.pop_items}>
											{listComp.map((comp, index) => {
												return (
													<Link href={'/'} key={index}>
														{comp.comp}
													</Link>
												)
											})}
										</div>
									)}
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
								/>
							)}
							{compActive === 2 && (
								<List_cate
									listJobs={listJobs}
									name={name}
									checkedBox={checkedBox}
									handleChange={handleChange}
									checkboxStates={checkboxStates}
								/>
							)}
							{compActive === 3 && (
								<List_cate
									listJobs={listJobs}
									name={name}
									checkedBox={checkedBox}
									handleChange={handleChange}
									checkboxStates={checkboxStates}
								/>
							)}
						</div>
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
					</div>

					<Chat_NTD classNameProps={true} propsElementSlugNganhNghe={true} />
					<div className={styles.upcv_st}>
						<p>Có việc siêu tốc cập nhật cv nhanh - bật đèn xanh cho nhà tuyển dụng:</p>
						<Link
							rel="nofollow"
							href="/tai-ho-so.html"
							className={styles.btn_upcvst}
							title="Tải hồ sơ của bạn lên"
						>
							Tải CV từ máy tính của bạn
						</Link>
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
									<React.Fragment key={linkIndex}>
										<Link href={`tag4/viec-lam-nhan-vien-phuc-vu-quan-cafe-tai-ha-noi-698`}>
											{link?.key_name ? (
												link?.key_name
											) : link?.key_qh_id ? (
												listCities.map((item) => {
													{
														if (item.cit_id === link?.key_id) {
															return (
																<Link
																	key={index}
																	href={`tim-viec-tai-${convertToSlug(item?.cit_name)}-c${0}v${
																		item?.cit_id
																	}}`}
																>
																	Việc làm tại {item?.cit_name}
																</Link>
															)
														}
													}
												})
											) : (
												<Link href={`${convertToSlug(link?.usc_company)}-co${link?.usc_id}`}>
													{link?.usc_company}
												</Link>
											)}
										</Link>
										{linkIndex < item.links.length - 1 && <span>-</span>}
									</React.Fragment>
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
}

export default Main_search
