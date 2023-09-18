import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/mbti/introduce.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
interface User {
	username: string
	password: string
}
export default function Content_header() {
	const [user, setUser] = useState({ username: 'exampleUser', password: 'examplePassword' })
	const [loggedIn, setLoggedIn] = useState<boolean>(false)
	const router = useRouter()
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	const handleLogin = () => {
		if (user.username === 'exampleUser' && user.password === 'examplePassword') {
			router.push('/mi/quiz')
		} else {
			router.push('/dang-nhap.html')
		}
	}

	const [quizCompleted, setQuizCompleted] = useState<boolean>(false)
	const checkLoginAndQuiz = () => {
		if (loggedIn && quizCompleted) {
			return (
				<div className={styles.btnllxem}>
					<Link href={'/mi/quiz'}>
						<button className={styles.btnll}>
							<Image width={12} height={12} alt="" src={'/images/mbti/pen.svg'} />
							Làm lại trắc nghiệm
						</button>
					</Link>
					<Link href={'/mi/result'}>
						<button className={styles.btnxemct}>
							<Image width={12} height={12} alt="" src={'/images/mbti/pen.svg'} />
							Xem giải thích chi tiết
						</button>
					</Link>
				</div>
			)
		} else {
			return null // Không hiển thị nút nếu chưa đăng nhập hoặc chưa làm bài trắc nghiệm
		}
	}

	return (
		<div>
			<label className={styles.title}>Trắc nghiệm đa trí thông minh MI</label>
			<div className={styles.content__intro}>
				<div style={{ display: 'flex' }}>
					<p style={{ fontSize: 16 }}>
						Trắc nghiệm đa trí thông minh MI còn được gọi với cái tên là Multiple Intelligences -
						MI. Đây là một phương pháp đánh giá trí thông minh nổi trội của mỗi người, được dựa trên
						Lý thuyết đa trí thông minh (Theory of Multiple Intelligences) do Giáo sư Tâm lý học
						Howard Gardner tiến hành nghiên cứu. <br />
						<br />
						Đã từ lâu, các bài kiểm tra IQ vẫn thường được sử dụng để kiểm tra trí thông minh của
						con người. Hầu hết mọi người vẫn thường nghĩ rằng, test IQ là cách tốt nhất để đo trí
						thông minh. Tuy nhiên, theo công trình nghiên cứu của giáo sư Howard Gardner, bài kiểm
						tra IQ không phải là một cách hoàn hảo để phản ánh một cá nhân, con người khi trưởng
						thành. Nhất là khi, trí tuệ của con người sẽ còn được thay đổi dựa theo công việc hay
						môi trường mà họ đang thích ứng. <br />
						<br />
					</p>
					<Image
						width={270}
						height={270}
						alt="img intro"
						src="https://hungha365.com/storageimage/MI-MBTI/public/images/mi/nao.png"
					/>
				</div>
				<p style={{ fontSize: 16 }}>
					Bên cạnh đó, Tiến sỹ Howard Gardner còn đưa ra một giả thuyết khác là con người không chỉ
					tồn tại một mà có khá nhiều loại trí thông minh khác nhau. Từng phần của não bộ sẽ có sự
					liên quan mật thiết với các loại trí thông minh này. Tất cả đã được ông lý giải một cách
					chi tiết thông qua quyển sách là Frames of Mind – Cơ cấu của trí tuệ. <br />
					<br />
					Trong lý thuyết của đa trí thông minh có nói rằng, con người có tất cả 9 loại thông minh
					khác nhau, tương ứng với đó sẽ là 9 cách để mỗi chúng ta rèn luyện và trở nên tài giỏi.
					Các loại trí thông minh này sẽ được nhận biết thông qua đặc điểm, hành động và sở thích.
					Theo đó, con người sẽ có 9 loại trí thông minh cụ thể là trí thông minh logic, thấu hiểu
					nội tâm, vận động cơ thể, trí thông minh triết học, thấu hiểu thiên nhiên, ngôn ngữ, cảm
					thụ âm nhạc, trí thông minh tương tác xã hội và trí thông minh không gian.
					<br />
					<br />
					Kết quả của bài trắc nghiệm MI sẽ giúp người dùng xác định rõ bản thân thuộc loại trí
					thông minh nào để từ đó tìm hiểu được điểm mạnh và điểm yếu trong từng lĩnh vực cụ thể.
					Điểm thú vị ở đây là mọi người đều có thể thay đổi nếu tập trung vào việc trau dồi và rèn
					luyện.
				</p>
			</div>

			{/* max-width:425px */}
			<div className={styles.content__intro_425}>
				<Image
					width={200}
					height={200}
					alt="img intro"
					src="https://hungha365.com/storageimage/MI-MBTI/public/images/mi/nao.png"
				/>
				<p style={{ fontSize: 16 }}>
					Trắc nghiệm đa trí thông minh MI còn được gọi với cái tên là Multiple Intelligences - MI.
					Đây là một phương pháp đánh giá trí thông minh nổi trội của mỗi người, được dựa trên Lý
					thuyết đa trí thông minh (Theory of Multiple Intelligences) do Giáo sư Tâm lý học Howard
					Gardner tiến hành nghiên cứu. <br />
					<br />
					Đã từ lâu, các bài kiểm tra IQ vẫn thường được sử dụng để kiểm tra trí thông minh của con
					người. Hầu hết mọi người vẫn thường nghĩ rằng, test IQ là cách tốt nhất để đo trí thông
					minh. Tuy nhiên, theo công trình nghiên cứu của giáo sư Howard Gardner, bài kiểm tra IQ
					không phải là một cách hoàn hảo để phản ánh một cá nhân, con người khi trưởng thành. Nhất
					là khi, trí tuệ của con người sẽ còn được thay đổi dựa theo công việc hay môi trường mà họ
					đang thích ứng. <br />
					<br />
					Bên cạnh đó, Tiến sỹ Howard Gardner còn đưa ra một giả thuyết khác là con người không chỉ
					tồn tại một mà có khá nhiều loại trí thông minh khác nhau. Từng phần của não bộ sẽ có sự
					liên quan mật thiết với các loại trí thông minh này. Tất cả đã được ông lý giải một cách
					chi tiết thông qua quyển sách là Frames of Mind – Cơ cấu của trí tuệ. <br />
					<br />
					Trong lý thuyết của đa trí thông minh có nói rằng, con người có tất cả 9 loại thông minh
					khác nhau, tương ứng với đó sẽ là 9 cách để mỗi chúng ta rèn luyện và trở nên tài giỏi.
					Các loại trí thông minh này sẽ được nhận biết thông qua đặc điểm, hành động và sở thích.
					Theo đó, con người sẽ có 9 loại trí thông minh cụ thể là trí thông minh logic, thấu hiểu
					nội tâm, vận động cơ thể, trí thông minh triết học, thấu hiểu thiên nhiên, ngôn ngữ, cảm
					thụ âm nhạc, trí thông minh tương tác xã hội và trí thông minh không gian.
					<br />
					<br />
					Kết quả của bài trắc nghiệm MI sẽ giúp người dùng xác định rõ bản thân thuộc loại trí
					thông minh nào để từ đó tìm hiểu được điểm mạnh và điểm yếu trong từng lĩnh vực cụ thể.
					Điểm thú vị ở đây là mọi người đều có thể thay đổi nếu tập trung vào việc trau dồi và rèn
					luyện.
				</p>
			</div>

			<div className={styles.btn_khamphamigo}>
				<button className={styles.btn_khamphami} onClick={handleLogin}>
					<Image
						width={18}
						height={18}
						alt=""
						src="https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/khampha.svg"
					/>
					Khám phá ngay
				</button>
			</div>

			{quizCompleted && (
				<div className={styles.btnllxem}>
					<Link href={'/mi/quiz'}>
						<button className={styles.btnll}>
							<Image width={12} height={12} alt="" src={'/images/mbti/pen.svg'} />
							Làm lại trắc nghiệm
						</button>
					</Link>
					<Link href={'/mi/result'}>
						<button className={styles.btnxemct}>
							<Image width={12} height={12} alt="" src={'/images/mbti/pen.svg'} />
							Xem giải thích chi tiết
						</button>
					</Link>
				</div>
			)}
			{checkLoginAndQuiz()}
		</div>
	)
}
