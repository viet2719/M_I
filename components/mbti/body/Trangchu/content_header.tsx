import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/mbti/introduce.module.scss'
import Header from '../after_taking_the_quiz/header'
import Link from 'next/link'

export default function Content_header() {
	const [isShow, setisShow] = useState(false)
	const toggleContent = () => {
		setisShow(!isShow)
	}
	return (
		<div>
			{!isShow ? (
				<div>
					<label className={styles.title}>TRẮC NGHIỆM TÍNH CÁCH MBTI</label>
					<div className={styles.content__intro}>
						<p>
							<b>Trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator)</b>
							là một phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách
							con người. Kết quả trắc nghiệm MBTI chỉ ra cách con người nhận thức thế giới xung
							quanh và ra quyết định cho mọi vấn đề trong cuộc sống.
							<br />
							Hiện nay MBTI được sử dụng phổ biến như một phương pháp phân loại tính cách khá chính
							xác. Trong công việc, MBTI giúp chúng ta có thêm thông tin để lựa chọn nghề nghiệp
							chính xác hơn, với nhà tuyển dụng cũng có thể sử dụng MBTI để đánh giá mức độ phù hợp
							về tính cách của ứng viên với công việc cũng như môi trường làm việc của doanh nghiệp.
						</p>
						<Image
							width={280}
							height={260}
							alt="img intro"
							src="https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/imgintro.svg"
						/>
					</div>
					<div className={styles.content__intro_425}>
						<Image
							width={280}
							height={260}
							alt="img intro"
							src="https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/imgintro.svg"
						/>
						<p>
							<b>Trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator)</b>
							là một phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách
							con người. Kết quả trắc nghiệm MBTI chỉ ra cách con người nhận thức thế giới xung
							quanh và ra quyết định cho mọi vấn đề trong cuộc sống.
							<br />
							Hiện nay MBTI được sử dụng phổ biến như một phương pháp phân loại tính cách khá chính
							xác. Trong công việc, MBTI giúp chúng ta có thêm thông tin để lựa chọn nghề nghiệp
							chính xác hơn, với nhà tuyển dụng cũng có thể sử dụng MBTI để đánh giá mức độ phù hợp
							về tính cách của ứng viên với công việc cũng như môi trường làm việc của doanh nghiệp.
						</p>
					</div>
					<Link href={'/mbti/quiz'}>
						<button className={styles.btn_khampha}>
							<Image
								width={18}
								height={18}
								alt=""
								src="https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/khampha.svg"
							/>
							Khám phá tính cách của bạn ngay
						</button>
					</Link>
				</div>
			) : (
				<Header />
			)}
		</div>
	)
}
