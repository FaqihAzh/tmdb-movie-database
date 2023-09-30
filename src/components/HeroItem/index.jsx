import React from "react";
import ENDPOINTS from "../../utils/constants/endpoint";
import Typography from "../Typography";
import Button from "../Button";
import Overlay from "../Overlay";

const HeroItem = ({ movie }) => {
  const background = ENDPOINTS.ORIGINAL_IMAGE(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );

  return (
    <div
      className="py-24 sm:py-36 w-full relative bg-center bg-cover bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Overlay />
      <div className="flex">
        <div className="flex-1 text-white px-4 md:px-24 text-center md:text-left absolute inset-0 flex flex-col justify-center items-center md:items-start gap-6 w-full md:w-3/4 lg:w-3/5">
          <Typography variant="title">
            {movie.title ? movie.title : movie.name}
          </Typography>
          <Typography variant="paragraph">{movie.overview}</Typography>
          <div className="flex relative z-50">
            <Button
              className="hover:scale-105 "
              isPrimary
              type="link"
              href={`/movie/${movie.id}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
              <span>Watch Now</span>
            </Button>
          </div>
        </div>
        <div className="flex-1 hidden lg:flex justify-end items-center relative lg:pr-24">
          <img
            src={ENDPOINTS.W500_IMAGE(movie.poster_path)}
            alt=""
            className="w-72 shadow-custom rounded-xl"
            style={{ zIndex: 10 }}
          />
          <img
            src={ENDPOINTS.W500_IMAGE(movie.poster_path)}
            alt=""
            className="w-72 shadow-custom rounded-xl absolute right-40 -bottom-10 z-0 opacity-50"
            style={{ zIndex: 9 }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
