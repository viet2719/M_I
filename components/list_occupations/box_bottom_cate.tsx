import Chat_NTD from '@/components/common/chat_NTD'
import Footer from '@/components/common/footer'
import New_banner from '@/components/common/new_banner'
import Slide_cv from '@/components/common/slide_cv'
import styles from '@styles/list_occupations/main_search.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import List_cate from './item_cate'
import { IJob } from '@/utils/interface'
import { base_timviec365 } from '../service/functions'
import { useRouter } from 'next/router'
import { removeHtmlTags } from '@/utils/convert'
type Props = {
    footerNew:any
}

const Box_bottom_cate = ({footerNew}: Props) => {
    const [seenMore, setSeenMore] = useState(true)

  return (
    <div className={styles.box_bottom_cate}>
    <div id={styles.mota}>
        <div className={styles.phu_luc}>
            <div style={{ float: 'left', width: '100%' }}>
                <nav className={styles.table_of_contents}>
                    <p className={styles.tt_phu_luc}>
                        <span>Mục lục:</span>
                    </p>
                    <ul>
                        <li className={styles.li_h2}>
                            <a
                                className={styles.ul_h2}
                                href="#nhu-cau-tuyen-nhan-vien-kinh-doanh-tphcm"
                            >
                                1. Nhu cầu tuyển nhân viên kinh doanh TPHCM{' '}
                            </a>
                        </li>
                        <li className={styles.li_h2}>
                            <a
                                className={styles.ul_h2}
                                href="#gioi-thieu-doi-net-ve-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh"
                            >
                                2. Giới thiệu đôi nét về việc làm nhân viên kinh doanh tại Hồ Chí Minh{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#mot-so-linh-vuc-hay-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh"
                            >
                                2.1. Một số lĩnh vực hay có nhu cầu tuyển dụng nhân viên kinh doanh tại Hồ
                                Chí Minh{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#nhan-vien-kinh-doanh-tai-ho-chi-minh-thuong-lam-nhung-cong-viec-gi"
                            >
                                2.2. Nhân viên kinh doanh tại Hồ Chí Minh thường làm những công việc gì?{' '}
                            </a>
                        </li>
                        <li className={styles.li_h2}>
                            <a
                                className={styles.ul_h2}
                                href="#mot-so-vi-tri-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh-voi-so-luong-lon"
                            >
                                3. Một số vị trí có nhu cầu tuyển dụng nhân viên kinh doanh tại Hồ Chí
                                Minh với số lượng lớn{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#tuyen-nhan-vien-kinh-doanh-o-to-tai-tp-hcm"
                            >
                                3.1. Tuyển nhân viên kinh doanh ô tô tại TP.HCM{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a className={styles.ul_h3} href="#nhan-vien-kinh-doanh-noi-that-hcm">
                                3.2. Nhân viên kinh doanh nội thất HCM{' '}
                            </a>
                        </li>
                        <li className={styles.li_h2}>
                            <a
                                className={styles.ul_h2}
                                href="#huong-dan-cach-tim-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh-hieu-qua-nhat"
                            >
                                4. Hướng dẫn cách tìm việc làm nhân viên kinh doanh tại Hồ Chí Minh hiệu
                                quả nhất{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#hay-bien-mo-ta-kinh-nghiem-thanh-nhung-thanh-tich-noi-bat"
                            >
                                4.1. Hãy biến mô tả kinh nghiệm thành những thành tích nổi bật{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#tap-luyen-tra-loi-nhung-cau-hoi-sau-truoc-khi-viet-cv-xin-viec-nhan-vien-kinh-doanh"
                            >
                                4.2. Tập luyện trả lời những câu hỏi sau trước khi viết CV xin việc nhân
                                viên kinh doanh{' '}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className={`${styles.gt_text} ${seenMore ? styles.over_bv_footer : ''}`}>
        <div dangerouslySetInnerHTML={{ __html: footerNew?.cate_des }} />
   
           
        </div>

        <p
            className={`${styles.bv_foo_more_r}`}
            onClick={() => {
                setSeenMore(!seenMore)
            }}
        >
            {seenMore ? '+ Xem thêm' : '- Rút gọn'}{' '}
        </p>
    </div>
</div>
  )
}

export default Box_bottom_cate