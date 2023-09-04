import React, { useState } from 'react'
import styles from '@/components/details/details.module.css'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const About_nguoi_tim_viec = (props: Props) => {
    const [showFull, setshowFull] = useState<boolean>(false)
	const [nameShowFull, setnameShowFull] = useState<string>('+ Xem thêm')
  return (
    <div className={`${styles.box_bottom_cate}`}>
    <div id="mota">
        <div className={`${styles.phu_luc}`}>
            <nav className={`${styles.table_of_contents}`}>
                <p className={`${styles.tt_phu_luc}`}>
                    <span>Mục lục</span>
                </p>
                <ul>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h2}`}
                    >
                        <Link  className={`${styles.ul_h2}`} href="#tong-quan-ve-nguoi-tim-viec">
                            1. Tổng quan về người tìm việc{' '}
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <Link className={`${styles.ul_h3}`} href="#thuc-trang-cua-nguoi-tim-viec">
                            1.1. Thực trạng của người tìm việc{' '}
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <Link className={`${styles.ul_h3}`} href="#nhu-cau-viec-lam-cua-nguoi-tim-viec">
                            1.2. Nhu cầu việc làm của người tìm việc{' '}
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h4}`}
                    >
                        <Link className={`${styles.ul_h4}`} href="#nhu-cau-viec-lam-theo-gio">
                            1.2.1. Nhu cầu việc làm theo giờ{' '}
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h4}`}
                    >
                        <Link className={`${styles.ul_h4}`} href="#viec-lam-toan-thoi-gian-co-dinh">
                            1.2.2. Việc làm toàn thời gian cố định{' '}
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h2}`}
                    >
                        <Link className={`${styles.ul_h2}`} href="#nhung-doi-tuong-nguoi-tim-viec">
                            2. Những đối tượng người tìm việc{' '}
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <Link className={`${styles.ul_h3}`} href="#hoc-sinh-sinh-vien">
                            2.1. Học sinh - sinh viên{' '}
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <Link className={`${styles.ul_h3}`} href="#nguoi-truong-thanh">
                            2.2. Người trưởng thành{' '}
                        </Link>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#nguoi-lon-tuoi">
                            2.3. Người lớn tuổi{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h2}`}
                    >
                        <a
                            className={`${styles.ul_h2}`}
                            href="#co-hoi-danh-cho-nguoi-tim-viec-24h-tai-cac-thanh-pho-lon"
                        >
                            3. Cơ hội dành cho người tìm việc 24h tại các thành phố lớn{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#ha-noi">
                            3.1. Hà Nội{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#tphcm">
                            3.2. TPHCM{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#hai-phong">
                            3.3. Hải Phòng{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#da-nang">
                            3.4. Đà Nẵng{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#binh-duong">
                            3.5. Bình Dương{' '}
                        </a>
                    </li>

                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h2}`}
                    >
                        <a
                            className={`${styles.ul_h2}`}
                            href="#nhung-nganh-nghe-dang-pho-bien-doi-voi-nguoi-tim-viec"
                        >
                            4. Những ngành nghề đang phổ biến đối với người tìm việc?{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#cong-viec-trong-nha-bep">
                            4.1. Công việc trong nhà bếp{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#ke-toan">
                            4.2. Kế toán{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#giup-viec">
                            4.3. Giúp việc{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#lai-xe">
                            4.4. Lái xe{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h3}`}
                    >
                        <a className={`${styles.ul_h3}`} href="#co-khi">
                            4.5. Cơ khí{' '}
                        </a>
                    </li>
                    <li
                        style={{ listStyleType: 'none', paddingBottom: 8 }}
                        className={`${styles.li_h2}`}
                    >
                        <a
                            className={`${styles.ul_h2}`}
                            href="#tai-sao-noi-timviec365-vn-la-dia-chi-uy-tin-danh-cho-nguoi-tim-viec"
                        >
                            5. Tại sao nói Timviec365.vn là địa chỉ uy tín dành cho người tìm việc?{' '}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div
            className={`${styles.gt_text} ${styles.over_bv_footer} ${
                showFull ? styles.showFull : ''
            } `}
        >
            <h2  style={{ textAlign: 'justify'}} id="tong-quan-ve-nguoi-tim-viec">
                <span style={{}}><p style={{fontSize:25,paddingLeft:20,marginTop:-30}}>Tổng quan về người tìm việc </p></span>
            </h2>
            <h3 style={{ textAlign: 'justify' }} id="thuc-trang-cua-nguoi-tim-viec">
                <span style={{}}>Thực trạng của người tìm việc</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Những người tìm việc làm là những người đang có nhu cầu về việc làm phù hợp với
                    bản thân, họ mong muốn có một công việc tốt mang lại mức lương thưởng hấp dẫn.
                    Thông thường không chỉ có sinh viên mới tốt nghiệp mới là những người tìm việc. Họ
                    có thể là những người đã có kinh nghiệm chuyên môn và kỹ năng nhất định trong một
                    ngành nào đó, đang muốn tìm những cơ hội việc làm hấp dẫn hơn.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Tìm việc làm là một quá trình đặc biệt và sáng tạo, những lời khuyên thông thường
                    sẽ hướng bạn tới những thứ như cách viết CV xin việc, trang phục phỏng vấn như thế
                    nào, chuẩn bị những gì? Tuy không sai nhưng chỉ những điều đó thì chưa đủ để bạn
                    có thể thực sự thành công trong việc tìm việc làm.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc"
                    height={468}
                    className={styles.lazyload}
                    src="/images/nguoi-tim-viec(2).jpg"
                    width={800}
                />
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Những người đã có kinh nghiệm thường gặp phải những vấn đề hoàn toàn khác so với
                    khi họ tìm việc làm lần đầu tiên trong đời. Để có phương pháp tìm việc thì những
                    mục tiêu trong tương lai, hoàn cảnh hiện tại, những cảm xúc chủ quan có thể chi
                    phối và làm ảnh hưởng đến cách bạn tìm việc rất nhiều.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Thông thường, mọi người khi tìm việc thường tìm kiếm trên những kênh thông tin
                    miễn phí, họ không có suy nghĩ cho rằng việc bỏ tiền ra cho công cuộc tìm việc là
                    thích đáng. Mặc dù có quá nhiều thông tin tuyển dụng được đăng tải hàng ngày nhưng
                    chưa chắc thông qua đó, bạn đã có công việc thích hợp.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Người tìm việc tại hà nội sẽ có nhu cầu khác người tìm việc tphcm, họ chỉ có điểm
                    chung là muốn chinh phục được công việc mà bản thân mong muốn. Không phải ai cũng
                    thành công trong lần xin việc đầu tiên. Nhất là các bạn sinh viên mới ra trường
                    những người lần đầu xin việc làm, chưa có nhiều kinh nghiệm và kỹ năng làm việc.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Nói thế không đồng nghĩa với việc họ thực sự thất nghiệp. Có rất nhiều công việc
                    phù hợp với sinh viên ra trường ở hình thức thực tập sinh, người tìm việc làm bán
                    thời gian,... Đó chính là những công việc đầu tiên mang đến cho các bạn sinh viên
                    trải nghiệm thực tế, tích lũy kinh nghiệm để sau này tự tin về bản thân trong một
                    ngành nghề nhất định nào đó.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Bên cạnh đó, người tìm việc thất nghiệp cũng ngày càng có xu hướng gia tăng. Trong
                    khi nhu cầu nhân lực vẫn thiếu, phải chăng do năng lực làm việc chưa tương xứng
                    với yêu cầu của nhà tuyển dụng? Hay do quyền lợi chưa thực sự tương xứng khiến
                    người tìm việc cảm thấy chưa thỏa mãn?
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>&nbsp;</p> <div className="vlgy" />
            <h3 style={{ textAlign: 'justify' }} id="nhu-cau-viec-lam-cua-nguoi-tim-viec">
                <span style={{}}>Nhu cầu việc làm của người tìm việc</span>
            </h3>{' '}
            <h4 style={{ textAlign: 'justify' }} id="nhu-cau-viec-lam-theo-gio">
                <span style={{}}>Nhu cầu việc làm theo giờ</span>
            </h4>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Dành 5 phút lướt web, chắc hẳn mọi người sẽ thấy vô số những tin đăng tuyển dụng:
                    tìm người giúp việc theo giờ, nấu ăn, trông trẻ, dọn nhà, làm dán phong bì hay xâu
                    hạt vòng,... được quảng cáo tràn lan, có khi được giật tít với mức lương vô cùng
                    hấp dẫn. Chính vì điều này đã thu hút đông đảo sự quan tâm của người tìm
                    việc&nbsp;bởi tính chất những công việc nêu trên hoàn toàn đơn giản, chỉ cần dùng
                    sức lao động không cần đến quá nhiều trí tuệ và kiến thức chuyên môn.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Nhu cầu về việc làm theo giờ thường tập trung tại các thành phố lớn như Hà Nội,
                    thành phố Hồ Chí Minh, Đà Nẵng. Tại đây, người lao động ở mọi lứa tuổi, có nhiều
                    thời gian rảnh trong ngày có thể nhận những công việc theo giờ về nhà làm hoặc
                    nhận làm theo yêu cầu của chủ thuê. Nếu thông qua môi giới thì cần phải trả phí
                    cho người môi giới nhưng nếu không thì bạn có thể nhận được một mức thu nhập dao
                    động trong khoảng từ 100.000 đồng đến 200.000 đồng cho 2 đến 3 tiếng làm việc, tùy
                    thuộc vào tính chất công việc mà có thể hơn.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc theo giờ"
                    height={533}
                    className={styles.lazyload}
                    src="/images/nguoi-tim-viec-theo-gio(1).jpg"
                    width={800}
                />
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>&nbsp;</p>{' '}
            <h4 style={{ textAlign: 'justify' }} id="viec-lam-toan-thoi-gian-co-dinh">
                <span style={{}}>Việc làm toàn thời gian cố định</span>
            </h4>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Với tính chất công việc là toàn bộ thời gian cố định nên đây thường là những công
                    việc dành cho người tìm việc đang có nhu cầu{' '}
                    <strong>
                        <a href="https://timviec365.vn" target="_blank">
                            <span style={{ color: '#FF0000' }}>tìm việc làm</span>
                        </a>
                    </strong>{' '}
                    kiếm một công việc lâu dài, theo định hướng sự nghiệp của bản thân. Để tìm được
                    những công việc phù hợp với tính chất full time như thế này không hề đơn giản
                    nhưng cũng không quá phức tạp. Đòi hỏi người tìm việc cần phải có kinh nghiệm, khả
                    năng thực sự phù hợp với những yêu cầu mà công việc đòi hỏi. Nhu cầu việc làm toàn
                    thời gian cố định trong những ngành nghề như: hành chính văn phòng, kế toán - kiểm
                    toán, lập trình viên đang ngày càng tăng cao.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Khi tìm việc làm toàn thời gian cố định nên chú ý đến những công việc đúng với
                    chuyên ngành mà bản thân đã lựa chọn, đối với các bạn sinh viên lần đầu tìm việc,
                    dù chưa có nhiều kinh nghiệm nhưng cần thể hiện bản thân là người có những kỹ năng
                    nhất định, năng động, nhiệt tình. Đó chính là cơ sở để nhà tuyển dụng nhìn thấy
                    tiềm năng trong con người bạn có thể đáp ứng được công việc và phát triển bản thân
                    trong tương lai như thế nào.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>&nbsp;</p>{' '}
            <h2 style={{ textAlign: 'justify' }} id="nhung-doi-tuong-nguoi-tim-viec">
                <span style={{}}>Những đối tượng người tìm việc</span>
            </h2>{' '}
            <h3 style={{ textAlign: 'justify' }} id="hoc-sinh-sinh-vien">
                <span style={{}}>Học sinh - sinh viên</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Học sinh - sinh viên cũng là một đối tượng tìm việc làm khá đông đảo, nhìn chung
                    đối tượng này tìm việc làm với mục đích ban đầu là mong muốn có thêm một khoản thu
                    nhập phục vụ cho việc chi tiêu hàng tháng. Và có thể thoải mái hơn với những chi
                    tiêu cá nhân ngoài khoản trợ cấp hàng tháng nhận được từ gia đình.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Công việc chính của học sinh - sinh viên vẫn là học, chính vì thế thường thì họ
                    tìm kiếm việc làm chỉ mang tính chất làm thêm, việc làm bán thời gian. Những công
                    việc với tính chất đặc thù có thể phân chia theo ca, không vất vả,không đòi hỏi
                    quá nhiều kiến thức chuyên môn hay kỹ năng. Chúng ta có thể thấy những nội dung
                    như tìm việc làm cho người 17 tuổi,giúp họ có thể tranh thủ vào khoảng thời gian
                    nghỉ hè, làm thêm tại các quán trà sữa, quầy hàng minimart, đồ ăn nhanh,... Đó vừa
                    là những trải nghiệm lý thú, bổ ích, vừa giúp các bạn có ý thức sớm về việc kiếm
                    tiền và tiêu tiền do chính bản thân mình làm ra.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Khi là sinh viên, các bạn có đa dạng các lựa chọn về công việc làm thêm hơn. Ngoài
                    những việc làm như nhân viên bán hàng, chăm sóc khách hàng, tư vấn,... Nhiều bạn
                    định hướng sớm lựa chọn công việc thực tập sinh trong những doanh nghiệp hoạt động
                    trong lĩnh vực chuyên ngành mà bạn đang theo học để sớm tiếp xúc với những công
                    việc thực tiễn, học hỏi kinh nghiệm từ những anh chị đồng nghiệp lớn hơn. Sau khi
                    ra trường có thể tự tin tìm kiếm công việc nhanh chóng và hiệu quả.
                </span>
            </p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="nguoi-truong-thanh">
                <span style={{}}>Người trưởng thành</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Đây là lực lượng lao động chính trong xã hội, công việc gắn với họ không đơn thuần
                    chỉ là tích lũy kinh nghiệm nữa mà nó còn mang giá trị sâu xa hơn. Đó là định
                    hướng về nghề nghiệp, là mục tiêu tìm kiếm một vị trí nhất định cho bản thân trong
                    xã hội, mang lại thu nhập cho bản thân, là trụ cột cho gia đình, góp phần làm giàu
                    cho xã hội.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="lực lượng người tìm việc"
                    height={451}
                    className={styles.lazyload}
                    src="/images/luc-luong-nguoi-tim-viec.jpg"
                    width={800}
                />
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>&nbsp;</p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Đối tượng này thường tìm kiếm những công việc có tính chất đòi hỏi chuyên môn nhất
                    định, ở những vị trí công việc nhất định với quyền lợi và mức lương thưởng tương
                    xứng. Họ tự tin vào những kinh nghiệm và kỹ năng xử lý công việc đã có. Khi đã làm
                    lâu trong một công việc mà không tìm kiếm được cơ hội tăng lương hay thăng chức họ
                    sẵn sàng tìm kiếm những cơ hội mới hơn, vừa để chinh phục bản thân, vừa mưu cầu
                    những điều tốt và hấp dẫn hơn.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Những tin tuyển dụng như tìm việc cho người 30 tuổi mang những đặc thù riêng. Đôi
                    khi những công việc đến với họ không chỉ là việc nộp hồ sơ ứng viên, đợi chờ phỏng
                    vấn. Những người tài thường không nhất thiết phải tìm việc bởi chỉ cần họ có nhu
                    cầu tìm việc mới hay thậm chí là không nhưng luôn nhận được sự săn đón của những
                    doanh nghiệp lớn, những chuyên gia headhunt.
                </span>
            </p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="nguoi-lon-tuoi">
                <span style={{}}>Người lớn tuổi</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Đối tượng lao động là người lớn tuổi thường có xu hướng tìm những công việc có thể
                    làm tại nhà, thoải mái về thời gian và không gian. Tuy sức lao động không bằng với
                    đối tượng thanh niên trưởng thành nhưng đây cũng là một bộ phận người lao động
                    trong xã hội mang lại giá trị nhất định. Không khó để tìm kiếm những tin rao vặt
                    tìm việc cho người trên 50 tuổi trên các trang báo, mạng trực tuyến về tìm việc
                    làm.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Có thể nói người lớn tuổi là đối tượng lao động đáng tin cậy và khá ổn định, không
                    khiến các doanh nghiệp phải đau đầu với kế hoạch tuyển dụng mới. Họ chính là đội
                    ngũ nhân viên cống hiến với công việc và mang trong mình niềm kiêu hãnh nhất định
                    khi làm việc tại công ty. Doanh nghiệp cũng sẽ phải chi trả ít chi phí hơn cho
                    hoạt động tuyển dụng, đào tạo và duy trì.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>&nbsp;</p>{' '}
            <h2
                style={{ textAlign: 'justify' }}
                id="co-hoi-danh-cho-nguoi-tim-viec-24h-tai-cac-thanh-pho-lon"
            >
                <span style={{}}>Cơ hội dành cho người tìm việc 24h tại các thành phố lớn</span>
            </h2>{' '}
            <h3 style={{ textAlign: 'justify' }} id="ha-noi">
                <span style={{}}>Hà Nội</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Người tìm việc tại hà nội nói riêng và trên cả nước nói chung đều luôn có sự cố
                    gắng nhất định để tìm kiếm công việc phù hợp cho bản thân. Vào thời buổi xin việc
                    cạnh tranh như hiện nay nhất là ở thành phố lớn như Hà Nội thì đi xin việc lại
                    càng khó khăn, gian nan hơn. Nói như thế không đồng nghĩa với việc cơ hội việc làm
                    dành cho người tìm việc hà nội là thấp.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Một thực trang chung cho thấy, mọi người sau khi học xong đều muốn ở lại Hà Nội
                    xin việc, điều này làm cho cung không đủ cầu, từ đó dẫn đến tỷ lệ cạnh tranh cao,
                    xin việc phù hợp khó hơn. Hơn nữa còn dẫn đến tình trạng làm trái ngành trái nghề
                    ở một bộ phận không nhỏ người lao động.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc tại hà nội 24h"
                    height={437}
                    className={styles.lazyload}
                    src="/images/nguoi-tim-viec-tai-ha-noi-24h.jpg"
                    width={800}
                />
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Chính vì thế, ban đầu thay vì tìm kiếm những công việc đúng chuyên nganh, đúng với
                    mong ước của bản thân, mọi người nên thử tìm các công việc tạm thời, đòi hỏi ít
                    kinh nghiệm nhưng hãy đổi lại bằng việc được hỏi, được trao đổi, được làm nhiều
                    hơn. Hãy bắt đầu từ những công việc với mức lương thấp hoặc thậm chí là không
                    lương. Đây sẽ là tiền đề giúp bạn có sức bật trong tương lai, chinh phục những
                    công việc hấp dẫn với mức lương cao hơn.
                </span>
            </p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="tphcm">
                <span style={{}}>TPHCM</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Nhắc đến thành phố Hồ Chí Minh không thể không nhắc tới một thị trường sôi động
                    bậc nhất cả nước. Nơi đây có nền kinh tế phát triển, sự nhộn nhịp, đa dạng và
                    phong phú của thị trường việc làm chắc chắn sẽ mang đến những cơ hội việc làm
                    tuyệt vời.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Có thể thị trường việc làm tại thành phố này thích hợp cho tất cả những tầng lớp
                    lao động và rất dễ dàng cho người tìm việc&nbsp;có thể tham gia vào những nhóm
                    việc làm nhất định. Người tìm việc hcm là đối tượng sinh viên có thể dễ dàng tìm
                    được một công việc làm thêm, có được mức thu nhập khá với những việc làm phục vụ
                    tại quán cà phê, làm nhân viên tạp vụ bưng bê nhà hàng.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Dựa trên tình hình và tốc độ phát triển của thành phố Hồ Chí Minh, có thể dễ dàng
                    nhận thấy một vài ngành nghề đang có xu hướng phát triển tốt trong tương lai, thậm
                    chí có những công việc không cần tới bằng cấp, người tìm việc vẫn dễ dàng có được.
                    Chẳng hạn như: việc làm môi giới bất động sản, nhân viên tư vấn bảo hiểm, ngành
                    dịch vụ khách hàng,... Đây chủ yếu là những công việc cần đến tinh thần làm việc,
                    có trách nhiệm và kiên nhẫn. Quan trọng hơn là cần có những kỹ năng như kỹ năng
                    giao tiếp, thuyết phục và sự tự tin.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc tại hcm"
                    height={600}
                    className={styles.lazyload}
                    src="/images/nguoi-tim-viec-tai-hcm.jpg"
                    width={800}
                />
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>&nbsp;</p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="hai-phong">
                <span style={{}}>Hải Phòng</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Người tìm việc tại hải phòng đang có những cơ hội việc làm vô cùng hấp dẫn. Bởi lẽ
                    Hải Phòng đang trên đà tăng trưởng mạnh so với toàn quốc. Có thể nhận thấy rõ rằng
                    thành phố Hải Phòng sẽ nhanh chóng đạt được mục tiêu phát triển thành trung tâm
                    kinh tế vững mạnh.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Chính vì thế mà nhiều cơ hội việc làm Hải phòng được mở ra cho hàng nghìn người
                    đang có nhu cầu tìm việc làm trong giai đoạn hiện nay. Chủ yếu việc làm trong các
                    lĩnh vực như: cơ khí, sản xuất, chế biến, kỹ sư, vận tải, lao động phổ thông,...
                    được nhiều người quan tâm nhất.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Tại Hải Phòng, các doanh nghiệp thường xuyên có sự liên kết hợp tác với các trường
                    đại học, cao đẳng trên địa bàn để tổ chức các hội chợ nghề nghiệp. Phần lớn sinh
                    viên có cơ hội ứng tuyển với các doanh nghiệp ngay tại hội chợ đó. Người tìm việc
                    hải phòng nên tận dụng mọi cơ hội thông qua các hội chợ đó để tạo nên những kết
                    nối vững chắc với phía doanh nghiệp, nhằm giúp mọi người có thể dễ dàng hòa nhịp
                    với thị trường việc làm cạnh tranh như hiện nay.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Trên thực tế nhiều người thường nghĩ rằng không dễ dàng để có được một công việc
                    tốt tại một hội chợ nghề nghiệp nhưng nó cũng không phải là không thể và nếu mọi
                    người nghiêm túc về giá trị công việc mang lại thì chắc chắn nó sẽ rất có giá trị
                    kể cả với những người lần đầu đi xin việc đi chăng nữa.
                </span>
            </p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="da-nang">
                <span style={{}}>Đà Nẵng</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Người tìm việc tại đà nẵng thường có tâm lý ngại đi xa, muốn làm gần nhà, lương
                    cao. Đối với một bộ phận lao động phổ thông thường được các doanh nghiệp tìm kiếm
                    thông qua các trung tâm giới thiệu nhưng kết quả cũng chưa thực sự hiệu quả. Đối
                    với lao động có trình độ, mặc dù có nhiều hình thức tìm việc làm nhưng sự kết nối
                    giữa doanh nghiệp và ứng viên vẫn chưa thực sự cao.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Hầu hết các nhà tuyển dụng luôn yêu cầu người tìm việc&nbsp;cần phải có kinh
                    nghiệm và chuyên môn cao trong một lĩnh vực cụ thể. Chẳng hạn đối với chức danh kế
                    toán thuế thì ứng viên tìm việc&nbsp;phải biết báo cáo thuế, người tìm việc sẽ
                    được nhà tuyển dụng kiểm tra tại chỗ, nếu không đạt sẽ bị loại ngay.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Có một thực tế cho thấy mặc dù cơ hội việc làm tại Đà Nẵng rất nhiều nhưng người
                    lao động lại lười đi tìm việc, tìm việc một cách thụ động, có thể là do hệ quả của
                    công nghệ phát triển, họ chỉ chăm chăm tìm việc thông qua mạng internet và nghĩ
                    chỉ cần thế là đủ mà không chịu tìm hiểu thêm nhiều kênh thông tin uy tín khác.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc đà nẵng"
                    height={531}
                    className={styles.lazyload}
                    src="/images/nguoi-tim-viec-da-nang.JPG"
                    width={800}
                />
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>&nbsp;</p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="binh-duong">
                <span style={{}}>Bình Dương</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Hiện nay, thực trạng sinh viên sau khi tốt nghiệp tìm việc làm tốt và ổn định hay
                    không đều phụ thuộc vào nhiều yếu tố khác nhau như kiến thức chuyên ngành, kỹ năng
                    cá nhân, thành tích,... Chính vì thế hệ thống giáo dục và đào tạo tại Bình Dương
                    hiện nay được chính quyền chú trọng mạnh mẽ và chặt chẽ hơn trước với sự đa dạng
                    các chuyên ngành - tạo cơ hội cho các bạn sinh viên có thể lựa chọn một chuyên
                    ngành thích hợp khi tìm việc làm tại Bình Dương.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Với thị trường lao động rộng mở của Bình Dương, nhiều người tìm việc tại các tỉnh
                    thành khác có xu hướng di cư đến tỉnh để tạo lập sự nghiệp cho bản thân, nhờ vào
                    mức thu nhập cao, ổn định và đời sống vật chất trong khu vực phù hợp với tất cả
                    đối tượng và thành phần trong xã hội. Với đặc thù phát triển kinh tế,
                    những&nbsp;nhà tuyển dụng việc làm&nbsp;tại Bình Dương luôn cố gắng tìm hồ sơ ứng
                    viên xin việc phù hợp nhất, sau đó sàng lọc và tuyển chọn cho công ty của mình.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Hơn nữa, cơ hội việc làm được mở ra nhiều nhất ở các nhóm ngành, cụ thể như: công
                    nghệ thông tin, điện tử, kinh tế, tài chính, quản lý dịch vụ công,... Tuy nhiên,
                    một số nhóm ngành cũng không kém phần nổi trội khác ở địa bàn tỉnh – đó là cơ khí,
                    nông nghiệp, công nghệ sinh học, hóa học, đặc biệt cả nhóm ngành quản trị nhà hàng
                    – khách sạn – lữ hành đang rất phổ biến trong cả nước. Chính vì vậy người tìm việc
                    bình dương không còn nỗi lo về việc làm ở hiện tại và tương lai.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>&nbsp;</p>{' '}
            <h2
                style={{ textAlign: 'justify' }}
                id="nhung-nganh-nghe-dang-pho-bien-doi-voi-nguoi-tim-viec"
            >
                <span style={{}}>Những ngành nghề đang phổ biến đối với người tìm việc?</span>
            </h2>{' '}
            <h3 style={{ textAlign: 'justify' }} id="cong-viec-trong-nha-bep">
                <span style={{}}>Công việc trong nhà bếp</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Trong bối cảnh ngành du lịch đang phát triển, việc đầu tư xây dựng và mở rộng hệ
                    thống khách sạn, nhà hàng, quán ăn đòi hỏi lượng nhân lực ngành bếp tương đương để
                    có thể đáp ứng nhu cầu ẩm thực đa dạng của thực khách. Nghề bếp là nghề đòi hỏi
                    tính nghệ thuật cao, kiên trì, sáng tạo và chắc chắn đem lại mức thu nhập hấp dẫn.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Xu hướng người tìm việc đầu bếp, người tìm việc bếp trưởng hiện nay ngày càng tăng
                    nhất là trong giới trẻ. Cùng với sự phát triển của ngành dịch vụ ăn uống, ẩm thực,
                    nhu cầu tuyển dụng nhân lực đầu bếp tăng cao khiến cho nhiều người lựa chọn nghề
                    bếp để nắm bắt cơ hội việc làm hấp dẫn, dễ xin việc khi ra trường.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc đầu bếp"
                    height={450}
                    className={styles.lazyload}
                    src="https://timviec365.vn/pictures/images/nguoi-tim-viec-dau-bep.JPG"
                    width={800}
                />
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Mức lương có thể dao động 4 đến 6 triệu/tháng đối với người mới ra làm nghề, khi
                    đã có kinh nghiệm và kỹ năng chuyên môn cao sẽ có cơ hội thăng tiến lên các vị trí
                    cao hơn như bếp chính, trưởng ca, bếp phó, bếp trưởng và thu nhập ở những vị trí
                    đó có thể dao động từ 20 đến 40 triệu đồng/tháng.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Học nghề bếp không chỉ bó hẹp với công việc chế biến món ăn mà còn có rất nhiều sự
                    lựa chọn về việc làm khác như mở quán ăn, nhà hàng kinh doanh. Food-stylist,
                    Food-blogger, chuyên viên tư vấn dinh dưỡng… cũng là những công việc liên quan đến
                    ẩm thực tuy khá mới mẻ nhưng thu nhập vô cùng hấp dẫn dành cho các bạn trẻ có đam
                    mê.
                </span>
            </p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="ke-toan">
                <span style={{}}>Kế toán</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Sau khi đã đạt được trình độ kế toán ở các trường đại học hay cao đẳng, người tìm
                    việc kế toán hoàn toàn có thể tham gia khởi nghiệp công việc sự nghiệp của bản
                    thân theo nhiều hướng khá thú vị: có thể làm việc ở bộ phận tài chính như những
                    chuyên gia kế toán hoặc cố vấn tài chính bao gồm kế toán thuế, nhân viên kế toán,
                    kế toán tài sản và kế toán cá nhân.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Người tìm việc kế toán tại hà nội có thể làm việc trong nhiều môi trường, đảm nhận
                    nhiều công việc cụ thể khác nhau: tham dự các cuộc họp với các chuyên gia kế toán
                    và tài chính, giải thích các lựa chọn về thuế cho công ty doanh nghiệp, xem lại
                    các báo cáo tài chính và tài liệu hoặc phân tích dữ liệu tài chính.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Đối với sinh viên mới tốt nghiệp chuyên ngành kế toán tổng hợp có thể đảm nhận các
                    vị trí quan trọng như: kế toán, kiểm toán cấp cao, trưởng phòng kế toán cấp cao,
                    chuyên viên phụ trách ngân hàng, thuế, quỹ,... làm việc với vai trò là nhà cố vấn
                    tài chính, quản lý dự án hay tại các bộ phận giáo dục, chính phủ như thanh tra,
                    giảng viên tài chính, kinh tế,...
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc kế toán"
                    height={531}
                    className={styles.lazyload}
                    src="/images/nguoi-tim-viec-ke-toan.jpg"
                    width={800}
                />
            </p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="giup-viec">
                <span style={{}}>Giúp việc</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Hiện nay xu hướng tìm người giúp việc ngày càng tăng cao. Phần lớn do sự thuận
                    tiện trong cách làm việc của những lao động theo giờ. Tìm người giúp việc để dọn
                    dẹp nhà cửa, văn phòng là những dịch vụ được nhiều người lựa chọn sử dụng nhất.
                    Bởi chi phí cho việc thuê nhân công cố định đôi khi khá cao và công việc dọn dẹp
                    cũng không phải là công việc cần phải làm trong khoảng thời gian 8 hay 10 tiếng.
                    Mỗi lần dọn dẹp theo giờ, chi phí sao động trong khoảng 50 đến 80.000 đồng, trung
                    bình dọn dẹp chỉ mất 1 đến 3 tiếng đồng hồ tùy thuộc vào không gian cần dọn.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Bên cạnh đó, nhu cầu tìm người giúp việc chăm em bé cũng cao nhất là ở các thành
                    phố lớn như Hà Nội, Hồ Chí Minh hay Đà Nẵng. Cuộc sống và công việc bận rộn khiến
                    những người phụ nữ không thể cáng đáng hết công việc nhà, chính vì thế họ lựa chọn
                    cách tìm người giúp việc trông trẻ, đỡ đần những công việc trong gia đình. Tính
                    chất công việc không có gì quá nặng nhọc và vất vả, chỉ cần chăm chỉ, trung thực
                    và khéo léo là có thể đảm nhận một cách tốt.
                </span>
            </p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="lai-xe">
                <span style={{}}>Lái xe</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Người tìm việc lái xe chủ yếu có nhu cầu cao tại các thành phố lớn, nơi có giao
                    thông đi lại nhộn nhịp để phục vụ cho mọi hoạt động trong đời sống. Chẳng hạn{' '}
                </span>{' '}
                <style type="text/css" dangerouslySetInnerHTML={{ __html: '  ' }} />{' '}
                <span
                    data-sheets-userformat='{"2":8403773,"3":{"1":0},"5":{"1":[{"1":2,"2":0,"5":[null,2,0]},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"6":{"1":[{"1":2,"2":0,"5":[null,2,0]},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"7":{"1":[{"1":2,"2":0,"5":[null,2,0]},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"8":{"1":[{"1":2,"2":0,"5":[null,2,0]},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"11":0,"12":0,"14":{"1":2,"2":0},"15":"Calibri, sans-serif","16":11,"26":400}'
                    data-sheets-value='{"1":2,"2":"ngươi tim viec"}'
                    style={{
                        fontSize: '11pt',
                        fontFamily: 'Calibri, Arial',
                        color: 'rgb(0, 0, 0)',
                    }}
                >
                    người tìm việc
                </span>
                <span style={{}}>
                    &nbsp;lái xe tại hà nội thường có xu hướng tìm kiếm công việc như lái xe taxi, lái
                    xe hàng nhỏ, xe chuyển phát nhanh,...
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Công việc lái xe thường đòi hỏi cần phải có chứng chỉ, bằng lái được cấp phép dành
                    cho loại xe phù hợp, có kinh nghiệm đi lại, có thể bình tĩnh trước những tình
                    huống bất ngờ. Không quan trọng bằng cấp như thế nào, đây là ngành nghề ưu tiên
                    đến những người đã có kinh nghiệm hơn.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Lái xe là nghề vất vả chứa nhiều rủi ro, chính vì thế lựa chọn nghề lái xe, nguoi
                    tim viec cần hết sức chú ý giữ sức khỏe và cẩn thận trong việc xử lý tình huống
                    giao thông, tuân thủ đúng luật lệ của luật giao thông đường bộ do nhà nước đề ra,
                    đảm bảo an ninh, an toàn tuyệt đối.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc lái xe"
                    height={539}
                    className={styles.lazyload}
                    src="/images/nguoi-tim-viec-lai-xe(1).jpg"
                    width={800}
                />
            </p>{' '}
            <h3 style={{ textAlign: 'justify' }} id="co-khi">
                <span style={{}}>Cơ khí</span>
            </h3>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Ngành cơ khí luôn đóng vai trò then chốt đối với sự phát triển trong mọi lĩnh vực
                    của nền kinh tế xã hội. Nhu cầu về nhân lực trong ngành này luôn có xu hướng tăng
                    nhanh, tạo nhiều cơ hội việc làm hấp dẫn cho người học.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Khi còn đang theo học trên ghế nhà trường, sinh viên sẽ được trang bị các kiến
                    thức, kỹ năng, gia công, thiết kế và cải tiến các sản phẩm cơ khí, khả năng vận
                    hành, lắp ráp, bảo trì các thiết bị cơ khí, hệ thống cơ khí và giải quyết những
                    vấn đề liên quan đến máy móc, thiết bị trong quy trình sản xuất.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Người tìm việc cơ khí có thể làm việc được ở hầu hết các nhà máy, xí nghiệp chế
                    tạo, lắp ráp, sửa chữa cơ khí, các nhà ga,... Các sở, ban quản lý liên quan đến
                    lịch vực cơ khí như Công Thương, Nông nghiệp và phát triển nông thôn, Xây dựng,
                    Ban quản lý dự án công trình xây dựng,....
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc cơ khí"
                    height={536}
                    className={styles.lazyload}
                    src="	https://timviec365.vn/pictures/images/nguoi-tim-viec-co-khi.jpg"
                    width={800}
                />
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>&nbsp;</p>{' '}
            <h2
                style={{ textAlign: 'justify' }}
                id="tai-sao-noi-timviec365-vn-la-dia-chi-uy-tin-danh-cho-nguoi-tim-viec"
            >
                <span style={{}}>
                    Tại sao nói Timviec365.vn là địa chỉ uy tín dành cho người tìm việc?
                </span>
            </h2>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Trong thời đại công nghệ số như hiện nay, tìm việc làm thông qua mạng trực tuyến
                    trở nên phổ biến hơn cả, được nhiều người lựa chọn sử dụng, một phần bởi vì hiệu
                    quả nhanh chóng mà nó mang lại.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Đối với người cần việc, khi sử dụng website Timviec365.vn sẽ được hỗ trợ tài khoản
                    ứng viên hoàn toàn miễn phí. Sau khi đã hoàn thành các thông tin trong hồ sơ người
                    tìm việc, ứng viên&nbsp;hoàn toàn có thể{' '}
                    <strong>
                        <a href="https://timviec365.vn/cv-xin-viec" target="_blank">
                            <span style={{ color: '#FF0000' }}>tạo CV xin việc</span>
                        </a>
                    </strong>
                    &nbsp;với những mẫu CV mang phong cách&nbsp;chuyên nghiệp, cùng với đó là đơn xin
                    việc, sơ yếu lý lịch để hoàn thiện bộ hồ sơ ứng viên tìm việc, gửi tới nhà tuyển
                    dụng hoặc upload thông tin người tìm việc&nbsp;trực tiếp lên website để quảng bá
                    bản thân tới những nhà tuyển dụng tiềm năng.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'center' }}>
                <Image
                    alt="người tìm việc 24h"
                    height={347}
                    className={styles.lazyload}
                    src="/images/nguoi-tim-viec-24h.JPG"
                    width={800}
                />
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Bên cạnh đó, với tính năng tìm việc làm quanh đây, ứng viên hoàn toàn có thể định
                    vị được những công việc trong bán kính gần nơi mình ở nhất, từ đó lựa chọn được
                    những công việc phù hợp, lên kế hoạch chinh phục nhà tuyển dụng. Ngược lại, nhà
                    tuyển dụng muốn tìm ứng viên xin việc&nbsp;cũng định vị được danh sach nguoi tim
                    viec gần địa chỉ của công ty&nbsp;để lựa chọn ứng viên phù hợp nhất.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Không những thế, trải nghiệm với tính năng ước tính lương giúp mọi người biết được
                    mức lương trung bình của ngành nghề và so sánh mức lương hiện tại của bản thân xem
                    liệu mình đã được hưởng mức lương tương xứng hay chưa. Nhiều ứng viên dựa vào
                    những cơ sở này để có căn cứ đàm phán và thương lượng lương với nhà tuyển dụng
                    trong buổi phỏng vấn đầu tiên.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Tất cả thông tin đăng tuyển và hồ sơ nhà tuyển dụng trên trang đều được kiểm duyệt
                    và xác thực chặt chẽ đảm bảo không có bất kỳ rủi ro nào cho ứng viên khi tìm việc.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Tiết kiệm thời gian với những thao tác sử dụng đơn giản là một trong những ưu điểm
                    giúp Timviec365 trở thành cầu nối giữa ứng viên và nhà tuyển dụng, kiến tạo và góp
                    phần hỗ trợ mọi ứng viên thực hiện được những công việc mơ ước.
                </span>
            </p>{' '}
            <p style={{ textAlign: 'justify' }}>
                <span style={{}}>
                    Với những thông tin hữu ích được chia sẻ trên đây, hy vọng rằng những ai đang có
                    nhu cầu tìm việc làm nên lựa chọn đúng những website uy tín để tìm kiếm cơ hội cho
                    bản thân. Đồng thời cần chủ động thể hiện bản thân khi chinh phục nhà tuyển dụng
                    thì mới tăng khả năng thành công, có được công việc đúng với mong ước.
                </span>
            </p>{' '}
            <blockquote>
                {' '}
                <p style={{ textAlign: 'justify' }}>
                    Tham khảo:{' '}
                    <strong>
                        <a href="https://timviec365.vn/tim-viec-lam-tai-ha-noi.html">
                            Tìm việc làm tại Hà Nội
                        </a>
                    </strong>{' '}
                    với những thông tin tuyển dụng hữu ích, lương hấp dẫn
                </p>
            </blockquote>
        </div>
        <p
            onClick={() => (
                setshowFull(!showFull),
                nameShowFull === '+ Xem thêm'
                    ? setnameShowFull('- Rút gọn')
                    : setnameShowFull('+ Xem thêm')
            )}
            className={styles.bv_foo_more_r}
            style={{fontSize:16}}
        >
            {nameShowFull}
        </p>
    </div>
</div>
  )
}
export default About_nguoi_tim_viec