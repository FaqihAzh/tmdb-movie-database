import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";

const binarHttp = axios.create({
  baseURL: process.env.REACT_APP_BINAR_BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

binarHttp.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${
      CookieStorage.get(CookieKeys.AuthToken)
        ? CookieStorage.get(CookieKeys.AuthToken)
        : ""
    }`,
  };
  return config;
});

export default binarHttp;
