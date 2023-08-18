import Image from 'next/image'
import React, { useState } from 'react'
import styles from './search_common.module.scss'
import Select from 'react-select'
// import chroma from 'chroma-js'
const Search_common = () => {
	const search_add = 'https://timviec365.vn/images/New_images/ic_show_nc.png'
	const img_voice = 'https://timviec365.vn/images/img_new/exp_search_voice.svg'
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
							<span className={styles.close_bs}>×</span>
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
					<select
						id={styles.index_dia_diem}
						className={`${styles.city_ab} ${styles.select2_hidden_accessible}`}
						// tabIndex="-1"
						aria-hidden="true"
					>
						<option value="0">Chọn tỉnh thành</option>
						<option value="1000">Miền Bắc</option>
						<option value="1001">Miền Trung</option>
						<option value="1002">Miền Nam</option>
						<option value="45">Hồ Chí Minh</option>
						<option value="1">Hà Nội</option>
						<option value="46">Bình Dương</option>
						<option value="26">Đà Nẵng</option>
						<option value="55">Đồng Nai</option>
						<option value="48">Cần Thơ</option>
						<option value="5">Bắc Ninh</option>
						<option value="2">Hải Phòng</option>
						<option value="12">Hưng Yên</option>
						<option value="9">Hải Dương</option>
						<option value="44">Thanh Hóa</option>
						<option value="28">Khánh Hòa</option>
						<option value="58">Long An</option>
						<option value="47">Bà Rịa Vũng Tàu</option>
						<option value="41">Quảng Nam</option>
						<option value="37">Nghệ An</option>
						<option value="24">Vĩnh Phúc</option>
						<option value="49">An Giang</option>
						<option value="42">Quảng Ngãi</option>
						<option value="27">Thừa Thiên Huế</option>
						<option value="3">Bắc Giang</option>
						<option value="30">Bình Định</option>
						<option value="17">Nam Định</option>
						<option value="57">Kiên Giang</option>
						<option value="11">Hà Nam</option>
						<option value="22">Thái Nguyên</option>
						<option value="21">Thái Bình</option>
						<option value="63">Vĩnh Long</option>
						<option value="29">Lâm Đồng</option>
						<option value="19">Quảng Ninh</option>
						<option value="54">Đồng Tháp</option>
						<option value="32">Đắk Lắk</option>
						<option value="60">Tiền Giang</option>
						<option value="61">Tây Ninh</option>
						<option value="16">Ninh Bình</option>
						<option value="39">Phú Yên</option>
						<option value="53">Cà Mau</option>
						<option value="59">Sóc Trăng</option>
						<option value="31">Bình Thuận</option>
						<option value="52">Bến Tre</option>
						<option value="18">Phú Thọ</option>
						<option value="35">Hà Tĩnh</option>
						<option value="34">Gia Lai</option>
						<option value="56">Hậu Giang</option>
						<option value="51">Bình Phước</option>
						<option value="43">Quảng Trị</option>
						<option value="50">Bạc Liêu</option>
						<option value="62">Trà Vinh</option>
						<option value="40">Quảng Bình</option>
						<option value="38">Ninh Thuận</option>
						<option value="8">Hòa Bình</option>
						<option value="13">Lào Cai</option>
						<option value="33">Đắk Nông</option>
						<option value="36">Kon Tum</option>
						<option value="15">Lạng Sơn</option>
						<option value="23">Tuyên Quang</option>
						<option value="20">Sơn La</option>
						<option value="25">Yên Bái</option>
						<option value="4">Bắc Kạn</option>
						<option value="10">Hà Giang</option>
						<option value="6">Cao Bằng</option>
						<option value="7">Điện Biên</option>
						<option value="14">Lai Châu</option>
					</select>
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
							<span
								className={`${styles.select2_selection} ${styles.select2_selection__single} `}
								aria-haspopup="true"
								aria-expanded="false"
								aria-labelledby="select2-index_dia_diem-container"
							>
								<span
									className={styles.select2_selection__rendered}
									id="select2-index_dia_diem-container"
									title="Chọn tỉnh thành"
								>
									{selectedProvince ? selectedProvince : 'Chọn tỉnh thành'}
								</span>
								<span className={styles.select2_selection__arrow}>
									<b role="presentation"></b>
								</span>
							</span>
						</span>
						<span className="dropdown-wrapper" aria-hidden="true"></span>
						<span>
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
						</span>
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
				</div>
			</div>
		</div>
	)
}

export default Search_common
