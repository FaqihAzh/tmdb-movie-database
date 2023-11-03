import { toast } from "react-toastify";
import { LoginUser } from "../../../services/auth/login_user";
import { CookieKeys, CookieStorage } from "../../../utils/constants/cookies";
import { setIsLoggedIn, setToken } from "../../reducers/authSlice/authLogin";

export const LoginAct = (input) => async (dispatch) => {
  return await LoginUser(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));
      toast.success("Login Success");
      return true;
    })
    .catch((err) => {
      toast.error(err.response.data.message);
      return false;
    });
};

export const LogOut = () => (dispatch) => {
  dispatch(setToken(undefined));
  dispatch(setIsLoggedIn(false));
  CookieStorage.remove(CookieKeys.AuthToken, {
    path: "/",
    expires: new Date(0),
  });
};
