const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  TRENDING: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  UPCOMING: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  SEARCH: (searchQuery) =>
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
  RECOMMENDATIONS: (id) => {
    return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`;
  },
  DETAIL_TREND: (id) => {
    return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
  },
  ORIGINAL_IMAGE: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  W500_IMAGE: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  W300_IMAGE: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
};

export default ENDPOINTS;
