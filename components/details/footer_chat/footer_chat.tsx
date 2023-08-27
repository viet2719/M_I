import React, { useState } from 'react'
import styles from "@/components/details/main_timviec/main_timviec.module.css"
import Link from 'next/link'
type Props = {}

const Footer_chat = (props: Props) => {
    const [show,setShow] = useState(false)
  return (
    <div className={!show?styles.kn_user:styles.d_none}>
  <span onClick={()=>setShow(!show)} className={styles.close_kn_user}>✕</span>
  <span className={styles.text_kn_user}>Kết nối ứng viên và nhà tuyển dụng</span>
  <Link
  href={"#"}
    className={`${styles.button_kn_user} ${styles.openApp}`}
    data-type={0}
    data-id={241517}
    id-chat={1432804}
  >
    <span>Chat với nhà tuyển dụng </span>
    <svg
      width={22}
      height={21}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.26751 1.226C15.9115 -2.234 24.4405 6.9435 19.796 15.304C17.686 19.101 12.445 22.159 6.34201 19.267L2.09951 20.479C1.44151 20.667 0.833011 20.061 1.01801 19.4025C1.27101 18.4995 1.87101 16.3705 2.22201 15.2165C-0.408989 10.5225 1.36501 3.588 7.26701 1.226H7.26751ZM6.99751 8.6255C6.99751 8.9705 7.27751 9.2505 7.62251 9.2505H14.3745C14.5403 9.2505 14.6992 9.18465 14.8165 9.06744C14.9337 8.95023 14.9995 8.79126 14.9995 8.6255C14.9995 8.45974 14.9337 8.30077 14.8165 8.18356C14.6992 8.06635 14.5403 8.0005 14.3745 8.0005H7.62251C7.27751 8.0005 6.99751 8.2805 6.99751 8.6255ZM7.62451 11.7375C7.45875 11.7375 7.29978 11.8033 7.18257 11.9206C7.06536 12.0378 6.99951 12.1967 6.99951 12.3625C6.99951 12.5283 7.06536 12.6872 7.18257 12.8044C7.29978 12.9216 7.45875 12.9875 7.62451 12.9875H12.3745C12.5403 12.9875 12.6992 12.9216 12.8165 12.8044C12.9337 12.6872 12.9995 12.5283 12.9995 12.3625C12.9995 12.1967 12.9337 12.0378 12.8165 11.9206C12.6992 11.8033 12.5403 11.7375 12.3745 11.7375H7.62451Z"
        fill="#FFFFFF"
      />
    </svg>
  </Link>
</div>
  )
}
export default Footer_chat