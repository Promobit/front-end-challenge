import { AnyAction } from "redux";
import { SET_MOVIE, SET_LIST, SET_CASTS, SET_TRAILER } from "./type";

const initialState = {
  list: [],
  movie: false,
  casts: [],
  trailer: false,
};

export const movieReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case SET_CASTS:
      return {
        ...state,
        casts: action.payload,
      };
    case SET_TRAILER:
      return {
        ...state,
        trailer: action.payload,
      };
    default:
      return state;
  }
};
