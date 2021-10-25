import React from 'react';
import '../../../assets/styles/top-page-title.css';
import AboutBg from '../../../assets/images/about_bg.jpg';

const TopPageTitle = ({ title, link, linkActive }) => {
  return (
    <section
      className="page_banner bg_cover"
      style={{ backgroundImage: `url(${AboutBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_content text-center">
              {/* <h4 className="title">{title}</h4> */}
              <h4 className="title">Giới thiệu Happy Readers</h4>
              <ul className="breadcrumb justify-content-center">
                <li>
                  {/* <a href="#">{link}</a> */}
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  {/* <a className="active" href="#">
                    {linkActive}
                  </a> */}
                  <a className="active" href="#">
                    Giới thiệu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPageTitle;
