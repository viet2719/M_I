import Chat_NTD from '@/components/common/chat_NTD'
import Footer from '@/components/common/footer'
import New_banner from '@/components/common/new_banner'
import Slide_cv from '@/components/common/slide_cv'
import styles from '@styles/list_occupations/main_search.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import List_cate from './item_cate'
import { IJob } from '@/utils/interface'
import { base_timviec365 } from '../service/functions'
import { useRouter } from 'next/router'
import Box_bottom_cate from './box_bottom_cate'
import { unixTimestampToDateStringMon } from '@/utils/convert'
import { listCities } from '@/utils/constants'
import { Button, Checkbox, Pagination } from 'antd'
import { useDispatch } from 'react-redux'
const Main_search = () => {
	const islogin = true
	const dispatch = useDispatch()

	const data = [
		{
			id: 1,
			title: 'Ngành nghề liên quan:',
			links: [
				{
					href: '/link-6',
					text: 'Việc làm cộng tác viên kinh doanh tại Hà Nam',
				},
				{ href: '/link-7', text: 'Việc làm kinh doanh nội thất tại Hồ Vĩnh ' },
				{ href: '/link-8', text: 'Việc làm kinh doanh online tại Ngã Ba Đần Lập' },
				{
					href: '/link-6',
					text: 'Nhặt rác quanh hồ',
				},
				{
					href: '/link-6',
					text: 'Tester cấp thấp Hải Phòng',
				},
			],
		},
		{
			id: 2,
			title: 'Chức danh:',
			links: [
				{ href: '/link-4', text: 'Chủ tịch mặt trận' },
				{ href: '/link-5', text: 'Lãnh đạo đánh cá' },
				{ href: '/link-5', text: 'Trưởng phòng đào đạo đánh bắt hải sản' },
				{ href: '/link-5', text: 'Nghiên cứu pháo chế tạo AL' },
				{ href: '/link-5', text: 'Nhân viên cấp trung tính' },
			],
		},
		{
			id: 3,
			title: 'Từ khóa liên quan:',
			links: [
				{
					href: '/link-6',
					text: 'Việc làm cộng tác viên kinh doanh tại Hồ Chí Minh',
				},
				{ href: '/link-7', text: 'Việc làm kinh doanh nội thất tại Hồ Chí Minh ' },
				{ href: '/link-8', text: 'Việc làm kinh doanh online tại Hồ Chí Minh' },
				{
					href: '/link-6',
					text: 'Việc làm cộng tác viên Hải Phòng',
				},
				{ href: '/link-7', text: 'Việc làm kinh doanh nội thất Hà Nội ' },
				{ href: '/link-8', text: 'Việc làm kinh doanh online Hà Nội' },
				{
					href: '/link-6',
					text: 'Việc làm cộng tác viên kinh doanh Hà Nội',
				},
				{ href: '/link-7', text: 'Việc làm kinh doanh nội thất tại Hồ Chí Minh ' },
				{ href: '/link-8', text: 'Việc làm kinh doanh online tại Hồ Chí Minh' },
			],
		},
		{
			id: 4,
			title: 'Địa điểm:',
			links: [
				{ href: '/link-9', text: 'Hà Tĩnh' },
				{ href: '/link-9', text: 'Thanh Trì 9' },
				{ href: '/link-9', text: 'Đô Lịch ' },
				{ href: '/link-9', text: 'Trường Danh 21' },
				{ href: '/link-9', text: 'Test thôi mà' },
			],
		},
		{
			id: 5,
			title: 'Công ty:',
			links: [
				{ href: '/link-10', text: 'Link 10 Link 10 Link 10 Link 10 Link 10 Link 10Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
			],
		},
	]
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
	const handleGetJos = async () => {
		try {
			const res = await fetch(`${base_timviec365}/api/timviec/new/listJobBySearch`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({
					city: router.query.id,
					pageSize: pageSize,
					page: page,
					type: type,
				}),
			})
			const data = await res.json()
			setlistJobs(data?.data?.items)
			setCheckboxStates(data?.data?.items?.map(() => false) || [])
		} catch (error) {}
	}
	const [name, setname] = useState<string>('')
	useEffect(() => {
		handleGetJos()
		const nameCity: any = listCities.filter((item) => {
			return item.cit_id === Number(router.query.id)
		})
		setname(nameCity[0]?.cit_name)
	}, [page, router.query.id, pageSize, type])

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
	return (
		<div>
			<New_banner />
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
					<div className={styles.tag_tdnew}>
						<h1>
							{' '}
							Tuyển dụng, tìm việc làm tại {name} tháng {unixTimestampToDateStringMon(date / 1000)}{' '}
						</h1>
					</div>
					<div className={styles.vl_left}>
						<div
							className={`${styles.right_cate} ${styles.nd_cate} ${styles.nd_caten} ${styles.nd_cate_new}`}
							id={styles.nd_cate}
						>
							<div className={styles.box_type}>
								{listComp.map((comp, index) => {
									return (
										<div>
											{islogin && comp.id == 0 ? (
												<div
													onClick={handleSelectAll}
													key={index}
													className={`${styles.items_type} ${
														compActive === comp.id ? styles.active : ''
													}`}
												>
													<Checkbox className="custom-checkbox" /> {comp.comp}
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
								{islogin && (
									<p className={`${styles.ut_all} ${styles.btn_bl_w}`}>Ứng tuyển tất cả</p>
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
								{item.links.map((link, linkIndex) => (
									<React.Fragment key={linkIndex}>
										<Link href={link.href}>{link.text}</Link>
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

					<Box_bottom_cate />
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default Main_search
