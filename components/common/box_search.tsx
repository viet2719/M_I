import React, { useEffect, useState } from 'react'
import styles from '@styles/common/box_search.module.scss'
import Image from 'next/image'
import Select from 'react-select'
import BtnSelect from '../home/btn_search_advance/btnSelect'
import Link from 'next/link'
import { listCities, listCitys } from '@/utils/constants'
import BtnSelectQuan from '../home/btn_search_advance/btn_quan_huyen'
import BtnSelectLevel from '../home/btn_search_advance/btn_level'
import BtnSelectSalary from '../home/btn_search_advance/btn_salary'
import BtnSelectSex from '../home/btn_search_advance/btn_sex'
import BtnSelectHinhThuc from '../home/btn_search_advance/btn_hinh_thuc'
import BtnSelectCapBac from '../home/btn_search_advance/btn_cap_bac'
import BtnSelectKinhNghiem from '../home/btn_search_advance/btn_kinh_nghiem'
import BtnSelectDay from '../home/btn_search_advance/btn_ngay_cap_nhat'
import { base_timviec365 } from '../service/functions'
import { ICity } from '@/utils/interface'
import { convertToSlug } from '@/utils/convert'

const Box_search = ({}: any) => {
	// Xử lý show-hide phần tìm kiếm theo tên
	const [valueNameSearch, setValueNameSearch] = useState('')
	const [checkSearchNameCity, setCheckSearchNameCity] = useState<any>(false)
	const [showKeyPhoBien, setshowKeyPhoBien] = useState<boolean>(false)
	// Xử lý tìm kiếm nâng cao
	const [chooseSearchAdvanced, setChooseSearchAdvanced] = useState<any>(false)
	const [listDistrict, setlistDistrict] = useState<any>([])

	const [idCity, setidCity] = useState<any>()
	// Tên thành phố được chọn => c0v
	const name:any = listCities.filter(item=>{return item.cit_id===idCity})
	const handleGetDistrict = async () => {
		try {
			const res = await fetch(`${base_timviec365}/api/getData/district`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ cit_id: idCity }),
			})
			const data = await res.json()
			setlistDistrict(data?.data.data)
		} catch (error) {}
	}
	const handleSelect = (value: any) => {
		setidCity(value)
		setCheckSearchNameCity(true)
	}
	// Sử dụng useEffect để theo dõi thay đổi của idCity
	useEffect(() => {
		if (idCity > 0) {
			handleGetDistrict()
		}
	}, [idCity]) // Thêm idCity vào danh sách dependencies của useEffect
	return (
		<div className={styles.box_m_search} id={styles.search_new_ntd}>
			<div className={styles.new_search}>
				<div className={styles.box_input}>
					<input
						type="text"
						id={styles.fts_id}
						className={styles.enter_ntd}
						placeholder="Nhập tên công việc, vị trí ..."
						onClick={async () => {
							setshowKeyPhoBien(true)
						}}
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
				{showKeyPhoBien && (
					<div className={`${styles.box_key} ${styles.box_show}`} id={styles.box_key}>
						<span
							className={styles.close_bs}
							onClick={() => {
								setValueNameSearch(''), setshowKeyPhoBien(false)
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
									<Link href="#">Nhân viên kinh doanh</Link>
								</span>
								<span>
									<Link href="#">IT phần mềm</Link>
								</span>
								<span>
									<Link href="#">Kế toán - Kiểm toán</Link>
								</span>
								<span>
									<Link href="#">KD bất động sản</Link>
								</span>
								<span>
									<Link href="#">IT Phần cứng - mạng</Link>
								</span>
								<span>
									<Link href="#">Marketing - PR</Link>
								</span>
								<span>
									<Link href="#">Việc làm bán hàng</Link>
								</span>
								<span>
									<Link href="#">Xây dựng</Link>
								</span>
								<span>
									<Link href="#">Tiếp thị - Quảng cáo</Link>
								</span>
								<span>
									<Link href="#">Tư vấn</Link>
								</span>
								<span>
									<Link href="#">Sản xuất - Vận hành sản xuất</Link>
								</span>
								<span>
									<Link href="#">Nhập liệu</Link>
								</span>
								<span>
									<Link href="#">Chăm sóc khách hàng</Link>
								</span>
								<span>
									<Link href="#">Cơ khí - Chế tạo</Link>
								</span>
								<span>
									<Link href="#">Du lịch</Link>
								</span>
								<span>
									<Link href="#">Dịch vụ</Link>
								</span>
								<span>
									<Link href="#">Bưu chính viễn thông</Link>
								</span>
								<span>
									<Link href="#">Phát triển thị trường</Link>
								</span>
								<span>
									<Link href="#">Bảo hiểm</Link>
								</span>
								<span>
									<Link href="#">Quản lý điều hành</Link>
								</span>
								<span>
									<Link href="#">Xuất - nhập khẩu</Link>
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
							// onClick={async () => {
							// 	setCheckSearchNameCity(true)
							// }}
						>
							<Select
								options={listCitys}
								onChange={(value: any) => {
									handleSelect(value?.value)
								}}
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
						<span
							className={styles.selection2}
							onClick={() => {
								setCheckSearchNameCity(true)
							}}
						>
							<Select
								onChange={(value: any) => {
									handleSelect(value?.value)
								}}
								options={listCitys}
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
					<Link href={`/tim-viec-tai-${convertToSlug(name[0]?.cit_name)}-c0v${name[0]?.cit_id}`} className={styles['mobi-bor']}>
						<input type="submit" className={styles.btn_search} value="Tìm kiếm" />
					</Link>
					<Image
						height={40}
						width={40}
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
												<BtnSelect idCity={idCity} setidCity={setidCity} listCitys={listCitys}>
													Chọn tỉnh thành
												</BtnSelect>
												<BtnSelectQuan
													idCity={idCity}
													setlistDistrict={setlistDistrict}
													listDistrict={listDistrict}
												>
													Chọn quận huyện
												</BtnSelectQuan>
												<BtnSelectLevel> Chọn trình độ học vấn</BtnSelectLevel>
												<BtnSelectSex>Chọn giới tính</BtnSelectSex>
												<BtnSelectSalary> Chọn mức lương</BtnSelectSalary>
												<BtnSelectHinhThuc> Chọn hình thức</BtnSelectHinhThuc>
												<BtnSelectCapBac>Chọn cấp bậc</BtnSelectCapBac>
												<BtnSelectKinhNghiem>Chọn kinh nghiệm</BtnSelectKinhNghiem>
												<BtnSelectDay> Chọn ngày cập nhật</BtnSelectDay>
											</div>
											<div className={styles['btn-pop']}>
												<div className={styles['btn-pop-click']}>
													<Link href="#" id="btnsearchadvance">
														Tìm kiếm
													</Link>
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
						<div className={`${styles.nd_box_city}`}>
							<div className={styles.kq_gy}>
								{(listDistrict?.length == 0 || idCity === 0) && (
									<div>
										<p className={styles.text_def}>Địa điểm phổ biến</p>
										<span>
											<Link href="#">
												<strong>Đà Nẵng</strong>
											</Link>
										</span>
										<span>
											<Link href="#">
												<strong>Hồ Chí Minh</strong>
											</Link>
										</span>
										<span>
											<Link href="#">
												<strong>Hà Nội</strong>
											</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Cẩm lệ
											</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Huyện Bình Chánh
											</Link>
										</span>{' '}
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Cầu Giấy
											</Link>
										</span>{' '}
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Hải châu
											</Link>
										</span>{' '}
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Huyện Cần Giờ
											</Link>
										</span>{' '}
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Hai Bà Trưng
											</Link>
										</span>{' '}
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Huyện Hòa Vang
											</Link>
										</span>{' '}
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>Quận 1</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Hoàng Mai
											</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Liên Chiểu
											</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>Quận 2</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Nam Từ Liêm
											</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Ngũ Hành Sơn
											</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>Quận 3</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Thannh Xuân
											</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Thanh Khê
											</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>Quận 7</Link>
										</span>
										<span>
											<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
												Quận Đống Đa
											</Link>
										</span>
									</div>
								)}
								{idCity > 0 &&
									listDistrict?.map((item: ICity, index: number) => {
										return (
											<span key={index}>
												<Link href={`/tag1/viec-lam-tai-huyen-thuan-thanh-bac-ninh-270`}>
													{item.cit_name}
												</Link>
											</span>
										)
									})}
							</div>
							<div className={`${styles.kq_lq} ${styles.solid}`} id={styles.city_lq}>
								<p className={styles.text_def}>Danh sách địa điểm</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Box_search
