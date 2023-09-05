import React, { useEffect, useState } from 'react'
import styles from '@styles/home/btnSelect.module.scss'
import Select from 'react-select'
import { ICity } from '@/utils/interface'

const BtnSelectCapBac = ({ idCity }: any) => {
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
				<option value={0}>Chọn cấp bậc</option>
				<option value={1}>Mới tốt nghiệp</option>
				<option value={6}>Thực tập sinh</option>
				<option value={3}>Nhân viên</option>
				<option value={5}>Trưởng nhóm</option>
				<option value={10}>Phó tổ trưởng</option>
				<option value={11}>Tổ trưởng</option>
				<option value={7}>Phó trưởng phòng</option>
				<option value={2}>Trưởng phòng</option>
				<option value={12}>Phó giám đốc</option>
				<option value={4}>Giám đốc</option>
				<option value={13}>Phó tổng giám đốc</option>
				<option value={14}>Tổng giám đốc</option>
				<option value={8}>Quản lý cấp trung</option>
				<option value={9}>Quản lý cấp cao</option>
			</select>
		</div>
	)
}

export default BtnSelectCapBac
