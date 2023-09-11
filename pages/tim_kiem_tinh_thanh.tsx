import Head_common from '@/components/head'
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
	nganhNgheLienQuan,
	tuKhoa,
	total
}: any) => {
	return (
		<>
		<Head_common  />
		<Main_search
			dataSSR={dataSSR}
			checkBox={checkBox}
			footnewSSR={footnew}
			chucdanhSSR={chucdanh}
			diadiemSSR={diadiem}
			nganhNgheLienQuan={nganhNgheLienQuan}
			tuKhoaSSR={tuKhoa}
			totalSSR = {total}
		/>
		</>
		
	)
}
//SSR
export async function getServerSideProps(context: any) {
	// Danh sách việc làm
	const fullURL = context.req.url || ''
	console.log(fullURL)
	let cate_id
	let cit_id
	const parts = fullURL.split('-') // Tách chuỗi thành mảng các phần tử dựa trên dấu '-'
	// Lấy giá trị cuối cùng sau dấu '-'
	const lastValue = parts[parts.length - 1]
	// Tách giá trị giữa 'c' và 'v'
	cate_id = lastValue.split('c')[1]?.split('v')[0]
	// Lấy giá trị sau 'v'
	cit_id = lastValue.split('v')[1]
	if (cate_id?.length > 2) {
		const { id }: any = context.query
		// const id2: any = context?.query?.diadiem
		const idAsString = id?.toString()
		const startIndex = idAsString?.indexOf('v') // Tìm vị trí của 'v' trong chuỗi.
		const sanitizedId = idAsString?.substring(startIndex + 1) // Lấy tất cả ký tự sau 'v'.
		if (context.query.id[0] != 'v') {
			let id = context.query.cateidv + context.query.id[0]
			cate_id = id
		} else {
			cate_id = context.query.cateidv
		}
		cit_id = sanitizedId
	}
	console.log(cate_id, cit_id)
	let total
	let dataSSR
	let checkBox
	let footnew
	let chucdanh
	let diadiem
	let congty
	let nganhNgheLienQuan
	let tuKhoa
	try {
		const res = await fetch(`${base_timviec365}/api/timviec/new/listJobBySearch`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				city: cit_id,
				cate_id: cate_id,
				pageSize: 20,
				page: 1,
			}),
		})
		const data = await res.json()
		total= data?.data?.total
		dataSSR = data?.data?.items
		checkBox = data?.data?.items?.map(() => false) || []
		footnew = data?.data?.footerNew
		chucdanh = data?.data?.listChucDanh
		diadiem = data?.data?.listCityReated
		nganhNgheLienQuan = data?.data?.listCongvieclienquan
		tuKhoa = data?.data?.listWordReacted
	} catch (error) {}

	return {
		props: {
			dataSSR,
			checkBox,
			footnew,
			chucdanh,
			diadiem,
			nganhNgheLienQuan,
			tuKhoa,
			total
		},
	}
}
export default Tim_kiem_theo_tinh_thanh
