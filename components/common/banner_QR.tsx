import styles from '@styles/common/banner_QR.module.scss'
import Image from 'next/image'

const Banner_QR = () => {
	return (
		<div className={styles.banner_QR}>
			<div className={styles.box_select_login}>
				<div className={styles.select_login}>
					<p>Quét mã để đăng nhập</p>
				</div>
			</div>
			<div className={styles.scan_qr}>
				<div className={styles.img_qr}>
					<Image
						width={180}
						height={180}
						alt="img_qr"
						src="data:image/png;base64,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"
					></Image>
				</div>
			</div>
			<div className={styles.note}>
				<div className={styles.icon_qr}>
					<Image
						width={30}
						height={30}
						src={'/images/before_login/qr_code.svg'}
						alt="icon_qr"
						className={styles.img_icon}
					/>
				</div>
				<div className={styles.text_bot}>Mở app Chat365 và quét mã QR để đăng nhập nhanh chóng</div>
			</div>
		</div>
	)
}

export default Banner_QR
