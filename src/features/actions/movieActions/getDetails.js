import { getDetails } from "../../../services/movie/get_details";
import { updateDetails } from "../../reducers/moviesSlice";

export const getDetailsAct = (mediaType, id) => async (dispatch) => {
  return await getDetails(mediaType, id)
    .then((response) => {
      dispatch(updateDetails(response.data));

      return response.data && true;
    })
    .catch((err) => {
      return err.message && false;
    });
};
