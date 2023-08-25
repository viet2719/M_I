import Link from 'next/link'
import React from 'react'
import styles from '@styles/list_occupations/item_cate.module.scss'
import Image from 'next/image'

const List_cate = () => {
	return (
		<div className={styles.main_cate}>
			<div className={styles.item_cate}>
				<div className={`${styles.img_cate} ${styles.box_new_left}`}>
					<Link
						className={`${styles.logo_user_th}`}
						href="/nhan-vien-kinh-doanh-p866743.html"
						title="Nhân viên kinh doanh"
					>
						<Image
							width={141}
							height={141}
							src="/images/before_login/user_chat_off.png"
							alt="CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ T-TECH VIỆT NAM"
						/>
						<span className={styles.box_time_off}>5 giờ</span>{' '}
					</Link>
					<div className={styles.box_vote_new}>
						<Image
							width={16}
							height={16}
							className={styles.icon_vote_new}
							src="/images/before_login/icon_star_gray.svg"
							alt="star grey"
						/>
						<Image
							width={16}
							height={16}
							className={styles.icon_vote_new}
							src="/images/before_login/icon_star_gray.svg"
							alt="star grey"
						/>
						<Image
							width={16}
							height={16}
							className={styles.icon_vote_new}
							src="/images/before_login/icon_star_gray.svg"
							alt="star grey"
						/>
						<Image
							width={16}
							height={16}
							className={styles.icon_vote_new}
							src="/images/before_login/icon_star_gray.svg"
							alt="star grey"
						/>
						<Image
							width={16}
							height={16}
							className={styles.icon_vote_new}
							src="/images/before_login/icon_star_gray.svg"
							alt="star grey"
						/>{' '}
					</div>
				</div>
				<div className={styles.center_cate}>
					<div className={`${styles.center_cate_l}`}>
						<h2 className={`${styles.box_mb} ${styles.box_new_left_mb}`}>
							<Link
								style={{ width: 70, overflow: 'unset' }}
								className={`${styles.logo_user_th}`}
								href="/tuyen-dung-truong-nhom-ban-hang-p866842.html"
								title="TUYỂN DỤNG TRƯỞNG NHÓM BÁN HÀNG"
							>
								<Image
									height={142}
									width={142}
									className={`${styles.tia_set} lazyload ${styles.img_center_cate_mb} ${styles.no_logo_chat}`}
									src="/images/load.gif"
									alt="Công Ty Cổ Phần Dược Phẩm Việt ( Đông Dược Viêt)"
								/>
								<span className={styles.box_time_off}>3 ngày</span>{' '}
								{/* <Image
									height={33}
									width={33}
									className={styles.icon_tiaset_new}
									alt=""
									src="/images/before_login/icon_tiaset.svg"
								></Image> */}
							</Link>
							<Link
								style={{ color: '#4C5BD4' }}
								href="/tuyen-dung-truong-nhom-ban-hang-p866842.html"
								title="TUYỂN DỤNG TRƯỞNG NHÓM BÁN HÀNG"
								className={`${styles.tag_th} ${styles.title_cate}`}
							>
								TUYỂN DỤNG TRƯỞNG NHÓM BÁN HÀNG
							</Link>
							<div className={styles.box_vote_new}>{/* Your icon_vote_new images */}</div>
						</h2>
						<div className="">
							<p className={styles.cpn_name}>
								<Link
									className={styles.tag_th}
									href="/cong-ty-co-phan-duoc-pham-viet-dong-duoc-viet-co241071"
									title="Công Ty Cổ Phần Dược Phẩm Việt ( Đông Dược Viêt)"
								>
									Công Ty Cổ Phần Dược Phẩm Việt ( Đông Dược Viêt)
								</Link>
							</p>
						</div>
						<div className={`${styles.con_tooltip} ${styles.top} ${styles.tt_sm}`}>
							<p style={{ width: '100%' }}>
								<span className={styles.cate_ml}>Từ 7.000.000 VNĐ Đến 15.000.000 VNĐ</span>
							</p>
							<span className={styles.tooltip}>
								<span>Từ 7.000.000 VNĐ Đến 15.000.000 VNĐ</span>
							</span>
						</div>
						<div className={`${styles.con_tooltip} ${styles.top} ${styles.tt_sm}`}>
							<p className={`${styles.ddlv} ${styles.cate_dd}`} style={{ width: '100%' }}>
								<span title="">Hồ Chí Minh </span>
							</p>
							<span className={styles.tooltip}>
								<span>Hồ Chí MinhHà Nội</span>
							</span>
						</div>
						<p>
							<span className={styles.cate_hn} title="14/09/2023">
								Hạn nộp: 14/09/2023
							</span>
						</p>

						<p>
							<Link href="/lich-su/danh-sach-tong-u241071t1" className={styles.history_point}>
								Lịch sử vào trang
							</Link>
						</p>
						<span className={styles.job_chat + ' ' + styles.m_online}>Chat</span>
						<div className={`${styles.con_tooltip} ${styles.top} ${styles.frame_txt}`}>
							<p className={styles.box_txt}>
								Quyền lợi: Lương khởi điểm 7.000.000đ + thưởng doanh số tháng/quý/năm, thu nhập bình
								quân tháng từ 15.000.000đ + Được xem xét điều chỉnh chế độ đãi ngộ 2 lần/ năm Được
								liên tục đào tạo nâng cao năng lực bản thân, có lộ trình phát triển rõ ràng Được làm
								việc trong môi trường chuyên nghiệp, năng động, sáng tạo. Được hưởng đầy đủ các chế
								độ phúc lợi của công ty : BHXH, BHYT, BHTN... Thời gian làm việc: 08h00 - 17h30 Thứ
								2 đến sáng Thứ 7
							</p>
							<span className={styles.tooltip}>
								<span>
									Lương khởi điểm 7.000.000đ + thưởng doanh số tháng/quý/năm, thu nhập bình quân
									tháng từ 15.000.000đ + Được xem xét điều chỉnh chế độ đãi ngộ 2 lần/ năm Được liên
									tục đào tạo nâng cao năng lực bản thân, có lộ trình phát triển rõ ràng Được làm
									việc trong môi trường chuyên nghiệp, năng động, sáng tạo. Được hưởng đầy đủ các
									chế độ phúc lợi của công ty : BHXH, BHYT, BHTN... Thời gian làm việc: 08h00 -
									17h30 Thứ 2 đến sáng Thứ 7
								</span>
							</span>
						</div>
						<div
							className={`${styles.con_tooltip} ${styles.top} ${styles.frame_txt} ${styles.ctn_frame_txt}`}
						>
							<p className={styles.box_txt}>
								Yêu cầu: Yêu thích kinh doanh, máu lửa, năng động, tự tin, giao tiếp tốt Tốt nghiệp
								Cao đẳng trở lên các khối ngành kinh tế, quản trị kinh doanh,... Độ tuổi: Từ 21 đến
								26 Có Laptop thành thạo sử dụng các phần mềm văn phòng, gửi/nhận email.  Năng động,
								nhiệt tình, kiên trì, chịu khó, có khả năng tập trung công việc cao
							</p>
							<span className={styles.tooltip}>
								<span>
									 Yêu thích kinh doanh, máu lửa, năng động, tự tin, giao tiếp tốt  Tốt nghiệp Cao
									đẳng trở lên các khối ngành kinh tế, quản trị kinh doanh,...  Độ tuổi: Từ 21 đến
									26  Có Laptop thành thạo sử dụng các phần mềm văn phòng, gửi/nhận email.  Năng
									động, nhiệt tình, kiên trì, chịu khó, có khả năng tập trung công việc cao
								</span>
							</span>
						</div>
						<div className={styles.box_btn_ut_mb}></div>
					</div>
					<p className={styles.xt_tag}>+ Xem thêm</p>
				</div>
			</div>
		</div>
	)
}

export default List_cate
