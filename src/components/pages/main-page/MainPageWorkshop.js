import React from 'react';
import '../../../assets/styles/main-page-workshop.css';
import shape1 from '../../../assets/images/shape/shape-1.png';
import shape2 from '../../../assets/images/shape/shape-2.png';
import shape3 from '../../../assets/images/shape/shape-3.png';
import shape4 from '../../../assets/images/shape/shape-4.png';
import shape5 from '../../../assets/images/shape/shape-5.png';
import RandomWorkshops from "./RandomWorkshops";

const MainPageWorkshop = () => {
    return (
        <section className="courses_area courses_bg pt-120 pb-130">

            <img className="shape-1" src={shape1} alt="shape"/>
            <img className="shape-2" src={shape2} alt="shape"/>
            <img className="shape-3" src={shape3} alt="shape"/>
            <img className="shape-4" src={shape4} alt="shape"/>
            <img className="shape-5" src={shape5} alt="shape"/>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section_title text-center pb-20">
                            <h3 className="main_title">Hoạt Động</h3>
                            <p>Đến với Happy Readers, phụ huynh và các em nhỏ được trải nghiệm nhiều
                                hoạt động bổ ích: học tiếng Anh, học ngữ pháp, dã ngoại ngoài trời,
                                thi đánh vần,...Những hoạt động nhiều màu sắc giúp trẻ chơi mà học,
                                học mà chơi. Bên cạnh nâng cao trình độ tiếng Anh, các em còn hoàn
                                thiện về thể chất, trí tuệ, và kỹ năng sống cho mình.</p>
                        </div>
                    </div>
                </div>
                <RandomWorkshops/>
            </div>
        </section>
    )
}
export default MainPageWorkshop
