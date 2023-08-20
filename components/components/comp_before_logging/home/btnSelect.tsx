import React, { useState } from 'react'
import styles from '../../../../styles/before_loggin/home/btnSelect.module.scss'
import Select from 'react-select'

const BtnSelect = ({ children }: any) => {
	const cityOptions = [
		{ value: 'hanoi', label: 'Hà Nội' },
		{ value: 'hochiminh', label: 'TP. Hồ Chí Minh' },
		{ value: 'danang', label: 'Đà Nẵng' },
		{ value: 'hue', label: 'Huế' },
	]
	const [isSelectOpen, setIsSelectOpen] = useState(false)
	const handleSelectClick = () => {
		setIsSelectOpen(!isSelectOpen) // Đảo ngược trạng thái khi click vào Select
	}
	return (
		<div className={styles['pop']}>
			<select className={styles['select']}>
				<option value="">{children}</option>
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

export default BtnSelect
