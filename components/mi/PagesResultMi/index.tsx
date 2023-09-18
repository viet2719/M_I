import React, { useEffect, useState } from 'react'
import Rada from './RadarChart'
import styles from '@/styles/mi/resuiltmi.module.scss'
import { Divider } from 'antd'
import Strength from './Strength'
import Weakness from './weakness'
import Thingkinh from './thingkinh'
import Link from 'next/link'
import Image from 'next/image'

export default function Resuilt() {
	function FacebookShareButton() {
		const shareUrl = 'https://example.com'
		const title = 'Tiêu đề bài viết'

		return (
			<a
				href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
					shareUrl
				)}&title=${encodeURIComponent(title)}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<button className="btnface">
					<Image width={12} height={12} alt="" src={'/images/mbti/share.svg'} />
					Chia sẻ lên Facebook
				</button>
			</a>
		)
	}

	function BtnComponent() {
		const [showShareButton, setShowShareButton] = useState(false)
		useEffect(() => {
			const handleScroll = () => {
				// const scrollY = window.scrollY
				const threshold = 100
				if (window.scrollY > threshold) {
					setShowShareButton(true)
				} else {
					setShowShareButton(false)
				}
			}
			window.addEventListener('scroll', handleScroll)
			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}, [])
		return (
			<div className={`btnllxemmi ${showShareButton ? '' : 'hidden'}`}>
				<Link href={'/mi/quiz'}>
					<button className="btnll">
						<Image width={12} height={12} alt="" src={'/images/mbti/pen.svg'} />
						Làm lại trắc nghiệm
					</button>
				</Link>

				{FacebookShareButton()}
			</div>
		)
	}

	return (
		<div>
			<div className={`${styles.container} mi`}>
				<h4 className={styles.title}>KẾT QUẢ TRẮC NGHIỆM ĐA TRÍ THÔNG MINH MI</h4>
				<p className={styles.p}></p>
				<Rada />
			</div>
			<div style={{ background: ' #F5FBFF', paddingTop: '1px' }}>
				<div className={`${styles.container}`}>
					<div className={styles.yoursel}>
						<a href="#diemmanh">Điểm mạnh và Điểm yếu</a>
						<a href="#tuduysangtao">Tư duy và Sáng tạo</a>
						<a href="#tieuchicongviec">Tiêu chí công việc</a>
					</div>
					<main>
						<label id="diemmanh" className={styles.strength}>
							Điểm mạnh
						</label>
						<Divider />
						<div className={styles.mani}>
							<Strength />
						</div>
					</main>
					<main>
						<label className={styles.strength}>Điểm yếu</label>
						<Divider />
						<div className={styles.mani}>
							<Weakness />
						</div>
					</main>
					<main>
						<Thingkinh />
					</main>
					<div>{BtnComponent()}</div>
				</div>
			</div>
		</div>
	)
}
