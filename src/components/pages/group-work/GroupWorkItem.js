import React from 'react';
import '../../../assets/styles/WorkshopItem.css';
import '../../../assets/images/courses-1.jpg';
import { Link } from "react-router-dom";

function GroupWorkItem(props) {
    return (
        <Link className="col-lg-3 col-sm-6" to={`group-work/${props.data.sys.id}`}>
            <div>
                <div className="single_courses courses_gray mt-30">
                    <div className="courses_image">
                        <img src={props.data.fields.imgUrl.fields.file.url} alt='' />
                    </div>
                    <div className="courses_content">
                        <ul className="tag">
                            <li><p>{props.data.fields.category}</p></li>
                        </ul>
                        <h4 className="title"><p>{props.data.fields.title}</p></h4>
                        <div className="meta d-flex justify-content-between">
                            <span>{props.data.fields.status}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GroupWorkItem;
