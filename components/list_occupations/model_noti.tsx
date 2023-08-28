import React, { useState } from 'react'
import styles from '@styles/list_occupations/model_noti.module.scss'
import Image from 'next/image'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/reducers'
import { closeModal } from '@/actions/actions'
const Model_noti = () => {
	const [inputValue, setInputValue] = useState('')
	const [isValidSDT_Email, setIsValidSDT_Email] = useState(true)

	const handleInputChange = (event: any) => {
		const value = event.target.value
		setInputValue(value)
		const phoneNumberPattern = /^(0[1-9][0-9]{8,9})$/
		if (validator.isEmail(value) || phoneNumberPattern.test(value)) {
			setIsValidSDT_Email(true)
		} else {
			setIsValidSDT_Email(false)
		}
	}
	const [password, setPassword] = useState('')
	const [isValid, setIsValid] = useState(true)

	const handlePasswordChange = (event: any) => {
		const newPassword = event.target.value
		setPassword(newPassword)
		const hasUpperCase = /[A-Z]/.test(newPassword)
		const hasLowerCase = /[a-z]/.test(newPassword)
		const hasDigit = /[0-9]/.test(newPassword)
		const hasSpecialChar = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/.test(newPassword)
		const isLengthValid = newPassword.length >= 8

		if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isLengthValid) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}
	}
	const isOpenModal = useSelector((state: RootState) => state?.modalLogin?.isModalOpen)
	const dispatch = useDispatch()
	const handleCloseModal = () => {
		dispatch(closeModal())
	}
	if (!isOpenModal) {
		return null
	}
	return (
		<div className={`${styles.overlay} ${styles.block}`}>
			<div className={styles.wapper}>
				<div className={styles.auth_form}>
					<p className={styles.post_title}>
						Đăng nhập Ứng viên để Ứng tuyển và Chat với nhà tuyển dụng
						<Image
							onClick={handleCloseModal}
							height={16}
							width={16}
							className={styles.close_pop_login}
							src="/images/close_btndo.png"
							alt="close"
						/>
					</p>
					<p className={styles.post_info}>Đăng nhập bằng email và mật khẩu của bạn</p>
					<div className={styles.form_btn_do}>
						<div className={`${styles.form_login} ${styles.paddingTop}`}>
							<form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
								<input
									type="text"
									placeholder="Nhập địa chỉ email của bạn"
									id={styles.user_email}
									value={inputValue}
									onChange={handleInputChange}
									className={styles.valid}
								/>
								{!isValidSDT_Email && (
									<p className={styles.error_text}>
										Vui lòng nhập đúng định dạng email hoặc số điện thoại
									</p>
								)}
							</form>
						</div>
						<div className={styles.form_login}>
							<form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
								<input
									type="password"
									id={styles.user_password_first}
									name="password_first"
									value={password}
									onChange={handlePasswordChange}
									placeholder=" Nhập mật khẩu"
								/>
								{!isValid && (
									<p className={styles.error_pass}>
										Mật khẩu phải bao gồm ít nhất 8 ký tự, bao gồm chữ cái viết hoa, chữ cái viết
										thường, số và ký tự đặc biệt.
									</p>
								)}
							</form>
						</div>
						<input
							type="submit"
							className={styles.btn_login}
							name="Submit"
							defaultValue="Đăng nhập"
						/>
						<p
							className={styles.hrdot}
							style={{ float: 'left', width: '100%', padding: '0px 30px 0px 25px' }}
						/>
					</div>
					<div className={`${styles.form_btn_app} ${styles.paddingTop}`}>
						{/* App CV365 */}
						<div className={`${styles.gd_pc} ${styles.appContainer}`}>
							<p style={{ fontWeight: 'bold' }}>App CV365</p>
							<Image
								height={100}
								width={100}
								className={`lazyloaded ${styles.appImage}`}
								src="/images/new_qr_ft2.png"
								alt="App CV365"
							/>
						</div>
						{/* App UV */}
						<div className={`${styles.gd_pc} ${styles.appContainer}`}>
							<p style={{ fontWeight: 'bold' }}>App UV</p>
							<Image
								height={100}
								width={100}
								className={`lazyloaded ${styles.appImage}`}
								src="/images/new_qr_ft.png"
								alt="App Timviec365 UV"
							/>
						</div>
						<div style={{ float: 'left', width: '48%', marginRight: '2%', marginTop: '2%' }}>
							<p style={{ fontWeight: 'bold', marginBottom: 10 }} className={styles.gd_mobile}>
								App CV365
							</p>
							<Link
								className={`${styles.link_dow_lg} ${styles.ios_check}`}
								href="https://play.google.com/store/apps/details?id=vn.timviec365.cv.cv365_vn"
								ios-href="https://apps.apple.com/us/app/cv-xin-vi%E1%BB%87c-365-t%E1%BA%A1o-cv-%C4%91%E1%BA%B9p/id1631076979"
								rel="nofollow"
								target="_blank"
							>
								Tải ngay
							</Link>
						</div>
						<div style={{ float: 'left', width: '48%', marginTop: '2%' }}>
							<p style={{ fontWeight: 'bold', marginBottom: 10 }} className={styles.gd_mobile}>
								App UV
							</p>
							<Link
								className={`${styles.link_dow_lg} ${styles.ios_check}`}
								href="https://play.google.com/store/apps/details?id=timviec365vn.timviec365_vn"
								ios-href="https://apps.apple.com/vn/app/t%C3%ACm-vi%E1%BB%87c-365-t%C3%ACm-vi%E1%BB%87c-online/id1597712953?l=vi"
								rel="nofollow"
								target="_blank"
							>
								Tải ngay
							</Link>
						</div>
					</div>
					<div className={styles.box_qmk_do}>
						<p className={styles.minitext}>
							<Link href="/quen-mat-khau-ung-vien.html">Quên mật khẩu?</Link>
						</p>
						<p className={styles.centertext}>
							Bạn chưa có tài khoản?{' '}
							<span>
								<Link style={{ fontFamily: 'Roboto-Medium' }} href="/dang-ky-ung-vien.html">
									Đăng ký ngay!
								</Link>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Model_noti
