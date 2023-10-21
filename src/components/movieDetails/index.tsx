import { Jobs, MovieDetail } from "../../helpers/interfaces/movie";
import {
  CreditJobsContent,
  CreditsJobs,
  CustomText,
  MovieDetailsComponent,
  MovieDetailsContent,
  MovieImage,
  MovieInfo,
  SubTitle,
} from "./style";

interface Props {
  movie: MovieDetail;
}
export const MovieDetails: React.FC<Props> = ({ movie }) => {
  return (
    <MovieDetailsComponent>
      <MovieDetailsContent>
        <MovieImage src={movie.poster_path} alt="Poster do filme" />
        <div>
          <h1 style={{ textAlign: "start" }}>{movie.title}</h1>
          <MovieInfo>
            16 anos • {movie.release_date} (BR) •{" "}
            {movie.genres.map((g, index) => (
              <span key={g.id}>
                {g.name} {index !== movie.genres.length - 1 && ", "}
              </span>
            ))}
            • {movie.runtime}
          </MovieInfo>

          <SubTitle>Sinopse</SubTitle>
          <CustomText>{movie.overview}</CustomText>

          <CreditJobsContent>
            {movie.jobs?.map((character: Jobs) => (
              <CreditsJobs>
                <SubTitle>{character.name}</SubTitle>
                <CustomText>{character.job}</CustomText>
              </CreditsJobs>
            ))}
          </CreditJobsContent>
        </div>
      </MovieDetailsContent>
    </MovieDetailsComponent>
  );
};
