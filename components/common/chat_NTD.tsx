/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '@styles/common/chat_NTD.module.scss'
import Image from 'next/image'
import Link from 'next/link'
const listDataChats = [
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
]
const Chat_NTD = ({ classNameProps, propsElementSlugNganhNghe }: any) => {
	return (
		<div className={`${styles.vl_right} ${classNameProps && styles.frame_th}`}>
			<div className={styles.list_ntd_home}>
				<p className={styles.tt_chat_ntd}>
					<Image
						className={styles.ic_list_onnile}
						src="/images/Ic_list_online.png"
						alt="Chat"
						width={40}
						height={40}
					/>{' '}
					Chat với nhà tuyển dụng
				</p>
				<div className={styles.list_nganh_nghe}>
					<a rel="nofollow" className={styles.link_all_onl} href="">
						Tất cả &gt;&gt;
					</a>
					<ul className={styles.list_chat_ntd}>
						{listDataChats.map((item) => (
							<li
								key={item.id}
								className={`${styles.online_item} ${styles.openApp} ${styles.m_online}`}
							>
								<a href="">
									<span className={`${styles.ava_mess} ${styles.m_online}`}>
										<Image src={'/images/Ic_list_online.png'} alt="" width={20} height={20} />
									</span>
									<span className={`${styles.ct_online} ${styles.box_tooltip}`}>
										<p>{item.company}</p>
										<p className={`${styles.con_tooltip} ${styles.top}`}>
											<span className={styles.span_con_item}>{item.jobTitle}</span>
											<span className={styles.tooltip}>
												<span>{item.jobTitle}</span>
											</span>
										</p>
										<p>{item.location}</p>
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			{propsElementSlugNganhNghe && (
				<>
					<div className={`${styles.banner_new}`}>
						<div className={`${styles.box_btn} ${styles.bg_bn_listNew}`}>
							<Link
								target="_blank"
								rel="nofollow"
								href="https://play.google.com/store/apps/details?id=timviec365vn.timviec365_vn"
							>
								<img
									className={`lazyloaded`}
									src="/images/before_login/listNew_btn_bn_taiapp1.png"
									alt="App Timviec365"
								/>
							</Link>
							<Link
								target="_blank"
								rel="nofollow"
								href="https://play.google.com/store/apps/details?id=vn.timviec365.cv.cv365_vn"
							>
								<img
									height={114}
									width={39}
									className={`lazyloaded`}
									src="/images/before_login/listNew_btn_bn_taiapp2.png"
									alt="App CV365"
								/>
							</Link>
						</div>
					</div>
					<div className={`${styles.banner_new}`}>
						<Link
							target="_blank"
							rel="nofollow"
							href="https://app.timviec365.vn/Download/Chat365/Install/chat365.exe"
						>
							<img
								className={`lazyloaded`}
								src="/images/before_login/listNew_bn_taichat.png"
								alt="App Chat365"
							/>
						</Link>
					</div>
					<div className={`${styles.banner_new}`}>
						<Link href="https://chat365.timviec365.vn/" target="_blank">
							<img
								className={`lazyloaded`}
								src="/images/before_login/listNew_bn_btnChat.png"
								alt="Chat365"
							/>
						</Link>
					</div>
				</>
			)}
		</div>
	)
}

export default Chat_NTD
