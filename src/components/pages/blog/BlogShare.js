import React from 'react';
import '../../../assets/styles/BlogShare.css';

function BlogShare() {
  return (
    <div className="blog_details_share d-flex">
      <span>Share :</span>
      <ul className="social">
        <li>
          <a href="www.facebook.com">
            <i className="fa fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="www.twitter.com">
            <i className="fa fa-twitter-square"></i>
          </a>
        </li>
        <li>
          <a href="www.instagram.com">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="www.linkedin.com">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BlogShare;
