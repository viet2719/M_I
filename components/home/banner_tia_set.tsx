
import styles from '@styles/home/home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

const Banner_tia_set = (props: Props) => {

  return (
    <div className={`${styles.box_banner_tiaset} ${styles.banner_home_tiaset}`}>
    <div className={styles.content_banner_tiaset}>
        <div className={styles.banner_tiaset_left}>
            <div className={styles.box_title_banner}>
                <p className={styles.title_tiaset}>HUY HIỆU TIA SÉT</p>
                <p className={styles.note_tiaset}>
                    Ghi nhận sự tương tác giữa ứng viên và nhà tuyển dụng thông qua tin tuyển dụng
                    trong vòng 12 giờ.
                </p>
            </div>
            <div className={styles.box_time_tiaset}>
                <p className={styles.txt_time_ts}>TỰ ĐỘNG CẬP NHẬT SAU </p>
                <div className={styles.box_countdown_clock}>
                    <div className={`${styles.box_countdown_item} ${styles.hour}`}>
                        <div className={styles.box_num_clock}>
                            <div className={styles.box_lock}>
                                <p className={`${styles.num_clock} ${styles.one} `}>0</p>
                            </div>
                            <div className={styles.box_lock}>
                                <p className={`${styles.num_clock} ${styles.two}`}>7</p>
                            </div>
                        </div>
                        <p className={styles.title_clock}>GIỜ</p>
                    </div>
                    <span className={styles.hai_cham}>:</span>
                    <div className={`${styles.box_countdown_item} ${styles.minute}`}>
                        <div className={styles.box_num_clock}>
                            <div className={styles.box_lock}>
                                <p className={`${styles.num_clock} ${styles.one} `}>0</p>
                            </div>
                            <div className={styles.box_lock}>
                                <p className={`${styles.num_clock} ${styles.two}`}>7</p>
                            </div>
                        </div>
                        <p className={styles.title_clock}>PHÚT</p>
                    </div>
                    <span className={styles.hai_cham}>:</span>
                    <div className={`${styles.box_countdown_item} ${styles.second}`}>
                        <div className={styles.box_num_clock}>
                            <div className={styles.box_lock}>
                                <p className={`${styles.num_clock} ${styles.one} `}>0</p>
                            </div>
                            <div className={styles.box_lock}>
                                <p className={`${styles.num_clock} ${styles.two}`}>7</p>
                            </div>
                        </div>
                        <p className={styles.title_clock}>GIÂY</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.banner_tiaset_right}>
            <p className={styles.title_list}>Danh sách tin ĐĂNG đạt huy hiệu tia sét</p>
            <Link className={styles.link_list} href="/danh-sach-tia-set">
                XEM NGAY{' '}
                <Image
                    width={20}
                    height={20}
                    alt="xem ngay"
                    src="/images/before_login/arrow_right.svg"
                />
            </Link>
        </div>
    </div>
</div>
  )
}

export default Banner_tia_set