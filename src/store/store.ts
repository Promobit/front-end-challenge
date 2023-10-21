import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { genresReducer } from "./genre/reducer";

const rootReducer = combineReducers({
  genres: genresReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
