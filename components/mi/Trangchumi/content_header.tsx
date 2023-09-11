import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/mbti/introduce.module.scss'
import Link from 'next/link'
export default function content_header() {
	return (
		<div>
			<label className={styles.title}>Trắc nghiệm đa trí thông minh MI</label>
			<div className={styles.content__intro}>
				<p>
					Trắc nghiệm đa trí thông minh MI (Multiple Intelligences) là phương pháp đánh giá trí
					thông minh nổi trội của mỗi người, dựa trên Lý thuyết đa trí thông minh (Theory of
					Multiple Intelligences) nghiên cứu bởi Giáo sư Tâm lý học Howard Gardner.
					<br />
					<br />
					Theo lý thuyết này, Howard Gardner đã phản bác quan niệm truyền thống về khái niệm thông
					minh, từng được thống nhất và đánh giá bởi bài kiểm tra IQ. Có nghĩa, một người có khả
					năng giải quyết dễ dàng một bài toán phức tạp, chưa chắc đã thông minh hơn một người trật
					vật, loay hoay mãi không giải xong.
					<br />
					<br />
					Kết quả trắc nghiệm MI sẽ trả lời cho câu hỏi “Bạn có trí thông minh nổi trội trong lĩnh
					vực nào?”. Từ đó giúp mỗi cá nhân hiểu bản thân mình hơn, cũng như đưa ra quyết định chính
					xác không chỉ với lựa chọn nghề nghiệp mà còn với tất cả vấn đề xoay quanh cuộc sống. Tuy
					nhiên, kết quả này không phải là “hằng số” trong suốt cuộc đời mà có thể sẽ thay đổi tùy
					vào sự trau dồi của mỗi cá nhân.
				</p>
				<Image
					width={270}
					height={270}
					alt="img intro"
					src="https://hungha365.com/storageimage/MI-MBTI/public/images/mi/nao.png"
				/>
			</div>
			<div className={styles.content__intro_425}>
				<Image
					width={200}
					height={200}
					alt="img intro"
					src="https://hungha365.com/storageimage/MI-MBTI/public/images/mi/nao.png"
				/>
				<p>
					Trắc nghiệm đa trí thông minh MI (Multiple Intelligences) là phương pháp đánh giá trí
					thông minh nổi trội của mỗi người, dựa trên Lý thuyết đa trí thông minh (Theory of
					Multiple Intelligences) nghiên cứu bởi Giáo sư Tâm lý học Howard Gardner.
					<br />
					<br />
					Theo lý thuyết này, Howard Gardner đã phản bác quan niệm truyền thống về khái niệm thông
					minh, từng được thống nhất và đánh giá bởi bài kiểm tra IQ. Có nghĩa, một người có khả
					năng giải quyết dễ dàng một bài toán phức tạp, chưa chắc đã thông minh hơn một người trật
					vật, loay hoay mãi không giải xong.
					<br />
					<br />
					Kết quả trắc nghiệm MI sẽ trả lời cho câu hỏi “Bạn có trí thông minh nổi trội trong lĩnh
					vực nào?”. Từ đó giúp mỗi cá nhân hiểu bản thân mình hơn, cũng như đưa ra quyết định chính
					xác không chỉ với lựa chọn nghề nghiệp mà còn với tất cả vấn đề xoay quanh cuộc sống. Tuy
					nhiên, kết quả này không phải là “hằng số” trong suốt cuộc đời mà có thể sẽ thay đổi tùy
					vào sự trau dồi của mỗi cá nhân.
				</p>
			</div>
			<div className={styles.btn_khamphamigo}>
				<Link href={'/mi/quiz'}>
					<button className={styles.btn_khamphami}>
						<Image
							width={18}
							height={18}
							alt=""
							src="https://hungha365.com/storageimage/MI-MBTI/public/images/mbti/khampha.svg"
						/>
						Khám phá ngay
					</button>
				</Link>
			</div>
		</div>
	)
}
