import React, { useContext } from 'react';
import { BlogContext } from '../../../contexts/BlogContext';
import formatDate from '../../../helpers/formatDate';
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
  const { sortedBlogs } = useContext(BlogContext);
  const sortedList = sortedBlogs.map((item) => {
    const date = item.fields.date;
    let id = item.sys.id;
    let dateArr = formatDate(date);
    return (
      <li key={id}>
        <div className="single_sidebar_post d-flex mt-30">
          <div className="post_image">
            <img src={item.fields.backgroundImage.fields.file.url} alt="blog" />
          </div>
          <div className="post_content media-body">
            <h6 className="title">
              <Link to={`/blog/${id}`}>{item.fields.title}</Link>
            </h6>
            <p className="date">{dateArr[0]}</p>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="sidebar_post mt-30">
      <h5 className="sidebar_title">Latest Posts</h5>
      <ul>{sortedList}</ul>
    </div>
  );
};

export default LatestBlogs;
