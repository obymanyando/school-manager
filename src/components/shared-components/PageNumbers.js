import React from 'react';
import '../../assets/styles/pagenumbers.css';
import {NavLink} from "react-router-dom";

const PageNumbers = ({ perPage, totalPosts, paginate }) => {
    const nums = [];
    for(let i = 1; i<= Math.ceil(totalPosts/ perPage); i++) {
        nums.push(i);
    }

    return (
        <>
            <div className="col-lg-12">
                <ul className="pagination justify-content-center">
                    {nums.map((number) => {
                        return <li key={number} className="page-item">
                            <NavLink to="#" className="page__link" activeClassName="active" onClick={() => paginate(number)}  >{number}</NavLink>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}
export default PageNumbers
