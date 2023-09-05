import React, { useState } from 'react'
import styles from '@styles/home/btnSelect.module.scss'
import Select from 'react-select'
import { ICity } from '@/utils/interface'
import { listCitys } from '@/utils/constants'

const BtnSelect = ({setidCity,idCity }: any) => {
	const [isSelectOpen, setIsSelectOpen] = useState(false)
	const [valueS, setvalueS] = useState<any>()
	const handleSelectClick = () => {
		setIsSelectOpen(!isSelectOpen) // Đảo ngược trạng thái khi click vào Select
	}
	const handleSelectCity = (value: any) => {
		setvalueS(value)
		setidCity(value)
	}
	return (
		<div className={styles['pop']}>
			<select
				onChange={(e) => handleSelectCity(e.target.value)}
				value={valueS?valueS:idCity}
				className={styles['select']}
			>
				<option value="">{'Chọn tỉnh thành'}</option>
				{listCitys?.map((item: ICity, index: number) => {
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

export default BtnSelect
