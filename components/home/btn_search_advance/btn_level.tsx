import React, { useEffect, useState } from 'react'
import styles from '@styles/home/btnSelect.module.scss'
import Select from 'react-select'
import { ICity } from '@/utils/interface'

const BtnSelectLevel = ({ idCity }: any) => {
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
					<option value={0}>Chọn trình độ học vấn</option>
					<option value={-1}>Không yêu cầu</option>
					<option value={7}>Đại học trở lên</option>
					<option value={5}>Cao đẳng trở lên</option>
					<option value={1}>THPT trở lên</option>
					<option value={2}>Trung học trở lên</option>
					<option value={3}>Chứng chỉ</option>
					<option value={4}>Trung cấp trở lên</option>
					<option value={6}>Cử nhân trở lên</option>
					<option value={8}>Thạc sĩ trở lên</option>
					<option value={9}>Thạc sĩ Nghệ thuật</option>
					<option value={10}>Thạc sĩ Thương mại</option>
					<option value={11}>Thạc sĩ Khoa học</option>
					<option value={12}>Thạc sĩ Kiến trúc</option>
					<option value={13}>Thạc sĩ QTKD</option>
					<option value={14}>Thạc sĩ Kỹ thuật ứng dụng</option>
					<option value={15}>Thạc sĩ Luật</option>
					<option value={16}>Thạc sĩ Y học</option>
					<option value={17}>Thạc sĩ Dược phẩm</option>
					<option value={18}>Tiến sĩ</option>
					<option value={19}>Khác</option>
			</select>
		</div>
	)
}

export default BtnSelectLevel
