import React from 'react'
import Rada from "./RadarChart"
import styles from "@/styles/mi/resuiltmi.module.scss"
import Image from 'next/image'
import { Divider } from 'antd'
import Strength from './Strength'
import Weakness from './weakness'
import Thingkinh from './thingkinh'
export default function Resuilt() {
    return (
<div>
        <div className={`${styles.container} mi`}>
            <h4 className={styles.title}>KẾT QUẢ TRẮC NGHIỆM ĐA TRÍ THÔNG MINH MI</h4>
             <Rada/>
        </div>
        <div style={{background:" #F5FBFF", paddingTop:"1px"}}    >
        <div className={`${styles.container}`}> 
        <div className={styles.yoursel}>
           
                <p>Điểm mạnh và Điểm yếu</p>
                <p>Tư duy và Sáng tạo</p>
                <p>Tiêu chí công việc</p>
             
        </div>
        <main>
            <label htmlFor="" className={styles.strength}>Điểm mạnh</label>
            <Divider/>
            <div className={styles.mani}>
                <Strength/>
            </div>
        </main>
        <main>
            <label htmlFor="" className={styles.strength}>Điểm yếu</label>
            <Divider/>
            <div className={styles.mani}>
                <Weakness/>
            </div>
        </main>
        <main>
            <Thingkinh/>
        </main>
        </div>
        </div>
        </div>

    );
}