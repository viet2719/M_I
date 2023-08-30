import React from 'react'
import styles from '@/components/details/main_timviec/main_timviec.module.css'
import Image from 'next/image'

type Props = {
    showMailUngTuyen:boolean
    setshowMailUngTuyen:(value:boolean) => void
	setShowWorkMatch:(value:boolean) => void
}

const Model_ungtuyen_sendmail_NTD = ({showMailUngTuyen,setshowMailUngTuyen,setShowWorkMatch}: Props) => {
	return (
        <div>
   {showMailUngTuyen &&
		<div className={`${styles.m_thuut}`} style={{ display: 'block' }}>
			<div className={`${styles.container_thuut}`}>
				<div className={`${styles.box_thuut}`}  >
					<div className={`${styles.header_thuut}`} >
						<p className={`${styles.title_thuut}`}>
							Bạn có muốn viết thư giới thiệu cho nhà tuyển dụng không ?
						</p>
						<Image
                        style={{cursor:"pointer"}} 
                        onClick={()=>setshowMailUngTuyen(false)}
							width={25}
							height={25}
							src={'/images/xoaanh.svg'}
							className={`${styles.ic_thoatut} ${styles.cursor_pt}`}
							alt="Thoát ứng tuyển"
						/>
					</div>
					<div className={`${styles.content_thuut}`}>
						{/* <img src="/images/New_images/ic_vienthuut.png" class="vien_thuut"> */}
						<p className={`${styles.txt_ct_thuut}`}>THƯ GIỚI THIỆU</p>
						<div className={`${styles.frame_ct_thuut}`}>
							<textarea
								className={`${styles.txta_ct_thuut}`}
								name="txt_thuungtuyen"
								placeholder="Viết sơ bộ về bản thân (điểm mạnh, điểm yếu) và nêu rõ lý do, mong muốn xin làm việc tại công ty này. Đây là cách gây ấn tượng với nhà tuyển dụng tăng tỷ lệ tiếp cận, thư ứng tuyển và hồ sơ của bạn sẽ được gửi kèm đến nhà tuyển dụng"
								defaultValue={''}
							/>
						</div>
					</div>
					<div className={`${styles.footer_thuut}`}>
						<div style={{cursor:"pointer"}}    onClick={()=>{setshowMailUngTuyen(false),setShowWorkMatch(true)}} className={`${styles.ft_btn_huy} ${styles.cursor_pt}`}>Hủy</div>
						<div
                        style={{cursor:"pointer"}} 
							className={`${styles.ft_btn_utuyen} ${styles.cursor_pt}`}
							onClick={()=>{setshowMailUngTuyen(false),setShowWorkMatch(true),alert("Ứng tuyển thành công")}} 
						>
							Xác nhận ứng tuyển
						</div>
					</div>
				</div>
			</div>
		</div>}
        </div>
     
	)
}
export default Model_ungtuyen_sendmail_NTD
