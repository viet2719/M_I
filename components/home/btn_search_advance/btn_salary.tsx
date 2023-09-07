import React, { useEffect, useState } from 'react'
import styles from '@styles/home/btnSelect.module.scss'
import Select from 'react-select'
import { ICity } from '@/utils/interface'

const BtnSelectSalary = ({ idCity }: any) => {
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
				  <option value={0}>Chọn mức lương</option>
  <option value={1}>Thỏa thuận</option>
  <option value={2}>1 - 3 triệu</option>
  <option value={3}>3 - 5 triệu</option>
  <option value={4}>5 - 7 triệu</option>
  <option value={5}>7 - 10 triệu</option>
  <option value={6}>10 - 15 triệu</option>
  <option value={7}>15 - 20 triệu</option>
  <option value={8}>20 - 30 triệu</option>
  <option value={9}>Trên 30 triệu</option>
  <option value={10}>Trên 50 triệu</option>
  <option value={11}>Trên 100 triệu</option>
			</select>
		</div>
	)
}

export default BtnSelectSalary
