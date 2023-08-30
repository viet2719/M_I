import React, { useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Image from 'next/image'

type Props = {
	showBox_share: boolean
	show_Box_Share_Mxh: boolean
	setShow_Box_Share_Mxh: (value: boolean) => void
    setShowChat365: (value: boolean) => void
    setShowGrChat365:(value: boolean) => void
}

const Option_share = ({ showBox_share, show_Box_Share_Mxh, setShow_Box_Share_Mxh,setShowChat365,setShowGrChat365 }: Props) => {
	return (
		<div>
			{showBox_share && (
				<div className={`${styles.box_share}`}>
					<div className={`${styles.box_share_items}`} style={{ display: 'none!important' }}>
						<Image
							width={24}
							height={24}
							src={'/images/sh_ic1.png'}
							alt="Chia sẻ thang cá nhân của bạn"
						/>
						Chia sẻ lên trang cá nhân (Của bạn)
					</div>
					<div className={`${styles.box_share_items}`} style={{ display: 'none!important' }}>
						<Image
							width={24}
							height={24}
							src={'/images/sh_ic2.png'}
							alt="Chia sẻ trang cá nhân bạn bè"
						/>
						Chia sẻ lên trang cá nhân (Bạn bè)
					</div>
					<div onClick={()=>setShowChat365(true)} className={`${styles.box_share_items} ${styles.share_items_chat365}`}>
						<Image width={24} height={24} src={'/images/sh_ic3.png'} alt="Gửi bằng Chat365" />
						Gửi bằng Chat365
					</div>
					<div onClick={()=>setShowGrChat365(true)}  className={`${styles.box_share_items} ${styles.share_group_chat365}`}>
						<Image width={24} height={24} src={'/images/sh_ic4.png'} alt="Gửi lên nhóm Chat365" />
						Gửi lên nhóm Chat365
					</div>
					<div
						onClick={() => setShow_Box_Share_Mxh(!show_Box_Share_Mxh)}
						onMouseLeave={() => {
							setShow_Box_Share_Mxh(false)
						}}
						className={`${styles.box_share_items} ${styles.share_items_mxh}`}
					>
						<Image width={24} height={24} src={'/images/sh_ic5.png'} alt="Khác" />
						Khác
					</div>
				</div>
			)}
			{show_Box_Share_Mxh && (
				<div
					className={`${styles.box_share_mxh}`}
					onMouseOver={() => {
						setShow_Box_Share_Mxh(true)
					}}
				>
					<div className={`${styles.box_share_items}`}>
						<Image width={24} height={24} src="/images/iic_f.png" alt="Facebook" />
						Facebook
					</div>
					<div className={`${styles.box_share_items}`}>
					<Image width={24} height={24} src="/images/iic_t.png" alt="Twitter" />
						Twitter
					</div>
					<div className={`${styles.box_share_items}`}>
					<Image width={24} height={24} src="/images/iic_v.png" alt="Vkontakte" />
						Vkontakte
					</div>
					<div className={`${styles.box_share_items}`}>
					<Image width={24} height={24} src="/images/iic_l.png" alt="Linked In" />
						Linked In
					</div>
				</div>
			)}
		</div>
	)
}
export default Option_share
