import { getSearch } from "../../../services/movie/get_search";
import { updateMovie } from "../../reducers/moviesSlice";

export const getSearchAct = (searchQuery) => async (dispatch) => {
  return await getSearch(searchQuery)
    .then((response) => {
      const movies = response.data.results;

      dispatch(updateMovie(movies));
      return movies;
    })
    .catch((err) => {});
};
