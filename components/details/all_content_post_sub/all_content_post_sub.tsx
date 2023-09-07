import React from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Slide_cv_details from '@/components/common/slide_cv_details'

type Props = {}

const All_content_post_sub = (props: Props) => {
	return (
		<div className={`${styles.all_content_post_sub}`}>
			<div className={`${styles.box_qr}`}>
				<div className={`${styles.tit_chat}`}>
					<p className={`${styles.utuyen_qr_moi}`}>Quét mã QR chat ngay NTD</p>
				</div>
				<div className={`${styles.w_100} ${styles.qr_apply}`}>
					<div className={`${styles.ctn_qrapply} ${styles.ctn_chat_qr}`}>
						<canvas width={180} height={180} style={{ display: 'none' }} />
						<Image
							width={25}
							height={25}
							alt="30"
							className={`${styles.img_qr_com}`}
							src={
								'data:image/png;base64,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'
							}
							style={{ display: 'block' }}
						/>
					</div>
				</div>
			</div>
			<div className={`${styles.box_qr}`}>
				<div className={`${styles.tit_chat}`}>
					<p className={`${styles.utuyen_qr_moi}`}>ỨNG TUYỂN BẰNG QR</p>
				</div>
				<div className={`${styles.w_100} ${styles.qr_apply}`}>
					<div className={`${styles.ctn_qrapply} ${styles.ctn_chat_qr}`}>
						<canvas width={180} height={180} style={{ display: 'none' }} />
						<Image
							width={25}
							height={25}
							alt="qr"
							className={`${styles.img_qr_com}`}
							src={
								'data:image/png;base64,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'
							}
							style={{ display: 'block' }}
						/>
					</div>
				</div>
			</div>
			<div className={`${styles.list_fr}`}>
				<div className={`${styles.tit_chat}`}>
					<div className={`${styles.tit_chat_left}`} />
					<div className={`${styles.tit_chat_mid}`}>
						<p className={`${styles.tit_chat_mid_text}`}>DANH SÁCH BẠN BÈ</p>
					</div>
					<div className={`${styles.tit_chat_right}`} />
				</div>
				<div className={`${styles.w_100} ${styles.list_client}`}>
					<div className={`${styles.list_item_chat} ${styles.openApp}`} id-chat={167565}>
						<div className={`${styles.img_item_on}`} id-chat={167565}>
							<Link
								target="_blank"
								rel="nofollow"
								href="https://chat365.timviec365.vn/chat-MTY3NTY1"
							>
								<Image
									width={135}
									height={135}
									src={'/images/Ic_list_online.png'}
									alt="Đỗ Văn Hoàng"
								/>
							</Link>
						</div>
						<div className={`${styles.right_item_vl}`}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTY3NTY1" class="name_com"> */}
							<Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
								Đỗ Văn Hoàng{' '}
							</Link>
						</div>
					</div>
					<div className={`${styles.list_item_chat} ${styles.openApp}`} id-chat={1342764}>
						<div className={`${styles.img_item_on}`} id-chat={1342764}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTM0Mjc2NA=="> */}
							<Link
								target="_blank"
								rel="nofollow"
								href="https://chat365.timviec365.vn/chat-MTY3NTY1"
							>
								<Image
									width={135}
									height={135}
									src={'/images/Ic_list_online.png'}
									alt="Đỗ Văn Hoàng"
								/>
							</Link>
						</div>
						<div className={`${styles.right_item_vl}`}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTM0Mjc2NA==" class="name_com"> */}
							<Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
								Tran Quang Duc Dung{' '}
							</Link>
						</div>
					</div>
					<div className={`${styles.list_item_chat} ${styles.openApp}`} id-chat={1404155}>
						<div className={`${styles.img_item_on}`} id-chat={1404155}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTQwNDE1NQ=="> */}
							<Link
								target="_blank"
								rel="nofollow"
								href="https://chat365.timviec365.vn/chat-MTY3NTY1"
							>
								<Image
									width={135}
									height={135}
									src={'/images/Ic_list_online.png'}
									alt="Đỗ Văn Hoàng"
								/>
							</Link>
						</div>
						<div className={`${styles.right_item_vl}`}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTQwNDE1NQ==" class="name_com"> */}
							<Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
								Nguyễn An Quân{' '}
							</Link>
						</div>
					</div>
					<div className={`${styles.list_item_chat} ${styles.openApp}`} id-chat={1216972}>
						<div className={`${styles.img_item_on}`} id-chat={1216972}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTIxNjk3Mg=="> */}
							<Link
								target="_blank"
								rel="nofollow"
								href="https://chat365.timviec365.vn/chat-MTY3NTY1"
							>
								<Image
									width={135}
									height={135}
									src={'/images/Ic_list_online.png'}
									alt="Đỗ Văn Hoàng"
								/>
							</Link>
						</div>
						<div className={`${styles.right_item_vl}`}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTIxNjk3Mg==" class="name_com"> */}
							<Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
								Lưu trữ cá nhân{' '}
							</Link>
						</div>
					</div>
					<div
						className={`${styles.list_item_chat} ${styles.openApp} ${styles.m_online}`}
						id-chat={701526}
					>
						<div className={`${styles.img_item_on} ${styles.m_online}`} id-chat={701526}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NzAxNTI2"> */}
							<Link
								target="_blank"
								rel="nofollow"
								href="https://chat365.timviec365.vn/chat-MTY3NTY1"
							>
								<Image
									width={135}
									height={135}
									src={'/images/Ic_list_online.png'}
									alt="Đỗ Văn Hoàng"
								/>
							</Link>
						</div>
						<div className={`${styles.right_item_vl}`}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NzAxNTI2" class="name_com"> */}
							<Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
								CÔNG TY MINH DƯƠNG MEDIA{' '}
							</Link>
						</div>
					</div>
					<div
						className={`${styles.list_item_chat} ${styles.openApp} ${styles.m_online}`}
						id-chat={56387}
					>
						<div className={`${styles.img_item_on} ${styles.m_online}`} id-chat={56387}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NTYzODc="> */}
							<Link
								target="_blank"
								rel="nofollow"
								href="https://chat365.timviec365.vn/chat-MTY3NTY1"
							>
								<Image
									width={135}
									height={135}
									src={'/images/Ic_list_online.png'}
									alt="Đỗ Văn Hoàng"
								/>
							</Link>
						</div>
						<div className={`${styles.right_item_vl}`}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NTYzODc=" class="name_com"> */}
							<Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
								HHP{' '}
							</Link>
						</div>
					</div>
					<div
						className={`${styles.list_item_chat} ${styles.openApp} ${styles.m_online}`}
						id-chat={573341}
					>
						<div className={`${styles.img_item_on} ${styles.m_online}`} id-chat={573341}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NTczMzQx"> */}
							<Link
								target="_blank"
								rel="nofollow"
								href="https://chat365.timviec365.vn/chat-MTY3NTY1"
							>
								<Image
									width={135}
									height={135}
									src={'/images/Ic_list_online.png'}
									alt="Đỗ Văn Hoàng"
								/>
							</Link>
						</div>
						<div className={`${styles.right_item_vl}`}>
							{/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NTczMzQx" class="name_com"> */}
							<Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
								Lê Thu Hà{' '}
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.cv} ${styles.slick_cv}`}>
				<div className={`${styles.tit_chat}`}>
					<div className={`${styles.tit_chat_left}`} />
					<div className={`${styles.tit_chat_mid}`}>
						<p className={`${styles.tit_chat_mid_text}`}>MẪU CV ĐẸP</p>
					</div>
					<div className={`${styles.tit_chat_right}`} />
				</div>

				{/* CV */}
				<Slide_cv_details />
			</div>
			<div className={`${styles.qr}`}>
				<div className={`${styles.logo_timviec}`}>
					<p className={`${styles.logo_timviec_text} ${styles.mt_20}`}>Quét mã QR để tải app</p>
				</div>
				<div className={`${styles.all_qr_dl} ${styles.d_flex} ${styles.j_s_ar} ${styles.mt_20}`}>
					<div className={`${styles.d_flex} ${styles.f_column}`}>
						<Image
							width={100}
							height={100}
							className={`${styles.img_dl_qr}`}
							src={'/images/new_qr_ft1.png'}
							alt="app timviec365"
						/>
						<p className={`${styles.qr_text}`}>APP TIMVIEC365</p>
						<Link
							className={`${styles.btn_down}`}
							href="https://play.google.com/store/apps/details?id=vn.timviec365.company"
							ios-href="https://apps.apple.com/vn/app/nh%C3%A0-tuy%E1%BB%83n-d%E1%BB%A5ng-timviec365-vn/id1606069668"
							rel="nofollow"
							target="_blank"
						>
							<Image
								width={25}
								height={25}
								alt="doawnload"
								src="https://timviec365.vn/images/detail/down_1.svg"
							/>
							DOWNLOAD
						</Link>
					</div>
					<div className={`${styles.d_flex} ${styles.f_column}`}>
						<Image
							width={100}
							height={100}
							className={`${styles.img_dl_qr}`}
							src={'/images/new_qr_ft2.png'}
							alt="app timviec365"
						/>
						<p className={`${styles.qr_text}`}>APP CV365</p>
						<Link
							className={`${styles.btn_down}`}
							href="https://play.google.com/store/apps/details?id=vn.timviec365.cv.cv365_vn"
							ios-href="https://apps.apple.com/us/app/cv-xin-vi%E1%BB%87c-365-t%E1%BA%A1o-cv-%C4%91%E1%BA%B9p/id1631076979"
							rel="nofollow"
							target="_blank"
						>
							<Image
								width={25}
								height={25}
								alt="doawnload"
								src="https://timviec365.vn/images/detail/down_2.svg"
							/>
							DOWNLOAD
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
export default All_content_post_sub
