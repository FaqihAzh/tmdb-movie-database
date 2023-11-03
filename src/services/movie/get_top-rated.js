import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";

export const getTopRated = async (mediaType) => {
  return await axios(ENDPOINTS.TOP_RATED(mediaType));
};
