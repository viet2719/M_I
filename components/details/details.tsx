import React from 'react'
import Head_common from '../head'
import Header from '../common/header'
import Box_search from '../common/box_search'
import New_banner from '../common/new_banner'
import New_banner_detail from '../common/new_banner_details'

type Props = {}

const Detail = (props: Props) => {
	return (
		<div>
			<Header />
            <New_banner_detail/>
		</div>
	)
}
export default Detail
