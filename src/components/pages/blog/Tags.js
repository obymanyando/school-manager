import React, {useContext} from 'react';
import {BlogContext} from "../../../contexts/BlogContext";

const Tags = ({blogs}) => {
    const { dispatch, getAllBlogs } = useContext(BlogContext);
    let tags = new Set();
    blogs.forEach((item) => {
        item.fields.tags.forEach((tag) => {
            tags.add(tag);
        })
    });

    const updateList = (item) => {
        let newList = blogs.filter(blog => blog.fields.tags.includes(item));
        dispatch({ type: 'UPDATE_BLOG_BY_TAG', blogs: newList })
    }
    const tagsArr = [...tags];
    const tagsList = tagsArr.map((item, index) => {
        return <li key={index}><button onClick={() => updateList(item)}>{item}</button></li>
    });
    return (
        <div className="sidebar_tag mt-30">
            <h5 className="sidebar_title">Tags</h5>
            <ul className="archives_tag">
                {tagsList}
                <li><button onClick={() => {getAllBlogs()}}>Display all blogs</button></li>
            </ul>
        </div>
    )
};

export default Tags
