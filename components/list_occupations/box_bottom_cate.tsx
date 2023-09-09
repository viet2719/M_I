import styles from '@styles/list_occupations/main_search.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import List_cate from './item_cate'
import { IJob } from '@/utils/interface'
import { base_timviec365 } from '../service/functions'
import { useRouter } from 'next/router'
import { convertToSlug, extractH2Content, extractH3Content, removeHtmlTags } from '@/utils/convert'
type Props = {
	footerNew?: any
}

const Box_bottom_cate = ({ footerNew }: Props) => {
	const [seenMore, setSeenMore] = useState(true)
	const [footerContent, setFooterContent] = useState('') // Chuỗi HTML

	useEffect(() => {
		// Xử lý nội dung HTML sau khi component đã tải vào trình duyệt

		if (typeof document !== 'undefined') {
			// Lấy thẻ div chứa nội dung được chèn từ dangerouslySetInnerHTML
			const divElement = document.querySelector('.footerNew') // Thay thế '.your-div-class-name' bằng lớp CSS hoặc ID của div cụ thể
			if (divElement) {
				// Truy cập danh sách các thẻ h2 trong divElement
				const h2Elements = divElement.querySelectorAll('h2')
				let count = 1 // Khởi tạo biến đếm
				// Lặp qua danh sách thẻ h2 và đặt cho các thẻ có nội dung là "1" một id là "1"
				h2Elements.forEach((h2Element) => {
					h2Element.id = String(count) // Đặt id cho thẻ
					count++ // Tăng biến đếm
				})
				const h3Elements = divElement.querySelectorAll('h3')

				// Lặp qua danh sách thẻ h3 và đặt id cho các thẻ thỏa mãn điều kiện
				h3Elements.forEach((h3Element) => {
					const text = h3Element.innerText

					// Sử dụng biểu thức chính quy để loại bỏ dấu chấm và các ký tự sau nó
					const id = text.replace(/\./g, '').substring(0, 2) // Loại bỏ tất cả dấu chấm
					h3Element.id = id
				})
			}
		}
	}, [footerNew])
	return (
		<div className={styles.box_bottom_cate}>
			<div id={styles.mota}>
				<div className={styles.phu_luc}>
					<div style={{ float: 'left', width: '100%' }}>
						<nav className={styles.table_of_contents}>
							<p className={styles.tt_phu_luc}>
								<span>Mục lục:</span>
							</p>
							<ul>
								{extractH2Content(footerNew?.cate_des)?.map((h2: any, index: number) => {
									return (
										<div key={index}>
											{' '}
											<li key={index} className={styles.li_h2}>
												<a className={styles.ul_h2} href={`#${index + 1}`}>
													{h2}
												</a>
											</li>
											{extractH3Content(footerNew?.cate_des)?.map((h3: any, index: number) => {
												return (
													h2[0] === h3[0] && (
														<li key={index} className={styles.li_h3}>
															<a
																className={styles.ul_h3}
																href={`#${convertToSlug(h3.substring(0, 4))}`}
															>
																{h3}
															</a>
														</li>
													)
												)
											})}
										</div>
									)
								})}
							</ul>
						</nav>
					</div>
				</div>
				<div
					style={{ overflow: 'hidden' }}
					className={`${styles.gt_text} ${seenMore ? styles.over_bv_footer : ''}`}
				>
					<div className="footerNew" dangerouslySetInnerHTML={{ __html: footerNew?.cate_des }} />
				</div>

				<p
					className={`${styles.bv_foo_more_r}`}
					onClick={() => {
						setSeenMore(!seenMore)
					}}
				>
					{seenMore ? '+ Xem thêm' : '- Rút gọn'}{' '}
				</p>
			</div>
		</div>
	)
}

export default Box_bottom_cate
