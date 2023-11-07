import { Link } from "react-router-dom";
import { Movie } from "../../../helpers/interfaces/movie";

interface Props {
  movie: Movie;
}

export const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <Link to={`/movie-details/${movie.id}`} style={{ textDecoration: "none" }}>
      <img
        src={movie.poster_path}
        alt="Poster do filme"
        style={{ width: "100%", height: "260px" }}
      />
      <h2>{movie.title}</h2>
      <h3>{movie.release_date}</h3>
    </Link>
  );
};
