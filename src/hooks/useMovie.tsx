import { toast } from "react-toastify";
import { getCreditsMovie, getMovieById, getPopularMovies } from "../api/movie";
import { useDispatch, useSelector } from "react-redux";
import { setCast, setList, setMovie } from "../store/movie/action";
import { useState } from "react";
import { RootState } from "../store/store";
import { Cast, Movie } from "../helpers/interfaces/movie";
import {
  convertMinutesToHours,
  formatDate,
  formatDateForRelease,
} from "../helpers/functions/utils";

export const useMovie = () => {
  const list = useSelector((state: RootState) => state.movie.list);
  const movie = useSelector((state: RootState) => state.movie.movie);
  const cast = useSelector((state: RootState) => state.movie.casts);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleFetchAllMovies = async (
    genres_id: string | null,
    page: number = 1
  ) => {
    try {
      setLoading(true);
      setCurrentPage(page);

      const movieResponse = await getPopularMovies(genres_id?.split(","), page);
      if (movieResponse.status !== 200) {
        toast.error("Erro ao buscar Filmes!");
        return false;
      }

      movieResponse.data.results.map(
        (movie: Movie) => (
          (movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`),
          (movie.release_date = formatDate(movie.release_date))
        )
      );

      setTotalPages(movieResponse.data.total_pages);
      dispatch(setList(movieResponse.data.results));
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao buscar filmes");
    }
  };

  const handleFetchMovieById = async (movie_id: string | undefined) => {
    try {
      if (movie_id) {
        const movieResponse = await getMovieById(movie_id);
        const credits = (await getCreditsMovie(movie_id)).data;

        movieResponse.data.poster_path = `https://image.tmdb.org/t/p/w500${movieResponse.data.poster_path}`;
        movieResponse.data.release_date = formatDateForRelease(
          movieResponse.data.release_date
        );
        movieResponse.data.runtime = convertMinutesToHours(
          movieResponse.data.runtime
        );

        movieResponse.data.jobs = credits.crew
          .filter(
            (member: any) =>
              member.job === "Comic Book" ||
              member.job === "Director" ||
              member.job === "Screenplay" ||
              member.job === "Writer"
          )
          .map((member: any) => ({
            name: member.name,
            job: member.job,
          }))
          .sort((a: any, b: any) => a.job.localeCompare(b.job));

        dispatch(setMovie(movieResponse.data));
      }
    } catch (error) {
      toast.error("Erro ao buscar informações do filme");
    }
  };

  const handleFetchCast = async (movie_id: string | undefined) => {
    try {
      if (movie_id) {
        const castResponse = (await getCreditsMovie(movie_id)).data;
        castResponse.cast = castResponse.cast.map((cast: Cast) => ({
          name: cast.name,
          character: cast.character,
          profile_path: `https://image.tmdb.org/t/p/w500${cast.profile_path}`,
        }));

        dispatch(setCast(castResponse.cast));
      }
    } catch (error) {
      toast.error("Erro ao buscar elenco do filme!");
    }
  };

  return {
    list,
    movie,
    cast,
    loading,
    pagination: { totalPages, currentPage },
    handleFetchAllMovies,
    handleFetchMovieById,
    handleFetchCast,
  };
};
