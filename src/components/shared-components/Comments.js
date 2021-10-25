import React, { useContext, useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentsItem from './CommentsItem';
import { CommentContext } from '../../contexts/CommentsContext';
import { FirebaseContext } from '../Firebase';
import '../../assets/styles/comment.css';

const Comments = ({ blogId }) => {
  const { comments, dispatch } = useContext(CommentContext);
  const firebase = useContext(FirebaseContext);

  // Fetch comments from firebase
  useEffect(() => {
    (async function fetchComments() {
      try {
        let commentsArr = [];

        const snapshot = await firebase.cloudDB.collection('Comments').get();
        await snapshot.forEach((doc) => {
          // Check blogId is matching
          if (doc.data().blogId === blogId) {
            const commentObj = { _id: doc.id, ...doc.data() };
            commentsArr.push(commentObj);
          }
        });
        // Convert firebase timestamp
        // into javascript date object
        commentsArr = commentsArr.map((comment) => {
          let dateObj = comment.writtenTime.toDate();
          // change timestamp to javascript date object
          comment.writtenTime = dateObj;

          return comment;
        });

        // Sort by writtenTime
        commentsArr = commentsArr.sort((a, b) => a.writtenTime - b.writtenTime);

        dispatch({ type: 'GET_COMMENTS', comments: commentsArr });
      } catch (err) {
        console.log('Errors getting Comments doc from firebase ...', err);
      }
    })();
  }, [blogId]);

  return (
    <div className="blog_details_comment">
      <div className="blog_comment_items">
        <h4 className="blog_details_comment_title">
          {`(${comments.length})`} Comments
        </h4>
        <ul>
          {comments.map((comment) => {
            const { blogId, name, content, writtenTime } = comment;
            return (
              <CommentsItem
                key={comment._id}
                blogId={blogId}
                name={name}
                content={content}
                writtenTime={writtenTime}
              />
            );
          })}
        </ul>
      </div>
      <CommentForm blogId={blogId} />
    </div>
  );
};

export default Comments;
