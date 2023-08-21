import Image from 'next/image'
import React, { useState } from 'react'
import styles from '@styles/before_loggin/home/search_common.module.scss'
import Select from 'react-select'
import BtnSelect from './btnSelect'
// import chroma from 'chroma-js'
const Search_common = () => {
	const search_add = '/images/before_login/ic_show_nc.png'
	const img_voice = '/images/before_login/exp_search_voice.svg'
	const [valueInputName, setValueInputName] = useState('')
	const [toggleSearchName, setToggleSearchName] = useState(false)
	const [toggleSearchCity, setToggleSearchCity] = useState(false)

	const [isSelectVisible, setIsSelectVisible] = useState(false)
	const toggleSelect = () => {
		setIsSelectVisible(!isSelectVisible)
	}
	const initialProvinceData: any[] = [
		{ id: 1, name: 'Miền Bắc' },
		{ id: 2, name: 'Miền Trung' },
		{ id: 3, name: 'Miền Nam' },
		// Thêm các tỉnh thành khác ở đây
	]
	const [provinceData, setProvinceData] = useState<any[]>(initialProvinceData)
	const [filterText, setFilterText] = useState<string>('')
	const [selectedProvince, setSelectedProvince] = useState<any | null>(null)
	const [showHideSelect, setShowHideSelect] = useState<any>()
	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		const searchText = event.target.value
		setFilterText(searchText)
		const filteredProvinces = initialProvinceData.filter((province) =>
			province.name.toLowerCase().includes(searchText.toLowerCase())
		)
		setProvinceData(filteredProvinces)
	}
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
	// Xử lý tìm kiếm nâng cao
	const [chooseSearchAdvanced, setChooseSearchAdvanced] = useState<any>(false)

	return (
		<div className={styles.box_m_search} id={styles.search_new_ntd}>
			<div className={styles.new_search}>
				<div className={styles.box_input}>
					<input
						type="text"
						placeholder="Nhập tên công việc, vị trí ..."
						className={styles.enter_ntd}
						id={styles.fts_id}
						value={valueInputName}
						onChange={(e) => {
							setValueInputName(e.target.value)
							if (e.target.value != '') {
								setToggleSearchName(true)
							} else if (e.target.value == '') {
								setToggleSearchName(false)
							}
						}}
					/>
					<span className={styles.tkiem_giongnoi} id={styles.recordButton}>
						<Image src={img_voice} width={30} height={30} alt="" className={styles.img_voice} />
					</span>
					{toggleSearchName && (
						<div className={`${styles.box_key} ${styles.box_show}`} id={styles.box_key}>
							<span
								className={styles.close_bs}
								onClick={() => {
									setToggleSearchName(false)
								}}
							>
								×
							</span>
							<div className={styles.nd_box_key}>
								<div className={styles.kq_lq} id={styles.key_lq}>
									<p className={styles.text_def}>Tìm kiếm gần đây</p>
									<div className={styles.autocomplete_items}>
										<div>
											<input type="" value={'Nhan vien kinh doanh'} />
										</div>
										<div>
											<input type="" value={'Nhan vien kinh doanh'} />
										</div>
										<div>
											<input type="" value={'Nhan vien kinh doanh'} />
										</div>
									</div>
								</div>
								<div className={`${styles.kq_lq} ${styles.solid}`}>
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
				</div>
				<div className={`${styles.box_input} `}>
					<span
						className={`${styles.select2} ${styles.select2_container} ${styles.select2_container__default}`}
						dir="ltr"
					>
						<span
							className="selection"
							onClick={() => {
								setShowHideSelect(!showHideSelect)
							}}
						>
							<span className={`${styles.select2_selection} ${styles.select2_selection__single} `}>
								<Select
									id="city_search"
									className="city_search"
									options={cityOptions}
									placeholder="Chọn thành phố"
									styles={{
										indicatorsContainer: (baseStyles, state) => ({
											...baseStyles,
											display: 'none',
										}),
										input: (baseStyles, state) => ({
											...baseStyles,
											paddingLeft: '48px',
										}),
										placeholder: (baseStyles, state) => ({
											...baseStyles,
											paddingLeft: '50px',
											fontSize: '16px',
										}),
										singleValue: (baseStyles, state) => ({
											...baseStyles,
											paddingLeft: '50px',
											fontSize: '16px',
										}),

										control: (baseStyles, state) => ({
											...baseStyles,
											borderTopLeftRadius: '40px',
											borderTopRightRadius: '0px',
											borderBottomRightRadius: '0px',
											borderBottomLeftRadius: '40px',
											height: '65px',
											lineHeight: '36px',
											border: 'none',
											outline: 'none',
										}),
										option: (baseStyles, state) => ({
											...baseStyles,
											padding: '0 8px',
										}),
									}}
									onMenuOpen={handleSelectClick} // Gọi hàm khi mở dropdown
									onMenuClose={handleSelectClick} // Gọi hàm khi đóng dropdown
									menuIsOpen={isSelectOpen} // Trạng thái để kiểm soát việc mở/closed dropdown
								/>
								<span className={styles.select2_selection__arrow}>
									<b role="presentation"></b>
								</span>
							</span>
							{/* Tablet */}
							<span className={`${styles.select2_selection} ${styles.select2_selection__single2} `}>
								<Select
									id="city_search"
									className={styles.city_search}
									options={cityOptions}
									placeholder="Chọn thành phố"
									styles={{
										indicatorsContainer: (baseStyles, state) => ({
											...baseStyles,
											display: 'none',
										}),
										input: (baseStyles, state) => ({
											...baseStyles,
											paddingLeft: '28px',
											lineHeight: '30px',
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
											borderRadius: '40px',
											height: '28px',
											lineHeight: '30px',
											width: '480px',
											border: 'none',
											outline: 'none',
											boxShadow: 'none',
										}),
										option: (baseStyles, state) => ({
											...baseStyles,
											padding: '0 8px',
										}),
									}}
									onMenuOpen={handleSelectClick}
									onMenuClose={handleSelectClick}
									menuIsOpen={isSelectOpen}
								/>
								<span className={styles.select2_selection__arrow}>
									<b role="presentation"></b>
								</span>
							</span>
							{/* Mobile */}
							<span className={`${styles.select2_selection} ${styles.select2_selection__single3} `}>
								<Select
									id="city_search"
									className={styles.city_search}
									options={cityOptions}
									placeholder="Chọn thành phố"
									styles={{
										indicatorsContainer: (baseStyles, state) => ({
											...baseStyles,
											display: 'none',
										}),
										input: (baseStyles, state) => ({
											...baseStyles,
											paddingLeft: '28px',
											lineHeight: '30px',
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
											borderRadius: '40px',
											height: '28px',
											lineHeight: '30px',
											width: '240px',
											border: 'none',
											outline: 'none',
											boxShadow: 'none',
										}),
										option: (baseStyles, state) => ({
											...baseStyles,
											padding: '0 8px',
										}),
									}}
									onMenuOpen={handleSelectClick}
									onMenuClose={handleSelectClick}
									menuIsOpen={isSelectOpen}
								/>
								<span className={styles.select2_selection__arrow}>
									<b role="presentation"></b>
								</span>
							</span>
						</span>
						<span className="dropdown-wrapper" aria-hidden="true"></span>
						{/* <span>
							{showHideSelect && (
								<span className={`${styles.select2_dropdown} ${styles.select2_dropdown__below}`}>
									<span className={`${styles.select2_search} ${styles.select2_search__dropdown}`}>
										<input
											type="text"
											className={styles.select2_search__field}
											value={filterText}
											onChange={handleFilterChange}
										/>
									</span>
									<span className={styles.select2_results}>
										<ul
											className={styles.select2_results__options}
											id={styles.select2_index_dia_diem_results}
										>
											{provinceData.map((province, index) => {
												return (
													<li
														key={index}
														className={styles.select2_results__option}
														id={styles.select2_index_dia_diem_result_3dts_14}
														onClick={() => {
															setShowHideSelect(false)
															setSelectedProvince(province.name)
															setFilterText('')
															setProvinceData(initialProvinceData)
														}}
													>
														{province.name}
													</li>
												)
											})}
										</ul>
									</span>
								</span>
							)}
						</span> */}
					</span>
					<div className={styles.mobi_bor}>
						<input
							type="submit"
							className={styles.btn_search}
							value="Tìm kiếm"
							onClick={toggleSelect}
						/>
					</div>

					<Image
						src={search_add}
						width={40}
						height={40}
						alt="Tìm kiếm nâng cao"
						className={styles.show_nc}
						onClick={() => {
							setChooseSearchAdvanced(true)
						}}
					/>
					{toggleSearchCity && (
						<div className={`${styles.box_city} ${styles.box_show}`} id={styles.box_city}>
							<span className={styles.close_bs}>×</span>
							<div className={styles.nd_box_city}>
								<div className={styles.kq_gy}>
									<p className={styles.text_def}>Địa điểm phổ biến</p>
									<span>
										<a>
											<strong>Đà Nẵng</strong>
										</a>
									</span>
									<span>
										<a>
											<strong>Hồ Chí Minh</strong>
										</a>
									</span>
									<span>
										<a>
											<strong>Hà Nội</strong>
										</a>
									</span>
									<span>
										<a>Quận Cẩm Lệ</a>
									</span>
									<span>
										<a>Huyện Bình Chánh</a>
									</span>
									<span>
										<a>Quận Cầu Giấy</a>
									</span>
									<span>
										<a>Quận Hải Châu</a>
									</span>
									<span>
										<a>Huyện Cần Giờ</a>
									</span>
									<span>
										<a>Quận Hai Bà Trưng</a>
									</span>
									<span>
										<a>Huyện Hòa Vang</a>
									</span>
									<span>
										<a>Quận 1</a>
									</span>
									<span>
										<a>Quận Hoàng Mai</a>
									</span>
									<span>
										<a>Quận Liên Chiểu</a>
									</span>
									<span>
										<a>Quận 2</a>
									</span>
									<span>
										<a>Quận Nam Từ Liêm</a>
									</span>
									<span>
										<a>Quận Ngũ Hành Sơn</a>
									</span>
									<span>
										<a>Quận 3</a>
									</span>
									<span>
										<a>Quận Thanh Xuân</a>
									</span>
									<span>
										<a>Quận Thanh Khê</a>
									</span>
									<span>
										<a>Quận 7</a>
									</span>
									<span>
										<a>Quận Đống Đa</a>
									</span>
								</div>
								<div className={`${styles.kq_lq} ${styles.solid}`} id={styles.city_lq}>
									<p className={styles.text_def2}>Danh sách địa điểm</p>
								</div>
							</div>
						</div>
					)}
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
			</div>
		</div>
	)
}

export default Search_common
