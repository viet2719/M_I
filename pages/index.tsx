import Chat_NTD from '@/components/common/chat_NTD'
import Footer from '@/components/common/footer'
import Hd_share_location from '@/components/common/hd_share_location'
import New_banner from '@/components/common/new_banner'
import Head_common from '@/components/head'
import Banner_tia_set from '@/components/home/banner_tia_set'
import Box_AI from '@/components/home/box_Ai'
import Box_vlhd_top from '@/components/home/box_vlhd_top'
import Box_vlth from '@/components/home/box_vlth'
import Chat_container from '@/components/home/chat_container'
import Filter_right_AI365_Mobile from '@/components/home/filter_right_AI365_Mobile'
import Filter_right_AI365_PC from '@/components/home/filter_right_AI365_PC'
import Hotline from '@/components/home/hotline'
import Tia_set from '@/components/home/tia_set'
import { HomePageBeforeLayout } from '@/components/layout/home_before_login'
import { base_timviec365 } from '@/components/service/functions'
import { NextPageWithLayout } from '@/models/common'
import { LocAI365, listCitys } from '@/utils/constants'
import { ICity, IJob, ISeo } from '@/utils/interface'
import styles from '@styles/home/home.module.scss'
import { Carousel } from 'antd'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import Select from 'react-select'
import { store_per,persistor } from '@/components/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
const Home: NextPageWithLayout = ({ data, jobAiSSR }: any) => {
	const Banner_tia_set = dynamic(() => import('@/components/home/banner_tia_set'), { ssr: false })
	const Banner_anh_sao = dynamic(() => import('@/components/home/tia_set'), { ssr: false })

	const [VLHD, setVLHD] = useState<IJob[]>([])
	const [VLTH, setVLTH] = useState<IJob[]>([])
	const [VLTG, setVLTG] = useState<IJob[]>([])
	const [dataSeo, setdataSeo] = useState<ISeo | any>()

	const [showHd, setshowHd] = useState<boolean>(false)
	const [click, setclick] = useState<boolean>(false)

	const [listJobsAI, setlistJobsAI] = useState<IJob[]>([])

	const [cityNameLocation, setCityNameLocation] = useState<string>()

	const [selectedId, setSelectedId] = useState<number | any>()
	const [cate_id, setCate_id] = useState<number | any>('')
	const [list_id, setList_id] = useState<string>('')

	const [selectLeft, setselectLeft] = useState<number>(0)
	useEffect(() => {
		setVLHD(data?.data?.VLHD)
		setVLTG(data?.data?.VLTG)
		setVLTH(data?.data?.VLTH)
		setdataSeo(data?.data?.dataSeo)
	}, [])

	//Lấy tên từ tọa độ khi bật vị trí
	const getCityName = async (latitude: any, longitude: any) => {
		// Xây dựng URL cho OpenStreetMap Nominatim
		const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`

		// Gửi yêu cầu HTTP đến API
		try {
			const response = await fetch(apiUrl, {})
			const data = await response.json()
			if (data?.address && data?.address?.city) {
				setCityNameLocation(data.address.city)
			} else {
				console.log('Không thể tìm thấy tên thành phố.')
			}
		} catch (error) {}
	}
	// Lấy tọa độ khi bật vị trí
	useEffect(() => {
		try {
			if ('geolocation' in navigator) {
				navigator.geolocation.getCurrentPosition(function (position) {
					var latitude = position.coords.latitude
					var longitude = position.coords.longitude
					// Bây giờ bạn có thể sử dụng thông tin vị trí này trong ứng dụng của bạn
					getCityName(latitude, longitude)
				})
			} else {
				console.log(
					'Trình duyệt không hỗ trợ Geolocation hoặc người dùng đã từ chối chia sẻ vị trí.'
				)
			}
		} catch (error) {}
	}, [])

	// Nếu bật vị trí, dùng AI 365 tìm theo tỉnh thành
	const city: ICity[] = listCitys.filter((item: ICity) => item.cit_name === cityNameLocation)
	const handleGetJobAI = async () => {
		try {
			const res = await fetch(`${base_timviec365}/api/timviec/new/listJobBySearch`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({
					city: city[0]?.cit_id,
					pageSize: 14,
					new_qh_id: selectedId,
					cate_id: cate_id,
				}),
			})
			const data = await res.json()
			setlistJobsAI(data?.data?.items)
		} catch (error) {}
	}
	useEffect(() => {
		if (city[0]?.cit_id) {
			handleGetJobAI()
		}
	}, [city[0]?.cit_id, selectedId, cate_id])

	//Lấy danh sách việc khi không có location
	const handleGetJobAInoLocation = async () => {
		try {
			const res = await fetch(`${base_timviec365}/api/timviec/new/listJobBySearch`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({
					city: selectedId == 0 ? Math.floor(Math.random() * 35) : selectedId,
					cate_id: cate_id,
					pageSize: 14,
					list_id: list_id,
				}),
			})
			const data = await res.json()
			setlistJobsAI(data?.data?.items)
		} catch (error) {}
	}
	useEffect(() => {
		if (
			//  (!selectedId && !city[0]?.cit_id) ||
			(selectedId == 0 && !city[0]?.cit_id) ||
			(selectedId && !city[0]?.cit_id)
		) {
			handleGetJobAInoLocation()
		}
		if (!selectedId && !city[0]?.cit_id) {
			setlistJobsAI(jobAiSSR?.data?.items)
		}
	}, [selectedId, cate_id, list_id])
	return (

		<Provider store={store_per}>
			<Head_common data={dataSeo} />
			<Hd_share_location click={click} showHd={showHd} setshowHd={setshowHd} />

			<New_banner />
			<section className={styles.section_home}>
				<div className={styles.vieclam_container}>
					<p className={styles.clear}></p>
					<div className={styles.box_vl}>
						<div className={`${styles.box_vl_fix} ${styles.stiky}`}>
							<div className={styles.span_vl}>
								<Link href="#">
									<p>HẤP DẪN</p>
								</Link>
							</div>
							<div className={styles.span_vl}>
								<Link href="#">
									<p>THƯƠNG HIỆU</p>
								</Link>
							</div>
							<div className={styles.span_vl}>
								<Link href="#">
									<p>TUYỂN GẤP</p>
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.vl_left}>
						<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
							<h2 className={styles.ic_vlth}>VIỆC LÀM HẤP DẪN</h2>

							<div className={styles.main_box_vieclam}>
								<Carousel autoplay className={styles.customCarousel}>
									<Box_vlhd_top jobData={VLHD?.slice(1, 15)} />
									<Box_vlhd_top jobData={VLHD?.slice(15, 29)} />
									<Box_vlhd_top jobData={VLHD?.slice(29, 43)} />
									<Box_vlhd_top jobData={VLHD?.slice(43, 58)} />
								</Carousel>
							</div>
							<div className={styles.plus_next}>
								<Link className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
									Tất cả tin tuyển dụng &gt;&gt;
								</Link>
							</div>
						</div>
					</div>
					<Chat_NTD />
					<div className={styles.ctn_banner_utcv}>
						<div className={styles.ctn_ndung_utcv}>
							<div className={`${styles.ctn_left_uplcv} ${styles.ctn_chung_utcv}`}>
								<p className={styles.ctn_tde_uplcv}>Sử dụng CV có sẵn để tìm việc làm</p>
								<p className={styles.ctn_des_uplcv}>
									AI365: Có việc siêu tốc cập nhật cv nhanh - bật đèn xanh cho nhà tuyển dụng:
								</p>
								<Link className={styles.ctn_dd_uplcv} href="/tai-ho-so.html">
									Upload CV ngay{' '}
									<Image
										width={29}
										height={29}
										src="/images/before_login/exp_ultcv.png"
										alt="Upload CV"
									/>
								</Link>
							</div>
							<div className={`${styles.ctn_right_tcv} ${styles.ctn_chung_utcv}`}>
								<p className={styles.ctn_tde_uplcv}>Tạo CV online ấn tượng</p>
								<p className={styles.ctn_des_uplcv}>
									Timviec365 hiện có 3500+ mẫu CV chuyên nghiệp, độc đáo cùng 5 ngôn ngữ Anh, Việt,
									Hàn... phù hợp với mọi ngành nghề
								</p>
								<Link className={styles.ctn_dd_uplcv} href="/cv-xin-viec">
									Tạo CV ngay{' '}
									<Image
										width={29}
										height={29}
										src="/images/before_login/exp_ultcv.png"
										alt="Tạo CV"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
						<h2 className={styles.icn_vlhd}>VIỆC LÀM THƯƠNG HIỆU</h2>
						<Box_vlth jobList={VLTG} />
						<div className={styles.plus_next}>
							<Link className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
								Tất cả tin tuyển dụng &gt;&gt;
							</Link>
						</div>
					</div>
					<Banner_tia_set />
					<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
						<h2 className={styles.icn_vllc}>VIỆC LÀM TUYỂN GẤP</h2>
						<Carousel autoplay className={styles.customCarousel}>
							<Box_vlth jobList={VLTH?.slice(1, 22)} />
							<Box_vlth jobList={VLTH?.slice(22, 43)} />
							<Box_vlth jobList={VLTH?.slice(43, 64)} />
						</Carousel>
						<div className={styles.plus_next}>
							<Link className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
								Tất cả tin tuyển dụng &gt;&gt;
							</Link>
						</div>
					</div>
					{/* Tia set */}
					<Banner_anh_sao />

					<div id={styles.box_vlth} className={`${styles.box_vieclam} ${styles.box_vieclam_hot}`}>
						<h2 className={styles.icon_ai_home}>VIỆC LÀM ĐỀ XUẤT BỞI AI365</h2>
						<div className={styles.sub_text}>
							Hệ thống AI365 cần bạn đăng nhập hoặc thông tin về vị trí của bạn để có thể hiển thị
							các việc làm phù hợp nhất.
							<button onClick={() => setshowHd(true)}>Xem hướng dẫn chia sẻ vị trí tại đây!</button>
						</div>
						<div className={`${styles.box_filter} ${styles.filter_new}`}>
							<div className={styles.filter_left}>
								<span
									className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
									dir="ltr"
									style={{ width: '270px' }}
								>
									<span className={styles.selection}>
										<span
											className={`${styles.select2_selection} ${styles.select2_selection_single}`}
										>
											<Select
												id="city_search"
												className={styles.city_search}
												options={LocAI365}
												placeholder={LocAI365[0].label}
												onChange={(value: any) => setselectLeft(value?.value)}
												styles={{
													indicatorsContainer: (baseStyles, state) => ({
														...baseStyles,
														display: 'none',
													}),
													input: (baseStyles, state) => ({
														...baseStyles,
														outline: 'none',
														border: 'none',
													}),
													placeholder: (baseStyles, state) => ({
														...baseStyles,
														fontSize: '16px',
													}),
													singleValue: (baseStyles, state) => ({
														...baseStyles,
														height: '100%',
														fontSize: '16px',
														color: '#474747',
														lineHeight: '31px',
														fontWeight: 600,
													}),

													control: (baseStyles, state) => ({
														...baseStyles,
														margin: '0',
														height: '30px',
														lineHeight: '22px',
														minHeight: '25px',
														border: 'none',
														outline: 'none',
														boxShadow: 'none',
													}),
													option: (baseStyles, state) => ({
														...baseStyles,
														padding: '0 8px',
													}),
												}}
											/>
											<span className={`${styles.select2_selection__arrow}`} role="presentation">
												<b role="presentation" />
											</span>
										</span>
									</span>
									<span className={`${styles.dropdown_wrapper}`} aria-hidden="true" />
								</span>
							</div>

							<Filter_right_AI365_PC
								idLocation={city[0]?.cit_id}
								nameCity={city[0]?.cit_name}
								selectLeft={selectLeft}
								setSelectedId={setSelectedId}
								selectedId={selectedId}
								setCate_id={setCate_id}
								setList_id={setList_id}
							/>

							<Filter_right_AI365_Mobile
								idLocation={city[0]?.cit_id}
								nameCity={city[0]?.cit_name}
								selectLeft={selectLeft}
								setSelectedId={setSelectedId}
								selectedId={selectedId}
								setCate_id={setCate_id}
							/>
						</div>

						<Box_AI jobList={listJobsAI} />

						<div className={styles.plus_next}>
							<Link className={styles.icon_plus} href="/tin-tuyen-dung-viec-lam.html">
								Tất cả tin tuyển dụng &gt;&gt;
							</Link>
						</div>
					</div>
					{/* Hotline */}
					<Hotline />
				</div>
			</section>
			<Footer />
			<Chat_container />

	
		</Provider>
	
	)
}

// SSR
export async function getServerSideProps() {
	// Danh sách việc làm
	let data
	let jobAiSSR
	try {
		const listWorks = await fetch(`${base_timviec365}/api/timviec/new/homePage`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({ pageSizeTH: 63, pageSizeHD: 56, pageSizeTG: 21 }),
		})
		const datas = await listWorks.json()
		data = datas
	} catch (error) {}
	try {
		const res = await fetch(`${base_timviec365}/api/timviec/new/listJobBySearch`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				city: Math.floor(Math.random() * 35),
				pageSize: 25,
				page: 1,
			}),
		})
		const data = await res.json()
		jobAiSSR = data
	} catch (error) {}

	return {
		props: {
			data,
			jobAiSSR,
		},
	}
}

Home.Layout = HomePageBeforeLayout

export default Home
