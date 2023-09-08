
import styles from '@styles/home/home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Props = {}

const Tia_set = (props: Props) => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(getTimeLeft());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    function getTimeLeft() {
      const now:any = new Date();
      const midnight:any = new Date(now);
      midnight.setHours(12, 0, 0, 0);
  
      const timeUntilMidnight:any = midnight - now;
  
      const hours = Math.floor((timeUntilMidnight % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeUntilMidnight % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeUntilMidnight % (1000 * 60)) / 1000);
      return {
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      };
    }
  return (
    <div className={`${styles.banner_home_tiaset} ${styles.banner_home_anhsao}`}>
    <div className={styles.content_banner_anhsao}>
        <div className={styles.banner_anhsao_left}>
            <Image
                width={111}
                height={111}
                className={styles.icon_anhsao_banner}
                src="/images/icon_anhsao.gif"
                alt="logo ánh sao"
            />
            <div className={styles.box_title_banner}>
                <p className={styles.title_tiaset}>HUY HIỆU ÁNH SAO</p>
                <p className={styles.note_tiaset}>
                    Với những NTD có điểm lịch sử lớn hơn 50 điểm sẽ có huy hiệu ánh sao
                </p>
            </div>
        </div>
        <div className={styles.box_time_tiaset}>
            <p className={styles.txt_time_ts}>TỰ ĐỘNG CẬP NHẬT SAU</p>
            <div className={styles.box_countdown_clock}>
                <div className={`${styles.box_countdown_item} ${styles.hour}`}>
                    <div className={styles.box_num_clock}>
                        <div className={styles.box_lock}>
                            <p className={`${styles.num_clock} ${styles.one} `}>{timeLeft.hours[0]}</p>
                        </div>
                        <div className={styles.box_lock}>
                            <p className={`${styles.num_clock} ${styles.two}`}>{timeLeft.hours[1]}</p>
                        </div>
                    </div>
                    <p className={styles.title_clock}>GIỜ</p>
                </div>
                <span className={styles.hai_cham}>:</span>
                <div className={`${styles.box_countdown_item} ${styles.minute}`}>
                    <div className={styles.box_num_clock}>
                        <div className={styles.box_lock}>
                            <p className={`${styles.num_clock} ${styles.one} `}>{timeLeft.minutes[0]}</p>
                        </div>
                        <div className={styles.box_lock}>
                            <p className={`${styles.num_clock} ${styles.two}`}>{timeLeft.minutes[1]}</p>
                        </div>
                    </div>
                    <p className={styles.title_clock}>PHÚT</p>
                </div>
                <span className={styles.hai_cham}>:</span>
                <div className={`${styles.box_countdown_item} ${styles.second}`}>
                    <div className={styles.box_num_clock}>
                        <div className={styles.box_lock}>
                            <p className={`${styles.num_clock} ${styles.one} `}>{timeLeft.seconds[0]}</p>
                        </div>
                        <div className={styles.box_lock}>
                            <p className={`${styles.num_clock} ${styles.two}`}>{timeLeft.seconds[1]}</p>
                        </div>
                    </div>
                    <p className={styles.title_clock}>GIÂY</p>
                </div>
            </div>
        </div>
        <div className={styles.banner_tiaset_right}>
            <p className={styles.title_list}>Danh sách tin ĐĂNG đạt huy hiệu ÁNH SAO</p>
            <Link className={styles.link_list} href="/danh-sach-anh-sao">
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
export default Tia_set;