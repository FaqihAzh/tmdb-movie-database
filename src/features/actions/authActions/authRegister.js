import { toast } from "react-toastify";
import { CookieKeys, CookieStorage } from "../../../utils/constants/cookies";
import { RegisterUser } from "../../../services/auth/register_user";
import {
  setIsRegistered,
  setToken,
} from "../../reducers/authSlice/authRegister";

export const RegisterAct = (input) => async (dispatch) => {
  return RegisterUser(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsRegistered(true));
      toast.success("Register Success");
      return true;
    })
    .catch((err) => {
      toast.error(err.response.data.message);
      return false;
    });
};
