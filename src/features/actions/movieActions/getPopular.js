import { getPopular } from "../../../services/movie/get_popular";
import { updateMovie } from "../../reducers/moviesSlice";

export const getPopularAct = (mediaType) => async (dispatch) => {
  return await getPopular(mediaType)
    .then((response) => {
      const movies = response.data.results;

      dispatch(updateMovie(movies));
    })
    .catch((err) => {});
};
