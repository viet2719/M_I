import React, { useEffect, useState } from 'react'
import styles from '@styles/home/btnSelect.module.scss'
import Select from 'react-select'
import { ICity } from '@/utils/interface'

const BtnSelectKinhNghiem = ({ idCity }: any) => {
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
				<option value="">Chọn kinh nghiệm</option>
				<option value={0}>Chưa có kinh nghiệm</option>
				<option value={1}>0 - 1 năm kinh nghiệm</option>
				<option value={2}>Hơn 1 năm kinh nghiệm</option>
				<option value={3}>Hơn 2 năm kinh nghiệm</option>
				<option value={4}>Hơn 5 năm kinh nghiệm</option>
				<option value={5}>Hơn 10 năm kinh nghiệm</option>
			</select>
		</div>
	)
}

export default BtnSelectKinhNghiem
