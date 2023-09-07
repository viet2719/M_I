import React, { useEffect, useState } from 'react'
import styles from '@/components/details/details.module.css'
import Image from 'next/image'
import Link from 'next/link'
import About_nguoi_tim_viec from '../about_nguoi_tim_viec/about_nguoi_tim_viec'
import List_uv_left from '../list_uv_left/list_uv_left'
import List_uv_right from '../list_uv_right/list_uv_right'
import Hd_share_location from '@/components/common/hd_share_location'
type Props = {
	isLogin: boolean
}
export interface IUv {
	use_gioi_tinh: number
	use_logo: string
	use_create_time: number
	use_update_time: number
	use_first_name: string
	use_id: number
	chat365_id: number
	cv_title: string
	cv_city_id: [number]
	use_quanhuyen: number
	use_city: string
	cv_exp: number
	isOnline: number
}
const Container = ({ isLogin }: Props) => {
	const [list_Ung_Vien, setlist_Ung_Vien] = useState<IUv[]>([])
	const [showHd, setshowHd] = useState<boolean>(false)
	const [click, setclick] = useState<boolean>(false)
	const [nn, setNn] = useState<boolean>(true)
	const [hn, setHn] = useState<boolean>(false)
	const [hcm, setHcm] = useState<boolean>(false)
	const [mb, setMb] = useState<boolean>(false)
	const [mn, setMn] = useState<boolean>(false)
	useEffect(() => {
		let arr: IUv[] = []
		for (let i = 1; i < 19; i++) {
			arr?.push({
				use_gioi_tinh: 1,
				use_logo: 'string',
				use_create_time: 1,
				use_update_time: 1,
				use_first_name: 'Dương Thị Tuyết Nhi' + ' ' + i,
				use_id: 1,
				chat365_id: 1,
				cv_title: 'Thực tập sinh ' + i,
				cv_city_id: [1],
				use_quanhuyen: 1,
				use_city: 'string',
				cv_exp: 1,
				isOnline: 1,
			})
		}
		setlist_Ung_Vien(arr)
	}, [])
	return (
		<div className={`${styles.main_timviec} ${styles.main_timviec_lux} ${styles.ctn_main_new}`}>
			{/* Model hướng dẫn chia sẻ vị trí */}
			<Hd_share_location click={click} showHd={showHd} setshowHd={setshowHd} />

			<div className={`${styles.container_timviec}`}>
				<div className={`${styles.tag_tdnew}`}>
					<div>&nbsp;</div>
					<h1>Người tìm việc chất lượng – thỏa sức xem hồ sơ và CV ứng viên miễn phí</h1>
				</div>
				<div className={`${styles.ctn_new_uvtv}`}>
					<div className={`${styles.ctn_left_uvtv}`}>
						<div className={`${styles.ctn_trc_dnhap}`}>
							<div className={`${styles.vl_left}`}>
								<div
									className={`${styles.ctn_ungvien_vlam} ${styles.ctn_trdn_bvtr} ${styles.w_100}`}
								>
									<div className={`${styles.ctn_trdn_vlam} ${styles.w_100}`}>
										<div className={`${styles.ctn_tde_uvien} ${styles.w_100}`}>
											<p className={`${styles.tde_uvien_chung} ${styles.tde_uvien_ai}`}>
												<Image
													width={30}
													height={30}
													alt=""
													src="/images/exp_tde_uvien_ai.png"
													className={styles.ctn_exp_ic}
												/>{' '}
												ỨNG VIÊN ĐỀ XUẤT BỞI ai365
											</p>
										</div>
										<div className={`${styles.ctn_tbao_bvitri} ${styles.w_100}`}>
											<p className={styles.tbao_bvtr}>
												Hệ thống AI365 cần bạn đăng nhập hoặc thông tin về vị trí của bạn để có thể
												hiển thị các ứng viên phù hợp nhất. &nbsp;
												<Link onClick={() => (setshowHd(true), setclick(true))} href="#">
													Xem hướng dẫn chia sẻ vị trí tại đây!
												</Link>
											</p>
										</div>
										<div className={`${styles.ctn_tthanh_uvien} ${styles.w_100}`}>
											<div className={`${styles.ctn_lay_uv}`} data-id={0} data-qh={0} data-mien={0}>
												<div className={`${styles.btn_prev} ${styles.ctn_scr_chung}`}>
													<Image
														width={10}
														height={18}
														src="/images/icon_arrow_left.svg"
														alt="prev"
													/>
												</div>
												<div className={`${styles.ctn_tca_tthanh}`}>
													<div className={`${styles.ctn_chl_tca}`}>
														<p
															onClick={() => {
																setNn(true), setHn(false), setHcm(false), setMb(false), setMn(false)
															}}
															className={`${styles.ctn_tthanh_tk} ${styles.st_0}
                                                             ${nn ? styles.active : ''}`}
														>
															Ngẫu nhiên
														</p>
														<p
															onClick={() => {
																setNn(false), setHn(true), setHcm(false), setMb(false), setMn(false)
															}}
															className={`${styles.ctn_tthanh_tk} ${styles.st_1} 
                                                         ${hn ? styles.active : ''}
                                                        `}
														>
															Hà Nội
														</p>
														<p
															onClick={() => {
																setNn(false), setHn(false), setHcm(true), setMb(false), setMn(false)
															}}
															className={`${styles.ctn_tthanh_tk} ${styles.st_45}
                                                         ${hcm ? styles.active : ''}
                                                        `}
														>
															Hồ Chí Minh
														</p>
														<p
															onClick={() => {
																setNn(false), setHn(false), setHcm(false), setMb(true), setMn(false)
															}}
															className={`${styles.ctn_tthanh_tk} ${styles.st_65}
                                                         ${mb ? styles.active : ''}
                                                        `}
														>
															Miền Bắc
														</p>
														<p
															onClick={() => {
																setNn(false), setHn(false), setHcm(false), setMb(false), setMn(true)
															}}
															className={`${styles.ctn_tthanh_tk} ${styles.st_67}
                                                         ${mn ? styles.active : ''}
                                                        `}
														>
															Miền Nam
														</p>
													</div>
												</div>
												<div className={`${styles.btn_next} ${styles.ctn_scr_chung}`}>
													<Image
														width={10}
														height={18}
														src="/images/icon_arrow_right.svg"
														alt="prev"
													/>
												</div>
											</div>
										</div>
									</div>
									{/* Danh sách ứng viên bên trái */}
									<List_uv_left
									isLogin={isLogin}
									list_Ung_Vien={list_Ung_Vien} setlist_Ung_Vien={setlist_Ung_Vien} />

									{/* <style
										type="text/css"
										dangerouslySetInnerHTML={{
											__html:
												'\n    .job_chat,\n    .uv_chat {\n        width: unset !important;\n        float: unset !important;\n    }\n\n    ',
										}}
									/> */}
								</div>
							</div>
						</div>
					</div>

					{/* Danh sách ứng viên bên phải */}
					<List_uv_right />
				</div>

				{/* Thông tin chung về người tim việc */}

				<About_nguoi_tim_viec />
			</div>
		</div>
	)
}
export default Container
