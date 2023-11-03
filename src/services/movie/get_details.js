import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";

export const getDetails = async (mediaType, id) => {
  return await axios(ENDPOINTS.DETAIL_TREND(mediaType, id));
};
