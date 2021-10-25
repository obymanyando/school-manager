import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '../../../assets/images/hr/slider-1.jpg';
import Slide2 from '../../../assets/images/hr/slider-2.jpg';
import Slide3 from '../../../assets/images/hr/slider-3.jpg';
import Slide from '../main-page/Slide';
import '../../../assets/styles/slider.css';

function Slider () {
    const [slides] = useState([
        {
            id: 1,
            image: Slide1,
            subtitle: 'Chào mừng đến với',
            maintitle: 'Cộng Đồng',
            maintitlebold: 'Happy Readers',
            fadeinup: 'Trẻ em học tiếng Anh, phát triển kỹ năng ',
            fadein: 'và nâng cao nhận thức thông qua việc đọc sách',
            fadeLink: 'Tìm hiểu thêm',
            isFadeInUp: false
        },
        {
            id: 2,
            image: Slide2,
            subtitle: 'Học tiếng Anh ',
            maintitle: 'Như Người',
            maintitlebold: 'Bản Ngữ',
            fadeinup: 'Câu lạc bộ đọc sách tiếng Anh do nhóm giáo viên Mỹ, Canada thiết kế ',
            fadein: 'kết nối gia đình hình thành cộng đồng ba mẹ lá chắn cho con',
            fadeLink: 'Tìm hiểu thêm',
            isFadeInUp: false,
            texteffect: ""
        },
        {
            id: 3,
            image: Slide3,
            subtitle: 'Cùng Happy Readers ',
            maintitle: 'Đọc Sách',
            maintitlebold: 'Học Làm Người',
            fadeinup: 'Thẩm thấu kiến thức, hình thành nhân sinh quan thông qua việc đọc sách ',
            fadein: 'hình thành nên vốn sống, tri thức của riêng mình',
            fadeLink: 'Tìm hiểu thêm',
            isFadeInUp: false
        },
    ])

    const content = slides.map(item => <Slide key={item.id} slides={item} />);

    return (
        <Carousel
            // autoPlay={true}
            // interval={8000}
            // stopOnHover={true}
            // infiniteLoop={true}
            transitionTime={1000}
            showThumbs={false}
            showStatus={false}
            renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                    <span className="arrow-next slick-arrow" >
                        <i className='fa fa-angle-right' onClick={onClickHandler}></i>
                    </span>
                )
            }
            renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                    <span className="arrow-prev slick-arrow">
                    <i className='fa fa-angle-left' onClick={onClickHandler}></i>
                    </span>
                )
            }
            className='slider_container'
        >
            {content}
        </Carousel>
    );
};

export default Slider;

