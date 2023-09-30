import React, { useEffect } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useDispatch, useSelector } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";
import HeroItem from "../HeroItem";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  SwiperCore.use([Autoplay, Pagination]);

  const dispatch = useDispatch();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  async function getTrendingMovies() {
    const response = await axios(ENDPOINTS.TRENDING);
    const movies = response.data.results.slice(1, 6);

    dispatch(updateMovie(movies));
  }

  const movies = useSelector((store) => store.movies.movies);

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
    >
      <>
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <HeroItem movie={movie} />
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default Hero;
