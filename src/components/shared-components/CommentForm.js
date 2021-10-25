import React, { useContext, useState } from 'react';
import { CommentContext } from '../../contexts/CommentsContext';
import { FirebaseContext } from '../Firebase';

const CommentForm = ({ blogId }) => {
  const { comments, dispatch } = useContext(CommentContext);
  const firebase = useContext(FirebaseContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [writtenTime, setWrittenTime] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      blogId,
      name,
      email,
      content,
      writtenTime: firebase.serverTimestamp(),
    };

    await firebase.cloudDB.collection('Comments').add(data);

    dispatch({
      type: 'ADD_COMMENT',
      comment: { ...data, writtenTime: new Date() },
    });

    setName('');
    setEmail('');
    setContent('');
    setWrittenTime('');
  };

  return (
    <div className="blog_comment_form mt-45">
      <h4 className="blog_details_comment_title pb-15">Leave Comments</h4>
      <form action="#" onSubmit={handleSubmit}>
        <div className="single_form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="single_form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="single_form">
          <textarea
            placeholder="Comments"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="single_form">
          <button className="main-btn">Post Comments</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
