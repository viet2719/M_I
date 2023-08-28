import React, { useEffect, useState } from 'react'
import New_banner_detail from '../common/new_banner_details'
import Main_breadcrumb from './main_breadcrumb/main_breadcrumb'
import Main_timviec from './main_timviec/main_timviec'
import Footer_chat from './footer_chat/footer_chat'

type Props = {}

const Detail = (props: Props) => {
	const [show, setShow] = useState<boolean>(false)
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
	return (
		<div>
			{!show && <New_banner_detail />}
			<Main_breadcrumb />
			<Main_timviec show={show} />
			<Footer_chat />
		</div>
	)
}
export default Detail
