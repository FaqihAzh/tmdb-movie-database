import { getTrending } from "../../../services/movie/get_trending";
import { updateMovie } from "../../reducers/moviesSlice";

export const getTrendingAct = (mediaType) => async (dispatch) => {
  return await getTrending(mediaType)
    .then((response) => {
      const movies = response.data.results;

      dispatch(updateMovie(movies));
    })
    .catch((err) => {});
};
