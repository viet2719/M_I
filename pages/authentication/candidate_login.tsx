/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import styles from '@styles/authentication/candidate.module.scss'
import { Modal } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import validator from 'validator'

const Candidate_login = () => {
	const [loginQr, setLoginQr] = useState(true)
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

		if (hasUpperCase && hasLowerCase && hasDigit && isLengthValid) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}
	}
	// Mở modal hướng dẫn quét
	const [isModalOpen, setIsModalOpen] = useState(false)
	const showModal = () => {
		setIsModalOpen(true)
	}
	const handleOk = () => {
		setIsModalOpen(false)
	}
	const handleCancel = () => {
		setIsModalOpen(false)
	}
	return (
		<>
			<Header />
			<section className={`${styles.login_uv} ${styles.login_uv_mb}`}>
				<div className={styles.vieclam_container} style={{ background: 'unset' }}>
					<div className={styles.login_content}>
						<h1>Đăng nhập tài khoản ứng viên để chat với nhà tuyển dụng</h1>
						{/* <p>
							<img src="/images/New_images/1.png" alt="100.000+ Công việc mơ ước" />
							<span>100.000+</span>&nbsp; Công việc mơ ước
						</p>
						<p>
							<img src="/images/New_images/2.png" alt="365+ Mẫu CV chuyên nghiệp" />
							<span>365+</span>&nbsp; Mẫu CV chuyên nghiệp
						</p>
						<p>
							<img src="/images/New_images/3.png" alt="22+ Bộ đề câu hỏi tuyển dụng" />
							<span>22+</span>&nbsp; Bộ đề câu hỏi tuyển dụng
						</p> */}
					</div>
					<div className={`${styles.form_dang_nhap} ${styles.form_dn_uv}`}>
						{/* <div className={styles.login_logo_header}>
							<img src="/images/New_images/logo_login1.png" />
						</div> */}
						<div className={`${styles.box_select_login} ${styles.lg_uv}`}>
							<button
								className={`${styles.select_login} ${styles.lg_qr} ${styles.act}`}
								onClick={() => {
									setLoginQr(true)
								}}
								style={{ fontWeight: loginQr ? 'bold' : '' }}
							>
								<p>Quét mã QR</p>
							</button>
							<button
								className={`${styles.select_login} ${styles.lg_tk}`}
								id={styles.lg_tk}
								onClick={() => {
									setLoginQr(false)
								}}
								style={{ fontWeight: loginQr ? '' : 'bold' }}
							>
								<p>Tài khoản</p>
								<p className={`${styles.upn} ${styles.nbon}`}>(email hoặc SĐT)</p>
							</button>
						</div>
						{loginQr ? (
							<div className={styles.scan_qr}>
								<div className={styles.img_qr} id={styles.qrcode}>
									<canvas width={185} height={185} style={{ display: 'none' }} />
									<img
										src="data:image/png;base64,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"
										style={{ display: 'block' }}
									/>
								</div>

								<p className={`${styles.mrt9} ${styles.f16}`}>
									Sử dụng ứng dụng Chat365 để quét mã QR
								</p>
								<button
									className={`${styles.cl4c} ${styles.f16} ${styles.cur_p}`}
									onClick={showModal}
								>
									Hướng dẫn quét
								</button>
							</div>
						) : (
							<form
								action=""
								id={styles.formSignUp}
								method="POST"
								className={`${styles.form_tk} ${styles.dbn}`}
							>
								<div className={styles.form_uv}>
									<i className={styles.email_lg} />
									<input
										className={`${styles['form-control']} ${styles.valid}`}
										type="text"
										id={styles.user_email}
										placeholder="Nhập tài khoản đăng nhập"
										value={inputValue}
										onChange={handleInputChange}
									/>
									{!isValidSDT_Email && (
										<label id="user_email_error" className={styles.error}>
											Vui lòng nhập đúng định dạng email hoặc số điện thoại.
										</label>
									)}
								</div>
								<div className={styles.form_uv}>
									<i className={styles.pass_lg} />
									<input
										className={`${styles.form_control} ${styles.valid}`}
										type="password"
										maxLength={20}
										id={styles.user_password_first}
										value={password}
										onChange={handlePasswordChange}
										placeholder="Nhập mật khẩu"
									/>
									{/* {password === '' && (
										<label id="user_password_first_error" className={styles.error}>
											Vui lòng nhập mật khẩu.
										</label>
									)} */}
									{!isValid && (
										<label id="user_password_first_error" className={styles.error}>
											Mật khẩu phải bao gồm ít nhất 8 ký tự, bao gồm chữ cái viết hoa, chữ cái viết
											thường, số và ký tự đặc biệt.
										</label>
									)}
								</div>
								<div
									style={{ display: 'none' }}
									className={`${styles.login_err} ${styles.alert} ${styles.alertDanger}`}
								/>
								<div className={styles.btn_login2}>
									<input className={`${styles.btn_login_uv}`} type="submit" value="Đăng nhập" />
									<div className={styles.triangleLeft} />
									<div className={styles.triangleRight} />
								</div>
							</form>
						)}

						<div className={styles.forget_pw}>
							<Link
								href="/quen-mat-khau-ung-vien.html"
								title="Quên mật khẩu"
								className={styles.qmk}
							>
								Quên mật khẩu?
							</Link>
						</div>
					</div>
					<div className={styles.login_register}>
						<p>
							Bạn chưa có tài khoản?{' '}
							<Link href="/dang-ky-ung-vien.html" title="Đăng ký ngay">
								Đăng ký ngay
							</Link>
						</p>
					</div>
				</div>
			</section>

			<Modal
				footer={false}
				open={isModalOpen}
				onCancel={handleCancel}
				bodyStyle={
					{
						// padding: '40px',
					}
				}
			>
				<div className={styles.content_body_md}>
					<h5
						className={`${styles['modal-title']} ${styles['modal-title1']}`}
						id="exampleModalLabel"
					>
						Hướng dẫn quét QR
					</h5>
					<div className={styles.img_qr} id={styles.help_login}>
						<canvas width={185} height={185} style={{ display: 'none' }} />
						<img
							src="data:image/png;base64,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"
							style={{ display: 'block' }}
						/>
					</div>
					<div className={styles.ct_list}>
						<div className={styles.item_l}>
							<div className={styles.cicle_list}>1</div>
							<p>Đăng nhập ứng dụng Chat365 trên điện thoại của bạn</p>
						</div>
						<div className={styles.item_l}>
							<div className={styles.cicle_list}>2</div>
							<p>
								Tại ứng dụng chọn biểu tượng{' '}
								<Image height={24} width={24} src="/images/qr-code.png" alt="QR core" />
								<span>Trên thanh tìm kiếm</span>
							</p>
						</div>
						<div className={styles.item_l}>
							<div className={styles.cicle_list}>3</div>
							<p>Di chuyển Camera đến mã QR trên màn hình máy tính để đăng nhập</p>
						</div>
					</div>
				</div>
			</Modal>
			<Footer />
		</>
	)
}

export default Candidate_login
