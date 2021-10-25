import React from 'react';
import '../../assets/styles/top-page-title.css';
import AboutBg from '../../assets/images/hr/about_bg.jpg';
import {Link} from 'react-router-dom';

const TopPageTitle = ({ title, link, linkActive }) => {
    const lower = linkActive.toLowerCase();
    return (
        <section className="page_banner bg_cover" style={{ backgroundImage: `url(${AboutBg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner_content text-center">
                            <h4 className="title">{title}</h4>
                            <ul className="breadcrumb justify-content-center">
                                <li><Link to='/'>{link}</Link></li>
                                <li><Link to={`/${lower}`} className="active">{linkActive}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopPageTitle;
