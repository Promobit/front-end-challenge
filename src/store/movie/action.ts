import { Cast, Movie, MovieDetail } from "../../helpers/interfaces/movie";
import {
  SET_CASTS,
  SET_LIST,
  SET_MOVIE,
  SET_RECOMMEDATIONS,
  SET_TRAILER,
} from "./type";

export const setList = (movies: Movie[]) => ({
  type: SET_LIST,
  payload: movies,
});

export const setMovie = (movie: MovieDetail) => ({
  type: SET_MOVIE,
  payload: movie,
});

export const setCast = (cast: Cast) => ({
  type: SET_CASTS,
  payload: cast,
});

export const setTrailer = (trailer: string) => ({
  type: SET_TRAILER,
  payload: trailer,
});

export const setRecommendations = (recommendations: []) => ({
  type: SET_RECOMMEDATIONS,
  payload: recommendations,
});
