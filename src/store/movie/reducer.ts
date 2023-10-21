import { AnyAction } from "redux";
import { SET_MOVIE } from "./type";

const initialState = {
  list: [],
};

export const movieReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
