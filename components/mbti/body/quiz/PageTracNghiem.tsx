import React, { useState } from 'react'
import styles from '@/styles/mbti/pagesTracnghiem.module.scss'
import Ads from '../Trangchu/Ads'
import { Checkbox, Radio } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { useRouter } from 'next/router'
import { questions } from './data'
interface Question {
	id: number
	content: string
	options: string[]
	multipleChoice?: boolean
}

export default function PageTracNghiem() {
	const [answers, setAnswers] = useState<{ [key: number]: string[] | undefined }>({})
	const router = useRouter()
	const [mbtiResult, setMbtiResult] = useState<string | null>(null)

	const handleResultClick = () => {
		const answeredQuestions = Object.keys(answers).length
		const totalQuestions = questions.length
		if (answeredQuestions !== totalQuestions) {
			alert('Bạn chưa hoàn thành các câu hỏi. Hãy trả lời các câu hỏi còn thiếu và thử lại.')
		} else {
			// Tính điểm cho các loại tính cách MBTI
			let scoreE = 0
			let scoreI = 0
			let scoreN = 0
			let scoreS = 0
			let scoreT = 0
			let scoreF = 0
			let scoreJ = 0
			let scoreP = 0

			// Duyệt qua các câu trả lời và tính điểm
			for (const questionId in answers) {
				const selectedOptions = answers[questionId]
				if (selectedOptions) {
					if (selectedOptions.includes('E')) {
						scoreE++
					} else {
						scoreI++
					}
					if (selectedOptions.includes('N')) {
						scoreN++
					} else {
						scoreS++
					}

					if (selectedOptions.includes('T')) {
						scoreT++
					} else {
						scoreF++
					}

					if (selectedOptions.includes('J')) {
						scoreJ++
					} else {
						scoreP++
					}
				}
			}
			// Dựa vào điểm số, xác định loại tính cách MBTI
			const mbtiType =
				(scoreE > scoreI ? 'E' : 'I') +
				(scoreN > scoreS ? 'N' : 'S') +
				(scoreT > scoreF ? 'T' : 'F') +
				(scoreJ > scoreP ? 'J' : 'P')
			router.push(`/mbti/result?mbti=${mbtiType}`)
		}
	}
	const handleAnswerChange = (questionId: number, selectedOptions: CheckboxValueType[]) => {
		const stringOptions = selectedOptions.map((option) => option.toString())
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: stringOptions,
		}))
	}
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.box_pages}>
					<div className={styles.content}>
						<div className={styles.content__page}>
							<div className={styles.title}>
								<h4>Bài trắc nghiệm MBTI</h4>
							</div>
							<div className={styles.body__content}>
								{questions.map((question) => (
									<div key={question.id} className={styles.question}>
										<div className={styles.topic}>
											<p>{question.id}.&ensp;</p>
											<p>{question.content}</p>
										</div>
										<div className={`border_ra ${styles.answer}`}>
											{question.multipleChoice ? (
												<Checkbox.Group
													options={question.options}
													onChange={(selectedOptions) =>
														handleAnswerChange(question.id, selectedOptions)
													}
													value={answers[question.id]}
												/>
											) : (
												<Radio.Group
													onChange={(e) => handleAnswerChange(question.id, [e.target.value])}
													value={answers[question.id]?.[0]}
												>
													{question.options.map((option) => (
														<Radio key={option} value={option}>
															{option}
														</Radio>
													))}
												</Radio.Group>
											)}
										</div>
									</div>
								))}
							</div>

							<button className={styles.result} onClick={handleResultClick}>
								Xem kết quả
							</button>
							{mbtiResult && (
								<div className={styles.mbtiResult}>
									<h3>Kết quả MBTI của bạn:</h3>
									<p>{mbtiResult}</p>
								</div>
							)}
						</div>
						<div className={`${styles.ads} ${styles.adsContainer}`}>
							<Ads />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
