import React, { useEffect, useState } from 'react'
import styles from '../../main_timviec/main_timviec.module.css'
import Image from 'next/image'
interface Ifriend {
	src: string
	name: string
    stt_send:string
}
type Props = {
	showGrChat365: boolean
	setShowGrChat365: (Value: boolean) => void
}

const Action_Gr_Chat365 = ({ showGrChat365, setShowGrChat365 }: Props) => {
	const [listFriends, setlistFriends] = useState<Ifriend[]>()
	useEffect(() => {
		let arr:Ifriend[] = []
		for (let i = 1; i < 1; i++) {
			arr.push({
				src: '/images/638286918069380000_1404156.jpg',
				name: `Nguyễn Quang Trường ${i}`,
                stt_send:''
			})
		}
		setlistFriends(arr)
	}, [])
	return (
		<div className={`${styles.popup_comment1}`} id="popup_share_chat365">
			{showGrChat365 && (
				<div className={`${styles.popup_share_chat365}`}>
					<div className={`${styles.box_header}`}>
						<div className={`${styles.title}`}>Gửi cho nhóm tại chat365</div>
						<Image
							width={14}
							height={14}
							onClick={() => setShowGrChat365(false)}
							style={{ cursor: 'pointer' }}
							src={'/images/close.png'}
							alt="close"
							className={`${styles.close_cm}`}
						/>
					</div>
					<div className={`${styles.box_header} ${styles.cm_input}`}>
						<Image
							width={36}
							height={36}
							className={`${styles.img_user}`}
							src={'/images/638286918069380000_1404156.jpg'}
							alt="Logo"
						/>
						<textarea
							className={`${styles.ct_cm}`}
							id="ct_cm"
							maxLength={250}
							placeholder="Hãy nói gì đó về nội dung này"
							defaultValue={''}
						/>
					</div>
					<div className={`${styles.frame_items}`} id="list_friend_chat">
						{listFriends&&listFriends?.length>0
							? listFriends?.map((item: Ifriend, index: number) => {
									return (
										<div key={index} className={`${styles.items}`}>
											<div className={`${styles.items_u}`}>
												<Image
													width={36}
													height={36}
													data-id={167565}
													src={`${item.src}`}
													alt="Nguyễn Quang Trường"
												/>
												<span className={`${styles.name}`}>{item.name}</span>
											</div>
											<div
												className={`${styles.btn_buttom_send} ${styles.bg_send}`}
												data-id={167565}
											>
												{item.stt_send?item.stt_send:"Gửi"}
											</div>
										</div>
									)
							  })
							: <div style={{padding:10}}>Bạn chưa có nhóm để chia sẻ

                            </div>}
					</div>
				</div>
			)}
		</div>
	)
}
export default Action_Gr_Chat365
