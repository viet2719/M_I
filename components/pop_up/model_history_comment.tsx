import React, { useEffect, useState } from 'react'
import styles from '@/components/details/main_timviec/main_timviec.module.css'
import Image from 'next/image'

type Props = {
	showHistoryComemnt: boolean
	setShowHistoryComemnt: (value: boolean) => void
	count1: number
	count2: number
	count3: number
	count4: number
	count5: number
	count6: number
	count7: number
}

const Model_History_comment = ({
	showHistoryComemnt,
	setShowHistoryComemnt,
	count1,
	count2,
	count3,
	count4,
	count5,
	count6,
	count7,
}: Props) => {
	const [showMore, setshowMore] = useState<boolean>(false)
	useEffect(() => {
		const handleKeyPress = (event: any) => {
			if (event.key === 'Escape') {
				setShowHistoryComemnt(false)
			}
		}

		const handleClick = () => {
			// setShowHistoryComemnt(false)
		}

		// Bắt sự kiện khi người dùng nhấn phím
		window.addEventListener('keydown', handleKeyPress)

		// Bắt sự kiện khi người dùng click chuột
		window.addEventListener('click', handleClick)

		// Loại bỏ sự kiện khi component unmount
		return () => {
			window.removeEventListener('keydown', handleKeyPress)
			window.removeEventListener('click', handleClick)
		}
	}, [])
	return (
		<div>
			{showHistoryComemnt && (
				<div
					className={`${styles.popup_comment}`}
					id="popup_items_icon"
					style={{ display: 'block' }}
				>
					<div className={`${styles.popup_items_icon}`}>
						<div className={`${styles.box_header}`}>
							<div className={`${styles.title}`}>
								<span className={`${styles.items_ic} ${styles.all} ${styles.active}`}>Tất cả</span>

								<span className={`${styles.items_ic} ${styles.icon} ${styles.ic1}`}>
									<Image width={25} height={25} src="/images/img_comment/Ic_1.png" alt="Icon" />
									{count1}
								</span>
								<span className={`${styles.items_ic} ${styles.icon} ${styles.ic2}`}>
									<Image width={25} height={25} src="/images/img_comment/Ic_2.png" alt="Icon" />
									{count2}
								</span>
								<span className={`${styles.items_ic} ${styles.icon} ${styles.ic3}`}>
									<Image width={25} height={25} src="/images/img_comment/Ic_3.png" alt="Icon" />
									{count3}
								</span>
								<span className={`${styles.items_ic} ${styles.icon} ${styles.ic4}`}>
									<Image width={25} height={25} src="/images/img_comment/Ic_4.png" alt="Icon" />
									{count4}
								</span>
								<span className={`${styles.items_ic} ${styles.icon} ${styles.ic5}`}>
									<Image width={25} height={25} src="/images/img_comment/Ic_5.png" alt="Icon" />
									{count5}
								</span>

								<span onClick={() => setshowMore(!showMore)} className={`${styles.more}`}>
									Xem thêm
									<Image width={9} height={8} src="/images/ic_down.png" alt="Xem thêm" />
								</span>
								{showMore && (
									<div className={`${styles.more_icon}`}>
										<div className={` ${styles.icon} ${styles.ic6}`}>
											<Image width={25} height={25} src="/images/img_comment/Ic_6.png" alt="Icon" />
											{count6}
										</div>
										<div className={` ${styles.icon} ${styles.ic7}`}>
											<Image width={25} height={25} src="/images/img_comment/Ic_7.png" alt="Icon" />
											{count7}
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
export default Model_History_comment
