import React from 'react';
import GroupWorkSidebar from "./GroupWorkSidebar";

function GroupWorkContent({item}) {

    const reqs = item.fields.reqs.map((req) => {
        return <li key={req.id}>
          <i className="fa fa-check"></i> {req.title}
        </li>
    })
    
    return (
        <section className="courses_details_area pt-80 pb-130">
            <div className="container">
                <div className="row">
                    <GroupWorkSidebar item={item} />
                    <div className="col-lg-8 order-lg-first">
                        <div className="courses_details_content">
                            <div className="single_courses_details  mt-40">
                                <h4 className="courses_details_title">Overview</h4>
                                <p>
                                    {item.fields.overview}
                                </p>
                            </div>
                            <div className="single_courses_details  mt-40">
                                <h4 className="courses_details_title">Specifications</h4>
                                <p>
                                    {item.fields.spec}
                                </p>
                            </div>
                            <div className="single_courses_details  mt-40">
                                <h4 className="courses_details_title">Requirements</h4>
                                <ul>
                                    {reqs}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GroupWorkContent;
