import React from 'react';
import chooseIcon1 from '../../../assets/images/choose_icon-1.png';
import chooseIcon2 from '../../../assets/images/choose_icon-2.png';
import chooseIcon3 from '../../../assets/images/choose_icon-3.png';
import aboutFrame1 from '../../../assets/images/hr/about-framework.jpg';
import '../../../assets/styles/teaching-methods.css';

import * as Scroll from 'react-scroll';

const TeachingMethods = () => {
  const scrollToTop = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="why_choose_content text-center">
            <div className="section_title pb-20">
              <h3 className="main_title">
                Những điều làm Happy Readers khác biệt
              </h3>
              <p className="text">3 mục tiêu chính mà HRs hướng tới</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="why_choose_content">
            <div className="row">
              <div className="col-lg-4">
                <div className="single_choose mt-30">
                  <div className="choose_icon">
                    <img src={chooseIcon1} alt="Icon" />
                  </div>
                  <div className="choose_content">
                    <h5 className="title">
                      <p onClick={scrollToTop}>
                        Nền tảng ngôn ngữ
                      </p>
                    </h5>
                    <p>
                      Đầu tiên, các bạn nhỏ sẽ được hướng dẫn đọc chủ động từ
                      những hợp âm cơ bản. Khi đã có thể đọc được, các bạn sẽ
                      được tiếp cận sách là chủ yếu. Thông qua quá trình đọc các
                      thể loại sách khác nhau như Phonics, truyện cổ tích,
                      truyện hằng ngày, sách khoa học, kỹ năng sống…, các bạn sẽ
                      phát triển các kỹ năng nghe, đọc để thấm thấu lượng kiến
                      thức, nhân sinh quan bên ngoài, dần dần hình thành nên vốn
                      sống, tri thức của riêng mình (mà biểu hiện cụ thể bên
                      ngoài bằng Nói và Viết).{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single_choose mt-30">
                  <div className="choose_icon">
                    <img src={chooseIcon2} alt="Icon" />
                  </div>
                  <div className="choose_content">
                    <h5 className="title">
                      <p onClick={scrollToTop}>
                        Phương pháp học chủ động
                      </p>
                    </h5>
                    <p>
                      Các hoạt động của HRs đều được xây dựng trên phương pháp
                      học chủ động, cụ thể, người hướng dẫn sẽ hướng dẫn các
                      phương pháp và tạo môi trường để trẻ có thể thực hành thực
                      tế, dần dần hình thành nên sự chủ động, tự tin nơi trẻ.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single_choose mt-30">
                  <div className="choose_icon">
                    <img src={chooseIcon3} alt="Icon" />
                  </div>
                  <div className="choose_content">
                    <h5 className="title">
                      <p onClick={scrollToTop}>
                        Gieo mầm nhân cách
                      </p>
                    </h5>
                    <p>
                      Mục tiêu quan trọng nhất mà HRs muốn hướng tới, chính là
                      góp phần gieo mầm nhân cách cho trẻ. Thông qua các hoạt
                      động đọc sách, làm thí nghiệm, tham quan, vui chơi, rèn
                      luyện, thi đấu thể dục thể thao…, bước đầu góp phần hình
                      thành nên tính cộng đồng trong nhóm đọc, tiến tới kết nối
                      gia đình và sau cùng là hình thành nên cộng đồng ba mẹ lá
                      chắn cho con. Sự tự tin và phát triển của mỗi trẻ theo
                      từng giai đoạn tùy thuộc rất nhiều vào việc mỗi ngày ba mẹ
                      dành thời gian tương tác với trẻ như thế nào.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="mt-45">
            <img
              className="img-center"
              src={aboutFrame1}
              alt="Happy Readers framework"
            />
            <p className="text justify-text mt-30">
              <b>
                HRs tin, mỗi một bé đều là một mầm non với đầy đủ nội lực để
                vươn lên mạnh mẽ nếu được chăm sóc và tưới tắm bằng tất cả sự
                tin tưởng, yêu thương. Giá trị sau cùng mà HRs hướng tới, không
                phải là các chứng chỉ, bằng cấp… mà chính là tình yêu thương, sự
                chia sẻ, tính khích lệ cùng kho kiến thức, kỹ năng tin cậy, an
                toàn và cập nhật - là hành trang quý giá, cần thiết cho bé trên
                hành trình khám phá bản thân và thế giới một cách thật say mê,
                chủ động, sáng tạo.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingMethods;
