import React, { useState } from 'react'
import styles from '@/styles/mbti/pagesTracnghiem.module.scss'
import Ads from '@/components/mbti/body/Trangchu/Ads'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
interface Question {
	id: number
	content: string
}

export default function PageTracNghiem() {
	const [answers, setAnswers] = useState<{ [key: number]: string[] | undefined }>({})
	const router = useRouter()
	const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({})
	const [selectedContent, setSelectedContent] = useState<{ [key: number]: string | null }>({})

	const questions: Question[] = [
		{
			id: 1,
			content:
				' Tôi thấy việc tham gia các hình thức thờ cúng như đi Chùa, Nhà thờ hay cúng bái ở các đền chùa là một việc làm có ý nghĩa			',
		},
		{
			id: 2,
			content:
				' Tôi thường xuyên dành thời gian suy ngẫm những câu hỏi về sự sống và cái chết trên thế giới này.			',
		},
		{
			id: 3,
			content:
				'  Tôi đọc rất nhiều tài liệu như Kinh thánh, Sách báo hoặc tài liệu triết học và tâm linh, nó giúp tôi suy nghĩ và suy xét về sự tồn tại sâu sắc hơn',
		},
		{
			id: 4,
			content: ' Tôi thích bàn luận với mọi người về những vấn đề tôn giáo, tư tưởng và triết học.',
		},
		{
			id: 5,
			content: '  Tôi suy nghĩ về ý nghĩa cuộc sống nhiều hơn hầu hết những người khác			',
		},
		{
			id: 6,
			content:
				' Tôi thể hiện cảm xúc và ý tưởng của mình về những chủ đề tâm linh, triết học, tư tưởng hoặc sự tồn tại qua các bài báo, nghiên cứu …		',
		},
		{
			id: 7,
			content:
				'  Tôi dành thời gian ra ngoài đều đặn đến một nơi ẩn cư để suy ngẫm ý nghĩa của cuộc sống, về chúa trời hoặc những câu hỏi lớn khác về cuộc sống con người		',
		},
		{
			id: 8,
			content:
				' Tôi từng có những trải nghiệm tâm linh hoặc tư tưởng, đặc biệt là khi đã truởng thành khiến tôi suy nghĩ về cuộc sống một cách sâu sắc hơn		',
		},
		{
			id: 9,
			content:
				' Tôi rất quan tâm đến những bộ phim, những vở diễn, những tác phẩm liên quan đến chủ đề tâm linh, triết lý hay hiện sinh		',
		},
		{
			id: 10,
			content:
				'  Tôi đang có nghề nghiệp hoặc từng nghĩ đến sẽ có nghề cho phép tôi tập trung nghiên cứu những vấn đề tâm linh và hiện sinh với những người cùng sở thích.		',
		},
		{
			id: 11,
			content: 'Tôi có thể dễ dàng tính toán các con số trong đầu	',
		},
		{
			id: 12,
			content:
				'  Toán học và những môn khoa học là những môn học mà tôi yêu thích khi còn học trong nhà trường phổ thông		',
		},
		{
			id: 13,
			content:
				' Tôi thích thú với những trò chơi hay giải những câu hỏi hóc búa mang tính trí óc mà đòi hỏi phải có suy nghĩ logic			',
		},
		{
			id: 14,
			content:
				'  Tôi thích nghĩ ra và làm các thí nghiệm mà có một chút tính chất là “cái gì xảy ra nếu như…?”			',
		},
		{
			id: 15,
			content:
				'Suy nghĩ của tôi là tìm tòi bản chất, các khuôn mẫu hay nguyên tắc và những trật tự có tính logic trong các sự việc, sự vật. ',
		},
		{
			id: 16,
			content:
				'  Tôi ham thích và hứng thú với những phát minh và tiến bộ của khoa học kỹ thuật trên thế giới			',
		},
		{
			id: 17,
			content:
				'  Tôi tin chắc rằng mọi thứ trên đời đều có nguyên do và có cách lý giải hợp lý và chặt chẽ cho nó.		',
		},
		{
			id: 18,
			content:
				'  Đôi khi tôi tư duy bằng những khái niệm trừu tượng, tách biệt rõ ràng, không có từ ngữ và hình ảnh		',
		},
		{
			id: 19,
			content:
				' Tôi thích tìm kiếm những thiếu sót mang tính logic trong những thứ mà mọi người nói và làm ở nhà cũng như trong công việc.		',
		},
		{
			id: 20,
			content:
				'  Tôi cảm thấy thoải mái, dễ chịu hơn khi có một điều gì đó được đo đạc, xếp loại, phân tích và định lượng theo một phương pháp nhất định.			',
		},
		{
			id: 21,
			content: '  Tôi thường thấy được rõ ràng những hình ảnh hiện lên khi tôi nhắm mắt lại		',
		},
		{
			id: 22,
			content: '  Tôi rất nhạy cảm với mầu sắc		',
		},
		{
			id: 23,
			content:
				'  Tôi thường sử dụng máy quay phim hoặc máy ảnh để ghi lại những gì tôi nhìn thấy ở xung quanh mình.			',
		},
		{
			id: 24,
			content:
				'  Tôi thích thú với việc giải câu đố xếp hình, mê cung hay những câu đố khác mà có sự dụng hình ảnh.			',
		},
		{
			id: 25,
			content: 'Tôi có những giấc mơ đầy hình ảnh sống động vào ban đêm.			',
		},
		{
			id: 26,
			content:
				'  Nói chung tôi có thể tìm thấy đường của mình cả ở những nơi mà tôi không hề quen biết	',
		},
		{
			id: 27,
			content: '  Tôi thích viết hoặc vẽ nguệch ngoặc một cách lơ đãng.		',
		},
		{
			id: 28,
			content: '  Khi còn đi học, đối với tôi hình học dễ hơn nhiều so với môn đại số.			',
		},
		{
			id: 29,
			content:
				'  Tôi có thể tưởng tượng một cách thoải mái về hình ảnh của một sự vật hoặc một cảnh bất kỳ nào đó sẽ được hiện ra như thế nào, khi được nhìn từ trên cao xuống bằng đôi mắt của con chim đang bay			',
		},
		{
			id: 30,
			content:
				'  Tôi thích nhìn ngắm một tài liệu, một cuốn sách có nhiều hình ảnh minh hoạ hơn là đọc chúng.		',
		},
		{
			id: 31,
			content:
				'  Tôi tham gia ít nhất một môn thể thao hoặc một hoạt động thân thể một cách đều đặn và thường xuyên.			',
		},
		{
			id: 32,
			content:
				'  Tôi cảm thấy thật khó khăn khi ngồi lỳ một chỗ trong khoảng một thời gian dài mà không có sự vận động.			',
		},
		{
			id: 33,
			content:
				'  Tôi thích làm việc bằng chân tay với những công việc hay hoạt động có tính cụ thể như nghề may, thêu thùa, đan nát hay nghề mộc, điêu khắc			',
		},
		{
			id: 34,
			content:
				'  Những ý tưởng tốt nhất thường đến với tôi khi tôi đang đi dạo hoặc chơi đùa bên ngoài hoặc khi tôi đang tham gia vào một hoạt động vận động thân thể nào đó		',
		},
		{
			id: 35,
			content: '  Tôi thường thích dành thời gian rảng rỗi của mình để đi ra ngoài.			',
		},
		{
			id: 36,
			content:
				'  Tôi thường thích sử dụng các cử chỉ phức tạp của tay hoặc các dạng khác của ngôn ngữ cơ thể khi đối thoại hay nói chuyện với một người nào đó.		',
		},
		{
			id: 37,
			content:
				'Khi làm việc hay học tập tôi thường thích chạm vào những đồ vật để hiểu rõ hơn về chúng			',
		},
		{
			id: 38,
			content:
				' Tôi ham thích được chơi những trò chơi tiêu khiển liều lĩnh, táo bạo mà đòi hỏi sự dũng cảm hoặc tham gia những hoạt động thân thể tương tự, có thể đem lại cảm giác hồi hộp sợ hãi cho người chơi		',
		},
		{
			id: 39,
			content: 'Tôi có thể tự vận động tốt cũng như phối hợp với người khác.		',
		},
		{
			id: 40,
			content:
				'  Tôi cần được thực tập một kỹ năng mới nhiều hơn là chỉ đọc về nó một cách đơn thuần hay xem một băng video mô tả về nó.		',
		},
		{
			id: 41,
			content: '  Tôi có một giọng hát dịu dàng và truyền cảm			',
		},
		{
			id: 42,
			content:
				' Tôi thường xuyên dành thời gian suy ngẫm những câu hỏi về sự sống và cái chết trên thế giới này.			',
		},
		{
			id: 43,
			content:
				'  Tôi thường nghe nhạc ở đài phát thanh, ở đĩa hát, ở băng từ hay một cuộc biểu diễn âm nhạc		',
		},
		{
			id: 44,
			content: '  Tôi có thể chơi được một loại nhạc cụ nào đó		',
		},
		{
			id: 45,
			content:
				'  Cuộc sống của tôi sẽ thật nghèo nàn, đơn điệu nếu trong đó không có âm nhạc hỗ trợ			',
		},
		{
			id: 46,
			content:
				'  Đôi khi tôi nhận thấy mình đang đi bộ trên đường với những đoạn quảng cáo trên ti vi được lặp đi lặp lại trong đầu hoặc những giai điệu nào đó lướt qua trong suy nghĩ		',
		},
		{
			id: 47,
			content:
				' Tôi có thể dễ dàng dành thời gian để nghe một đoạn nhạc được chơi với chỉ một dụng cụ nhạc đơn giản		',
		},
		{
			id: 48,
			content:
				'  Nếu tôi nghe một bản nhạc được tuyển chọn nào đó, sau một hoặc hai lần được nghe, tôi thường có thể hát lại chúng một cách tương đối chính xác			',
		},
		{
			id: 49,
			content:
				'  Tôi thường tạo ra âm thanh gõ nhe nhẹ hoặc hát những giai điệu nho nhỏ trong khi làm việc, học tập hoặc một hoạt động nào đó			',
		},
		{
			id: 50,
			content: '  Tôi thường làm việc hiệu quả hơn khi có âm nhạc kích thích.		',
		},
		{
			id: 51,
			content:
				'  Tôi thuộc dạng người mà những người khác tìm đến để nghe lời khuyên và tư vấn của tôi về công việc, tình cảm hoặc các vấn đề trong cuộc sống			',
		},
		{
			id: 52,
			content:
				' Tôi thích những môn thể thao có tính đồng đội như bóng đá, bóng chuyền hơn là những môn thể thao mang tính cá nhân đối kháng như quyền anh, cờ vua, điền kinh		',
		},
		{
			id: 53,
			content:
				'  Khi gặp rắc rối khó khăn, tôi thích đi tìm một người khác giúp đỡ hơn là việc tôi có gắng làm việc để giải quyết những vấn đề vướng mắc, khó khăn của bản thân			',
		},
		{
			id: 54,
			content: '  Tôi có ít nhất 3 người bạn thân		',
		},
		{
			id: 55,
			content: '  Tôi yêu thích những trò giải trí có nhiều người tham gia.			',
		},
		{
			id: 56,
			content:
				'  Tôi thấy thích thú khi có cơ hội chia sẻ với những người khác hoặc hướng dẫn một nhóm người làm những điều mà tôi đã biết rõ phương pháp thực hiện như thế nào		',
		},
		{
			id: 57,
			content: ' Tôi tự coi mình là người lãnh đạo hoặc chí ít mọi người cũng gọi tôi là vậy		',
		},
		{
			id: 58,
			content: '  Tôi cảm thấy thoải mái khi ở giữa một đám đông		',
		},
		{
			id: 59,
			content: '  Tôi cảm thấy thoải mái khi ở giữa một đám đông		',
		},
		{
			id: 60,
			content:
				'  Tôi thích dành những buổi tối để tham gia các cuộc họp đông người sống động hơn là ở nhà một mình	',
		},
		{
			id: 61,
			content:
				' Tôi thường để thời gian một mình nghiền ngẫm về những vấn đề quan trọng trong cuộc sống	',
		},
		{
			id: 62,
			content:
				'  Tôi thích đến dự các buổi tư vấn hoặc các buổi hội thảo về phát triển cá nhân, khám phá bản thân con người để hiểu hơn về con người mình	',
		},
		{
			id: 63,
			content:
				'  Tôi có những chính kiến và cách nghĩ khác hẳn so với những người xung quanh mình làm cho tôi tách biệt với đám đông		',
		},
		{
			id: 64,
			content:
				'  Tôi có những sự hứng thú và những sở thích đặc biệt trong việc giữ kín nhiều điều tốt đẹp cho bản thân		',
		},
		{
			id: 65,
			content:
				'  Tôi có một cách nhìn thực tế về những mặt mạnh và hạn chế của bản thân (Những điều này được khẳng định từ thông tin hối đáp từ những người xung quanh)		',
		},
		{
			id: 66,
			content:
				'  Tôi thích ở một mình suốt thời gian cuối tuấn hoặc kỳ nghỉ trong một căn phòng riêng biệt hoặc một góc khuất, một căn nhà nhỏ giữa rừng ít người làm phiền hơn là trong một khu nghỉ sang trọng đông người		',
		},
		{
			id: 67,
			content:
				'   Tôi tự coi mình là người có ý chí mạnh mẽ hoặc là một người có khuynh hướng độc lập',
		},
		{
			id: 68,
			content:
				' Tôi giữ một quyển sổ nhật ký cá nhân hoặc một cuốn sổ ghi lại những sự kiện trong đời sống nội tâm của tô',
		},
		{
			id: 69,
			content:
				'  Tôi tự làm việc cho mình hoặc ít nhất là có những suy nghĩ nghiêm chỉnh về công việc và nghề nghiệp của mình			',
		},
		{
			id: 70,
			content:
				'  Tôi là người biết rất rõ định hướng cuộc sống của mình, biết rõ mẫu hình người mà tôi muốn trở thành là gì	',
		},
		{
			id: 71,
			content: '   Nhà tôi có một mảnh vườn và tôi thích dạo chơi loanh quanh trong đó.		',
		},
		{
			id: 72,
			content:
				'  Tôi thích dành thời gian để đi du lịch, đi bộ hoặc chỉ dạo chơi trong thiên nhiên và tận hưởng vẻ đẹp của nó.		',
		},
		{
			id: 73,
			content: ' Tôi thích tham gia vào các tổ chức hoạt động vì môi trường.	',
		},
		{
			id: 74,
			content: '   Tôi thích nuôn nhiều thú vật trong nhà hơn là chỉ nuôn chó mèo cảnh.		',
		},
		{
			id: 75,
			content:
				'Tôi có sở thích liên quan đến thiên nhiên theo một cách nào đó như nghe chim hót, trồng cây cảnh, siêu tập bướm khô…',
		},
		{
			id: 76,
			content:
				'   Tôi thích được đăng ký và học tập trong những lớp liên quan đến thiên nhiên dành cho người lớn.',
		},
		{
			id: 77,
			content:
				'  Tôi thích đi thăm sở thú, bảo tàng lịch sử tự nhiên hoặc những nơi nghiên cứu thế giới tự nhiên khác.			',
		},
		{
			id: 78,
			content:
				'   Tôi thích xem những chương trình về thế giới tự nhiên trên ti vi như Khám phá tự nhiên…		',
		},
		{
			id: 79,
			content:
				' Tôi thích đến những địa điểm tự nhiên như công viên, bãi cắm trại hơn là khách sạn hoặc các khu nghỉ mát sang trọng hay những địa điểm đông người để nghỉ ngơi. ',
		},
		{
			id: 80,
			content:
				'   Tôi rất giỏi phân biệt sự khác nhau giữa những chủng loại chim, chó mèo, cây cối cũng như các loài động thực vật khác.		',
		},
		{
			id: 81,
			content:
				'  Tôi thấy việc tham gia các hình thức thờ cúng như đi Chùa, Nhà thờ hay cúng bái ở các đền chùa là một việc làm có ý nghĩa		',
		},
		{
			id: 82,
			content:
				'  Tôi thường xuyên dành thời gian suy ngẫm những câu hỏi về sự sống và cái chết trên thế giới này.		',
		},
		{
			id: 83,
			content:
				' Tôi đọc rất nhiều tài liệu như Kinh thánh, Sách báo hoặc tài liệu triết học và tâm linh, nó giúp tôi suy nghĩ và suy xét về sự tồn tại sâu sắc hơn		',
		},
		{
			id: 84,
			content:
				'  Tôi thích bàn luận với mọi người về những vấn đề tôn giáo, tư tưởng và triết học.		',
		},
		{
			id: 85,
			content: '  Tôi suy nghĩ về ý nghĩa cuộc sống nhiều hơn hầu hết những người khác		',
		},
		{
			id: 86,
			content:
				'  Tôi thể hiện cảm xúc và ý tưởng của mình về những chủ đề tâm linh, triết học, tư tưởng hoặc sự tồn tại qua các bài báo, nghiên cứu…		',
		},
		{
			id: 87,
			content:
				'  Tôi dành thời gian ra ngoài đều đặn đến một nơi ẩn cư để suy ngẫm ý nghĩa của cuộc sống, về chúa trời hoặc những câu hỏi lớn khác về cuộc sống con người		',
		},
		{
			id: 88,
			content:
				'  Tôi từng có những trải nghiệm tâm linh hoặc tư tưởng, đặc biệt là khi đã truởng thành khiến tôi suy nghĩ về cuộc sống một cách sâu sắc hơn			',
		},
		{
			id: 89,
			content:
				' Tôi rất quan tâm đến những bộ phim, những vở diễn, những tác phẩm liên quan đến chủ đề tâm linh, triết lý hay hiện sinh			',
		},
		{
			id: 90,
			content:
				' Tôi đang có nghề nghiệp hoặc từng nghĩ đến sẽ có nghề cho phép tôi tập trung nghiên cứu những vấn đề tâm linh và hiện sinh với những người cùng sở thích.	',
		},
	]

	const handleResultClick = () => {
		const answeredQuestions = Object.keys(selectedAnswers).length
		const totalQuestions = questions.length
		if (answeredQuestions !== totalQuestions) {
			//Bắt buộc phải trả lời hết câu hỏi
			alert('Bạn chưa hoàn thành các câu hỏi.Hãy trả lời các câu hỏi còn thiếu và thử lại.')
		} else {
			// chuyển sang trang kết quả sau khi trả lời xong
			router.push('/mi/result')
		}
	}
	const data = [
		{
			id: 1,
			option: '1',
			cont: 'Chắc chắn',
		},
		{
			id: 2,
			option: '2',
			cont: 'Không chắc chắn',
		},
		{
			id: 3,
			option: '3',
			cont: 'Không đúng',
		},
	]

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
										Bạn hãy đọc những mệnh đề dưới đây và nhận định về độ chính xác của những mệnh
										đề đó với bản thân mình, từ 1 (Chắc chắn) đến 3 (Không đúng)
									</p>
								</div>
								<div className={styles.li}>
									<ol>
										<li>1 - Chắc chắn</li>
										<li>2 - Không chắc chắn</li>
										<li>3 - Không đúng</li>
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
					</div>
				</div>
			</div>
		</div>
	)
}
