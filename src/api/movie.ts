import axiosInstance from "./axios";

export const getPopularMovies = (
  genres_id: string[] | undefined,
  page: number
) => axiosInstance.get(`movie/popular?with_genres=${genres_id}&page=${page}`);

export const getMovieById = (movie_id: string) =>
  axiosInstance.get(`movie/${movie_id}`);

export const getCreditsMovie = (movie_id: string) =>
  axiosInstance.get(`movie/${movie_id}/credits`);
