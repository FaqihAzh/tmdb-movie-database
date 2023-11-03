import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";

export const getTrending = async (mediaType) => {
  return await axios(ENDPOINTS.TRENDING(mediaType));
};
