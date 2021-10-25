import React, { useState, useContext } from 'react';
import { NavLink, Link} from "react-router-dom";
import { FirebaseContext } from '../Firebase';
import { AuthContext } from '../../contexts/AuthContext';
import '../../assets/styles/header.css';
import 'font-awesome/css/font-awesome.min.css';
import CallImage from '../../assets/images/call.png';
import MailImage from '../../assets/images/mail.png';
import LogoImage from '../../assets/images/logo.png';

function Header() {
  const firebase = useContext(FirebaseContext);
  let { isLoggedIn } = useContext(AuthContext);


  //===== Mobile Menu
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    active ? setActive(false) : setActive(true);
  };

  const activeClassBtn = active ? 'active' : '';
  const activeClassNav = active ? 'show' : '';

  return (
    <section className="header_area">
      <div className="header_top">
        <div className="container">
          <div className="header_top_wrapper d-flex justify-content-center justify-content-md-between">
            <div className="header_top_info d-none d-md-block">
              <ul>
                <li>
                  <img
                    src={CallImage}
                    alt="call"
                  />
                  <p>
                    +84 93 748 74 89{' '}
                  </p>
                </li>
                <li>
                  <img
                    src={MailImage}
                    alt="mail"
                  />
                  <p>
                    smile@happyreaders.vn
                  </p>
                </li>
              </ul>
            </div>
            <div className="header_top_login">
              <ul>
                {!isLoggedIn && (
                  <li>
                    <Link to='/signup'>
                      Tạo tài khoản
                                            </Link>
                  </li>
                )}
                {isLoggedIn
                  ? (
                    <li>
                      <Link to='/' className="main-btn" onClick={firebase.doSignOut}>
                        <i className="fa fa-user-o" />Sign Out
                                            </Link>
                    </li>
                  )
                  : (
                    <li>
                      <Link to='/login' className="main-btn">
                        <i className="fa fa-user-o" />
                                                Log in
                                            </Link>
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand hr-logo" to="/">
              <img src={LogoImage} alt="logo" />
            </Link>
            <button
              className={`${activeClassBtn} navbar-toggler`}
              onClick={toggleActive}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon" />
              <span className="toggler-icon" />
              <span className="toggler-icon" />
            </button>
            <div
              className={`${activeClassNav} collapse navbar-collapse sub-menu-bar`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li>
                  <NavLink to="/" onClick={toggleActive} activeClassName='active' >
                    Trang chủ
                                        </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={toggleActive} activeClassName='active'>
                    Giới thiệu
                                        </NavLink>
                </li>
                <li>
                  <NavLink to="/workshop" onClick={toggleActive} activeClassName='active'>
                    Workshop
                                        </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" onClick={toggleActive} activeClassName='active'>
                    Blog
                                        </NavLink>
                </li>
                {isLoggedIn && (
                  <li>
                    <NavLink to="/group-work" onClick={toggleActive} activeClassName='active'>
                      Nhóm đọc
                                            </NavLink>
                  </li>
                )}
                {isLoggedIn && (
                  <li>
                    <NavLink to="/material" onClick={toggleActive} activeClassName='active'>
                      Thư viện
                                            </NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/contact" onClick={toggleActive} activeClassName='active'>
                    Liên hệ
                                        </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}
export default Header;
