import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";

export const getPopular = async (mediaType) => {
  return await axios(ENDPOINTS.POPULAR(mediaType));
};
