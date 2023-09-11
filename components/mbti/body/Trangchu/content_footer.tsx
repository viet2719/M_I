import React from 'react'
import styles from '@/styles/mbti/introduce.module.scss'
import Image from 'next/image'

interface PersonalityData {
	id: string

	imgSrc4: string

	personality_name: string
	overview: string
}
export default function content_footer() {
	// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
	const data: PersonalityData[] = [
		{
			id: '1',
			personality_name: 'ISTJ - Người trách nhiệm',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/tongcon.svg',

			overview:
				'Những người thuộc nhóm ISTJ thường rất trầm lặng, luôn giữ chữ tín và yêu thích sự an toàn,. Đặc biệt, ISTJ rất giỏi trong việc lập và sắp xếp kế hoạch. Tuy nhiên, nhóm tính cách này thường không dễ dàng đồng cảm với người khác và không thích bày tỏ suy nghĩ, sở thích của bản thân.',
		},
		{
			id: '2',
			personality_name: 'ISFJ - Người nuôi dưỡng',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/ISFJ2.png',

			overview:
				'ISFJ là nhóm người sống thiên về cảm xúc. Thế giới nội tâm của ISFJ vô cùng phong phú và thích thực hành hơn là học lý thuyết. Ngoài ra, ISFJ còn có khiếu thẩm mỹ cao và thích giúp đỡ mọi người. Tuy nhiên, nhóm người này khá khó hiểu, thường bộc lộ cảm xúc cá nhân ra bên ngoài nhiều hơn. ISFJ thường đề cao bản thân và cần những lời khen tích cực.',
		},
		{
			id: '3',
			personality_name: 'ISFP - Người nghệ sĩ',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/nghesi2.png',

			overview:
				'ISFP là người sống theo cảm xúc. Thông thường, ISFP dễ bị cuốn hút bới cái đẹp và luôn hướng tới hành động. Đặc biệt, ISFP là người rất sâu sắc, tốt bụng. Người thuộc nhóm tính cách này thường có tài năng trong lĩnh vực sáng tạo nghệ thuật. Ngoài ra, ISFP không thích lãnh đạo và chỉ dẫn người khác.',
		},
		{
			id: '4',
			personality_name: 'ISTP - Nhà cơ học',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item4.4.png',

			overview:
				'Những người thuộc nhóm ISTP luôn muốn tìm hiểu cách vận hành của mọi thứ. ISTP thường thích mạo hiểm và có niềm tin vững vàng với bản thân. Bên cạnh đó, nhóm tính cách này còn là người chăm chỉ, giỏi giải quyết tình huống và đáng tin cậy. Tuy nhiên, ISTP lại thích ở một mình và không thích bị nhận xét, bị đánh giá.',
		},
		{
			id: '5',
			personality_name: 'INFP - Người lý tưởng hóa',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item5.4.png',

			overview:
				'INFP là nhóm người có tính chu đáo, nhiệt tình, thích lắng nghe và thấu hiểu con người. INFP luôn đặt cho công việc các tiêu chuẩn cao. Tuy nhiên, nhóm người tính cách này không thích xung đột và luôn tìm cách né tránh các cuộc cãi vã.',
		},
		{
			id: '6',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item6.4.png',
			personality_name: 'INFJ - Người che chở',

			overview:
				'INFJ là nhóm người có trực giác rất tốt. Họ thích sắp xếp công việc theo trình tự, có tính kiên nhẫn cao và biết thấu hiểu người khác. Bên cạnh đó, INFJ rất tin tưởng vào bản thân nên họ thích làm việc một mình.',
		},
		{
			id: '7',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item7.4.png',
			personality_name: 'INTJ - Nhà khoa học',

			overview:
				'INTJ là nhóm người thường có hoạch định chiến lược cụ thể, tư duy logic. Những người có tính cách này luôn đặt ra những yêu cầu cao về các tổ chức hệ thống và có tư duy mạch lạc nên phù hợp với các vị trí chỉ đạo. Tuy nhiên, INTJ là người có tham vọng lớn, ít quan tâm đến người khác và cũng rất khó để hiểu được họ.',
		},
		{
			id: '8',
			personality_name: 'INTP - Nhà tư duy',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item8.4.png',

			overview:
				'INTP là nhóm người có tiềm năng giải quyết vấn đề. Đối với INTP, kiến thức là điều quan trọng nhất. Ngoài ra,, INTP không thích làm lãnh đạo và điều khiển người khác. Nhóm người có tính cách INTP thường rất yêu bản thân và chỉ thích làm việc độc lập.',
		},
		{
			id: '9',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item9.4.png',
			personality_name: 'ENFJ - Người cho đi',

			overview:
				'ENFJ là người có kỹ năng về hùng biện, khóe léo, biết cách đối nhân xử thế. Hơn thế, những người thuộc nhóm người này còn rất giỏi trong việc thiết lập và duy trì mối quan hệ. Bên cạnh đó, nhóm tính cách ENFJ còn là người rất ấm áp và tình cảm. Tuy nhiên, ENFJ thường có xu hướng sống khép kín so với nhứng người hướng ngoại khác.',
		},
		{
			id: '10',
			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item10.4.png',
			personality_name: 'ENFP - Người truyền cảm hứng',

			overview:
				'Những người thuộc nhóm ENFP thường rất nhiệt tình, thông minh. ENFP có khả năng thích nghi và tương tác linh hoạt với mọi việc. Tuy nhiên, nhóm người có tính cách này thường dễ bị phân tán bởi những thứ mới lạ xung quanh. Đôi lúc, mọi thứ sẽ trở nên nhạt nhẽo rất nhanh với ENFP',
		},
		{
			id: '11',
			personality_name: 'ENTJ - Nhà điều hành',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item11.4.png',
			overview:
				'Bạn quan tâm đến các bộ biểu mẫu OKRs bao gồm: quy trình áp dụng vào Doanh nghiệp, form check-in OKRs, timeline áp dụng OKRs,… Nhận bộ biểu mẫu OKRs miễn phí ngay bên dưới.Các nhà nghiên cứu chỉ ra rằng nhóm người thuộc ENTJ có khả năng lãnh đạo rất tốt.Người có tính cách ENTJ thường thích giao tiếp, coi trọng sự nghiệp và đi theo chủ nghĩa hoàn hảo.Bên cạnh đó, ENTJ là kiểu người không bị cảm xúc chi phối và không dễ đồng cảm.',
		},
		{
			id: '12',
			personality_name: 'ENTP - Người có tầm nhìn',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item12.4.png',
			overview:
				'ENTP là người thích khám phá và tìm hiểu thế giới xung quanh và có khả năng hiểu được tâm lý con người dựa trên trực giác tốt. Ngoài ra, ENTP rất nhanh nhẹn, giao tiếp tốt và luôn tràn ngập ý tưởng sáng tạo. Tuy nhiên, ENTP lại thích được làm việc tự do mà không có kế hoạch cụ thể.',
		},
		{
			id: '13',
			personality_name: 'ESFJ - Người quan tâm',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item13.4.png',
			overview:
				'ESFJ là những người ấm áp, biết lắng nghe và thấu kiểu moi người. Tuy nhiên, ESFJ rất dễ bị cảm xúc chi phối nên họ không nên là người quyết định trong các vấn đề quan trọng. Ngoài ra, những người này cũng thường không quan tâm đến sự phân tích phức tạp hay các cuộc thảo luận về nguyên nhân, hậu quả.',
		},
		{
			id: '14',
			personality_name: 'ESFP - Người trình diễn',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item14.4.png',
			overview:
				'ESFP là người thích những trải nghiệm mới mẻ và luôn muốn làm tâm điểm của sự chú ý. Những người thuộc nhóm tính cách này thường có kỹ năng giao tiếp tốt, lạc quan, có khiếu thẩm mỹ và có nhận thức tốt. Tuy nhiên, ESFP không muốn dành thời gian để tìm hiểu một lý thuyết phức tạp mà luôn dựa vào sự may mắn hoặc nhờ người khác giúp đỡ.',
		},
		{
			id: '15',
			personality_name: 'ESTJ -  Người bảo hộ',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item15.4.png',
			overview:
				'ESTJ là người sống thực tế, cụ thể và luôn gánh vác những trách nhiệm to lớn. Nhóm tính cách ESTJ là kiểu người luôn cố gắng hết mình để hoàn thành nhiệm vụ và tận tâm với công việc. Tuy nhiên, ESTJ thường có xu hướng cô lập bản thân khi bị căng thẳng đè nén.',
		},
		{
			id: '16',
			personality_name: 'ESTP - Người thực thi',

			imgSrc4: 'https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/img/item16.4.png',
			overview:
				'Các nhà khoa học đã chỉ ra rằng ESTP là người rất thẳng thắn và tinh ý trong việc nắm bắt được động cơ hoạt động của người khác. Ngoài ra, ESTP biết cách tạo ra những năng lượng tích cực cho mọi người. Tuy nhiện, ESTP không có trực giác tốt và không thích làm việc trong khuôn khổ.',
		},
	]
	return (
		<div>
			<label className={styles.label}>16 loại hình tính cách MBTI</label>
			<div className={styles.grid}>
				{data.map((item, index) => (
					<div key={index} className={styles.grid_content}>
						<div className={styles.grid_image}>
							<Image width={100} height={100} alt="" src={item.imgSrc4} />
						</div>
						<div className={styles.content__content}>
							<div className={styles.grid_title}>{item.personality_name}</div>
							<div className={styles.grid_content_sub}>
								<div className={styles.text}>{item.overview}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
