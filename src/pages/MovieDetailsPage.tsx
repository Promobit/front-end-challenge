import { useEffect } from "react";
import { useMovie } from "../hooks";
import { useParams } from "react-router-dom";
import {
  CastList,
  Header,
  MovieDetails,
  Recommendations,
  Trailer,
} from "../components";

export const MovieDetailsPage = () => {
  const {
    handleFetchMovieById,
    handleFetchCast,
    handleFetchTrailerMovie,
    handleFetchRecommendationsMovie,
    movie,
    cast,
    trailer,
    recommendations,
  } = useMovie();
  let { id } = useParams();

  useEffect(() => {
    handleFetchMovieById(id);
    handleFetchCast(id);
    handleFetchTrailerMovie(id);
    handleFetchRecommendationsMovie(id);
  }, []);

  return (
    <>
      {movie && cast && recommendations && (
        <>
          <Header />
          <MovieDetails movie={movie} />
          <CastList cast={cast} />
          <Trailer trailer={trailer} />
          <Recommendations movie={recommendations} />
        </>
      )}
    </>
  );
};
