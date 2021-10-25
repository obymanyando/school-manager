import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BackgroundImage from "../../assets/images/hr/testimonial_bg.jpg";
import QuotaImage from "../../assets/images/quota.png";
import '../../assets/styles/testimonial.css';


function Testimonial() {
    const [testimonials] = useState([
        {
            id: 1,
            author: 'Hồng Đức',
            position: 'GĐ Cty Phạm Hiệp',
            children: 'Mẹ Tom Ry',
            content: 'Hai con của mình tham gia Happy Readers ngay từ những ngày đầu. Mình thật sự rất ấn tượng với Happy Readers. Ý tưởng hình thành cho trẻ con thói quen đọc sách và học từ sách khiến mình rất thích thú. Lúc Tom con mình tham gia Happy Readers chỉ mới 3 tuổi. Chủ yếu Tom chạy vòng vòng trong lớp, mình cũng không chắc là có học gì không. Nhưng một thời gian sau, mình rất bất ngờ về khả năng tự đánh vần và nhớ từ vựng của Tom. Cũng không biết là đã học từ khi nào. Những câu chuyện trong sách, có thể đã đọc từ rất lâu nhưng Tom vẫn nhớ. Những mẫu truyện giản dị thôi như cách đánh răng, đi máy bay, khám bệnh,...giúp Tom trưởng thành rất nhiều khi đến một chỗ mới. Mình rất biết ơn HRs. '
        },
        {
            id: 2,
            author: 'Lan Phương',
            position: 'Trưởng phòng kinh doanh',
            children: 'Mẹ Bí Ngô',
            content: 'Bí Ngô nhà mình vốn hay ngại ngùng. Mình cho con tham gia Happy Readers chỉ mong con thêm tự tin khi giao tiếp với các bạn. Bí Ngô rất thích mỗi lần đến sinh hoạt ở Happy Readers. Chắc là được chơi rồi hát hò với các bạn. Quá trình phát triển của con làm mình rất bất ngờ. Bỗng dưng một ngày con mình thể hiện mọi thứ bằng tiếng Anh một cách rất tự nhiên, rồi còn bắt đầu đọc truyện tiếng Anh. Điều bất ngờ là khi đó Bí Ngô mới 5 tuổi và tham gia Happy Readers chưa đầy 1 năm. Mình thật sự bất ngờ với khả năng của trẻ em.'
        },
        {
            id: 3,
            author: 'Anh Phong',
            position: 'GĐ Tài Chính tập đoàn PA',
            children: 'Ba của Nam',
            content: 'Điều mình thích ở Happy Readers nằm ở ý tưởng của CLB. Trong mọi hoạt động mỗi thành viên đều có cơ hội thể hiện mình. Ví dụ một cuộc thi văn nghệ, mỗi em nhỏ đều được lên cầm mic phát biểu một điều gì đó hay trình diễn một tiết mục gì đó. Các em hoàn toàn chủ động và dạng dĩ lên hẳn. Đây là một cách tiếp cận thật sự rất mới và hiện đại. Các hoạt động dã ngoại cũng rất thú vị. Nam được tự tay là tên lửa đồ chơi, rồi đi tìm kho báu,...Dù chỉ là trò chơi thôi nhưng mình nghĩ với tuổi của Nam thì chắc đó là một ký ức tuyệt vời.'
        },
    ])

    const testimonialbg = {
        backgroundImage: `url(${BackgroundImage})`
    };

    const content = testimonials.map(item => {
        return (
            <div key={item.id} className="single_testimonial">
                <p className='testimonial_text'>{item.content}</p>
                <h6 className="name testimonial_name">{item.author}</h6>
                <h6 className='testimonial_author'>{item.position}, {item.children}</h6>
            </div>
        )
    })

    const indicatorStyles = {
        background: 'white',
        display: 'inline-block',
        opacity: 0.4,
        width: '75px',
        height: '75px',
        borderRadius: '50%',
        WebkitTransition: 'all 0.3s linear',
        transition: 'all 0.3s linear',
        color: 'grey',
        lineHeight: '75px',
        textAlign: 'center'
    };

    return (

        <section className="testimonial_area pt-120 pb-100 bg_cover" style={testimonialbg}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="testimonial_title mt-50">
                            <img src={QuotaImage} alt="quota" />
                            <h3 className="title">Phụ huynh chia sẻ</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial_items mt-10">
                            <div className='testimonial_container'>
                                <Carousel
                                    autoPlay={true}
                                    interval={8000}
                                    stopOnHover={true}
                                    infiniteLoop={true}
                                    transitionTime={1000}
                                    showStatus={false}
                                    showThumbs={false}
                                    showArrows={false}
                                    showIndicators={true}
                                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                                        if (isSelected) {
                                            return (
                                                <li
                                                    style={{ ...indicatorStyles, opacity: 1 }}
                                                    aria-label={`Selected: ${label} ${index + 1}`}
                                                    title={`Selected: ${label} ${index + 1}`}
                                                >
                                                    {index + 1}
                                                </li>
                                            )
                                        }
                                        return (
                                            <li
                                                style={indicatorStyles}
                                                onClick={onClickHandler}
                                                onKeyDown={onClickHandler}
                                                value={index}
                                                key={index}
                                                role="button"
                                                tabIndex={0}
                                                title={`${label} ${index + 1}`}
                                                aria-label={`${label} ${index + 1}`}
                                            >
                                                {index + 1}
                                            </li>
                                        )
                                    }}
                                >
                                    {content}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;


