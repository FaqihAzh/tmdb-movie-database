import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../../components/Movies";
import Hero from "../../components/Hero";
import Category from "../../components/Category";
import { getTrendingAct } from "../../features/actions/movieActions/getTrending";
import { setLoading } from "../../features/reducers/moviesSlice";
import Loader from "../../components/Loader";

const TrendingPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.movies.loading);
  const movies = useSelector((store) => store.movies.movies);
  const isTv = useSelector((store) => store.movies.tv);

  const mediaType = isTv ? "tv" : "movie";

  useEffect(() => {
    dispatch(setLoading(true));
    getTrendingMovies();
  }, [isTv]);

  const getTrendingMovies = () => {
    dispatch(getTrendingAct(mediaType));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Hero />
      <Category />
      <Movies
        title="Trending"
        movies={movies}
        data={{
          first_switch: "Movies",
          second_switch: "TV Series",
        }}
      />
    </div>
  );
};

export default TrendingPage;
