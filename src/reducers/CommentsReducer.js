export const commentReducer = (state, action) => {
  switch (action.type) {
    case 'GET_COMMENTS':
      return [...action.comments];
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          name: action.comment.name,
          email: action.comment.email,
          content: action.comment.content,
          writtenTime: action.comment.writtenTime,
        },
      ];
    default:
      return state;
  }
};
