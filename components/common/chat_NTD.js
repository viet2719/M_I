/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styles from '@styles/common/chat_NTD.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { io } from 'socket.io-client'

const listDataChats = [
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/image/Ic_list_online',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
	{
		id: 1,
		company: 'Công Ty Cổ Phần Nam Dược Cn Miền Nam',
		jobTitle: 'Trình Dược Viên kênh OTC tại KV Đắk Lắk',
		location: 'Đắk Lắk',
		avatarSrc: '/images/Ic_list_online.png',
	},
]

const Chat_NTD = (props) => {
	let { classNameProps, propsElementSlugNganhNghe } = props
	useEffect(() => {
		const socket = io.connect('https://socket.timviec365.vn', {
			secure: true,
			enabledTransports: ['https'],
			transports: ['websocket', 'polling'],
		})
		// Đoạn mã xử lý sự kiện và giao tiếp với máy chủ Socket.IO
		var arr_online
	
		// Sử dụng emit và on để lấy danh sách người dùng trực tuyến
		socket.emit('GetOnline', 'timviec365')
		socket.on('GetOnline', (userId) => {
			arr_online = userId
			var indexs = arr_online.indexOf(0)
			if (indexs !== -1) {
				arr_online.splice(indexs, 1)
			}
	
			var i
			for (let i = 0; i < arr_online.length; ++i) {
				if (arr_online[i] > 0) {
					const onlineItem = document.querySelector('[id-chat="' + arr_online[i] + '"]');
					if (onlineItem) {
						onlineItem.classList.add(styles.online_item);
						
						const noLogoChat = document.querySelector('.no_logo_chat[id-chat="' + arr_online[i] + '"]');
						if (noLogoChat) {
							noLogoChat.setAttribute('src', '/images/user_chat_onl.png');
							noLogoChat.setAttribute('data-src', '/images/user_chat_onl.png');
						}
			
						const boxTimeOff = onlineItem.querySelector('.box_time_off');
						if (boxTimeOff) {
							boxTimeOff.style.display = 'none';
						}
					}
				}
			}
			
		})

		socket.on('Login', (userId, json_ttc) => {
			const arr_online = Array.from(document.querySelectorAll(`${styles.online_item}`));
			if (arr_online.length > 0 && arr_online.findIndex(item => item.getAttribute('id-chat') === userId.toString()) !== -1) {
				return false;
			}
			arr_online.push(userId);
			if (userId > 0) {
				const userChatElement = document.querySelector('[id-chat="' + userId + '"]');
				if (userChatElement) {
					userChatElement.classList.add('m_online');
					//th
					const noLogoChatElement = document.querySelector('.no_logo_chat[id-chat="' + userId + '"]');
					if (noLogoChatElement) {
						noLogoChatElement.setAttribute('src', '/images/user_chat_onl.png');
						noLogoChatElement.setAttribute('data-src', '/images/user_chat_onl.png');
					}
					const boxTimeOffElement = userChatElement.querySelector('.box_time_off');
					if (boxTimeOffElement) {
						boxTimeOffElement.style.display = 'none';
					}
				}
			}
		
			const id_onl = [userId];
		
			if (document.querySelector('.list_chat_uv') && !document.querySelector('.online_item[id-chat="' + userId + '"]') && userId > 0) {
				const city_id = document.querySelector('.luv-right').getAttribute('data-id');
				const cate_id = document.querySelector('.luv-right').getAttribute('data-cate');
				const formData = new FormData();
				formData.append('online_arr', JSON.stringify(id_onl));
				formData.append('type', 0);
				formData.append('city_id', city_id);
				formData.append('cate_id', cate_id);
				fetch("/ajax/get_online.php", {
					method: "POST",
					body: formData
				})
					.then(response => response.text())
					.then(data => {
						if (data !== '') {
							document.querySelector('.list_chat_uv').insertAdjacentHTML('afterbegin', data);
						} else {
							// thêm box rỗng để không load lại
							document.querySelector('.list_chat_uv').insertAdjacentHTML('beforeend', '<li class="online_item false_div" id-chat="' + userId + '"></li>');
						}
					});
			} else if (document.querySelector('.list_chat_uv') && document.querySelector('.online_item[id-chat="' + userId + '"]') && userId > 0) {
				const onlineItemElement = document.querySelector('.online_item[id-chat="' + userId + '"]');
				if (onlineItemElement && !onlineItemElement.classList.contains('false_div')) {
					onlineItemElement.style.display = 'block';
				}
			}
		
			if (document.querySelector('.list_chat_ntd') && !document.querySelector('.online_item[id-chat="' + userId + '"]') && userId > 0) {
				const city_id = document.querySelector('.vl_left').getAttribute('data-id');
				const formData = new FormData();
				formData.append('online_arr', JSON.stringify(id_onl));
				formData.append('type', 1);
				formData.append('city_id', city_id);
				fetch("/ajax/get_json_online.php", {
					method: "POST",
					body: formData
				})
					.then(response => response.json())
					.then(response => {
						if (response.result) {
							const data = response.list[0];
							const html = `<li class="online_item openApp" id-chat="${data.chat365_id}">
								<a rel="nofollow" target="_blank">
									<span class="ava_mess m_online" title="Đang online">
										<img alt="${data.usc_company}" src="${data.logo}" onerror='this.onerror=null;this.src="/images/no-image.png";'>
									</span>
									<span class="ct_online box_tooltip">
										<p>${data.usc_company}</p>
										<p class=" con-tooltip top">
											<span style="display:block;width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">${data.new_title}</span>
											<span class="tooltip ">
												<span>${data.new_title}</span>
											</span>
										</p>
										<p>${data.usc_city}</p>
									</span>
								</a>
							</li>`;
							document.querySelector('.list_chat_ntd').insertAdjacentHTML('afterbegin', html);
						} else {
							// thêm box rỗng để không load lại
							document.querySelector('.list_chat_ntd').insertAdjacentHTML('beforeend', '<li class="online_item false_div" id-chat="' + userId + '"></li>');
						}
					});
			} else if (document.querySelector('.list_chat_ntd') && document.querySelector('.online_item[id-chat="' + userId + '"]') && userId > 0) {
				const onlineItemElement = document.querySelector('.online_item[id-chat="' + userId + '"]');
				if (onlineItemElement && !onlineItemElement.classList.contains('false_div')) {
					onlineItemElement.style.display = 'block';
				}
			}
		
			if (document.querySelector('#box_nd_uv') && !document.querySelector('.s-row-nd[c-chat="' + userId + '"]') && userId > 0) {
				const data_s = document.querySelector('#box_nd_uv').getAttribute('data-s');
				const cit_id = document.querySelector(".ctn_lay_uv").getAttribute('data-id');
				const qh_id = document.querySelector(".ctn_lay_uv").getAttribute('data-qh');
				const mien_id = document.querySelector(".ctn_lay_uv").getAttribute('data-mien');
				const formData = new FormData();
				formData.append('online_id', userId);
				formData.append('data', data_s);
				formData.append('cit_id', cit_id);
				formData.append('qh_id', qh_id);
				formData.append('mien_id', mien_id);
				fetch("/ajax/get_ndnv_online.php", {
					method: "POST",
					body: formData
				})
					.then(response => response.text())
					.then(data => {
						if (data !== '') {
							const newElement = document.createElement('div');
							newElement.innerHTML = data;
							document.querySelector('#box_nd_uv').insertBefore(newElement, document.querySelector('#box_nd_uv').firstChild);
							const sRowNdElements = document.querySelectorAll('.s-row-nd');
							if (sRowNdElements.length > 10) {
								sRowNdElements[sRowNdElements.length - 1].remove();
							}
						}
					});
			}
		});
		
		socket.on('Logout', userId => {
			const arr_online = Array.from(document.querySelectorAll('.online_item'));
			const index = arr_online.findIndex(item => item.getAttribute('id-chat') === userId.toString());
			if (index !== -1) { arr_online.splice(index, 1); }
			const onlineItemElement = document.querySelector('.online_item[id-chat="' + userId + '"]');
			if (onlineItemElement) {
				onlineItemElement.style.display = 'none';
			}
			const jobChatElement = document.querySelector('.job_chat[id-chat="' + userId + '"]');
			if (jobChatElement) {
				jobChatElement.classList.remove('m_online');
			}
			const uvChatElement = document.querySelector('.uv_chat[id-chat="' + userId + '"]');
			if (uvChatElement) {
				uvChatElement.classList.remove('m_online');
			}
			//th
			const logoUserThElement = document.querySelector('.logo_user_th[id-chat="' + userId + '"]');
			if (logoUserThElement) {
				logoUserThElement.classList.remove('m_online');
			}
			const noLogoChatElement = document.querySelector('.no_logo_chat[id-chat="' + userId + '"]');
			if (noLogoChatElement) {
				noLogoChatElement.setAttribute('src', '/images/user_chat_off.png');
				noLogoChatElement.setAttribute('data-src', '/images/user_chat_off.png');
			}
			const chatCallElement = document.querySelector('.chat_call[id-chat="' + userId + '"]');
			if (chatCallElement) {
				chatCallElement.classList.remove('m_online');
			}
			const btnChatNowElement = document.querySelector('.btn_chat_now[id-chat="' + userId + '"]');
			if (btnChatNowElement) {
				btnChatNowElement.classList.remove('m_online');
			}
		
			const boxTimeOffElement = document.querySelector('[id-chat="' + userId + '"] .box_time_off');
			if (boxTimeOffElement) {
				boxTimeOffElement.style.display = 'block';
				boxTimeOffElement.textContent = "1 giây";
			}
		});
		


	}, [])
	return (
		<div className={`${styles.vl_right} ${classNameProps && styles.frame_th}`}>
			<div className={styles.list_ntd_home}>
				<p className={styles.tt_chat_ntd}>
					<Image
						className={styles.ic_list_onnile}
						src="/images/Ic_list_online.png"
						alt="Chat"
						width={40}
						height={40}
					/>{' '}
					Chat với nhà tuyển dụng
				</p>
				<div className={styles.list_nganh_nghe}>
					<Link rel="nofollow" className={styles.link_all_onl} href="#">
						Tất cả &gt;&gt;
					</Link>
					<ul className={styles.list_chat_ntd}>
						{listDataChats.map((item, index) => (
							<li
								key={index}
								className={`${styles.online_item} ${styles.openApp} ${styles.m_online}` }
								id-chat=""
							>
								<Link href="#">
									<span className={`${styles.ava_mess} ${styles.m_online}`}>
										<Image src={'/images/Ic_list_online.png'} alt="" width={20} height={20} />
									</span>
									<span className={`${styles.ct_online} ${styles.box_tooltip}`}>
										<p>{item.company}</p>
										<p className={`${styles.con_tooltip} ${styles.top}`}>
											<span className={styles.span_con_item}>{item.jobTitle}</span>
											<span className={styles.tooltip}>
												<span>{item.jobTitle}</span>
											</span>
										</p>
										<p>{item.location}</p>
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			{propsElementSlugNganhNghe && (
				<>
					<div className={`${styles.banner_new}`}>
						<div className={`${styles.box_btn} ${styles.bg_bn_listNew}`}>
							<Link
								target="_blank"
								rel="nofollow"
								href="https://play.google.com/store/apps/details?id=timviec365vn.timviec365_vn"
							>
								<img
									className={`lazyloaded`}
									src="/images/before_login/listNew_btn_bn_taiapp1.png"
									alt="App Timviec365"
								/>
							</Link>
							<Link
								target="_blank"
								rel="nofollow"
								href="https://play.google.com/store/apps/details?id=vn.timviec365.cv.cv365_vn"
							>
								<img
									height={114}
									width={39}
									className={`lazyloaded`}
									src="/images/before_login/listNew_btn_bn_taiapp2.png"
									alt="App CV365"
								/>
							</Link>
						</div>
					</div>
					<div className={`${styles.banner_new}`}>
						<Link
							target="_blank"
							rel="nofollow"
							href="https://app.timviec365.vn/Download/Chat365/Install/chat365.exe"
						>
							<img
								className={`lazyloaded`}
								src="/images/before_login/listNew_bn_taichat.png"
								alt="App Chat365"
							/>
						</Link>
					</div>
					<div className={`${styles.banner_new}`}>
						<Link href="https://chat365.timviec365.vn/" target="_blank">
							<img
								className={`lazyloaded`}
								src="/images/before_login/listNew_bn_btnChat.png"
								alt="Chat365"
							/>
						</Link>
					</div>
				</>
			)}
		</div>
	)
}

export default Chat_NTD
