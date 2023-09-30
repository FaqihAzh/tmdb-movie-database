import React from "react";
import Button from "../Button";
import Typography from "../Typography";
import ENDPOINTS from "../../utils/constants/endpoint";

const Movie = ({ movie }) => {
  let background;

  if (movie.poster_path || movie.backdrop_path) {
    background = ENDPOINTS.W300_IMAGE(
      movie.poster_path ? movie.poster_path : movie.backdrop_path
    );
  } else {
    background = "https://picsum.photos/300/450";
  }

  return (
    <Button type="link" href={`/movie/${movie.id}`}>
      <div className="relative">
        <div className="movie-container">
          <img src={background} alt={movie.title} className="rounded-xl" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.25}
            stroke="currentColor"
            className="w-16 h-16 stroke-[#e90b0bec] play-icon"
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
        </div>
        {movie.release_date ? (
          <Typography className="bg-yellow-500 px-3 py-1 rounded-2xl w-fit absolute right-2 top-2 opacity-90 text-white text-sm">
            {movie.release_date.substring(0, 4)}
          </Typography>
        ) : null}
        <Typography className="text-white text-sm mb-4 mt-1">
          {movie.title ? movie.title : movie.name}
        </Typography>
      </div>
    </Button>
  );
};

export default Movie;
