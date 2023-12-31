import React from 'react'
import styles from "./main_timviec.module.css"
import Link from 'next/link'
type Props = {}

const Notify_after_login = (props: Props) => {
  return (
    <div className={`${styles.noti_percents}`}>
  Tài khoản của bạn được 12.5 điểm chưa hoàn thiện hồ sơ, bạn cần hoàn thiện hồ
  sơ <Link href="/hoan-thien-ho-so.html">tại đây</Link>
</div>
  )
}
export default Notify_after_login;