import {
  getNowPlaying,
  getNowPlayingTV,
} from "../../../services/movie/get_now-playing";
import { updateMovie } from "../../reducers/moviesSlice";

export const getNowPlayingAct = () => async (dispatch) => {
  return await getNowPlaying()
    .then((response) => {
      const movies = response.data.results;

      dispatch(updateMovie(movies));
    })
    .catch((err) => {});
};

export const getNowPlayingTvAct = () => async (dispatch) => {
  return await getNowPlayingTV()
    .then((response) => {
      const movies = response.data.results;

      dispatch(updateMovie(movies));
    })
    .catch((err) => {});
};
