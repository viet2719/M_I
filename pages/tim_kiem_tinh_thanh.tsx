import Main_search from '@/components/list_occupations/main_search'
import { store_per } from '@/components/redux/store'
import { base_timviec365 } from '@/components/service/functions'
import { Checkbox } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { Provider } from 'react-redux'

const Tim_kiem_theo_tinh_thanh = ({
	dataSSR,
	checkBox,
	footnew,
	chucdanh,
	diadiem,
	congty,
}: any) => {
	return (
			<Main_search
				dataSSR={dataSSR}
				checkBox={checkBox}
				footnewSSR={footnew}
				chucdanhSSR={chucdanh}
				diadiemSSR={diadiem}
				congtySSR={congty}
			/>
	)
}
export async function getServerSideProps(context: any) {
	// Danh sách việc làm

	const { id }: any = context.query
	const id2: any = context?.query?.diadiem
	const idAsString = id?.toString()
	const startIndex = idAsString?.indexOf('v') // Tìm vị trí của 'v' trong chuỗi.
	const sanitizedId = idAsString?.substring(startIndex + 1) // Lấy tất cả ký tự sau 'v'.
	let dataSSR
	let checkBox
	let footnew
	let chucdanh
	let diadiem
	let congty
	try {
		const res = await fetch(`${base_timviec365}/api/timviec/new/listJobBySearch`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				city: sanitizedId ? sanitizedId : id2,
				pageSize: 20,
				page: 1,
			}),
		})
		const data = await res.json()
		dataSSR = data?.data?.items
		checkBox = data?.data?.items?.map(() => false) || []
		footnew = data?.data?.footerNew
		chucdanh = data?.data?.listChucDanh
		diadiem = data?.data?.listCityReated
		congty = data?.data?.listCongvieclienquan
	} catch (error) {}

	return {
		props: {
			dataSSR,
			checkBox,
			footnew,
			chucdanh,
			diadiem,
			congty,
		},
	}
}
export default Tim_kiem_theo_tinh_thanh
