import React, { useState } from 'react'
import Footer from '../common/footer'
import Main_breadcrumb from './main_breadcrumb'
import Container from './container/container'
import New_banner_nguoi_tim_viec_befor from '../common/banner_nguoi_tim_viec_befor'
import New_banner_nguoi_tim_viec from '../common/new_banner_nguoi_tim_viec'
import Model_noti from '../pop_up/model_noti'

type Props = {}

const Nguoi_tim_viec = (props: Props) => {
	const title = "Đăng nhập Nhà Tuyển Dụng để xem thông tin và CHAT với ứng viên"
	const [isLogin, setIsLogin] = useState<boolean>(false)

	return (
		<div>
			{/* ModelLogin */}
			<Model_noti
			title={title}
			/>
			{isLogin ? <New_banner_nguoi_tim_viec /> : <New_banner_nguoi_tim_viec_befor isLogin={isLogin} />}
			<Main_breadcrumb isLogin={isLogin}/>

			<Container isLogin={isLogin} />

			<Footer />
		</div>
	)
}
export default Nguoi_tim_viec
