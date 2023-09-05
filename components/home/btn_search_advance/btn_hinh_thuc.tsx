import React, { useEffect, useState } from 'react'
import styles from '@styles/home/btnSelect.module.scss'
import Select from 'react-select'
import { ICity } from '@/utils/interface'

const BtnSelectHinhThuc = ({ idCity }: any) => {
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
				<option value={0}>Chọn hình thức</option>
				<option value={1}>Toàn thời gian cố định</option>
				<option value={2}>Toàn thời gian tạm thời</option>
				<option value={3}>Bán thời gian</option>
				<option value={4}>Bán thời gian tạm thời</option>
				<option value={5}>Hợp đồng</option>
				<option value={7}>Việc làm từ xa</option>
				<option value={6}>Khác</option>
			</select>
		</div>
	)
}

export default BtnSelectHinhThuc
