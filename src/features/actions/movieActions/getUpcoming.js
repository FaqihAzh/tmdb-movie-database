import {
  getUpcoming,
  getUpcomingTV,
} from "../../../services/movie/get_upcoming";
import { updateMovie } from "../../reducers/moviesSlice";

export const getUpcomingAct = () => async (dispatch) => {
  return await getUpcoming()
    .then((response) => {
      const movies = response.data.results;

      dispatch(updateMovie(movies));
    })
    .catch((err) => {});
};

export const getUpcomingTvAct = () => async (dispatch) => {
  return await getUpcomingTV()
    .then((response) => {
      const movies = response.data.results;

      dispatch(updateMovie(movies));
    })
    .catch((err) => {});
};
