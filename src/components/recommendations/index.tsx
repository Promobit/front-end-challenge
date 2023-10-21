import { Movie } from "../../helpers/interfaces/movie";
import {
  RecommendationsComponent,
  RecommendationsContent,
  Title,
} from "./style";

interface Props {
  movie: Movie[];
}
export const Recommendations: React.FC<Props> = ({ movie }) => {
  return (
    <RecommendationsComponent>
      <Title>Recomendações</Title>
      <RecommendationsContent>
        {movie.map((movie: Movie) => (
          <a href={`/movie-details/${movie.id}`}>
            <img
              src={movie.poster_path}
              alt="Poster do filme"
              style={{ height: "260px" }}
            />
            <h2>{movie.title}</h2>
            <h3>{movie.release_date}</h3>
          </a>
        ))}
      </RecommendationsContent>
    </RecommendationsComponent>
  );
};
