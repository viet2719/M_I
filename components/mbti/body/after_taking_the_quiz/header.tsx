import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/mbti/introduce.module.scss'
import Link from 'next/link'
interface Data {
	id: string
	imgSrc: string
	personality_name: string
}
export default function Header() {
	const [selectedId, setSelectedId] = useState<string | null>(null)

	const data = [
		{
			id: '1',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/tongcon.svg',
			personality_name: 'ISTJ - Người trách nhiệm',
		},
		{
			id: '2',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/ISFJ2.png',
			personality_name: 'ISFJ - Người nuôi dưỡng',
		},
		{
			id: '3',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/nghesi2.png',
			personality_name: 'ISFP - Người nghệ sĩ',
		},
		{
			id: '4',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item4.4.png',
			personality_name: 'ISTP - Nhà cơ học',
		},
		{
			id: '5',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item5.4.png',
			personality_name: 'INFP - Người lý tưởng hóa',
		},
		{
			id: '6',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item6.4.png',
			personality_name: 'INFJ - Người che chở',
		},
		{
			id: '7',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item7.4.png',
			personality_name: 'INTJ - Nhà khoa học',
		},
		{
			id: '8',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item8.4.png',
			personality_name: 'INTP - Nhà tư duy',
		},
		{
			id: '9',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item9.4.png',
			personality_name: 'ENFJ - Người cho đi',
		},
		{
			id: '10',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item10.4.png',
			personality_name: 'ENFP - Người truyền cảm hứng',
		},
		{
			id: '11',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item11.4.png',
			personality_name: 'ENTJ - Nhà điều hành',
		},
		{
			id: '12',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item12.4.png',
			personality_name: 'ENTP - Người có tầm nhìn',
		},
		{
			id: '13',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item13.4.png',
			personality_name: 'ESFJ - Người quan tâm',
		},
		{
			id: '14',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item14.4.png',
			personality_name: 'ESFP - Người trình diễn',
		},
		{
			id: '15',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item15.4.png',
			personality_name: 'ESTJ -  Người bảo hộ',
		},
		{
			id: '16',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item16.4.png',
			personality_name: 'ESTP - Người thực thi',
		},
	]

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * data.length)
		const randomPersonality = data[randomIndex]
		setSelectedId(randomPersonality.id)
	}, [data])
	return (
		<div>
			<div>
				{data.map(
					(personality) =>
						personality.id === selectedId && (
							<div key={personality.id}>
								<label className={styles.title}>TRẮC NGHIỆM TÍNH CÁCH MBTI</label>
								<div className={styles.content__intro}>
									<p>
										<b> Trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator) </b>&ensp;là một
										phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách con
										người.Kết quả trắc nghiệm MBTI chỉ ra cách con người nhận thức thế giới xung
										quanh và ra quyết định cho mọi vấn đề trong cuộc sống. <br />
										Hiện nay MBTI được sử dụng phổ biến như một phương pháp phân loại tính cách khá
										chính xác.Trong công việc, MBTI giúp chúng ta có thêm thông tin để lựa chọn nghề
										nghiệp chính xác hơn,với nhà tuyển dụng cũng có thể sử dụng MBTI để đánh giá mức
										độ phù hợp về tính cách của ứng viên với công việc cũng như môi trường làm việc
										của doanh nghiệp.
									</p>
									<Image width={290} height={260} alt="img intro" src={personality.imgSrc} />
								</div>
								<div className={styles.content__intro_425}>
									<div className={styles.img}>
										<Image width={290} height={260} alt="img intro" src={personality.imgSrc} />
									</div>
									<p>
										<b>Trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator)</b> là một phương
										pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách con
										người.Kết quả trắc nghiệm MBTI chỉ ra cách con người nhận thức thế giới xung
										quanh và ra quyết định cho mọi vấn đề trong cuộc sống. <br />
										Hiện nay MBTI được sử dụng phổ biến như một phương pháp phân loại tính cách khá
										chính xác.Trong công việc, MBTI giúp chúng ta có thêm thông tin để lựa chọn nghề
										nghiệp chính xác hơn,với nhà tuyển dụng cũng có thể sử dụng MBTI để đánh giá mức
										độ phù hợp về tính cách của ứng viên với công việc cũng như môi trường làm việc
										của doanh nghiệp.
									</p>
								</div>
								<div className={styles.gr_tinhcach}>
									<h4>NHÓM TÍNH CÁCH CỦA BẠN LÀ</h4>
									<span>{personality.personality_name}</span>
									<div className={styles.btn}>
										<Link href={'mbti/quiz'}>
											{' '}
											<button className={styles.btn_restart}>
												<Image width={20} height={20} alt="" src="/images/mbti/pen.svg" /> Làm lại
												trắc nghiệm
											</button>
										</Link>
										<button className={styles.btn_detail}>
											<Image width={20} height={20} alt="" src="/images/mbti/share.svg" />
											Xem giải thích chi tiết{' '}
										</button>
									</div>
								</div>
							</div>
						)
				)}
			</div>
		</div>
	)
}
