import React from 'react';
import {Link} from 'react-router-dom';
import shape1 from '../../../assets/images/shape/shape-1.png';
import shape2 from '../../../assets/images/shape/shape-2.png';
import shape3 from '../../../assets/images/shape/shape-3.png';
import shape4 from '../../../assets/images/shape/shape-4.png';
import about1 from '../../../assets/images/hr/about-1.png';
import '../../../assets/styles/main-page-about.css';

const About = () => {
  return (
    <section className="about_area pt-80">
      <img className="shap_1" src={shape1} alt="shape" />
      <img className="shap_2" src={shape2} alt="shape" />
      <img className="shap_3" src={shape3} alt="shape" />
      <img className="shap_4" src={shape4} alt="shape" />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about_content mt-45">
              <h3 className="about_title">
              Chúng mình là những người đọc hạnh phúc
              </h3>
              <p className="text">
              Happy Readers - Câu lạc bộ đọc sách bằng tiếng Anh được thiết kế do nhóm giáo viên Mỹ, Canada, giúp các bé không chỉ trở thành những bạn đọc thật sự (Readers) mà còn là những bạn đọc hạnh phúc (happy).
              </p>
              <p>
              Happy Readers là một cộng đồng đọc sách, cả tiếng Việt và tiếng Anh, dành cho tất cả các bạn nhỏ ở mọi lứa tuổi. Không chỉ cung cấp cho các bạn những giải pháp, công cụ để tiếp cận tri thức một cách tốt nhất, HRs còn hướng đến là nơi kết nối giữa bạn đọc với gia đình.
              </p>
              <Link to='/about' className="main-btn">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_image mt-50">
              <img src={about1} alt="about" className="about_image-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
