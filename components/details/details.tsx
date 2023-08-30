import React, { useEffect, useState } from 'react'
import New_banner_detail from '../common/new_banner_details'
import Main_breadcrumb from './main_breadcrumb/main_breadcrumb'
import Main_timviec from './main_timviec/main_timviec'
import Footer_chat from './footer_chat/footer_chat'
import New_banner_detai_befor from '../common/new_banner_detais_befor'
import Model_noti from '../pop_up/model_noti'
import { useRouter } from 'next/router'

type Props = {}

const Detail = (props: Props) => {
	const [isLogin, setIsLogin] = useState<boolean>(true)

	const [show, setShow] = useState<boolean>(false)
	const router = useRouter()
	const handleScroll = () => {
		const scrollY = window.scrollY
		if (scrollY > 0 && scrollY < 1600) {
			setShow(true)
		} else {
			setShow(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	useEffect(() => {
		// router.push(router.pathname)
		// router.pathname="love-love-p1312312.html"
	}, [])
	return (
		<div>
			{/* ModelLogin */}
			<Model_noti />
			{isLogin ? <New_banner_detail /> : <New_banner_detai_befor isLogin={isLogin} />}
			{!isLogin && <div style={{ color: '#fff', height: 30 }}></div>}
			<Main_breadcrumb />
			<Main_timviec show={show} isLogin={isLogin} />
			<Footer_chat />
		</div>
	)
}
export default Detail
