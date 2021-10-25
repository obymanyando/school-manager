import React from 'react';

import shape1 from '../../../assets/images/shape/shape-1.png';
import shape2 from '../../../assets/images/shape/shape-2.png';
import shape3 from '../../../assets/images/shape/shape-3.png';
import shape4 from '../../../assets/images/shape/shape-4.png';
import '../../../assets/styles/introduction.css';


function Introduction() {
  return (
    <div>
      <section className="about_area pt-80">
        <img className="shap_1" src={shape1} alt="shape" />
        <img className="shap_2" src={shape2} alt="shape" />
        <img className="shap_3" src={shape3} alt="shape" />
        <img className="shap_4" src={shape4} alt="shape" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_content mt-45">
                <h3 className="about_title">Cộng đồng đọc sách</h3>
                <p className="text">
                  Happy Readers - Câu lạc bộ đọc sách bằng tiếng Anh được thiết
                  kế do nhóm giáo viên Mỹ, Canada với mục đích chính như một
                  cộng đồng kết nối các bậc phụ huynh và các bé, giúp các bé
                  không chỉ trở thành những bạn đọc thật sự (Readers) mà còn là
                  những bạn đọc hạnh phúc (happy).
                </p>
                <p>
                  Như tên gọi, Happy Readers (HRs) được hiểu là những bạn đọc
                  hạnh phúc. Đây là một cộng đồng đọc sách, cả tiếng Việt và
                  tiếng Anh, dành cho tất cả các bạn nhỏ ở mọi lứa tuổi. Không
                  chỉ cung cấp cho các bạn những giải pháp, công cụ để tiếp cận
                  tri thức một cách tốt nhất, HRs còn hướng đến là nơi kết nối
                  giữa bạn đọc - bạn đọc và giữa bạn đọc với gia đình. Chính sự
                  kết nối này, đặc biệt là sự tương tác mỗi ngày giữa ba mẹ và
                  các em mà HRs luôn nhấn mạnh, sẽ giúp các em được đồng hành,
                  chăm sóc, nuôi dưỡng và phát triển một cách tự nhiên và tích
                  cực nhất.
                  <br />
                  <br />
                  Có phụ huynh cho rằng đến HRs để học tiếng Anh, thực chất, HRs
                  không phải là trung tâm Anh ngữ, tuy nhiên, vì tiếng Anh là
                  ngôn ngữ phổ biến của nhiều quốc gia trên thế giới và là chìa
                  khóa hữu hiệu giúp các em dễ dàng hòa nhập với thế giới, bản
                  thân ba mẹ cũng có những mối quan tâm đặc biệt nên HRs có sự
                  hỗ trợ tối đa về ngôn ngữ này.
                  <br />
                  <br />
                  <br />
                  From Happy Readers with &#10084;
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
