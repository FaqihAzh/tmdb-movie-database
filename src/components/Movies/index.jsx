import React from "react";
import Typography from "../Typography";
import Movie from "../Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import Switch from "../Switch/Switch";
import { Grid } from "swiper/modules";
import SwiperCore from "swiper";

const Movies = ({
  title,
  movies,
  sm,
  md,
  lg,
  cursor,
  swiper,
  link,
  justSwipe,
  data,
  grid,
}) => {
  SwiperCore.use([Grid]);

  const moviesLength = Array.isArray(movies) ? movies.length : 0;
  return (
    <div className="px-4 md:px-24 md:space-y-3 mt-[1rem] md:mt-[3rem]">
      {moviesLength > 0 ? (
        <div className="flex justify-between items-center gap-4">
          <Typography className="font-semibold text-lg md:text-2xl text-white mb-2">
            {title ? title : "Movielist"}
          </Typography>
          {swiper ? (
            justSwipe ? null : (
              <Button
                type="link"
                href={link}
                className="font-medium text-sm text-[#ff0000ec] flex gap-1 items-center mb-2"
              >
                <span>See All Movies</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-[#ff0000ec]"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            )
          ) : (
            data && (
              <div className="flex w-full md:w-1/3 lg:w-1/4 xl:w-1/5 outline outline-1 outline-[#ff0000] rounded-full mb-2">
                <Switch data={data} />
              </div>
            )
          )}
        </div>
      ) : null}

      <div>
        {swiper ? (
          <Swiper
            modules={[Grid]}
            grabCursor={cursor}
            spaceBetween={10}
            slidesPerView={sm}
            grid={{
              rows: grid,
              fill: "row",
            }}
            breakpoints={{
              768: {
                slidesPerView: md,
              },
              1028: {
                slidesPerView: lg,
              },
            }}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Movie movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 items-start">
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
