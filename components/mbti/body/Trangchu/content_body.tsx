import React from 'react'
import styles from '@/styles/mbti/introduce.module.scss'
import Image from 'next/image'

export default function content_body() {
	const data = [
		{
			id: '1',
			title: ' Trắc nghiệm MBTI là gì?',
			content:
				'MBTI (Myers Briggs Type Indicator) là một phương pháp sử dụng 16 câu hỏi trắc nghiệm và 4 tiêu chí đánh giá để phân tích tính cách con người. Tại Việt Nam, bộ công cụ này vẫn chưa được dùng phổ biến. Các nhà tuyển dụng nhân sự là nhóm đối tượng chủ yếu sử dụng phương pháp này. MBTI do 2 nhà khoa học Kathryn Briggs và Isabel Myer nghiên cứu sáng tạo nên. Bạn  sẽ đánh giá được tính cách thông qua việc trả lời chuỗi câu hỏi trắc nghiệm liên quan có độ chính xác rất cao.',
			imageSrc:
				'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/trac-nghiem-mbti-la-gi 1.svg',
		},
		{
			id: '2',
			title: 'Tiêu chí đánh giá tính cách MBTI là gì?',
			content: `Phương pháp MBTI phân loại tính cách dựa trên 4 tiêu chí cơ bản sau:

            Xu hướng tự nhiên: Tiêu chí này dùng để nhận diện bạn là người hướng nội và hướng ngoại. Người hướng nội có xu hướng thiên về nội tâm, ít nói và ít cởi mở với thế giới bên ngoài. Người hướng ngoại thường xuyên nói, cười và cởi mở với thế giới bên ngoài.
            
            Dựa trên quyết định và lựa chọn: Đây là yếu tố dùng để đánh giá xem bạn là người ra quyết định dựa trên cảm xúc hay lý trí. Nếu bạn là người duy trí thì mọi quyết định được đưa ra đều dựa vào những dữ liệu và tiêu chí rõ ràng. Nếu ra quyết định và lựa chọn dựa vào cảm tính thì bạn là người cảm xúc.
            
            Nhận thức về thế giới: Yếu tố này dùng để xác định bạn là người trực quan hay trực giác. Nếu là người trực quan, bạn sẽ thông qua 5 giác quan để nhận thức về thế giới. Nếu chỉ tin vào những gì mà bản thân suy luận, thu thập được thì bạn là người trực giác.
            
            Cách thức hoạt động: Yếu tố này dùng để đánh giá bạn là người hành động theo nguyên tắc hay sự linh hoạt. Người hành động theo nguyên tác sẽ luôn làm việc theo kỷ luật. Nếu bạn có thể thay đổi những kế hoạch, nguyên tắc khi cần thiết hoặc không muốn có sự ràng buộc nào thì bạn là người hành động theo sự linh hoạt.`,
			imageSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/Group.svg',
		},
		{
			id: '3',
			title: 'Ý nghĩa của MBTI Test',
			content: `MBTI Test thường được các nhà tuyển dụng sử dụng để lựa chọn những ứng viên phù hợp với vị trí và yêu cầu công việc mà doanh nghiệp đang tìm kiếm. Bên cạnh đó, phương pháp này cũng được các trưởng phòng HR hay các nhà quản lý sử dụng bởi kết quả của MBTI mang lại giúp họ hiểu hơn về điểm mạnh và yếu, tính cách của nhân viên.
                     Ngoài ra, MBTI Test còn được các bạn học sinh, sinh viên dùng để định hướng nghề nghiệp cho bản thân. Phương pháp này sẽ giúp các bạn tìm ra được điểm mạnh của bản thân để từ đó lựa chọn nghề nghiệp phù hợp.`,
			imageSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/image 117.svg',
		},
		{
			id: '4',
			title: 'Ứng dụng MBTI trong quản trị nhân sự',
			content: `Phương pháp khám phá tính cách MBTI có thể được áp dụng trong nhiều lĩnh vực. Tuy nhiên, tại Việt Nam, công cụ này chỉ thường được sử dụng trong tuyển dụng, quản lý và đánh nhân sự.`,
			imageSrc:
				'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/Frame 1000009936.svg',
			subItems: [
				{
					id: '4.1',
					title: ' Tuyển dụng nhân sự',
					content: `Phương pháp MBT có khả năng giúp nhà tuyển dụng phân tích tâm lý và nắm được những năng lực của nhân viên. Bên cạnh đó, bộ công cụ này còn giúp nhà tuyển dụng đánh giá ứng viên một cách tổng quan nhất và lụa chọn được người có tính cách phù hợp với vị trí công việc.`, // Nội dung của mục con ở đây
					imageSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/image 118.svg',
				},
				{
					id: '4.2',
					title: 'Quản lý nhân sự',
					content: `Việc hiểu rõ được tính cách của từng nhân viên sẽ giúp nhà quản lý phát huy khả năng lãnh đạo hiệu quả hơn. Hơn thế, việc hiểu tính cách của nhân viên còn giúp giảm thiểu tình trạng mâu thuẫn trong công ty. Các nhóm tính cách phù hợp được kết hợp lại còn giúp hiệu suất công việc đạt đến tối ưu.`, // Nội dung của mục con ở đây
					imageSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/image 119.svg',
				},
				{
					id: '4.3',
					title: 'Đánh giá nhân sự',
					content: `Các nhà quản lý có thể dựa vào phương pháp MBTI để phân loại và đánh giá nhân sự một cách khách quan nhất. Nhà quản lý có thể sử dụng bộ câu hỏi có sẵn của MBTI hoặc tự biên soạn để phân loại và lựa chọn ứng viên phù hợp.`, // Nội dung của mục con ở đây
					imageSrc: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/image 120.svg',
				},
			],
		},
	]
	return (
		<div className={styles.one}>
			{data.map((item) => (
				<div key={item.id} className={styles.content__one}>
					<div className={styles.tieude}>
						{item.id}.{item.title}
					</div>
					<div className={styles.noidung}>
						<div>
							<Image width={820} height={463} src={item.imageSrc} alt="img" />
							<div className={styles.noidung__children}>
								<p>{item.content}</p>
							</div>
						</div>
						<div className={styles.noidung_sub}>
							{item.subItems &&
								item.subItems.map((subItem) => (
									<div key={subItem.id} className={styles.subitem}>
										<div className={styles.tieude_sub}>
											{subItem.id}&nbsp;{subItem.title}
										</div>
										<div>
											<Image width={820} height={463} src={subItem.imageSrc} alt="img" />
											<div className={styles.noidung__children}>
												<p>{subItem.content}</p>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
