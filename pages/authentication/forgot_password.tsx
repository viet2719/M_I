import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import styles from '@styles/authentication/forgot_password.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PasswordReset = () => {
	const route = useRouter()
	const [checkLayout, setCheckLayout] = useState(false)
	const asPath = route.asPath
	useEffect(() => {
		if (asPath.includes('nha-tuyen-dung')) {
			setCheckLayout(true)
		}
		if (asPath.includes('ung-vien')) {
			setCheckLayout(false)
		}
	}, [asPath])

	const [emailOrPhone, setEmailOrPhone] = useState('')
	const [captcha, setCaptcha] = useState('')
	const [errorMessages, setErrorMessages] = useState<any>({})
	// const [showCaptcha, setShowCaptcha] = useState(false)

	const handleEmailOrPhoneChange = (event: any) => {
		setEmailOrPhone(event.target.value)
		// Kiểm tra định dạng ở đây và cập nhật errorMessage nếu cần
		if (event.target.value !== '') {
			if (!isValidEmailOrPhone(event.target.value)) {
				const newErrorMessages = {
					phoneOrMail: 'Địa chỉ email hoặc số điện thoại không hợp lệ.',
				}
				setErrorMessages(newErrorMessages)
			} else {
				const newErrorMessages = {
					phoneOrMail: '',
				}
				setErrorMessages(newErrorMessages)
			}
		} else {
			const newErrorMessages = {
				phoneOrMail: 'Vui lòng nhập địa chỉ email hoặc số điện thoại.',
			}
			setErrorMessages(newErrorMessages)
		}
	}

	const handleCaptchaChange = (event: any) => {
		setCaptcha(event.target.value)
		if (event.target.value !== '') {
			const newErrorMessages2 = {
				capCha: '',
			}
			setErrorMessages(newErrorMessages2)
		} else {
			const newErrorMessages2 = {
				capCha: 'Vui lòng nhập mã Captcha.',
			}
			setErrorMessages(newErrorMessages2)
		}
	}

	const handlePasswordReset = (event: any) => {
		event.preventDefault()
		if (emailOrPhone === '') {
			const newErrorMessages = {
				phoneOrMail: 'Vui lòng nhập địa chỉ email hoặc số điện thoại.',
			}
			setErrorMessages(newErrorMessages)
		} else if (captcha === '') {
			const newErrorMessages2 = {
				capCha: 'Vui lòng nhập mã Captcha.',
			}
			setErrorMessages(newErrorMessages2)
		} else {
			console.log(emailOrPhone, captcha)
		}
	}

	const isValidEmailOrPhone = (value: any) => {
		return isValidEmail(value) || isValidPhone(value)
	}
	const isValidEmail = (value: any) => {
		const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/
		return emailRegex.test(value)
	}

	const isValidPhone = (value: any) => {
		// Đây là một ví dụ kiểm tra số điện thoại có dạng 10 hoặc 11 chữ số bắt đầu bằng số 0
		const phoneRegex = /^(0[1-9][0-9]{8,9})$/
		return phoneRegex.test(value)
	}
	return (
		<>
			<Header />
			<div className={styles.containerMk}>
				<div className={styles.intro_re}>
					<span>Có 26,039 việc làm mới hôm nay trong 67,098 việc làm đang tuyển dụng </span>
					<a
						href="/tin-tuyen-dung-viec-lam.html"
						target="_blank"
						title="Tuyển dụng"
						className={styles.xn_re}
					>
						&gt;&gt; Bấm xem ngay !
					</a>
				</div>
				<section className={styles['qmk-uv']}>
					<div className={styles.vieclam_container}>
						<div className={styles.form_quen_mk}>
							<div className={`${styles.div_form_qmk} ${styles.tr_qmk}`}>
								<h1 className="text-center">
									Lấy lại mật khẩu của {checkLayout ? 'nhà tuyển dụng' : 'ứng viên'}
								</h1>
								<div className={styles.form_uv_mk}>
									<label className={styles.email}>
										Tài khoản đăng nhập<i style={{ color: 'red' }}>*</i>
									</label>
									<input
										type="text"
										id="user_pass"
										name="email"
										value={emailOrPhone}
										onChange={handleEmailOrPhoneChange}
										className={styles['form-control']}
										placeholder="Nhập địa chỉ email hoặc số điện thoại đã đăng ký"
										style={{
											border: errorMessages?.phoneOrMail ? '1px solid #ff0000' : '',
										}}
									/>
									{errorMessages?.phoneOrMail && (
										<span className={styles.error_message}>{errorMessages?.phoneOrMail}</span>
									)}
									<br />
									<br />
									<label className={styles.email}>
										Mã Captcha<i style={{ color: 'red' }}>*</i>
									</label>
									<div className={styles.show_captcha}>
										<input
											type="text"
											id="captcha"
											value={captcha}
											onChange={handleCaptchaChange}
											className={`${styles.captcha} ${styles['form-control']}`}
											name="captcha"
											placeholder="Nhập mã Captcha"
											style={{
												border: errorMessages?.capCha ? '1px solid #ff0000' : '',
												width: 'calc(100% - 200px)',
											}}
										/>
										<Image
											height={30}
											width={120}
											style={{
												marginLeft: 10,
												border: 'solid 1px #c1c1c1',
												verticalAlign: 'middle',
												padding: '4px 5px',
												borderRadius: 10,
											}}
											src={`/images/image.php`}
											id="img-captcha"
											alt=""
										/>
										<button
											id="reloadCaptcha"
											style={{
												cursor: 'pointer',
												marginLeft: 10,
												border: 'transparent',
												verticalAlign: 'middle',
												background: 'transparent',
											}}
										>
											<Image
												height={22}
												width={22}
												src="/images/reloadCaptcha.png"
												alt="Reload Captcha"
											/>
										</button>
									</div>
									{errorMessages?.capCha && (
										<span className={styles.error_message}>{errorMessages?.capCha}</span>
									)}
									<div id="recaptcha-container" className={styles.recaptcha} />
									<p>
										Mời bạn nhập địa chỉ email hoặc số điện thoại đã đăng ký tài khoản trên
										Timviec365.vn. Chúng tôi sẽ gửi tới bạn một mã OTP để xác thực và tạo mật khẩu
										mới, vui lòng kiểm tra email hoặc tin nhắn.
									</p>
									<div className={styles.div_su_quen_mk}>
										<input
											type="submit"
											name="Submit"
											className={styles.btn_quen_mk}
											value="Lấy lại mật khẩu"
											onClick={handlePasswordReset}
										/>
									</div>
								</div>
								<p
									style={{
										textAlign: 'center',
										width: '100%!important',
										float: 'left',
									}}
								>
									Bạn chưa có tài khoản?{' '}
									<a href="/dang-ky-nha-tuyen-dung.html" title="Đăng ký ngay">
										Đăng ký ngay
									</a>
								</p>
							</div>
							{/* <div
								className={`${styles.div_form_qmk_2} ${styles.s_qmk} ${styles.hidden}`}
								style={{
									float: 'left',
									textAlign: 'center',
									backgroundColor: '#fff',
									width: '100%',
									marginTop: 50,
									paddingTop: 50,
								}}
							>
								<h2>Lấy lại mật khẩu</h2>
								<input id="partitioned" name="otp_nv" maxLength={6} />
								<input
									type="button"
									className={styles.verify_otp}
									defaultValue="Lấy lại mật khẩu"
								/>
								<input type="hidden" className={styles.xt_id} defaultValue="" />
								<p className="" style={{ width: '100%', marginBottom: 0 }}>
									Mã OTP để tạo mật khẩu mới đã được gửi đến email hoặc số điện thoại của bạn.{' '}
									<br />
									Vui lòng nhập OTP để lấy lại mật khẩu và tiếp tục sử dụng dịch vụ.
								</p>
								<div>
									<Link
										style={{
											color: '#269b91',
											fontSize: 15,
											marginBottom: 20,
											float: 'left',
											width: '100%',
										}}
										href="/"
									>
										<u>Quay về trang chủ</u>
									</Link>
								</div>
							</div> */}
							<div className={styles.bottom_re_mk}>
								<div className={styles['yt-mk']}>
									<div className={styles.iframe_box}>
										<iframe
											frameBorder={0}
											id="yoube"
											scrolling="no"
											className="lazyloaded"
											src="https://www.youtube.com/embed/AU6vlk7ducI"
											width="100%"
											height={280}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	)
}

export default PasswordReset
