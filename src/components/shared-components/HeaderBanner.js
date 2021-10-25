/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import '../../assets/styles/header.css';
import 'font-awesome/css/font-awesome.min.css';
import CallImage from '../../assets/images/call.png';
import MailImage from '../../assets/images/mail.png';
import LogoImage from '../../assets/images/logo.png';
import SearchImage from '../../assets/images/search.png';
import TopPageTitle from "./TopPageTitle";

function HeaderBanner(props) {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        active ? setActive(false) : setActive(true);
    }
    const activeClassBtn = active ? 'active' : '';
    const activeClassNav = active ? 'show' : '';
    return (
        <div>
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
                                        <a href="#">
                                            +84 93 748 74 89{' '}
                                        </a>
                                    </li>
                                    <li>
                                        <img
                                            src={MailImage}
                                            alt="mail"
                                        />
                                        <a href="#">
                                            info@example.com
                                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="header_top_login">
                                <ul>
                                    <li>
                                        <Link to='/signup'>
                                            Tạo tài khoản
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/login' className="main-btn">
                                            <i className="fa fa-user-o" />
                                            Đăng nhập
                                        </Link>
                                    </li>
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
                                Happy Readers
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
                                        <NavLink to="/" activeClassName='active' >
                                            Trang chủ
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" activeClassName='active'>
                                            Giới thiệu
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/workshop" activeClassName='active'>
                                            Workshop
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog" activeClassName='active'>
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/group-work" activeClassName='active'>
                                            Nhóm đọc
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/material" activeClassName='active'>
                                            Thư viện
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" activeClassName='active'>
                                            Liên hệ
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar_meta">
                                <ul>
                                    <li>
                                        <a
                                            id="search"
                                            href="#"
                                        >
                                            <img
                                                src={SearchImage}
                                                alt="search"
                                            />
                                        </a>
                                        <div className="search_bar">
                                            <input type="text" placeholder="Search" />
                                            <button>
                                                <i className="fa fa-search" />
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            {/*====== Header PART ENDS ======*/}
            {/*====== Page Banner PART START ======*/}
            {/* TODO: Pass data as props */}
            {/* datas are: title, link, linkActive */}
            <TopPageTitle title={props.title} link={props.link} linkActive={props.linkActive} />
        </div>
    )
}

export default HeaderBanner
