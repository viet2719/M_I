import React from 'react'
import styles from '@styles/home/home.module.scss'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import {
	listCitys,
	listCitysMobile,
	listKinhNghiemMobile,
	listNganhNgheMobile,
	listSlectMucLuong,
} from '@/utils/constants'
import { base_timviec365 } from '../service/functions'

type Props = {
	idLocation: number
	nameCity: string
	selectLeft: number
	setSelectedId: any
	selectedId: any
	setCate_id: any
}

const Filter_right_AI365_Mobile = ({
	idLocation,
	nameCity,
	selectLeft,
	setSelectedId,
	selectedId,
	setCate_id,
}: Props) => {
	const [listDistrict, setlistDistrict] = useState<any[]>([])
	const [idNganhNgheChangeColor, setidNganhNgheChangeColor] = useState<number>()
	const handleChangeOption = (itemId: any) => {
		if (itemId == 0) {
			setSelectedId(Math.floor(Math.random() * 35))
		} else {
			setSelectedId(itemId)
		}
	}
	const listDistrichMobile = listDistrict?.map((item) => {
		return {
			label: item.cit_name,
			value: item.cit_id,
		}
	})
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
		}
	}, [idLocation])

	return (
		<div className={styles.filter_right_select}>
			<span
				className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
				dir="ltr"
			>
				<span className={`${styles.selection}`}>
					<span
						className={`${styles.select2_selection} ${styles.select2_selection_single} ${styles.addr}`}
					>
						{!idLocation && selectLeft == 0 && (
							<Select
								id="city_search"
								onChange={(value: any) => handleChangeOption(value.cit_id)}
								className={styles.city_search}
								options={listCitysMobile}
								placeholder={listCitysMobile[0]?.value}
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										outline: 'none',
										border: 'none',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										height: '100%',
										fontSize: '16px',
										color: '#474747',
										lineHeight: '28px',
										fontWeight: 600,
									}),

									control: (baseStyles, state) => ({
										...baseStyles,
										margin: '0',
										height: '30px',
										lineHeight: '22px',
										minHeight: '25px',
										border: 'none',
										outline: 'none',
										boxShadow: 'none',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '0 8px',
									}),
								}}
							/>
						)}
						{!idLocation && selectLeft == 1 && (
							<Select
								id="city_search"
								className={styles.city_search}
								options={listSlectMucLuong}
								placeholder={listSlectMucLuong[0]?.value}
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										outline: 'none',
										border: 'none',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										height: '100%',
										fontSize: '16px',
										color: '#474747',
										lineHeight: '28px',
										fontWeight: 600,
									}),

									control: (baseStyles, state) => ({
										...baseStyles,
										margin: '0',
										height: '30px',
										lineHeight: '22px',
										minHeight: '25px',
										border: 'none',
										outline: 'none',
										boxShadow: 'none',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '0 8px',
									}),
								}}
							/>
						)}
						{!idLocation && selectLeft == 2 && (
							<Select
								id="city_search"
								className={styles.city_search}
								options={listKinhNghiemMobile}
								placeholder={listKinhNghiemMobile[0]?.value}
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										outline: 'none',
										border: 'none',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										height: '100%',
										fontSize: '16px',
										color: '#474747',
										lineHeight: '28px',
										fontWeight: 600,
									}),

									control: (baseStyles, state) => ({
										...baseStyles,
										margin: '0',
										height: '30px',
										lineHeight: '22px',
										minHeight: '25px',
										border: 'none',
										outline: 'none',
										boxShadow: 'none',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '0 8px',
									}),
								}}
							/>
						)}
						{!idLocation && selectLeft == 3 && (
							<Select
								id="city_search"
								onChange={(value: any) => {
									setCate_id(value?.value), setSelectedId(0)
								}}
								className={styles.city_search}
								options={listNganhNgheMobile}
								placeholder={listNganhNgheMobile[0]?.label}
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										outline: 'none',
										border: 'none',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										height: '100%',
										fontSize: '16px',
										color: '#474747',
										lineHeight: '28px',
										fontWeight: 600,
									}),

									control: (baseStyles, state) => ({
										...baseStyles,
										margin: '0',
										height: '30px',
										lineHeight: '22px',
										minHeight: '25px',
										border: 'none',
										outline: 'none',
										boxShadow: 'none',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '0 8px',
									}),
								}}
							/>
						)}
						{/* Bật vị trí */}
						{idLocation && selectLeft == 0 && (
							<Select
								id="city_search"
								onChange={(value: any) => handleChangeOption(value.value)}
								className={styles.city_search}
								options={listDistrichMobile}
								placeholder={listDistrichMobile[0]?.label}
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										outline: 'none',
										border: 'none',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										height: '100%',
										fontSize: '16px',
										color: '#474747',
										lineHeight: '28px',
										fontWeight: 600,
									}),

									control: (baseStyles, state) => ({
										...baseStyles,
										margin: '0',
										height: '30px',
										lineHeight: '22px',
										minHeight: '25px',
										border: 'none',
										outline: 'none',
										boxShadow: 'none',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '0 8px',
									}),
								}}
							/>
						)}
						{idLocation && selectLeft == 1 && (
							<Select
								id="city_search"
								className={styles.city_search}
								options={listSlectMucLuong}
								placeholder={listSlectMucLuong[0]?.value}
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										outline: 'none',
										border: 'none',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										height: '100%',
										fontSize: '16px',
										color: '#474747',
										lineHeight: '28px',
										fontWeight: 600,
									}),

									control: (baseStyles, state) => ({
										...baseStyles,
										margin: '0',
										height: '30px',
										lineHeight: '22px',
										minHeight: '25px',
										border: 'none',
										outline: 'none',
										boxShadow: 'none',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '0 8px',
									}),
								}}
							/>
						)}
						{idLocation && selectLeft == 2 && (
							<Select
								id="city_search"
								className={styles.city_search}
								options={listKinhNghiemMobile}
								placeholder={listKinhNghiemMobile[0]?.value}
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										outline: 'none',
										border: 'none',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										height: '100%',
										fontSize: '16px',
										color: '#474747',
										lineHeight: '28px',
										fontWeight: 600,
									}),

									control: (baseStyles, state) => ({
										...baseStyles,
										margin: '0',
										height: '30px',
										lineHeight: '22px',
										minHeight: '25px',
										border: 'none',
										outline: 'none',
										boxShadow: 'none',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '0 8px',
									}),
								}}
							/>
						)}
						{idLocation && selectLeft == 3 && (
							<Select
								id="city_search"
								onChange={(value: any) => {
									setCate_id(value?.value), setSelectedId(0)
								}}
								className={styles.city_search}
								options={listNganhNgheMobile}
								placeholder={listNganhNgheMobile[0]?.label}
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										outline: 'none',
										border: 'none',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										height: '100%',
										fontSize: '16px',
										color: '#474747',
										lineHeight: '28px',
										fontWeight: 600,
									}),

									control: (baseStyles, state) => ({
										...baseStyles,
										margin: '0',
										height: '30px',
										lineHeight: '22px',
										minHeight: '25px',
										border: 'none',
										outline: 'none',
										boxShadow: 'none',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '0 8px',
									}),
								}}
							/>
						)}

						<span className={`${styles.select2_selection__arrow}`} role="presentation">
							<b role="presentation" />
						</span>
					</span>
				</span>
				<span className={`${styles.dropdown_wrapper}`} aria-hidden="true" />
			</span>
		</div>
	)
}
export default Filter_right_AI365_Mobile
