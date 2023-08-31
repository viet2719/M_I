import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import styles from "@/styles/common/slide_cv_detail.module.scss"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'

const Slide = ({ children }: any) => {
	return (
		<div className={styles.item}>
			<div className={styles.wa}>
				<Image
					width={210}
					height={350}
                    style={{margin:0}}
					className={styles.lazyload}
					src="/images/nhan-vien-phuc-vu-04.png"
					alt="CV Phục Vụ 04"
					title="CV Phục Vụ 04"
				/>
				<div className={styles.info}>
					<div className={styles.btnBox}>
						<p>
							<Link
								href="https://timviec365.vn/cv365/tao-cv-phuc-vu/mau-04"
								rel="nofollow"
								target="_blank"
								tabIndex={-1}
							>
								Sử dụng mẫu này
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Slide_cv_details() {
	const sliderRef = useRef<Slider | null>(null)
	function SampleNextArrow(props: any) {
		const { className, style, onClick } = props
		return <div className={className + ' ' + styles.customNextArrow} onClick={onClick} />
	}

	function SamplePrevArrow(props: any) {
		const { className, style, onClick } = props
		return <div className={className + ' ' + styles.customPrevArrow} onClick={onClick} />
	}
	const slickSettings = {
		className: 'slider variable-width',
		dots: false,
		infinite: true,
		speed: 200,
		autoplay: true,
		slidesToShow: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	}
	return (
		<>
			<div className={styles.box_cvpc} >
				<Slider  ref={sliderRef} {...slickSettings} className={styles.box_cvpc}>
					<Slide />
					<Slide />
					<Slide />
					<Slide />
					<Slide />
					<Slide />
					<Slide />
					<Slide />
				</Slider>
			</div>
		</>
	)
}
