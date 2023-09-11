import React, { lazy, useState } from 'react'
import styles from '@/styles/mbti/introduce.module.scss'
import Image from 'next/image'

interface PersonalityData {
	id: string
	imgSrc4: string
	kind_of_intelligence: string
	overview: string
	children_content: string
}
export default function Content_footer() {
	const [openItemId, setOpenItemId] = useState<string | null>(null)

	const toggleOpenItem = (id: string) => {
		setOpenItemId(openItemId === id ? null : id)
	}

	const data: PersonalityData[] = [
		{
			id: '1',
			kind_of_intelligence: 'Trí thông minh Logic',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mi/1.png',
			overview: 'Logic',
			children_content:
				'Có khả năng lý luận với các khái niệm liên quan đến các mối quan hệ toán học để đi đến kết luận chính xác, có thể được nhận ra thông qua tốc độ, từ vựng, cú pháp, không gian, và sự phức tạp của tính toán số trong các nhiệm vụ. Có thể nhanh chóng tính toán số học đơn giản, như cộng, trừ và nhân (liên quan đến bộ nhớ tạm thời và tốc độ nhận thức)',
		},
		{
			id: '2',
			kind_of_intelligence: 'Thấu hiểu Nội tâm',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mi/2.png',
			overview: 'Intrapersonal',
			children_content:
				'Có khả năng hiểu và có mô hình hóa bản thân, nhận thức được những khao khát, nỗi sợ, và năng lực, cũng như sử dụng những hiểu biết đó để đưa ra các quyết định phù hợp với bản thân',
		},
		{
			id: '3',
			kind_of_intelligence: 'Tư duy Triết học',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mi/3.png',
			overview: 'Existential',
			children_content:
				'Là chỉ dấu để nhận định xem một cá nhân có khả năng nghiên cứu sâu vào một lĩnh vực cụ thể nào đó không',
		},
		{
			id: '4',
			kind_of_intelligence: 'Vận động Cơ thể',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mi/4.png',
			overview: 'Bodily',
			children_content:
				'Khả năng sử dụng toàn thân hay một phần thân thể để giải quyết vấn đề, đạt được mục đích hay tạo ra sản phẩm',
		},
		{
			id: '5',
			kind_of_intelligence: 'Thấu hiểu Thiên nhiên',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mi/5.png',
			overview: 'Natural',
			children_content:
				'Có khả năng hiểu được thiên nhiên, nhận ra và phân loại các loài cây, động vật và các sự vật hiện tượng trong tự nhiên',
		},
		{
			id: '6',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mi/6.png',
			kind_of_intelligence: 'Ngôn ngữ',
			overview: 'Linguistic',
			children_content:
				'Kỹ năng ăn nói phát triển tốt và có sự nhạy cảm với âm điệu và ý nghĩa của từ ngữ, nhạy cảm với các ngôn ngữ nói và viết và có khả năng sử dụng ngôn ngữ để đạt được mục đích, cũng như học ngôn ngữ mới khá nhanh; Hay để ý câu chữ, cảm thấy cần thiết phải chọn được từ đúng cho đúng hoàn cảnh hay cảm xúc, cũng có lúc "sáng tạo" ra các từ mới.',
		},
		{
			id: '7',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mi/7.png',
			kind_of_intelligence: 'Cảm thụ Âm nhạc',
			overview: 'Musical',
			children_content:
				'Khả năng tạo ra và nhận ra nhịp điệu và độ cao: phân biệt sắc thái và trình tự của các tông liên quan đến các thuộc tính cơ bản như độ cao, cường độ, thời gian và nhịp điệu; có khả năng hiểu và đồng điệu cảm xúc với các bản nhạc giao hưởng, có khả năng cảm thụ nhiều dòng nhạc khác nhau và ghi nhớ giai điệu',
		},
		{
			id: '8',
			kind_of_intelligence: 'Trí thông minh không gian',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mi/8.png',
			overview: 'Spatial',
			children_content:
				'Khả năng nhận diện cả mô hình thị giác lớn và nhỏ: hình dung không gian và quét không gian.Hình dung không gian là khả năng tưởng tượng sự chuyển động của một vật thể và thường được biểu diễn bằng các đoạn hình động hay video ngắn, hoặc khả năng tưởng tượng ra nhiều góc nhìn của một vật cố định (tưởng tượng động); Quét không gian là khả năng quét một trường một cách nhanh chóng, theo dõi đường đi, và từ chối các đường dẫn sai - như đọc bản đồ, bản đồ họa tiết hoặc đồ thị (tưởng tượng tĩnh).',
		},
	]
	return (
		<div className={styles.mi}>
			<p className={styles.labelmi}>8 Loại trí thông minh</p>
			<div className={styles.gridmi}>
				{data.map((item, index) => (
					<div key={index} className={styles.footer_mi}>
						<div
							key={index}
							className={styles.grid_contentMI}
							onClick={() => toggleOpenItem(item.id)}
						>
							<div className={styles.content__contentmi}>
								<div className={styles.grid_title}>{item.kind_of_intelligence}</div>
								<div className={styles.grid_content_sub}>
									<div className={styles.text}>{item.overview}</div>
								</div>
							</div>
							<div className={styles.grid_imageMI}>
								<Image width={350} height={102} alt="" src={item.imgSrc4} />
							</div>
						</div>
						{openItemId === item.id && (
							<div className={` ${styles.children_content}   `}>{item.children_content}</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
