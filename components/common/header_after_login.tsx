import Image from 'next/image'
import React, { useState } from 'react'
import styles from '@/styles/common/header_affter_login.module.scss'
import Notify_after_login from '../details/main_timviec/notify_after_login'
import Mobile_form_after_login from '../details/molbile_form_after_login/mobile_form_after_login'
import Link from 'next/link'
import Pc_form_after_login from '../details/pc_form_after_login/pc_form_after_login'

export interface HeaderProps {}

export default function HeaderAfterLogin({ children }: any, props: HeaderProps) {
	const [isToggle, setIsToggle] = useState<boolean>(true)
	const img_so_xuong = '/images/angle_bottom.svg'
	const img_cv = '/images/banner/exp_cv_xviec_hso.png'
	const img_khampha = '/images/banner/exp_khampha.png'
	const img_tienich = '/images/banner/exp_tienich.png'
	const img_dangtin = '/images/banner/ic_menu_dtinn.svg'
	const img_bhtn = '/images/banner/icon_bhtn.svg'
	const icon_mi = '/images/banner/icon_mi.svg'
	const icon_mbti = '/images/banner/icon_mbti.svg'
	const icon_eq = '/images/banner/icon_eq.svg'
	const icon_ener = '/images/banner/icon_energram.svg'
	// Danh sách 1
	const dsKhamPha = [
		{
			imageSrc: '/images/before_login/exp_blogger.png',
			alt: '',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Blog',
			link: '/blog',
			menuClass: styles.menu_blog,
		},
		{
			imageSrc: '/images/before_login/exp_banggia.png',
			alt: 'Bảng giá',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Bảng giá',
			link: '/banggia',
			menuClass: styles.menu_bgia,
		},
		{
			imageSrc: '/images/before_login/exp_trangvang.png',
			alt: 'Trang vàng',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Trang vàng',
			link: '/trangvang',
			menuClass: styles.menu_tv,
		},
		{
			imageSrc: '/images/before_login/exp_ctvien.png',
			alt: 'Cộng tác viên',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Cộng tác viên',
			link: '/congtacvien',
			menuClass: styles.menu_ctv,
		},
	]
	const dsTienIch = [
		{
			imageSrc: '/images/before_login/exp_tra_cluong.png',
			alt: 'Tra cứu lương',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Tra cứu lương',
			link: '/tra-cuu-luong',
			menuClass: styles.menu_tra_cluong,
		},
		{
			imageSrc: '/images/before_login/exp_luong_grn.png',
			alt: 'Lương GROSS - NET',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Lương GROSS - NET',
			link: '/luong-gross-net',
			menuClass: styles.menu_luong_grn,
		},
		{
			imageSrc: '/images/before_login/exp_email365.png',
			alt: 'Email365',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Email365',
			link: '/email365',
			menuClass: styles.menu_email,
		},
		{
			imageSrc: '/images/before_login/exp_email365.png',
			alt: 'Tải app',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Tải app',
			link: '/',
			menuClass: styles.menu_app,
		},
		{
			imageSrc: img_bhtn,
			alt: 'Bảo hiểm thất nghiệp',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Bảo hiểm thất nghiệp',
			link: '/',
			menuClass: styles.menu_bhtn,
		},
		{
			imageSrc: icon_mi,
			alt: 'Trắc nghiệm MI',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Trắc nghiệm MI',
			link: '/',
			menuClass: styles.menu_mi,
		},
		{
			imageSrc: icon_mbti,
			alt: 'Trắc nghiệm MBTI',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Trắc nghiệm MBTI',
			link: '/',
			menuClass: styles.menu_MBTI,
		},
		{
			imageSrc: icon_eq,
			alt: 'Trắc nghiệm EQ',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Trắc nghiệm EQ',
			link: '/',
			menuClass: styles.menu_EQ,
		},
		{
			imageSrc: icon_ener,
			alt: 'Trắc nghiệm Energram',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Trắc nghiệm Energram',
			link: '/',
			menuClass: styles.menu_energram,
		},
		{
			imageSrc: icon_ener,
			alt: 'Phân tích cv',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Phân tích cv',
			link: '/',
			menuClass: styles.menu_ptcv,
		},
	]
	const [showAvatar, setShowAvatar] = useState(false)
	return (
		<>
			<header className={styles.new_header}>
				<Notify_after_login />
				{showAvatar && <Pc_form_after_login/>}
				<div className={styles.logo_header}>
					<Link href="/">
						<Image
							src={'/images/timviec365-logo.png'}
							alt="Tìm việc làm nhanh & Tuyển dụng hiệu quả"
							width={137}
							height={29}
						/>
					</Link>
					<span
						className={`${isToggle ? styles.mobi_sel : styles.close_mobi_sel}`}
						style={{ paddingTop: 400 }}
						onClick={() => {
							setIsToggle(!isToggle)
						}}
					></span>

					<div className={styles.ctn_noti_chat}>
						<div className={styles.chat_tt}>
							<div className={styles.ctn_menu_chat}>
								<span className={styles.chat_notifice}>
									<i className={styles.num_tb}>0</i>
								</span>
								<span className={styles.txt_chat}>Chat</span>
							</div>
							<div className={styles.ctn_menu_chat}>
								<span className={styles.chat_notifice2}>
									<i className={styles.num_tb}>0</i>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.box_header}>
					<div className={styles.m_hd_left}>
						<div id={styles.mobi}>
							<div className={styles.mobi_from}></div>
						</div>
						<div className={styles.ctn_menu_chat}>
							<div className={styles.m_header_v2} style={{ marginTop: -5 }}>
								<span className={styles.chat_notifice2}>
									<div
										onClick={() => setShowAvatar(!showAvatar)}
										className={`${styles.bgr_avatar} ${styles.cursor_pt}`}
									>
										<div className={`${styles.arrow_bot}`} />
										<div className={`${styles.avatar_lg} ${styles.ava_uv}`}>
											<Image
												width={30}
												height={30}
												className={`${styles.lazyloaded}`}
												src="https://timviec365.vn/images/dk_s.png"
												data-src="/images/dk_s.png"
												alt="Nguyễn Quang Trường"
											/>
										</div>
									</div>
								</span>
							</div>

							<span className={styles.txt_chat}></span>
						</div>

						<div className={styles.ctn_menu_chat}>
							<span className={styles.chat_notifice2}>
								<i className={styles.num_tb}>0</i>
							</span>
						</div>
						<div className={styles.ctn_menu_chat}>
							<span className={styles.chat_notifice}>
								<i className={styles.num_tb}>0</i>
							</span>
							<span className={styles.txt_chat}>Chat</span>
						</div>
					</div>
					<div className={styles.m_hd_right}>
						<div className={`${styles.menu_item} ${styles.ctn_menu_item}`}>
							<div className={`${styles.sub_domain} ${styles.ctn_sub_domain}`}>
								<Link href={'#'} className={styles.sub_domain_url}>
									CV xin việc
								</Link>
							</div>
						</div>
						<div className={`${styles.menu_item} ${styles.ctn_menu_item}`}>
							<li className={styles.sub_domain}>
								<Link href="#" className={styles.sub_domain_url}>
									Khám phá
								</Link>
								<div className={styles.ctn_up_box}>
									<ul className={`${styles.box_sub} ${styles.hidden}`}>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_blog}>
												Blog
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_bgia}>
												Bảng giá
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_tv}>
												Trang vàng
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_ctv}>
												Cộng tác viên
											</Link>
										</li>
									</ul>
								</div>
							</li>
						</div>
						<div className={`${styles.menu_item} ${styles.ctn_menu_item}`}>
							<div className={styles.sub_domain}>
								<Link href={'#'} className={styles.sub_domain_url}>
									Tiện ích
								</Link>
								<div className={styles.ctn_up_box}>
									<ul className={`${styles.box_sub} ${styles.hidden}`}>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_tra_luong}>
												Tra cứu lương
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_luong_grn}>
												Lương GROSS - NET
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_email}>
												Email365
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_taiapp}>
												Tải app
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_bhtn}>
												Bảo hiểm thất nghiệp
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_mi}>
												Trắc nghiệm MI
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_mbti}>
												Trắc nghiệm MBTI
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_eq}>
												Trắc nghiệm EQ
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_en}>
												Trắc nghiệm Energram
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href={'#'} className={styles.menu_ptcv}>
												Phân tích CV
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={`${styles.menu_item} ${styles.ctn_menu_item}`}>
							<Link href={'#'} className={styles.sub_domain_url}>
								Tìm ứng viên
							</Link>
						</div>
						<div className={`${styles.menu_item} ${styles.ctn_menu_item}`}>
							<Link href={'#'} className={styles.sub_domain_url} target="_blank">
								Chuyển đổi số
							</Link>
						</div>
					</div>
				</div>
				{/* Màn nhỏ hơn */}
				{!isToggle && (
					<Mobile_form_after_login/>
				)}
			</header>
		</>
	)
}
