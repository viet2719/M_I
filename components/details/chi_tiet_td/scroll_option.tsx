import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'

type Props = {
	show: boolean
}

const Scroll_option = ({ show }: Props) => {
	const [showChiTiet, setshowChiTiet] = useState<boolean>(false)

	return (
		<div>
			{show && (
				<div className={`${styles.scroll_option} ${styles.active}`}>
					<div className={`${styles.option} ${styles.list_option} `} id="floatingDiv">
						<div
							onClick={() => setshowChiTiet(!showChiTiet)}
							className={`${styles.option_post} ${styles.ctn_opa} ${styles.m_active}`}
							data-tab="tab_ttin"
						>
							<div>
								Chi tiết
								{showChiTiet && (
									<div className={`${styles.pos_ttin_all}`}>
										<p
											className={`${styles.tca_ttin_chung} ${styles.ctn_opt_post}`}
											data-tab="tab_ttin"
										>
											Thông tin
										</p>
										<p className={`${styles.tca_ttin_chung}`}>
											<Link href="/cong-ty-co-phan-viet-hung-viet-nam-co206405">Công ty</Link>
										</p>
										<p className={`${styles.tca_ttin_chung} ${styles.vlam_goiy}`}>
											<a href="#title_all">Việc làm đề xuất bởi AI365</a>
										</p>
									</div>
								)}
							</div>

							<span />
						</div>

						<Link
							className={`${styles.option_post}`}
							href="/lich-su/danh-sach-tong-u206405t1"
							rel="nofollow"
							target="_blank"
						>
							Lịch sử
						</Link>
						<Link
							className={`${styles.option_post}`}
							href="/phu-hop/danh-sach-tong-u206405t1"
							rel="nofollow"
							target="_blank"
						>
							Phù hợp
						</Link>
						<Link
							href={'#'}
							className={`${styles.option_post} ${styles.ctn_opt_post} ${styles.mucdo_phhop_ctn}`}
							data-tab="tab_phhop"
						>
							Tường
						</Link>
						<div className={`${styles.mobi_ctiet}`}>
							{' '}
							<Link
								className={`${styles.option_post} ${styles.option_dtg}`}
								href="https://truyenthongnoibo.timviec365.vn/trang-ca-nhan-c18162"
								rel="nofollow"
								target="_blank"
							>
								Tường
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
export default Scroll_option
