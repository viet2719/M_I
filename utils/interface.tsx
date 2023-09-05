export interface IJob {
	new_id: number
	new_title: string
	new_alias: string
	new_city: [number]
	new_money: number
	new_hinh_thuc: number
	new_create_time: number
	new_active: number
	new_han_nop: number
	new_do: number
	new_ghim: number
	new_thuc: number
	new_badge: number
	nm_id: number
	nm_type: number
	nm_min_value: number
	nm_max_value: number
	nm_unit: number
	usc_badge: number
	usc_id: number
	usc_company: string
	usc_alias: string
	chat365_id: number
	usc_time_login: number
	usc_create_time: number
	usc_logo: string
	usc_star: number
	isOnline: number
}
export interface ICity {
	cit_count: number
	cit_count_vl: number
	cit_count_vlch: number
	cit_id: number
	cit_name: string
	cit_order: number
	cit_type: number
	postcode: string
}
export interface IDistricts {
	cit_id: number
	cit_name: string
	cit_order: number
	cit_type: number
	cit_parent: number
	cit_count: number
}
export interface ISeo {
	title: string
	h1: string
	sapo: string
	module: string
	meta_des: string
	meta_key: string
	meta_title: string
	time_edit: number
}