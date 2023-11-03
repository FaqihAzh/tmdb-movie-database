import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";

export const getSearch = async (searchQuery) => {
  return await axios.get(ENDPOINTS.SEARCH(searchQuery));
};
