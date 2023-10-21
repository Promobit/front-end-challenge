import { Movie } from "../../helpers/interfaces/movie";
import { SET_MOVIE } from "./type";

export const setMovie = (movie: Movie[]) => ({
  type: SET_MOVIE,
  payload: movie,
});
