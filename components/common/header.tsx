import Image from 'next/image'
import React, { useState } from 'react'
import styles from '@styles/common/header.module.scss'
import Link from 'next/link'
import { openModal } from '@/actions/actions'
import { useDispatch } from 'react-redux'
import Model_noti from '../pop_up/model_noti'

export interface HeaderProps {
	isLogin: boolean
}

export default function Header({ children }: any, { isLogin }: HeaderProps) {
	const [isToggle, setIsToggle] = useState(true)
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
			link: '/mi',
			menuClass: styles.menu_mi,
		},
		{
			imageSrc: icon_mbti,
			alt: 'Trắc nghiệm MBTI',
			width: 20,
			height: 21,
			className: styles.angle_menu_mobile,
			text: 'Trắc nghiệm MBTI',
			link: '/mbti',
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
	const [chooseKhamPha, setChooseKhamPha] = useState(false)
	const [chooseTienIch, setChooseTienIch] = useState(false)
	const dispatch = useDispatch()
	const handleChat = () => {
		if (!isLogin) {
			dispatch(openModal())
		}
	}
	return (
		<>
			<header className={styles.new_header}>
				<Model_noti />
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
						</div>
					</div>
				</div>
				<div className={styles.box_header}>
					<div className={styles.m_hd_left}>
						<div id={styles.mobi}>
							<div className={styles.mobi_from}>
								<div className={styles.box_btn} id={styles.box_dangnhap}>
									<Link href="/dang-nhap.html" className={styles.ctn_chung_hr}>
										<span>Đăng nhập</span>
									</Link>
								</div>
								<div className={styles.box_btn} id={styles.box_dangky}>
									<Link href="#" className={styles.ctn_chung_hr}>
										<span>Đăng ký</span>
									</Link>
								</div>
							</div>
						</div>
						<div className={styles.box_btn_dangtin}>
							<Link href="#" className={styles.ctn_chung_hr}>
								Đăng tin
							</Link>
						</div>
						<div onClick={() => handleChat()} className={styles.ctn_menu_chat}>
							<span className={styles.chat_notifice}>
								<i className={styles.num_tb}>0</i>
							</span>
							<span className={styles.txt_chat}>Chat</span>
						</div>
					</div>
					<div className={styles.m_hd_right}>
						<div className={`${styles.menu_item} ${styles.ctn_menu_item}`}>
							<div className={`${styles.sub_domain} ${styles.ctn_sub_domain}`}>
								<Link href="#" className={styles.sub_domain_url}>
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
											<Link href="#" className={styles.menu_tv}>
												Trang vàng
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_ctv}>
												Cộng tác viên
											</Link>
										</li>
									</ul>
								</div>
							</li>
						</div>
						<div className={`${styles.menu_item} ${styles.ctn_menu_item}`}>
							<div className={styles.sub_domain}>
								<Link href="#" className={styles.sub_domain_url}>
									Tiện ích
								</Link>
								<div className={styles.ctn_up_box}>
									<ul className={`${styles.box_sub} ${styles.hidden}`}>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_tra_luong}>
												Tra cứu lương
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_luong_grn}>
												Lương GROSS - NET
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_email}>
												Email365
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_taiapp}>
												Tải app
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_bhtn}>
												Bảo hiểm thất nghiệp
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="/mi" className={styles.menu_mi}>
												Trắc nghiệm MI
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="/mbti" className={styles.menu_mbti}>
												Trắc nghiệm MBTI
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_eq}>
												Trắc nghiệm EQ
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_en}>
												Trắc nghiệm Energram
											</Link>
										</li>
										<li className={styles.ctn_box_ch}>
											<Link href="#" className={styles.menu_ptcv}>
												Phân tích CV
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={`${styles.menu_item} ${styles.ctn_menu_item}`}>
							<Link href="/nguoi-tim-viec.html" className={styles.sub_domain_url}>
								Tìm ứng viên
							</Link>
						</div>
						<div className={`${styles.menu_item} ${styles.ctn_menu_item}`}>
							<Link href="#" className={styles.sub_domain_url} target="_blank">
								Chuyển đổi số
							</Link>
						</div>
					</div>
				</div>
				{/* Màn nhỏ hơn */}
				{!isToggle && (
					<div className={`${styles.mobi_sh_ul} ${styles.ctn_mobi_sh_ul}`}>
						<div id={styles.mobi_ul} className={`${styles.m_header_mobile} ${styles.displayblock}`}>
							<div className={styles.mobi_form}>
								<div className={styles.m_ul_container}>
									<li>
										<Link href="#" className={styles.ctn_mobi_sub1}>
											<Image
												src={'/images/before_login/exp_dangky.png'}
												alt="exp_dangky"
												width={20}
												height={21}
												className={styles.lazyloaded}
											/>
											<span>Đăng ký</span>
										</Link>
									</li>
									<li>
										<Link href="#" className={styles.ctn_mobi_sub1}>
											<Image
												src={'/images/before_login/exp_dangnhap.png'}
												alt="exp_dangnhap"
												width={20}
												height={21}
												className={styles.lazyloaded}
											/>
											<span>Đăng nhập</span>
										</Link>
									</li>
									<li className={styles.mobile_dangtin}>
										<Link href="#">
											<Image
												src={img_dangtin}
												alt="img_dangtin"
												width={20}
												height={21}
												className={styles.lazyloaded}
											/>
											<span>Đăng tin</span>
										</Link>
									</li>
									<li className={styles.ctn_mobi_sub_domain}>
										<Link href="#" className={`${styles.ctn_mobi_sub} ${styles.ctn_mobi_sub2}`}>
											<Image
												src={img_cv}
												alt="img_cv"
												width={20}
												height={21}
												className={styles.lazyloaded}
											/>
											<span>CV xin việc</span>
										</Link>
									</li>
									<li className={styles.ctn_mobi_sub_domain}>
										<Link
											href="#"
											className={`${styles.ctn_mobi_sub} ${styles.ctn_mobi_sub2} ${styles.m_box_hdsaudn}`}
											onClick={(event) => {
												event.preventDefault()
												setChooseKhamPha(!chooseKhamPha)
											}}
										>
											<div className={styles.box_hd_saudn}>
												<Image
													src={img_khampha}
													alt="img_khampha"
													width={20}
													height={21}
													className={styles.lazyloaded}
												/>
												<span>Khám phá</span>
											</div>
											<Image
												src={img_so_xuong}
												alt="mở rộng"
												width={20}
												height={21}
												style={{
													transform: `${chooseKhamPha ? 'rotate(180deg)' : 'rotate(0deg)'}`,
													transition: '1s all',
												}}
											/>
										</Link>
										<ul
											className={`${styles.ctn_mobi_sub_ul} ${
												chooseKhamPha ? styles.show : styles.none
											}`}
										>
											{dsKhamPha.map((item, index) => (
												<li key={index} className={styles.ctn_box_ch}>
													<Image
														src={item.imageSrc}
														alt={item.alt}
														width={item.width}
														height={item.height}
														className={item.className}
													/>
													<Link className={item.menuClass} href={item.link}>
														{item.text}
													</Link>
												</li>
											))}
										</ul>
									</li>
									<li className={styles.ctn_mobi_sub_domain}>
										<Link
											href="#"
											className={`${styles.ctn_mobi_sub} ${styles.ctn_mobi_sub2} ${styles.m_box_hdsaudn}`}
											onClick={(event) => {
												event.preventDefault()
												setChooseTienIch(!chooseTienIch)
											}}
										>
											<div className={styles.box_hd_saudn}>
												<Image
													src={img_tienich}
													alt="Tiện ích"
													width={20}
													height={21}
													className={styles.lazyloaded}
												/>
												<span>Tiện ích</span>
											</div>
											<Image
												src={img_so_xuong}
												alt="mở rộng"
												width={20}
												height={21}
												style={{
													transform: `${chooseTienIch ? 'rotate(180deg)' : 'rotate(0deg)'}`,
													transition: '1s all',
												}}
											/>
										</Link>
										<ul
											className={`${styles.ctn_mobi_sub_ul} ${
												chooseTienIch ? styles.show : styles.none
											}`}
										>
											{dsTienIch.map((item, index) => (
												<li key={index} className={styles.ctn_box_ch}>
													<Image
														src={item.imageSrc}
														alt={item.alt}
														width={item.width}
														height={item.height}
														className={item.className}
													/>
													<Link className={item.menuClass} href={item.link}>
														{item.text}
													</Link>
												</li>
											))}
										</ul>
									</li>
									<li>
										<Link href="#" className={styles.ctn_mobi_sub1}>
											<Image
												src={'/images/before_login/exp_tim_uvien.png'}
												alt="exp_tim_uvien"
												width={20}
												height={21}
												className={styles.lazyloaded}
											/>
											<span>Tìm ứng viên</span>
										</Link>
									</li>
									<li>
										<Link href="#" className={styles.ctn_mobi_sub1}>
											<Image
												src={'/images/before_login/exp_chuyendoiso.png'}
												alt="exp_chuyendoiso"
												width={20}
												height={21}
												className={styles.lazyloaded}
											/>
											<span>Chuyển đổi số</span>
										</Link>
									</li>
								</div>
							</div>
						</div>
					</div>
				)}
			</header>
		</>
	)
}
