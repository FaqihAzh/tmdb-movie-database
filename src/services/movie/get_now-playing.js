import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";

export const getNowPlaying = async () => {
  return await axios(ENDPOINTS.NOW_PLAYING);
};

export const getNowPlayingTV = async () => {
  return await axios(ENDPOINTS.TV_AIRING_TODAY);
};
