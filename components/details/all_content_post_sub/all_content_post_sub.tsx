import React from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Link from 'next/link'

type Props = {}

const All_content_post_sub = (props: Props) => {
  return (
    <div className={`${styles.all_content_post_sub}`}>
    <div className={`${styles.box_qr}`}>
        <div className={`${styles.tit_chat}`}>
            <p className={`${styles.utuyen_qr_moi}`}>Quét mã QR chat ngay NTD</p>
        </div>
        <div className={`${styles.w_100} ${styles.qr_apply}`}>
            <div className={`${styles.ctn_qrapply} ${styles.ctn_chat_qr}`}>
                <canvas width={180} height={180} style={{ display: 'none' }} />
                <img
                    className={`${styles.img_qr_com}`}
                    src='https://chart.googleapis.com/chart?chs=300x300&cht=qr&chld=L|1&chl={%22QRType%22:%22QRChat11%22,%22conversationName%22:%22%22,%22conversationAvatar%22:%22%22,%22admin%22:%22%22,%22data%22:%22%22,%22user_id%22:%221361929%22}'
                    style={{ display: 'block' }}
                />
            </div>
        </div>
    </div>
    <div className={`${styles.box_qr}`}>
        <div className={`${styles.tit_chat}`}>
            <p className={`${styles.utuyen_qr_moi}`}>ỨNG TUYỂN BẰNG QR</p>
        </div>
        <div className={`${styles.w_100} ${styles.qr_apply}`}>
            <div className={`${styles.ctn_qrapply} ${styles.ctn_chat_qr}`}>
                <canvas width={180} height={180} style={{ display: 'none' }} />
                <img
                    className={`${styles.img_qr_com}`}
                    src='https://chart.googleapis.com/chart?chs=180x180&cht=qr&chld=L|1&chl={%22QRType%22:%22QRApply%22,%22deviceId%22:%2256a3b958-e70a-4da6-9c6f-dadf88bd7fdd%22,%22idQR%22:%22NTZhM2I5NTgtZTcwYS00ZGE2LTljNmYtZGFkZjg4YmQ3ZmRk++%22,%22newId%22:%22868030%22,%22newTitle%22:%22Nh%C3%A2n%20vi%C3%AAn%20K%E1%BB%B9%20thu%E1%BA%ADt%20%C4%90i%E1%BB%87n%20T%E1%BB%AD%22}'
                    style={{ display: 'block' }}
                />
            </div>
        </div>
    </div>
    <div className={`${styles.list_fr}`}>
        <div className={`${styles.tit_chat}`}>
            <div className={`${styles.tit_chat_left}`} />
            <div className={`${styles.tit_chat_mid}`}>
                <p className={`${styles.tit_chat_mid_text}`}>DANH SÁCH BẠN BÈ</p>
            </div>
            <div className={`${styles.tit_chat_right}`} />
        </div>
        <div className={`${styles.w_100} ${styles.list_client}`}>
            <div className={`${styles.list_item_chat} ${styles.openApp}`} id-chat={167565}>
                <div className={`${styles.img_item_on}`} id-chat={167565}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTY3NTY1"> */}
                    <Link href="#" target="_blank" rel="nofollow">
                        <img
                            src="https://ht.timviec365.vn:9002/avatarUser/167565/638263324081900000_167565.jpg"
                            alt="Đỗ Văn Hoàng"
                        />
                    </Link>
                </div>
                <div className={`${styles.right_item_vl}`}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTY3NTY1" class="name_com"> */}
                    <Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
                        Đỗ Văn Hoàng{' '}
                    </Link>
                </div>
            </div>
            <div className={`${styles.list_item_chat} ${styles.openApp}`} id-chat={1342764}>
                <div className={`${styles.img_item_on}`} id-chat={1342764}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTM0Mjc2NA=="> */}
                    <Link href="#" target="_blank" rel="nofollow">
                        <img
                            src="https://ht.timviec365.vn:9002/avatarUser/1342764/638276783687290000_1342764.jpg"
                            alt="Tran Quang Duc Dung"
                        />
                    </Link>
                </div>
                <div className={`${styles.right_item_vl}`}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTM0Mjc2NA==" class="name_com"> */}
                    <Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
                        Tran Quang Duc Dung{' '}
                    </Link>
                </div>
            </div>
            <div className={`${styles.list_item_chat} ${styles.openApp}`} id-chat={1404155}>
                <div className={`${styles.img_item_on}`} id-chat={1404155}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTQwNDE1NQ=="> */}
                    <Link href="#" target="_blank" rel="nofollow">
                        <img
                            src="https://ht.timviec365.vn:9002/avatarUser/1404155/638280918515770000_1404155.jpg"
                            alt="Nguyễn An Quân"
                        />
                    </Link>
                </div>
                <div className={`${styles.right_item_vl}`}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTQwNDE1NQ==" class="name_com"> */}
                    <Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
                        Nguyễn An Quân{' '}
                    </Link>
                </div>
            </div>
            <div className={`${styles.list_item_chat} ${styles.openApp}`} id-chat={1216972}>
                <div className={`${styles.img_item_on}`} id-chat={1216972}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTIxNjk3Mg=="> */}
                    <Link href="#" target="_blank" rel="nofollow">
                        <img
                            src="https://ht.timviec365.vn:9002/avatarUser/1216972/638231704233150000_1216972.jpg"
                            alt="Lưu trữ cá nhân"
                        />
                    </Link>
                </div>
                <div className={`${styles.right_item_vl}`}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-MTIxNjk3Mg==" class="name_com"> */}
                    <Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
                        Lưu trữ cá nhân{' '}
                    </Link>
                </div>
            </div>
            <div
                className={`${styles.list_item_chat} ${styles.openApp} ${styles.m_online}`}
                id-chat={701526}
            >
                <div className={`${styles.img_item_on} ${styles.m_online}`} id-chat={701526}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NzAxNTI2"> */}
                    <Link href="#" target="_blank" rel="nofollow">
                        <img
                            src="https://timviec365.vn/images/user_no.png"
                            alt="CÔNG TY MINH DƯƠNG MEDIA"
                        />
                    </Link>
                </div>
                <div className={`${styles.right_item_vl}`}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NzAxNTI2" class="name_com"> */}
                    <Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
                        CÔNG TY MINH DƯƠNG MEDIA{' '}
                    </Link>
                </div>
            </div>
            <div className={`${styles.list_item_chat} ${styles.openApp} ${styles.m_online}`} id-chat={56387}>
                <div className={`${styles.img_item_on} ${styles.m_online}`} id-chat={56387}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NTYzODc="> */}
                    <Link href="#" target="_blank" rel="nofollow">
                        <img
                            src="https://ht.timviec365.vn:9002/avatarUser/56387/637995265018771766_56387.jpg"
                            alt="HHP"
                        />
                    </Link>
                </div>
                <div className={`${styles.right_item_vl}`}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NTYzODc=" class="name_com"> */}
                    <Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
                        HHP{' '}
                    </Link>
                </div>
            </div>
            <div className={`${styles.list_item_chat} ${styles.openApp} ${styles.m_online}`} id-chat={573341}>
                <div className={`${styles.img_item_on} ${styles.m_online}`} id-chat={573341}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NTczMzQx"> */}
                    <Link href="#" target="_blank" rel="nofollow">
                        <img
                            src="https://ht.timviec365.vn:9002/avatarUser/573341/638285308661400000_573341.jpg"
                            alt="Lê Thu Hà"
                        />
                    </Link>
                </div>
                <div className={`${styles.right_item_vl}`}>
                    {/* <Link target="_blank" rel="nofollow" href="https://chat365.timviec365.vn/chat-NTczMzQx" class="name_com"> */}
                    <Link href="#" target="_blank" rel="nofollow" className={`${styles.name_com}`}>
                        Lê Thu Hà{' '}
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div className={`${styles.cv} ${styles.slick_cv}`} >
        <div className={`${styles.tit_chat}`}>
            <div className={`${styles.tit_chat_left}`} />
            <div className={`${styles.tit_chat_mid}`}>
                <p className={`${styles.tit_chat_mid_text}`}>MẪU CV ĐẸP</p>
            </div>
            <div className={`${styles.tit_chat_right}`} />
        </div>
        <div className={`${styles.w_100} ${styles.slide_home}`}>
            <div
                className={`${styles.list_cv} ${styles.slick_initialized} ${styles.slick_slider}`}
            
            >
                <div aria-live="polite" className={`${styles.slick_list} ${styles.draggable}`}>
                    <div
                        className={`${styles.slick_track}`}
                        role="listbox"
                        style={{
                            opacity: 1,
                            width: 952,
                            transform: 'translate3d(-238px, 0px, 0px)',
                        }}
                    >
                        <div
                            className={`${styles.item} ${styles.slick_slide} ${styles.slick_cloned}`}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick_slide01"
                            style={{ width: 238 }}
                            data-slick-index={-1}
                            aria-hidden="true"
                        >
                            
                        </div>
                        <div
                            className={`${styles.item} ${styles.slick_slide} ${styles.slick_current} ${styles.slick_active}`}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick_slide00"
                            style={{ width: 238 }}
                            data-slick-index={0}
                            aria-hidden="false"
                        >
                            <div className={`${styles.wa}`}>
                                <img
                                    className={`${styles.lazyloaded}`}
                                    src="https://timviec365.vn/cv365/upload/cv/thumb/avatar-cv-ky-thuat-tieng-nhat-timviec365.vn.jpg"
                                    data-src="https://timviec365.vn/cv365/upload/cv/thumb/avatar-cv-ky-thuat-tieng-nhat-timviec365.vn.jpg"
                                    alt="Kỹ Thuật 10"
                                    title="Kỹ Thuật 10"
                                />
                                <div className={`${styles.info}`}>
                                    <div className={`${styles.btn_box}`}>
                                        {/* <p><Link href="https://timviec365.vn/cv365/ky-thuat/mau-10" target="_blank">Sử dụng mẫu này</Link></p> */}
                                        <p>
                                            <Link
                                                href="https://timviec365.vn/cv365/tao-cv-ky-thuat/mau-10"
                                                target="_blank"
                                                tabIndex={0}
                                            >
                                                Sử dụng mẫu này
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={`${styles.qr}`}>
        <div className={`${styles.logo_timviec}`}>
            <p className={`${styles.logo_timviec_text} ${styles.mt_20}`}>Quét mã QR để tải app</p>
        </div>
        <div className={`${styles.all_qr_dl} ${styles.d_flex} ${styles.j_s_ar} ${styles.mt_20}`}>
            <div className={`${styles.d_flex} ${styles.f_column}`}>
                <img
                    className={`${styles.img_dl_qr}`}
                    src="https://timviec365.vn/images/New_images/new_qr_ft1.png"
                    alt="app timviec365"
                />
                <p className={`${styles.qr_text}`}>APP TIMVIEC365</p>
                <Link
                    className={`${styles.btn_down}`}
                    href="https://play.google.com/store/apps/details?id=vn.timviec365.company"
                    ios-href="https://apps.apple.com/vn/app/nh%C3%A0-tuy%E1%BB%83n-d%E1%BB%A5ng-timviec365-vn/id1606069668"
                    rel="nofollow"
                    target="_blank"
                >
                    <img src="https://timviec365.vn/images/detail/down_1.svg" />
                    DOWNLOAD
                </Link>
            </div>
            <div className={`${styles.d_flex} ${styles.f_column}`}>
                <img
                    className={`${styles.img_dl_qr}`}
                    src="https://timviec365.vn/images/New_images/new_qr_ft2.png"
                    alt="app cv365"
                />
                <p className={`${styles.qr_text}`}>APP CV365</p>
                <Link
                    className={`${styles.btn_down}`}
                    href="https://play.google.com/store/apps/details?id=vn.timviec365.cv.cv365_vn"
                    ios-href="https://apps.apple.com/us/app/cv-xin-vi%E1%BB%87c-365-t%E1%BA%A1o-cv-%C4%91%E1%BA%B9p/id1631076979"
                    rel="nofollow"
                    target="_blank"
                >
                    <img src="https://timviec365.vn/images/detail/down_2.svg" />
                    DOWNLOAD
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}
export default All_content_post_sub