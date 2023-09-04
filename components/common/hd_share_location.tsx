import React, { useEffect, useState } from 'react'
import styles from '@/components/details/details.module.css'
import Image from 'next/image'

type Props = {
  showHd:boolean
  setshowHd:(value:boolean) => void
  click:boolean
}

const Hd_share_location = ({showHd,setshowHd,click}: Props) => {
  const [hd1, setHd1] = useState<boolean>(true)
  const [hd2, setHd2] = useState<boolean>(false)
  const [hd3, setHd3] = useState<boolean>(false)
  const [hd4, setHd4] = useState<boolean>(false)
  const [hd5, setHd5] = useState<boolean>(false)
  const [hd6, setHd6] = useState<boolean>(false)
useEffect(()=>{
  if(click){
    setTimeout(() => {
      setHd1(true),setHd2(false),setHd3(false),setHd4(false),setHd5(false),setHd6(false)
    },1500);
    setTimeout(() => {
      setHd1(false),setHd2(true),setHd3(false),setHd4(false),setHd5(false),setHd6(false)
    }, 1500);
    setTimeout(() => {
      setHd1(false),setHd2(false),setHd3(true),setHd4(false),setHd5(false),setHd6(false)
    }, 4500);
    setTimeout(() => {
      setHd1(false),setHd2(false),setHd3(false),setHd4(true),setHd5(false),setHd6(false)
    }, 6000);
    setTimeout(() => {
      setHd1(false),setHd2(false),setHd3(false),setHd4(false),setHd5(true),setHd6(false)
    }, 7500);
    setTimeout(() => {
      setHd1(false),setHd2(false),setHd3(false),setHd4(false),setHd5(false),setHd6(true)
    }, 9000);
  }

},[click])
  return (
    <div>
   {showHd &&
    <div className={`${styles.modal } ${styles.pop_huongdan}`} style={{ display: "block" }}>
    <div className={`${styles.modal_content}`}>
      <div className={`${styles.pop_md_top}`}>
        <span onClick={()=>setshowHd(false)} className={`${styles.clode_pop}`}>×</span>
        <div className={`${styles.slick_pop}`}>
          <div className={`${styles.ctn_slk_pop}`}>
            <Image width={600} height={483}
              src="/images/exp_hd1.gif"
              className={`${!hd1?styles.avt_huongdan:styles.show_avt_huongdan}`}
              alt="Hướng dẫn"
            />
            <Image width={600} height={483}
              src="/images/exp_hd2.gif"
              className={`${!hd2?styles.avt_huongdan:styles.show_avt_huongdan}`}
              alt="Hướng dẫn"
            />
            <Image width={600} height={483}
              src="/images/exp_hd3.gif"
              className={`${!hd3?styles.avt_huongdan:styles.show_avt_huongdan}`}
              alt="Hướng dẫn"
            />
            <Image width={600} height={483}
              src="/images/exp_hd4.gif"
              className={`${!hd4?styles.avt_huongdan:styles.show_avt_huongdan}`}
              alt="Hướng dẫn"
            />
            <Image width={600} height={483}
              src="/images/exp_hd5.gif"
              className={`${!hd5?styles.avt_huongdan:styles.show_avt_huongdan}`}
              alt="Hướng dẫn"
            />
            <Image width={600} height={483}
              src="/images/exp_hd6.gif"
              className={`${!hd6?styles.avt_huongdan:styles.show_avt_huongdan}`}
              alt="Hướng dẫn"
            />
          </div>
          <div className={`${styles.nex_pre_ctn}`}>
            <span onClick={()=>{setHd1(true),setHd2(false),setHd3(false),setHd4(false),setHd5(false),setHd6(false)}} className={`${styles.dot} ${hd1?styles.active:""}`} />
            <span onClick={()=>{setHd1(false),setHd2(true),setHd3(false),setHd4(false),setHd5(false),setHd6(false)}} className={`${styles.dot} ${hd2?styles.active:""}`} />
            <span onClick={()=>{setHd1(false),setHd2(false),setHd3(true),setHd4(false),setHd5(false),setHd6(false)}} className={`${styles.dot} ${hd3?styles.active:""}`} />
            <span onClick={()=>{setHd1(false),setHd2(false),setHd3(false),setHd4(true),setHd5(false),setHd6(false)}} className={`${styles.dot} ${hd4?styles.active:""}`} />
            <span onClick={()=>{setHd1(false),setHd2(false),setHd3(false),setHd4(false),setHd5(true),setHd6(false)}} className={`${styles.dot} ${hd5?styles.active:""}`} />
            <span onClick={()=>{setHd1(false),setHd2(false),setHd3(false),setHd4(false),setHd5(false),setHd6(true)}} className={`${styles.dot} ${hd6?styles.active:""}`} />
          </div>
        </div>
      </div>
      <div className={`${styles.pop_md_butt}`}>
        <p className={`${styles.tde_pop}`}>Hướng dẫn chia sẻ vị trí</p>
        <p className={`${styles.dez_pop}`}>
          Hướng dẫn bật chia sẻ vị trí để AI365 gợi ý những cơ hội việc làm phù
          hợp nhất dành riêng cho bạn
        </p>
      </div>
    </div>
  </div>}

    </div>
 
  
  )
}
export default Hd_share_location