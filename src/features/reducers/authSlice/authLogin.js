import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/constants/cookies";

const initialState = {
  token: CookieStorage.get(CookieKeys.AuthToken) || undefined,
  isLogin: "",
  user: "",
};

const authLoginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLogin = { ...state.isLogin, isLogin: action.payload };
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const authLoginReducer = authLoginSlice.reducer;
export const { setToken, setIsLoggedIn, setUser } = authLoginSlice.actions;

export default authLoginReducer;
