import Chat_NTD from '@/components/common/chat_NTD'
import Footer from '@/components/common/footer'
import New_banner from '@/components/common/new_banner'
import Slide_cv from '@/components/common/slide_cv'
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
				{
					href: '/link-6',
					text: 'Việc làm cộng tác viên kinh doanh tại Hà Nam',
				},
				{ href: '/link-7', text: 'Việc làm kinh doanh nội thất tại Hồ Vĩnh ' },
				{ href: '/link-8', text: 'Việc làm kinh doanh online tại Ngã Ba Đần Lập' },
				{
					href: '/link-6',
					text: 'Nhặt rác quanh hồ',
				},
				{
					href: '/link-6',
					text: 'Tester cấp thấp Hải Phòng',
				},
			],
		},
		{
			id: 2,
			title: 'Chức danh:',
			links: [
				{ href: '/link-4', text: 'Chủ tịch mặt trận' },
				{ href: '/link-5', text: 'Lãnh đạo đánh cá' },
				{ href: '/link-5', text: 'Trưởng phòng đào đạo đánh bắt hải sản' },
				{ href: '/link-5', text: 'Nghiên cứu pháo chế tạo AL' },
				{ href: '/link-5', text: 'Nhân viên cấp trung tính' },
			],
		},
		{
			id: 3,
			title: 'Từ khóa liên quan:',
			links: [
				{
					href: '/link-6',
					text: 'Việc làm cộng tác viên kinh doanh tại Hồ Chí Minh',
				},
				{ href: '/link-7', text: 'Việc làm kinh doanh nội thất tại Hồ Chí Minh ' },
				{ href: '/link-8', text: 'Việc làm kinh doanh online tại Hồ Chí Minh' },
				{
					href: '/link-6',
					text: 'Việc làm cộng tác viên Hải Phòng',
				},
				{ href: '/link-7', text: 'Việc làm kinh doanh nội thất Hà Nội ' },
				{ href: '/link-8', text: 'Việc làm kinh doanh online Hà Nội' },
				{
					href: '/link-6',
					text: 'Việc làm cộng tác viên kinh doanh Hà Nội',
				},
				{ href: '/link-7', text: 'Việc làm kinh doanh nội thất tại Hồ Chí Minh ' },
				{ href: '/link-8', text: 'Việc làm kinh doanh online tại Hồ Chí Minh' },
			],
		},
		{
			id: 4,
			title: 'Địa điểm:',
			links: [
				{ href: '/link-9', text: 'Hà Tĩnh' },
				{ href: '/link-9', text: 'Thanh Trì 9' },
				{ href: '/link-9', text: 'Đô Lịch ' },
				{ href: '/link-9', text: 'Trường Danh 21' },
				{ href: '/link-9', text: 'Test thôi mà' },
			],
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
	const [seenMore, setSeenMore] = useState(true)
	const listComp = [
		{ id: 1, comp: 'Phù hợp nhất' },
		{ id: 2, comp: 'Mới nhất' },
		{ id: 3, comp: 'Lương tốt nhất' },
	]
	const [compActive, setCompActive] = useState<any>(1)

	return (
		<>
			{true ? (
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
										{listComp.map((comp, index) => {
											return (
												<div
													key={index}
													className={`${styles.items_type} ${
														compActive === comp.id ? styles.active : ''
													}`}
													onClick={() => {
														setCompActive(comp.id)
													}}
												>
													{comp.comp}
												</div>
											)
										})}

										<div className={styles.box_mb_items}>
											<p className={styles.items_name}>Phù hợp nhất</p>
											<div className={styles.pop_items}>
												{listComp.map((comp, index) => {
													return (
														<div key={index} className={`${styles.items_type} ${styles.active}`}>
															{comp.comp}
														</div>
													)
												})}
											</div>
										</div>
									</div>
									{/* {compActive === 1 && <List_cate />}
									{compActive === 2 && <List_cate />}
									{compActive === 3 && <List_cate />} */}
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
							<Slide_cv />
							<div className={styles.btn_upload_cv}>
								<div className={styles.btn_upload_cv_left}>
									<p>AI365: CÓ VIỆC SIÊU TỐC</p>
									<p>CẬP NHẬT CV NHANH - BẬT ĐÈN XANH CHO NHÀ TUYỂN DỤNG</p>
									<a
										rel="nofollow"
										href="/tai-ho-so.html"
										className={styles.btn_tuvan}
										title="Tải hồ sơ của bạn lên"
									>
										Tải CV từ máy tính của bạn
									</a>
								</div>
								<div className={styles.btn_upload_cv_right}>
									<div className={styles.cv_right_video}>
										<div className={styles.cv_right_video}>
											<iframe
												height={182}
												width={278}
												className={styles.lazyloaded}
												src="https://www.youtube.com/embed/eMOPVei2nis"
												frameBorder={0}
												allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											/>
										</div>
									</div>
								</div>
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
													<li className={styles.li_h2}>
														<a
															className={styles.ul_h2}
															href="#nhu-cau-tuyen-nhan-vien-kinh-doanh-tphcm"
														>
															1. Nhu cầu tuyển nhân viên kinh doanh TPHCM{' '}
														</a>
													</li>
													<li className={styles.li_h2}>
														<a
															className={styles.ul_h2}
															href="#gioi-thieu-doi-net-ve-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh"
														>
															2. Giới thiệu đôi nét về việc làm nhân viên kinh doanh tại Hồ Chí Minh{' '}
														</a>
													</li>
													<li className={styles.li_h3}>
														<a
															className={styles.ul_h3}
															href="#mot-so-linh-vuc-hay-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh"
														>
															2.1. Một số lĩnh vực hay có nhu cầu tuyển dụng nhân viên kinh doanh
															tại Hồ Chí Minh{' '}
														</a>
													</li>
													<li className={styles.li_h3}>
														<a
															className={styles.ul_h3}
															href="#nhan-vien-kinh-doanh-tai-ho-chi-minh-thuong-lam-nhung-cong-viec-gi"
														>
															2.2. Nhân viên kinh doanh tại Hồ Chí Minh thường làm những công việc
															gì?{' '}
														</a>
													</li>
													<li className={styles.li_h2}>
														<a
															className={styles.ul_h2}
															href="#mot-so-vi-tri-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh-voi-so-luong-lon"
														>
															3. Một số vị trí có nhu cầu tuyển dụng nhân viên kinh doanh tại Hồ Chí
															Minh với số lượng lớn{' '}
														</a>
													</li>
													<li className={styles.li_h3}>
														<a
															className={styles.ul_h3}
															href="#tuyen-nhan-vien-kinh-doanh-o-to-tai-tp-hcm"
														>
															3.1. Tuyển nhân viên kinh doanh ô tô tại TP.HCM{' '}
														</a>
													</li>
													<li className={styles.li_h3}>
														<a className={styles.ul_h3} href="#nhan-vien-kinh-doanh-noi-that-hcm">
															3.2. Nhân viên kinh doanh nội thất HCM{' '}
														</a>
													</li>
													<li className={styles.li_h2}>
														<a
															className={styles.ul_h2}
															href="#huong-dan-cach-tim-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh-hieu-qua-nhat"
														>
															4. Hướng dẫn cách tìm việc làm nhân viên kinh doanh tại Hồ Chí Minh
															hiệu quả nhất{' '}
														</a>
													</li>
													<li className={styles.li_h3}>
														<a
															className={styles.ul_h3}
															href="#hay-bien-mo-ta-kinh-nghiem-thanh-nhung-thanh-tich-noi-bat"
														>
															4.1. Hãy biến mô tả kinh nghiệm thành những thành tích nổi bật{' '}
														</a>
													</li>
													<li className={styles.li_h3}>
														<a
															className={styles.ul_h3}
															href="#tap-luyen-tra-loi-nhung-cau-hoi-sau-truoc-khi-viet-cv-xin-viec-nhan-vien-kinh-doanh"
														>
															4.2. Tập luyện trả lời những câu hỏi sau trước khi viết CV xin việc
															nhân viên kinh doanh{' '}
														</a>
													</li>
												</ul>
											</nav>
										</div>
									</div>
									<div className={`${styles.gt_text} ${seenMore ? styles.over_bv_footer : ''}`}>
										<h2
											style={{ textAlign: 'justify' }}
											id="nhu-cau-tuyen-nhan-vien-kinh-doanh-tphcm"
										>
											<span style={{ fontSize: 16 }}>Nhu cầu tuyển nhân viên kinh doanh TPHCM</span>
										</h2>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ
												chức sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham
												gia
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục
												tiêu tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác
												nhau trong đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên
												(chiếm gần 72%).
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Theo thông tin thu thập được từ kênh{' '}
												<span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
													<span style={{ fontWeight: 700 }}>Timviec365.vn</span>
												</span>{' '}
												thì số lượng nhân viên kinh doanh được tuyển dụng nhiều nhất rơi vào các vị
												trí: quản lý &amp; kinh doanh (1.319 người), việc làm phổ thông (620 người)
												, cơ khí (188 người) cùng rất nhiều vị trí khác nữa thuộc về kế toán, du
												lịch,…
											</span>
										</p>
										<p style={{ textAlign: 'center' }}>
											<Image
												alt="Nhu cầu tuyển dụng việc làm nhân viên kinh doanh tại Hồ Chí Minh"
												height={532}
												className=" lazyloaded"
												src="/pictures/images/tuyen-dung-viec-lam-nhan-vien-kinh-doanh-tai-Ho-Chi-Minh(3).jpg"
												data-src="/pictures/images/tuyen-dung-viec-lam-nhan-vien-kinh-doanh-tai-Ho-Chi-Minh(3).jpg"
												width={800}
											/>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Có thể thấy nhu cầu tuyển&nbsp;nhân viên kinh doanh tphcm&nbsp;là vô cùng
												lớn nên&nbsp;
											</span>
											<span style={{ fontSize: 14 }}>cơ hội xin việc làm cao,</span>
											<span style={{ fontSize: 14 }}>
												&nbsp;bạn có thể nhanh chóng chợp lấy cơ hội này để tìm được cho mình một vị
												trí công việc thích hợp nhất.
											</span>
										</p>
										<h2
											style={{ textAlign: 'justify' }}
											id="gioi-thieu-doi-net-ve-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh"
										>
											<span style={{ fontSize: 16 }}>
												Giới thiệu đôi nét về việc làm nhân viên kinh doanh tại Hồ Chí Minh
											</span>
										</h2>
										<h3
											style={{ textAlign: 'justify' }}
											id="mot-so-linh-vuc-hay-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh"
										>
											<span style={{}}>
												Một số lĩnh vực hay có nhu cầu tuyển dụng nhân viên kinh doanh tại Hồ Chí
												Minh
											</span>
										</h3>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Hầu như tất cả các doanh nghiệp tại Hồ Chí Minh đều có nhu cầu&nbsp;
												<strong>
													<a
														href="https://timviec365.vn/viec-lam-nhan-vien-kinh-doanh-c9v0"
														target="_blank"
													>
														<span style={{ color: '#FF0000' }}>
															tuyển&nbsp;nhân viên kinh doanh
														</span>
													</a>
												</strong>
												. Bởi thông qua nhân viên kinh doanh công ty có thể tiếp cận khách hàng tiềm
												năng để giới thiệu dịch vụ, tăng nguồn lợi nhuận thu được cho công ty. Một
												số ngành và nghề thường hay tuyển dụng nhân viên kinh doanh với số lượng lớn
												tại Hồ Chí Minh chính là: bất động sản, dịch vụ website, nhà hàng - khách
												sạn, dược phẩm, mỹ phẩm, du học, ô tô, xe máy, điện tử, thiết bị giáo dục,
												bảo hiểm, thực phẩm, thời trang, vật liệu xây dựng,...
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Tùy theo lĩnh vực bạn yêu thích, hãy tìm cho mình một lĩnh vực phù hợp nhất
												để ứng tuyển{' '}
												<strong>
													<a
														href="https://timviec365.vn/viec-lam-tai-ho-chi-minh-c0v45"
														target="_blank"
													>
														<span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
															việc làm hcm
														</span>
													</a>
												</strong>
											</span>
											<span
												data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
												data-sheets-value='{"1":2,"2":"việc làm 24h tại tphcm"}'
												style={{ fontSize: '11pt', fontFamily: 'Calibri, Arial' }}
											>
												&nbsp;
											</span>
											<span style={{}}>trong số này.</span>
										</p>
										<h3
											style={{ textAlign: 'justify' }}
											id="nhan-vien-kinh-doanh-tai-ho-chi-minh-thuong-lam-nhung-cong-viec-gi"
										>
											<span style={{}}>
												Nhân viên kinh doanh tại Hồ Chí Minh thường làm những công việc gì?
											</span>
										</h3>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Nhân viên kinh doanh là một công việc đòi hỏi mỗi người phải rất kiên trì,
												nắm bắt cơ hội và vượt qua những khó khăn để thành công. Có thể nói, vai trò
												của người nhân viên kinh doanh chính là thu hẹp khoảng cách giữa doanh
												nghiệp và khách hàng đồng thời mang lại những sản phẩm có chất lượng tốt
												nhất cho khách hàng.
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>Tóm lại, một kinh doanh cần làm những công việc gồm:</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Chuẩn bị nguyên liệu, kiến ​​thức để quảng bá sản phẩm, gặp gỡ khách hàng
												tiềm năng để cung cấp hoặc giới thiệu các sản phẩm đó, cũng có thể để khách
												của mình dùng thử hoặc thử nghiệm luôn
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Lập dự toán, đàm phán, ký hợp đồng mua bán, lên phương án về thời hạn thanh
												toán, giao hàng ... Trong hợp đồng, giải quyết các khiếu nại và vấn đề gặp
												phải, sử dụng, thiết lập mối quan hệ khách hàng tốt nhất ...
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Ngày nay, trong sự phát triển của mỗi công ty, chúng ta có thể nói rằng nhân
												viên kinh doanh chính là bộ mặt của doanh nghiệp đây là yếu tố quyết định
												tới sự thành công hay thất bại trong một doanh nghiệp.
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												+ Kỹ năng giao tiếp: Với nhân viên kinh doanh, kỹ năng giao tiếp được coi là
												yếu tố quyết định; bạn có kỹ năng giao tiếp tốt, việc trao đổi thông tin và
												bán hàng sẽ hiệu quả hơn. Quá trình giao tiếp với đồng nghiệp, khách hàng
												cũng sẽ hiệu quả hơn rất nhiều điều này sẽ làm tăng lên tỷ lệ thành công của
												bạn đáng kể.
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Ngày nay, trong sự phát triển của mỗi công ty, chúng ta có thể nói rằng nhân
												viên kinh doanh chính là bộ mặt của doanh nghiệp đây là yếu tố quyết định
												tới sự thành công hay thất bại trong một doanh nghiệp.
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												+ Kỹ năng giao tiếp: Với nhân viên kinh doanh, kỹ năng giao tiếp được coi là
												yếu tố quyết định; bạn có kỹ năng giao tiếp tốt, việc trao đổi thông tin và
												bán hàng sẽ hiệu quả hơn. Quá trình giao tiếp với đồng nghiệp, khách hàng
												cũng sẽ hiệu quả hơn rất nhiều điều này sẽ làm tăng lên tỷ lệ thành công của
												bạn đáng kể.
											</span>
										</p>
										<h2
											style={{ textAlign: 'justify' }}
											id="mot-so-vi-tri-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh-voi-so-luong-lon"
										>
											<span style={{ fontSize: 16 }}>
												Một số vị trí có nhu cầu tuyển dụng nhân viên kinh doanh tại Hồ Chí Minh với
												số lượng lớn
											</span>
										</h2>
										<h3
											style={{ textAlign: 'justify' }}
											id="tuyen-nhan-vien-kinh-doanh-o-to-tai-tp-hcm"
										>
											<span style={{}}>Tuyển nhân viên kinh doanh ô tô tại TP.HCM</span>
										</h3>

										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ
												chức sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham
												gia
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span>
												Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục
												tiêu tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác
												nhau trong đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên
												(chiếm gần 72%).
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ
												chức sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham
												gia
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span>
												Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục
												tiêu tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác
												nhau trong đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên
												(chiếm gần 72%).
											</span>
										</p>
										<h3 style={{ textAlign: 'justify' }} id="nhan-vien-kinh-doanh-noi-that-hcm">
											<span style={{}}>Nhân viên kinh doanh nội thất HCM</span>
										</h3>

										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ
												chức sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham
												gia
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span>
												Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục
												tiêu tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác
												nhau trong đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên
												(chiếm gần 72%).
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ
												chức sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham
												gia
											</span>
										</p>
										<h2
											style={{ textAlign: 'justify' }}
											id="huong-dan-cach-tim-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh-hieu-qua-nhat"
										>
											<span style={{ fontSize: 16 }}>
												Hướng dẫn cách tìm việc làm nhân viên kinh doanh tại Hồ Chí Minh hiệu quả
												nhất
											</span>
										</h2>
										<h3
											style={{ textAlign: 'justify' }}
											id="hay-bien-mo-ta-kinh-nghiem-thanh-nhung-thanh-tich-noi-bat"
										>
											<span style={{}}>
												Hãy biến mô tả kinh nghiệm thành những thành tích nổi bật
											</span>
										</h3>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												4 Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã
												tổ chức sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty
												tham gia
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span>
												4 Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục
												tiêu tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác
												nhau trong đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên
												(chiếm gần 72%).
											</span>
										</p>
										<p style={{ textAlign: 'justify' }}>
											<span style={{}}>
												4 2qq2w3w3w3w3w3Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ
												Chí Minh đã tổ chức sàn giao dịch việc làm thứ 11 của mình với tổng số là
												112 công ty tham gia
											</span>
										</p>
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
						</div>
					</div>
					<Footer />
				</>
			) : (
				<></>
			)}
		</>
	)
}

export default List_occupations
