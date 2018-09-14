import * as actionTypes from '../actions';

const initialState = {
  registeringUser: false,
  loggingInUser: false,
  fetchingPosts: false,
  loggingOutUser: false,
  posts: [],
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTERING_USER:
      return {
        ...state,
        registeringUser: true
      };
    case actionTypes.REGISTERED_USER:
      return {
        ...state,
        registeringUser: false,
        error: null
      };
    case actionTypes.LOGGING_IN_USER:
      return {
        ...state,
        loggingInUser: true
      };
    case actionTypes.LOGGED_IN_USER:
      return {
        ...state,
        loggingInUser: false,
        error: null
      };
    case actionTypes.FETCHING_POSTS:
      return {
        ...state,
        fetchingPosts: true
      };
    case actionTypes.FETCHED_POSTS:
      return {
        ...state,
        fetchingPosts: false,
        posts: action.payload,
        error: null
      };
    case actionTypes.LOGGING_OUT_USER:
      return {
        ...state,
        loggingOutUser: true
      };
    case actionTypes.LOGGED_OUT_USER:
      return {
        ...state,
        loggingOutUser: false,
        error: null
      };
    case actionTypes.ERROR:
      return {
        ...state,
        registeringUser: false,
        loggingInUser: false,
        fetchingPosts: false,
        loggingOutUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};
