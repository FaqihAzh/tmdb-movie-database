import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";

export const getUpcoming = async () => {
  return await axios(ENDPOINTS.UPCOMING);
};

export const getUpcomingTV = async () => {
  return await axios(ENDPOINTS.TV_ON_THE_AIR);
};
