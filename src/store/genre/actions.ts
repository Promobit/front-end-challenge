import { Genres } from "../../helpers/interfaces/genres";
import { SELECT_GENRES, SET_GENRES } from "./type";

export const setGenres = (genres: Genres[]) => ({
  type: SET_GENRES,
  payload: genres,
});

export const selectGenres = (genres_id: number[]) => ({
  type: SELECT_GENRES,
  payload: genres_id,
});
