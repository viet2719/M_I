import React from 'react'
import Image from 'next/image'
import styles from '@/styles/mbti/resuilt.module.scss'
export default function MBTI() {
	const data = [
		{
			id: '1',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ISTJ.svg',
			title: 'ISTJ - Người có trách nhiệm',
		},
		{
			id: '2',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ISFJ.svg',
			title: 'ISFJ - Người nuôi dưỡng',
		},
		{
			id: '3',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ISFP.svg',
			title: 'ISFP - Người nghệ sĩ',
		},
		{
			id: '4',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ISTP.svg',
			title: 'ISTP - Nhà cơ học',
		},
		{
			id: '5',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/INFP.svg',
			title: 'INFP - Người lý tưởng hóa',
		},
		{
			id: '6',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/INFJ.svg',
			title: 'INFJ - Người che chở',
		},
		{
			id: '7',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/INTJ.svg',
			title: 'INTJ - Nhà khoa học',
		},
		{
			id: '8',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/INTP.svg',
			title: 'INTP - Nhà tư duy',
		},
		{
			id: '9',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ENFJ.svg',
			title: 'ENFJ - Người cho đi',
		},
		{
			id: '10',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ENFP.svg',
			title: 'ENFP - Người truyền cảm hứng',
		},
		{
			id: '11',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ENTJ.svg',
			title: 'ENTJ - Nhà điều hành',
		},
		{
			id: '12',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ENTP.svg',
			title: 'ENTP - Người có tầm nhìn',
		},
		{
			id: '13',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ESFJ.svg',
			title: 'ESFJ - Người quan tâm',
		},
		{
			id: '14',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ESFP.svg',
			title: 'ESFP - Người Trình diễn',
		},
		{
			id: '15',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ESTJ.svg',
			title: 'ESTJ - Người bảo hộ',
		},
		{
			id: '16',
			imgSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/16MBTI/ESTP.svg',
			title: 'ESTP - Người thực thi',
		},
	]
	return (
		<div>
			<main className={styles.main_footer}>
				<div className={styles.children_footer}>
					<div className={styles.title__overview}>
						<h4>16 loại hình tính cách MBTI</h4>
					</div>
					<div className={styles.grid_footer}>
						{data.map((item) => (
							<div key={item.id} className={styles.img_tit}>
								<div>
									<Image width={100} height={100} src={item.imgSrc} alt="" />
								</div>
								<p>{item.title}</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}
