import React from 'react';
import AboutBg from '../../../assets/images/about_bg.jpg';
import Bookmark from '../../../assets/images/bookmark.png';

function GroupWorkTitle({item}) {

    return (
        <div>
            <section
                className="courses_details_banner bg_cover"
                style={{backgroundImage: `url(${AboutBg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-9 col-sm-11">
                            <div className="details_banner_content">
                                <h4 className="title">{item.fields.title}</h4>

                                <div className="details_media_wrapper d-flex flex-wrap">
                                    <div className="details_media d-flex align-items-center mt-30">
                                        <div className="media_image">
                                            <img
                                                className="bookmark"
                                                src={Bookmark}
                                                alt="bookmark"
                                            />
                                        </div>
                                        <div className="media_content media-body">
                                            <p>Categories</p>
                                            <h6 className="title">
                                                <li href="#">{item.fields.category}</li>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GroupWorkTitle;
