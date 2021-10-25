import React from 'react';
import CountUp from 'react-countup';
import CountIcon1 from '../../../assets/images/count_icon-1.png';
import CountIcon2 from '../../../assets/images/count_icon-2.png';
import CountIcon3 from '../../../assets/images/count_icon-3.png';
import CountIcon4 from '../../../assets/images/count_icon-4.png';
import '../../../assets/styles/counter.css';

class Counters extends React.Component {
  render() {
    return (
      <div className="row counter_wrapper">
        <div className="col-lg-3 col-sm-6 counter_col">
          <div className="single_counter text-center mt-50">
            <div className="counter_icon">
              <div className="icon_wrapper">
                <img src={CountIcon1} alt="Icon" />
              </div>
            </div>
            <div className="counter_content">
              <span className="cont">
                <span className="counter">
                  <CountUp end={8} duration={2.75} />
                </span>
                +
              </span>
              <p>Nhóm đọc</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 counter_col">
          <div className="single_counter text-center mt-50">
            <div className="counter_icon">
              <div className="icon_wrapper">
                <img src={CountIcon2} alt="Icon" />
              </div>
            </div>
            <div className="counter_content">
              <span className="cont">
                <span className="counter">
                  <CountUp end={50} duration={2.75} />
                </span>
                +
              </span>
              <p>Bạn đọc nhí</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 counter_col">
          <div className="single_counter text-center mt-50">
            <div className="counter_icon">
              <div className="icon_wrapper">
                <img src={CountIcon3} alt="Icon" />
              </div>
            </div>
            <div className="counter_content">
              <span className="cont">
                <span className="counter">
                  <CountUp end={400} duration={2.75} />
                </span>
                k
              </span>
              <p>Đầu sách</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 counter_col">
          <div className="single_counter text-center mt-50">
            <div className="counter_icon">
              <div className="icon_wrapper">
                <img src={CountIcon4} alt="Icon" />
              </div>
            </div>
            <div className="counter_content">
              <span className="cont">
                <span className="counter">
                  <CountUp end={3120} duration={2.75} />
                </span>
              </span>
              <p>Giờ học đã diễn ra</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
