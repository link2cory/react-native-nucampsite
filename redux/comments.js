import * as ActionTypes from "./ActionTypes";

export const comments = (
  state = { isLoading: true, errMess: null, comments: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        comments: action.payload,
      };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      const newComment = { ...action.payload, id: state.comments.length };
      return { ...state, comments: state.comments.concat(newComment) };

    default:
      return state;
  }
};
