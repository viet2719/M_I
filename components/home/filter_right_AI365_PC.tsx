import React from 'react'
import styles from '@/styles/home/home.module.scss'
import { Carousel } from 'antd'
import show from '@/styles/common/header_affter_login.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { base_timviec365 } from '../service/functions'
import { listKinhNghiem, listMucLuong, listNganhNghe } from '@/utils/constants'

type Props = {
	idLocation: number
	nameCity: string
	selectLeft: number
	setSelectedId: any
	selectedId: any
	setCate_id: any
}

const Filter_right_AI365_PC = ({
	idLocation,
	nameCity,
	selectLeft,
	setSelectedId,
	selectedId,
	setCate_id,
}: Props) => {
	const [listDistrict, setlistDistrict] = useState<any[]>([])
	const [idNganhNgheChangeColor, setidNganhNgheChangeColor] = useState<number>()
	const [showNgauNhien, setshowNgauNhien] = useState<boolean>(false)
	const [defaultValueCity, setdefaultValueCity] = useState<boolean>(false)

	const [listPosition, setListPosition] = useState(0)

	const handleLeftImageClick = () => {
		if (listPosition > 0) {
			setListPosition(listPosition - 1)
		}
	}

	const handleRightImageClick = () => {
		// Thay 3 bằng độ dài của danh sách nếu cần
		if (listPosition < listNganhNghe.length - 3) {
			setListPosition(listPosition + 1)
		}
	}

	const handleButtonClick = async (itemId: any) => {
		if (itemId == 0) {
			setshowNgauNhien(true)
			setSelectedId(Math.floor(Math.random() * 35))
			setdefaultValueCity(false)
			setCate_id('')
		} else {
			setshowNgauNhien(false)
			setSelectedId(itemId)
			setdefaultValueCity(false)
			setCate_id('')
		}
	}

	const handleGetDistrict = async () => {
		try {
			const res = await fetch(`${base_timviec365}/api/getData/district`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ cit_id: idLocation }),
			})
			const data = await res.json()
			setlistDistrict(data?.data.data)
		} catch (error) {}
	}

	useEffect(() => {
		if (idLocation) {
			handleGetDistrict()
			setdefaultValueCity(true)
		}
	}, [idLocation])
	return (
		<div className={styles.filter_right}>
			<div className={styles.btn_prev}>
				<Image
					onClick={handleLeftImageClick}
					width={10}
					height={18}
					src="/images/before_login/icon_arrow_left.svg"
					alt="prev"
				/>
			</div>
			<div className={styles.box_list_item}>
				{!idLocation && selectLeft == 0 && (
					<div className={styles.list_item}>
						<button
							onClick={() => handleButtonClick(0)}
							className={`${styles.item} ${(showNgauNhien || !selectedId )? show.focus_filter : ''}`}
						>
							Ngẫu nhiên
						</button>
						<button
							onClick={() => handleButtonClick(1)}
							className={`${styles.item} ${selectedId === 1 ? show.focus_filter : ''}`}
						>
							Hà Nội
						</button>
						<button
							onClick={() => handleButtonClick(45)}
							className={`${styles.item} ${selectedId === 45 ? show.focus_filter : ''}`}
						>
							Hồ Chí Minh
						</button>
						<button onClick={() => handleButtonClick(1000)} className={`${styles.item}`}>
							Miền Bắc
						</button>
						<button onClick={() => handleButtonClick(1100)} className={`${styles.item}`}>
							Miền Trung
						</button>
						<button onClick={() => handleButtonClick(1200)} className={`${styles.item}`}>
							Miền Nam
						</button>
					</div>
				)}
				{!idLocation && selectLeft == 1 && (
					<div className={styles.list_item}>
						<button className={`${styles.item} ${styles.active}`}>Chọn mức lương</button>
						<button className={`${styles.item}`}>Thỏa thuận</button>
						<button className={`${styles.item}`}>1 - 3 triệu</button>
						<button className={`${styles.item}`}>3 - 5 triệu</button>
						<button className={`${styles.item}`}>5 - 7 triệu</button>
						<button className={`${styles.item}`}>7 - 10 triệu</button>
						<button className={`${styles.item}`}>10 - 15 triệu</button>
						<button className={`${styles.item}`}>15 - 20 triệu</button>
						<button className={`${styles.item}`}>20 - 30 triệu</button>
						<button className={`${styles.item}`}>Trên 30 triệu</button>
						<button className={`${styles.item}`}>Trên 50 triệu</button>
						<button className={`${styles.item}`}>Trên 100 triệu</button>
					</div>
				)}

				{!idLocation && selectLeft == 2 && (
					<div className={styles.list_item}>
						<button className={`${styles.item} ${styles.active}`}>Chưa có kinh nghiệm</button>
						<button className={`${styles.item}`}>0 - 1 năm kinh nghiệm</button>
						<button className={`${styles.item}`}>Hơn 1 năm kinh nghiệm</button>
						<button className={`${styles.item}`}>Hơn 2 năm kinh nghiệm</button>
						<button className={`${styles.item}`}>Hơn 10 năm kinh nghiệm</button>
					</div>
				)}

				{!idLocation && selectLeft == 3 && (
					<div className={styles.list_item}>
						{listNganhNghe.map((item: any, index: number) => {
							return (
								<button
									onClick={() => (
										setCate_id(item?.cat_id),
										setSelectedId(0),
										setidNganhNgheChangeColor(item?.cat_id)
									)}
									key={index}
									className={`${styles.item} ${
										item.cat_id === idNganhNgheChangeColor ? show.focus_filter : ''
									}`}
								>
									{item.cat_name}
								</button>
							)
						})}
					</div>
				)}

				{/* Bật vị trí */}
				<div className={styles.list_item}>
					<div>
						{idLocation && selectLeft === 0 && (
							<div>
								<button
									onClick={() => {
										setSelectedId(0)
										setCate_id(null)
									}}
									className={`${styles.item} ${
										selectedId === 0 || defaultValueCity ? show.focus_filter : ''
									}`}
								>
									{nameCity}
								</button>
								{listDistrict
									.slice(listPosition, listPosition + 4)
									.map((item: any, index: number) => (
										<button
											key={index}
											onClick={() => handleButtonClick(item.cit_id)}
											className={`${styles.item} 
			   ${item.cit_id === selectedId ? show.focus_filter : ''}`}
										>
											{item.cit_name}
										</button>
									))}
							</div>
						)}
					</div>
					{idLocation && selectLeft === 1 && (
						<div className={styles.list_item}>
							{listMucLuong
								.slice(listPosition, listPosition + 8)
								.map((item: any, index: number) => (
									<button
										key={index}
										className={`${styles.item} ${
											item.cat_id === idNganhNgheChangeColor ? show.focus_filter : ''
										}`}
									>
										{item.cat_name}
									</button>
								))}
						</div>
					)}

					{idLocation && selectLeft === 2 && (
						<div className={styles.list_item} style={{ overflow: 'hidden' }}>
							{listKinhNghiem
								.slice(listPosition, listPosition + 4)
								.map((item: any, index: number) => (
									<button key={index} className={`${styles.item} `}>
										{item.cat_name}
									</button>
								))}
						</div>
					)}
					{idLocation && selectLeft === 3 && (
						<div className={styles.list_item}>
							{listNganhNghe
								.slice(listPosition, listPosition + 8)
								.map((item: any, index: number) => (
									<button
										onClick={() => {
											setCate_id(item?.cat_id)
											setidNganhNgheChangeColor(item?.cat_id)
										}}
										key={index}
										className={`${styles.item} ${
											item.cat_id === idNganhNgheChangeColor ? show.focus_filter : ''
										}`}
									>
										{item.cat_name}
									</button>
								))}
						</div>
					)}
				</div>
			</div>

			<div className={styles.btn_next}>
				<Image
					onClick={handleRightImageClick}
					width={10}
					height={18}
					src="/images/before_login/icon_arrow_right.svg"
					alt="prev"
				/>
			</div>
		</div>
	)
}
export default Filter_right_AI365_PC
