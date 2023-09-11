import React from 'react'
import styles from '@/styles/mbti/ads.module.scss'
import { Divider } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
export default function Ads() {

    const linksAndTitles = [
        // Danh sách các tiêu đề và đường link tương ứng
        {
            img: '',
            title: "Tính lương GROSS - NET",
            link: "link1"
        },
        {
            img: "",
            title: "Tính lãi suất kép",
            link: "link2"
        },
        {
            img: "",
            title: "Tính thuế thu nhập cá nhân",
            link: "link3"
        },
        {
            img: "",
            title: "Lập kế hoạch tiết kiệm",
            link: "link2"
        },
        {
            img: "",
            title: "Tính bảo hiểm thất nghiệp",
            link: "link3"
        },
        {
            img: "",
            title: "Tính bảo hiểm xã hội một lần",
            link: "link2"
        },
        {
            img: "",
            title: "Trắc nghiệm MI",
            link: "link1"
        },
        {
            img: "",
            title: "Mobile App Chat365",
            link: "link1"
        },
    ];

    return (
        <div>
            <div className={styles.ads_boss}>
                <div className={styles.ads1}>
                    <div className={styles.title}>
                        <h4>
                            <Image width={25} height={25} alt="logo" src="/images/mbti/list.svg" />
                            Các tiện ích khác
                        </h4>
                        <Divider className={styles.divider} />
                    </div>
                    <div className={styles.link}>
                        {linksAndTitles.map((item, index) => (
                            <div key={index} className={styles.item__link}>
                                {item.img}
                                <Link href={item.link}>{item.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.ads2}>
                    <Image width={320} height={370} alt='' src="/images/mbti/adsmauCv.svg" />
                </div>
            </div>



        </div>
    )
}
