import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { genreReducer } from "./genre/reducer";
import { movieReducer } from "./movie/reducer";

const rootReducer = combineReducers({
  genre: genreReducer,
  movie: movieReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
