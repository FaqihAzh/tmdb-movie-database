import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../../components/Movies";
import Hero from "../../components/Hero";
import Category from "../../components/Category";
import {
  getUpcomingAct,
  getUpcomingTvAct,
} from "../../features/actions/movieActions/getUpcoming";
import { setLoading } from "../../features/reducers/moviesSlice";
import Loader from "../../components/Loader";
import { useGetDataUser } from "../../services/auth/get_user";
import { setUser } from "../../features/reducers/authSlice/authLogin";

const UpcomingPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.movies.loading);
  const movies = useSelector((store) => store.movies.movies);
  const isTv = useSelector((store) => store.movies.tv);

  const { data } = useGetDataUser();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setUser({ data }));
    getTopRatedMovies();
  }, [isTv, data]);

  const getTopRatedMovies = () => {
    if (isTv) {
      dispatch(getUpcomingTvAct());
    } else {
      dispatch(getUpcomingAct());
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
        title="Upcoming Movies"
        movies={movies}
        data={{
          first_switch: "Movies",
          second_switch: "TV Series",
        }}
      />
    </div>
  );
};

export default UpcomingPage;
