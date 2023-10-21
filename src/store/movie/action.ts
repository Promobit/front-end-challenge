import { Movie } from "../../helpers/interfaces/movie";
import { SET_LIST, SET_MOVIE } from "./type";

export const setList = (movies: Movie[]) => ({
  type: SET_LIST,
  payload: movies,
});

export const setMovie = (movie: any) => ({
  type: SET_MOVIE,
  payload: movie,
});
