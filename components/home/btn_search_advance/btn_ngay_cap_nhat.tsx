import React, { useEffect, useState } from 'react'
import styles from '@styles/home/btnSelect.module.scss'
import Select from 'react-select'
import { ICity } from '@/utils/interface'

const BtnSelectDay = ({ idCity }: any) => {
	const [isSelectOpen, setIsSelectOpen] = useState(false)
	const [listDistrict, setlistDistrict] = useState<any>([])
	const [valueS, setvalueS] = useState<any>()
	const handleSelectClick = () => {
		setIsSelectOpen(!isSelectOpen) // Đảo ngược trạng thái khi click vào Select
	}
	const handleSelectCity = (value: any) => {
		setvalueS(value)
	}

	return (
		<div className={styles['pop']}>
			<select
				onChange={(e) => handleSelectCity(e.target.value)}
				value={valueS}
				className={styles['select']}
			>
				<option value={0}>Chọn ngày cập nhật</option>
				<option value={1}>1 tuần trở lại</option>
				<option value={2}>1 tháng trở lại</option>
			</select>
		</div>
	)
}

export default BtnSelectDay
