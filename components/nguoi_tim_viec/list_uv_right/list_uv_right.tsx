import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '@/components/details/details.module.css'
import { IUv } from '../container/container'

type Props = {
	
}

const List_uv_right = ({  }: Props) => {
    const [list_Ung_Vien, setlist_Ung_Vien] = useState<IUv[]>([])
    useEffect(() => {
		let arr: IUv[] = []
		for (let i = 1; i < 37; i++) {
			arr?.push({
				use_gioi_tinh: 1,
				use_logo: 'string',
				use_create_time: 1,
				use_update_time: 1,
				use_first_name: 'Dương Thị Tuyết Nhi' +" "+ i,
				use_id: 1,
				chat365_id: 1,
				cv_title: 'string',
				cv_city_id: [1],
				use_quanhuyen: 1,
				use_city: 'string',
				cv_exp: 1,
				isOnline: 1,
			})
		}
		setlist_Ung_Vien(arr)
	}, [])
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Đảo lộn mảng list_Ung_Vien và cập nhật lại giá trị bằng setlist_Ung_Vien
          const shuffledArray = [...list_Ung_Vien];
          for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
          }
          setlist_Ung_Vien(shuffledArray);
        }, 2000);
    
        // Để ngừng vòng lặp khi component bị unmounted hoặc khi bạn muốn dừng nó, bạn có thể làm như sau:
        return () => clearInterval(intervalId);
      }, [list_Ung_Vien]);
	return (
		<div className={`${styles.ctn_right_uvol}`}>
			<div className={`${styles.vl_right} ${styles.frame_th}`}>
				<div className={`${styles.list_uv_home}`}>
					<p className={`${styles.tt_chat_uv}`}>
						<Image
							width={40}
							height={40}
							className={`${styles.ic_list_onnile}`}
							src="/images/Ic_list_online.png"
							alt="Chat"
						/>
						Chat với ứng viên
					</p>
					<div className={`${styles.list_nganh_nghe}`}>
						<Link className={`${styles.link_all_onl}`} href="/ung-vien-online.html">
							Tất cả &gt;&gt;
						</Link>
						{list_Ung_Vien?.map((item: IUv, index: number) => {
							return (
								<ul key={index} className={`${styles.list_chat_uv}`}>
									<li style={{ listStyleType: 'none' }} className={`${styles.online_item}`}>
										<Link
											rel="nofollow"
											target="_blank"
											href="/ung-vien/duong-thi-tuyet-nhi-uv1307840.html?notice"
										>
											<span className={`${styles.ava_mess} ${styles.m_online}`} title="Đang online">
												<Image
													width={93}
													height={93}
													alt="Dương Thị Tuyết Nhi"
													src="https://timviec365.vn/pictures/uv/2023/07/31/avatar1291642.jpg"
												/>
											</span>
											<span className={`${styles.ct_online} ${styles.box_tooltip}`}>
												<p>{item.use_first_name}</p>
												<p>Hồ Chí Minh</p>
												<p className={`${styles.con_tooltip} ${styles.top}`}>
													<span>THỰC TẬP SINH</span>
												</p>
											</span>
										</Link>
									</li>
									<li className={`${styles.online_item} ${styles.false_div}`} />
									<li
										className={`${styles.online_item} ${styles.false_div}`}
										style={{ display: 'none' }}
									/>
								</ul>
							)
						})}
					</div>
				</div>
				{/* <div class="banner_new">
                  <div class="box_btn bg_bn_listNew">
                      <a target="_blank" rel="nofollow" href="https://play.google.com/store/apps/details?id=vn.timviec365.company">
                          <img class="lazyloaded" src="../images/banner/listNew_btn_bn_taiapp1.png" alt="App Timviec365">
                      </a>
                      <a target="_blank" rel="nofollow" href="https://play.google.com/store/apps/details?id=vn.timviec365.cv.cv365_vn">
                          <img class="lazyloaded" src="../images/banner/listNew_btn_bn_taiapp2.png" alt="App CV365">
                      </a>
                  </div>
              </div>
              <div class="banner_new">
                  <a target="_blank" rel="nofollow" href="https://app.timviec365.vn/Download/Chat365/Install/chat365.exe">
                      <img class="lazyloaded" src="../images/banner/list_uv_bn_taichat.png" alt="App Chat365">
                  </a>
              </div>
              <div class="banner_new">
                  <a href="https://chat365.timviec365.vn/" target="_blank"><img class="lazyload" src="../images/load.gif" data-src="../images/banner/listNew_bn_btnChat.png" alt="Chat365"></a>
              </div> */}
			</div>
		</div>
	)
}
export default List_uv_right
