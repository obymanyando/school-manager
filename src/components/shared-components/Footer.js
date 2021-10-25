import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/footer.css';
import FooterBg from '../../assets/images/hr/footer_bg.jpg';
import Call from '../../assets/images/call.png';
import Mail from '../../assets/images/mail.png';

const Footer = () => {
    return (
            <footer className="footer_area">
            <div className="footer_widget bg_cover pt-80 pb-130"
                 style={{backgroundImage: `url(${FooterBg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer_about mt-50">
                                <h5 className="footer_title">Giới thiệu Happy Reader</h5>

                                <p>Công đồng đọc sách giúp trẻ rèn luyện thói quen đọc sách, học từ vựng và phát âm theo
                                    phương pháp của người bản ngữ. Thông qua đọc sách giúp trẻ học tiếng Anh, rèn luyện
                                    kỹ năng sống và nâng cao nhận thức.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer_link mt-50">
                                <h5 className="footer_title">Liên kết</h5>

                                <ul className="link">
                                    <li><Link to='/'>Trang chủ</Link></li>
                                    <li><Link to='/about'>Giới thiệu</Link></li>
                                    <li><Link to='/workshop'>Workshop</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/contact'>Liên hệ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer_link mt-50">
                                <h5 className="footer_title">Cộng đồng Happy Readers</h5>

                                <ul className="link">
                                    <li>Quận Phú Nhuận, TP.HCM</li>
                                    <li>Quận 1, TP.HCM</li>
                                    <li>Quận Bình Thạnh, TP.HCM</li>
                                    <li>Quận Tân Phú, TP.HCM</li>
                                    <li>Quận Gò Vấp, TP.HCM</li>
                                    <li>Quận Thủ Đức, TP.HCM</li>
                                    <li>Quận Tân Bình, TP.HCM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer_logo footer_link mt-50">
                                <h5 className="footer_title">Liên hệ</h5>
                                <ul className="footer_info link">
                                    <li><img src={Call} alt="call"/>+84 93 748 74 89</li>
                                    <li><img src={Mail} alt="mail"/>smile@happyreaders.vn</li>
                                    
                                </ul>
                                <ul className="footer_social">
                                    <li><a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABVElEQVRIie2Uv04CQRCHv92TywUTE1FKG2Jh7CAgLddS+ggUvoC1lS+htYm2Jj4AvSyJlY02FnbacAEsuB0bTM7LCiuIFdPNb38z39z+OVgwut3uho9P/aapMaYJnAEtYHMqj4Ch1rpVq9Ue8zVeUwD0er02cAsUcktFoCgiO646L4AxpgBcOJrPDe3pawJ7swzWWuvSvb5ARCpKfT8updQVcG2tnWitLXC/MEBrHYlIVhoNBoNOHMeTubU+AEeMfJovA/AO5zswxhwAd5kBtoDdjCUFXjK5DYKgXa1Wn/K9nGeglCqLyP6MwQKgkhXSNHXeor/aIkmS5HWVgPc4jj9cC84tGo/HD1EUnTJ9uSJypJQ6zliGwPlXIiLPP5G9fnb9fv9ERC4z0lu9Xi/71K78mq4Ba8A/Aay1SU7K58sBGo3GTRAE22EYlsIwLCVJcugL+AQZHmKPGAomdwAAAABJRU5ErkJggg=="/></a></li>
                                    <li><a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABcElEQVRIie2UvUoDQRRGz90VNSqihSiWm0YIgmRNShUfIm0UC1tLSwWfwsKfNj6Dhdolklhqs6VELBRRUWHmWhjDmITdqAEbP1h2h5l7zmVmWPjPX0fcQblcXhSRoud5gapOA0ONxwdGW2ofAAM8A88icm2tjVT1MJ/Pn7QJKpXKkogcA94vmzae5y1ns9lTXJiIrPQADuBba1c/By5wpgfwNpYrmEwouviGoMlyBWNxFVEUzYvIOnDbhaDJcgWDcRWFQsGEYbibSqUCVd0GXmOWD3QS9HfRGZlM5jGXy235vj8LHH1H8JOkkhb0Od9vJGwTQK1WGzPGbBpjNnA6bUlz+1zBS5ygVCr56XR6zRizA0wk9NFRcE/MTQqC4FxV5xLALgv4egY3CUXdwlHVeifBZbeApIjIVZvAWrvPx9/xtzEisteUuTPVanVBVYuqGgBTwDAw0pgebwHdNd6PwBNQF5EIOAjD8KwHjf6nR3kHIA5l2MspI1wAAAAASUVORK5CYII="/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_copyright">
                <div className="container">
                    <div className="footer_copyright_wrapper text-center d-md-flex justify-content-between">
                        <div className="copyright">
                            <p>Designed & Developed By HAECO</p>
                        </div>
                        <div className="copyright">
                            <p>&copy; Copyrights 2020 Happy Readers All rights reserved. </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer

