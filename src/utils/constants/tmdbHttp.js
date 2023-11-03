import axios from "axios";

const tmdbHttp = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URL,
  timeout: 30000,
  headers: {
    accept: "Application/json",
    "Content-Type": "Application/json",
  },
});

tmdbHttp.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${process.env.REACT_APP_READ_KEY}`,
  };
  return config;
});

export default tmdbHttp;
