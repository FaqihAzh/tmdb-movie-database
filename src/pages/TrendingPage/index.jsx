import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ENDPOINTS from "../../utils/constants/endpoint";
import { updateMovie } from "../../features/moviesSlice";
import Movies from "../../components/Movies";
import Hero from "../../components/Hero";
import Category from "../../components/Category";

const TrendingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  async function getTrendingMovies() {
    const response = await axios(ENDPOINTS.TRENDING);
    const movies = response.data.results;

    dispatch(updateMovie(movies));
  }

  const movies = useSelector((store) => store.movies.movies);

  return (
    <div>
      <Hero />
      <Category />
      <Movies title="Trending Movies" movies={movies} />
    </div>
  );
};

export default TrendingPage;
