import React, { useState } from 'react'
import styles from '@styles/home/chat_container.module.scss'
import Image from 'next/image'

const Chat_container = () => {
	const [showChat, setShowChat] = useState(false)
	const [imgSend, setImgSend] = useState(false)
	const [valueText, setValueText] = useState('')
	return (
		<div id={styles.liveChatContainer}>
			<div className={styles.widget + ' ' + styles.timviec365}>
				{!showChat ? (
					<button
						className={`${styles.talk_button} ${styles.connected}`}
						onClick={() => {
							setShowChat(true)
						}}
					>
						Trực tuyến
					</button>
				) : (
					<div className={styles.liveChatMain}>
						<div className={styles.liveChatHeader}>
							<div className={styles.liveChatHeaderButton}>
								<button
									id={styles.liveChatClose}
									onClick={() => {
										setShowChat(false)
									}}
								>
									X
								</button>
							</div>
							<div className={`${styles.textCenter} ${styles.text}`}>
								<a
									rel="nofollow"
									download=""
									href="/dowload/livechat/chat.exe"
									className={styles.text}
								>
									Bạn tải CHAT365 <span className={styles.underLine}>tại đây</span> để nhận được sự
									hỗ trợ tốt nhất, <span className={styles.underLine}>tải ngay</span>
								</a>
							</div>
						</div>
						<div className={styles.liveChatBody}>
							<div className={styles.listConversation} />
							<div id={styles.typing} />
							<div id={styles.mainEnterChat}>
								<div id={styles.boxPreview} className={styles.hidden}>
									<div className={styles.itemPreview + ' ' + styles.File}>
										<Image width={20} height={20} alt="" src="/images/before_login/icon_file.png" />
										<button data-index="0" className={styles.closePreview}>
											X
										</button>
									</div>
									<label
										className={styles.itemPreview}
										id={styles.itemAddNewFile}
										htmlFor={styles.tawkChatinputAddFile}
									>
										<Image
											width={20}
											height={20}
											alt="add_new_file"
											src="/images/before_login/add_new_file.svg"
										/>
									</label>
								</div>
								<div id={styles.boxEnterChat}>
									<div id={styles.boxEditor}>
										<div id={styles.boxRepMess}>
											<div id={styles.boxRepMessTop}>
												{/* <img src="/images/livechat/repMess.svg" /> */}
												<div id={styles.boxContentRepMess}>
													<p id={styles.contentRepMess} />
													<p id={styles.timeRepMess} />
												</div>
												<button id={styles.closeRepMess}>X</button>
											</div>
										</div>
										<textarea
											placeholder="Nhập nội dung"
											id={styles.tawkChatinputEditor}
											rows={1}
											className={styles.newConversation}
											onChange={(e) => {
												setValueText(e.target.value)
											}}
										/>
									</div>
									<div id={styles.chatinputActionButtons}>
										{valueText ? (
											<button id={styles.btnSendMess}>
												<svg
													width="50"
													height="51"
													viewBox="0 0 30 31"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clip-path="url(#clip0_571_56690)">
														<path
															d="M30 7.4273V23.5726C30 27.3987 26.8987 30.5 23.0727 30.5H6.92736C3.10131 30.5 0 27.3987 0 23.5727V7.4273C0 3.60131 3.10131 0.5 6.92736 0.5H23.0727C26.8987 0.5 30 3.60131 30 7.4273Z"
															fill="url(#paint0_linear_571_56690)"
														></path>
														<path
															d="M6.79923 30.5C3.05012 30.5 0 27.4499 0 23.7008V7.29923C0 3.55012 3.05012 0.5 6.79923 0.5H23.2008C26.9499 0.5 30 3.55012 30 7.29923V23.7008C30 27.4499 26.9499 30.5 23.2008 30.5H6.79923Z"
															fill="url(#paint1_linear_571_56690)"
														></path>
														<path
															opacity="0.5"
															d="M30.0001 15.4666V23.5725C30.0001 27.3986 26.8987 30.5 23.0726 30.5H16.8868L8.66577 22.279L23.4435 8.90997L30.0001 15.4666Z"
															fill="url(#paint2_linear_571_56690)"
														></path>
														<path
															opacity="0.3"
															d="M23.7208 9.24756L5.73975 13.7902L8.95742 16.8186V22.5914L12.1258 20.1762L15.2035 23.2539L23.7208 9.24756Z"
															fill="#1A1A1A"
														></path>
														<path
															d="M23.4085 8.93506L10.2539 18.3042L14.8911 22.9414L23.4085 8.93506Z"
															fill="url(#paint3_linear_571_56690)"
														></path>
														<path
															d="M8.64502 16.5061V22.279L10.2539 18.3042L23.4085 8.93506L8.64502 16.5061Z"
															fill="url(#paint4_linear_571_56690)"
														></path>
														<path
															d="M5.42725 13.4777L8.64492 16.5061L23.4084 8.93506L5.42725 13.4777Z"
															fill="url(#paint5_linear_571_56690)"
														></path>
														<path
															d="M8.64502 22.279L11.8134 19.8638L10.2539 18.3042L8.64502 22.279Z"
															fill="#D2D2D2"
														></path>
														<path
															d="M23.4085 8.93506L10.2539 18.3042L14.8911 22.9414L23.4085 8.93506Z"
															fill="white"
														></path>
														<path
															d="M8.64502 16.5061V22.279L10.2539 18.3042L23.4085 8.93506L8.64502 16.5061Z"
															fill="#9FB5DF"
														></path>
														<path
															d="M5.42725 13.4777L8.64492 16.5061L23.4084 8.93506L5.42725 13.4777Z"
															fill="white"
														></path>
													</g>
													<defs>
														<linearGradient
															id="paint0_linear_571_56690"
															x1="15"
															y1="0.5"
															x2="15"
															y2="30.5"
															gradientUnits="userSpaceOnUse"
														>
															<stop offset="0.005" stop-color="#FFE5AE"></stop>
															<stop offset="1" stop-color="#FF992D"></stop>
														</linearGradient>
														<linearGradient
															id="paint1_linear_571_56690"
															x1="15"
															y1="0.792976"
															x2="15"
															y2="30.678"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#4C5BD4"></stop>
															<stop offset="1" stop-color="#1F7ED0"></stop>
														</linearGradient>
														<linearGradient
															id="paint2_linear_571_56690"
															x1="15.9939"
															y1="15.5339"
															x2="28.7275"
															y2="28.267"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#64A8E2"></stop>
															<stop offset="1" stop-color="#1F7ED0" stop-opacity="0"></stop>
														</linearGradient>
														<linearGradient
															id="paint3_linear_571_56690"
															x1="10.2539"
															y1="15.9382"
															x2="23.4085"
															y2="15.9382"
															gradientUnits="userSpaceOnUse"
														>
															<stop offset="0.009" stop-color="#F3E0DF"></stop>
															<stop offset="1" stop-color="#E8E0BA"></stop>
														</linearGradient>
														<linearGradient
															id="paint4_linear_571_56690"
															x1="14.2217"
															y1="12.9556"
															x2="15.4627"
															y2="14.7785"
															gradientUnits="userSpaceOnUse"
														>
															<stop offset="0.009" stop-color="#65BCC0"></stop>
															<stop offset="1" stop-color="#53838A"></stop>
														</linearGradient>
														<linearGradient
															id="paint5_linear_571_56690"
															x1="5.42725"
															y1="12.7206"
															x2="23.4084"
															y2="12.7206"
															gradientUnits="userSpaceOnUse"
														>
															<stop offset="0.009" stop-color="#F3E0DF"></stop>
															<stop offset="1" stop-color="#E8E0BA"></stop>
														</linearGradient>
														<clipPath id="clip0_571_56690">
															<rect y="0.5" width="30" height="30" rx="15" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
											</button>
										) : (
											<label htmlFor={styles.tawkChatinputAddFile} id={styles.addFile}>
												<svg
													width="32"
													height="38"
													viewBox="0 0 22 28"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M21.0371 7.45508L14.7324 1.15039C14.5566 0.974609 14.3193 0.875 14.0703 0.875H1.625C1.10645 0.875 0.6875 1.29395 0.6875 1.8125V26.1875C0.6875 26.7061 1.10645 27.125 1.625 27.125H20.375C20.8936 27.125 21.3125 26.7061 21.3125 26.1875V8.12012C21.3125 7.87109 21.2129 7.63086 21.0371 7.45508ZM19.1504 8.55078H13.6367V3.03711L19.1504 8.55078ZM19.2031 25.0156H2.79688V2.98438H11.6445V9.3125C11.6445 9.63884 11.7742 9.95182 12.0049 10.1826C12.2357 10.4133 12.5487 10.543 12.875 10.543H19.2031V25.0156ZM11.9375 12.8281C11.9375 12.6992 11.832 12.5938 11.7031 12.5938H10.2969C10.168 12.5938 10.0625 12.6992 10.0625 12.8281V15.9922H6.89844C6.76953 15.9922 6.66406 16.0977 6.66406 16.2266V17.6328C6.66406 17.7617 6.76953 17.8672 6.89844 17.8672H10.0625V21.0312C10.0625 21.1602 10.168 21.2656 10.2969 21.2656H11.7031C11.832 21.2656 11.9375 21.1602 11.9375 21.0312V17.8672H15.1016C15.2305 17.8672 15.3359 17.7617 15.3359 17.6328V16.2266C15.3359 16.0977 15.2305 15.9922 15.1016 15.9922H11.9375V12.8281Z"
														fill="#474747"
													></path>
												</svg>
											</label>
										)}
										<input type="file" id={styles.tawkChatinputAddFile} />
									</div>
								</div>
							</div>
							<button id={styles.onBotLiveChat}>
								{/* <img src="/images/before_login/onBottom.svg" /> */}
							</button>
						</div>
						<div id={styles.drag}>
							<Image width={34} height={34} src="/images/before_login/drag.png" alt="" />
						</div>
					</div>
				)}
			</div>
			<audio controls id="notificationAudio" style={{ display: 'none' }} />
		</div>
	)
}

export default Chat_container
