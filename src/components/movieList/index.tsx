import { Movie } from "../../helpers/interfaces/movie";
import { MovieCard } from "../shared/movieCard";
import { MovieListComponent, MovieListContent } from "./style";

interface Props {
  movies: Movie[];
}
export const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <MovieListComponent>
      <MovieListContent>
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieListContent>
    </MovieListComponent>
  );
};
