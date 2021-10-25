import React from 'react';
import {Link} from 'react-router-dom';

const Slide = ({ slides }) => {
    return (
        <div className="single_slider bg_cover d-flex align-items-center"
            style={{ backgroundImage: `url(${slides.image})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="slider_content text-center">
                            <h4 className="sub_title animated animatedFadeInUp fadeInUp">{slides.subtitle}</h4>
                            <h2 className="main_title animated animatedFadeInUp fadeInUp" >{slides.maintitle} <span>{slides.maintitlebold}</span></h2>
                            <p className="animated animatedFadeInUp fadeInUp" >{slides.fadeinup}<br />{slides.fadein}</p>
                            <Link to='/about' className="animated animatedFadeInUp fadeInUp"><button className='main-btn'>{slides.fadeLink}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide;
