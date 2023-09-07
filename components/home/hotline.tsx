import React from 'react'
import styles from '@styles/home/home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

const Hotline = (props: Props) => {
  return (
    <div className={styles.hotlineLeft}>
    <div className={styles.hotline}>
        <h3 className={styles.hotlineH4}>
            <span className={styles.icon}>
                <Image
                    width={41}
                    height={41}
                    src="/images/before_login/icon_hotline.svg"
                    alt="HOTLINE HỖ TRỢ"
                />
            </span>
            HOTLINE HỖ TRỢ CHO NTD và Ứng viên
        </h3>
        <div className={styles.boxHotline}>
            <div className={styles.boxContact}>
                <p className={styles.hotlineTitle}>HOTLINE tư vấn tuyển dụng</p>
                <div className={styles.content}>
                    <div className={styles.hotNd}>
                        <p>
                            <span>0985.472.529</span> - Nhóm Ngô Dung
                        </p>
                        <p>
                            <span>0985.771.347</span> - Nhóm Huyền Ly{' '}
                        </p>
                        <p>
                            <span>0904.646.975</span> - Nhóm Mai Hương
                        </p>
                    </div>
                    <div className={styles.hotNd}>
                        <p>
                            <span>0981.208.813</span> - Nhóm Thùy Linh
                        </p>
                        <p>
                            <span>0946.131.908</span> - Nhóm Thanh Hoa
                        </p>
                        <p>
                            <span>0971.207.216</span> - Nhóm Ngọc Hà{' '}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.boxComplaint}>
                <p className={styles.hotlineTitle}>CSKH &amp; Khiếu nại dịch vụ</p>
                <div className={`${styles.hotNd} ${styles.mbHot}`}>
                    <p className={styles.callHot}>
                        <span className={styles.icon}>
                            <Image
                                height={24}
                                width={24}
                                src="/images/before_login/ic_call_hot.png"
                                alt="Hotline"
                            />
                        </span>
                        Hotline: <span>0982.079.209</span>
                    </p>
                    <Link className={`${styles.callHot} ${styles.chat365}`} href="#">
                        <span className={styles.icon}>
                            <Image
                                height={24}
                                width={24}
                                src="/images/before_login/icon_chat_blue.svg"
                                alt="Chat"
                            />
                        </span>
                        <span>Chat 365</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hotline