const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const ENDPOINTS = {
  GET_USER: "/api/v1/auth/me",
  REGISTER: "/api/v1/auth/register",
  LOGIN: "/api/v1/auth/login",
  AUTH_GOOGLE: "/api/v1/auth/google",

  TV_ON_THE_AIR: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`,
  TV_AIRING_TODAY: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`,

  NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  UPCOMING: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,

  POPULAR: (mediaType) => {
    return `${BASE_URL}/${mediaType}/popular?api_key=${API_KEY}`;
  },
  TOP_RATED: (mediaType) => {
    return `${BASE_URL}/${mediaType}/top_rated?api_key=${API_KEY}`;
  },
  TRENDING: (mediaType) => {
    return `${BASE_URL}/trending/${mediaType}/day?api_key=${API_KEY}`;
  },
  RECOMMENDATIONS: (id) => {
    return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`;
  },
  SIMILAR: (mediaType, id) => {
    return `${BASE_URL}/${mediaType}/${id}/similar?api_key=${API_KEY}`;
  },
  DETAIL_TREND: (mediaType, id) => {
    return `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&append_to_response=videos`;
  },
  SEARCH: (searchQuery) => {
    return `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
  },

  ORIGINAL_IMAGE: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  W500_IMAGE: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  W300_IMAGE: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
};

export default ENDPOINTS;
