import React, { createContext, useReducer } from 'react';
import { commentReducer } from '../reducers/CommentsReducer';

export const CommentContext = createContext();

const CommentContextProvider = (props) => {
  const [comments, dispatch] = useReducer(commentReducer, []);


  return (
    <CommentContext.Provider value={{ comments, dispatch }}>
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
