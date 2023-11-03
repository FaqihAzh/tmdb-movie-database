import binarHttp from "../../utils/constants/binarHttp";
import ENDPOINTS from "../../utils/constants/endpoint";

export const RegisterUser = async (input) => {
  return await binarHttp.post(ENDPOINTS.REGISTER, input);
};
