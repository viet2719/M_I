import React, { useEffect, useState } from 'react'
import styles from '@/styles/mbti/resuilt.module.scss'
import Image from 'next/image'
import MBTI from './16MBTI'
import Link from 'next/link'
import Social_network from './Social_network'
// import PersonalityButtons from './button'
// import resuilt from './resuilt.json'
interface PersonalityData {
    id: string;
    imgSrc1: string;
    imgSrc2: string;
    imgSrc3: string;
    imgSrc4: string;
    imgSrc5: string;
    personality_name: string;
    link: string;
    overview: string;
    content_children2: string;
    content_children3: string;
    content_children4: string;
}
export default function Resuilt() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    // chưa có api mặc định mở lên id sẽ tự dộng chọn là 1
    useEffect(() => {
        setSelectedId("1");
    }, []);
    const resuilt: PersonalityData[] = [
        {
            id: '1',
            personality_name: 'ISTJ - Người trách nhiệm',
            imgSrc1: '/images/mbti/Tongquan.svg',
            imgSrc2: '/images/mbti/cvphuhop.svg',
            imgSrc3: '/images/mbti/nganhISTJ.svg',
            imgSrc4: '/images/mbti/tongcon.svg',
            imgSrc5: '/images/mbti/img/item1.5.png',

            link: ' ISTJ ',
            overview: 'Những người thuộc nhóm ISTJ thường rất trầm lặng, luôn giữ chữ tín và yêu thích sự an toàn,. Đặc biệt, ISTJ rất giỏi trong việc lập và sắp xếp kế hoạch. Tuy nhiên, nhóm tính cách này thường không dễ dàng đồng cảm với người khác và không thích bày tỏ suy nghĩ, sở thích của bản thân.',
            content_children2: '- Có kiến thức rộng trong nhiều lĩnh vực.- Có trách nhiệm trong công việc.- Bình tĩnh, thực tế và biết cách sắp xếp kế hoạch phù hợp.',
            content_children3: '- Cứng đầu, khó chấp nhận ý tưởng của người khác.- Khó hòa nhập với môi trường mới.- Dễ làm tổn thương người khác.',
            content_children4: '- Thẩm phán.- Thủ lĩnh quân đội.- Luật sư.- Cảnh sát và thám tử.- Quản lý kinh doanh, quản trị và giám đốc điều hành.- Kế toán và nhân viên tài chính.- Lập trình viên, phân tích hệ thống và chuyên gia máy tính,- Bác sĩ, nha sĩ.',
        },
        {
            id: '2',
            personality_name: 'ISFJ - Người nuôi dưỡng',
            imgSrc1: '/images/mbti/img/Group 1000007292.png',
            imgSrc2: '/images/mbti/img/check.png',
            imgSrc3: '/images/mbti/img/image 104.png',
            imgSrc4: '/images/mbti/img/ISFJ2.png',
            imgSrc5: '/images/mbti/img/ISFJCON.png',
            link: 'ISFJ',
            overview: 'ISFJ là nhóm người sống thiên về cảm xúc. Thế giới nội tâm của ISFJ vô cùng phong phú và thích thực hành hơn là học lý thuyết. Ngoài ra, ISFJ còn có khiếu thẩm mỹ cao và thích giúp đỡ mọi người. Tuy nhiên, nhóm người này khá khó hiểu, thường bộc lộ cảm xúc cá nhân ra bên ngoài nhiều hơn. ISFJ thường đề cao bản thân và cần những lời khen tích cực.',
            content_children2: '- Trung thành, chăm chỉ.- Kỹ năng thực hành tốt.- Nhiệt tình, sẵn sàng giúp đỡ và chia sẻ với người khác.- Rất tinh ý và nhạy cảm trước sự thay đổi cảm xúc của người khác.',
            content_children3: '- Vì quá cầu toàn nên ISFJ thường bị quá tải trong công việc. - Khó thích ứng với môi trường mới.- Nhút nhát.- Không tách biệt được công việc và cuộc sống.',
            content_children4: '- Trang trí nội thất. - Căm sóc và phát triển trẻ em.- Nhà thiết kế.- Công tác xã hội, cố vấn.- Y tá.- Trưởng phòng.- Tăng lữ, người làm việc liên quan đến tôn giáo.- Quản lý, quản lý hành chính.- Người quản lý nhà sách, cửa hàng.',
        },
        {
            id: '3',
            personality_name: 'ISFP - Người nghệ sĩ',
            imgSrc1: '/images/mbti/img/nghesi1.png',
            imgSrc2: '/images/mbti/img/cvnghesi1.png',
            imgSrc3: '/images/mbti/img/ngnghesi.png',
            imgSrc4: '/images/mbti/img/nghesi2.png',
            imgSrc5: '/images/mbti/img/cvnghesi2.png',
            link: 'ISFP',
            overview: 'ISFP là người sống theo cảm xúc. Thông thường, ISFP dễ bị cuốn hút bới cái đẹp và luôn hướng tới hành động. Đặc biệt, ISFP là người rất sâu sắc, tốt bụng. Người thuộc nhóm tính cách này thường có tài năng trong lĩnh vực sáng tạo nghệ thuật. Ngoài ra, ISFP không thích lãnh đạo và chỉ dẫn người khác.',
            content_children2: '- Tinh ý, có khả năng nhận ra cảm xúc của người khác.- Rất giỏi trong việc tạo xu hướng, nghĩ ra nhiều ý tưởng táo bạo và độc lạ.- Đam mêm với công việc mà mình yêu thích.',
            content_children3: '- Gặp khó khăn trong việc nghiên cứu khoa học.- Dễ bị tiêu cực khi gặp các cuộc xung đột và hay căng thẳng.- Có lòng tự trọng thấp.',
            content_children4: '- Nhà tâm lý học.- Nhà thiết kế.- Người làm công tác xã hội, cố vấn.- Nghệ sĩ.- Chăm sóc và phát triển trẻ em.- Bác sĩ khoa nhi.- Nghệ sĩ.- Bác sĩ thú y.- Kiểm lâm viên.- Giáo viên.',
        },
        {
            id: '4',
            personality_name: 'ISTP - Nhà cơ học',
            imgSrc1: '/images/mbti/img/cohoc1.png',
            imgSrc2: '/images/mbti/img/item4.2.png',
            imgSrc3: '/images/mbti/img/image 106.png',
            imgSrc4: '/images/mbti/img/item4.4.png',
            imgSrc5: '/images/mbti/img/item4.5.png',
            link: 'ISTP',
            overview: 'Những người thuộc nhóm ISTP luôn muốn tìm hiểu cách vận hành của mọi thứ. ISTP thường thích mạo hiểm và có niềm tin vững vàng với bản thân. Bên cạnh đó, nhóm tính cách này còn là người chăm chỉ, giỏi giải quyết tình huống và đáng tin cậy. Tuy nhiên, ISTP lại thích ở một mình và không thích bị nhận xét, bị đánh giá.',
            content_children2: '- Vui vẻ, tràn đầy năng lượng. - Giỏi giải quyết các tình huống khủng hoảng.- Linh hoạt, đa năng, không nghĩ quá nhiều về tương lai.- Trí tưởng tượng phong phú.',
            content_children3: '- Nếu bị chỉ trích, ISTP rất dễ nổi cáu. - Khó tập trung vào công việc trong thời gian dài.- Không quan tâm đến cảm nhận người khác.- Không thích cam kết.',
            content_children4: '- Cảnh sát và thám tử.- Pháp y.- Thợ cơ khí.- Kỹ sư.- Thợ mộc.- Lập trình viên, chuyên gia phân tích hệ thống, chuyên gia máy tính.- Nhà thầu khoán.- Phi công, tài xế, vận động viên đua xe.- Vận động viên thể dục thể thao.',
        },
        {
            id: '5',
            personality_name: 'INFP - Người lý tưởng hóa',
            imgSrc1: '/images/mbti/img/item5.1.png',
            imgSrc2: '/images/mbti/img/item5.2.png',
            imgSrc3: '/images/mbti/img/item5.3.png',
            imgSrc4: '/images/mbti/img/item5.4.png',
            imgSrc5: '/images/mbti/img/item5.5.png',
            link: 'INFP',
            overview: 'INFP là nhóm người có tính chu đáo, nhiệt tình, thích lắng nghe và thấu hiểu con người. INFP luôn đặt cho công việc các tiêu chuẩn cao. Tuy nhiên, nhóm người tính cách này không thích xung đột và luôn tìm cách né tránh các cuộc cãi vã.',
            content_children2: '- Đam mê, tràn đầy năng lượng.- Luôn hướng tới cuộc sống tốt đẹp, tư tưởng rất thoáng.- Sáng tạo và dễ dàng thấu hiểu ý nghĩa bên trong.',
            content_children3: '- Không giỏi trong việc xử lý dữ liệu. - Dễ mơ mộng và lý tưởng hóa vấn đề.- Tư tưởng cá nhân quá cao nên dễ bị cô lập.',
            content_children4: '- Giáo viên.- Nhà văn.- Nhà tâm lý học.- Nhạc sĩ.- Cố vấn, nhân viên xã hội.- Nhà tâm thần học.- Tăng lữ, người hoạt động tôn giáo.',
        },
        {
            id: '6',
            personality_name: 'INFJ - Người che chở',
            imgSrc1: '/images/mbti/img/item6.1.png',
            imgSrc2: '/images/mbti/img/item6.2.png',
            imgSrc3: '/images/mbti/img/item6.3.png',
            imgSrc4: '/images/mbti/img/item6.4.png',
            imgSrc5: '/images/mbti/img/item6.5.png',
            link: 'INFJ',
            overview: 'INFJ là nhóm người có trực giác rất tốt. Họ thích sắp xếp công việc theo trình tự, có tính kiên nhẫn cao và biết thấu hiểu người khác. Bên cạnh đó, INFJ rất tin tưởng vào bản thân nên họ thích làm việc một mình.',
            content_children2: '- Đối với những điều mà INFJ tin tưởng, họ sẽ làm việc rất chăm chỉ. - Có kỹ năng giao tiếp tốt, phong cách viết rất truyền cảm.- Có trí tưởng tượng phong phú, sâu sắc.- Quyết đoán.',
            content_children3: '- Khó tin tưởng người khác.- Dễ bị tổn thương trược những lời phê bình và xung đột.- Bảo thủ, cứng đầu.',
            content_children4: '- Nhà tâm lý học- Các công việc liên quan đến tôn giáo.- Bác sĩ, nha sĩ.- Kiến trúc, thiết kế.- Giáo viên.- Nhạc sĩ, họa sĩ, nhiếp ảnh.- Các lĩnh vực liên quan đến chăm sóc sức khỏe.- Những người làm công tác xã hội.',
        },
        {
            id: '7',
            personality_name: 'INTJ - Nhà khoa học',
            imgSrc1: '/images/mbti/img/item7.1.png',
            imgSrc2: '/images/mbti/img/item7.2.png',
            imgSrc3: '/images/mbti/img/item7.3.png',
            imgSrc4: '/images/mbti/img/item7.4.png',
            imgSrc5: '/images/mbti/img/item7.5.png',
            link: 'INTJ',
            overview: 'INTJ là nhóm người thường có hoạch định chiến lược cụ thể, tư duy logic. Những người có tính cách này luôn đặt ra những yêu cầu cao về các tổ chức hệ thống và có tư duy mạch lạc nên phù hợp với các vị trí chỉ đạo. Tuy nhiên, INTJ là người có tham vọng lớn, ít quan tâm đến người khác và cũng rất khó để hiểu được họ.',
            content_children2: '- Có khả năng tư duy và áp dụng trong thực tế. - Trí tưởng tượng phong phú.- Thông minh, nhanh nhạy.- Tư tưởng thoáng, quyết đoán trong công việc.',
            content_children3: '- Quá cầu toàn nên dễ gây mâu thuẫn với những người xung quanh. - Không để ý đến cảm xúc nên dễ gây tổn thương cho người khác.',
            content_children4: '- Nhà khoa học. - Nhà hoạch định chiến lược và gây dựng tổ chức công ty.- Lãnh đạo quân đội.- Quản trị kinh doanh, nhà quản lý.- Bác sĩ y khoa, nha sĩ.- Kỹ sư.- Lập trình viên máy tính, nhà phân tích hệ thống và chuyên gia máy tính.- Thẩm phán.- Luật sư.- Giáo sư và giáo viên.',
        },
        {
            id: '8',
            personality_name: 'INTP - Nhà tư duy',
            imgSrc1: '/images/mbti/img/item8.1.png',
            imgSrc2: '/images/mbti/img/item8.2.png',
            imgSrc3: '/images/mbti/img/item8.3.png',
            imgSrc4: '/images/mbti/img/item8.4.png',
            imgSrc5: '/images/mbti/img/item8.5.png',
            link: 'INTP',
            overview: 'INTP là nhóm người có tiềm năng giải quyết vấn đề. Đối với INTP, kiến thức là điều quan trọng nhất. Ngoài ra,, INTP không thích làm lãnh đạo và điều khiển người khác. Nhóm người có tính cách INTP thường rất yêu bản thân và chỉ thích làm việc độc lập.',
            content_children2: '- Trung thực, khách quan và thẳng thắn. - Tư tưởng thoáng, sẵn sàng chấp nhận các ý tưởng khác.- Nhiệt tình với công việc.- Trí tưởng tưởng phong phú và độc đáo.',
            content_children3: '- Dể mất tập trung và bỏ qua các vấn đề xung quanh. - Với các tình huống cần cảm xúc, INTP thường tỏ ra bối rối.- Nhút nhát khi sinh hoạt trong môi trường tập thể.',
            content_children4: '- Chiến lược gia. - Nhà khoa học trong lĩnh vực nghiên cứu vật lí, hóa học.- Nhiếp ảnh gia.- Giáo sư đại học.- Thẩm phán, luật sư.- Chuyên viên thiết lập kỹ thuật.- Lập trình viên, nhà phân tích cấu trúc dữ liệu, người vẽ hoạt hình máy tính và chuyên gia máy tính.- Kỹ sư.- Chuyên viên khám nghiệm hiện trường.',
        },
        {
            id: '9',
            personality_name: 'ENFJ - Người cho đi',
            imgSrc1: '/images/mbti/img/item9.1.png',
            imgSrc2: '/images/mbti/img/item9.2.png',
            imgSrc3: '/images/mbti/img/item9.3.png',
            imgSrc4: '/images/mbti/img/item9.4.png',
            imgSrc5: '/images/mbti/img/item9.5.png',
            link: 'ENFJ',
            overview: 'ENFJ là người có kỹ năng về hùng biện, khóe léo, biết cách đối nhân xử thế. Hơn thế, những người thuộc nhóm người này còn rất giỏi trong việc thiết lập và duy trì mối quan hệ. Bên cạnh đó, nhóm tính cách ENFJ còn là người rất ấm áp và tình cảm. Tuy nhiên, ENFJ thường có xu hướng sống khép kín so với nhứng người hướng ngoại khác.',
            content_children2: '- Biết cách thu hút và giữ sự chú ý với người đối diện.  - Đối với những công việc mà mình thích, ENFJ sẽ rất kiên nhẫn và có trách nhiệm.- Có lòng khoan dung và đồng cảm.',
            content_children3: '- Chính vì quá duy tâm nên ENFJ dễ bị tổn thương và dao động.- Khi phải đưa ra quyết định quan trọng, những người nhóm tính cách ENFJ thường thiếu đi tính quyết đoán.',
            content_children4: '- Nhà tâm lý học.   - Nhà ngoại giao.- Công tác xã hội.- Nhà tư vấn / cố vấn.- Quản lý nhân sự.- Nhà giáo.- Tổ chức sự kiện.- Nhà văn.',
        },
        {
            id: '10',
            personality_name: 'ENFP - Người truyền cảm hứng',
            imgSrc1: '/images/mbti/img/item10.1.png',
            imgSrc2: '/images/mbti/img/item10.2.png',
            imgSrc3: '/images/mbti/img/item10.3.png',
            imgSrc4: '/images/mbti/img/item10.4.png',
            imgSrc5: '/images/mbti/img/item10.5.png',
            link: 'ENFP',
            overview: 'Những người thuộc nhóm ENFP thường rất nhiệt tình, thông minh. ENFP có khả năng thích nghi và tương tác linh hoạt với mọi việc. Tuy nhiên, nhóm người có tính cách này thường dễ bị phân tán bởi những thứ mới lạ xung quanh. Đôi lúc, mọi thứ sẽ trở nên nhạt nhẽo rất nhanh với ENFP',
            content_children2: '- Sẵn sàng thử thách bản thân với những trải nghiệm mới.- Luôn nhiệt huyết và tràn đầy năng lượng trong cuộc sống, công việc.- Biết cách điều hướng các cuộc giao tiếp.',
            content_children3: '- Dễ bị phân tán bởi những thứ xung quanh, khó tập trung vào công việc.  - Thường bị căng thẳng và thiếu kiên nhẫn.- Khó quản trị cảm xúc, dễ phản ứng mạnh mẽ trong các cuộc xung đột và những lời chỉ trích.- Khả năng thực hành không giỏi như lời nói.',
            content_children4: '- Nhà văn, nhà báo, phóng viên.   - Diễn viên.- Chuyên viên tư vấn.- Doanh nhân.- Nhà giáo.- Luật sư.- Nhà nghiên cứu.- Lập trình viên, chuyên gia phân tích hệ thống hoặc chuyên gia máy tính.',
        },
        {
            id: '11',
            personality_name: 'ENTJ - Nhà điều hành',
            imgSrc1: '/images/mbti/img/item11.1.png',
            imgSrc2: '/images/mbti/img/item11.2.png',
            imgSrc3: '/images/mbti/img/item11.3.png',
            imgSrc4: '/images/mbti/img/item11.4.png',
            imgSrc5: '/images/mbti/img/item11.5.png',
            link: 'ENTJ',
            overview: 'Bạn quan tâm đến các bộ biểu mẫu OKRs bao gồm: quy trình áp dụng vào Doanh nghiệp, form check-in OKRs, timeline áp dụng OKRs,… Nhận bộ biểu mẫu OKRs miễn phí ngay bên dưới.Các nhà nghiên cứu chỉ ra rằng nhóm người thuộc ENTJ có khả năng lãnh đạo rất tốt.Người có tính cách ENTJ thường thích giao tiếp, coi trọng sự nghiệp và đi theo chủ nghĩa hoàn hảo.Bên cạnh đó, ENTJ là kiểu người không bị cảm xúc chi phối và không dễ đồng cảm.',
            content_children2: '- Luôn tin tưởng vào năng lực bản thân và không ngần ngại bày tỏ ý kiến. - Có nghị lực và ý chí theo đuổi mục tiêu đến cùng.- Có khả năng tiếp cận vấn đề một cách toàn diện.',
            content_children3: '- Kiêu ngạo và cứng nhắc.  - Là người lý trí, chỉ tập trung vào kết quả mà bỏ qua các yếu tố cảm xúc nên rất dễ làm người khác tổn thương.- Thiếu kiên nhẫn với người có năng suất làm việc kém hơn.',
            content_children4: '- Giám đốc điều hành.  - Cố vấn viên.- Doanh nhân.- Quan tòa, luật sư.- Giảng viên.',
        },
        {
            id: '12',
            personality_name: 'ENTP - Người có tầm nhìn',
            imgSrc1: '/images/mbti/img/item12.1.png',
            imgSrc2: '/images/mbti/img/item12.2.png',
            imgSrc3: '/images/mbti/img/item12.3.png',
            imgSrc4: '/images/mbti/img/item12.4.png',
            imgSrc5: '/images/mbti/img/item12.5.png',
            link: 'ENTP',
            overview: 'ENTP là người thích khám phá và tìm hiểu thế giới xung quanh và có khả năng hiểu được tâm lý con người dựa trên trực giác tốt. Ngoài ra, ENTP rất nhanh nhẹn, giao tiếp tốt và luôn tràn ngập ý tưởng sáng tạo. Tuy nhiên, ENTP lại thích được làm việc tự do mà không có kế hoạch cụ thể.',
            content_children2: '- Nhạy bén, luôn có nhiều ý tưởng.- Nếu đam mê với công việc, ENTP sẽ rất nhiệt tình và tràn đầy năng lượng.- Thích tìm hiểu và học hỏi những điều mới để tích lũy kiến thức.',
            content_children3: '- Có ý tưởng nhưng không giỏi áp dụng vào thực tế. - Hay suy nghĩ rộng, khó tập trung vào một chủ đề nhất định.- Nhanh chóng chán nản.',
            content_children4: '- Cố vấn.  - Luật sư.- Doanh nhân.- Kỹ sư.- Thợ chụp ảnh.- Nhà khoa học.- Diễn viên.- Nhân viên đại diện bán hàng.- Tiếp thị cá nhân.',
        },
        {
            id: '13',
            personality_name: 'ESFJ - Người quan tâm',
            imgSrc1: '/images/mbti/img/item13.1.png',
            imgSrc2: '/images/mbti/img/item13.2.png',
            imgSrc3: '/images/mbti/img/item13.3.png',
            imgSrc4: '/images/mbti/img/item13.4.png',
            imgSrc5: '/images/mbti/img/item13.5.png',
            link: 'ESFJ',
            overview: 'ESFJ là những người ấm áp, biết lắng nghe và thấu kiểu moi người. Tuy nhiên, ESFJ rất dễ bị cảm xúc chi phối nên họ không nên là người quyết định trong các vấn đề quan trọng. Ngoài ra, những người này cũng thường không quan tâm đến sự phân tích phức tạp hay các cuộc thảo luận về nguyên nhân, hậu quả.',
            content_children2: '- Luôn coi trọng và có trách nhiệm với các nhiệm vụ được giao.- Làm tốt các vấn đề thực tế.- Nhạy cảm, biết cách kết nối với mọi người.',
            content_children3: '- Thiếu quyết đoán, cứng nhắc và cổ hủ.- Dễ phát sinh tiêu cực khi yêu cầu bị từ chối.- Nhạy cảm về địa vị xã hội.- ESFJ thường gây mất thiện cảm vì luôn muốn điều khiển những người xung quanh.',
            content_children4: '- Thủ thư, kế toán.  - Chăm sóc sức khỏe tại gia.- Cố vấn, công tác xã hội.- Chăm sóc trẻ em.- Giáo viên.- Y tá.- Trưởng phòng, trợ lý giám đốc.- Kinh doanh hộ gia đình.- Tăng lữ hoặc những việc liên quan đến tôn giáo.',
        },
        {
            id: '14',
            personality_name: 'ESFP - Người trình diễn',
            imgSrc1: '/images/mbti/img/item14.1.png',
            imgSrc2: '/images/mbti/img/item14.2.png',
            imgSrc3: '/images/mbti/img/item14.3.png',
            imgSrc4: '/images/mbti/img/item14.4.png',
            imgSrc5: '/images/mbti/img/item14.5.png',
            link: 'ESFP',
            overview: 'ESFP là người thích những trải nghiệm mới mẻ và luôn muốn làm tâm điểm của sự chú ý. Những người thuộc nhóm tính cách này thường có kỹ năng giao tiếp tốt, lạc quan, có khiếu thẩm mỹ và có nhận thức tốt. Tuy nhiên, ESFP không muốn dành thời gian để tìm hiểu một lý thuyết phức tạp mà luôn dựa vào sự may mắn hoặc nhờ người khác giúp đỡ.',
            content_children2: '- Sẵn sàng bước ra vùng an toàn trải nghiệm những điều mới.- Rất nhạy cảm, dễ dàng nhận ra sự thật.- Có kỹ năng giao tiếp tốt.- Có khiếu về thẩm mỹ.',
            content_children3: '- Dễ mất kiên nhân, khó tập trung làm việc. - Khả năng lập kế hoạch kém.- Dễ đưa bản thân vào trường hợp xấu khi không đạt được những điều như ý.',
            content_children4: '- Tư vấn tâm lý, công tác xã hội.   - Nghệ sĩ, người biểu diễn hay diễn viên.- Thiết kế thời trang.- Chuyên gia tư vấn.- Chăm sóc trẻ.- Đại diện bán hàng.- Trang trí nội thất.- Nhiếp ảnh gia.',
        },
        {
            id: '15',
            personality_name: 'ESTJ -  Người bảo hộ',
            imgSrc1: '/images/mbti/img/item15.1.png',
            imgSrc2: '/images/mbti/img/item15.2.png',
            imgSrc3: '/images/mbti/img/item15.3.png',
            imgSrc4: '/images/mbti/img/item15.4.png',
            imgSrc5: '/images/mbti/img/item15.5.png',
            link: 'ESTJ',
            overview: 'ESTJ là người sống thực tế, cụ thể và luôn gánh vác những trách nhiệm to lớn. Nhóm tính cách ESTJ là kiểu người luôn cố gắng hết mình để hoàn thành nhiệm vụ và tận tâm với công việc. Tuy nhiên, ESTJ thường có xu hướng cô lập bản thân khi bị căng thẳng đè nén.',
            content_children2: '- Khi được giao nhiệm vụ, ESTJ sẽ làm việc rất nghiêm túc và luôn cố gắng hoàn thành.- Thẳng thắn, sống có quy tắc.- Trung thành, kiên nhẫn và đáng tin cậy.',
            content_children3: '- Phản ứng thái quá đối với lỗi sai của người khác. - Luôn quan tâm đến địa vị xã hội.- Đội lúc khá cứng nhắc trong việc xem xét một vấn đề, khô khan.',
            content_children4: '- Quan tòa. - Quản lý.- Lạnh đạo quân đội.- Nhân viên kế toán.- Bán hàng.- Cảnh sát, thám tử.- Nhà giáo.',
        },
        {
            id: '16',
            personality_name: 'ESTP - Người thực thi',
            imgSrc1: '/images/mbti/img/item16.1.png',
            imgSrc2: '/images/mbti/img/item16.2.png',
            imgSrc3: '/images/mbti/img/item16.3.png',
            imgSrc4: '/images/mbti/img/item16.4.png',
            imgSrc5: '/images/mbti/img/item16.5.png',
            link: 'ESTP',
            overview: 'Các nhà khoa học đã chỉ ra rằng ESTP là người rất thẳng thắn và tinh ý trong việc nắm bắt được động cơ hoạt động của người khác. Ngoài ra, ESTP biết cách tạo ra những năng lượng tích cực cho mọi người. Tuy nhiện, ESTP không có trực giác tốt và không thích làm việc trong khuôn khổ.',
            content_children2: '- Thực tế, trung thực và thẳng thắn.- Có kỹ năng kết nối và tương tác với xã hội tốt.- Có tinh thần ham học hỏi và sở hữu nhiều ý tưởng mới.',
            content_children3: '- Gặp khó khăn khi làm các công việc cần độ kiên nhẫn cao.- Thực hiện các quy tắc không nghiêm túc.- Không có cài nhìn tổng quan nên ESTP thường bỏ lỡ những điều quan trọng.',
            content_children4: '- Cảnh sát, thám tử.  - Quan tòa.- Lãnh đạo quân đội.- Quản lý.- Bán hàng.- Quan tòa.- Nhà giáo.- Các ngành nghề trong lĩnh vực thể thao.',
        },




    ]

    return (
        <div>
            <section className={styles.section}>
                {/*==================== Nút chọn loại loại tính cách khi chưa cóa api ==============*/}
                <div className={styles.personalityButtons}>
                    {resuilt.map((personality) => (
                        <button
                            key={personality.id}
                            className={`${styles.personalityButton} ${selectedId === personality.id ? styles.activeButton : styles.inactiveButton}`}
                            onClick={() => setSelectedId(personality.id)}
                        >
                            {personality.personality_name}
                        </button>
                    ))}
                </div>
                {/* <PersonalityButtons personalities={data} selectedId={selectedId} setSelectedId={setSelectedId} /> */}
                {/* ================================================================= */}
                {selectedId && (
                    <div className={styles.selectedPersonalityContent}>
                        {resuilt.map((personality) => (
                            personality.id === selectedId && (
                                <div key={personality.id}>

                                    <div className={styles.resuilt__header}>
                                        <div className={styles.header}>
                                            <h4 className={styles.gr_character}>NHÓM TÍNH CÁCH CỦA BẠN LÀ</h4>
                                            <Image className={styles.tongquan} width={570} height={488} alt='' src={personality.imgSrc1} />
                                            <Image className={styles.tongcon} width={170} height={170} alt='' src={personality.imgSrc4} />
                                            <h4 className={styles.personality_name}>{personality.personality_name}</h4>
                                        </div>
                                    </div>



                                    <div className={styles.suitable_job}>
                                        <Image className={styles.job_tong} width={546} height={210} alt='' src={personality.imgSrc2} />
                                        <Image className={styles.job_con} width={382} height={235} alt='' src={personality.imgSrc5} />
                                    </div>





                                    <main className={styles.main1}>
                                        <div className={styles.children1}>
                                            <span><Link href="/mbti/quiz">Trắc nghiệm tính cách MBTI</Link> &nbsp;/ &nbsp;Nhóm tính cách {personality.link}, tổng quan, nghề nghiệp phù hợp</span>
                                            <div className={styles.overview}>
                                                <div className={styles.title__overview}>
                                                    <h4>TỔNG QUAN</h4>
                                                    <div className={styles.btn}>
                                                        <Link href={'/mbti/quiz'}>
                                                            <button
                                                                className={styles.btn_restart}>
                                                                <Image
                                                                    width={20}
                                                                    height={20
                                                                    } alt=''
                                                                    src='/images/mbti/pen.svg' />
                                                                Làm lại trắc nghiệm
                                                            </button>
                                                        </Link>
                                                        <Social_network />
                                                    </div>
                                                </div>
                                                <p className={styles.content_children1}>
                                                    {personality.overview}
                                                </p>
                                            </div>
                                        </div>
                                    </main>
                                    {/* Hiển thị các ưu điểm */}
                                    <main className={styles.main2}>
                                        <div className={styles.children2}>
                                            <div className={styles.title__overview}>
                                                <h4>Ưu điểm của {personality.link}:</h4>
                                            </div>
                                            <div className={styles.content_children2}>
                                                <ul>
                                                    {personality.content_children2.split('.').map((item, index) => (
                                                        item && <li key={index}>{item.trim()}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </main>
                                    {/* Hiển thị các điểm yếu */}
                                    <main className={styles.main3}>
                                        <div className={styles.children3}>
                                            <div className={styles.title__overview}>
                                                <h4>Nhược điểm của {personality.link}:</h4>
                                            </div>
                                            <div className={styles.content_children3}>
                                                <ul>
                                                    {personality.content_children3.split('.').map((item, index) => (
                                                        item && <li key={index}>{item.trim()}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </main>
                                    {/* Hiển thị nghề nghiệp phù hợp */}

                                    <main className={styles.main4}>
                                        <div className={styles.children4}>
                                            <Image width={1066} height={439} alt='' src={personality.imgSrc3} />
                                            <div className={styles.title__overview}>
                                                <h4>CÁC NGHÀNH NGHỀ PHÙ HỢP VỚI {personality.link}</h4>
                                            </div>
                                            <div className={styles.content_children4}>
                                                <ul>
                                                    {personality.content_children4.split('.').map((item, index) => (
                                                        item && <li key={index}>{item.trim()}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </main>
                                    <div>
                                        <MBTI />
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                )}


            </section>
        </div >
    )
}
