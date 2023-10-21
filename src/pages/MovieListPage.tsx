import { useEffect } from "react";
import { Header, MovieFilter, MovieList } from "../components";
import { useLocation } from "react-router-dom";
import { getFromSearchParams } from "../helpers/functions/utils";
import { useGenres, useMovie } from "../hooks";
import { Pagination } from "../components/shared/pagination";

export const MovieListPage = () => {
  const location = useLocation();
  const {
    handleFetchGenres,
    genres,
    genresSelecteds,
    handleSetGenresSelected,
  } = useGenres();
  const { handleFetchAllMovies, movies, pagination } = useMovie();

  useEffect(() => {
    const genresFromSearch = getFromSearchParams(location.search, "genres");
    const pageFromSearch = getFromSearchParams(location.search, "page");
    handleSetGenresSelected(genresFromSearch);
    handleFetchAllMovies(genresFromSearch, parseInt(pageFromSearch ?? "1"));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  useEffect(() => {
    handleFetchGenres();
  }, []);

  return (
    <>
      <Header />
      <MovieFilter genres={genres} genresSelecteds={genresSelecteds} />
      <MovieList movies={movies} />
      <Pagination
        currentPage={pagination.currentPage}
        totalPage={pagination.totalPages}
      />
    </>
  );
};
