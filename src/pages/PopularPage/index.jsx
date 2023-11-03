import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../../components/Movies";
import Hero from "../../components/Hero";
import Category from "../../components/Category";
import { getPopularAct } from "../../features/actions/movieActions/getPopular";
import Loader from "../../components/Loader";
import { setLoading } from "../../features/reducers/moviesSlice";

const PopularPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.movies.loading);
  const movies = useSelector((store) => store.movies.movies);
  const isTv = useSelector((store) => store.movies.tv);

  const mediaType = isTv ? "tv" : "movie";

  useEffect(() => {
    dispatch(setLoading(true));
    getPopularMovies();
  }, [isTv]);

  const getPopularMovies = () => {
    dispatch(getPopularAct(mediaType));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Hero />
      <Category />
      <Movies
        title="What's Popular"
        movies={movies}
        data={{
          first_switch: "Movies",
          second_switch: "TV Series",
        }}
      />
    </div>
  );
};

export default PopularPage;
