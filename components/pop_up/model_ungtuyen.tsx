import React from 'react'
import styles from '@/components/details/main_timviec/main_timviec.module.css'
import Image from 'next/image'

type Props = {
	showModelUngTuyen: boolean
	setShowModelUngTuyen: (value: boolean) => void
}

const Model_ungtuyen = ({ showModelUngTuyen, setShowModelUngTuyen }: Props) => {
	return (
		<div>
			{showModelUngTuyen && (
				<div className={styles.popup_hths}>
					<div className={`${styles.container_hths}`}>
						<div className={`${styles.box_hths}`} style={{ height: 560 }}>
							<div className={`${styles.header_hths}`}>
								<p className={`${styles.title_hths}`}>
									Để ứng tuyển <span>Nhân viên Kỹ thuật Điện Tử</span> bạn cần hoàn thiện hồ sơ bằng
									1 trong 2 cách sau
								</p>
								<Image
                                onClick={()=>setShowModelUngTuyen(false)}
                                style={{cursor:"pointer"}}
									width={32}
									height={32}
									src="https://timviec365.vn/images/tuan_image/icon_close_popup.svg"
									className={`${styles.ic_close_hths} ${styles.cursor_pt}`}
									alt="Thoát ứng tuyển"
								/>
							</div>
							<div className={`${styles.content_hths}`}>
								<div className={`${styles.block1}`}>
									<a className={`${styles.tao_cv} ${styles.create_cookie_url}`} href="/cv-xin-viec">
										<Image
											width={32}
											height={32}
											src="https://timviec365.vn/images/tuan_image/icon_create_cv.png"
											alt="icon"
										/>
										<span>Tạo CV từ Timviec365</span>
									</a>
									<span className={`${styles.hoac}`}>hoặc</span>
									<a
										className={`${styles.upload_file} ${styles.create_cookie_url}`}
										href="/tai-ho-so.html"
									>
										<Image
											width={32}
											height={32}
											src="https://timviec365.vn/images/tuan_image/icon_upload_file.png"
											alt="icon"
										/>
										<span>Tải CV/Video từ máy tính</span>
									</a>
									<span className={`${styles.hoac}`}>hoặc</span>
									<a
										className={`${styles.cv_ai} ${styles.create_cookie_url}`}
										href="/tao-cv-boi-ai.html"
									>
										<Image
											width={32}
											height={32}
											src="https://timviec365.vn/images/tuan_image/icon_create_ai.png"
											alt="icon"
										/>
										<span>Tạo CV AI365</span>
									</a>
								</div>
								<div className={`${styles.block2}`}>
									<p>Hướng dẫn:</p>
									<span>
										- Tạo cv từ timviec365.vn: bạn có thể lựa chọn hơn 3500+ mẫu cv xin việc ấn
										tượng của chúng tôi để tạo cv cho riêng bạn. Chỉnh sửa xong bạn nhớ ấn nút lưu
										cv và sau đó là xác nhận email hoàn tất quá trình đăng ký; cv bạn tạo có thể
										dùng để nộp hồ sơ, tải về máy cá nhân, in mang đi nộp cho nhà tuyển dụng, ...
									</span>
									<span>
										- Tải lên CV/video giới thiệu: Nếu bạn có sẵn CV xin việc hoặc video{' '}
										<i>(MP4 hoặc MOV, dung lượng tối đa 100 MB)</i> giới thiệu về bản thân, bạn tải
										lên sẽ là chiếc chìa khóa giúp bạn hoàn tất bước đăng ký tài khoản ứng viên trên
										timviec365.vn và giúp nhà tuyển dụng nhanh chóng tìm thấy bạn.
									</span>
									<span>
										- Tạo CV AI365: Tạo ngay CV với nội dung chuẩn chỉnh được gợi ý AI365 để sẵn
										sàng chinh phục những vị trí việc làm hấp dẫn nhất!
									</span>
									<span>Cả ba kiểu hồ sơ đều được cho phép tìm kiếm bởi nhà tuyển dụng</span>
								</div>
							</div>
							<button  onClick={()=>setShowModelUngTuyen(false)} className={`${styles.close_hths} ${styles.ic_close_hths}`}>Đóng</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
export default Model_ungtuyen
