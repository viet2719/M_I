import React from 'react'
import Head_common from '../head'
import Header from '../common/header'
import Box_search from '../common/box_search'
import New_banner from '../common/new_banner'
import New_banner_detail from '../common/new_banner_details'
import Main_breadcrumb from './main_breadcrumb/main_breadcrumb'
import Main_timviec from './main_timviec/main_timviec'
import HeaderAfterLogin from '../common/header_after_login'

type Props = {}

const Detail = (props: Props) => {
	return (
		<div>
			<New_banner_detail />
			<Main_breadcrumb />
			<Main_timviec/>
		</div>
	)
}
export default Detail
