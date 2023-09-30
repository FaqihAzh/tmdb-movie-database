import React from "react";
import MoviesList from "../../components/MoviesList";
import ENDPOINTS from "../../utils/constants/endpoint";
import Hero from "../../components/Hero";
import Category from "../../components/Category";

const Home = () => {
  const TRENDING = ENDPOINTS.TRENDING;
  const POPULAR = ENDPOINTS.POPULAR;
  const POPULAR_TV = ENDPOINTS.POPULAR_TV;
  const UPCOMING = ENDPOINTS.UPCOMING;
  const TOP_RATED = ENDPOINTS.TOP_RATED;
  const NOW_PLAYING = ENDPOINTS.NOW_PLAYING;

  return (
    <>
      <Hero />
      <Category />
      <MoviesList
        title="Trending Movies"
        ENDPOINTS={TRENDING}
        sm="2"
        md="3.5"
        lg="6.5"
        cursor="true"
        swiper="true"
        link="/trending"
      />
      <MoviesList
        title="Now Playing Movies"
        ENDPOINTS={NOW_PLAYING}
        sm="2"
        md="3.5"
        lg="6.5"
        cursor="true"
        swiper="true"
        link="/now-playing"
      />
      <MoviesList
        title="Upcoming Movies"
        ENDPOINTS={UPCOMING}
        sm="2"
        md="3.5"
        lg="6.5"
        cursor="true"
        swiper="true"
        link="/upcoming"
      />
      <MoviesList
        title="Popular Movies"
        ENDPOINTS={POPULAR}
        sm="2"
        md="3.5"
        lg="6.5"
        cursor="true"
        swiper="true"
        link="/popular"
      />
      <MoviesList
        title="Top Rated Movies"
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
