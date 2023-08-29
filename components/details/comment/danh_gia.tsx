import React from 'react'
import styles from '../main_timviec/main_timviec.module.css'

type Props = {
    showDanhGia:boolean
}

const Danh_gia = ({showDanhGia}: Props) => {
  return (
    <div>
        	{showDanhGia && (
						<div className={`${styles.item_cmt_vote}`} id="box_contain_vote">
							<div className={`${styles.box_show_star}`}>
								<div className={`${styles.box_show_star_left}`}>
									<p className={`${styles.txt_count_star}`}>
										<span className={`${styles.number_star}`}>0</span>/5
									</p>
									<div className={`${styles.box_lst_star}`}>
										<img
											className={`${styles.icon_vote_new}`}
											src="https://timviec365.vn/images/tia_set/icon_star_gray.svg"
											alt="star grey"
										/>
										<img
											className={`${styles.icon_vote_new}`}
											src="https://timviec365.vn/images/tia_set/icon_star_gray.svg"
											alt="star grey"
										/>
										<img
											className={`${styles.icon_vote_new}`}
											src="https://timviec365.vn/images/tia_set/icon_star_gray.svg"
											alt="star grey"
										/>
										<img
											className={`${styles.icon_vote_new}`}
											src="https://timviec365.vn/images/tia_set/icon_star_gray.svg"
											alt="star grey"
										/>
										<img
											className={`${styles.icon_vote_new}`}
											src="https://timviec365.vn/images/tia_set/icon_star_gray.svg"
											alt="star grey"
										/>{' '}
									</div>
									<p className={`${styles.txt_note_vote}`}>
										<span className={`${styles.note_vote}`}>0</span> đánh giá
									</p>
								</div>
								<div className={`${styles.box_show_star_right}`}>
									<div className={`${styles.item_process_vote}`}>
										<div className={`${styles.box_number_star}`}>
											<p className={`${styles.number_star_process}`}>5</p>
											<img
												className={`${styles.icon_star_process}`}
												src="https://timviec365.vn/images/tia_set/icon_star_yellow.svg"
												alt="5 sao"
											/>
										</div>
										<progress className={`${styles.progress_vote}`} max={100} value={0} />
										<p className={`${styles.pecent_process}`}>0</p>
									</div>
									<div className={`${styles.item_process_vote}`}>
										<div className={`${styles.box_number_star}`}>
											<p className={`${styles.number_star_process}`}>4</p>
											<img
												className={`${styles.icon_star_process}`}
												src="https://timviec365.vn/images/tia_set/icon_star_yellow.svg"
												alt="4 sao"
											/>
										</div>
										<progress className={`${styles.progress_vote}`} max={100} value={0} />
										<p className={`${styles.pecent_process}`}>0</p>
									</div>
									<div className={`${styles.item_process_vote}`}>
										<div className={`${styles.box_number_star}`}>
											<p className={`${styles.number_star_process}`}>3</p>
											<img
												className={`${styles.icon_star_process}`}
												src="https://timviec365.vn/images/tia_set/icon_star_yellow.svg"
												alt="3 sao"
											/>
										</div>
										<progress className={`${styles.progress_vote}`} max={100} value={0} />
										<p className={`${styles.pecent_process}`}>0</p>
									</div>
									<div className={`${styles.item_process_vote}`}>
										<div className={`${styles.box_number_star}`}>
											<p className={`${styles.number_star_process}`}>2</p>
											<img
												className={`${styles.icon_star_process}`}
												src="https://timviec365.vn/images/tia_set/icon_star_yellow.svg"
												alt="2 sao"
											/>
										</div>
										<progress className={`${styles.progress_vote}`} max={100} value={0} />
										<p className={`${styles.pecent_process}`}>0</p>
									</div>
									<div className={`${styles.item_process_vote}`}>
										<div className={`${styles.box_number_star}`}>
											<p className={`${styles.number_star_process}`}>1</p>
											<img
												className={`${styles.icon_star_process}`}
												src="https://timviec365.vn/images/tia_set/icon_star_yellow.svg"
												alt="1 sao"
											/>
										</div>
										<progress className={`${styles.progress_vote}`} max={100} value={0} />
										<p className={`${styles.pecent_process}`}>0</p>
									</div>
								</div>
							</div>
							<div className={`${styles.box_btn_vote}`}>
								<p className={`${styles.txt_btn_vote}`}>Bạn đánh giá sao tin tuyển dụng này</p>
								<button className={`${styles.btn_vote}`} data-voted={0} data-user={1333676}>
									Đánh giá ngay
								</button>
							</div>
						</div>
					)}
    </div>
  )
}
export default Danh_gia