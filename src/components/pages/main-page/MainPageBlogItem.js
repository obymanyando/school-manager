import React from 'react';
import { Link } from 'react-router-dom';

const MainPageBlogItem = ({ image, dateNum, dateMonth, meta, fullDate, title, item }) => {
    return (
        <div className="col-lg-4 col-md-7">
            <div className="single_blog mt-30">
                <div className="blog_image">
                    <img src={image} alt="blog" />
                </div>
                <div className="blog_content">
                    <span className="date"><span>{dateNum}</span> {dateMonth}</span>

                    <div className="blog_content_wrapper">
                        <ul className="blog_meta">
                            <li><p>{meta}</p></li>
                            <li><p>{fullDate}</p></li>
                        </ul>
                        <h4 className="blog_title"><Link to={`/blog/${item.fields.id}`}>{title}</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPageBlogItem
