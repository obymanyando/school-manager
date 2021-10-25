import React from 'react';
import CommentsMeta from './CommentsMeta';
import Avatar from 'react-avatar';

const CommentsItem = ({ name, content, writtenTime }) => {
  return (
    <li>
      <div className="single_comment d-sm-flex">
        <div className="comment_author">
          <Avatar name={name} size="60" round={true} />
        </div>
        <div className="comment_content media-body">
          <h5 className="author_name">{name}</h5>
          <p>{content}</p>
          <CommentsMeta writtenTime={writtenTime} />
        </div>
      </div>
    </li>
  );
};

export default CommentsItem;
