import { AnyAction } from "redux";
import { SET_MOVIE, SET_LIST } from "./type";

const initialState = {
  list: [],
  movie: false,
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
    default:
      return state;
  }
};
