import React from 'react';


function WorkshopSidebar({ item }) {

  return (
      <div className="col-lg-4 order-lg-last">
        <div className="courses_details_sidebar">
          <div className="courses_sidebar_image">
            <img
              src={item.fields.imgUrl.fields.file.url}
              alt="courses details"
            />
          </div>
          <div className="courses_sidebar_title">
            <h4 className="title">Course Details</h4>
          </div>
          <div className="courses_sidebar_list">
            <ul className="list">
              <li>
                <i className="fa fa-list"></i> Lịch học
                <span>{item.fields.details.schedule}</span>
              </li>
              <li>
                <i className="fa fa-users"></i> Số lượng
                <span>{item.fields.details.size}</span>
              </li>
              <li>
                <i className="fa fa-globe"></i> Độ tuổi
                <span>{item.fields.details.age}</span>
              </li>
              <li>
                <i className="fa fa-users"></i> Ngôn ngữ
                <span>{item.fields.details.languages}</span>
              </li>
              <li>
                <i className="fa fa-globe"></i> Liên hệ
                <span>{item.fields.details.contact}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default WorkshopSidebar;
