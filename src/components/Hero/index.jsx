import React from "react";
import { useSelector } from "react-redux";
import HeroItem from "../HeroItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  SwiperCore.use([Autoplay, Pagination]);

  const dataTrend = useSelector((store) => store.movies.movies);
  const movies = dataTrend.slice(1, 6);

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
