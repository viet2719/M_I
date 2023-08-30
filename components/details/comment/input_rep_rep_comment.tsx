import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../main_timviec/main_timviec.module.css'
type Props = {
    handleComment:()=>void
    setcontent_comment:(value:string) => void
    content_comment:string
    showInput:boolean
    setShowInput:(value:boolean) => void
}

const Input_Rep_comment = ({handleComment,setcontent_comment,content_comment,showInput}: Props) => {

  return (
    <div>
        {  showInput && <div className={`${styles.cm_input} ${styles.input_comment}`}>
    <Image
        width={36}
        height={36}
        className={`${styles.img_user}`}
        src={'/images/638286918069380000_1404156.jpg'}
        alt="Nguyễn Quang Trường"
    />
    <textarea
        onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                handleComment()
            }
        }}
        className={`${styles.ct_cm}`}
        id="ct_cm"
        maxLength={250}
        onChange={(e) => {
            setcontent_comment(e.target.value.trim())
              
        }}
        placeholder="Viết bình luận"
        value={content_comment}
    />
    <svg
        onClick={() => handleComment()}
        className={`${styles.ic_send_cm}`}
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width={32} height={32} rx={16} fill="#4C5BD4" />
        <path
            d="M24.7922 8.21841C24.6908 8.11767 24.5628 8.04793 24.4231 8.01737C24.2835 7.98681 24.138 7.99672 24.0037 8.04592L7.48458 14.0456C7.34211 14.0996 7.21946 14.1956 7.13291 14.3208C7.04635 14.4461 7 14.5946 7 14.7468C7 14.899 7.04635 15.0476 7.13291 15.1728C7.21946 15.2981 7.34211 15.3941 7.48458 15.448L13.9346 18.0204L18.6951 13.2507L19.7538 14.3081L14.9708 19.0854L17.5538 25.5275C17.6094 25.6671 17.7057 25.7867 17.8302 25.8709C17.9547 25.9552 18.1017 26.0001 18.2521 26C18.4038 25.9969 18.551 25.9479 18.6744 25.8596C18.7977 25.7712 18.8913 25.6476 18.9429 25.505L24.9498 9.00587C25.001 8.87319 25.0133 8.72871 24.9854 8.58929C24.9575 8.44987 24.8905 8.32124 24.7922 8.21841Z"
            fill="white"
        />
    </svg>
    <svg
        className={`${styles.cm_img_ct}`}
        id="cm_img_ct"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.76017 22H17.2402C20.0002 22 21.1002 20.31 21.2302 18.25L21.7502 9.99C21.8902 7.83 20.1702 6 18.0002 6C17.3902 6 16.8302 5.65 16.5502 5.11L15.8302 3.66C15.3702 2.75 14.1702 2 13.1502 2H10.8602C9.83017 2 8.63017 2.75 8.17017 3.66L7.45017 5.11C7.17017 5.65 6.61017 6 6.00017 6C3.83017 6 2.11017 7.83 2.25017 9.99L2.77017 18.25C2.89017 20.31 4.00017 22 6.76017 22Z"
            stroke="#999999"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10.5 8H13.5"
            stroke="#999999"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z"
            stroke="#999999"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
    <input
        style={{ display: 'none' }}
        id="secleimg"
        name="listimg"
        className={`${styles.fileupload}`}
        type="file"
    />
    <div id="tag_friend" style={{ display: 'none' }} />
</div>}
    </div>
 
  )
}
export default Input_Rep_comment;