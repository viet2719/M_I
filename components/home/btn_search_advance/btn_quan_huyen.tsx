import React, { useEffect, useState } from 'react'
import styles from '@styles/home/btnSelect.module.scss'
import Select from 'react-select'
import { ICity } from '@/utils/interface'
import { base_timviec365 } from '@/components/service/functions'

const BtnSelectQuan = ({ idCity, listDistrict }: any) => {
	const [isSelectOpen, setIsSelectOpen] = useState(false)
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
				<option value="">{'Chọn quận huyện'}</option>
				{listDistrict?.map((item: ICity, index: number) => {
					return (
						<option key={index} value={item?.cit_id}>
							{item?.cit_name}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default BtnSelectQuan
