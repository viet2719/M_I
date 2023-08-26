import Chat_NTD from '@/components/common/chat_NTD'
import Footer from '@/components/common/footer'
import New_banner from '@/components/common/new_banner'
import Detail from '@/components/details/details'
import List_cate from '@/components/list_occupations/item_cate'
import styles from '@styles/list_occupations/home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const List_occupations = () => {
	const data = [
		{
			id: 1,
			title: 'Ngành nghề liên quan:',
			links: [
				{ href: '/link-1', text: 'Link 1' },
				{ href: '/link-2', text: 'Link 2' },
				{ href: '/link-3', text: 'Link 3' },
			],
		},
		{
			id: 2,
			title: 'Chức danh:',
			links: [
				{ href: '/link-4', text: 'Link 4' },
				{ href: '/link-5', text: 'Link 5' },
			],
		},
		{
			id: 3,
			title: 'Từ khóa liên quan:',
			links: [
				{ href: '/link-6', text: 'Link 6' },
				{ href: '/link-7', text: 'Link 7' },
				{ href: '/link-8', text: 'Link 8' },
			],
		},
		{
			id: 4,
			title: 'Địa điểm:',
			links: [{ href: '/link-9', text: 'Link 9' }],
		},
		{
			id: 5,
			title: 'Công ty:',
			links: [
				{ href: '/link-10', text: 'Link 10 Link 10 Link 10 Link 10 Link 10 Link 10Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
				{ href: '/link-10', text: 'Link 10' },
				{ href: '/link-11', text: 'Link 11' },
				{ href: '/link-12', text: 'Link 12' },
			],
		},
	]
	const [expandedItems, setExpandedItems] = useState<any>()
	const toggleItem = (index: number) => {
		if (index === expandedItems) {
			setExpandedItems('')
		} else {
			setExpandedItems(index)
		}
	}
	return (
		<>
			{!true ? (
				<>
					<New_banner />

					<div className={styles.main_timviec}>
						<div className={styles.container_timviec}>
							<div className={`${styles.div_bre} ${styles.div_bre_2}`}>
								<ul
									className={styles.breadcrumb}
									itemScope
									itemType="http://schema.org/BreadcrumbList"
								>
									<li className={styles.first}>
										<Link href="https://timviec365.vn/" target="_blank" itemProp="item">
											<span itemProp="name">Trang chủ</span>
										</Link>
									</li>
									<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
										<Link href={'/'} itemProp="item">
											<span itemProp="name">Việc làm KD bất động sản</span>
										</Link>
									</li>
								</ul>
							</div>
							<div className={styles.tag_tdnew}>
								<h1> Tuyển dụng, tìm việc làm KD bất động sản tháng 08/2023 (1690 việc làm) </h1>
							</div>
							<div className={styles.vl_left}>
								<div
									className={`${styles.right_cate} ${styles.nd_cate} ${styles.nd_caten} ${styles.nd_cate_new}`}
									id={styles.nd_cate}
								>
									<div className={styles.box_type}>
										<Link
											href="/viec-lam-kd-bat-dong-san-c33v0"
											rel="nofollow"
											className={`${styles.items_type} ${styles.active}`}
										>
											Phù hợp nhất
										</Link>
										<Link
											href="/viec-lam-kd-bat-dong-san-c33v0?new=1"
											rel="nofollow"
											className={styles.items_type}
										>
											Mới nhất
										</Link>
										<Link
											href="/viec-lam-kd-bat-dong-san-c33v0?money=1"
											rel="nofollow"
											className={styles.items_type}
										>
											Lương tốt nhất
										</Link>
										<div className={styles.box_mb_items}>
											<p className={styles.items_name}>Phù hợp nhất</p>
											<div className={styles.pop_items}>
												<Link href="/viec-lam-kd-bat-dong-san-c33v0" rel="nofollow">
													Phù hợp nhất
												</Link>
												<Link href="/viec-lam-kd-bat-dong-san-c33v0?new=1" rel="nofollow">
													Mới nhất
												</Link>
												<Link href="/viec-lam-kd-bat-dong-san-c33v0?money=1" rel="nofollow">
													Lương tốt nhất
												</Link>
											</div>
										</div>
									</div>
									<List_cate />
								</div>
							</div>
							<Chat_NTD classNameProps={true} propsElementSlugNganhNghe={true} />
							<p className={styles.title_cate_list}>
								Mẫu CV Bất động sản đẹp nhất{' '}
								<Link
									className={styles.cv_all}
									rel="nofollow"
									href="https://timviec365.vn/cv365/cv-bat-dong-san"
									target="_blank"
								>
									(xem tất cả mẫu CV)
								</Link>
							</p>
							<div className={styles.upcv_st}>
								<p>AI365: Có việc siêu tốc cập nhật cv nhanh - bật đèn xanh cho nhà tuyển dụng</p>
								<Link
									rel="nofollow"
									href="/tai-ho-so.html"
									className={styles.btn_upcvst}
									title="Tải hồ sơ của bạn lên"
								>
									Tải CV từ máy tính của bạn
								</Link>
							</div>
							<div className={styles.cate_tag}>
								{data.map((item, index) => (
									<div
										key={index}
										className={`${styles.dm_gy_list} ${
											expandedItems === item.id ? '' : styles.rut_gon
										}`}
									>
										<p className={styles.title_tag}>{item.title}</p>
										{item.links.map((link, linkIndex) => (
											<React.Fragment key={linkIndex}>
												<Link href={link.href}>{link.text}</Link>
												{linkIndex < item.links.length - 1 && <span>-</span>}
											</React.Fragment>
										))}
										{expandedItems === item.id ? (
											<span className={styles.hiden_cd} onClick={() => toggleItem(item.id)}>
												<Image
													height={24}
													width={24}
													src="/images/before_login/icons_hiden.png"
													alt="Xem thêm gợi ý"
												/>
											</span>
										) : (
											<span className={styles.show_cd} onClick={() => toggleItem(item.id)}>
												<Image
													height={24}
													width={24}
													src="/images/before_login/icons_more.png"
													alt="Xem thêm gợi ý"
												/>
											</span>
										)}
									</div>
								))}
							</div>
							<div className={styles.box_bottom_cate}>
								<div id={styles.mota}>
									<div className={styles.phu_luc}>
										<div style={{ float: 'left', width: '100%' }}>
											<nav className={styles.table_of_contents}>
												<p className={styles.tt_phu_luc}>
													<span>Mục lục:</span>
												</p>
												<ul>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
													<li>12</li>
												</ul>
											</nav>
										</div>
									</div>
									<div className={`${styles.gt_text} ${styles.over_bv_footer}`}>
										<h2
											style={{ textAlign: 'justify' }}
											id="kinh-nghiem-nhan-vien-bat-dong-san-da-vuot-qua-duoc-7-ngay-thu-viec-dau-tien"
										>
											<span style={{ fontSize: 14 }}>
												<span style={{ fontFamily: 'arial, helvetica, sans-serif' }}>
													<strong>1.</strong>&nbsp;
													<strong>
														Kinh nghiệm nhân viên bất động sản đã vượt qua được 7 ngày thử việc đầu
														tiên
													</strong>
												</span>
											</span>
										</h2>{' '}
										<p style={{ textAlign: 'justify' }}>
											<span style={{ fontSize: 14 }}>
												<span style={{ fontFamily: 'arial, helvetica, sans-serif' }}>
													Nhân viên kinh doanh bất động sản là gì? Thì có lẽ các bạn cũng đã quá rõ
													rồi, là nhân viên sale tư vấn nhà đất, đóng vai trò vô cùng quan trọng
													trong giao dịch mua bán nhà đất. Là sợi dây liên kết giữa tổ chức cung cấp
													bất động sản với khách hàng. Xét về triển vọng trên thị trường thì có thể
													nói đây là một công việc khá hấp dẫn và thu hút được nhiều sự quan tâm của
													các bạn ứng viên.
												</span>
											</span>
										</p>{' '}
									</div>

									<p className={`${styles.bv_foo_more_r}`}>+ Xem thêm</p>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</>
			) : (
				<>
					<Detail />
				</>
			)}
		</>
	)
}

export default List_occupations
