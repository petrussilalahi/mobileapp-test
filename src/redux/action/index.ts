import {
  ADD_COMMAND,
  TOGGLE_SHOW_MORE,
  ADD_COMMENT,
  DOWNVOTE,
  UPVOTE,
} from '../types';

export const addTodo = (data: any) => ({
  type: ADD_COMMAND,
  data,
});

export const toggleShowMore = (data: any) => ({
  type: TOGGLE_SHOW_MORE,
  data,
});

export const upvote = (data: any) => ({
  type: UPVOTE,
  data,
});

export const downvote = (data: any) => ({
  type: DOWNVOTE,
  data,
});

export const addComment = (data: any) => ({
  type: ADD_COMMENT,
  data,
});
