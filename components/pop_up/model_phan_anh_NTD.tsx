import React, { useState } from 'react'
import styles from '@/components/details/main_timviec/main_timviec.module.css'
import Image from 'next/image'
import { Button, Modal } from 'antd'

type Props = {
	showPhanAnhNTD: boolean
	setShowPhanAnhNTD: (value: boolean) => void
}

const Model_Phan_Anh_NTD = ({ showPhanAnhNTD, setShowPhanAnhNTD }: Props) => {
	const [contents, setContents] = useState<string>()

	const handleSendPhanAnh: () => void = () => {
		if (contents) {
			alert('Gửi phản ánh thành công')
			setShowPhanAnhNTD(false)
		}
	}
	return (
		<Modal
			closable={false}
			footer={
				<div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
					<Button
						onClick={() => setShowPhanAnhNTD(false)}
						style={{ width: 100, border: '1px solid #4C5BD4', color: '#4C5BD4' }}
					>
						Hủy
					</Button>
					<Button
						onClick={() => handleSendPhanAnh()}
						style={{ width: 100, background: '#4C5BD4', color: '#fff' }}
					>
						Gửi
					</Button>
				</div>
			}
			cancelText={false}
			open={showPhanAnhNTD}
			title={
				<p
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						background: '#4C5BD4',
						margin: '-20px -24px',
					}}
				>
					<div
						style={{
							paddingLeft: '5px',
							display: 'flex',
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 15,
						}}
					>
						<p style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
							<p style={{ paddingTop: 8 }}>
								<Image
									width={37}
									height={39}
									src="https://timviec365.vn/images/loc/mail.png"
									alt="Done"
								/>
							</p>
							<p style={{ color: '#fff' }}>Phản ánh chất lượng nhà tuyển dụng</p>
						</p>

						<p
							onClick={() => setShowPhanAnhNTD(false)}
							style={{ color: '#fff', cursor: 'pointer', paddingRight: 15 }}
						>
							X
						</p>
					</div>
				</p>
			}
		>
			<div className={`${styles.over_savet}`} style={{ display: 'block', paddingTop: 20 }}>
				<textarea
					onChange={(e) => setContents(e.target.value)}
					style={{
						width: '100%',
						border: '1px solid rgb(229 231 242)',
						padding: 5,
						height: '250px',
					}}
					name=""
					id=""
					placeholder={
						'Vui lòng ghi rõ lý do để Timviec365 hỗ trợ bạn                   VD: Nhà tuyển dụng thông tin mập mờ, có dấu hiệu lừa đảo v.v..'
					}
				>
					{contents}
				</textarea>

				{!contents && <i>Vui lòng nhập phản ánh của bạn !</i>}
			</div>
		</Modal>
	)
}
export default Model_Phan_Anh_NTD
