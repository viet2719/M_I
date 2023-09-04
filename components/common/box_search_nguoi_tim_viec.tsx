import React, { useState } from 'react'
import styles from '@/styles/common/box_search_tim_viec.module.scss'
import Image from 'next/image'
import Select from 'react-select'
import BtnSelect from '../home/btnSelect'
import Link from 'next/link'
import { cityOption, jobsOptions } from '@/utils/constants'

const Box_search_nguoi_tim_viec = () => {

	// Xử lý show-hide phần tìm kiếm theo tên
	const [valueNameSearch, setValueNameSearch] = useState<string>('')
	const [checkSearchNameCity, setCheckSearchNameCity] = useState<boolean>(false)

	// Xử lý tìm kiếm nâng cao
	const [chooseSearchAdvanced, setChooseSearchAdvanced] = useState<boolean>(false)
	return (
		<div className={styles.box_m_search} id={styles.search_new_ntd}>
			<div className={styles.new_search}>
				<div className={styles.box_input}>
					<input
						type="text"
						id={styles.fts_id}
						style={{ height: 50, top: 20 }}
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
									<Link href={'#'}>Nhân viên kinh doanh</Link>
								</span>
								<span>
									<Link href={'#'}>IT phần mềm</Link>
								</span>
								<span>
									<Link href={'#'}>Kế toán - Kiểm toán</Link>
								</span>
								<span>
									<Link href={'#'}>KD bất động sản</Link>
								</span>
								<span>
									<Link href={'#'}>IT Phần cứng - mạng</Link>
								</span>
								<span>
									<Link href={'#'}>Marketing - PR</Link>
								</span>
								<span>
									<Link href={'#'}>Việc làm bán hàng</Link>
								</span>
								<span>
									<Link href={'#'}>Xây dựng</Link>
								</span>
								<span>
									<Link href={'#'}>Tiếp thị - Quảng cáo</Link>
								</span>
								<span>
									<Link href={'#'}>Tư vấn</Link>
								</span>
								<span>
									<Link href={'#'}>Sản xuất - Vận hành sản xuất</Link>
								</span>
								<span>
									<Link href={'#'}>Nhập liệu</Link>
								</span>
								<span>
									<Link href={'#'}>Chăm sóc khách hàng</Link>
								</span>
								<span>
									<Link href={'#'}>Cơ khí - Chế tạo</Link>
								</span>
								<span>
									<Link href={'#'}>Du lịch</Link>
								</span>
								<span>
									<Link href={'#'}>Dịch vụ</Link>
								</span>
								<span>
									<Link href={'#'}>Bưu chính viễn thông</Link>
								</span>
								<span>
									<Link href={'#'}>Phát triển thị trường</Link>
								</span>
								<span>
									<Link href={'#'}>Bảo hiểm</Link>
								</span>
								<span>
									<Link href={'#'}>Quản lý điều hành</Link>
								</span>
								<span>
									<Link href={'#'}>Xuất - nhập khẩu</Link>
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
                        <div style={{display:"flex"}}>
                        <span
							className={styles.selection1}
							onClick={() => {
								setCheckSearchNameCity(true)
							}}
						>
							<Select
								options={jobsOptions}
								placeholder="Ngành nghề"
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
							className={styles.selection1}
							onClick={() => {
								setCheckSearchNameCity(true)
							}}
                            style={{width:"50%"}}
						>
							<Select
								options={cityOption}
								placeholder="Tỉnh thành"
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
										borderTopRightRadius: '0px',
										borderBottomRightRadius: '0px',
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
                        </div>
				
						<span
							className={styles.selection2}
							onClick={() => {
								setCheckSearchNameCity(true)
							}}
						>
							<Select
								options={jobsOptions}
								placeholder="Ngành nghề"
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
						<span
							style={{ paddingTop: 20 }}
							className={styles.selection2}
							onClick={() => {
								setCheckSearchNameCity(true)
							}}
						>
							<Select
								options={cityOption}
								placeholder="Tỉnh thành"
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
					<div className={styles['mobi-bor']} style={{ height: 50 }}>
						<input
							style={{ height: 50 }}
							type="submit"
							className={styles.btn_search}
							value="Tìm kiếm"
						/>
					</div>
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
													<Link href={'#'} id="btnsearchadvance">
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
					</div>
				)}
			</div>
		</div>
	)
}

export default Box_search_nguoi_tim_viec
