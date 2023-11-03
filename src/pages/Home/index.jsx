import React, { useEffect } from "react";
import MoviesList from "../../components/MoviesList";
import ENDPOINTS from "../../utils/constants/endpoint";
import Hero from "../../components/Hero";
import Category from "../../components/Category";
import Loader from "../../components/Loader";
import { setLoading } from "../../features/reducers/moviesSlice";
import { getTrendingAct } from "../../features/actions/movieActions/getTrending";
import Switch from "../../components/Switch/Switch";
import { useGetDataUser } from "../../services/auth/get_user";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/reducers/authSlice/authLogin";

const Home = () => {
  const isTv = useSelector((store) => store.movies.tv);
  const mediaType = isTv ? "tv" : "movie";

  const TRENDING = ENDPOINTS.TRENDING(mediaType);
  const POPULAR = ENDPOINTS.POPULAR(mediaType);
  const UPCOMING = isTv ? ENDPOINTS.TV_ON_THE_AIR : ENDPOINTS.UPCOMING;
  const TOP_RATED = ENDPOINTS.TOP_RATED(mediaType);
  const NOW_PLAYING = isTv ? ENDPOINTS.TV_AIRING_TODAY : ENDPOINTS.NOW_PLAYING;

  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.movies.loading);

  const { data } = useGetDataUser();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setUser({ data }));
    getTrendingMovies();
  }, [isTv, data]);

  const getTrendingMovies = () => {
    dispatch(getTrendingAct(mediaType));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <Category />
      <div className="w-full px-4 md:px-24 mt-8">
        <div className="flex w-full outline outline-1 outline-[#ff0000] rounded-full">
          <Switch
            data={{
              first_switch: "Movies",
              second_switch: "TV Series",
            }}
          />
        </div>
      </div>
      <MoviesList
        title="Trending"
        ENDPOINTS={TRENDING}
        sm="2.5"
        md="3.5"
        lg="6.5"
        cursor="true"
        swiper="true"
        link="/trending"
      />
      <MoviesList
        title="Now Playing"
        ENDPOINTS={NOW_PLAYING}
        sm="2.5"
        md="3.5"
        lg="6.5"
        cursor="true"
        swiper="true"
        link="/now-playing"
      />
      <MoviesList
        title="Upcoming"
        ENDPOINTS={UPCOMING}
        sm="2.5"
        md="3.5"
        lg="6.5"
        cursor="true"
        swiper="true"
        link="/upcoming"
      />
      <MoviesList
        title="What's Popular"
        ENDPOINTS={POPULAR}
        sm="2.5"
        md="3.5"
        lg="6.5"
        cursor="true"
        swiper="true"
        link="/popular"
      />
      <MoviesList
        title="Top Rated"
        ENDPOINTS={TOP_RATED}
        sm="2"
        md="3"
        lg="5"
        cursor="true"
        swiper="true"
        link="/top-rated"
      />
    </>
  );
};

export default Home;
