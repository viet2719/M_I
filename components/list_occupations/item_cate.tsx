import Link from 'next/link'
import React from 'react'
import styles from '@styles/list_occupations/item_cate.module.scss'
import Image from 'next/image'

const Item_cate = () => {
	return (
		<div className={styles.item_cate}>
			<span className={`${styles.box_input} ${styles.input_po_ab} ${styles.v_hidden}`}>
				<input
					type="checkbox"
					id="check_new_870584"
					className={`${styles.check_new} ${styles.items_checkbox}`}
					name="check_item_cate"
					defaultValue={870584}
				/>
				<label htmlFor="check_new_870584" />
			</span>
			<div className={`${styles.img_cate} ${styles.box_new_left}`}>
				<Link
					className={`${styles.logo_user_th} ${styles.m_online}`}
					data-id={247277}
					id-chat={1559870}
					href="/nhan-vien-kinh-doanh-p870584.html"
					title="CHUYÊN VIÊN MÔI GIỚI BẤT ĐỘNG SẢN KHÔNG YÊU CẦU KINH NGHIỆM"
				>
					<Image
						width={141}
						className={`${styles.m_online} ${styles.lazyloaded}`}
						height={141}
						src="/images/before_login/wfp1692778283.jpg"
						alt="CÔNG TY CỔ PHẦN ĐẦU TƯ DỊCH VỤ SAIGON REAL"
					/>
					<span className={styles.box_time_off} style={{ display: 'none' }}>
						13 phút
					</span>{' '}
				</Link>

				<div className={styles.box_vote_new}>
					<Image
						width={16}
						height={16}
						className="icon_vote_new"
						src="/images/before_login/icon_star_gray.svg"
						alt="star grey"
					/>
					<Image
						width={16}
						height={16}
						className="icon_vote_new"
						src="/images/before_login/icon_star_gray.svg"
						alt="star grey"
					/>
					<Image
						width={16}
						height={16}
						className="icon_vote_new"
						src="/images/before_login/icon_star_gray.svg"
						alt="star grey"
					/>
					<Image
						width={16}
						height={16}
						className="icon_vote_new"
						src="/images/before_login/icon_star_gray.svg"
						alt="star grey"
					/>
					<Image
						width={16}
						height={16}
						className="icon_vote_new"
						src="/images/before_login/icon_star_gray.svg"
						alt="star grey"
					/>
				</div>
			</div>
			<div className={styles.center_cate}>
				<div className={styles.center_cate_l}>
					<h2 className={`${styles.box_mb} ${styles.box_new_left_mb}`}>
						<a
							style={{ width: 70, overflow: 'unset' }}
							className={`${styles.logo_user_th} ${styles.m_online}`}
							href="/nhan-vien-kinh-doanh-bat-dong-san-p867628.html"
							title="NHÂN VIÊN KINH DOANH BẤT ĐỘNG SẢN"
						>
							<Image
								height={60}
								width={60}
								className={`${styles.lazyload} ${styles.img_center_cate_mb} ${styles.m_online}`}
								src="/images/before_login/load.gif"
								alt="CÔNG TY BĐS ĐẠI PHÁT GROUP"
							/>
							<span className={styles.box_time_off} style={{ display: 'none' }}>
								5 phút
							</span>{' '}
						</a>
						<a
							style={{ color: '#474747' }}
							href="/nhan-vien-kinh-doanh-bat-dong-san-p867628.html"
							title="NHÂN VIÊN KINH DOANH BẤT ĐỘNG SẢN"
							className={`${styles.tag_th} ${styles.title_cate}`}
						>
							NHÂN VIÊN KINH DOANH BẤT ĐỘNG SẢN
						</a>
					</h2>

					<div className={`${styles.con_tooltip} ${styles.top} ${styles.tt_sm}`}>{/* ... */}</div>
					<div className={`${styles.con_tooltip} ${styles.top} ${styles.tt_sm}`}>{/* ... */}</div>
					<p>{/* ... */}</p>
					{/* ... */}
					<p>{/* ... */}</p>
					<span
						className={`${styles.job_chat} ${styles.m_online}`}
						data-id={247277}
						id-chat={1559870}
					>
						Chat
					</span>
					<div className={styles.comp}>
						<p className={styles.cpn_name}>
							<Link
								className={styles.tag_th}
								href="/cty-bds-dai-phat-group-co241409"
								title="CÔNG TY BĐS ĐẠI PHÁT GROUP"
							>
								CÔNG TY BĐS ĐẠI PHÁT GROUP
							</Link>
						</p>
					</div>
					<div className={`${styles.con_tooltip} ${styles.top} ${styles.tt_sm}`}>
						<p style={{ width: '100%' }}>
							<span className={`${styles.cate_ml}`}>Thỏa thuận</span>
						</p>
						<span className={`${styles.tooltip}`}>
							<span>Thỏa thuận</span>
						</span>
					</div>
				</div>
				<p className={styles.xt_tag}>+ Xem thêm</p>
			</div>
		</div>
	)
}

export default Item_cate
