import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const CommentsMeta = ({ writtenTime }) => {
  return (
    <ul className="commtent_meta">
      <li>
        <a href="#">
          <i className="fa fa-clock-o"></i>
          <Moment fromNow>{writtenTime}</Moment>
        </a>
      </li>
    </ul>
  );
};

export default CommentsMeta;
