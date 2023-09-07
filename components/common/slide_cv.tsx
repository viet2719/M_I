import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import styles from '@styles/common/slide_cv.module.scss'
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
					height={268}
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

export default function Slide_cv() {
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
		speed: 800,
		autoplay: true,
		slidesToShow: 5,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	}
	const slickSettingstablet1 = {
		dots: false,
		infinite: true,
		speed: 800,
		autoplay: true,
		slidesToShow: 3,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	}
	const slickSettingstablet2 = {
		dots: false,
		infinite: true,
		speed: 800,
		autoplay: true,
		slidesToShow: 2,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	}
	const slickSettingsmobile = {
		dots: false,
		infinite: true,
		speed: 800,
		autoplay: true,
		slidesToShow: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	}
	return (
		<>
			<div className={styles.box_cvpc}>
				<Slider ref={sliderRef} {...slickSettings} className={styles.box_cvpc}>
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
			<div className={styles.box_cvtablet1}>
				<Slider ref={sliderRef} {...slickSettingstablet1}>
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
			<div className={styles.box_cvtablet2}>
				<Slider ref={sliderRef} {...slickSettingstablet2}>
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
			<div className={styles.box_cvmobile}>
				<Slider ref={sliderRef} {...slickSettingsmobile}>
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
