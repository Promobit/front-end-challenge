import { AnyAction } from "redux";
import { SELECT_GENRES, SET_GENRES } from "./type";

const initialState = {
  genres: [],
  genresSelected: [],
};

export const genresReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
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
