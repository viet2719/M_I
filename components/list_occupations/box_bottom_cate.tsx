import styles from '@styles/list_occupations/main_search.module.scss'
import Image from 'next/image'
import { useState } from 'react'
type Props = {}

const Box_bottom_cate = (props: Props) => {
    const [seenMore, setSeenMore] = useState(true)

  return (
    <div className={styles.box_bottom_cate}>
    <div id={styles.mota}>
        <div className={styles.phu_luc}>
            <div style={{ float: 'left', width: '100%' }}>
                <nav className={styles.table_of_contents}>
                    <p className={styles.tt_phu_luc}>
                        <span>Mục lục:</span>
                    </p>
                    <ul>
                        <li className={styles.li_h2}>
                            <a
                                className={styles.ul_h2}
                                href="#nhu-cau-tuyen-nhan-vien-kinh-doanh-tphcm"
                            >
                                1. Nhu cầu tuyển nhân viên kinh doanh TPHCM{' '}
                            </a>
                        </li>
                        <li className={styles.li_h2}>
                            <a
                                className={styles.ul_h2}
                                href="#gioi-thieu-doi-net-ve-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh"
                            >
                                2. Giới thiệu đôi nét về việc làm nhân viên kinh doanh tại Hồ Chí Minh{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#mot-so-linh-vuc-hay-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh"
                            >
                                2.1. Một số lĩnh vực hay có nhu cầu tuyển dụng nhân viên kinh doanh tại Hồ
                                Chí Minh{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#nhan-vien-kinh-doanh-tai-ho-chi-minh-thuong-lam-nhung-cong-viec-gi"
                            >
                                2.2. Nhân viên kinh doanh tại Hồ Chí Minh thường làm những công việc gì?{' '}
                            </a>
                        </li>
                        <li className={styles.li_h2}>
                            <a
                                className={styles.ul_h2}
                                href="#mot-so-vi-tri-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh-voi-so-luong-lon"
                            >
                                3. Một số vị trí có nhu cầu tuyển dụng nhân viên kinh doanh tại Hồ Chí
                                Minh với số lượng lớn{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#tuyen-nhan-vien-kinh-doanh-o-to-tai-tp-hcm"
                            >
                                3.1. Tuyển nhân viên kinh doanh ô tô tại TP.HCM{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a className={styles.ul_h3} href="#nhan-vien-kinh-doanh-noi-that-hcm">
                                3.2. Nhân viên kinh doanh nội thất HCM{' '}
                            </a>
                        </li>
                        <li className={styles.li_h2}>
                            <a
                                className={styles.ul_h2}
                                href="#huong-dan-cach-tim-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh-hieu-qua-nhat"
                            >
                                4. Hướng dẫn cách tìm việc làm nhân viên kinh doanh tại Hồ Chí Minh hiệu
                                quả nhất{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#hay-bien-mo-ta-kinh-nghiem-thanh-nhung-thanh-tich-noi-bat"
                            >
                                4.1. Hãy biến mô tả kinh nghiệm thành những thành tích nổi bật{' '}
                            </a>
                        </li>
                        <li className={styles.li_h3}>
                            <a
                                className={styles.ul_h3}
                                href="#tap-luyen-tra-loi-nhung-cau-hoi-sau-truoc-khi-viet-cv-xin-viec-nhan-vien-kinh-doanh"
                            >
                                4.2. Tập luyện trả lời những câu hỏi sau trước khi viết CV xin việc nhân
                                viên kinh doanh{' '}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className={`${styles.gt_text} ${seenMore ? styles.over_bv_footer : ''}`}>
            <h2 style={{ textAlign: 'justify' }} id="nhu-cau-tuyen-nhan-vien-kinh-doanh-tphcm">
                <span style={{ fontSize: 16 }}>Nhu cầu tuyển nhân viên kinh doanh TPHCM</span>
            </h2>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ chức
                    sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham gia
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục tiêu
                    tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác nhau trong
                    đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên (chiếm gần
                    72%).
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Theo thông tin thu thập được từ kênh{' '}
                    <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                        <span style={{ fontWeight: 700 }}>Timviec365.vn</span>
                    </span>{' '}
                    thì số lượng nhân viên kinh doanh được tuyển dụng nhiều nhất rơi vào các vị trí:
                    quản lý &amp; kinh doanh (1.319 người), việc làm phổ thông (620 người) , cơ khí
                    (188 người) cùng rất nhiều vị trí khác nữa thuộc về kế toán, du lịch,…
                </span>
            </p>
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="Nhu cầu tuyển dụng việc làm nhân viên kinh doanh tại Hồ Chí Minh"
                    height={532}
                    className=" lazyloaded"
                    src="/"
                    width={800}
                />
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Có thể thấy nhu cầu tuyển&nbsp;nhân viên kinh doanh tphcm&nbsp;là vô cùng lớn
                    nên&nbsp;
                </span>
                <span style={{ fontSize: 14 }}>cơ hội xin việc làm cao,</span>
                <span style={{ fontSize: 14 }}>
                    &nbsp;bạn có thể nhanh chóng chợp lấy cơ hội này để tìm được cho mình một vị trí
                    công việc thích hợp nhất.
                </span>
            </p>
            <h2
                style={{ textAlign: 'justify' }}
                id="gioi-thieu-doi-net-ve-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh"
            >
                <span style={{ fontSize: 16 }}>
                    Giới thiệu đôi nét về việc làm nhân viên kinh doanh tại Hồ Chí Minh
                </span>
            </h2>
            <h3
                style={{ textAlign: 'justify' }}
                id="mot-so-linh-vuc-hay-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh"
            >
                <span style={{}}>
                    Một số lĩnh vực hay có nhu cầu tuyển dụng nhân viên kinh doanh tại Hồ Chí Minh
                </span>
            </h3>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Hầu như tất cả các doanh nghiệp tại Hồ Chí Minh đều có nhu cầu&nbsp;
                    <strong>
                        <a
                            href="https://timviec365.vn/viec-lam-nhan-vien-kinh-doanh-c9v0"
                            target="_blank"
                        >
                            <span style={{ color: '#FF0000' }}>tuyển&nbsp;nhân viên kinh doanh</span>
                        </a>
                    </strong>
                    . Bởi thông qua nhân viên kinh doanh công ty có thể tiếp cận khách hàng tiềm
                    năng để giới thiệu dịch vụ, tăng nguồn lợi nhuận thu được cho công ty. Một số
                    ngành và nghề thường hay tuyển dụng nhân viên kinh doanh với số lượng lớn tại Hồ
                    Chí Minh chính là: bất động sản, dịch vụ website, nhà hàng - khách sạn, dược
                    phẩm, mỹ phẩm, du học, ô tô, xe máy, điện tử, thiết bị giáo dục, bảo hiểm, thực
                    phẩm, thời trang, vật liệu xây dựng,...
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Tùy theo lĩnh vực bạn yêu thích, hãy tìm cho mình một lĩnh vực phù hợp nhất để
                    ứng tuyển{' '}
                    <strong>
                        <a
                            href="https://timviec365.vn/viec-lam-tai-ho-chi-minh-c0v45"
                            target="_blank"
                        >
                            <span style={{ fontFamily: 'arial,helvetica,sans-serif' }}>
                                việc làm hcm
                            </span>
                        </a>
                    </strong>
                </span>
                <span
                    data-sheets-userformat='{"2":513,"3":{"1":0},"12":0}'
                    data-sheets-value='{"1":2,"2":"việc làm 24h tại tphcm"}'
                    style={{ fontSize: '11pt', fontFamily: 'Calibri, Arial' }}
                >
                    &nbsp;
                </span>
                <span style={{}}>trong số này.</span>
            </p>
            <h3
                style={{ textAlign: 'justify' }}
                id="nhan-vien-kinh-doanh-tai-ho-chi-minh-thuong-lam-nhung-cong-viec-gi"
            >
                <span style={{}}>
                    Nhân viên kinh doanh tại Hồ Chí Minh thường làm những công việc gì?
                </span>
            </h3>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Nhân viên kinh doanh là một công việc đòi hỏi mỗi người phải rất kiên trì, nắm
                    bắt cơ hội và vượt qua những khó khăn để thành công. Có thể nói, vai trò của
                    người nhân viên kinh doanh chính là thu hẹp khoảng cách giữa doanh nghiệp và
                    khách hàng đồng thời mang lại những sản phẩm có chất lượng tốt nhất cho khách
                    hàng.
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>Tóm lại, một kinh doanh cần làm những công việc gồm:</span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Chuẩn bị nguyên liệu, kiến ​​thức để quảng bá sản phẩm, gặp gỡ khách hàng tiềm
                    năng để cung cấp hoặc giới thiệu các sản phẩm đó, cũng có thể để khách của mình
                    dùng thử hoặc thử nghiệm luôn
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Lập dự toán, đàm phán, ký hợp đồng mua bán, lên phương án về thời hạn thanh
                    toán, giao hàng ... Trong hợp đồng, giải quyết các khiếu nại và vấn đề gặp phải,
                    sử dụng, thiết lập mối quan hệ khách hàng tốt nhất ...
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Ngày nay, trong sự phát triển của mỗi công ty, chúng ta có thể nói rằng nhân
                    viên kinh doanh chính là bộ mặt của doanh nghiệp đây là yếu tố quyết định tới sự
                    thành công hay thất bại trong một doanh nghiệp.
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    + Kỹ năng giao tiếp: Với nhân viên kinh doanh, kỹ năng giao tiếp được coi là yếu
                    tố quyết định; bạn có kỹ năng giao tiếp tốt, việc trao đổi thông tin và bán hàng
                    sẽ hiệu quả hơn. Quá trình giao tiếp với đồng nghiệp, khách hàng cũng sẽ hiệu
                    quả hơn rất nhiều điều này sẽ làm tăng lên tỷ lệ thành công của bạn đáng kể.
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Ngày nay, trong sự phát triển của mỗi công ty, chúng ta có thể nói rằng nhân
                    viên kinh doanh chính là bộ mặt của doanh nghiệp đây là yếu tố quyết định tới sự
                    thành công hay thất bại trong một doanh nghiệp.
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    + Kỹ năng giao tiếp: Với nhân viên kinh doanh, kỹ năng giao tiếp được coi là yếu
                    tố quyết định; bạn có kỹ năng giao tiếp tốt, việc trao đổi thông tin và bán hàng
                    sẽ hiệu quả hơn. Quá trình giao tiếp với đồng nghiệp, khách hàng cũng sẽ hiệu
                    quả hơn rất nhiều điều này sẽ làm tăng lên tỷ lệ thành công của bạn đáng kể.
                </span>
            </p>
            <h2
                style={{ textAlign: 'justify' }}
                id="mot-so-vi-tri-co-nhu-cau-tuyen-dung-nhan-vien-kinh-doanh-tai-ho-chi-minh-voi-so-luong-lon"
            >
                <span style={{ fontSize: 16 }}>
                    Một số vị trí có nhu cầu tuyển dụng nhân viên kinh doanh tại Hồ Chí Minh với số
                    lượng lớn
                </span>
            </h2>
            <h3
                style={{ textAlign: 'justify' }}
                id="tuyen-nhan-vien-kinh-doanh-o-to-tai-tp-hcm"
            >
                <span style={{}}>Tuyển nhân viên kinh doanh ô tô tại TP.HCM</span>
            </h3>

            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ chức
                    sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham gia
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span>
                    Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục tiêu
                    tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác nhau trong
                    đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên (chiếm gần
                    72%).
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ chức
                    sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham gia
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span>
                    Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục tiêu
                    tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác nhau trong
                    đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên (chiếm gần
                    72%).
                </span>
            </p>
            <h3 style={{ textAlign: 'justify' }} id="nhan-vien-kinh-doanh-noi-that-hcm">
                <span style={{}}>Nhân viên kinh doanh nội thất HCM</span>
            </h3>

            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ chức
                    sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham gia
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span>
                    Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục tiêu
                    tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác nhau trong
                    đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên (chiếm gần
                    72%).
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ chức
                    sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham gia
                </span>
            </p>
            <h2
                style={{ textAlign: 'justify' }}
                id="huong-dan-cach-tim-viec-lam-nhan-vien-kinh-doanh-tai-ho-chi-minh-hieu-qua-nhat"
            >
                <span style={{ fontSize: 16 }}>
                    Hướng dẫn cách tìm việc làm nhân viên kinh doanh tại Hồ Chí Minh hiệu quả nhất
                </span>
            </h2>
            <h3
                style={{ textAlign: 'justify' }}
                id="hay-bien-mo-ta-kinh-nghiem-thanh-nhung-thanh-tich-noi-bat"
            >
                <span style={{}}>Hãy biến mô tả kinh nghiệm thành những thành tích nổi bật</span>
            </h3>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    4 Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí Minh đã tổ
                    chức sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công ty tham gia
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span>
                    4 Trong số này 17 công ty đã thực hiện các cuộc phỏng vấn trực tiếp, với mục
                    tiêu tuyển dụng gần 1.900 người thuộc nhiều nhóm ngành nghề, lĩnh vực khác nhau
                    trong đó số lượng lớn nhất là nhân viên kinh doanh với 1.340 nhân viên (chiếm
                    gần 72%).
                </span>
            </p>
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    4 2qq2w3w3w3w3w3Trong tháng 8/ 2018, Trung tâm dịch vụ việc làm thành phố Hồ Chí
                    Minh đã tổ chức sàn giao dịch việc làm thứ 11 của mình với tổng số là 112 công
                    ty tham gia
                </span>
            </p>
        </div>

        <p
            className={`${styles.bv_foo_more_r}`}
            onClick={() => {
                setSeenMore(!seenMore)
            }}
        >
            {seenMore ? '+ Xem thêm' : '- Rút gọn'}{' '}
        </p>
    </div>
</div>
  )
}

export default Box_bottom_cate