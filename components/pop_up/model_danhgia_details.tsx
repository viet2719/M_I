import React, { useEffect, useState } from 'react'
import styles from '@/components/details/main_timviec/main_timviec.module.css'
import Image from 'next/image'
import { Rate } from 'antd'

type Props = {
	showDanhgia: boolean
	setshowDanhgia: (value: boolean) => void
    setnameDanhGia: (value: string) => void
}
const desc = ['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Rất tốt']

const Model_Danhgia_details = ({ showDanhgia, setshowDanhgia,setnameDanhGia }: Props) => {
	const [value, setValue] = useState<number>(3)
	const [name, setName] = useState<string>('Gửi đánh giá')
	const handleDanhGia = () => {
		setshowDanhgia(false)
		setName('Cập nhật')
        setnameDanhGia('Sửa đánh giá')
	}
	return (
		<div>
			{showDanhgia && (
				<div className={`${styles.popup_vote}`}>
					<div className={`${styles.wapper}`} onMouseLeave={() => setshowDanhgia(false)}>
						<div className={`${styles.banner_pp_vote}`}>
							<Image
								width={409}
								height={235}
								alt="banner_vote"
								className={`${styles.img_banner_pp_vote}`}
								src={'https://timviec365.vn/images/tia_set/banner_pp_vote.png'}
							/>
							<p className={`${styles.txt_banner_pp_vote}`}>
								Bạn thấy tin tuyển dụng này như thế nào?
							</p>
						</div>
						<div className={`${styles.box_lst_star_vote}`}>
							<button
								style={{ width: '100%' }}
								className={`${styles.item_star_vote} ${styles.active}`}
								data-star={1}
							>
								<span>
									<Rate
										style={{ width: '100%', fontSize: 30 }}
										tooltips={desc}
										onChange={setValue}
										value={value}
									/>
								</span>
								<p className={`${styles.txt_stt_star}`}>
									{' '}
									{value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
								</p>
							</button>
						</div>
						<button
							onClick={() => handleDanhGia()}
							className={`${styles.btn_send_vote}`}
							disabled={value > 0 ? false : true}
						>
							{name}
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
export default Model_Danhgia_details
