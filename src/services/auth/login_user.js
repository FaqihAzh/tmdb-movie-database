import binarHttp from "../../utils/constants/binarHttp";
import ENDPOINTS from "../../utils/constants/endpoint";

export const LoginUser = async (input) => {
  return await binarHttp.post(ENDPOINTS.LOGIN, input);
};
