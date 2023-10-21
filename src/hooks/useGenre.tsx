import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getGenres } from "../api/genre";
import { selectGenres, setGenres } from "../store/genre/actions";

export const useGenres = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const genres = useSelector((state: RootState) => state.genre.list);
  const genresSelecteds = useSelector(
    (state: RootState) => state.genre.genresSelected
  );

  const handleFetchGenres = async () => {
    try {
      setLoading(true);
      const genresResponse = await getGenres();
      if (genresResponse.status !== 200) {
        toast.error("Erro ao buscar gêneros!");
        return false;
      }
      dispatch(setGenres(genresResponse.data.genres));
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao buscar gêneros!");
    }
  };

  const handleSetGenresSelected = async (genres: string | null) => {
    if (genres) {
      const genres_id = genres.split(",").map(Number);
      dispatch(selectGenres(genres_id));
    } else {
      dispatch(selectGenres([]));
    }
  };

  return {
    genres,
    loading,
    handleFetchGenres,
    genresSelecteds,
    handleSetGenresSelected,
  };
};
