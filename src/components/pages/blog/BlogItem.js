import React from 'react';
import '../../../assets/styles/BlogItem.css';
import {Link} from 'react-router-dom';
import formatDate from "../../../helpers/formatDate";

function BlogItem({data, summary}) {
    const date = data.fields.date;
    const id = data.sys.id;
    const { backgroundImage, author, title } = data.fields;
    let dateArr = formatDate(date);
    return (
        <Link to={`/blog/${id}`}>
        <div className="single_blog_list mt-50">
            <div className="blog_list_image">
                <img src={backgroundImage.fields.file.url} alt="blog"/>
            </div>
            <div className="blog_list_content">
                <span className="date"><span>{dateArr[1]}</span>    {dateArr[2]}</span>
                <div className="blog_content_wrapper">
                    <ul className="blog_meta">
                        <li><p>{author}</p></li>
                        <li><p>{dateArr[0]}</p></li>
                    </ul>
                    <h4 className="blog_title">{title}</h4>
                    <p>{summary}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default BlogItem;
