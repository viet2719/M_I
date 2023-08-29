import React from 'react'
import styles from '@/components/details/main_timviec/main_timviec.module.css'
import Image from 'next/image'
import { Button, Modal } from 'antd'

type Props = {
	showLuuTin: boolean
	setLuuTin: (value: boolean) => void
}

const Model_luutin = ({ showLuuTin, setLuuTin }: Props) => {
	return (
		<Modal
			footer={false}
			cancelText={false}
			open={showLuuTin}
			closable={false}
			title={
				<p
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						background: 'blue',
						margin: '-20px -24px',
					}}
				>
					<p style={{ paddingTop: 8 }}>
						<Image
							width={31}
							height={31}
							src="https://timviec365.vn/images/loc/tick.png"
							alt="Done"
						/>
					</p>
				</p>
			}
		>
			<div className={`${styles.over_savet}`} style={{ display: 'block', paddingTop: 20 }}>
				<div className={styles.wapper}>
					<div className={`${styles.auth_form} ${styles.form_savet}`}>
						<div className={styles.box_savet}>
							<p className={styles.savet_1}>Tuyệt vời!</p>
							<p className={styles.savet_2}>Bạn đã lưu tin tuyển dụng thành công</p>
							<p className={styles.savet_2}>
								{' '}
								<Button
                                onClick={()=>setLuuTin(false)}
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										color: '#fff',
										background: '#4C5BD4',
									}}
								>
									Hoàn thành
								</Button>
							</p>
						</div>
						<div className={styles.savet_3}>
							<p>Bạn gặp khó khăn?</p>
							<p>Hotline: 1900633682 ấn phím 1</p>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
export default Model_luutin
