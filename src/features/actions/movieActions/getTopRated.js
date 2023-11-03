import { getTopRated } from "../../../services/movie/get_top-rated";
import { updateMovie } from "../../reducers/moviesSlice";

export const getTopRatedAct = (mediaType) => async (dispatch) => {
  return await getTopRated(mediaType)
    .then((response) => {
      const movies = response.data.results;

      dispatch(updateMovie(movies));
    })
    .catch((err) => {});
};
