import { Cast } from "../../helpers/interfaces/movie";
import { CardCast, CastListComponent, CastListContent, Title } from "./style";

interface Props {
  cast: Cast[];
}
export const CastList: React.FC<Props> = ({ cast }) => {
  return (
    <CastListComponent>
      <Title>Elenco original</Title>
      <CastListContent>
        {cast.map((cast: Cast) => (
          <CardCast>
            <img src={cast.profile_path} alt="Foto do ator/atriz" />
            <h2>{cast.name}</h2>
            <h3>{cast.character}</h3>
          </CardCast>
        ))}
      </CastListContent>
    </CastListComponent>
  );
};
