/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../../components/Movies";
import Hero from "../../components/Hero";
import Category from "../../components/Category";
import { getTopRatedAct } from "../../features/actions/movieActions/getTopRated";
import { setLoading } from "../../features/reducers/moviesSlice";
import Loader from "../../components/Loader";
import { useGetDataUser } from "../../services/auth/get_user";
import { setUser } from "../../features/reducers/authSlice/authLogin";

const TopRatedPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.movies.loading);
  const movies = useSelector((store) => store.movies.movies);
  const isTv = useSelector((store) => store.movies.tv);

  const mediaType = isTv ? "tv" : "movie";
  const { data } = useGetDataUser();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setUser({ data }));
    getTopRatedMovies();
  }, [isTv, data]);

  const getTopRatedMovies = () => {
    dispatch(getTopRatedAct(mediaType));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Hero />
      <Category />
      <Movies
        title="Top Rated "
        movies={movies}
        data={{
          first_switch: "Movies",
          second_switch: "TV Series",
        }}
      />
    </div>
  );
};

export default TopRatedPage;
