import React from 'react'
import styles from '../main_timviec/main_timviec.module.css'
import Link from 'next/link'

type Props = {}

const Info = (props: Props) => {
  return (
    <div><div className={`${styles.info_window}`}>
    <p className={`${styles.info_title}`}>Thông tin chung</p>
    <div className={`${styles.d_flex} ${styles.all_stat}`}>
        <div className={`${styles.info_window_stat}`}>
            <div className={`${styles.detail_if}`}>
                <p className={`${styles.item_if}`}>Chức vụ</p>{' '}
                <span className={`${styles.tag_none}`}>Nhân viên</span>
            </div>
            <div className={`${styles.detail_if}`}>
                <p className={`${styles.item_if}`}>Hình thức làm việc</p>{' '}
                <span className={`${styles.tag_none}`}>Toàn thời gian cố định</span>
            </div>
        </div>
        <div className={`${styles.info_window_stat}`}>
            <div className={`${styles.detail_if}`}>
                <p className={`${styles.item_if}`}>Số lượng cần tuyển</p>{' '}
                <span className={`${styles.tag_none}`}>1 người</span>
            </div>
            <div className={`${styles.detail_if}`}>
                <p className={`${styles.item_if}`}>Thời gian thử việc</p>{' '}
                <span className={`${styles.tag_none}`}>2 tháng</span>
            </div>
            <div className={`${styles.detail_if}`}>
                <p className={`${styles.item_if}`}>Hạn nộp hồ sơ</p>
                <span className={`${styles.tag_none}`}>
                    02/10/2023 <span className={`${styles.tgian_clai}`}>( 1 tháng)</span>{' '}
                </span>
            </div>
        </div>
    </div>
</div>
<div className={`${styles.info_window}`}>
    <p className={`${styles.info_title}`}>Địa điểm làm việc</p>
    <div className={`${styles.d_flex} ${styles.ctn_moi_ddiemlv}`}>
        <div className={`${styles.info_window_stat}`}>
            <div className={`${styles.detail_if}`}>
                <p style={{ marginRight: 10 }}>Tỉnh thành</p>
                <Link
                    className={`${styles.tag}`}
                    target="blank"
                    href="/tim-viec-lam-tai-ha-noi.html"
                    title="Việc làm tại Hà Nội"
                >
                    Hà Nội
                </Link>
            </div>
        </div>
        <div className={`${styles.info_window_stat}`}>
            <div className={`${styles.detail_if}`}>
                <p style={{ marginRight: 10 }}>Quận huyện</p>
                <Link
                    className={`${styles.tag}`}
                    target="blank"
                    href="/tag1/viec-lam-tai-quan-cau-giay-ha-noi-31"
                    title="việc làm Quận Cầu Giấy"
                >
                    Quận Cầu Giấy
                </Link>{' '}
            </div>
        </div>
        <div className={`${styles.detail_if} ${styles.w_100}`}>
            <p className={`${styles.item_if}`}>Địa chỉ chi tiết</p>
            <span className={`${styles.diachi}`}>
                Số 8c ngách 189/14, ngõ 189 đường nguyễn ngọc vũ
            </span>
        </div>
    </div>
</div>
<div className={`${styles.mt_20}`}>
    <div className={`${styles.tit_detail_post_a}`}>
        <h2 className={`${styles.tit_detail_post}`}>MÔ TẢ CÔNG VIỆC</h2>
    </div>
    <p className={`${styles.text_content} ${styles.ctn_chung_pd}`}>
        - sản xuất, sửa chữa, bảo hành bo mạch điện tử và thiết bị điện tử do công ty sản xuất
        và cung cấp và lắp đặt cho khách hàng. Thiết bị điện tử do cty sản xuất liên quan đến
        âm thanh và kết nối mạng internet ( wifi, 3g/4g) <br /> - phối hợp triển khai lắp đặt,
        hỗ trợ tư vấn kỹ thuật, hỗ trợ theo dõi quản lý thiết bị bằng phần mềm quản lý trên
        điện thoại và máy tính <br />{' '}
    </p>
</div>
<div className={`${styles.mt_20}`}>
    <div className={`${styles.tit_detail_post_a}`}>
        <h2 className={`${styles.tit_detail_post}`}>YÊU CẦU</h2>
    </div>
    <div
        className={`${styles.ctn_moi_ycau} ${styles.d_flex} ${styles.w_100} ${styles.ctn_chung_pd}`}
    >
        <div className={`${styles.info_window_stat}`}>
            <div className={`${styles.detail_if}`}>
                <p className={`${styles.item_if}`}>Kinh nghiệm</p>{' '}
                <span className={`${styles.tag_none}`}>0 - 1 năm kinh nghiệm</span>
            </div>
        </div>
        <div className={`${styles.info_window_stat}`}>
            <div className={`${styles.detail_if}`}>
                <p className={`${styles.item_if}`}>Bằng cấp</p>{' '}
                <span className={`${styles.tag_none}`}>Cao đẳng trở lên</span>
            </div>
        </div>
        <div className={`${styles.detail_if} ${styles.w_100}`}>
            <p className={`${styles.item_if}`}>Giới tính</p>{' '}
            <span className={`${styles.tag_none}`}>Nam</span>
        </div>
        <p className={`${styles.text_content} ${styles.w_100} ${styles.ycau_tdung}`}>
            - ưu tiên ứng viên có kinh nghiệm đã từng làm về mạch điện tử <br /> - Thỉnh thoảng
            đi công tác tỉnh trong thời gian ngắn{' '}
        </p>
    </div>
</div>
<div className={`${styles.mt_20}`}>
    <div className={`${styles.tit_detail_post_a}`}>
        <h2 className={`${styles.tit_detail_post}`}>QUYỀN LỢI</h2>
    </div>
    <p className={`${styles.text_content} ${styles.ctn_chung_pd}`}>
        - Thời gian làm việc cố định 6 ngày/tuần <br /> - Lương thử việc 2 tháng đầu 5-6
        triệu, hết thử việc thỏa thuận theo khả năng đáp ứng công việc <br /> - Được hướng
        dẫn, theo sát suốt quá trình làm việc{' '}
    </p>
</div>
<div className={`${styles.mt_20}`}>
    <div className={`${styles.tit_detail_post_a}`}>
        <h2 className={`${styles.tit_detail_post}`}>HỒ SƠ BAO GỒM</h2>
    </div>
    <p className={`${styles.text_content} ${styles.ctn_chung_pd}`}>
        - Đơn xin việc. <br /> - Sơ yếu lý lịch. <br /> - Hộ khẩu, chứng minh nhân dân và giấy
        khám sức khoẻ. <br /> - Các bằng cấp có liên quan.{' '}
    </p>
</div>
<div className={`${styles.mt_20}`}>
    <div className={`${styles.tit_detail_post_a}`}>
        <h2 className={`${styles.tit_detail_post}`}>Thông tin liên hệ</h2>
    </div>
    <div
        className={`${styles.ctn_moi_ycau} ${styles.d_flex} ${styles.w_100} ${styles.ctn_chung_pd} ${styles.ctn_ttin_lhe}`}
    >
        <p className={`${styles.text_content} ${styles.text_ttlhe}`}>
            Tên người liên hệ: <span>Công ty cổ phần việt hưng việt nam</span>
        </p>
        <p className={`${styles.text_content} ${styles.text_ttlhe}`}>
            Địa chỉ liên hệ:{' '}
            <span>
                Số 16, ngõ 271, phố Yên Hoà, Phường Yên Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt
                Nam
            </span>
        </p>
        <p className={`${styles.text_content} ${styles.text_ttlhe}`}>
            Số điện thoại liên hệ: <span>*********</span>
        </p>
        <p className={`${styles.text_content} ${styles.text_ttlhe}`}>
            Email liên hệ: <span>*********</span>
        </p>
    </div>
</div></div>
  )
}
export default Info