import { AnyAction } from "redux";
import { SELECT_GENRES, SET_GENRES } from "./type";

const initialState = {
  list: [],
  genresSelected: [],
};

export const genreReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        list: action.payload,
      };
    case SELECT_GENRES:
      return {
        ...state,
        genresSelected: action.payload,
      };
    default:
      return state;
  }
};
