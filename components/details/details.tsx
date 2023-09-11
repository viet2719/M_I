import React, { useEffect, useState } from 'react'
import New_banner_detail from '../common/new_banner_details'
import Main_breadcrumb from './main_breadcrumb/main_breadcrumb'
import Main_timviec from './main_timviec/main_timviec'
import Footer_chat from './footer_chat/footer_chat'
import New_banner_detai_befor from '../common/new_banner_detais_befor'
import Model_noti from '../pop_up/model_noti'
type Props = {}

const Detail = (props: Props) => {
	const [isLogin, setIsLogin] = useState<boolean>(false)
	const [isFixedHeader, setIsFixedHeader] = useState(false)

	const handleScroll = () => {
		if (window.scrollY >= 600) {
			setIsFixedHeader(false)
		} else {
			setIsFixedHeader(true)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<div>
			{/* ModelLogin */}
			<Model_noti />
			{isLogin ? (
				<div >
					{isFixedHeader && <New_banner_detail />}
				</div>
			) : (
				<New_banner_detai_befor  />
			)}
			{!isLogin && <div style={{ color: '#fff', height: 30 }}></div>}
			<Main_breadcrumb />
			<Main_timviec />
			<Footer_chat />
		</div>
	)
}
export default Detail
