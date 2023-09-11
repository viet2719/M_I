import React, { useState } from 'react'
import { Modal } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/mbti/resuilt.module.scss'
const App: React.FC = () => {
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
			<button onClick={showModal} className={styles.btn_share}>
				<Image width={20} height={20} alt="" src="/images/mbti/share.svg" />
				Chia sẻ với bạn bè
			</button>

			<Modal
				title="Chia sẻ"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<Link href={'https://facebook.com'}>
					<Image
						width={50}
						height={50}
						alt=""
						src="https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/2021_Facebook_icon.svg.png"
					></Image>
				</Link>
				<Link href={'https://istagram.com'}>
					<Image
						width={50}
						height={50}
						alt=""
						src="https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/Instagram_icon.png.webp"
					></Image>
				</Link>
				<Link href={'/#'}>
					<Image
						width={50}
						height={50}
						alt=""
						src="https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/zalo-icon.png"
					></Image>
				</Link>
			</Modal>
		</>
	)
}

export default App
