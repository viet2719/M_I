import React, { useEffect, useState } from 'react'
import styles from '@/styles/mbti/pagesTracnghiem.module.scss'
import Ads from '@/components/mbti/body/Trangchu/Ads'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { questions, data } from './dataQuiz'
interface Question {
	id: number
	content: string
}

export default function PageTracNghiem() {
	const [answers, setAnswers] = useState<{ [key: number]: string[] | undefined }>({})
	const router = useRouter()
	const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({})
	const [selectedContent, setSelectedContent] = useState<{ [key: number]: string | null }>({})
	const [modal, setShowmodal] = useState(false)
	const questionScores: { [key: number]: number } = {}

	const calculateQuestionScore = (questionId: number, selectedAnswer: number): number => {
		// Tính điểm dựa trên trọng số của câu hỏi và đáp án được chọn
		const questionWeight = 6 / 5
		const score = questionWeight * selectedAnswer
		return score
	}
	const [quizScore, setQuizScore] = useState<number | null>(null)
	const handleResultClick = () => {
		const answeredQuestions = Object.keys(selectedAnswers).length
		if (answeredQuestions !== questions.length) {
			// Xử lý trường hợp người dùng chưa trả lời hết câu hỏi sẽ hiện thông báo
			setShowmodal(true)
		} else {
			// Tính tổng điểm
			let totalScore = 0
			questions.forEach((question) => {
				const selectedAnswer = selectedAnswers[question.id]
				if (selectedAnswer !== null) {
					const questionScore = calculateQuestionScore(question.id, selectedAnswer)
					totalScore += questionScore
				}
			})
			setQuizScore(totalScore)
			console.log(totalScore)
			// Chuyển điểm vào trang kết quả
			router.push(`/mi/result?score=${totalScore}`)
		}
	}
	useEffect(() => {
		if (modal) {
			const timeoutId = setTimeout(() => {
				setShowmodal(false)
			}, 4000)
			return () => clearTimeout(timeoutId)
		}
	}, [modal])
	const handleOptionClick = (questionId: number, optionId: number) => {
		// Lưu trạng thái lựa chọn cho câu hỏi theo id
		setSelectedAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: optionId,
		}))
		setSelectedContent((prevContents) => ({
			...prevContents,
			[questionId]: data.find((item) => item.id === optionId)?.cont || null,
		}))
	}

	return (
		<div>
			<div className={styles.container}>
				<div className={styles.box_pages}>
					<div className={styles.content}>
						<div className={styles.content__page}>
							<div className={styles.title}>
								<h4>Bài trắc nghiệm đa trí thông minh MI</h4>
							</div>
							<div className={styles.tutorial}>
								<div className={styles.hd}>
									<span>Hướng dẫn làm bài test đa trí thông minh MI</span>
									<p>
										Bài trắc nghiệm được phân chia làm 86 mệnh đề khác nhau tương ứng với đó là 86
										vấn đề, khía cạnh của cuộc sống. Các bạn hãy đọc từng mệnh đề nhằm xác định sự
										tương thích, phù hợp với bản thân mình nhất. Cụ thể, các bạn sẽ lựa chọn với cấp
										độ chính xác như sau:
									</p>
								</div>
								<div className={styles.li}>
									<ol>
										<li style={{ listStyle: 'none' }}>
											1 - Hoàn toàn sai: Khác biệt hoàn toàn với bạn.
										</li>
										<li style={{ listStyle: 'none' }}>2 - Thường là sai: Hiếm khi đúng với bạn.</li>
										<li style={{ listStyle: 'none' }}>
											3 - Không rõ ràng: Thỉnh thoảng hay tùy lúc sẽ giống bạn.
										</li>
										<li style={{ listStyle: 'none' }}>
											4 - Thông thường đúng: Mệnh đề thông thường sẽ đúng với bạn.
										</li>
										<li style={{ listStyle: 'none' }}>
											5 - Hoàn toàn đúng: luôn luôn đúng với bản thân bạn.
										</li>
									</ol>
								</div>
							</div>
							<div className={styles.body__content}>
								{questions.map((question) => (
									<div key={question.id} className={`${styles.question} ${styles.question2} `}>
										<div className={styles.topic2}>
											<p>{question.id}.</p>
											<p>{question.content}</p>
										</div>
										<div className={`border_ra2 ${styles.answer2}`}>
											<div className={styles.father}>
												{data.map((optionData) => (
													<div
														key={optionData.id}
														className={`${styles.dapan} ${
															selectedAnswers[question.id] === optionData.id ? styles.blue : ''
														}`}
														onClick={() => handleOptionClick(question.id, optionData.id)}
													>
														<span>{optionData.option}</span>
													</div>
												))}
											</div>
											{selectedContent[question.id] && (
												<p className={styles.selectedContent}>{selectedContent[question.id]}</p>
											)}
											{selectedAnswers[question.id] === null && (
												<p className={styles.selectedContent} style={{ color: 'red' }}>
													Bạn chưa trả lời câu hỏi này
												</p>
											)}
										</div>
									</div>
								))}
							</div>

							<button className={styles.result} onClick={handleResultClick}>
								Gửi câu trả lời
								<Image width={17} height={17} alt="" src="/images/mi/maybay.svg" />
							</button>
						</div>
						<div className={`${styles.ads} ${styles.adsContainer}`}>
							<Ads />
						</div>
						{modal ? (
							<div className={styles.popupWarning}>
								<div className={styles.popup_content}>
									<Image width={50} height={50} alt="" src={'/images/mi/warning.svg'} />
									<p>
										Bạn chưa hoàn thành các câu hỏi.
										<br />
										Hãy trả lời các câu hỏi còn thiếu và thử lại.
									</p>
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	)
}
