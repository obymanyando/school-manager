/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import '../../../assets/styles/sideBar.css';
import LatestBlogs from "./LatestBlogs";
import Tags from "./Tags";
import { BlogContext } from "../../../contexts/BlogContext";

function SideBar({ blogs }) {
    const [value, setValue] = useState('');
    const { getAllBlogs, dispatch } = useContext(BlogContext);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (value === '') {
            getAllBlogs();
        }
        const newArr = blogs.filter(item => item.fields.title.includes(value));
        dispatch({ type: 'FIND_BLOGS_BY_SEARCH', blogs: newArr })
    }
    return (
        <div className="col-lg-4">
            <div className="sidebar mt-50">
                <div className="sidebar_search">
                    <form onSubmit={onSubmitHandler} action="#">
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" />
                        <button><i className="fa fa-search" /></button>
                    </form>
                </div>
                <LatestBlogs />
                <Tags blogs={blogs} />
            </div>
        </div>

    )
}

export default SideBar
