import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../../components/Movies";
import Hero from "../../components/Hero";
import Category from "../../components/Category";
import {
  getNowPlayingAct,
  getNowPlayingTvAct,
} from "../../features/actions/movieActions/getNowPlaying";
import { setLoading } from "../../features/reducers/moviesSlice";
import Loader from "../../components/Loader";

const NowPlayingPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.movies.loading);
  const movies = useSelector((store) => store.movies.movies);
  const isTv = useSelector((store) => store.movies.tv);

  useEffect(() => {
    dispatch(setLoading(true));
    getNowPlayingMovies();
  }, [isTv]);

  const getNowPlayingMovies = () => {
    if (isTv) {
      dispatch(getNowPlayingTvAct());
    } else {
      dispatch(getNowPlayingAct());
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Hero />
      <Category />
      <Movies
        title="Now Playing"
        movies={movies}
        data={{
          first_switch: "Movies",
          second_switch: "TV Series",
        }}
      />
    </div>
  );
};

export default NowPlayingPage;
