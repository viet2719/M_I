import React from 'react'
import styles from '@styles/authentication/login.module.scss'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
	return (
		<>
			<div className={styles.banner_login}>
				<Header />
				<div className={`${styles.box_dnc} ${styles.dnc_mobile}`}>
					<div className={styles.dnc}>
						<div className={styles.btn}>
							<Link href="/dang-nhap-ung-vien.html">
								<Image
									width={208}
									height={208}
									src="/images/img_login_uv.png"
									alt="Đăng nhập ứng viên"
								/>
							</Link>
							<p>Ứng viên</p>
						</div>
					</div>
					<div className={styles.dnc}>
						<div className={styles.btn}>
							<Link href="/dang-nhap-nha-tuyen-dung.html">
								<Image
									width={208}
									height={208}
									src="/images/img_login_ntd.png"
									alt="Đăng nhập nhà tuyển dụng"
								/>
							</Link>
							<p>Nhà tuyển dụng</p>
						</div>
					</div>
				</div>
				<div className={`${styles.box_dnc} ${styles.dnc_pc}`}>
					<div className={`${styles.dnc} ${styles.mobile_hide}`}>
						<Image alt="Đăng nhập ứng viên" width={320} height={210} src="/images/uv_bg.png" />
						<div className={`${styles.dn_content} ${styles.uv}`}>
							<p>100.000+ Công việc mơ ước</p>
							<p>365+ Mẫu CV chuyên nghiệp</p>
							<p>22+ Bộ đề câu hỏi tuyển dụng</p>
							<div className={styles.btn}>
								<Link href="/dang-nhap-ung-vien.html">ĐĂNG NHẬP ỨNG VIÊN</Link>
							</div>
						</div>
					</div>
					<div className={`${styles.dnc} ${styles.mobile_hide}`}>
						<Image
							alt="Đăng nhập nhà tuyển dụng"
							width={320}
							height={210}
							src="/images/ntd_bg.png"
						/>
						<div className={`${styles.dn_content} ${styles.ntd}`}>
							<p>Đăng tin tuyển dụng miễn phí</p>
							<p>Đăng tin không giới hạn</p>
							<p>Biểu mẫu nhân sự chuyên nghiệp</p>
							<div className={styles.btn}>
								<Link href="/dang-nhap-nha-tuyen-dung.html">ĐĂNG NHẬP NHÀ TUYỂN DỤNG</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Login
