import React, { useState } from 'react'
import styles from '@styles/common/Box_search_details.module.scss'
import Image from 'next/image'
import Select from 'react-select'
import BtnSelect from '../home/btnSelect'

const Box_search_details = () => {
	const cityOptions = [
		{ value: 'hanoi', label: 'Hà Nội' },
		{ value: 'hochiminh', label: 'TP. Hồ Chí Minh' },
		{ value: 'danang', label: 'Đà Nẵng' },
		{ value: 'hue', label: 'Huế' },
	]
	// Xử lý show-hide phần tìm kiếm theo tên
	const [valueNameSearch, setValueNameSearch] = useState('')
	const [checkSearchNameCity, setCheckSearchNameCity] = useState<any>(false)

	// Xử lý tìm kiếm nâng cao
	const [chooseSearchAdvanced, setChooseSearchAdvanced] = useState<any>(false)
	return (
		<div className={styles.box_m_search} id={styles.search_new_ntd}>
			<div className={styles.new_search}>
				<div className={styles.box_input}>
					<input
						type="text"
						id={styles.fts_id}
						style={{height:50,top:20}}
						className={styles.enter_ntd}
						placeholder="Nhập tên công việc, vị trí ..."
						onChange={(e) => {
							setValueNameSearch(e.target.value)
						}}
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
				{valueNameSearch && (
					<div className={`${styles.box_key} ${styles.box_show}`} id={styles.box_key}>
						<span
							className={styles.close_bs}
							onClick={() => {
								setValueNameSearch('')
							}}
						>
							×
						</span>
						<div className={styles.nd_box_key}>
							<div className={styles.kq_lq} id={styles.key_lq}>
								<p className={styles.text_def}>Tìm kiếm gần đây</p>
								<div className={styles.autocomplete_items}>
									<div>
										Kế toán - Kiểm toán
										<input type="hidden" value="Kế toán - Kiểm toán" />
									</div>
									<div>
										Kế toán - Kiểm toán
										<input type="hidden" value="Kế toán - Kiểm toán" />
									</div>
									<div>
										Kế toán - Kiểm toán
										<input type="hidden" value="Kế toán - Kiểm toán" />
									</div>
								</div>
							</div>
							<div className={`${styles.kq_gy} ${styles.solid}`}>
								<p className={styles.text_def}>Từ khóa phổ biến</p>
								<span>
									<a>Nhân viên kinh doanh</a>
								</span>
								<span>
									<a>IT phần mềm</a>
								</span>
								<span>
									<a>Kế toán - Kiểm toán</a>
								</span>
								<span>
									<a>KD bất động sản</a>
								</span>
								<span>
									<a>IT Phần cứng - mạng</a>
								</span>
								<span>
									<a>Marketing - PR</a>
								</span>
								<span>
									<a>Việc làm bán hàng</a>
								</span>
								<span>
									<a>Xây dựng</a>
								</span>
								<span>
									<a>Tiếp thị - Quảng cáo</a>
								</span>
								<span>
									<a>Tư vấn</a>
								</span>
								<span>
									<a>Sản xuất - Vận hành sản xuất</a>
								</span>
								<span>
									<a>Nhập liệu</a>
								</span>
								<span>
									<a>Chăm sóc khách hàng</a>
								</span>
								<span>
									<a>Cơ khí - Chế tạo</a>
								</span>
								<span>
									<a>Du lịch</a>
								</span>
								<span>
									<a>Dịch vụ</a>
								</span>
								<span>
									<a>Bưu chính viễn thông</a>
								</span>
								<span>
									<a>Phát triển thị trường</a>
								</span>
								<span>
									<a>Bảo hiểm</a>
								</span>
								<span>
									<a>Quản lý điều hành</a>
								</span>
								<span>
									<a>Xuất - nhập khẩu</a>
								</span>
							</div>
						</div>
					</div>
				)}
				<div className={styles.box_input}>
					<span
						className={`${styles.select2} ${styles['select2-container']} ${styles['select2-container--default']}`}
						style={{ width: 131 }}
					>
						<span
							className={styles.selection1}
							onClick={() => {
								setCheckSearchNameCity(true)
							}}
						>
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
										top: '8px',
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
										height: '50px',
										lineHeight: '36px',
									}),
									option: (baseStyles, state) => ({
										...baseStyles,
										padding: '8px 12px',
									}),
								}}
							/>
						</span>
						<span
							className={styles.selection2}
							onClick={() => {
								setCheckSearchNameCity(true)
							}}
						>
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
					<div className={styles['mobi-bor']} style={{height:50}}>
						<input style={{height:50}} type="submit" className={styles.btn_search} value="Tìm kiếm" />
					</div>
					<Image
						height={40}
						width={40}
						style={{marginTop:10}}
						className={`${styles.show_nc} ${styles.nangcao}`}
						src="/images/before_login/ic_show_nc.png"
						alt="Tìm kiếm nâng cao"
						onClick={() => {
							setChooseSearchAdvanced(true)
						}}
					/>

					{chooseSearchAdvanced && (
						<>
							<div
								className={`${styles['pop-nangcao']} ${styles['search_nc_th']}`}
								style={{ display: 'block' }}
							>
								<div className={styles['pop-bor']}>
									<div className={styles['from-pop']}>
										<div className={styles['title-pop']}>
											<p>Tìm kiếm nâng cao</p>
											<i
												className={styles['close']}
												onClick={() => {
													setChooseSearchAdvanced(false)
												}}
											>
												✘
											</i>
										</div>
										<div className={styles['nd-pop']}>
											<div className={styles['pop-cod']}>
												<div className={styles['ip_search_nc']}>
													<input
														type="text"
														name="key_th"
														className={styles['key_th']}
														placeholder="Tìm kiếm theo tên nhà tuyển dụng..."
													/>
												</div>
											</div>
											<div className={styles['pop-cod']}>
												<BtnSelect>Chọn tỉnh thành</BtnSelect>
												<BtnSelect>Chọn quận huyện</BtnSelect>
												<BtnSelect> Chọn trình độ học vấn</BtnSelect>
												<BtnSelect>Chọn giới tính</BtnSelect>
												<BtnSelect> Chọn mức lương</BtnSelect>
												<BtnSelect> Chọn hình thức</BtnSelect>
												<BtnSelect>Chọn cấp bậc</BtnSelect>
												<BtnSelect>Chọn kinh nghiệm</BtnSelect>
												<BtnSelect> Chọn ngày cập nhật</BtnSelect>
											</div>
											<div className={styles['btn-pop']}>
												<div className={styles['btn-pop-click']}>
													<a id="btnsearchadvance">Tìm kiếm</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
				{checkSearchNameCity && (
					<div
						className={`${styles.box_city} ${styles.box_show}`}
						id={styles.box_city}
						style={{ display: 'block' }}
					>
						<span
							className={styles.close_bs}
							onClick={() => {
								setCheckSearchNameCity(false)
							}}
						>
							×
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default Box_search_details
