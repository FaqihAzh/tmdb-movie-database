import { combineReducers } from "redux";
import authLoginReducer from "./authSlice/authLogin";
import moviesReducer from "./moviesSlice";
import authRegisterReducer from "./authSlice/authRegister";

const rootReducers = combineReducers({
  authLogin: authLoginReducer,
  authRegister: authRegisterReducer,
  movies: moviesReducer,
});

export default rootReducers;
