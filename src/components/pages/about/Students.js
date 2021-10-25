/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../../assets/styles/students.css';

function Students() {

    return (

        <section className="team_area pt-120 pb-130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section_title text-center pb-50">
                            <h3 className="main_title">Những bạn đọc tí hon</h3>
                            <p>Với Happy Readers, các em nhỏ không chỉ học tiếng Anh mà còn rèn luyện khả năng hùng biện, trình bày ý tưởng trước đám đông. Các bạn nhỏ thêm tự tin thể hiện mình, phát huy kỹ năng sống. </p>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 team_col_1">
                        <div className="single_team d-sm-flex flex-wrap align-items-center">
                            <img className="team_arrow" src={require("../../../assets/images/left.png")} alt="left" />
                            <div className="team_image">
                                <img src={require("../../../assets/images/hr/team-1.jpg")} alt="team" />
                            </div>
                            <div className="team_content">
                                <div className="team_content_wrapper">
                                    <h4 className="title"><a href="#">Minh Khôi</a></h4>
                                    <span>Sắp vào lớp 1</span>
                                </div>
                            </div>
                        </div>
                        <div className="single_team d-sm-flex flex-wrap align-items-center flex-row-reverse">
                            <img className="team_arrow" src={require("../../../assets/images/right.png")} alt="left" />
                            <div className="team_image">
                                <img src={require("../../../assets/images/hr/team-3.jpg")} alt="team" />
                            </div>
                            <div className="team_content">
                                <div className="team_content_wrapper">
                                    <h4 className="title"><a href="#">Hải An</a></h4>
                                    <span>3 tuổi rưỡi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 team_col_2">
                        <div className="single_team d-sm-flex flex-wrap align-items-center">
                            <img className="team_arrow" src={require("../../../assets/images/left.png")} alt="left" />
                            <div className="team_image">
                                <img src={require("../../../assets/images/hr/team-2.jpg")} alt="team" />
                            </div>
                            <div className="team_content">
                                <div className="team_content_wrapper">
                                    <h4 className="title"><a href="#">Nam Khoa</a></h4>
                                    <span>Vừa tròn 5 tuổi</span>
                                </div>
                            </div>
                        </div>
                        <div className="single_team d-sm-flex flex-wrap align-items-center flex-row-reverse">
                            <img className="team_arrow" src={require("../../../assets/images/right.png")} alt="left" />
                            <div className="team_image">
                                <img src={require("../../../assets/images/hr/team-4.png")} alt="team" />
                            </div>
                            <div className="team_content">
                                <div className="team_content_wrapper">
                                    <h4 className="title"><a href="#">Vân Anh</a></h4>
                                    <span>8 tuổi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Students
