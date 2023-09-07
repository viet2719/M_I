import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '@/components/details/details.module.css'
import { IUv } from '../container/container'
import { useDispatch } from 'react-redux'
import { openModal } from '@/actions/actions'

type Props = {
	isLogin: boolean
	list_Ung_Vien: IUv[]
	setlist_Ung_Vien: (value: IUv[]) => void
}

const List_uv_left = ({ isLogin, list_Ung_Vien, setlist_Ung_Vien }: Props) => {
	const dispatch = useDispatch()
	const handleLuu = (item: IUv) => {
		if (isLogin) {
		} else {
			dispatch(openModal())
		}
	}
	useEffect(() => {
		const intervalId = setInterval(() => {
			// Đảo lộn mảng list_Ung_Vien và cập nhật lại giá trị bằng setlist_Ung_Vien
			const shuffledArray = [...list_Ung_Vien]
			for (let i = shuffledArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1))
				;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
			}
			setlist_Ung_Vien(shuffledArray)
		}, 2000)

		// Để ngừng vòng lặp khi component bị unmounted hoặc khi bạn muốn dừng nó, bạn có thể làm như sau:
		return () => clearInterval(intervalId)
	}, [list_Ung_Vien])
	return (
		<div className={`${styles.luv_ct} ${styles.th_list_uv} ${styles.luu_ct_1}`}>
			<div className={`${styles.th_box_uv} ${styles.th_box_uv2} `} id="box_nd_uv">
				{list_Ung_Vien?.map((item: IUv, index: number) => {
					return (
						<div key={index} className={`${styles.s_row_nd} ${styles.item_home_th}`}>
							<div className={styles.s_ro_img}>
								<Link
									className={`${styles.logo_user_th} ${styles.m_online}`}
									rel="nofollow"
									href="/ung-vien/duong-thi-tuyet-nhi-uv1307840.html?notice"
								>
									<Image
										width={93}
										height={93}
										className={`${styles.lazyloaded}`}
										src="https://timviec365.vn/pictures/uv/2023/07/31/avatar1291642.jpg"
										alt="Noimage"
									/>
									<span className={`${styles.box_time_off}`} />
								</Link>
							</div>
							<div className={styles.s_ro_text}>
								<div className={`${styles.box_img_mb}`}>
									<Link
										className={`${styles.logo_user_th}`}
										rel="nofollow"
										href="/ung-vien/duong-thi-tuyet-nhi-uv1307840.html?notice"
									>
										<Image
											width={93}
											height={93}
											className={`${styles.no_logo_chat} ${styles.lazyload}`}
											src="https://timviec365.vn/pictures/uv/2023/07/31/avatar1291642.jpg"
											alt="Noimage"
										/>
										<span className={`${styles.box_time_off}`} />
									</Link>
								</div>
								<div className={`${styles.frame}`}>
									<p>
										<Link
											className={`${styles.u_tit}`}
											href="/ung-vien/duong-thi-tuyet-nhi-uv1307840.html"
											rel="nofollow"
											title="THỰC TẬP SINH"
										>
											{item.cv_title}
										</Link>
									</p>
									<p>
										<Link
											className={`${styles.u_name}`}
											href="/ung-vien/duong-thi-tuyet-nhi-uv1307840.html"
											rel="nofollow"
											title="THỰC TẬP SINH"
										>
											{item.use_first_name}
										</Link>
									</p>
								</div>
								<p className={`${styles.u_info}`}>
									<span className={`${styles.limit_city}`}>
										<Image width={20} height={20} src="/images/Ic_map.png" alt="địa chỉ" />
										<a>Hồ Chí Minh</a>
									</span>
									<span className={`${styles.u_knj}`}>
										<Image width={20} height={20} src="/images/Ic_kng.png" alt="kinh nghiệm" />
										Chi tiết trong CV
									</span>
									<span className={`${styles.u_knj}`}>
										<Image
											width={20}
											height={20}
											src="/images/Ic_update.png"
											alt="Thời gian cập nhật"
										/>
										26 ngày trước
									</span>
								</p>
								<a
									className={`${styles.uv_chat} ${styles.m_online}`}
									target="_blank"
									rel="nofollow"
									href="/ung-vien/duong-thi-tuyet-nhi-uv1307840.html?notice"
								>
									Chat
								</a>
								<span
									onClick={() => handleLuu(item)}
									className={`${styles.box_save} ${styles.save_hs}`}
								>
									<Image width={19} height={18} alt="Luu" src="/images/Ic_heart_bl.png" />
									Lưu
								</span>
							</div>
						</div>
					)
				})}
			</div>

			{/* <div class="ctn_xemtca">
      <a href="">Xem tất cả >></a>
  </div> */}
			<div className={`${styles.ctn_xemthem_uv}`}>
				<p className={`${styles.ctn_clk_xemth}`}>Xem thêm</p>
			</div>
		</div>
	)
}
export default List_uv_left
