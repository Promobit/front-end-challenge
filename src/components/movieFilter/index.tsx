import { Genres } from "../../helpers/interfaces/genres";
import { SelectButton } from "./components/selectButton";
import {
  GenreList,
  MovieFilterComponent,
  MovieFilterContent,
  TitleComponent,
} from "./style";
import { useNavigate } from "react-router-dom";

interface Props {
  genres: Genres[];
  genresSelecteds: [];
}

export const MovieFilter: React.FC<Props> = ({ genres, genresSelecteds }) => {
  const navigate = useNavigate();

  const handleSelectGenre = (id: number) => {
    const existFilter = genresSelecteds.find((i: number) => i === id);
    if (existFilter) return false;
    navigate(`/?genres=${[...genresSelecteds, id]}`);
  };

  const handleRemoveGenre = (id: number) => {
    let newGenre = genresSelecteds.filter((i: number) => i !== id);
    navigate(`?genres=${[...newGenre]}`);
  };

  return (
    <MovieFilterComponent>
      <MovieFilterContent>
        <TitleComponent>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </TitleComponent>
        <p className="filter_label">Filtre por:</p>
        <GenreList>
          {genres?.map((genre: Genres, id: number) => (
            <SelectButton
              key={genre.id}
              id={genre.id}
              label={genre.name}
              selected={genresSelecteds.find((i: number) => i === genre.id)}
              handleSelect={handleSelectGenre}
              handleRemove={handleRemoveGenre}
            />
          ))}
        </GenreList>
      </MovieFilterContent>
    </MovieFilterComponent>
  );
};
