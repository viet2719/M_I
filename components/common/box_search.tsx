import React from 'react'
import styles from '@styles/common/box_search.module.scss'
import Image from 'next/image'
import Select from 'react-select'

const Box_search = () => {
	const cityOptions = [
		{ value: 'hanoi', label: 'Hà Nội' },
		{ value: 'hochiminh', label: 'TP. Hồ Chí Minh' },
		{ value: 'danang', label: 'Đà Nẵng' },
		{ value: 'hue', label: 'Huế' },
	]
	return (
		<div className={styles.box_m_search} id={styles.search_new_ntd}>
			<div className={styles.new_search}>
				<div className={styles.box_input}>
					<input
						type="text"
						id={styles.fts_id}
						className={styles.enter_ntd}
						placeholder="Nhập tên công việc, vị trí ..."
					/>
					<span className={styles.tkiem_giongnoi} id={styles.recordButton}>
						<Image
							width={24}
							height={24}
							src="/images/before_login/exp_search_voice.svg"
							alt="Voice Search"
						/>
					</span>
				</div>
				<div className={styles.box_input}>
					<span
						className={`${styles.select2} ${styles['select2-container']} ${styles['select2-container--default']}`}
						style={{ width: 131 }}
					>
						<span className={styles.selection1}>
							<Select
								options={cityOptions}
								placeholder="Chọn thành phố"
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									valueContainer: (provided, state) => ({
										...provided,
										left: '12px',
										top: '12px',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										paddingLeft: '28px',
										lineHeight: '30px',
										fontSize: '16px',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										paddingLeft: '30px',
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										paddingLeft: '30px',
										fontSize: '16px',
									}),
									control: (baseStyles, state) => ({
										...baseStyles,
										backgroundColor: '#fff',
										border: 'none',
										borderRadius: '0',
										borderTopLeftRadius: '40px',
										borderTopRightRadius: '0px',
										borderBottomRightRadius: '0px',
										borderBottomLeftRadius: '40px',
										borderLeft: '1px solid #4c5bd4',
										boxSizing: 'border-box',
										cursor: 'pointer',
										display: 'block',
										height: '65px',
										lineHeight: '36px',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '8px 12px',
									}),
								}}
							/>
						</span>
						<span className={styles.selection2}>
							<Select
								options={cityOptions}
								placeholder="Chọn thành phố"
								styles={{
									indicatorsContainer: (baseStyles, state) => ({
										...baseStyles,
										display: 'none',
									}),
									valueContainer: (provided, state) => ({
										...provided,
										left: '4px',
										top: '0px',
									}),
									input: (baseStyles, state) => ({
										...baseStyles,
										paddingLeft: '28px',
										lineHeight: '30px',
										fontSize: '16px',
									}),
									placeholder: (baseStyles, state) => ({
										...baseStyles,
										paddingLeft: '30px',
										fontSize: '16px',
									}),
									singleValue: (baseStyles, state) => ({
										...baseStyles,
										paddingLeft: '30px',
										fontSize: '16px',
									}),
									control: (baseStyles, state) => ({
										...baseStyles,
										backgroundColor: '#fff',
										border: 'none',
										borderRadius: '40px',
										borderLeft: '1px solid #4c5bd4',
										boxSizing: 'border-box',
										cursor: 'pointer',
										display: 'block',
										height: '40px',
										lineHeight: '36px',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '8px 12px',
									}),
								}}
							/>
						</span>
					</span>
					<div className={styles['mobi-bor']}>
						<input type="submit" className={styles.btn_search} value="Tìm kiếm" />
					</div>
					<Image
						height={40}
						width={40}
						className={`${styles.show_nc} ${styles.nangcao}`}
						src="/images/before_login/ic_show_nc.png"
						alt="Tìm kiếm nâng cao"
					/>
				</div>
			</div>
		</div>
	)
}

export default Box_search
