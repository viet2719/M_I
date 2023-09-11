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
export interface IArr_likes_new{
	"_id": string
	"lk_id": number
	"lk_type": number
	"lk_for_comment": number
	"lk_user_name": string
	"lk_user_avatar": string
	"lk_user_idchat":number
}
export interface IJobsTinhThanh{
	"new_id": number
	"new_title": string
	"new_alias": string
	"new_cat_id": string
	"new_city": string,
	"new_money": number
	"new_exp": number
	"new_bang_cap": number
	"new_create_time":number
	"new_update_time": number
	"new_active": number
	"new_view_count": number
	"new_han_nop": number
	"new_hot": number
	"new_cao": number
	"new_gap": number
	"new_nganh": number
	"new_badge":number
	"new_yeucau": string
	"new_quyenloi": string
	"nm_id": number
	"nm_type":number
	"nm_min_value":number
	"nm_max_value": number
	"nm_unit":number
	"usc_id": number
	"usc_create_time": number
	"usc_company": string
	"usc_alias": string
	"usc_logo": any,
	"usc_time_login": number
	"usc_star": number
	"chat365_secret": string
	"usc_city": number
	"chat365_id": number
	"isOnline": number
	"saved": string
	"applied":string
	"views":string
	"arr_likes_new": IArr_likes_new[],
	"arr_share_new": any[],
	"count_comments": number
	"usc_badge": number
	"arr_comments": any[]
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
export interface Iicons {
	id: number
	img: string
	alt: string
	style: string
}
export interface Icomment {
	arr_likes: []
	arr_reply: []
	cm_comment: string
	cm_id: number
	cm_img: string
	cm_new_id: number
	cm_parent_id: number
	cm_sender_avatar: string
	cm_sender_idchat: number
	cm_sender_name: string
	cm_sender_type: number
	cm_tag: []
	cm_time: string
}